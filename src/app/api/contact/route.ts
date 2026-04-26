import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Alle felter er påkrevd." },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const emailFrom =
    process.env.EMAIL_FROM || "Argon Solutions <noreply@argonsolutions.no>";

  try {
    await resend.emails.send({
      from: emailFrom,
      to: "post@argonsolutions.no",
      replyTo: email,
      subject: `Ny henvendelse fra ${name}`,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1E40AF; padding: 24px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Ny kontakthenvendelse</h1>
        </div>
        <div style="padding: 24px; background: #f5f7fa;">
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0; background: white; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 16px; font-weight: bold; color: #374151; width: 100px;">Navn</td>
              <td style="padding: 12px 16px; color: #1E293B;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 16px; font-weight: bold; color: #374151;">E-post</td>
              <td style="padding: 12px 16px; color: #1E293B;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: bold; color: #374151; vertical-align: top;">Melding</td>
              <td style="padding: 12px 16px; color: #1E293B; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      </div>`,
    });

    // Push to CRM (fire-and-forget, don't block the form response)
    const crmUrl = process.env.ARGON_CRM_BASE_URL;
    if (crmUrl) {
      fetch(`${crmUrl}/api/leads/ingest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          source: "contact-form",
          message,
        }),
      }).catch((err) => console.error("CRM ingestion failed:", err));
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Kunne ikke sende melding. Prøv igjen senere." },
      { status: 500 }
    );
  }
}
