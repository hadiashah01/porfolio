import { createClient } from "@supabase/supabase-js";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing Supabase URL or Service Role Key in environment variables.");
  process.exit(1);
}

// Create standard client with service role key to bypass email verification and sign-in checks
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

// Since the script runs in the Node.js CLI environment, we initialize Prisma client with the adapter
const connectionString = process.env.DIRECT_URL ?? process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const email = "admin@hadia.dev";
  const password = "AdminSecurePassword123!"; // Strong, default secure password

  console.log(`Checking if admin user ${email} exists...`);

  const existingProfile = await prisma.profile.findFirst({
    where: { role: "ADMIN" },
  });

  if (existingProfile) {
    console.log(`Admin profile already exists with ID: ${existingProfile.id}`);
    return;
  }

  console.log("Creating admin user in Supabase auth...");
  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (authError) {
    console.error("Error creating auth user:", authError.message);
    return;
  }

  const userId = authData.user?.id;
  if (!userId) {
    console.error("Auth user created but no ID returned.");
    return;
  }

  console.log(`Auth user created successfully with ID: ${userId}`);

  console.log("Creating matching profile record in database...");
  const profile = await prisma.profile.create({
    data: {
      id: userId,
      email,
      role: "ADMIN",
    },
  });

  console.log(`Admin profile created successfully in database:`, profile);
  console.log("Seed script execution completed successfully!");
}

main()
  .catch((e) => {
    console.error("Unexpected error during seeding:", e);
  })
  .finally(async () => {
    await pool.end();
  });
