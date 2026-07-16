"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { COHORTS } from "@/lib/cohorts";

export { COHORTS };

export function KursSignup() {
  const { locale } = useLanguage();
  const m =
    locale === "en"
      ? {
          dateLabel: "Choose date",
          timeValue: "09:00 to 16:00",
          placeLabel: "Location",
          placeValue: "Stavanger",
          placeNote: "The venue is announced by email before the course starts.",
          priceLabel: "Price",
          priceValue: "5,900 NOK",
          priceNote: "Per seat, exempt from VAT. Happy after the first course day, or your money back.",
          nameLabel: "Name *",
          namePlaceholder: "Your full name",
          emailLabel: "Email *",
          emailPlaceholder: "you@email.com",
          companyLabel: "Company name",
          companyPlaceholder: "Optional",
          commentLabel: "Comment",
          commentPlaceholder: "Anything we should know? Unsure about the level? Write it here (optional)",
          submit: "Sign up",
          submitting: "Sending...",
          genericError: "Something went wrong. Please try again.",
          successTitle: "You are signed up",
          successBody:
            "Thanks! We have reserved your seat and will send confirmation and payment details by email.",
          signupAnother: "Sign up another participant",
          footer: "Signing up is binding only once you have received and paid the invoice. Until then you can cancel with a short email.",
        }
      : {
          dateLabel: "Velg dato",
          timeValue: "09:00 til 16:00",
          placeLabel: "Sted",
          placeValue: "Stavanger",
          placeNote: "Lokale annonseres på e-post før kursstart.",
          priceLabel: "Pris",
          priceValue: "5 900 kr",
          priceNote: "Per plass, unntatt mva. Fornøyd etter første kursdag, eller pengene tilbake.",
          nameLabel: "Navn *",
          namePlaceholder: "Ditt fulle navn",
          emailLabel: "E-post *",
          emailPlaceholder: "din@epost.no",
          companyLabel: "Firmanavn",
          companyPlaceholder: "Valgfritt",
          commentLabel: "Kommentar",
          commentPlaceholder: "Noe vi bør vite? Usikker på nivå? Skriv det her (valgfritt)",
          submit: "Meld deg på",
          submitting: "Sender...",
          genericError: "Noe gikk galt. Vennligst prøv igjen.",
          successTitle: "Du er påmeldt!",
          successBody:
            "Takk! Vi har holdt av plassen din og sender bekreftelse og betalingsinformasjon på e-post.",
          signupAnother: "Meld på en til",
          footer: "Påmeldingen er bindende først når du har mottatt og betalt faktura. Frem til da kan du avbestille med en kort e-post.",
        };

  const [cohort, setCohort] = useState(COHORTS[0].id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/kurs-pamelding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, comment, cohort }),
      });
      const result = await res.json();
      if (!res.ok) {
        setError(result.error || m.genericError);
        return;
      }
      setSuccess(true);
    } catch {
      setError(m.genericError);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "mt-1 block w-full rounded-lg border border-text/15 px-4 py-3 text-sm transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

  if (success) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-800">{m.successTitle}</h3>
        <p className="mt-2 text-sm text-green-700">{m.successBody}</p>
        <button
          onClick={() => {
            setSuccess(false);
            setName("");
            setEmail("");
            setCompany("");
            setComment("");
          }}
          className="mt-4 text-sm text-primary hover:underline"
        >
          {m.signupAnother}
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Kohort-info */}
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium text-text-light">{m.dateLabel}</p>
          <div className="mt-2 space-y-2">
            {COHORTS.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCohort(c.id)}
                className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                  cohort === c.id
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "border-text/15 bg-white hover:border-primary/50"
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-ink text-white">
                  <span className="text-base font-bold leading-none">{c.day}</span>
                  <span className="mt-0.5 text-[10px] font-semibold leading-none">{c.monthNo}</span>
                </span>
                <span>
                  <span className="block text-sm font-semibold text-text">
                    {locale === "en" ? c.labelEn : c.labelNo}
                  </span>
                  <span className="block text-xs text-text-light">{m.timeValue}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-text-light">{m.placeLabel}</p>
          <p className="mt-1 font-display text-3xl font-medium tracking-tight text-text">{m.placeValue}</p>
          <p className="mt-1 text-sm text-text-light">{m.placeNote}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-text-light">{m.priceLabel}</p>
          <p className="mt-1 font-display text-3xl font-medium tracking-tight text-text">{m.priceValue}</p>
          <p className="mt-1 text-sm text-text-light">{m.priceNote}</p>
        </div>
      </div>

      {/* Skjema */}
      <div>
        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="signup-name" className="block text-sm font-medium text-text">{m.nameLabel}</label>
            <input id="signup-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder={m.namePlaceholder} className={inputClass} />
          </div>
          <div>
            <label htmlFor="signup-email" className="block text-sm font-medium text-text">{m.emailLabel}</label>
            <input id="signup-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={m.emailPlaceholder} className={inputClass} />
          </div>
          <div>
            <label htmlFor="signup-company" className="block text-sm font-medium text-text">{m.companyLabel}</label>
            <input id="signup-company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder={m.companyPlaceholder} className={inputClass} />
          </div>
          <div>
            <label htmlFor="signup-comment" className="block text-sm font-medium text-text">{m.commentLabel}</label>
            <textarea id="signup-comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder={m.commentPlaceholder} maxLength={300} rows={3} className={`${inputClass} resize-none`} />
          </div>
          <button
            type="submit"
            disabled={loading || !name || !email}
            className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/85 disabled:opacity-50"
          >
            {loading ? m.submitting : m.submit}
          </button>
        </form>
        <p className="mt-4 text-xs text-gray-400">{m.footer}</p>
      </div>
    </div>
  );
}
