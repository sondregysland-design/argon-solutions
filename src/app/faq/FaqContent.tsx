"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

import { faqsNo, faqsEn, type Faq } from "./faqs";

type Messages = {
  heading: string;
  intro: string;
  faqs: Faq[];
  moreHeading: string;
  moreBody: string;
  contactCta: string;
};

const no: Messages = {
  heading: "Ofte stilte spørsmål",
  intro:
    "Svar på vanlige spørsmål om AI-kursene våre, tjenester, produkter og teknologi.",
  faqs: faqsNo,
  moreHeading: "Har du et annet spørsmål?",
  moreBody: "Kontakt oss direkte. Vi svarer vanligvis innen 24 timer.",
  contactCta: "Kontakt oss",
};

const en: Messages = {
  heading: "Frequently asked questions",
  intro:
    "Answers to common questions about our AI courses, services, products and technology.",
  faqs: faqsEn,
  moreHeading: "Do you have another question?",
  moreBody: "Contact us directly. We usually reply within 24 hours.",
  contactCta: "Contact us",
};

export default function FaqContent() {
  const { locale } = useLanguage();
  const m = locale === "en" ? en : no;

  return (
    <div className="mx-auto max-w-4xl px-6">
      <h1 className="text-4xl font-display font-medium text-text">
        {m.heading}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-text-light">{m.intro}</p>

      <div className="mt-12 space-y-4">
        {m.faqs.map((f) => (
          <details key={f.q} className="faq-item group rounded-xl border border-text/10 transition hover:border-text/25 open:border-primary/40 open:bg-surface/60">
            <summary className="flex items-center justify-between gap-4 p-6">
              <h2 className="font-semibold text-text">{f.q}</h2>
              <svg
                className="faq-chevron h-4 w-4 shrink-0 text-text-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="px-6 pb-6 text-sm text-text-light leading-relaxed">
              {f.a}
            </p>
          </details>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-surface p-8 text-center">
        <h2 className="text-xl font-semibold text-text">{m.moreHeading}</h2>
        <p className="mt-2 text-text-light">{m.moreBody}</p>
        <Link
          href="/kontakt"
          className="mt-4 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary-dark transition-colors"
        >
          {m.contactCta}
        </Link>
      </div>
    </div>
  );
}
