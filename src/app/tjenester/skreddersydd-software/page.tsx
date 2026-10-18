import type { Metadata } from "next";
import { RelatedServices } from "@/components/RelatedServices";
import SkreddersyddSoftwareContent from "./Content";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";
import { ServiceProse } from "@/components/ServiceProse";
import { FaqDetails } from "@/components/FaqDetails";

const description =
  "Argon Solutions utvikler skreddersydde webapplikasjoner og dashboards for energisektoren. Mobilvenlige løsninger, sanntids datavisualisering og offline-støtte for feltarbeid.";

export const metadata: Metadata = {
  title: "Skreddersydd Software: Applikasjoner for energisektoren",
  description,
  keywords: ["skreddersydd software", "webapplikasjoner energisektoren", "dashboard olje gass", "software Stavanger"],
  alternates: { canonical: "/tjenester/skreddersydd-software" },
  openGraph: { images: ["/og-image.png"],
    title: "Skreddersydd Software: Applikasjoner for energisektoren",
    description,
    url: "/tjenester/skreddersydd-software",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Custom Software Development",
  name: "Skreddersydd Software for olje og gass | Argon Solutions, Stavanger",
  provider: {
    "@type": "Organization",
    "@id": "https://www.argonsolutions.no/#organization",
    name: "Argon Solutions",
  },
  areaServed: { "@type": "Country", name: "Norway" },
  description,
};

const faqs = [
  {
    q: "Hvem lager skreddersydd software for olje og gass i Stavanger?",
    a: "Argon Solutions i Stavanger lager skreddersydd software for olje- og gassindustrien. Selskapet spesialiserer seg på webapplikasjoner, dashboards, prosjektstyringsverktøy og offline-løsninger for feltarbeid, bygget med Next.js, Supabase og Claude AI.",
  },
  {
    q: "Hva koster skreddersydd software for energisektoren?",
    a: "Argon Solutions tilbyr gratis første måned for alle prosjekter. Etter pilotperioden avhenger prisen av prosjektomfang. Et typisk MVP tar 4-8 uker å utvikle. Kontakt post@argonsolutions.no eller ring +47 452 09 979 for et uforpliktende estimat.",
  },
  {
    q: "Kan skreddersydd software fungere offline på offshore-plattformer?",
    a: "Ja. Argon Solutions bygger progressive web-applikasjoner (PWA) med offline-støtte, slik at feltarbeidere kan registrere data uten internettilgang. Data synkroniseres automatisk når tilkoblingen gjenopprettes.",
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

const proseSections = [
  {
    heading: "Når skreddersøm slår hyllevare",
    paragraphs: [
        "Standardsystemer er som regel riktig valg. De er billigere, de vedlikeholdes av noen andre, og de dekker det de fleste trenger. Skreddersøm lønner seg i det smale tilfellet der arbeidsflyten deres er selve konkurransefortrinnet, og der et standardsystem tvinger dere til å jobbe på en måte som gjør jobben tregere.",
        "I olje og gass er det ofte dokumentflyt, sertifikathåndtering og rapportering til kunde som havner der. Prosessene er formet av krav fra operatør og av hvordan akkurat deres folk jobber offshore, og ingen hyllevare treffer den formen uten at noen bøyer seg.",
    ],
  },
  {
    heading: "Hvordan vi priser og leverer",
    paragraphs: [
        "Vi tar ingen oppsettskostnad, og første måned er gratis. Deretter er det et månedlig abonnement som dekker hosting, vedlikehold og support. Grunnen er enkel. I et tradisjonelt prosjekt betaler kunden hele utviklingen før noen vet om løsningen treffer. Med abonnement ligger risikoen hos oss, og dere kan stoppe hvis den ikke gjør det.",
        "Et typisk første versjon tar 4 til 8 uker fra start til noe som er i bruk. Det er ikke et ferdig system, det er den minste versjonen som løser den faktiske oppgaven, slik at vi kan bygge videre på noe folk allerede bruker.",
    ],
    list: [
      { title: "Webapplikasjoner og dashboards", body: "Sanntidsvisning av prosjekt, utstyr eller produksjon, bygget for de skjermene folk faktisk har foran seg." },
      { title: "Offline-støtte for feltarbeid", body: "Progressive webapper som lar folk registrere data uten nett, og som synkroniserer når forbindelsen kommer tilbake. Relevant offshore og i felt." },
      { title: "Dokument- og rapportautomatisering", body: "Word- og PDF-rapporter generert fra data dere allerede har, i stedet for at noen fyller inn samme tall for hånd hver uke." },
    ],
  },
];

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Hjem", url: SITE_URL },
  { name: "Tjenester", url: `${SITE_URL}/tjenester` },
  { name: "Skreddersydd software", url: `${SITE_URL}/tjenester/skreddersydd-software` },
]);

export default function SkreddersyddSoftwarePage() {
  return (
    <div className="py-12 sm:py-20">
      {/* Safe: both objects are static server-side constants, not user input */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd, breadcrumbLd]) }}
      />
      <SkreddersyddSoftwareContent />
      <div className="mx-auto max-w-6xl px-6">
        <ServiceProse sections={proseSections} />
        <FaqDetails title="Ofte stilte spørsmål om skreddersydd software" faqs={faqs} />
      </div>
      <RelatedServices current="/tjenester/skreddersydd-software" />
    </div>
  );
}
