import type { Metadata } from "next";
import { GeoCoursePage, type GeoCourseData } from "@/components/GeoCoursePage";
import { COHORTS } from "@/lib/cohorts";
import { SITE_URL, ORG_REF, faqPageJsonLd, breadcrumbJsonLd, stavangerPlace } from "@/lib/schema";

const pageUrl = `${SITE_URL}/kurs/vibe-coding-kurs-stavanger`;
const description =
  "Vibe coding-kurs i Stavanger. Lær å bygge apper og verktøy ved å beskrive dem på norsk, mens AI-en skriver koden. Praktisk dagskurs for deg uten utviklerbakgrunn. 5 900 kr per plass.";

export const metadata: Metadata = {
  title: "Vibe coding-kurs i Stavanger, bygg apper uten å kunne kode",
  description,
  keywords: ["vibe coding kurs", "vibe coding", "vibe coding Stavanger", "bygge app uten koding", "AI-koding kurs", "lage app med AI"],
  alternates: { canonical: "/kurs/vibe-coding-kurs-stavanger" },
  openGraph: {
    title: "Vibe coding-kurs i Stavanger, bygg apper uten å kunne kode",
    description,
    url: "/kurs/vibe-coding-kurs-stavanger",
  },
};

const data: GeoCourseData = {
  eyebrow: "Argon Kurs / Vibe coding-kurs / Stavanger",
  h1: "Vibe coding-kurs i Stavanger",
  intro: [
    "Vibe coding er å bygge programvare ved å beskrive hva du vil ha, på vanlig norsk, mens AI-en skriver koden. Du styrer, AI-en bygger, og du trenger ikke lese koden selv. Mye av det som krevde et utviklerteam for få år siden, kan du nå lage selv på en ettermiddag.",
    "På vibe coding-kurset i Stavanger lærer du håndverket bak. For det er et håndverk. Forskjellen på et leketøy og et verktøy du faktisk bruker, ligger i hvordan du beskriver, tester og justerer det AI-en lager. Én dag, liten gruppe, egen laptop, og du går hjem med en app eller et verktøy som virker.",
  ],
  sections: [
    {
      heading: "Hva er vibe coding?",
      paragraphs: [
        "Begrepet kommer fra AI-forskeren Andrej Karpathy og beskriver en ny måte å lage programvare på. I stedet for å skrive kode selv, beskriver du hva du vil ha, ser på resultatet, og ber om endringer til det stemmer. AI-verktøy som Claude gjør selve kodingen, og du vurderer resultatet slik du ville vurdert arbeidet til en kollega.",
        "Det betyr ikke at alt blir bra automatisk. Uten struktur ender mange med halvferdige prosjekter som ser fine ut men ryker ved første feil. På kurset lærer du arbeidsmåten som gjør vibe coding pålitelig. Beskrive tydelig, dele opp i småbiter, teste underveis og be AI-en rette sine egne feil.",
      ],
    },
    {
      heading: "Dette bygger du på kurset",
      bullets: [
        { title: "Ditt første verktøy", desc: "En liten app eller kalkulator bygget fra en beskrivelse på norsk. Du ser hele løpet fra idé til noe som kjører." },
        { title: "Noe du faktisk trenger", desc: "Vi tar utgangspunkt i din egen hverdag. Et skjema, en oversikt, en generator, et lite system. Du velger, vi veileder." },
        { title: "Feilsøking uten kode", desc: "Hva gjør du når det ikke virker? Du lærer å få AI-en til å finne og rette sine egne feil, uten å åpne koden." },
        { title: "Veien videre", desc: "Hvordan du deler det du har bygget, og hva neste steg er om du vil videre mot Claude Code og større prosjekter." },
      ],
    },
    {
      heading: "Hvem passer kurset for?",
      paragraphs: [
        "Kurset er for deg som har ideer til verktøy og apper, men ikke utviklerbakgrunn. Typiske deltakere jobber i drift, administrasjon, salg, HMS eller prosjekt, og er lei av å vente på IT-avdelingen eller dyre konsulenter for småverktøy de kunne skissert på en serviett.",
        `Kurset bygger på samme opplegg som Claude Dagskurs og holdes i Stavanger. Neste åpne kursdager er ${COHORTS.map((c) => c.labelNo).join(" og ")}. Fornøyd etter første kursdag, eller pengene tilbake.`,
        "Er du utvikler og vil ha den tekniske dybden, se heller Claude Code-kurset for team.",
      ],
    },
  ],
  price: {
    value: "5 900 kr",
    unit: "per plass, åpen kohort i Stavanger",
    note: "Kurs er unntatt merverdiavgift etter merverdiavgiftsloven § 3-5, så prisen du ser er prisen du betaler. Vil dere kjøre vibe coding-workshop for et helt team, starter bedriftsinterne kurs på 40 000 kr per kursdag.",
  },
  faqHeading: "Ofte stilte spørsmål om vibe coding",
  faqs: [
    {
      q: "Hva betyr vibe coding?",
      a: "Vibe coding er å lage programvare ved å beskrive hva du vil ha på vanlig språk, mens AI-verktøy skriver koden. Begrepet ble kjent gjennom AI-forskeren Andrej Karpathy. Du styrer retningen og vurderer resultatet, AI-en gjør selve kodingen.",
    },
    {
      q: "Kan jeg virkelig lage en app uten å kunne kode?",
      a: "Ja. Med verktøy som Claude beskriver du appen på norsk og får kjørende programvare tilbake. Det du trenger å lære er å beskrive tydelig, teste underveis og be om riktige endringer. Det er akkurat det kurset handler om.",
    },
    {
      q: "Hva koster vibe coding-kurset?",
      a: "5 900 kr per plass for det åpne dagskurset i Stavanger. Kurs er unntatt mva, så prisen du ser er prisen du betaler.",
    },
    {
      q: "Hvilke verktøy bruker vi?",
      a: "Vi bruker Claude fra Anthropic, primært Claude-appen. Den lar deg bygge og kjøre små apper og verktøy direkte i samtalen, uten oppsett. Arbeidsmåten du lærer overføres til andre AI-verktøy.",
    },
    {
      q: "Hva skiller dette fra Claude Dagskurs?",
      a: "Samme praktiske format og samme pris, men vinklingen er å bygge apper og verktøy fra bunnen. Claude Dagskurs favner bredere, med dokumenter, analyse og automatisering av arbeidsoppgaver. Usikker? Meld deg på dagskurset og si hva du vil bygge i kommentarfeltet.",
    },
    {
      q: "Når og hvor holdes kurset?",
      a: `I Stavanger, ${COHORTS.map((c) => c.labelNo).join(" og ")}, 09:00 til 16:00. Lokale annonseres på e-post før kursstart.`,
    },
  ],
  ctaHref: "/kurs#pamelding",
  ctaLabel: "Meld deg på",
  secondaryHref: "/kurs",
  secondaryLabel: "Se hele kursbeskrivelsen",
  relatedHeading: "Relaterte kurs og guider",
  related: [
    { href: "/kurs", label: "Claude Dagskurs (full beskrivelse og påmelding)" },
    { href: "/kurs/claude-kurs-stavanger", label: "Claude-kurs i Stavanger" },
    { href: "/kurs/claude-code-kurs-stavanger", label: "Claude Code-kurs for utviklerteam" },
    { href: "/blogg/claude-code-for-deg-som-ikke-koder", label: "Guide: Claude Code for deg som ikke koder" },
    { href: "/blogg/slik-kommer-du-i-gang-med-claude", label: "Guide: Slik kommer du i gang med Claude" },
  ],
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${pageUrl}#course`,
  name: "Vibe coding-kurs i Stavanger",
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
  audience: { "@type": "Audience", audienceType: "Folk uten utviklerbakgrunn som vil bygge apper og verktøy med AI" },
  teaches: [
    "Vibe coding, bygge programvare ved å beskrive den",
    "Teste og feilsøke AI-bygde verktøy uten å lese kode",
    "Gjenbrukbare arbeidsmåter for AI-bygging",
  ],
};

const jsonLd = [
  courseJsonLd,
  faqPageJsonLd(pageUrl, data.faqs),
  breadcrumbJsonLd([
    { name: "Hjem", url: SITE_URL },
    { name: "Kurs", url: `${SITE_URL}/kurs` },
    { name: "Vibe coding-kurs i Stavanger", url: pageUrl },
  ]),
];

export default function VibeCodingKursStavangerPage() {
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
