import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
const resendNotificationEmail = process.env.RESEND_NOTIFICATION_EMAIL || "hadiashah010@gmail.com";

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
    const { data, error } = await resend.emails.send({
      from: resendFromEmail,
      to: resendNotificationEmail,
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

    if (error) {
      console.error("Resend API returned an error:", JSON.stringify(error, null, 2));
      return;
    }

    console.log("Resend notification email sent successfully.", JSON.stringify(data));
  } catch (error) {
    console.error("Failed to send email via Resend (unexpected error):", error);
  }
}
