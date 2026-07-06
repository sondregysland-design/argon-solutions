"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

const no = {
  breadcrumbServices: "Tjenester",
  breadcrumbCurrent: "AI-strategi og rådgivning",
  h1: "AI-strategi og rådgivning",
  intro:
    "For beslutningstakere som ønsker en strukturert tilnærming til AI: ikke bare buzzwords, men konkrete veikart og ROI-beregninger tilpasset energisektoren.",
  offeringsTitle: "Hva vi tilbyr",
  offerings: [
    {
      title: "AI readiness-vurdering",
      desc: "En strukturert gjennomgang av din organisasjons nåværende systemer, data og prosesser for å kartlegge beredskapen for AI-implementering.",
    },
    {
      title: "Arbeidsflyt- og automatiseringskartlegging",
      desc: "Identifisering av konkrete prosesser og oppgaver der AI og automatisering gir størst effekt og raskest ROI.",
    },
    {
      title: "ROI-modellering",
      desc: "Konkrete beregninger av forventet inntjening, tidsbesparelse og kostnadsreduksjon fra AI-investeringer, slik at ledelsen kan ta datadrevne beslutninger.",
    },
    {
      title: "Implementeringsveikart",
      desc: "En prioritert plan med konkrete steg, tidslinje og ressursbehov for å gå fra nåsituasjon til full AI-implementering.",
    },
    {
      title: "Løpende rådgivning",
      desc: "Månedlig eller kvartalsvis rådgivning for å følge opp implementering, justere kurs og holde seg oppdatert på nye AI-muligheter.",
    },
  ],
  targetTitle: "Hvem er dette for?",
  targetIntro: "AI-strategi og rådgivning er spesielt relevant for:",
  targetGroups: [
    { role: "CEO og daglig leder", desc: "Ønsker forståelse for AI-mulighetene og en klar plan for konkurransedyktighet." },
    { role: "CTO og IT-leder", desc: "Trenger en teknisk vurdering av hvilke AI-verktøy som passer i eksisterende infrastruktur." },
    { role: "Driftsleder", desc: "Vil identifisere hvilke operasjonelle prosesser som kan automatiseres for å frigjøre kapasitet." },
  ],
  ctaTitle: "Start med en gratis AI-vurdering",
  ctaText: "Book en 30-minutters samtale der vi gir deg en innledende vurdering av AI-mulighetene i din organisasjon.",
  ctaButton: "Kontakt oss for en gratis konsultasjon",
};

const en: typeof no = {
  breadcrumbServices: "Services",
  breadcrumbCurrent: "AI strategy and advisory",
  h1: "AI strategy and advisory",
  intro:
    "For decision makers who want a structured approach to AI. Not just buzzwords, but concrete road maps and ROI calculations tailored to the energy sector.",
  offeringsTitle: "What we offer",
  offerings: [
    {
      title: "AI readiness assessment",
      desc: "A structured review of your organisation's current systems, data and processes to map the readiness for AI implementation.",
    },
    {
      title: "Workflow and automation mapping",
      desc: "Identifying concrete processes and tasks where AI and automation deliver the greatest effect and the fastest ROI.",
    },
    {
      title: "ROI modelling",
      desc: "Concrete calculations of expected revenue, time savings and cost reduction from AI investments, so leadership can make data-driven decisions.",
    },
    {
      title: "Implementation road map",
      desc: "A prioritised plan with concrete steps, a timeline and resource needs to move from the current state to full AI implementation.",
    },
    {
      title: "Ongoing advisory",
      desc: "Monthly or quarterly advisory to follow up on implementation, adjust course and stay up to date on new AI opportunities.",
    },
  ],
  targetTitle: "Who is this for?",
  targetIntro: "AI strategy and advisory is especially relevant for the following roles.",
  targetGroups: [
    { role: "CEO and managing director", desc: "Wants to understand the AI opportunities and a clear plan for staying competitive." },
    { role: "CTO and IT manager", desc: "Needs a technical assessment of which AI tools fit the existing infrastructure." },
    { role: "Operations manager", desc: "Wants to identify which operational processes can be automated to free up capacity." },
  ],
  ctaTitle: "Start with a free AI assessment",
  ctaText: "Book a 30-minute conversation where we give you an initial assessment of the AI opportunities in your organisation.",
  ctaButton: "Contact us for a free consultation",
};

export default function AIStrategiContent() {
  const { locale } = useLanguage();
  const m = locale === "en" ? en : no;

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-text-light">
        <Link href="/tjenester" className="hover:text-primary">{m.breadcrumbServices}</Link>
        <span>/</span>
        <span className="text-text">{m.breadcrumbCurrent}</span>
      </nav>

      <h1 className="text-4xl font-display font-medium text-text">
        {m.h1}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-text-light">
        {m.intro}
      </p>

      {/* Offerings */}
      <div className="mt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.offeringsTitle}
        </h2>
        <div className="mt-6 space-y-4">
          {m.offerings.map((o, i) => (
            <div key={o.title} className="rounded-xl border border-text/10 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-text">{o.title}</h3>
                  <p className="mt-1 text-sm text-text-light leading-relaxed">{o.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Who is this for */}
      <div className="mt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.targetTitle}
        </h2>
        <p className="mt-3 text-text-light">
          {m.targetIntro}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {m.targetGroups.map((t) => (
            <div key={t.role} className="rounded-xl bg-surface p-6">
              <h3 className="font-semibold text-text">{t.role}</h3>
              <p className="mt-2 text-sm text-text-light leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-2xl bg-primary/5 p-8 text-center md:p-12">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.ctaTitle}
        </h2>
        <p className="mt-3 text-text-light">
          {m.ctaText}
        </p>
        <Link
          href="/kontakt"
          className="mt-6 inline-block rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_var(--color-primary)] transition hover:bg-primary-dark"
        >
          {m.ctaButton}
        </Link>
      </div>
    </div>
  );
}
