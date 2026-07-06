"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

const CheckIcon = () => (
  <svg
    className="h-4 w-4 shrink-0 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const no = {
  breadcrumbServices: "Tjenester",
  breadcrumbCurrent: "AI-chatbot",
  h1: "AI-chatbot for bedrifter",
  intro:
    "Skreddersydde AI-chatbots koblet til kunnskapsbasen, CRM-en og fagsystemene dine. Svarer kunder og ansatte 24/7 på norsk og engelsk, eskalerer det den ikke kan, og logger alt for kvalitetssikring.",
  whatTitle: "Hva er en moderne AI-chatbot?",
  whatP1:
    "En chatbot fra 2026 ligner ikke chatbots fra 2020. Den følger ikke skript med ferdige knapper. I stedet er den en samtaleagent drevet av en stor språkmodell (LLM) som Claude eller GPT, koblet til bedriftens kunnskapsbase og systemer via RAG (retrieval augmented generation).",
  whatP2:
    "Resultatet er en chatbot som forstår spørsmålet på naturlig norsk, henter relevante dokumenter, og svarer med sitater fra kildene. Hvis den ikke vet svaret, sier den det, i stedet for å hallusinere. Når den treffer kanten av sin kompetanse, eskalerer den til en saksbehandler med full kontekst.",
  useCasesTitle: "6 use caser hvor chatbots gir verdi for norske bedrifter",
  useCases: [
    {
      title: "Kundeservice 24/7",
      description:
        "Svarer på de 50–80% av spørsmålene kundene stiller om og om igjen, som produktinformasjon, ordrestatus, åpningstider og fraktdetaljer. Eskalerer komplekse saker til menneske med full kontekst.",
    },
    {
      title: "Intern support og kunnskapsbase",
      description:
        "Ansatte får svar på HR-, IT- og prosess-spørsmål uten å avbryte kollegene. Chatboten kjenner alle interne dokumenter, prosedyrer og policy-er.",
    },
    {
      title: "Leadkvalifisering",
      description:
        "Snakker med besøkende på nettsiden din, stiller kvalifiserende spørsmål, scorer leaden, og booker møter direkte i kalenderen din når lead er kvalifisert.",
    },
    {
      title: "Dokumentsøk og rapport-assistent",
      description:
        "Spør chatboten på naturlig norsk. Hva sa kunden i e-poster fra forrige måned, eller finn alle inspeksjonsrapporter med korrosjon over 5 mm. Chatboten leser kildene og svarer med sitater.",
    },
    {
      title: "Onboarding av nye ansatte",
      description:
        "Ny ansatt kan stille chatboten alle de spørsmålene de ikke vil mase med på sjefen om. Hvordan jeg leverer reiseregning, hvor finner jeg HMS-skjemaer, hvem skal jeg ringe ved sykmelding.",
    },
    {
      title: "Tekniske spørsmål om produkter",
      description:
        "For teknisk komplekse produkter kan chatboten kalibreringsdokumentasjonen, datablad og brukermanualene utenat. Reduserer support-tickets dramatisk.",
    },
  ],
  featuresTitle: "Hva som skiller chatbots vi bygger",
  features: [
    {
      title: "Drevet av Claude AI",
      description:
        "Vi bygger primært på Anthropic Claude, best i klassen på norsk språk, lange dokumenter og presise svar. Enterprise-avtale med EU-lagring og ingen trening på dine data.",
    },
    {
      title: "Koblet mot dine systemer",
      description:
        "Chatboten leser fra Supabase/PostgreSQL, Notion, SharePoint, Google Drive, CRM-en din eller hva enn dere bruker. RAG-basert oppsett, så chatboten vet bare det den faktisk kan dokumentere.",
    },
    {
      title: "Eskalering til menneske",
      description:
        "Når chatboten er usikker eller spørsmålet er for komplekst, eskaleres samtalen til en saksbehandler, med full samtalehistorikk og foreslåtte svar.",
    },
    {
      title: "Tospråklig (norsk + engelsk)",
      description:
        "Detekterer automatisk språk og svarer i samme språk som brukeren. Viktig for selskaper med utenlandske ansatte eller internasjonale kunder.",
    },
    {
      title: "Audit-logg og analytics",
      description:
        "Hver samtale logges. Du ser hva chatboten ble spurt om, hva den svarte, og hvor den feilet. Bruk dataene til å trene chatboten bedre eller oppdatere kunnskapsbasen.",
    },
    {
      title: "GDPR-kompatibel",
      description:
        "EU-hosting, ingen trening på persondata, sletting på forespørsel, audit-logg på all behandling av personopplysninger. Vi hjelper med DPA og databehandleravtaler.",
    },
  ],
  channelsTitle: "Kanaler chatboten kan distribueres på",
  channelsIntro:
    "Bygg én gang, distribuer overalt. Samme kunnskapsbase, samme svar, uavhengig av hvor brukeren snakker med boten.",
  integrationPlatforms: [
    "Webside (vanlig chat-widget)",
    "Slack",
    "Microsoft Teams",
    "WhatsApp Business",
    "E-post (svarer på innkommende automatisk)",
    "SMS",
    "API (egen app eller portal)",
  ],
  processTitle: "Slik bygger vi chatboten din",
  processSteps: [
    {
      step: "1",
      title: "Use case og kunnskapsbase",
      description:
        "Vi kartlegger hvilke spørsmål chatboten skal svare på, hvilke kilder den skal lese fra, og hvor grensen mellom AI og menneske skal gå.",
    },
    {
      step: "2",
      title: "Pilot på 2–4 uker",
      description:
        "Vi bygger en fungerende chatbot på begrenset use case og tester med ekte brukere. Iterer raskt før utrulling.",
    },
    {
      step: "3",
      title: "Integrasjoner og eskalering",
      description:
        "Vi kobler chatboten mot CRM, kunnskapsbase, ticket-system og kanalene den skal være tilgjengelig på.",
    },
    {
      step: "4",
      title: "Lansering og monitorering",
      description:
        "Audit-logg fra dag 1. Ukentlig review av samtaler, prompt-justeringer og kunnskapsbase-oppdateringer.",
    },
  ],
  compareTitle: "Hva med ChatGPT? Trenger vi en skreddersydd chatbot?",
  comparePrefix:
    "Et godt spørsmål som vi får ofte. Generelle ChatGPT/Claude-abonnementer er utmerkede for ansatte som skal skrive, oppsummere eller idégenerere. En skreddersydd chatbot er noe annet. Den er koblet til ",
  compareYour: "dine",
  compareMid1: " data, ",
  compareMid2: " kunder og ",
  compareSuffix: " systemer.",
  compareLeftTitle: "ChatGPT Enterprise / Claude Teams",
  compareLeftBody:
    "Generelt verktøy for ansatte. Trenger ikke vite noe om bedriften din. Best til skriving, oppsummeringer, brainstorm.",
  compareRightTitle: "Skreddersydd AI-chatbot",
  compareRightBody:
    "Kunne dine kunder og ansatte. Koblet til dine systemer. Eskalerer til menneske. Logger alt. Tilgjengelig på alle kanaler. Best til kundeservice, intern support, dokumentsøk.",
  compareFooter:
    "Mange av våre kunder bruker begge. ChatGPT/Claude for individuelt arbeid, og en skreddersydd chatbot for kundedialog og prosesser.",
  ctaTitle: "Klar for å bygge en chatbot som faktisk fungerer?",
  ctaText:
    "Book en gratis konsultasjon. Vi gjennomgår use casene dine og foreslår den enkleste piloten som beviser verdi. Første måneden gratis for nye prosjekter.",
  ctaButtonPrimary: "Book konsultasjon",
  ctaButtonSecondary: "Les guide om AI",
};

const en: typeof no = {
  breadcrumbServices: "Services",
  breadcrumbCurrent: "AI chatbot",
  h1: "AI chatbot for businesses",
  intro:
    "Tailored AI chatbots connected to your knowledge base, CRM and operational systems. Answers customers and employees 24/7 in Norwegian and English, escalates what it cannot handle, and logs everything for quality assurance.",
  whatTitle: "What is a modern AI chatbot?",
  whatP1:
    "A chatbot from 2026 is nothing like the chatbots of 2020. It does not follow scripts with predefined buttons. Instead it is a conversational agent driven by a large language model (LLM) such as Claude or GPT, connected to the company's knowledge base and systems through RAG (retrieval augmented generation).",
  whatP2:
    "The result is a chatbot that understands the question in natural language, retrieves relevant documents, and answers with quotations from the sources. If it does not know the answer, it says so rather than hallucinating. When it reaches the edge of its competence, it escalates to a case handler with full context.",
  useCasesTitle: "6 use cases where chatbots add value for Norwegian businesses",
  useCases: [
    {
      title: "Customer service 24/7",
      description:
        "Answers the 50–80% of questions customers ask again and again, such as product information, order status, opening hours and shipping details. Escalates complex cases to a human with full context.",
    },
    {
      title: "Internal support and knowledge base",
      description:
        "Employees get answers to HR, IT and process questions without interrupting their colleagues. The chatbot knows all internal documents, procedures and policies.",
    },
    {
      title: "Lead qualification",
      description:
        "Talks with visitors on your website, asks qualifying questions, scores the lead, and books meetings directly in your calendar once a lead is qualified.",
    },
    {
      title: "Document search and report assistant",
      description:
        "Ask the chatbot in natural language. What did the customer say in emails from last month, or find all inspection reports with corrosion above 5 mm. The chatbot reads the sources and answers with quotations.",
    },
    {
      title: "Onboarding of new employees",
      description:
        "A new employee can ask the chatbot all the questions they do not want to bother the boss with. How do I submit a travel expense report, where do I find HSE forms, who do I call when reporting sick leave.",
    },
    {
      title: "Technical questions about products",
      description:
        "For technically complex products, the chatbot knows the calibration documentation, data sheets and user manuals by heart. Reduces support tickets dramatically.",
    },
  ],
  featuresTitle: "What sets apart the chatbots we build",
  features: [
    {
      title: "Powered by Claude AI",
      description:
        "We build primarily on Anthropic Claude, best in class for the Norwegian language, long documents and precise answers. Enterprise agreement with EU storage and no training on your data.",
    },
    {
      title: "Connected to your systems",
      description:
        "The chatbot reads from Supabase/PostgreSQL, Notion, SharePoint, Google Drive, your CRM or whatever you use. A RAG-based setup, so the chatbot only knows what it can actually document.",
    },
    {
      title: "Escalation to a human",
      description:
        "When the chatbot is uncertain or the question is too complex, the conversation escalates to a case handler, with the full conversation history and suggested answers.",
    },
    {
      title: "Bilingual (Norwegian and English)",
      description:
        "Automatically detects the language and answers in the same language as the user. Important for companies with foreign employees or international customers.",
    },
    {
      title: "Audit log and analytics",
      description:
        "Every conversation is logged. You see what the chatbot was asked, what it answered, and where it failed. Use the data to train the chatbot better or update the knowledge base.",
    },
    {
      title: "GDPR compliant",
      description:
        "EU hosting, no training on personal data, deletion on request, an audit log on all processing of personal information. We help with DPA and data processing agreements.",
    },
  ],
  channelsTitle: "Channels the chatbot can be distributed on",
  channelsIntro:
    "Build once, distribute everywhere. The same knowledge base, the same answers, regardless of where the user talks to the bot.",
  integrationPlatforms: [
    "Website (standard chat widget)",
    "Slack",
    "Microsoft Teams",
    "WhatsApp Business",
    "Email (answers incoming messages automatically)",
    "SMS",
    "API (your own app or portal)",
  ],
  processTitle: "How we build your chatbot",
  processSteps: [
    {
      step: "1",
      title: "Use case and knowledge base",
      description:
        "We map which questions the chatbot should answer, which sources it should read from, and where the line between AI and human should go.",
    },
    {
      step: "2",
      title: "Pilot in 2–4 weeks",
      description:
        "We build a working chatbot on a limited use case and test it with real users. We iterate quickly before rollout.",
    },
    {
      step: "3",
      title: "Integrations and escalation",
      description:
        "We connect the chatbot to the CRM, knowledge base, ticket system and the channels it should be available on.",
    },
    {
      step: "4",
      title: "Launch and monitoring",
      description:
        "An audit log from day 1. Weekly review of conversations, prompt adjustments and knowledge base updates.",
    },
  ],
  compareTitle: "What about ChatGPT? Do we need a tailored chatbot?",
  comparePrefix:
    "A good question that we get often. General ChatGPT/Claude subscriptions are excellent for employees who write, summarise or brainstorm. A tailored chatbot is something different. It is connected to ",
  compareYour: "your",
  compareMid1: " data, ",
  compareMid2: " customers and ",
  compareSuffix: " systems.",
  compareLeftTitle: "ChatGPT Enterprise / Claude Teams",
  compareLeftBody:
    "A general tool for employees. Does not need to know anything about your business. Best for writing, summaries and brainstorming.",
  compareRightTitle: "Tailored AI chatbot",
  compareRightBody:
    "Knows your customers and employees. Connected to your systems. Escalates to a human. Logs everything. Available on all channels. Best for customer service, internal support and document search.",
  compareFooter:
    "Many of our customers use both. ChatGPT/Claude for individual work, and a tailored chatbot for customer dialogue and processes.",
  ctaTitle: "Ready to build a chatbot that actually works?",
  ctaText:
    "Book a free consultation. We review your use cases and propose the simplest pilot that proves value. The first month is free for new projects.",
  ctaButtonPrimary: "Book a consultation",
  ctaButtonSecondary: "Read our AI guide",
};

export default function AIChatbotContent() {
  const { locale } = useLanguage();
  const m = locale === "en" ? en : no;

  return (
    <div className="mx-auto max-w-6xl px-6">
      <nav className="mb-8 flex items-center gap-2 text-sm text-text-light">
        <Link href="/tjenester" className="hover:text-text transition-colors">
          {m.breadcrumbServices}
        </Link>
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
        <h2 className="text-2xl font-display font-medium text-text">
          {m.whatTitle}
        </h2>
        <p className="mt-4 text-text-light">
          {m.whatP1}
        </p>
        <p className="mt-3 text-text-light">
          {m.whatP2}
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.useCasesTitle}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {m.useCases.map((uc) => (
            <div
              key={uc.title}
              className="rounded-xl border border-text/10 p-6"
            >
              <h3 className="text-lg font-semibold text-primary">
                {uc.title}
              </h3>
              <p className="mt-2 text-sm text-text-light">{uc.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 border-t border-text/10 pt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.featuresTitle}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {m.features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-text/10 p-6"
            >
              <h3 className="font-semibold text-text">{f.title}</h3>
              <p className="mt-2 text-sm text-text-light">{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 border-t border-text/10 pt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.channelsTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-text-light">
          {m.channelsIntro}
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {m.integrationPlatforms.map((p) => (
            <li
              key={p}
              className="flex items-center gap-3 rounded-xl border border-text/10 px-5 py-4 text-sm text-text"
            >
              <CheckIcon />
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20 border-t border-text/10 pt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.processTitle}
        </h2>
        <ol className="mt-8 space-y-6">
          {m.processSteps.map((s) => (
            <li
              key={s.step}
              className="flex gap-6 rounded-xl border border-text/10 p-6"
            >
              <span className="text-3xl font-display font-medium text-primary">
                {s.step}
              </span>
              <div>
                <h3 className="font-semibold text-text">{s.title}</h3>
                <p className="mt-2 text-sm text-text-light">
                  {s.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-20 border-t border-text/10 pt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.compareTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-text-light">
          {m.comparePrefix}
          <strong className="text-text">{m.compareYour}</strong>
          {m.compareMid1}
          <strong className="text-text">{m.compareYour}</strong>
          {m.compareMid2}
          <strong className="text-text">{m.compareYour}</strong>
          {m.compareSuffix}
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-text/10 p-6">
            <h3 className="font-semibold text-text">
              {m.compareLeftTitle}
            </h3>
            <p className="mt-2 text-sm text-text-light">
              {m.compareLeftBody}
            </p>
          </div>
          <div className="rounded-xl border border-text/10 p-6 ring-2 ring-primary/30">
            <h3 className="font-semibold text-primary">
              {m.compareRightTitle}
            </h3>
            <p className="mt-2 text-sm text-text-light">
              {m.compareRightBody}
            </p>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-text-light">
          {m.compareFooter}
        </p>
      </div>

      <div className="mt-20 rounded-2xl bg-primary/5 p-8 text-center md:p-12">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.ctaTitle}
        </h2>
        <p className="mt-4 text-text-light">
          {m.ctaText}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/kontakt"
            className="rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_var(--color-primary)] transition hover:bg-primary-dark"
          >
            {m.ctaButtonPrimary}
          </Link>
          <Link
            href="/kunstig-intelligens"
            className="rounded-xl border border-primary/30 bg-white px-8 py-3 text-sm font-semibold text-primary transition hover:bg-surface"
          >
            {m.ctaButtonSecondary}
          </Link>
        </div>
      </div>
    </div>
  );
}
