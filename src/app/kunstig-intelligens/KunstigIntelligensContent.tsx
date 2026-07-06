"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

type UseCase = { title: string; description: string; href: string };
type ImplementationStep = { step: string; title: string; description: string };
type Technology = { name: string; description: string };
type Myth = { myth: string; reality: string };
type Faq = { name: string; text: string };
type RelatedResource = { href: string; title: string; description: string };

type Messages = {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  h1: string;
  intro: string;
  byline: string;
  updated: string;
  readingTime: string;

  whatIsTitle: string;
  whatIsP1Pre: string;
  whatIsP1Em: string;
  whatIsP1Post: string;
  whatIsP2Pre: string;
  whatIsP2Strong: string;
  whatIsP2Post: string;
  whatIsP3Pre: string;
  whatIsP3Em: string;
  whatIsP3Post: string;

  useCasesTitle: string;
  useCasesIntro: string;
  useCases: UseCase[];
  readMore: string;

  implementationTitle: string;
  implementationIntro: string;
  implementationSteps: ImplementationStep[];

  technologiesTitle: string;
  technologiesIntro: string;
  technologies: Technology[];

  securityTitle: string;
  securityIntro: string;
  securityBullets: { strong: string; rest: string }[];

  mythsTitle: string;
  mythLabel: string;
  realityLabel: string;
  myths: Myth[];

  faqTitle: string;
  faqs: Faq[];

  relatedTitle: string;
  relatedResources: RelatedResource[];

  ctaTitle: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

const no: Messages = {
  breadcrumbHome: "Hjem",
  breadcrumbCurrent: "Kunstig intelligens",
  h1: "Kunstig intelligens for bedrifter: Komplett guide for 2026",
  intro:
    "Kunstig intelligens (AI) er ikke lenger en fremtidsteknologi. Det er allerede inne i CRM-en, e-postklienten og dokumentbehandlingen til tusenvis av norske bedrifter, som regel uten at noen har tatt en bevisst beslutning om det. Denne guiden forklarer hva AI faktisk er, hvordan norske bedrifter bruker det i praksis, og hvordan du kommer i gang uten å brenne penger på pilot-prosjekter som aldri går i produksjon.",
  byline: "Skrevet av Sondre Gysland, grunder Argon Solutions",
  updated: "Oppdatert 8. mai 2026",
  readingTime: "~12 min lesing",

  whatIsTitle: "Hva er kunstig intelligens, egentlig?",
  whatIsP1Pre: "Kunstig intelligens (forkortet AI fra engelsk ",
  whatIsP1Em: "artificial intelligence",
  whatIsP1Post:
    ") er datasystemer som utfører oppgaver som vanligvis krever menneskelig intelligens. I 2026 betyr det i praksis store språkmodeller (LLM) som Claude, ChatGPT og Gemini, kombinert med verktøy som lar dem lese filer, kjøre kommandoer og koble seg mot andre systemer.",
  whatIsP2Pre:
    "Den store endringen mellom 2022 og 2026 er at AI har gått fra å være en chatbot du snakker med, til å være en ",
  whatIsP2Strong: "autonom agent",
  whatIsP2Post:
    " som tar handling. En chatbot svarer på e-post for deg. En AI-agent leser e-postene, prioriterer dem, drafter svar, og oppdaterer CRM-en mens du sover.",
  whatIsP3Pre:
    "For en norsk bedrift handler det ikke om hvorvidt man skal bruke kunstig intelligens. Det handler om ",
  whatIsP3Em: "hvilke arbeidsflyter",
  whatIsP3Post: " som er mest verdt å automatisere først.",

  useCasesTitle: "6 konkrete bruksområder norske bedrifter får verdi av i dag",
  useCasesIntro:
    "Vi i Argon Solutions har levert AI-prosjekter til kunder i energisektoren og tilstøtende bransjer. Disse seks bruksområdene gir mest forretningsverdi for pengene i 2026.",
  useCases: [
    {
      title: "AI-agenter for repetitive oppgaver",
      description:
        "Autonome AI-agenter som leser e-post, oppdaterer systemer, håndterer dokumenter og sender varsler. En av våre kunder sparte 6 timer per uke ved å automatisere sertifikathåndtering for 47 leverandører, ned til 3 minutter i uken.",
      href: "/tjenester/ai-agenter",
    },
    {
      title: "AI-chatbot for kundedialog og intern support",
      description:
        "Skreddersydde chatbots koblet til bedriftens kunnskapsbase, CRM og fagsystemer. Svarer kunder 24/7 på norsk og engelsk, eskalerer komplekse saker til menneske, og logger alt for kvalitetssikring.",
      href: "/tjenester/ai-chatbot",
    },
    {
      title: "AI for dokumenthåndtering",
      description:
        "Automatisert lesing av PDF-er, kontrakter, drilling-programmer og inspeksjonsrapporter. AI-en henter ut nøkkeldata, fyller skjemaer og flagger avvik. Argon Docs er vårt produkt for denne use casen.",
      href: "/produkter",
    },
    {
      title: "AI lead scoring og salgsautomatisering",
      description:
        "AI som analyserer leads fra 6+ kilder, scorer dem etter sannsynlighet for salg, genererer personalisert outreach, og flytter dem gjennom CRM-pipelinen automatisk.",
      href: "/produkter",
    },
    {
      title: "AI-rapportering og dashboards",
      description:
        "Sanntidsdashboards som henter data fra ulike systemer og bruker AI til å oppsummere status, trender og varsle om avvik. Ferdig formaterte rapporter klare for HMS-møter, ledermøter og kunderapportering.",
      href: "/produkter",
    },
    {
      title: "Claude Code som AI-operativsystem for utviklere",
      description:
        "Vi setter opp Claude Code med skreddersydde skills, MCP-servere og hooks som gjør hele utviklerteamet 2–5x mer produktivt på kodeoppgaver, dokumentasjon og automatisering.",
      href: "/tjenester/claude-code",
    },
  ],
  readMore: "Les mer →",

  implementationTitle: "Slik implementerer du AI uten å brenne budsjettet",
  implementationIntro:
    "De fleste mislykkede AI-prosjekter har én ting til felles. De startet for stort. «Vi skal ha en AI-strategi» ender ofte opp som en 80-siders rapport som ingen bygger noe ut av. Det som faktisk virker er en 5-stegs metode vi bruker med alle våre kunder.",
  implementationSteps: [
    {
      step: "1",
      title: "Identifiser én konkret arbeidsflyt",
      description:
        "Ikke begynn med 'vi vil bruke AI'. Begynn med 'denne prosessen tar oss 4 timer i uken'. AI-prosjekter som mislykkes prøver å løse alt på en gang. AI-prosjekter som lykkes løser én ting først, dokumenterer ROI, og skalerer derfra.",
    },
    {
      step: "2",
      title: "Mål nåsituasjonen",
      description:
        "Hvor mange timer per uke? Hvor mange feil per måned? Hvor mange minutter ventetid for kunden? Uten baseline kan du ikke si om AI faktisk hjalp. Vi anbefaler 2 ukers manuell måling før implementering.",
    },
    {
      step: "3",
      title: "Bygg en pilot på 2–6 uker",
      description:
        "Liten skala, ekte data, ekte brukere. Bruk eksisterende LLM-er (Claude, GPT) heller enn å trene egne modeller. Bygg på Anthropic, OpenAI, Vercel, Supabase, proven stack med tydelig pris og GDPR-historie.",
    },
    {
      step: "4",
      title: "Mål etter implementering",
      description:
        "Sammenlign med baseline. Var det 50% raskere? 80% færre feil? Hvis ja: skaler. Hvis nei: revurder use casen, ikke prosjektet. AI er ikke en løsning på alle problemer, men et veldig kraftig verktøy for noen problemer.",
    },
    {
      step: "5",
      title: "Skaler til neste arbeidsflyt",
      description:
        "Når én use case beviser ROI, blir det enkelt å selge inn den neste. Bygg en intern AI-portefølje. Én ny use case per kvartal slår alltid en stor 'AI-strategi' som aldri leveres.",
    },
  ],

  technologiesTitle: "Teknologier vi bygger på",
  technologiesIntro:
    "Argon Solutions bygger AI-løsninger på en proven stack. Vi har valgt færre verktøy som gjør én ting svært bra, fremfor mange verktøy som gjør alt halvveis.",
  technologies: [
    {
      name: "Claude (Anthropic)",
      description:
        "Vår primære LLM. Best i klassen på instruksjonsfølging, lange dokumenter og kodearbeid. Enterprise-avtale med EU-lagring.",
    },
    {
      name: "Claude Code",
      description:
        "AI-operativsystem som kjører i terminalen og koordinerer komplekse oppgaver autonomt. Vi bygger skreddersydde skills og MCP-servere på toppen.",
    },
    {
      name: "Vercel + Next.js",
      description:
        "Hosting og web-rammeverk. EU-regioner, automatisk skalering, integrert AI-routing.",
    },
    {
      name: "Supabase / PostgreSQL",
      description: "Database og auth. EU-hosting, Row Level Security, sanntidssync.",
    },
    {
      name: "Playwright",
      description:
        "Nettleserautomatisering. AI-en som logger inn på fagsystemer og henter data slik et menneske ville gjort det.",
    },
    {
      name: "n8n / custom workflows",
      description:
        "Workflow-orkestrering for når AI-agenten skal koble flere systemer sammen.",
    },
  ],

  securityTitle: "Sikkerhet og GDPR for kunstig intelligens",
  securityIntro:
    "Det enkleste og største spørsmålet vi får av norske bedrifter er personvern. Svaret er at AI er trygt for sensitive data hvis det settes opp riktig, og ikke trygt hvis det settes opp feil.",
  securityBullets: [
    {
      strong: "Bruk enterprise-avtaler",
      rest: " med Anthropic, OpenAI eller Microsoft. Disse trener ikke på dataene dine og lagrer i EU-regioner.",
    },
    {
      strong: "Maskér personopplysninger",
      rest: " før dataene sendes til LLM-en der det er praktisk. For mange use caser trenger ikke modellen vite hvem «Ola Nordmann» faktisk er.",
    },
    {
      strong: "Logg alt",
      rest: ". Audit-logg på hva AI-en leste, hva den genererte, og hvem som godkjente handlingen. Dette er ofte et krav fra revisor og kompliansen.",
    },
    {
      strong: "Selvhost for de mest sensitive dataene",
      rest: ". For sensitive data finnes åpne modeller som Llama 3 og Mistral som kan kjøres på egen infrastruktur.",
    },
    {
      strong: "Tilgangsstyring per bruker",
      rest: ". En AI-agent skal ikke ha mer tilgang enn den brukeren som kjører den. Bygg AI-en som om den er en ny ansatt som må provisjoneres som alle andre.",
    },
  ],

  mythsTitle: "4 myter om kunstig intelligens",
  mythLabel: "Myte",
  realityLabel: "Virkeligheten",
  myths: [
    {
      myth: "AI vil erstatte alle ansatte",
      reality:
        "Nei. AI er en kraftig multiplikator for de ansatte du allerede har. Ingeniøren som forstår offshore-operasjoner pluss en AI-agent gjør det fem ingeniører pleide å gjøre, men forretningskunnskapen må fortsatt komme fra mennesker.",
    },
    {
      myth: "Vi må trene vår egen AI-modell",
      reality:
        "Sjelden. Forhåndstrente modeller som Claude og GPT er gode nok for 99% av bedrifters bruk. Det du må bygge selv er konteksten, koblingen mot dine data, dine systemer, dine prosesser. Det er der verdien ligger.",
    },
    {
      myth: "Vi må vente til AI er 'modent'",
      reality:
        "Det er det allerede, for de riktige use casene. Konkurrenter som bygger AI-agenter inn i kjerneprosessene sine i 2026 vil ha 18–24 måneders forsprang innen 2028. Begynn smalt nå, ikke stort senere.",
    },
    {
      myth: "AI kan ikke brukes med våre sensitive data",
      reality:
        "Med riktig oppsett kan det. Anthropic, OpenAI og Microsoft tilbyr alle enterprise-avtaler hvor data ikke trenes på, lagres i EU og slettes etter behandling. For ekstra sensitive data finnes selvhostede åpne modeller (Llama, Mistral).",
    },
  ],

  faqTitle: "Ofte stilte spørsmål om kunstig intelligens",
  faqs: [
    {
      name: "Hva er kunstig intelligens?",
      text: "Kunstig intelligens (AI) er datasystemer som utfører oppgaver som vanligvis krever menneskelig intelligens, som å forstå språk, tolke bilder, ta beslutninger og lære av data. Moderne AI bygger i stor grad på store språkmodeller (LLM) som Claude, GPT og Gemini. For bedrifter betyr det programvare som kan lese dokumenter, svare på e-post, oppsummere møter, automatisere arbeidsflyter, og fungere som en autonom AI-agent.",
    },
    {
      name: "Hva koster kunstig intelligens for en norsk bedrift?",
      text: "Kostnaden varierer fra noen hundre kroner per måned for en chatbot til hundretusenvis av kroner for skreddersydd implementering. Argon Solutions tilbyr AI-agenter fra ca. 3.000 kr/mnd, AI-dashboards fra 5.000 kr/mnd, og full skreddersøm fra 15.000 kr/mnd. Første måneden er gratis. Selve LLM-bruken (Claude, ChatGPT) koster typisk 200–2.000 kr/mnd avhengig av volum.",
    },
    {
      name: "Er kunstig intelligens trygt for norske bedrifter (GDPR)?",
      text: "Ja, hvis det settes opp riktig. Bruk LLM-leverandører som tilbyr enterprise-avtaler (Anthropic, OpenAI, Microsoft, Google) som ikke trener på dine data. Lagre data i EU-regioner. Bygg inn audit-logg, tilgangsstyring og maskering av personopplysninger. For sensitive data finnes også selvhostede modeller. Argon Solutions bruker Anthropic Claude med enterprise-avtale og lagrer all kundedata i Vercel/Supabase EU-regioner.",
    },
    {
      name: "Hva er forskjellen på en chatbot og en AI-agent?",
      text: "En chatbot svarer på spørsmål, du må selv handle på svaret. En AI-agent tar handling. En chatbot kan fortelle deg hva som er i e-postene dine. En AI-agent kan svare på dem, oppdatere CRM-en, booke møter og varsle deg når noe haster. Argon Solutions bygger primært autonome AI-agenter med Claude Code som kjernen.",
    },
    {
      name: "Hvor lang tid tar det å implementere AI?",
      text: "Et fokusert pilotprosjekt (én konkret arbeidsflyt automatisert) tar typisk 2–6 uker fra start til produksjon. En full bedriftsutrulling med integrasjoner mot CRM, ERP og fagsystemer tar 3–6 måneder. Begynn alltid smalt med én tydelig use case som har målbar ROI før dere skalerer.",
    },
  ],

  relatedTitle: "Relaterte ressurser",
  relatedResources: [
    {
      href: "/tjenester/ai-agenter",
      title: "AI-agenter",
      description:
        "Slik bygger Argon Solutions autonome AI-agenter som automatiserer repetitive oppgaver.",
    },
    {
      href: "/tjenester/ai-chatbot",
      title: "AI-chatbot",
      description:
        "Skreddersydde chatbots koblet til bedriftens kunnskapsbase og fagsystemer.",
    },
    {
      href: "/tjenester/claude-code",
      title: "Claude Code",
      description:
        "AI-operativsystem for utviklerteam med skills, MCP-servere og hooks.",
    },
    {
      href: "/tjenester/ai-strategi",
      title: "AI-strategi",
      description:
        "Veikart for bedrifter som vil komme i gang med AI uten å brenne budsjettet.",
    },
    {
      href: "/blogg/agentic-ai-i-praksis",
      title: "Agentic AI i praksis",
      description: "Slik bygger vi autonome AI-agenter, et teknisk dypdykk.",
    },
    {
      href: "/blogg/ai-for-bedrifter-norge",
      title: "AI for bedrifter Norge",
      description: "Praktisk veikart for å innføre AI i en norsk bedrift.",
    },
  ],

  ctaTitle: "Klar for å komme i gang med AI?",
  ctaBody:
    "Book en gratis konsultasjon. Vi gjennomgår arbeidsflytene dine og identifiserer hvor AI gir mest verdi for pengene. Første måneden er gratis for nye prosjekter.",
  ctaPrimary: "Book gratis konsultasjon",
  ctaSecondary: "Se alle tjenester",
};

const en: Messages = {
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Artificial intelligence",
  h1: "Artificial intelligence for businesses: A complete guide for 2026",
  intro:
    "Artificial intelligence (AI) is no longer a future technology. It is already inside the CRM, the email client and the document handling of thousands of Norwegian businesses, usually without anyone having made a deliberate decision about it. This guide explains what AI actually is, how Norwegian businesses use it in practice, and how you get started without burning money on pilot projects that never reach production.",
  byline: "Written by Sondre Gysland, founder of Argon Solutions",
  updated: "Updated 8 May 2026",
  readingTime: "~12 min read",

  whatIsTitle: "What is artificial intelligence, really?",
  whatIsP1Pre: "Artificial intelligence (abbreviated AI from ",
  whatIsP1Em: "artificial intelligence",
  whatIsP1Post:
    ") refers to computer systems that perform tasks which normally require human intelligence. In 2026 that means, in practice, large language models (LLMs) such as Claude, ChatGPT and Gemini, combined with tools that let them read files, run commands and connect to other systems.",
  whatIsP2Pre:
    "The big shift between 2022 and 2026 is that AI has gone from being a chatbot you talk to, to being an ",
  whatIsP2Strong: "autonomous agent",
  whatIsP2Post:
    " that takes action. A chatbot answers an email for you. An AI agent reads the emails, prioritises them, drafts replies, and updates the CRM while you sleep.",
  whatIsP3Pre:
    "For a Norwegian business the question is not whether to use artificial intelligence. It is about ",
  whatIsP3Em: "which workflows",
  whatIsP3Post: " are most worth automating first.",

  useCasesTitle: "6 concrete use cases Norwegian businesses get value from today",
  useCasesIntro:
    "We at Argon Solutions have delivered AI projects to clients in the energy sector and adjacent industries. These six use cases give the most business value for the money in 2026.",
  useCases: [
    {
      title: "AI agents for repetitive tasks",
      description:
        "Autonomous AI agents that read email, update systems, handle documents and send alerts. One of our clients saved 6 hours per week by automating certificate handling for 47 suppliers, down to 3 minutes a week.",
      href: "/tjenester/ai-agenter",
    },
    {
      title: "AI chatbot for customer dialogue and internal support",
      description:
        "Tailored chatbots connected to the company knowledge base, CRM and operational systems. They answer customers 24/7 in Norwegian and English, escalate complex cases to a human, and log everything for quality assurance.",
      href: "/tjenester/ai-chatbot",
    },
    {
      title: "AI for document handling",
      description:
        "Automated reading of PDFs, contracts, drilling programmes and inspection reports. The AI extracts key data, fills in forms and flags deviations. Argon Docs is our product for this use case.",
      href: "/produkter",
    },
    {
      title: "AI lead scoring and sales automation",
      description:
        "AI that analyses leads from 6+ sources, scores them by likelihood of a sale, generates personalised outreach, and moves them through the CRM pipeline automatically.",
      href: "/produkter",
    },
    {
      title: "AI reporting and dashboards",
      description:
        "Real-time dashboards that pull data from various systems and use AI to summarise status, trends and alert on deviations. Ready-formatted reports prepared for HSE meetings, leadership meetings and client reporting.",
      href: "/produkter",
    },
    {
      title: "Claude Code as an AI operating system for developers",
      description:
        "We set up Claude Code with tailored skills, MCP servers and hooks that make the whole developer team 2–5x more productive on coding tasks, documentation and automation.",
      href: "/tjenester/claude-code",
    },
  ],
  readMore: "Read more →",

  implementationTitle: "How to implement AI without burning the budget",
  implementationIntro:
    "Most failed AI projects have one thing in common. They started too big. “We need an AI strategy” often ends up as an 80-page report that nobody builds anything from. What actually works is a 5-step method we use with all our clients.",
  implementationSteps: [
    {
      step: "1",
      title: "Identify one concrete workflow",
      description:
        "Do not start with 'we want to use AI'. Start with 'this process takes us 4 hours a week'. AI projects that fail try to solve everything at once. AI projects that succeed solve one thing first, document the ROI, and scale from there.",
    },
    {
      step: "2",
      title: "Measure the current situation",
      description:
        "How many hours per week? How many errors per month? How many minutes of waiting time for the customer? Without a baseline you cannot tell whether AI actually helped. We recommend 2 weeks of manual measurement before implementation.",
    },
    {
      step: "3",
      title: "Build a pilot in 2–6 weeks",
      description:
        "Small scale, real data, real users. Use existing LLMs (Claude, GPT) rather than training your own models. Build on Anthropic, OpenAI, Vercel, Supabase, a proven stack with clear pricing and a GDPR track record.",
    },
    {
      step: "4",
      title: "Measure after implementation",
      description:
        "Compare against the baseline. Was it 50% faster? 80% fewer errors? If yes, scale. If no, reconsider the use case, not the project. AI is not a solution to every problem, but a very powerful tool for some problems.",
    },
    {
      step: "5",
      title: "Scale to the next workflow",
      description:
        "Once one use case proves its ROI, it becomes easy to sell in the next. Build an internal AI portfolio. One new use case per quarter always beats a big 'AI strategy' that never ships.",
    },
  ],

  technologiesTitle: "Technologies we build on",
  technologiesIntro:
    "Argon Solutions builds AI solutions on a proven stack. We have chosen fewer tools that do one thing very well, rather than many tools that do everything halfway.",
  technologies: [
    {
      name: "Claude (Anthropic)",
      description:
        "Our primary LLM. Best in class on instruction following, long documents and coding work. Enterprise agreement with EU storage.",
    },
    {
      name: "Claude Code",
      description:
        "An AI operating system that runs in the terminal and coordinates complex tasks autonomously. We build tailored skills and MCP servers on top.",
    },
    {
      name: "Vercel + Next.js",
      description:
        "Hosting and web framework. EU regions, automatic scaling, integrated AI routing.",
    },
    {
      name: "Supabase / PostgreSQL",
      description: "Database and auth. EU hosting, Row Level Security, real-time sync.",
    },
    {
      name: "Playwright",
      description:
        "Browser automation. The AI that logs in to operational systems and fetches data the way a human would.",
    },
    {
      name: "n8n / custom workflows",
      description:
        "Workflow orchestration for when the AI agent needs to connect several systems together.",
    },
  ],

  securityTitle: "Security and GDPR for artificial intelligence",
  securityIntro:
    "The simplest and biggest question we get from Norwegian businesses is privacy. The answer is that AI is safe for sensitive data if it is set up correctly, and not safe if it is set up wrong.",
  securityBullets: [
    {
      strong: "Use enterprise agreements",
      rest: " with Anthropic, OpenAI or Microsoft. These do not train on your data and store it in EU regions.",
    },
    {
      strong: "Mask personal data",
      rest: " before the data is sent to the LLM where that is practical. For many use cases the model does not need to know who “Ola Nordmann” actually is.",
    },
    {
      strong: "Log everything",
      rest: ". An audit log of what the AI read, what it generated, and who approved the action. This is often a requirement from auditors and compliance.",
    },
    {
      strong: "Self-host for the most sensitive data",
      rest: ". For sensitive data there are open models such as Llama 3 and Mistral that can run on your own infrastructure.",
    },
    {
      strong: "Access control per user",
      rest: ". An AI agent should not have more access than the user who runs it. Build the AI as if it were a new employee that must be provisioned like everyone else.",
    },
  ],

  mythsTitle: "4 myths about artificial intelligence",
  mythLabel: "Myth",
  realityLabel: "The reality",
  myths: [
    {
      myth: "AI will replace all employees",
      reality:
        "No. AI is a powerful multiplier for the employees you already have. The engineer who understands offshore operations plus an AI agent does what five engineers used to do, but the business knowledge still has to come from people.",
    },
    {
      myth: "We have to train our own AI model",
      reality:
        "Rarely. Pre-trained models such as Claude and GPT are good enough for 99% of business use. What you have to build yourself is the context, the connection to your data, your systems, your processes. That is where the value lies.",
    },
    {
      myth: "We have to wait until AI is 'mature'",
      reality:
        "It already is, for the right use cases. Competitors who build AI agents into their core processes in 2026 will have an 18–24 month head start by 2028. Start narrow now, not big later.",
    },
    {
      myth: "AI cannot be used with our sensitive data",
      reality:
        "With the right setup it can. Anthropic, OpenAI and Microsoft all offer enterprise agreements where data is not trained on, is stored in the EU and is deleted after processing. For extra sensitive data there are self-hosted open models (Llama, Mistral).",
    },
  ],

  faqTitle: "Frequently asked questions about artificial intelligence",
  faqs: [
    {
      name: "What is artificial intelligence?",
      text: "Artificial intelligence (AI) refers to computer systems that perform tasks which normally require human intelligence, such as understanding language, interpreting images, making decisions and learning from data. Modern AI is largely built on large language models (LLMs) such as Claude, GPT and Gemini. For businesses it means software that can read documents, answer email, summarise meetings, automate workflows, and act as an autonomous AI agent.",
    },
    {
      name: "What does artificial intelligence cost for a Norwegian business?",
      text: "The cost varies from a few hundred kroner per month for a chatbot to hundreds of thousands of kroner for a tailored implementation. Argon Solutions offers AI agents from about 3,000 kr/month, AI dashboards from 5,000 kr/month, and full custom builds from 15,000 kr/month. The first month is free. The LLM usage itself (Claude, ChatGPT) typically costs 200–2,000 kr/month depending on volume.",
    },
    {
      name: "Is artificial intelligence safe for Norwegian businesses (GDPR)?",
      text: "Yes, if it is set up correctly. Use LLM providers that offer enterprise agreements (Anthropic, OpenAI, Microsoft, Google) that do not train on your data. Store data in EU regions. Build in an audit log, access control and masking of personal data. For sensitive data there are also self-hosted models. Argon Solutions uses Anthropic Claude with an enterprise agreement and stores all client data in Vercel/Supabase EU regions.",
    },
    {
      name: "What is the difference between a chatbot and an AI agent?",
      text: "A chatbot answers questions, you still have to act on the answer yourself. An AI agent takes action. A chatbot can tell you what is in your emails. An AI agent can answer them, update the CRM, book meetings and alert you when something is urgent. Argon Solutions primarily builds autonomous AI agents with Claude Code at the core.",
    },
    {
      name: "How long does it take to implement AI?",
      text: "A focused pilot project (one concrete workflow automated) typically takes 2–6 weeks from start to production. A full enterprise rollout with integrations to CRM, ERP and operational systems takes 3–6 months. Always start narrow with one clear use case that has measurable ROI before you scale.",
    },
  ],

  relatedTitle: "Related resources",
  relatedResources: [
    {
      href: "/tjenester/ai-agenter",
      title: "AI agents",
      description:
        "How Argon Solutions builds autonomous AI agents that automate repetitive tasks.",
    },
    {
      href: "/tjenester/ai-chatbot",
      title: "AI chatbot",
      description:
        "Tailored chatbots connected to the company knowledge base and operational systems.",
    },
    {
      href: "/tjenester/claude-code",
      title: "Claude Code",
      description:
        "AI operating system for developer teams with skills, MCP servers and hooks.",
    },
    {
      href: "/tjenester/ai-strategi",
      title: "AI strategy",
      description:
        "A roadmap for businesses that want to get started with AI without burning the budget.",
    },
    {
      href: "/blogg/agentic-ai-i-praksis",
      title: "Agentic AI in practice",
      description: "How we build autonomous AI agents, a technical deep dive.",
    },
    {
      href: "/blogg/ai-for-bedrifter-norge",
      title: "AI for businesses in Norway",
      description: "A practical roadmap for introducing AI in a Norwegian business.",
    },
  ],

  ctaTitle: "Ready to get started with AI?",
  ctaBody:
    "Book a free consultation. We review your workflows and identify where AI gives the most value for the money. The first month is free for new projects.",
  ctaPrimary: "Book a free consultation",
  ctaSecondary: "See all services",
};

export function KunstigIntelligensContent() {
  const { locale } = useLanguage();
  const m = locale === "en" ? en : no;

  return (
    <div className="mx-auto max-w-4xl px-6">
      <nav className="mb-8 flex items-center gap-2 text-sm text-text-light">
        <Link href="/" className="hover:text-text transition-colors">
          {m.breadcrumbHome}
        </Link>
        <span>/</span>
        <span className="text-text">{m.breadcrumbCurrent}</span>
      </nav>

      <h1 className="text-4xl font-display font-medium text-text md:text-5xl">
        {m.h1}
      </h1>
      <p className="mt-6 text-lg text-text-light">{m.intro}</p>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-text-light">
        <span>{m.byline}</span>
        <span>·</span>
        <span>{m.updated}</span>
        <span>·</span>
        <span>{m.readingTime}</span>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.whatIsTitle}
        </h2>
        <p className="mt-4 text-text-light">
          {m.whatIsP1Pre}
          <em>{m.whatIsP1Em}</em>
          {m.whatIsP1Post}
        </p>
        <p className="mt-3 text-text-light">
          {m.whatIsP2Pre}
          <strong className="text-text">{m.whatIsP2Strong}</strong>
          {m.whatIsP2Post}
        </p>
        <p className="mt-3 text-text-light">
          {m.whatIsP3Pre}
          <em>{m.whatIsP3Em}</em>
          {m.whatIsP3Post}
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.useCasesTitle}
        </h2>
        <p className="mt-4 text-text-light">{m.useCasesIntro}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {m.useCases.map((uc) => (
            <Link
              key={uc.title}
              href={uc.href}
              className="group block rounded-xl border border-text/10 p-6 transition-colors hover:border-primary/30 hover:bg-surface"
            >
              <h3 className="text-lg font-semibold text-primary">{uc.title}</h3>
              <p className="mt-2 text-sm text-text-light">{uc.description}</p>
              <span className="mt-4 inline-block text-sm text-primary group-hover:underline">
                {m.readMore}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.implementationTitle}
        </h2>
        <p className="mt-4 text-text-light">{m.implementationIntro}</p>
        <ol className="mt-8 space-y-6">
          {m.implementationSteps.map((s) => (
            <li
              key={s.step}
              className="flex gap-6 rounded-xl border border-text/10 p-6"
            >
              <span className="text-3xl font-display font-medium text-primary">
                {s.step}
              </span>
              <div>
                <h3 className="font-semibold text-text">{s.title}</h3>
                <p className="mt-2 text-sm text-text-light">{s.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.technologiesTitle}
        </h2>
        <p className="mt-4 text-text-light">{m.technologiesIntro}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {m.technologies.map((t) => (
            <div key={t.name} className="rounded-xl border border-text/10 p-5">
              <h3 className="font-semibold text-text">{t.name}</h3>
              <p className="mt-2 text-sm text-text-light">{t.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.securityTitle}
        </h2>
        <p className="mt-4 text-text-light">{m.securityIntro}</p>
        <ul className="mt-6 space-y-3 text-sm text-text-light">
          {m.securityBullets.map((b) => (
            <li key={b.strong} className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <strong className="text-text">{b.strong}</strong>
                {b.rest}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.mythsTitle}
        </h2>
        <div className="mt-8 space-y-6">
          {m.myths.map((myth) => (
            <div key={myth.myth} className="rounded-xl border border-text/10 p-6">
              <h3 className="font-semibold text-text">
                {m.mythLabel}: {myth.myth}
              </h3>
              <p className="mt-2 text-sm text-text-light">
                <strong className="text-text">{m.realityLabel}:</strong>{" "}
                {myth.reality}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.faqTitle}
        </h2>
        <div className="mt-8 space-y-4">
          {m.faqs.map((q) => (
            <details
              key={q.name}
              className="group rounded-xl border border-text/10 p-6"
            >
              <summary className="cursor-pointer font-semibold text-text">
                {q.name}
              </summary>
              <p className="mt-3 text-sm text-text-light">{q.text}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.relatedTitle}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {m.relatedResources.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="rounded-xl border border-text/10 p-5 hover:border-primary/30 hover:bg-surface transition-colors"
            >
              <h3 className="font-semibold text-text">{r.title}</h3>
              <p className="mt-1 text-sm text-text-light">{r.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-20 rounded-2xl bg-primary/5 p-8 text-center md:p-12">
        <h2 className="text-2xl font-display font-medium text-text">
          {m.ctaTitle}
        </h2>
        <p className="mt-4 text-text-light">{m.ctaBody}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/kontakt"
            className="rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_var(--color-primary)] transition hover:bg-primary-dark"
          >
            {m.ctaPrimary}
          </Link>
          <Link
            href="/tjenester"
            className="rounded-xl border border-primary/30 bg-white px-8 py-3 text-sm font-semibold text-primary transition hover:bg-surface"
          >
            {m.ctaSecondary}
          </Link>
        </div>
      </div>
    </div>
  );
}
