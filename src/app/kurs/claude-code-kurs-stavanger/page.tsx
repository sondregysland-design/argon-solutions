import type { Metadata } from "next";
import { GeoCoursePage, type GeoCourseData } from "@/components/GeoCoursePage";
import { SITE_URL, ORG_REF, faqPageJsonLd, breadcrumbJsonLd, stavangerPlace } from "@/lib/schema";

const pageUrl = `${SITE_URL}/kurs/claude-code-kurs-stavanger`;
const description =
  "Claude Code-kurs i Stavanger for utviklere og tekniske team. Bedriftsintern opplæring i Claude Code, agenter, skills og automatisering, holdt av folk som bruker verktøyet daglig på egne prosjekter. Fra 40 000 kr per kursdag.";

export const metadata: Metadata = {
  title: "Claude Code-kurs i Stavanger, opplæring for utviklere og team",
  description,
  keywords: ["Claude Code kurs", "Claude Code kurs Stavanger", "Claude Code opplæring", "AI-verktøy for utviklere", "agentisk koding kurs"],
  alternates: { canonical: "/kurs/claude-code-kurs-stavanger" },
  openGraph: {
    title: "Claude Code-kurs i Stavanger, opplæring for utviklere og team",
    description,
    url: "/kurs/claude-code-kurs-stavanger",
  },
};

const data: GeoCourseData = {
  eyebrow: "Argon Industri / Claude Code-kurs / Stavanger",
  h1: "Claude Code-kurs i Stavanger",
  intro: [
    "Claude Code er Anthropics agentiske kodeverktøy. Det leser kodebasen din, skriver og kjører kode, retter feil og løser hele oppgaver fra terminalen eller editoren. Riktig satt opp endrer det hvordan et utviklerteam jobber. Dårlig satt opp blir det en dyr autocomplete.",
    "Argon Solutions holder bedriftsinterne Claude Code-kurs i Stavanger og resten av Norge. Vi kommer til dere, jobber i deres egen kodebase og setter opp verktøyet slik at det fortsetter å levere etter at vi har dratt.",
  ],
  sections: [
    {
      heading: "Hva kurset dekker",
      bullets: [
        { title: "Oppsett og grunnflyt", desc: "Installasjon, autentisering og arbeidsflyten i terminal og editor. CLAUDE.md, kontekststyring og hvordan verktøyet leser prosjektet deres." },
        { title: "Skills, subagenter og hooks", desc: "Gjenbrukbare skills for teamets faste oppgaver, subagenter for parallelt arbeid og hooks som håndhever kodestandarder automatisk." },
        { title: "MCP og integrasjoner", desc: "Koble Claude Code til deres egne systemer, databaser og API-er med MCP-servere, med tilgangsstyring som tåler revisjon." },
        { title: "Datasikkerhet først", desc: "Hva som sendes hvor, hvordan dere avgrenser hva verktøyet får se, og retningslinjer teamet faktisk kan følge. Alltid første tema, spesielt for olje og gass." },
      ],
    },
    {
      heading: "For hvem, og hvordan dagen ser ut",
      paragraphs: [
        "Kurset er laget for utviklerteam og tekniske team i bedrifter, fra to til femten deltakere. Formen er hands-on hele dagen. Vi jobber i deres egen kodebase på deres egne maskiner, ikke i tilrettelagte demoer. Typisk dag starter med oppsett og sikkerhet, fortsetter med grunnflyt og prompting mot ekte kode, og ender med at teamet har bygget egne skills og automatiseringer som er i bruk før dagen er over.",
        "Innholdet tilpasses nivået i teamet. Team som allerede bruker Claude Code får en dag om skills, subagenter, MCP og arbeidsflyt i CI. Team som starter fra null får en trygg og konkret første dag som gjør dem selvgående.",
        "Kursene holdes av folk som bruker Claude Code daglig på egne prosjekter, fra webapplikasjoner og CRM-systemer til AI-agenter for olje og gass. Undervisningen er måten vi selv jobber på, ikke en teoretisk læreplan.",
      ],
    },
    {
      heading: "Ikke utvikler?",
      paragraphs: [
        "Claude Code er ikke bare for utviklere, men dette kurset er teknisk. Jobber du med dokumenter, tall og systemer og vil bruke AI i egen arbeidshverdag, er det åpne Claude-kurset i Stavanger et bedre sted å starte. Vil du bygge apper uten å kunne kode, se vibe coding-kurset.",
      ],
    },
  ],
  price: {
    value: "fra 40 000 kr",
    unit: "per kursdag, bedriftsinternt, hos dere",
    note: "Prisen gjelder hele teamet, ikke per deltaker. Kurs er unntatt merverdiavgift. Endelig pris avhenger av antall deltakere, forberedelser i deres kodebase og om dere vil ha oppfølging etter kurset. Be om tilbud, så svarer vi vanligvis innen 24 timer.",
  },
  faqHeading: "Ofte stilte spørsmål om Claude Code-kurset",
  faqs: [
    {
      q: "Hva er Claude Code?",
      a: "Claude Code er Anthropics agentiske kodeverktøy. Det kjører i terminalen eller editoren, leser kodebasen din, skriver og kjører kode, retter feil og løser hele oppgaver selvstendig. Det brukes av utviklere som vil ha AI som gjør arbeid, ikke bare foreslår linjer.",
    },
    {
      q: "Må deltakerne være utviklere?",
      a: "Dette kurset er laget for utviklere og tekniske team som jobber med kode til daglig. Blandede team kan kombinere det med et generelt AI-kurs for bedrift, der ikke-tekniske deltakere jobber i Claude-appen i stedet.",
    },
    {
      q: "Hva koster et Claude Code-kurs?",
      a: "Bedriftsinterne kurs starter på 40 000 kr per kursdag for hele teamet. Kurs er unntatt mva. Endelig pris avhenger av omfang og antall deltakere.",
    },
    {
      q: "Kan kurset holdes hos oss, utenfor Stavanger?",
      a: "Ja. Vi holder til i Stavanger, men holder bedriftsinterne kurs i hele Norge. Vi kommer til dere og jobber i deres miljø.",
    },
    {
      q: "Hvordan håndterer dere datasikkerhet?",
      a: "Datasikkerhet er første tema på hvert bedriftskurs. Vi går gjennom hva som sendes til modellen, hvordan dere avgrenser tilgang til kode og data, og setter opp retningslinjer tilpasset deres krav. Dette er spesielt viktig for team i olje og gass.",
    },
  ],
  ctaHref: "/kontakt",
  ctaLabel: "Be om tilbud",
  secondaryHref: "/kurs/bedrift",
  secondaryLabel: "Se bedriftsopplegget",
  relatedHeading: "Relaterte kurs og guider",
  related: [
    { href: "/kurs/bedrift", label: "Kurs for bedrifter (Argon Industri)" },
    { href: "/kurs/ai-kurs-bedrift-stavanger", label: "AI-kurs for bedrift i Stavanger" },
    { href: "/kurs/claude-kurs-stavanger", label: "Claude-kurs i Stavanger (åpent dagskurs)" },
    { href: "/tjenester/claude-code", label: "Claude Code-oppsett som tjeneste" },
    { href: "/blogg/claude-code-for-deg-som-ikke-koder", label: "Guide: Claude Code for deg som ikke koder" },
  ],
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${pageUrl}#course`,
  name: "Claude Code-kurs i Stavanger",
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
  audience: { "@type": "Audience", audienceType: "Utviklere og tekniske team i bedrifter" },
  teaches: [
    "Claude Code oppsett og arbeidsflyt",
    "Skills, subagenter og hooks",
    "MCP-servere og integrasjoner",
    "Datasikkerhet og tilgangsstyring for AI-verktøy",
  ],
};

const jsonLd = [
  courseJsonLd,
  faqPageJsonLd(pageUrl, data.faqs),
  breadcrumbJsonLd([
    { name: "Hjem", url: SITE_URL },
    { name: "Kurs", url: `${SITE_URL}/kurs` },
    { name: "Claude Code-kurs i Stavanger", url: pageUrl },
  ]),
];

export default function ClaudeCodeKursStavangerPage() {
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
