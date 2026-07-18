import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

export const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendContactNotification(message: {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}) {
  if (!resend) {
    console.warn("Resend API key not configured. Skipping email notification.");
    return;
  }

  try {
    // Send email to the configured from address (since free Resend account only sends to registered email)
    const toEmail = resendFromEmail;

    await resend.emails.send({
      from: resendFromEmail,
      to: toEmail,
      subject: `Portfolio Submission: ${message.subject}`,
      text: `
New portfolio contact submission received:

Sender Details:
- Name: ${message.name}
- Email: ${message.email}
- Time: ${message.createdAt.toISOString()}

Subject:
${message.subject}

Message Summary:
${message.message}
      `,
    });
    console.log("Resend notification email sent successfully.");
  } catch (error) {
    console.error("Failed to send email via Resend:", error);
  }
}
