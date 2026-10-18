import type { Metadata } from "next";
import { RelatedServices } from "@/components/RelatedServices";
import SystemintegrasjonContent from "./Content";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";
import { ServiceProse } from "@/components/ServiceProse";
import { FaqDetails } from "@/components/FaqDetails";

const description =
  "Argon Solutions kobler sammen eksisterende systemer og bygger skreddersydde API-integrasjoner for energisektoren. Automatisk dataflyt, AI-drevet rapportering og effektive arbeidsflyter.";

export const metadata: Metadata = {
  title: "Systemintegrasjon: API-utvikling og dataflyt",
  description,
  keywords: ["systemintegrasjon", "API-utvikling", "dataflyt automatisering", "integrasjon energisektoren"],
  alternates: { canonical: "/tjenester/systemintegrasjon" },
  openGraph: { images: ["/og-image.png"],
    title: "Systemintegrasjon: API-utvikling og dataflyt",
    description,
    url: "/tjenester/systemintegrasjon",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "System Integration",
  name: "Systemintegrasjon og API-utvikling | Argon Solutions, Stavanger",
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
    q: "Hvilke systemer kan Argon Solutions integrere?",
    a: "Argon Solutions integrerer vanlige systemer i energisektoren: SAP, SharePoint, Maximo, PandaDoc, og andre plattformer via REST API-er og webhooks. Vi bygger skreddersydde API-lag som kobler sammen eksisterende systemer med ny software.",
  },
  {
    q: "Hvem tilbyr systemintegrasjon for olje og gass i Stavanger?",
    a: "Argon Solutions i Stavanger tilbyr systemintegrasjon og API-utvikling for olje- og gassindustrien. Vi kobler sammen eksisterende systemer, bygger automatisert dataflyt, og erstatter manuell dataoverføring med skreddersydde integrasjoner.",
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
    heading: "Hvorfor integrasjonsprosjekter drar ut",
    paragraphs: [
        "De fleste integrasjonsprosjekter stopper ikke på teknikken. De stopper på at ingen har kartlagt hva dataene faktisk betyr i hvert system. Samme felt heter ulike ting i ERP-en og i vedlikeholdssystemet, og en leverandør kan være registrert tre steder med tre ulike identifikatorer. Den jobben må gjøres uansett, og den gjøres billigst før noen skriver kode.",
        "Vi begynner derfor med å følge dataene gjennom arbeidsdagen til de som bruker dem. Hvor oppstår tallet, hvem retter det, og hvor limes det inn manuelt i dag. Svaret på det siste spørsmålet er som regel selve integrasjonen som skal bygges.",
    ],
  },
  {
    heading: "Slik går et integrasjonsprosjekt hos oss",
    paragraphs: [
        "Vi bygger i små steg som kan settes i drift hver for seg, i stedet for en stor leveranse som først viser seg å treffe eller bomme etter et halvt år.",
    ],
    list: [
      { title: "Kartlegging", body: "Vi går gjennom systemene som er involvert, hvilke data som flyttes manuelt i dag, og hvor mye tid det tar. Resultatet er en liste over integrasjoner sortert etter spart tid, ikke etter teknisk eleganse." },
      { title: "Første kobling i drift", body: "Vi bygger den integrasjonen som sparer mest tid først, og setter den i produksjon. Da vet dere om gevinsten er reell før resten bygges." },
      { title: "Overvåking og feilhåndtering", body: "En integrasjon som feiler stille er verre enn ingen integrasjon. Vi bygger inn varsling og retry fra start, slik at dere får beskjed før noen oppdager at et tall mangler i en rapport." },
      { title: "Utvidelse", body: "Når den første koblingen står stabilt, bygges neste. Hver leveranse er i drift før den neste starter." },
    ],
  },
  {
    heading: "Når integrasjon ikke er svaret",
    paragraphs: [
        "Noen ganger er den ærlige anbefalingen å la være. Hvis dataene flyttes én gang i kvartalet, eller hvis systemet skal byttes ut neste år, koster integrasjonen mer enn den sparer. Vi sier fra om det i første samtale i stedet for å selge et prosjekt som ikke bør bygges.",
    ],
  },
];

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Hjem", url: SITE_URL },
  { name: "Tjenester", url: `${SITE_URL}/tjenester` },
  { name: "Systemintegrasjon", url: `${SITE_URL}/tjenester/systemintegrasjon` },
]);

export default function SystemintegrasjonPage() {
  return (
    <div className="py-12 sm:py-20">
      {/* Safe: static server-side constants from this file, not user input */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd, breadcrumbLd]) }}
      />
      <SystemintegrasjonContent />
      <div className="mx-auto max-w-6xl px-6">
        <ServiceProse sections={proseSections} />
        <FaqDetails title="Ofte stilte spørsmål om systemintegrasjon" faqs={faqs} />
      </div>
      <RelatedServices current="/tjenester/systemintegrasjon" />
    </div>
  );
}
