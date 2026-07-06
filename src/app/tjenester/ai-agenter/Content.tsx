"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

const no = {
  breadcrumbServices: "Tjenester",
  breadcrumbCurrent: "AI-agenter",
  h1: "AI-agenter",
  intro:
    "Intelligente agenter som automatiserer nettleseroppgaver, datainnhenting og repetitive prosesser. Agentic AI gir maskinen evnen til å handle autonomt, og spar timer hver dag på manuelt arbeid.",
  calloutTitle: "Eksempel fra praksis: 47 leverandører behandlet på 3 minutter",
  calloutText:
    "En agent logger inn i leverandørportalen, henter sertifikater fra alle leverandørene, og eksporterer en strukturert rapport, automatisk, uten menneskelig inngripen.",
  useCasesTitle: "Bruksområder",
  useCases: [
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
  ],
  howTitle: "Slik fungerer agentic AI",
  howItWorks: [
    { step: "1", title: "Playwright", desc: "Agentene styrer en nettleser programmatisk via Playwright, samme teknologi brukt av store tech-selskaper for testing." },
    { step: "2", title: "Claude AI", desc: "Claude analyserer hva som er på skjermen og bestemmer neste handling, akkurat som et menneske ville gjort." },
    { step: "3", title: "Orkestrering", desc: "En overordnet orkestrator koordinerer agenter, håndterer feil og sikrer at oppgaven fullføres korrekt." },
    { step: "4", title: "Rapportering", desc: "Resultater leveres strukturert, som filer, databaseoppføringer eller e-poster, klare til bruk." },
  ],
  ctaTitle: "Klar til å automatisere repetitivt arbeid?",
  ctaText: "Fortell oss hvilke manuelle prosesser dere bruker tid på, og vi vurderer om agentic AI er rett løsning.",
  ctaButton: "Kontakt oss for en gratis konsultasjon",
};

const en: typeof no = {
  breadcrumbServices: "Services",
  breadcrumbCurrent: "AI agents",
  h1: "AI agents",
  intro:
    "Intelligent agents that automate browser tasks, data gathering and repetitive processes. Agentic AI gives the machine the ability to act autonomously and saves hours every day on manual work.",
  calloutTitle: "Example from practice: 47 suppliers processed in 3 minutes",
  calloutText:
    "An agent logs in to the supplier portal, fetches certificates from every supplier and exports a structured report, automatically, without human intervention.",
  useCasesTitle: "Use cases",
  useCases: [
    {
      title: "Browser automation",
      desc: "Agents that navigate websites, fill in forms and fetch data, exactly the way a human user would.",
    },
    {
      title: "Data gathering",
      desc: "Automatic collection of data from supplier portals, public registries and other websites, structured and ready to use.",
    },
    {
      title: "Form filling",
      desc: "Agents that fill in and submit forms on behalf of the user, with validation and error handling.",
    },
    {
      title: "HSE reporting",
      desc: "Automatic generation and submission of HSE reports based on data from existing systems.",
    },
  ],
  howTitle: "How agentic AI works",
  howItWorks: [
    { step: "1", title: "Playwright", desc: "The agents drive a browser programmatically through Playwright, the same technology large tech companies use for testing." },
    { step: "2", title: "Claude AI", desc: "Claude analyses what is on the screen and decides the next action, just as a human would." },
    { step: "3", title: "Orchestration", desc: "A top-level orchestrator coordinates agents, handles errors and makes sure the task is completed correctly." },
    { step: "4", title: "Reporting", desc: "Results are delivered in a structured form, as files, database entries or emails, ready to use." },
  ],
  ctaTitle: "Ready to automate repetitive work?",
  ctaText: "Tell us which manual processes take up your time, and we will assess whether agentic AI is the right solution.",
  ctaButton: "Contact us for a free consultation",
};

export default function AIAgenterContent() {
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

      {/* Example callout */}
      <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
        <p className="text-sm font-medium text-primary">
          {m.calloutTitle}
        </p>
        <p className="mt-1 text-sm text-text-light">
          {m.calloutText}
        </p>
      </div>

      {/* Use cases */}
      <div className="mt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.useCasesTitle}
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {m.useCases.map((u) => (
            <div key={u.title} className="rounded-xl border border-text/10 p-6">
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
      <div className="mt-16 border-t border-text/10 pt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.howTitle}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-4">
          {m.howItWorks.map((s) => (
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
