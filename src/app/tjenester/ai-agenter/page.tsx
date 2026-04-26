import type { Metadata } from "next";
import Link from "next/link";

const description =
  "Argon Solutions bygger AI-agenter og agentic AI-løsninger som automatiserer nettleseroppgaver, datainnhenting og repetitive prosesser for energisektoren i Norge.";

export const metadata: Metadata = {
  title: "AI-agenter: Agentic AI og automatisering",
  description,
  keywords: ["AI-agenter", "agentic AI", "automatisering energisektoren", "nettleserautomatisering", "AI agent Norge"],
  alternates: { canonical: "/tjenester/ai-agenter" },
  openGraph: {
    title: "AI-agenter: Agentic AI og automatisering",
    description,
    url: "/tjenester/ai-agenter",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Agents and Automation",
  name: "AI-agenter og agentic AI fra Argon Solutions i Stavanger",
  provider: {
    "@type": "Organization",
    "@id": "https://argonsolutions.no/#organization",
    name: "Argon Solutions",
  },
  areaServed: { "@type": "Country", name: "Norway" },
  description,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hva er en AI-agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En AI-agent er et autonomt program som kombinerer nettleserautomatisering (Playwright) med kunstig intelligens (Claude AI) for å utføre oppgaver uten menneskelig inngripen. Argon Solutions bygger AI-agenter for energisektoren i Stavanger som automatiserer datainnhenting, skjemautfylling og leverandørhåndtering.",
      },
    },
    {
      "@type": "Question",
      name: "Hvor mye tid kan en AI-agent spare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I et konkret prosjekt for olje- og gassindustrien reduserte Argon Solutions' AI-agent 6 timer manuelt portalarbeid til 3 minutter per uke — 47 leverandører behandlet automatisk.",
      },
    },
    {
      "@type": "Question",
      name: "Hvem bygger AI-agenter i Stavanger?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Argon Solutions er et AI-byrå i Stavanger som spesialiserer seg på å bygge AI-agenter og agentic AI-løsninger for energisektoren. Selskapet bruker Playwright og Claude AI til å automatisere nettleseroppgaver og repetitive prosesser.",
      },
    },
  ],
};

const useCases = [
  {
    title: "Nettleserautomatisering",
    desc: "Agenter som navigerer nettsider, fyller ut skjemaer og henter data, akkurat slik en menneskelig bruker ville gjort det.",
  },
  {
    title: "Datainnhenting",
    desc: "Automatisk innsamling av data fra leverandørportaler, offentlige registre og andre nettsteder, strukturert og klar for bruk.",
  },
  {
    title: "Skjemautfylling",
    desc: "Agenter som fyller ut og sender inn skjemaer på vegne av brukeren, med validering og feilhåndtering.",
  },
  {
    title: "HMS-rapportering",
    desc: "Automatisk generering og innlevering av HMS-rapporter basert på data fra eksisterende systemer.",
  },
];

const howItWorks = [
  { step: "1", title: "Playwright", desc: "Agentene styrer en nettleser programmatisk via Playwright, samme teknologi brukt av store tech-selskaper for testing." },
  { step: "2", title: "Claude AI", desc: "Claude analyserer hva som er på skjermen og bestemmer neste handling, akkurat som et menneske ville gjort." },
  { step: "3", title: "Orkestrering", desc: "En overordnet orkestrator koordinerer agenter, håndterer feil og sikrer at oppgaven fullføres korrekt." },
  { step: "4", title: "Rapportering", desc: "Resultater leveres strukturert, som filer, databaseoppføringer eller e-poster, klare til bruk." },
];

export default function AIAgenterPage() {
  return (
    <div className="py-20">
      <script
        type="application/ld+json"
        // Safe: both objects are static server-side constants, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd]) }}
      />
      <div className="mx-auto max-w-6xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-text-light">
          <Link href="/tjenester" className="hover:text-primary">Tjenester</Link>
          <span>/</span>
          <span className="text-text">AI-agenter</span>
        </nav>

        <h1 className="text-4xl font-[family-name:var(--font-playfair)] font-medium text-text">
          AI-agenter
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Intelligente agenter som automatiserer nettleseroppgaver, datainnhenting og repetitive prosesser. Agentic AI gir maskinen evnen til å handle autonomt, og spar timer hver dag på manuelt arbeid.
        </p>

        {/* Example callout */}
        <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
          <p className="text-sm font-medium text-primary">
            Eksempel fra praksis: 47 leverandører behandlet på 3 minutter
          </p>
          <p className="mt-1 text-sm text-text-light">
            En agent logger inn i leverandørportalen, henter sertifikater fra alle leverandørene, og eksporterer en strukturert rapport, automatisk, uten menneskelig inngripen.
          </p>
        </div>

        {/* Use cases */}
        <div className="mt-16">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">
            Bruksområder
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {useCases.map((u) => (
              <div key={u.title} className="rounded-xl border border-gray-100 p-6">
                <div className="flex items-start gap-3">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-text">{u.title}</h3>
                    <p className="mt-1 text-sm text-text-light leading-relaxed">{u.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mt-16 border-t border-gray-100 pt-16">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">
            Slik fungerer agentic AI
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-4">
            {howItWorks.map((s) => (
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
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">
            Klar til å automatisere repetitivt arbeid?
          </h2>
          <p className="mt-3 text-text-light">
            Fortell oss hvilke manuelle prosesser dere bruker tid på, og vi vurderer om agentic AI er rett løsning.
          </p>
          <Link
            href="/kontakt"
            className="mt-6 inline-block rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_var(--color-primary)] transition hover:bg-primary-dark"
          >
            Kontakt oss for en gratis konsultasjon
          </Link>
        </div>
      </div>
    </div>
  );
}
