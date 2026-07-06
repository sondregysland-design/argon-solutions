"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { BookingSection } from "@/components/BookingSection";
import { KursDiagram } from "@/components/KursDiagram";

const CheckIcon = () => (
  <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const no = {
  eyebrow: "Argon Kurs / Åpne kohorter i Stavanger",
  h1: "Cowork & Code",
  intro:
    "Et praktisk AI-kurs i liten gruppe. Du tar med egen laptop og egne oppgaver, og lærer å jobbe og bygge med Claude sammen med andre. Ingen slides-maraton, du sitter med verktøyet hele tiden.",
  ctaPrimary: "Meld interesse",
  ctaSecondary: "For bedrifter",
  learnTitle: "Hva du lærer",
  learnItems: [
    {
      title: "Jobbe med Claude i hverdagen",
      desc: "Prompting som faktisk virker, dokumenter, analyse og skriving. Du lærer å gi AI-en nok kontekst til å gjøre ekte arbeid.",
    },
    {
      title: "Claude Code fra null",
      desc: "Installasjon og oppsett i terminalen. Lese og skrive filer, kjøre kommandoer og la Claude ta ansvar for oppgaver.",
    },
    {
      title: "Automatisere egne oppgaver",
      desc: "Skills, hooks og små agenter som tar de repetitive delene av jobben din. Bygget på dine egne eksempler.",
    },
    {
      title: "Bygge noe ekte",
      desc: "Du går hjem med noe som virker. Et verktøy, en automasjon eller et oppsett du bruker dagen etter.",
    },
  ],
  formatsTitle: "Fire formater",
  formatsIntro: "Samme verksted-tilnærming, ulik dybde. Usikker på nivå? Meld interesse, så finner vi det sammen.",
  formats: [
    {
      badge: "2,5 timer",
      name: "Intro",
      desc: "Grunnleggende AI-teori, installasjon og oppsett av Claude Code. Effektiv prompting og live demonstrasjon.",
      features: ["AI-teori og konsepter", "Installasjon og oppsett", "Effektiv prompting", "Live demonstrasjon"],
      recommended: false,
    },
    {
      badge: "1 dag",
      name: "Interaktiv",
      desc: "Dypdykk i hooks, custom skills og MCP-servere. Bygg reelle automatiseringer i workshopformat.",
      features: ["Hooks og automatisering", "Custom skills", "MCP-servere", "Hands-on workshop"],
      recommended: false,
    },
    {
      badge: "2 dager",
      name: "Interaktiv+",
      desc: "Alt fra dagskurset pluss subagents, Agent SDK og avanserte workflows. Inkluderer oppfølging etter kurset.",
      features: ["Alt fra dagskurset", "Subagents og Agent SDK", "Avanserte workflows", "Oppfølging etterpå"],
      recommended: true,
    },
    {
      badge: "1 dag",
      name: "Team Setup",
      desc: "Sett opp Claude Code for et helt team. Felles konvensjoner, sikkerhet og code review-workflows.",
      features: ["CLAUDE.md-arkitektur", "Felles konvensjoner", "Sikkerhet og tilgang", "Code review med AI"],
      recommended: false,
    },
  ],
  recommendedLabel: "Anbefalt",
  priceTitle: "Pris",
  priceValue: "5 900 kr",
  priceUnit: "per plass, åpen kohort",
  priceNote:
    "Kurs er unntatt merverdiavgift etter merverdiavgiftsloven § 3-5. Prisen er det du betaler, uten mva-påslag.",
  priceCorporate: "Skal dere kurse et helt team? Se in-house opplæring under Argon Industri.",
  priceCorporateLink: "Argon Industri",
  garantiLabel: "Fornøyd, eller pengene tilbake",
  garantiBody:
    "Er ikke kurset verdt tiden din etter første dag, sier du ifra og får hele kursavgiften tilbake. Ingen diskusjon.",
  datesTitle: "Neste kohorter",
  datesBody:
    "Kohorter settes opp fortløpende i Stavanger. Meld interesse, så får du beskjed når neste dato er klar.",
  bookTitle: "Meld interesse",
  bookIntro: "Book en kort prat, så finner vi formatet som passer deg. Uforpliktende.",
};

const en: typeof no = {
  eyebrow: "Argon Kurs / Open cohorts in Stavanger",
  h1: "Cowork & Code",
  intro:
    "A hands-on AI course in a small group. You bring your own laptop and your own tasks, and learn to work and build with Claude alongside others. No slide marathon, you sit with the tool the whole time.",
  ctaPrimary: "Register interest",
  ctaSecondary: "For businesses",
  learnTitle: "What you learn",
  learnItems: [
    {
      title: "Working with Claude every day",
      desc: "Prompting that actually works, documents, analysis and writing. You learn to give the AI enough context to do real work.",
    },
    {
      title: "Claude Code from zero",
      desc: "Installation and setup in the terminal. Reading and writing files, running commands and letting Claude take responsibility for tasks.",
    },
    {
      title: "Automating your own tasks",
      desc: "Skills, hooks and small agents that take over the repetitive parts of your job. Built on your own examples.",
    },
    {
      title: "Building something real",
      desc: "You go home with something that works. A tool, an automation or a setup you use the next day.",
    },
  ],
  formatsTitle: "Four formats",
  formatsIntro: "The same workshop approach, different depth. Unsure about level? Register interest and we will figure it out together.",
  formats: [
    {
      badge: "2.5 hours",
      name: "Intro",
      desc: "Basic AI theory, installation and setup of Claude Code. Effective prompting and a live demonstration.",
      features: ["AI theory and concepts", "Installation and setup", "Effective prompting", "Live demonstration"],
      recommended: false,
    },
    {
      badge: "1 day",
      name: "Interactive",
      desc: "Deep dive into hooks, custom skills and MCP servers. Build real automations in a workshop format.",
      features: ["Hooks and automation", "Custom skills", "MCP servers", "Hands-on workshop"],
      recommended: false,
    },
    {
      badge: "2 days",
      name: "Interactive+",
      desc: "Everything from the one-day course plus subagents, the Agent SDK and advanced workflows. Includes follow-up after the course.",
      features: ["Everything from the one-day course", "Subagents and the Agent SDK", "Advanced workflows", "Follow-up afterwards"],
      recommended: true,
    },
    {
      badge: "1 day",
      name: "Team Setup",
      desc: "Set up Claude Code for a whole team. Shared conventions, security and code review workflows.",
      features: ["CLAUDE.md architecture", "Shared conventions", "Security and access", "Code review with AI"],
      recommended: false,
    },
  ],
  recommendedLabel: "Recommended",
  priceTitle: "Price",
  priceValue: "5,900 NOK",
  priceUnit: "per seat, open cohort",
  priceNote:
    "Courses are exempt from VAT under section 3-5 of the Norwegian VAT Act. The price is what you pay, with no VAT added.",
  priceCorporate: "Training a whole team? See in-house training under Argon Industri.",
  priceCorporateLink: "Argon Industri",
  garantiLabel: "Happy, or your money back",
  garantiBody:
    "If the course is not worth your time after the first day, just say so and you get the full fee back. No questions asked.",
  datesTitle: "Upcoming cohorts",
  datesBody:
    "Cohorts are scheduled continuously in Stavanger. Register your interest and you will hear as soon as the next date is set.",
  bookTitle: "Register interest",
  bookIntro: "Book a short chat and we will find the format that fits you. No obligation.",
};

export default function KursContent() {
  const { locale } = useLanguage();
  const m = locale === "en" ? en : no;

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{m.eyebrow}</p>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-text sm:text-6xl">{m.h1}</h1>
        <p className="mt-6 text-lg text-text-light">{m.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#pamelding"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            {m.ctaPrimary}
          </a>
          <Link
            href="/kurs/bedrift"
            className="rounded-lg border border-text/15 px-6 py-3 text-sm font-semibold text-text transition hover:border-steel hover:text-steel"
          >
            {m.ctaSecondary}
          </Link>
        </div>
      </div>

      {/* Hva du lærer */}
      <div className="mt-24 border-t border-text/10 pt-14">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-text">{m.learnTitle}</h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-text/10 bg-text/10 sm:grid-cols-2">
          {m.learnItems.map((item, i) => (
            <div key={item.title} className="bg-paper p-8">
              <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Formater */}
      <div className="mt-24 border-t border-text/10 pt-14">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-text">{m.formatsTitle}</h2>
        <p className="mt-4 max-w-2xl text-text-light">{m.formatsIntro}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {m.formats.map((f) => (
            <div
              key={f.name}
              className={`relative flex flex-col rounded-xl border bg-white p-6 ${
                f.recommended ? "border-primary shadow-[0_0_0_1px_var(--color-primary)]" : "border-text/10"
              }`}
            >
              {f.recommended && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white">
                  {m.recommendedLabel}
                </span>
              )}
              <span className="font-mono text-xs uppercase tracking-wider text-text-light">{f.badge}</span>
              <h3 className="mt-2 text-lg font-semibold text-text">{f.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-light">{f.desc}</p>
              <ul className="mt-4 flex-1 space-y-2">
                {f.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-text-light">
                    <CheckIcon />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-xl bg-surface p-6 md:p-8">
          <KursDiagram />
        </div>
      </div>

      {/* Pris + datoer */}
      <div className="mt-24 border-t border-text/10 pt-14">
        <div className="grid gap-px overflow-hidden rounded-xl border border-text/10 bg-text/10 md:grid-cols-2">
          <div className="bg-white p-8 md:p-10">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text">{m.priceTitle}</h2>
            <p className="mt-6 font-mono text-4xl font-semibold text-primary">{m.priceValue}</p>
            <p className="mt-1 text-sm text-text-light">{m.priceUnit}</p>
            <p className="mt-6 text-sm leading-relaxed text-text-light">{m.priceNote}</p>
            <p className="mt-4 text-sm text-text-light">
              {m.priceCorporate.split(m.priceCorporateLink)[0]}
              <Link href="/kurs/bedrift" className="font-medium text-steel underline underline-offset-2 hover:text-steel-light">
                {m.priceCorporateLink}
              </Link>
              {m.priceCorporate.split(m.priceCorporateLink)[1]}
            </p>
          </div>
          <div className="bg-white p-8 md:p-10">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text">{m.datesTitle}</h2>
            <p className="mt-6 text-sm leading-relaxed text-text-light">{m.datesBody}</p>
            <a
              href="#pamelding"
              className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              {m.ctaPrimary}
            </a>
          </div>
        </div>
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-6">
          <CheckIcon />
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{m.garantiLabel}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-text-light">{m.garantiBody}</p>
          </div>
        </div>
      </div>

      {/* Påmelding / booking */}
      <div id="pamelding" className="mt-24 scroll-mt-24 border-t border-text/10 pt-14">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-text">{m.bookTitle}</h2>
        <p className="mt-4 max-w-2xl text-text-light">{m.bookIntro}</p>
        <div className="mt-8 rounded-xl border border-text/10 bg-white p-6 md:p-10">
          <BookingSection />
        </div>
      </div>
    </div>
  );
}
