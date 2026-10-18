import type { Metadata } from "next";
import { RelatedServices } from "@/components/RelatedServices";
import ClaudeCodeContent from "./Content";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";
import { FaqDetails } from "@/components/FaqDetails";

const description =
  "Argon Solutions setter opp Claude Code som et komplett AI-operativsystem for din bedrift. Skreddersydde skills, MCP-servere, hooks og arbeidsflyter. AI-byrå i Stavanger.";

export const metadata: Metadata = {
  title: "Claude Code for bedrifter: Oppsett, opplæring og rådgivning",
  description,
  keywords: ["Claude Code", "Claude Code oppsett", "Claude Code bedrift", "AI operativsystem", "AI-byrå Stavanger"],
  alternates: { canonical: "/tjenester/claude-code" },
  openGraph: { images: ["/og-image.png"],
    title: "Claude Code for bedrifter: Oppsett, opplæring og rådgivning",
    description,
    url: "/tjenester/claude-code",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Claude Code Setup and Training",
  name: "Claude Code for bedrifter",
  provider: { "@type": "Organization", "@id": "https://www.argonsolutions.no/#organization", name: "Argon Solutions" },
  areaServed: { "@type": "Country", name: "Norway" },
  description,
  offers: [
    { "@type": "Offer", name: "Intro", description: "2-timers introduksjon for enkeltpersoner." },
    { "@type": "Offer", name: "Interactive", description: "Halvdags workshop for utviklerteam." },
    { "@type": "Offer", name: "Interactive+", description: "Heldags dypdykk for tekniske team." },
    { "@type": "Offer", name: "Team Setup", description: "Komplett oppsett + 30 dager support." },
  ],
};

const faqs = [
  {
    q: "Hva er Claude Code?",
    a: "Claude Code er Anthropics verktøy som kjører i terminalen på din egen maskin. Det leser og skriver filer direkte, kjører kommandoer og løser hele oppgaver selvstendig, i stedet for å svare i et chattevindu som du selv må handle på.",
  },
  {
    q: "Er Claude Code bare for utviklere?",
    a: "Nei. Utviklere får mest ut av det i kodebaser, men verktøyet er like nyttig for dokumenthåndtering, rapportgenerering og automatisering av repetitive kontoroppgaver. Alt som ligger som filer på en maskin kan Claude Code jobbe med.",
  },
  {
    q: "Hva er skills, hooks og MCP-servere?",
    a: "Skills er skreddersydde kommandoer som koder inn bedriftens egne arbeidsflyter, slik at de kjøres likt hver gang. Hooks kjører automatisk på bestemte tidspunkt, typisk linting eller tester før noe blir commitet. MCP-servere gir Claude Code direkte tilgang til systemene dere allerede bruker, som databaser, e-post eller prosjektverktøy.",
  },
  {
    q: "Hva koster et Claude Code-oppsett for en bedrift?",
    a: "Selve verktøyet følger Claude-abonnementet. Kostnaden ligger i oppsett og opplæring. Bedriftsinterne Claude Code-kurs starter på 40 000 kr per kursdag for hele teamet.",
  },
  {
    q: "Hvor lang tid tar det å komme i gang?",
    a: "Et fungerende grunnoppsett med CLAUDE.md, noen skills og et par hooks tar typisk en dag. Å modne oppsettet med MCP-servere mot egne systemer tar noen uker med faktisk bruk.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const jsonLd = [
  faqJsonLd,
  serviceJsonLd,
  breadcrumbJsonLd([
    { name: "Hjem", url: SITE_URL },
    { name: "Tjenester", url: `${SITE_URL}/tjenester` },
    { name: "Claude Code-oppsett", url: `${SITE_URL}/tjenester/claude-code` },
  ]),
];

export default function ClaudeCodePage() {
  return (
    <div className="py-12 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ClaudeCodeContent />
      <div className="mx-auto max-w-6xl px-6">
        <FaqDetails title={"Ofte stilte spørsmål om Claude Code"} faqs={faqs} />
      </div>
      <RelatedServices current="/tjenester/claude-code" />
    </div>
  );
}