"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

const CheckIcon = () => (
  <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const no = {
  breadcrumbServices: "Tjenester",
  breadcrumbCurrent: "Claude Code",
  h1: "Claude Code for bedrifter",
  intro:
    "Claude Code er ikke bare et kodeverktøy. Det er et fullstendig AI-operativsystem for din bedrift. Argon Solutions hjelper deg med oppsett og skreddersydde konfigurasjoner som gjør teamet produktivt.",
  whatTitle: "Hva er Claude Code?",
  whatP1:
    "Claude Code er Anthropics CLI-baserte AI-assistent som kjører direkte i terminalen din. I motsetning til vanlige chatbots kan Claude Code lese og skrive filer, kjøre kommandoer, browse nettet og koordinere komplekse oppgaver autonomt.",
  whatP2:
    "Der en chatbot svarer på spørsmål, tar Claude Code ansvar for oppgaver. Det skriver kode, tester og deployer, alt mens det husker konteksten gjennom CLAUDE.md. Med riktig oppsett blir det et virtuelt teammedlem som kjenner bedriften din fra innsiden.",
  whyTitle: "Hvorfor bedrifter trenger et AI-operativsystem",
  whyP:
    "De fleste selskaper bruker AI som en chatbot. Med riktig oppsett er Claude Code et AI-operativsystem som jobber på tvers av hele organisasjonen.",
  featureCards: [
    { title: "Skreddersydde skills", description: "Vi bygger tilpassede Claude Code skills som lar AI-en utføre oppgaver spesifikke for din bransje." },
    { title: "MCP-servere", description: "Model Context Protocol-servere som kobler Claude Code mot dine interne systemer og API-er." },
    { title: "CLAUDE.md og hooks", description: "Vi setter opp prosjekthukommelse og hooks som gir Claude Code full kontekst om din organisasjon." },
    { title: "Team-oppsett", description: "Delt konfigurasjon på tvers av teamet og opplæring som gjør hele organisasjonen produktiv." },
  ],
  tiersTitle: "Opplæringspakker",
  tiersIntro: "Fra en rask introduksjon til komplett organisasjonsoppsett. Vi tilpasser til der dere er i dag.",
  trainingTiers: [
    {
      name: "Intro", target: "Enkeltpersoner", duration: "2-timers intro",
      description: "Kom i gang med Claude Code raskt. Grunnleggende oppsett og de viktigste kommandoene.",
      features: ["Installasjon og konfigurasjon", "Grunnleggende kommandoer", "Første CLAUDE.md", "Q&A-sesjon"],
    },
    {
      name: "Interactive", target: "Utviklerteam", duration: "Halvdags workshop",
      description: "Praktisk workshop for hele utviklerteamet med felles arbeidsoppsett og konkrete use cases.",
      features: ["Team-konfigurasjon", "Delte workflows", "Skills og slash-kommandoer", "Hands-on øvelser"],
    },
    {
      name: "Interactive+", target: "Tekniske team", duration: "Heldags dypdykk",
      description: "Komplett heldagsworkshop med avansert oppsett, MCP-servere og systemintegrasjoner.",
      features: ["MCP-serveroppsett", "Hooks og automatisering", "Systemintegrasjoner", "Custom skills-utvikling"],
    },
    {
      name: "Team Setup", target: "Organisasjoner", duration: "Komplett oppsett + 30 dager support",
      description: "Vi tar ansvar for hele oppsettet fra analyse til ferdig AI-operativsystem.",
      features: ["Behovsanalyse og planlegging", "Komplett infrastrukturoppsett", "Opplæring av hele teamet", "30 dager support"],
    },
  ],
  konsulentTitle: "Konsulenttjenester",
  konsulentIntro: "Trenger dere mer enn opplæring? Vi setter opp hele AI-infrastrukturen fra bunnen av.",
  konsulentTjenester: [
    { title: "Custom Setup", description: "Vi setter opp Claude Code fra bunnen av tilpasset din organisasjon." },
    { title: "Skill-utvikling", description: "Vi bygger skreddersydde skills og slash-kommandoer for din bransje." },
    { title: "MCP-servere", description: "Utvikling og integrasjon av MCP-servere mot dine interne systemer." },
    { title: "Agent-arkitektur", description: "Design og implementering av multi-agent systemer der Claude Code koordinerer autonomt." },
  ],
  ctaTitle: "Klar for å sette opp Claude Code?",
  ctaText: "Book en gratis demo og se hva Claude Code kan gjøre for din bedrift.",
  ctaButton: "Book en demo",
};

const en: typeof no = {
  breadcrumbServices: "Services",
  breadcrumbCurrent: "Claude Code",
  h1: "Claude Code for businesses",
  intro:
    "Claude Code is not just a coding tool. It is a complete AI operating system for your company. Argon Solutions helps you with setup and tailored configurations that make your team productive.",
  whatTitle: "What is Claude Code?",
  whatP1:
    "Claude Code is Anthropic's CLI-based AI assistant that runs directly in your terminal. Unlike ordinary chatbots, Claude Code can read and write files, run commands, browse the web and coordinate complex tasks autonomously.",
  whatP2:
    "Where a chatbot answers questions, Claude Code takes responsibility for tasks. It writes code, tests and deploys, all while remembering the context through CLAUDE.md. With the right setup it becomes a virtual team member that knows your business from the inside.",
  whyTitle: "Why businesses need an AI operating system",
  whyP:
    "Most companies use AI as a chatbot. With the right setup, Claude Code is an AI operating system that works across the entire organisation.",
  featureCards: [
    { title: "Tailored skills", description: "We build custom Claude Code skills that let the AI carry out tasks specific to your industry." },
    { title: "MCP servers", description: "Model Context Protocol servers that connect Claude Code to your internal systems and APIs." },
    { title: "CLAUDE.md and hooks", description: "We set up project memory and hooks that give Claude Code full context about your organisation." },
    { title: "Team setup", description: "Shared configuration across the team and training that makes the whole organisation productive." },
  ],
  tiersTitle: "Training packages",
  tiersIntro: "From a quick introduction to a complete organisational setup. We adapt to where you are today.",
  trainingTiers: [
    {
      name: "Intro", target: "Individuals", duration: "2-hour intro",
      description: "Get started with Claude Code quickly. Basic setup and the most important commands.",
      features: ["Installation and configuration", "Basic commands", "First CLAUDE.md", "Q&A session"],
    },
    {
      name: "Interactive", target: "Development teams", duration: "Half-day workshop",
      description: "A hands-on workshop for the whole development team with a shared working setup and concrete use cases.",
      features: ["Team configuration", "Shared workflows", "Skills and slash commands", "Hands-on exercises"],
    },
    {
      name: "Interactive+", target: "Technical teams", duration: "Full-day deep dive",
      description: "A complete full-day workshop with advanced setup, MCP servers and system integrations.",
      features: ["MCP server setup", "Hooks and automation", "System integrations", "Custom skills development"],
    },
    {
      name: "Team Setup", target: "Organisations", duration: "Complete setup plus 30 days of support",
      description: "We take responsibility for the entire setup, from analysis to a finished AI operating system.",
      features: ["Needs analysis and planning", "Complete infrastructure setup", "Training for the whole team", "30 days of support"],
    },
  ],
  konsulentTitle: "Consulting services",
  konsulentIntro: "Need more than training? We set up your entire AI infrastructure from the ground up.",
  konsulentTjenester: [
    { title: "Custom Setup", description: "We set up Claude Code from the ground up, tailored to your organisation." },
    { title: "Skills development", description: "We build tailored skills and slash commands for your industry." },
    { title: "MCP servers", description: "Development and integration of MCP servers connected to your internal systems." },
    { title: "Agent architecture", description: "Design and implementation of multi-agent systems where Claude Code coordinates autonomously." },
  ],
  ctaTitle: "Ready to set up Claude Code?",
  ctaText: "Book a free demo and see what Claude Code can do for your business.",
  ctaButton: "Book a demo",
};

export default function ClaudeCodeContent() {
  const { locale } = useLanguage();
  const m = locale === "en" ? en : no;

  return (
    <div className="mx-auto max-w-6xl px-6">
      <nav className="mb-8 flex items-center gap-2 text-sm text-text-light">
        <Link href="/tjenester" className="hover:text-text transition-colors">{m.breadcrumbServices}</Link>
        <span>/</span>
        <span className="text-text">{m.breadcrumbCurrent}</span>
      </nav>

      <h1 className="text-4xl font-display font-medium text-text">
        {m.h1}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-text-light">
        {m.intro}
      </p>
      <div className="mt-16 rounded-xl bg-surface p-8 md:p-12">
        <h2 className="text-2xl font-display font-medium text-text">{m.whatTitle}</h2>
        <p className="mt-4 text-text-light">
          {m.whatP1}
        </p>
        <p className="mt-3 text-text-light">
          {m.whatP2}
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.whyTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-text-light">
          {m.whyP}
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {m.featureCards.map((card) => (
            <div key={card.title} className="rounded-xl border border-text/10 p-6">
              <h3 className="text-lg font-semibold text-primary">{card.title}</h3>
              <p className="mt-2 text-sm text-text-light">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 border-t border-text/10 pt-16">
        <h2 className="text-2xl font-display font-medium text-text">{m.tiersTitle}</h2>
        <p className="mt-4 max-w-2xl text-text-light">
          {m.tiersIntro}
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {m.trainingTiers.map((tier) => (
            <div key={tier.name} className="flex flex-col rounded-xl border border-text/10 p-6">
              <div>
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{tier.target}</span>
                <h3 className="mt-3 text-lg font-semibold text-text">{tier.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{tier.duration}</p>
                <p className="mt-3 text-sm text-text-light">{tier.description}</p>
              </div>
              <ul className="mt-4 flex-1 space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-text-light">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 border-t border-text/10 pt-16">
        <h2 className="text-2xl font-display font-medium text-text">{m.konsulentTitle}</h2>
        <p className="mt-4 max-w-2xl text-text-light">
          {m.konsulentIntro}
        </p>
        <div className="mt-8 space-y-4">
          {m.konsulentTjenester.map((tjeneste) => (
            <div key={tjeneste.title} className="flex items-start gap-4 rounded-xl border border-text/10 p-6">
              <CheckIcon />
              <div>
                <h3 className="font-semibold text-text">{tjeneste.title}</h3>
                <p className="mt-1 text-sm text-text-light">{tjeneste.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-2xl bg-primary/5 p-8 text-center md:p-12">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.ctaTitle}
        </h2>
        <p className="mt-4 text-text-light">{m.ctaText}</p>
        <div className="mt-8">
          <Link href="/kontakt" className="rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_var(--color-primary)] transition hover:bg-primary-dark">
            {m.ctaButton}
          </Link>
        </div>
      </div>
    </div>
  );
}
