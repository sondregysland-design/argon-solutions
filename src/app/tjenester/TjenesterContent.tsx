"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

type Card = {
  href: string;
  title: string;
  badge: string | null;
  description: string;
};

type Faq = {
  question: string;
  answer: string;
};

type Step = {
  step: string;
  title: string;
  desc: string;
};

type Strings = {
  h1: string;
  intro: string;
  readMore: string;
  serviceCards: Card[];
  howTitle: string;
  howIntro: string;
  steps: Step[];
  faqTitle: string;
  faqs: Faq[];
};

const no: Strings = {
  h1: "AI-tjenester og software",
  intro:
    "Argon Solutions leverer AI-tjenester og skreddersydd software for energisektoren i Norge. Her er hva vi kan hjelpe med.",
  readMore: "Les mer →",
  serviceCards: [
    {
      href: "/tjenester/claude-code",
      title: "Claude Code oppsett",
      badge: "Mest etterspurt",
      description:
        "Vi setter opp Claude Code som et komplett AI-operativsystem for din bedrift, med skreddersydde skills, MCP-servere, hooks og arbeidsflyter.",
    },
    {
      href: "/tjenester/skreddersydd-software",
      title: "Skreddersydd Software",
      badge: null,
      description:
        "Utvikling av spesialtilpassede applikasjoner som løser deres unike utfordringer. Fra dashboards og overvåkningssystemer til komplett arbeidsflytstyring.",
    },
    {
      href: "/tjenester/systemintegrasjon",
      title: "Systemintegrasjon",
      badge: null,
      description:
        "Vi kobler sammen eksisterende systemer og bygger skreddersydde integrasjoner som gjør at data flyter automatisk mellom plattformer.",
    },
    {
      href: "/tjenester/ai-agenter",
      title: "AI-agenter",
      badge: null,
      description:
        "Intelligente agenter som automatiserer nettleseroppgaver, datainnhenting og repetitive prosesser. Spar timer hver dag på manuelt arbeid.",
    },
    {
      href: "/tjenester/ai-automatisering",
      title: "AI-automatisering",
      badge: null,
      description:
        "Vi automatiserer arbeidsflytene som spiser mest tid, fra rapportering og dokumenthåndtering til dataflyt mellom fagsystemer.",
    },
    {
      href: "/tjenester/ai-chatbot",
      title: "AI-chatbot",
      badge: null,
      description:
        "Skreddersydd chatbot for kundeservice og intern support, bygget på deres egne dokumenter og med kontroll på hvor dataene havner.",
    },
    {
      href: "/tjenester/ai-strategi",
      title: "AI-strategi og rådgivning",
      badge: null,
      description:
        "AI readiness-vurdering, automatiseringskartlegging og veikart for AI-implementering for beslutningstakere i energisektoren.",
    },
  ],
  howTitle: "Slik kommer du i gang",
  howIntro: "Fra første samtale til ferdig løsning. Slik jobber Argon Solutions.",
  steps: [
    { step: "1", title: "Gratis konsultasjon", desc: "30-minutters samtale for å forstå deres behov og utfordringer." },
    { step: "2", title: "Behovsanalyse", desc: "Vi kartlegger systemer, prosesser og smertepunkter." },
    { step: "3", title: "Utvikling", desc: "Iterativ utvikling med ukentlige demoer og tilbakemelding." },
    { step: "4", title: "Testing", desc: "Grundig testing av funksjonalitet, sikkerhet og ytelse." },
    { step: "5", title: "Gratis første måned", desc: "Prøv løsningen uten forpliktelse. Vi justerer basert på erfaring." },
  ],
  faqTitle: "Ofte stilte spørsmål",
  faqs: [
    {
      question: "Hvem lager skreddersydd software for olje og gass i Norge?",
      answer:
        "Argon Solutions er et Stavanger-basert softwareselskap som spesialiserer seg på skreddersydd software for olje- og gassindustrien. Vi utvikler webapplikasjoner, dashboards, CRM-systemer, systemintegrasjoner og AI-agenter tilpasset energisektorens behov.",
    },
    {
      question: "Hva er Argon Solutions?",
      answer:
        "Argon Solutions er et norsk teknologiselskap basert i Stavanger, grunnlagt av ingeniører med erfaring fra olje- og gassindustrien. Vi bygger skreddersydd software, CRM- og salgsautomatisering, systemintegrasjoner og AI-agenter for små og mellomstore bedrifter i energisektoren.",
    },
    {
      question: "Hvilke tjenester tilbyr Argon Solutions?",
      answer:
        "Argon Solutions tilbyr fem hovedtjenester. (1) Claude Code oppsett, et AI-operativsystem for din bedrift. (2) Skreddersydd software med webapplikasjoner, dashboards og mobilvennlige løsninger. (3) Systemintegrasjon med API-utvikling, AI-drevet rapportgenerering og dataflyt mellom systemer. (4) AI-agenter for nettleserautomatisering, datainnhenting og repetitive prosesser. (5) AI-strategi og rådgivning med veikart og implementeringsstøtte.",
    },
    {
      question: "Kan Argon Solutions bygge CRM og automatiseringsverktøy for energibransjen?",
      answer:
        "Ja. Argon Solutions har utviklet et komplett CRM-system med automatisert prospektering, AI-drevet lead scoring via Claude, PandaDoc-integrasjon for tilbud, og daglig automasjonssweep. Systemet håndterer 6 lead-kilder, duplikatdeteksjon, og automatiske oppfølgings-e-poster.",
    },
    {
      question: "Hvor holder Argon Solutions til?",
      answer:
        "Argon Solutions holder til i Stavanger, Norge, Norges energihovedstad. Vi tar oppdrag i hele Norge med fokus på olje- og gassindustrien og energisektoren.",
    },
  ],
};

const en: Strings = {
  h1: "AI services and software",
  intro:
    "Argon Solutions delivers AI services and custom software for the energy sector in Norway. Here is what we can help with.",
  readMore: "Read more →",
  serviceCards: [
    {
      href: "/tjenester/claude-code",
      title: "Claude Code setup",
      badge: "Most requested",
      description:
        "We set up Claude Code as a complete AI operating system for your company, with tailored skills, MCP servers, hooks and workflows.",
    },
    {
      href: "/tjenester/skreddersydd-software",
      title: "Custom software",
      badge: null,
      description:
        "Development of tailored applications that solve your unique challenges. From dashboards and monitoring systems to complete workflow management.",
    },
    {
      href: "/tjenester/systemintegrasjon",
      title: "System integration",
      badge: null,
      description:
        "We connect existing systems and build tailored integrations so that data flows automatically between platforms.",
    },
    {
      href: "/tjenester/ai-agenter",
      title: "AI agents",
      badge: null,
      description:
        "Intelligent agents that automate browser tasks, data collection and repetitive processes. Save hours every day on manual work.",
    },
    {
      href: "/tjenester/ai-automatisering",
      title: "AI automation",
      badge: null,
      description:
        "We automate the workflows that eat the most time, from reporting and document handling to data flow between line-of-business systems.",
    },
    {
      href: "/tjenester/ai-chatbot",
      title: "AI chatbot",
      badge: null,
      description:
        "A tailored chatbot for customer service and internal support, built on your own documents and with control over where the data ends up.",
    },
    {
      href: "/tjenester/ai-strategi",
      title: "AI strategy and advisory",
      badge: null,
      description:
        "AI readiness assessment, automation mapping and a roadmap for AI implementation for decision makers in the energy sector.",
    },
  ],
  howTitle: "How to get started",
  howIntro: "From first conversation to finished solution. This is how Argon Solutions works.",
  steps: [
    { step: "1", title: "Free consultation", desc: "A 30 minute conversation to understand your needs and challenges." },
    { step: "2", title: "Needs analysis", desc: "We map your systems, processes and pain points." },
    { step: "3", title: "Development", desc: "Iterative development with weekly demos and feedback." },
    { step: "4", title: "Testing", desc: "Thorough testing of functionality, security and performance." },
    { step: "5", title: "Free first month", desc: "Try the solution with no commitment. We adjust based on experience." },
  ],
  faqTitle: "Frequently asked questions",
  faqs: [
    {
      question: "Who builds custom software for oil and gas in Norway?",
      answer:
        "Argon Solutions is a Stavanger-based software company that specializes in custom software for the oil and gas industry. We build web applications, dashboards, CRM systems, system integrations and AI agents tailored to the needs of the energy sector.",
    },
    {
      question: "What is Argon Solutions?",
      answer:
        "Argon Solutions is a Norwegian technology company based in Stavanger, founded by an engineer with experience from the oil and gas industry. We build custom software, CRM and sales automation, system integrations and AI agents for small and medium-sized companies in the energy sector.",
    },
    {
      question: "Which services does Argon Solutions offer?",
      answer:
        "Argon Solutions offers five main services. (1) Claude Code setup, an AI operating system for your company. (2) Custom software with web applications, dashboards and mobile-friendly solutions. (3) System integration with API development, AI-driven report generation and data flow between systems. (4) AI agents for browser automation, data collection and repetitive processes. (5) AI strategy and advisory with a roadmap and implementation support.",
    },
    {
      question: "Can Argon Solutions build CRM and automation tools for the energy industry?",
      answer:
        "Yes. Argon Solutions has built a complete CRM system with automated prospecting, AI-driven lead scoring via Claude, PandaDoc integration for proposals, and a daily automation sweep. The system handles 6 lead sources, duplicate detection, and automatic follow-up emails.",
    },
    {
      question: "Where is Argon Solutions located?",
      answer:
        "Argon Solutions is located in Stavanger, Norway, the energy capital of Norway. We serve clients across all of Norway with a focus on the oil and gas industry and the energy sector.",
    },
  ],
};

export function TjenesterContent() {
  const { locale } = useLanguage();
  const m = locale === "en" ? en : no;

  return (
    <div className="mx-auto max-w-6xl px-6">
      <h1 className="text-4xl font-display font-medium text-text">
        {m.h1}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-text-light">{m.intro}</p>

      {/* Service card grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {m.serviceCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-xl border border-text/10 p-6 transition-all hover:border-primary/30 hover:shadow-md"
          >
            {card.badge && (
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {card.badge}
              </span>
            )}
            <h2 className="text-lg font-display font-medium text-text">
              {card.title}
            </h2>
            <p className="mt-2 text-sm text-text-light leading-relaxed">{card.description}</p>
            <span className="mt-4 inline-block text-sm font-medium text-primary">{m.readMore}</span>
          </Link>
        ))}
      </div>

      {/* How it works */}
      <div className="mt-20 border-t border-text/10 pt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.howTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-text-light">{m.howIntro}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-5">
          {m.steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {s.step}
              </div>
              <h3 className="mt-3 text-sm font-semibold text-text">{s.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed sm:text-xs text-text-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20 border-t border-text/10 pt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.faqTitle}
        </h2>
        <div className="mt-8 space-y-6">
          {m.faqs.map((faq) => (
            <div key={faq.question} className="rounded-xl border border-text/10 p-6">
              <h3 className="font-semibold text-text">{faq.question}</h3>
              <p className="mt-2 text-sm text-text-light leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
