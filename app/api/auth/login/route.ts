import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";

const loginSchema = z.object({
  email: z.string().trim().email("A valid email is required"),
  password: z.string().min(1, "Password is required"),
  recaptchaToken: z.string().optional(),
});

async function verifyRecaptcha(token: string | undefined) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  // If not configured, bypass verification in dev environments gracefully
  if (!secretKey) {
    console.warn("RECAPTCHA_SECRET_KEY is not defined. Skipping verification.");
    return true;
  }
  if (!token) return false;

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${token}`,
      }
    );
    const result = await response.json();
    return result.success && result.score >= 0.5;
  } catch (error) {
    console.error("reCAPTCHA validation failed:", error);
    return false;
  }
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";

  try {
    const body = await request.json();
    const result = loginSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input fields", issues: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { email, password, recaptchaToken } = result.data;

    // 1. Rate Limiting: Check failed attempts in the last 15 minutes
    const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000);
    const failedAttempts = await prisma.loginAttempt.count({
      where: {
        ip,
        success: false,
        attemptedAt: {
          gte: fifteenMinutesAgo,
        },
      },
    });

    if (failedAttempts >= 5) {
      return NextResponse.json(
        { error: "Too many failed login attempts. Please try again in 15 minutes." },
        { status: 429 }
      );
    }

    // 2. Google reCAPTCHA Verification
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    // 3. Supabase Auth Sign In
    const supabase = await createClient();
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError || !authData.user) {
      // Record failed attempt
      await prisma.loginAttempt.create({
        data: {
          ip,
          email,
          success: false,
        },
      });

      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 400 }
      );
    }

    // 4. Role Authorization: Verify they are an admin
    const profile = await prisma.profile.findUnique({
      where: { id: authData.user.id },
    });

    if (!profile || profile.role !== "ADMIN") {
      // Record failed attempt and sign out
      await prisma.loginAttempt.create({
        data: {
          ip,
          email,
          success: false,
        },
      });
      await supabase.auth.signOut();

      return NextResponse.json(
        { error: "Access denied. Only administrators are allowed." },
        { status: 403 }
      );
    }

    // Record successful attempt
    await prisma.loginAttempt.create({
      data: {
        ip,
        email,
        success: true,
      },
    });

    return NextResponse.json({ message: "Authenticated successfully." });
  } catch (error) {
    console.error("Login endpoint failed:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
