import type { Metadata } from "next";
import { RelatedServices } from "@/components/RelatedServices";
import AIAgenterContent from "./Content";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";
import { ServiceProse } from "@/components/ServiceProse";
import { FaqDetails } from "@/components/FaqDetails";

const description =
  "Argon Solutions bygger AI-agenter og agentic AI-løsninger som automatiserer nettleseroppgaver, datainnhenting og repetitive prosesser for energisektoren i Norge.";

export const metadata: Metadata = {
  title: "AI-agenter: Agentic AI og automatisering",
  description,
  keywords: ["AI-agenter", "agentic AI", "automatisering energisektoren", "nettleserautomatisering", "AI agent Norge"],
  alternates: { canonical: "/tjenester/ai-agenter" },
  openGraph: { images: ["/og-image.png"],
    title: "AI-agenter: Agentic AI og automatisering",
    description,
    url: "/tjenester/ai-agenter",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Agents and Automation",
  name: "AI-agenter og agentic AI fra Argon Solutions i Stavanger",
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
    q: "Hva er en AI-agent?",
    a: "En AI-agent er et autonomt program som kombinerer nettleserautomatisering (Playwright) med kunstig intelligens (Claude AI) for å utføre oppgaver uten menneskelig inngripen. Argon Solutions bygger AI-agenter for energisektoren i Stavanger som automatiserer datainnhenting, skjemautfylling og leverandørhåndtering.",
  },
  {
    q: "Hvor mye tid kan en AI-agent spare?",
    a: "I teamets egen arbeidsflyt i olje og gass reduserte Argon Solutions' AI-agent 6 timer manuelt portalarbeid til 3 minutter per uke, med 47 leverandørportaler behandlet automatisk.",
  },
  {
    q: "Hvem bygger AI-agenter i Stavanger?",
    a: "Argon Solutions er et AI-byrå i Stavanger som spesialiserer seg på å bygge AI-agenter og agentic AI-løsninger for energisektoren. Selskapet bruker Playwright og Claude AI til å automatisere nettleseroppgaver og repetitive prosesser.",
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
    heading: "Hva skiller en agent fra en chatbot",
    paragraphs: [
        "En chatbot svarer på spørsmål, og du må selv handle på svaret. En AI-agent tar handling. En chatbot kan fortelle deg hva som står i e-postene dine. En agent kan svare på dem, oppdatere CRM-en og varsle deg når noe haster.",
        "Det praktiske skillet er om oppgaven avsluttes med et svar eller med at noe faktisk har skjedd i et system. Er det siste, er det en agent du trenger.",
    ],
  },
  {
    heading: "Et eksempel fra vår egen arbeidsdag",
    paragraphs: [
        "Vi bygde den første agenten for å bli kvitt vårt eget portalarbeid. 47 leverandørportaler måtte besøkes, logges inn i og oppdateres hver uke, og det tok rundt 6 timer. Agenten gjør det på 3 minutter.",
        "Poenget er ikke tallet. Poenget er at oppgaven hadde alle kjennetegnene som gjør noe egnet for en agent. Den gjentok seg ukentlig, den fulgte et gjenkjennelig mønster, og den krevde ingen faglig vurdering, bare tålmodighet.",
    ],
  },
  {
    heading: "Slik vurderer du om en oppgave egner seg",
    paragraphs: [
        "De fleste oppgaver som folk ønsker seg automatisert, egner seg ikke. Disse fire spørsmålene skiller dem raskt.",
    ],
    list: [
      { title: "Gjentar den seg ukentlig eller oftere?", body: "Sjeldnere enn det, og automatiseringen koster mer enn den sparer. En månedlig oppgave må være svært tidkrevende for å forsvare seg." },
      { title: "Følger den et mønster?", body: "Stegene kan variere i detalj, men rekkefølgen må være gjenkjennelig. Er hver gang unik, er det en faglig vurdering og ikke en prosess." },
      { title: "Er resultatet mulig å sjekke?", body: "En agent tar feil av og til. Hvis ingen kan se om resultatet ble riktig, bør oppgaven ikke automatiseres." },
      { title: "Hva skjer hvis den feiler?", body: "Et skjema som fylles feil kan rettes. En faktura som sendes feil kan ikke. Vi starter der konsekvensen av en feil er lav." },
    ],
  },
];

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Hjem", url: SITE_URL },
  { name: "Tjenester", url: `${SITE_URL}/tjenester` },
  { name: "AI-agenter", url: `${SITE_URL}/tjenester/ai-agenter` },
]);

export default function AIAgenterPage() {
  return (
    <div className="py-12 sm:py-20">
      <script
        type="application/ld+json"
        // Safe: both objects are static server-side constants, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd, breadcrumbLd]) }}
      />
      <AIAgenterContent />
      <div className="mx-auto max-w-6xl px-6">
        <ServiceProse sections={proseSections} />
        <FaqDetails title="Ofte stilte spørsmål om AI-agenter" faqs={faqs} />
      </div>
      <RelatedServices current="/tjenester/ai-agenter" />
    </div>
  );
}
