"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

const no = {
  breadcrumbServices: "Tjenester",
  breadcrumbCurrent: "Skreddersydd Software",
  h1: "Skreddersydd Software",
  intro:
    "Vi utvikler spesialtilpassede applikasjoner som løser dine unike utfordringer. Fra enkle dashboards til komplette arbeidsstyringssystemer. Vi bygger det energisektoren faktisk trenger.",
  features: [
    {
      title: "Webapplikasjoner og dashboards",
      desc: "Skreddersydde webapplikasjoner med sanntidsdata, interaktive dashboards og intuitivt brukergrensesnitt tilpasset olje- og gassindustriens behov.",
    },
    {
      title: "Mobilvenlige løsninger",
      desc: "Responsivt design som fungerer like godt på nettbrett og mobil som på desktop. Viktig for feltarbeidere med tilgang på farten.",
    },
    {
      title: "Sanntids datavisualisering",
      desc: "Live oppdateringer fra sensorer, databaser og API-er visualisert i oversiktlige grafer og tabeller.",
    },
    {
      title: "Offline-støtte for feltarbeid",
      desc: "Progressive Web Apps med offline-funksjonalitet, slik at feltarbeidere kan jobbe uten internettforbindelse.",
    },
  ],
  useCasesTitle: "Typiske bruksområder",
  useCases: [
    { title: "Prosjektstyring", desc: "Systemer for å holde oversikt over offshore-prosjekter, milepæler, ressurser og kostnader i sanntid." },
    { title: "Dokumenthåndtering", desc: "Strukturerte systemer for sertifikater, HMS-dokumentasjon og tekniske tegninger med versjonskontroll." },
    { title: "Felt-applikasjoner", desc: "Mobile applikasjoner for inspeksjoner, rapportering og datainnsamling direkte i felt." },
  ],
  stepsTitle: "Slik jobber vi",
  steps: [
    { step: "1", title: "Behovsanalyse", desc: "Vi kartlegger eksisterende systemer, smertepunkter og ønskede arbeidsflyter." },
    { step: "2", title: "Prototyp", desc: "Rask prototyp for å validere design og funksjonalitet før full utvikling." },
    { step: "3", title: "Iterativ utvikling", desc: "Ukentlige demoer og tilbakemelding gjennom hele utviklingsprosessen." },
    { step: "4", title: "Lansering", desc: "Grundig testing og produksjonslansering med opplæring av brukere." },
  ],
  ctaTitle: "Klar for en gratis konsultasjon?",
  ctaText: "Fortell oss om ditt behov, så gir vi deg en uforpliktende vurdering.",
  ctaButton: "Kontakt oss for en gratis konsultasjon",
};

const en: typeof no = {
  breadcrumbServices: "Services",
  breadcrumbCurrent: "Custom Software",
  h1: "Custom Software",
  intro:
    "We develop tailored applications that solve your unique challenges. From simple dashboards to complete work management systems. We build what the energy sector actually needs.",
  features: [
    {
      title: "Web applications and dashboards",
      desc: "Tailored web applications with real-time data, interactive dashboards and an intuitive interface adapted to the needs of the oil and gas industry.",
    },
    {
      title: "Mobile-friendly solutions",
      desc: "Responsive design that works just as well on tablet and mobile as on desktop. Important for field workers who need access on the move.",
    },
    {
      title: "Real-time data visualisation",
      desc: "Live updates from sensors, databases and APIs visualised in clear charts and tables.",
    },
    {
      title: "Offline support for field work",
      desc: "Progressive Web Apps with offline functionality so field workers can work without an internet connection.",
    },
  ],
  useCasesTitle: "Typical use cases",
  useCases: [
    { title: "Project management", desc: "Systems for keeping track of offshore projects, milestones, resources and costs in real time." },
    { title: "Document management", desc: "Structured systems for certificates, HSE documentation and technical drawings with version control." },
    { title: "Field applications", desc: "Mobile applications for inspections, reporting and data collection directly in the field." },
  ],
  stepsTitle: "How we work",
  steps: [
    { step: "1", title: "Needs analysis", desc: "We map existing systems, pain points and the workflows you want." },
    { step: "2", title: "Prototype", desc: "A quick prototype to validate design and functionality before full development." },
    { step: "3", title: "Iterative development", desc: "Weekly demos and feedback throughout the entire development process." },
    { step: "4", title: "Launch", desc: "Thorough testing and a production launch with user training." },
  ],
  ctaTitle: "Ready for a free consultation?",
  ctaText: "Tell us about your needs and we will give you a no-obligation assessment.",
  ctaButton: "Contact us for a free consultation",
};

export default function SkreddersyddSoftwareContent() {
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

      {/* Features */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {m.features.map((f) => (
          <div key={f.title} className="rounded-xl border border-text/10 p-6">
            <div className="flex items-start gap-3">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <h2 className="font-semibold text-text">{f.title}</h2>
                <p className="mt-1 text-sm text-text-light leading-relaxed">{f.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Use cases */}
      <div className="mt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.useCasesTitle}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {m.useCases.map((u) => (
            <div key={u.title} className="rounded-xl bg-surface p-6">
              <h3 className="font-semibold text-text">{u.title}</h3>
              <p className="mt-2 text-sm text-text-light leading-relaxed">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="mt-16 border-t border-text/10 pt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.stepsTitle}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-4">
          {m.steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {s.step}
              </div>
              <h3 className="mt-3 text-sm font-semibold text-text">{s.title}</h3>
              <p className="mt-1 text-xs text-text-light">{s.desc}</p>
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
