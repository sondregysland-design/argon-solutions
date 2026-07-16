import type { Metadata } from "next";
import { GeoCoursePage, type GeoCourseData } from "@/components/GeoCoursePage";
import { SITE_URL, ORG_REF, faqPageJsonLd, breadcrumbJsonLd, stavangerPlace } from "@/lib/schema";

const pageUrl = `${SITE_URL}/kurs/ai-kurs-bedrift-stavanger`;
const description =
  "AI-kurs for bedrifter i Stavanger og resten av Norge. Bedriftsintern opplæring i Claude og AI-verktøy, bygget rundt deres egne arbeidsflyter, med datasikkerhet som første tema. Fra 40 000 kr per kursdag for hele teamet.";

export const metadata: Metadata = {
  title: "AI-kurs for bedrift i Stavanger, opplæring hos dere",
  description,
  keywords: ["AI-kurs bedrift", "AI-kurs bedrift Stavanger", "AI-opplæring bedrift", "bedriftsinternt AI-kurs", "Claude kurs bedrift"],
  alternates: { canonical: "/kurs/ai-kurs-bedrift-stavanger" },
  openGraph: {
    title: "AI-kurs for bedrift i Stavanger, opplæring hos dere",
    description,
    url: "/kurs/ai-kurs-bedrift-stavanger",
  },
};

const data: GeoCourseData = {
  eyebrow: "Argon Industri / AI-kurs for bedrift / Stavanger",
  h1: "AI-kurs for bedrift i Stavanger",
  intro: [
    "De fleste bedrifter har allerede prøvd AI. Noen ansatte bruker ChatGPT i smug, noen har en lisens de ikke får brukt, og ingen vet helt hva som er lov å lime inn. Et godt bedriftskurs rydder i dette. Felles verktøy, felles kjøreregler og ferdigheter som faktisk brukes uken etter.",
    "Argon Solutions holder bedriftsinterne AI-kurs i Stavanger og resten av Norge under navnet Argon Industri. Vi kommer til dere, bygger dagen rundt deres egne arbeidsflyter og starter alltid med datasikkerhet. Spesielt viktig for bedrifter i olje og gass som håndterer sensitiv informasjon.",
  ],
  sections: [
    {
      heading: "Hvordan et bedriftskurs ser ut",
      paragraphs: [
        "Ingen bedrifter har samme behov, så vi starter med en kort kartlegging før kursdagen. Hvilke oppgaver spiser mest tid hos dere? Hvilke systemer og dokumenttyper jobber teamet i? Ut fra det bygger vi en kursdag der deltakerne løser sine egne oppgaver med AI, ikke generiske demoer.",
        "En typisk dag starter med kjøreregler og datasikkerhet, hva som kan og ikke kan deles med AI-verktøy, og hvordan dere setter opp kontoer og tilganger riktig. Deretter jobber alle hands-on i Claude med egne dokumenter og arbeidsflyter. Mot slutten av dagen setter vi automatiseringene i system, slik at de fortsetter å virke etter kurset. Ledelsen kan i tillegg få en egen økt om hvor AI faktisk sparer tid i deres drift, og hva som er hype.",
      ],
    },
    {
      heading: "Innhold som tilpasses teamet",
      bullets: [
        { title: "For hele kontoret", desc: "Dokumenter, rapporter, e-post, analyse og møtereferater med Claude. Prompting og kontekst som gjør at AI-en leverer arbeid dere kan bruke." },
        { title: "For ledelsen", desc: "Hvor sparer AI tid i deres drift, hva er realistisk, og hvilke kjøreregler trenger dere. Kort økt, konkrete beslutninger." },
        { title: "For utviklere", desc: "Egne dypdykk i Claude Code, agenter, skills og integrasjoner. Se også det egne Claude Code-kurset for rent tekniske team." },
        { title: "For olje og gass", desc: "Vi kommer selv fra bransjen og vet hvor skoen trykker. Prosedyrer, sertifikater, leverandørportaler og HMS-dokumentasjon er typiske kursoppgaver." },
      ],
    },
    {
      heading: "Hvorfor Argon",
      paragraphs: [
        "Kursene holdes av folk som bruker verktøyene daglig. Grunnleggerne kommer selv fra olje og gass, fra verksted og offshore-operasjoner til kontor og prosjektstyring, og bygger til daglig software, AI-agenter og automatiseringer med de samme verktøyene det undervises i. Opplæringen er måten vi selv jobber på, ikke en innleid læreplan.",
        "Vi er et lite selskap fra Stavanger. Dere snakker direkte med de som holder kurset, før, under og etter. Ingen mellomledd og ingen support-kø.",
      ],
    },
  ],
  price: {
    value: "fra 40 000 kr",
    unit: "per kursdag, bedriftsinternt, hos dere",
    note: "Prisen gjelder hele teamet, ikke per deltaker. Kurs er unntatt merverdiavgift. Endelig pris avhenger av antall deltakere, kartlegging på forhånd og eventuell oppfølging etterpå. Be om tilbud, så svarer vi vanligvis innen 24 timer.",
  },
  faqHeading: "Ofte stilte spørsmål om AI-kurs for bedrift",
  faqs: [
    {
      q: "Hva koster et AI-kurs for bedrift?",
      a: "Bedriftsinterne kurs starter på 40 000 kr per kursdag for hele teamet, ikke per deltaker. Kurs er unntatt mva. Endelig pris avhenger av antall deltakere og omfang.",
    },
    {
      q: "Hvor holdes kurset?",
      a: "Hos dere. Vi holder til i Stavanger, men holder bedriftskurs i hele Norge. Alt vi trenger er et møterom og at deltakerne har egne laptoper.",
    },
    {
      q: "Må deltakerne ha teknisk bakgrunn?",
      a: "Nei. Kursene er laget for folk som jobber med dokumenter, tall og systemer. Utviklere får egne dypdykk i Claude Code når det er aktuelt.",
    },
    {
      q: "Hvordan håndterer dere datasikkerhet?",
      a: "Datasikkerhet er alltid første tema. Vi går gjennom hva som kan og ikke kan deles med AI-verktøy, hvordan kontoer og tilganger settes opp, og lager kjøreregler tilpasset deres bransje og krav.",
    },
    {
      q: "Hvilke AI-verktøy brukes på kurset?",
      a: "Primært Claude fra Anthropic, som er spesielt sterk på lange dokumenter, analyse og selvstendig arbeid. Prinsippene deltakerne lærer overføres lett til andre AI-verktøy bedriften måtte bruke.",
    },
    {
      q: "Hva sitter vi igjen med etter kurset?",
      a: "Konkrete oppsett og automatiseringer bygget på deres egne oppgaver, kjøreregler for AI-bruk, og ansatte som har løst ekte arbeid med verktøyet i løpet av dagen. Oppfølging etter kurset kan avtales.",
    },
  ],
  ctaHref: "/kontakt",
  ctaLabel: "Be om tilbud",
  secondaryHref: "/kurs/bedrift",
  secondaryLabel: "Se bedriftsopplegget",
  relatedHeading: "Relaterte kurs og guider",
  related: [
    { href: "/kurs/bedrift", label: "Kurs for bedrifter (Argon Industri)" },
    { href: "/kurs/claude-code-kurs-stavanger", label: "Claude Code-kurs for utviklerteam" },
    { href: "/kurs/claude-kurs-stavanger", label: "Claude-kurs i Stavanger (åpent dagskurs)" },
    { href: "/blogg/claude-vs-chatgpt-norske-bedrifter", label: "Claude vs ChatGPT for norske bedrifter" },
    { href: "/blogg/slik-kommer-du-i-gang-med-claude", label: "Guide: Slik kommer du i gang med Claude" },
  ],
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${pageUrl}#course`,
  name: "AI-kurs for bedrift i Stavanger",
  description,
  url: pageUrl,
  inLanguage: "nb-NO",
  provider: ORG_REF,
  offers: {
    "@type": "Offer",
    priceCurrency: "NOK",
    priceSpecification: { "@type": "PriceSpecification", minPrice: 40000, priceCurrency: "NOK" },
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/kontakt`,
    category: "Bedriftsinternt kurs, per kursdag",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: "Onsite",
      courseWorkload: "P1D",
      location: stavangerPlace(),
      description: "Bedriftsinternt kurs hos dere, dato etter avtale. Vi holder kurs i Stavanger og resten av Norge.",
    },
  ],
  audience: { "@type": "Audience", audienceType: "Bedrifter og team, med egne opplegg for ledelse, kontor og utviklere" },
  teaches: [
    "AI-kjøreregler og datasikkerhet for bedrifter",
    "Claude på egne dokumenter og arbeidsflyter",
    "Automatisering av repetitive oppgaver",
  ],
};

const jsonLd = [
  courseJsonLd,
  faqPageJsonLd(pageUrl, data.faqs),
  breadcrumbJsonLd([
    { name: "Hjem", url: SITE_URL },
    { name: "Kurs", url: `${SITE_URL}/kurs` },
    { name: "AI-kurs for bedrift i Stavanger", url: pageUrl },
  ]),
];

export default function AiKursBedriftStavangerPage() {
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
