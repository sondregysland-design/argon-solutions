import { NextResponse } from "next/server";
import { Resend } from "resend";

const COHORTS: Record<string, string> = {
  "2026-09-12": "12. september 2026, Stavanger",
  "2026-09-26": "26. september 2026, Stavanger",
};
const DEFAULT_COHORT = "2026-09-12";

const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/;

function esc(s: unknown): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const { name, email, company, comment, cohort } = await request.json();
  const cohortLabel = COHORTS[cohort as string] || COHORTS[DEFAULT_COHORT];

  if (!name || !email) {
    return NextResponse.json(
      { error: "Navn og e-post er påkrevd." },
      { status: 400 }
    );
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Ugyldig e-postadresse." },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const emailFrom =
    process.env.EMAIL_FROM || "Argon Solutions <post@argonsolutions.no>";

  try {
    await resend.emails.send({
      from: emailFrom,
      to: "post@argonsolutions.no",
      replyTo: email,
      subject: `Kurspåmelding ${cohortLabel.split(",")[0]} fra ${String(name).slice(0, 100)}`,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1E40AF; padding: 24px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Ny kurspåmelding</h1>
          <p style="color: #dbeafe; margin: 8px 0 0; font-size: 14px;">${cohortLabel}</p>
        </div>
        <div style="padding: 24px; background: #f5f7fa;">
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0; background: white; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 16px; font-weight: bold; color: #374151; width: 110px;">Navn</td>
              <td style="padding: 12px 16px; color: #1E293B;">${esc(name)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 16px; font-weight: bold; color: #374151;">E-post</td>
              <td style="padding: 12px 16px; color: #1E293B;"><a href="mailto:${encodeURIComponent(email)}">${esc(email)}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 16px; font-weight: bold; color: #374151;">Firma</td>
              <td style="padding: 12px 16px; color: #1E293B;">${esc(company || "Ikke oppgitt")}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: bold; color: #374151; vertical-align: top;">Kommentar</td>
              <td style="padding: 12px 16px; color: #1E293B; white-space: pre-wrap;">${esc(comment || "Ingen")}</td>
            </tr>
          </table>
          <p style="font-size: 13px; color: #64748b;">Husk å sende bekreftelse og betalingsinformasjon til deltakeren.</p>
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
          source: "kurs-pamelding",
          message: `Påmelding ${cohortLabel}. Firma: ${company || "ikke oppgitt"}. ${comment || ""}`.trim(),
        }),
      }).catch((err) => console.error("CRM ingestion failed:", err));
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Kunne ikke sende påmelding. Prøv igjen senere." },
      { status: 500 }
    );
  }
}
