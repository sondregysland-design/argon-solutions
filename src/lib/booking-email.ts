import { Resend } from "resend";
import { format, parseISO } from "date-fns";
import { nb } from "date-fns/locale";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

function formatDate(date: string) {
  return format(parseISO(date), "EEEE d. MMMM yyyy", { locale: nb });
}

function generateICS(params: {
  date: string;
  time: string;
  name: string;
  email: string;
}) {
  const hostName = process.env.HOST_NAME || "Håvard Seljesko";
  const hostEmail = process.env.HOST_EMAIL || "haavard.seljesko@argonsolutions.no";
  const { date, time, name, email } = params;
  const [hours, minutes] = time.split(":").map(Number);
  const start = parseISO(date);
  start.setHours(hours, minutes, 0, 0);
  const end = new Date(start);
  end.setMinutes(end.getMinutes() + 30);

  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Argon Solutions//Kalender//NO",
    "BEGIN:VEVENT",
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:Konsultasjon med ${hostName}`,
    `ORGANIZER;CN=${hostName}:mailto:${hostEmail}`,
    `ATTENDEE;CN=${name}:mailto:${email}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export async function sendClientConfirmation(params: {
  date: string;
  time: string;
  name: string;
  email: string;
  company?: string;
  topic?: string;
}) {
  const resend = getResend();
  const emailFrom = process.env.EMAIL_FROM || "Argon Solutions <noreply@argonsolutions.no>";
  const hostEmail = process.env.HOST_EMAIL || "haavard.seljesko@argonsolutions.no";
  const hostName = process.env.HOST_NAME || "Håvard Seljesko";
  const { date, time, name, email } = params;
  const icsContent = generateICS({ date, time, name, email });
  const formattedDate = formatDate(date);

  await resend.emails.send({
    from: emailFrom,
    replyTo: hostEmail,
    to: email,
    subject: `Booking bekreftet — ${formattedDate} kl. ${time}`,
    attachments: [
      {
        filename: "booking.ics",
        content: Buffer.from(icsContent).toString("base64"),
        contentType: "text/calendar",
      },
    ],
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #1E40AF; padding: 24px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">Booking bekreftet</h1>
      </div>
      <div style="padding: 24px; background: #f5f7fa;">
        <p>Hei <strong>${name}</strong>,</p>
        <p>Din konsultasjon med ${hostName} er bekreftet.</p>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0; background: white; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px 16px; font-weight: bold; color: #374151; width: 100px;">Dato</td>
            <td style="padding: 12px 16px; color: #1E293B;">${formattedDate}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; font-weight: bold; color: #374151;">Tid</td>
            <td style="padding: 12px 16px; color: #1E293B;">${time}</td>
          </tr>
        </table>
        <p>En kalenderinvitasjon er vedlagt denne e-posten.</p>
        <p style="color: #999; font-size: 12px; margin-top: 24px;">Ved spørsmål, ta kontakt på <a href="mailto:${hostEmail}" style="color: #1E40AF;">${hostEmail}</a>.</p>
      </div>
    </div>`,
  });
}

export async function sendHostNotification(params: {
  date: string;
  time: string;
  name: string;
  email: string;
  company?: string;
  topic?: string;
}) {
  const resend = getResend();
  const emailFrom = process.env.EMAIL_FROM || "Argon Solutions <noreply@argonsolutions.no>";
  const hostEmail = process.env.HOST_EMAIL || "haavard.seljesko@argonsolutions.no";
  const { date, time, name, email, company, topic } = params;
  const formattedDate = formatDate(date);

  await resend.emails.send({
    from: emailFrom,
    to: hostEmail,
    subject: `Ny booking: ${name} — ${formattedDate} kl. ${time}`,
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #1E40AF; padding: 24px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">Ny booking</h1>
      </div>
      <div style="padding: 24px; background: #f5f7fa;">
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0; background: white; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px 16px; font-weight: bold; color: #374151; width: 100px;">Dato</td>
            <td style="padding: 12px 16px; color: #1E293B;">${formattedDate}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px 16px; font-weight: bold; color: #374151;">Tid</td>
            <td style="padding: 12px 16px; color: #1E293B;">${time}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px 16px; font-weight: bold; color: #374151;">Navn</td>
            <td style="padding: 12px 16px; color: #1E293B;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px 16px; font-weight: bold; color: #374151;">E-post</td>
            <td style="padding: 12px 16px; color: #1E293B;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${company ? `<tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 12px 16px; font-weight: bold; color: #374151;">Selskap</td><td style="padding: 12px 16px; color: #1E293B;">${company}</td></tr>` : ""}
          ${topic ? `<tr><td style="padding: 12px 16px; font-weight: bold; color: #374151;">Tema</td><td style="padding: 12px 16px; color: #1E293B;">${topic}</td></tr>` : ""}
        </table>
      </div>
    </div>`,
  });
}
