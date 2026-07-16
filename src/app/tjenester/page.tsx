import type { Metadata } from "next";
import { TjenesterContent } from "./TjenesterContent";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";

const description =
  "Argon Solutions leverer AI-tjenester, Claude Code-oppsett, skreddersydd software, systemintegrasjon og AI-agenter for norske bedrifter i energisektoren.";

export const metadata: Metadata = {
  title: "AI-tjenester og software for energisektoren",
  description,
  keywords: ["AI-tjenester", "AI tjenester Norge", "software energisektoren", "AI-byrå Stavanger"],
  alternates: { canonical: "/tjenester" },
  openGraph: {
    title: "AI-tjenester og software for energisektoren",
    description,
    url: "/tjenester",
  },
};

const serviceCards = [
  {
    href: "/tjenester/claude-code",
    title: "Claude Code oppsett",
    badge: "Mest etterspurt",
    description:
      "Vi setter opp Claude Code som et komplett AI-operativsystem for din bedrift: med skreddersydde skills, MCP-servere, hooks og arbeidsflyter.",
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
    href: "/tjenester/ai-strategi",
    title: "AI-strategi og rådgivning",
    badge: null,
    description:
      "AI readiness-vurdering, automatiseringskartlegging og veikart for AI-implementering for beslutningstakere i energisektoren.",
  },
];

const faqs = [
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
      "Argon Solutions tilbyr fem hovedtjenester: (1) Claude Code oppsett: AI-operativsystem for din bedrift. (2) Skreddersydd software: webapplikasjoner, dashboards og mobilvenlige løsninger. (3) Systemintegrasjon: API-utvikling, AI-drevet rapportgenerering og dataflyt mellom systemer. (4) AI-agenter: nettleserautomatisering, datainnhenting og repetitive prosesser. (5) AI-strategi og rådgivning: veikart og implementeringsstøtte.",
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
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Services and Custom Software Development",
  provider: {
    "@type": "Organization",
    "@id": "https://argonsolutions.no/#organization",
    name: "Argon Solutions",
  },
  areaServed: { "@type": "Country", name: "Norway" },
  description,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tjenester",
    itemListElement: serviceCards.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
      },
    })),
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Slik kommer du i gang med skreddersydd software fra Argon Solutions",
  description:
    "Steg-for-steg prosess for å få utviklet skreddersydd software for olje- og gassindustrien med Argon Solutions.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Book en gratis konsultasjon",
      text: "Kontakt Argon Solutions via kontaktskjemaet eller e-post post@argonsolutions.no for å diskutere ditt behov.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Behovsanalyse og kravspesifikasjon",
      text: "Vi kartlegger eksisterende systemer, arbeidsprosesser og smertepunkter for å definere løsningen.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Utvikling med løpende demo",
      text: "Vi bygger løsningen iterativt med ukentlige demoer slik at dere ser fremdriften og kan gi tilbakemelding.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Testing og lansering",
      text: "Grundig testing av funksjonalitet, sikkerhet og ytelse før produksjonslansering.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Gratis første måned",
      text: "Dere prøver løsningen gratis den første måneden uten forpliktelse. Vi justerer basert på tilbakemelding.",
    },
  ],
};

const allTjenesterJsonLd = [
  faqJsonLd,
  serviceJsonLd,
  howToJsonLd,
  breadcrumbJsonLd([
    { name: "Hjem", url: SITE_URL },
    { name: "Tjenester", url: `${SITE_URL}/tjenester` },
  ]),
];

export default function TjenesterPage() {
  return (
    <div className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allTjenesterJsonLd) }}
      />
      <TjenesterContent />
    </div>
  );
}
