import { after, NextResponse } from "next/server";
import { Resend } from "resend";
import { pushLead } from "@/lib/crm";
import { EMAIL_RE, esc, isBot, tooLong } from "@/lib/form-guard";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørsel." }, { status: 400 });
  }

  // Bots får et vanlig suksess-svar, men ingen e-post sendes
  if (isBot(body)) {
    return NextResponse.json({ success: true });
  }

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const name = str(body.name);
  const email = str(body.email);
  const message = str(body.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Alle felter er påkrevd." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Ugyldig e-postadresse." },
      { status: 400 }
    );
  }

  if (tooLong({ name, email, message })) {
    return NextResponse.json(
      { error: "Meldingen er for lang." },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const emailFrom =
    process.env.EMAIL_FROM || "Argon Solutions <post@argonsolutions.no>";

  try {
    const { error } = await resend.emails.send({
      from: emailFrom,
      to: "post@argonsolutions.no",
      replyTo: email,
      subject: `Ny henvendelse fra ${name.slice(0, 100)}`,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1E40AF; padding: 24px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">Ny kontakthenvendelse</h1>
        </div>
        <div style="padding: 24px; background: #f5f7fa;">
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0; background: white; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 16px; font-weight: bold; color: #374151; width: 100px;">Navn</td>
              <td style="padding: 12px 16px; color: #1E293B;">${esc(name)}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0;">
              <td style="padding: 12px 16px; font-weight: bold; color: #374151;">E-post</td>
              <td style="padding: 12px 16px; color: #1E293B;"><a href="mailto:${encodeURIComponent(email)}">${esc(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: bold; color: #374151; vertical-align: top;">Melding</td>
              <td style="padding: 12px 16px; color: #1E293B; white-space: pre-wrap;">${esc(message)}</td>
            </tr>
          </table>
        </div>
      </div>`,
    });
    // Resend kaster ikke ved API-feil, den returnerer { error }
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("Kontaktskjema: e-post feilet:", err);
    return NextResponse.json(
      { error: "Kunne ikke sende melding. Prøv igjen senere." },
      { status: 500 }
    );
  }

  pushLead({ name, email, message, source: "contact-form" });

  // Kvittering til innsender. Bevisst uten noe av det brukeren skrev (ikke engang
  // navnet), så skjemaet ikke kan brukes til å sende vilkårlig innhold fra domenet.
  after(async () => {
    const { error: receiptError } = await resend.emails.send({
      from: emailFrom,
      to: email,
      replyTo: "post@argonsolutions.no",
      subject: "Vi har mottatt meldingen din",
      text: [
        "Hei,",
        "",
        "Takk for meldingen. Vi har mottatt henvendelsen din og svarer vanligvis innen 24 timer på hverdager.",
        "Haster det, kan du ringe oss på +47 452 09 979.",
        "",
        "Thanks for your message. We usually reply within 24 hours on weekdays.",
        "",
        "Vennlig hilsen",
        "Argon Solutions",
        "post@argonsolutions.no",
      ].join("\n"),
    });
    if (receiptError) console.error("Kvittering feilet:", receiptError.message);
  });

  return NextResponse.json({ success: true });
}
