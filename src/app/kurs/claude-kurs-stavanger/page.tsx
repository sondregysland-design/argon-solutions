import type { Metadata } from "next";
import { GeoCoursePage, type GeoCourseData } from "@/components/GeoCoursePage";
import { COHORTS } from "@/lib/cohorts";
import { SITE_URL, ORG_REF, faqPageJsonLd, breadcrumbJsonLd, stavangerPlace } from "@/lib/schema";

const pageUrl = `${SITE_URL}/kurs/claude-kurs-stavanger`;
const description =
  "Claude-kurs i Stavanger for deg som vil lære å bruke AI på ekte oppgaver. Praktisk dagskurs i liten gruppe, egen laptop, ingen kodekunnskaper nødvendig. 5 900 kr per plass, pengene tilbake om du ikke er fornøyd.";

export const metadata: Metadata = {
  title: "Claude-kurs i Stavanger, praktisk dagskurs med Claude AI",
  description,
  keywords: ["Claude-kurs Stavanger", "Claude kurs", "AI-kurs Stavanger", "Anthropic Claude kurs", "Claude opplæring Norge"],
  alternates: { canonical: "/kurs/claude-kurs-stavanger" },
  openGraph: {
    title: "Claude-kurs i Stavanger, praktisk dagskurs med Claude AI",
    description,
    url: "/kurs/claude-kurs-stavanger",
  },
};

const data: GeoCourseData = {
  eyebrow: "Argon Kurs / Claude-kurs / Stavanger",
  h1: "Claude-kurs i Stavanger",
  intro: [
    "Leter du etter et Claude-kurs i Stavanger? Argon Solutions holder praktiske dagskurs der du lærer å bruke Claude, AI-assistenten fra Anthropic, på oppgaver fra din egen arbeidshverdag. Én dag, liten gruppe, egen laptop. Du bygger selv hele dagen, med en trener ved siden av deg.",
    "Kurset passer for deg som jobber med dokumenter, tall, e-post eller systemer og vil forbi prøve-og-feile-stadiet. Ingen utviklerbakgrunn kreves. Kan du skrive en tydelig e-post, kan du lære dette.",
  ],
  sections: [
    {
      heading: "Hva er Claude, og hvorfor eget kurs?",
      paragraphs: [
        "Claude er en AI-assistent laget av Anthropic. Den er spesielt sterk på lange dokumenter, analyse, skriving og selvstendig arbeid der AI-en bruker verktøy og filer for deg. Mange har prøvd Claude eller ChatGPT i nettleseren og fått greie svar, men få får verktøyet til å gjøre ekte arbeid. Forskjellen ligger i kontekst, arbeidsflyt og oppsett, og det er akkurat det kurset handler om.",
        "På kurset bruker vi Claude-appen på din egen maskin. Du lærer å gi Claude nok kontekst til å løse oppgaver fra jobben din, å lage gjenbrukbare oppsett som fortsetter å virke etter kurset, og å bygge små verktøy og automatiseringer uten å skrive kode selv.",
      ],
    },
    {
      heading: "Dette lærer du på kurset",
      bullets: [
        { title: "Prompting som virker", desc: "Hvordan gi Claude nok kontekst til å gjøre ekte arbeid, ikke bare svare pent. Dokumenter, analyse og skriving på norsk." },
        { title: "Claude-appen fra null", desc: "Installasjon og oppsett på egen maskin. Du lager dokumenter, analyser og små verktøy direkte i appen." },
        { title: "Automatisere egne oppgaver", desc: "Faste arbeidsflyter og gjenbrukbare oppsett som tar de repetitive delene av jobben din. Bygget på dine egne eksempler." },
        { title: "Bygge noe ekte", desc: "Du går hjem med et verktøy eller en automatisering du bruker dagen etter. Ikke notater, noe som virker." },
      ],
    },
    {
      heading: "Hvem holder kurset",
      paragraphs: [
        "Kurset holdes av Sondre Gysland, som har femten år bak seg fra olje og gass, fra verksted og offshore-operasjoner til kontor og prosjektstyring. Han bygger daglig med Claude og Claude Code, og underviser med de samme verktøyene han bruker selv. Argon Solutions er selskapet bak kursene og bygger også software og AI-agenter for energisektoren i Stavanger.",
        `Neste åpne kursdager i Stavanger er ${COHORTS.map((c) => c.labelNo).join(" og ")}. Lokale annonseres på e-post før kursstart. Fornøyd etter første kursdag, eller pengene tilbake.`,
      ],
    },
  ],
  price: {
    value: "5 900 kr",
    unit: "per plass, åpen kohort i Stavanger",
    note: "Kurs er unntatt merverdiavgift etter merverdiavgiftsloven § 3-5, så prisen du ser er prisen du betaler. Skal dere kurse et helt team, se AI-kurs for bedrift. Der starter prisen på 40 000 kr per kursdag.",
  },
  faqHeading: "Ofte stilte spørsmål om Claude-kurset",
  faqs: [
    {
      q: "Hvem passer Claude-kurset i Stavanger for?",
      a: "Kurset er laget for privatpersoner og enkeltdeltakere som jobber med dokumenter, tall, e-post eller systemer. Ledere, ingeniører, koordinatorer og rådgivere er typiske deltakere. Du trenger ingen utviklerbakgrunn.",
    },
    {
      q: "Hva koster Claude-kurset?",
      a: "5 900 kr per plass for det åpne dagskurset i Stavanger. Kurs er unntatt mva, så prisen du ser er prisen du betaler. Bedriftsinterne kurs starter på 40 000 kr per kursdag.",
    },
    {
      q: "Trenger jeg å kunne programmere?",
      a: "Nei. Hele kurset foregår i Claude-appen, uten at du skriver kode selv. Utviklere som vil dypere kan se Claude Code-kurset vårt i stedet.",
    },
    {
      q: "Hva må jeg ha med på kursdagen?",
      a: "Egen laptop og gjerne en ekte oppgave fra jobben din. Resten setter vi opp sammen på kurset, inkludert Claude-kontoen om du ikke har en.",
    },
    {
      q: "Hva skjer om jeg ikke er fornøyd?",
      a: "Er ikke kurset verdt tiden din etter første kursdag, sier du ifra og får hele kursavgiften tilbake. Ingen diskusjon.",
    },
    {
      q: "Når og hvor holdes kurset?",
      a: `Neste åpne kursdager i Stavanger er ${COHORTS.map((c) => c.labelNo).join(" og ")}, begge 09:00 til 16:00. Lokale annonseres på e-post før kursstart.`,
    },
  ],
  ctaHref: "/kurs#pamelding",
  ctaLabel: "Meld deg på",
  secondaryHref: "/kurs",
  secondaryLabel: "Se hele kursbeskrivelsen",
  relatedHeading: "Relaterte kurs og guider",
  related: [
    { href: "/kurs", label: "Claude Dagskurs (full beskrivelse og påmelding)" },
    { href: "/kurs/claude-code-kurs-stavanger", label: "Claude Code-kurs i Stavanger" },
    { href: "/kurs/ai-kurs-bedrift-stavanger", label: "AI-kurs for bedrift" },
    { href: "/kurs/vibe-coding-kurs-stavanger", label: "Vibe coding-kurs" },
    { href: "/blogg/slik-kommer-du-i-gang-med-claude", label: "Guide: Slik kommer du i gang med Claude" },
    { href: "/blogg/claude-vs-chatgpt-norske-bedrifter", label: "Claude vs ChatGPT for norske bedrifter" },
  ],
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${pageUrl}#course`,
  name: "Claude-kurs i Stavanger (Claude Dagskurs)",
  description,
  url: pageUrl,
  inLanguage: "nb-NO",
  provider: ORG_REF,
  offers: {
    "@type": "Offer",
    price: "5900",
    priceCurrency: "NOK",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/kurs#pamelding`,
  },
  hasCourseInstance: COHORTS.map((c) => ({
    "@type": "CourseInstance",
    courseMode: "Onsite",
    courseWorkload: "P1D",
    startDate: c.id,
    endDate: c.id,
    location: stavangerPlace(),
  })),
  audience: { "@type": "Audience", audienceType: "Privatpersoner og enkeltdeltakere uten utviklerbakgrunn" },
  teaches: [
    "Prompting og kontekst i Claude",
    "Bygge verktøy og automatiseringer i Claude-appen",
    "Automatisere egne arbeidsoppgaver med AI",
  ],
};

const jsonLd = [
  courseJsonLd,
  faqPageJsonLd(pageUrl, data.faqs),
  breadcrumbJsonLd([
    { name: "Hjem", url: SITE_URL },
    { name: "Kurs", url: `${SITE_URL}/kurs` },
    { name: "Claude-kurs i Stavanger", url: pageUrl },
  ]),
];

export default function ClaudeKursStavangerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // Safe: jsonLd is static server-side data, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GeoCoursePage data={data} />
    </>
  );
}
