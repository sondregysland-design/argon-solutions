import type { Metadata } from "next";
import { RelatedServices } from "@/components/RelatedServices";
import AIStrategiContent from "./Content";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";
import { FaqDetails } from "@/components/FaqDetails";
import { ServiceProse } from "@/components/ServiceProse";

const description =
  "Argon Solutions tilbyr AI-strategi og rådgivning for energisektoren. AI readiness-vurdering, automatiseringskartlegging, ROI-modellering og implementeringsveikart for beslutningstakere.";

export const metadata: Metadata = {
  title: "AI-strategi og rådgivning: Veikart for AI-implementering",
  description,
  keywords: ["AI strategi", "AI rådgivning", "AI konsulent", "AI implementering energisektoren", "AI veikart"],
  alternates: { canonical: "/tjenester/ai-strategi" },
  openGraph: { images: ["/og-image.png"],
    title: "AI-strategi og rådgivning: Veikart for AI-implementering",
    description,
    url: "/tjenester/ai-strategi",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Strategy and Advisory",
  name: "AI-strategi og rådgivning",
  provider: {
    "@type": "Organization",
    "@id": "https://www.argonsolutions.no/#organization",
    name: "Argon Solutions",
  },
  areaServed: { "@type": "Country", name: "Norway" },
  description,
};

const proseSections = [
  {
    heading: "Hvorfor de fleste AI-strategier ikke blir gjennomført",
    paragraphs: [
        "Fordi de starter i teknologien i stedet for i problemet. En strategi som lister opp AI-muligheter uten å koble dem til konkrete smertepunkter gir prosjekter ingen eier bryr seg om, og de stopper opp så snart pilotfasen er over.",
        "Det andre som dreper dem er tidshorisonten. En treårsplan for AI er utdatert før den er ferdig skrevet, fordi modellene og verktøyene endrer seg raskere enn det. Sett retningen for året, og revider de konkrete prosjektene hvert kvartal.",
    ],
  },
  {
    heading: "Fem steg vi bruker",
    paragraphs: [
        "Dette er den samme rekkefølgen vi bruker på egne prosjekter, og den er laget for å luke ut dårlige ideer tidlig.",
    ],
    list: [
      { title: "1. Kartlegg smertepunkter, ikke muligheter", body: "Start med hva som faktisk stjeler tid eller skaper feil i dag. Spør folkene som gjør jobben, ikke bare de som bestiller den." },
      { title: "2. Vurder AI-egnethet per smertepunkt", body: "Noe løses best med en bedre rutine eller et regneark. Det er et gyldig utfall, og det sparer dere for et prosjekt." },
      { title: "3. Prioriter i en 2x2", body: "Verdi mot kompleksitet. Begynn oppe til venstre, høy verdi og lav kompleksitet, ikke med det mest imponerende." },
      { title: "4. Bygg det første prosjektet riktig", body: "Ett prosjekt, helt ferdig, i drift hos ekte brukere. En pilot som aldri settes i produksjon lærer organisasjonen at AI er noe man snakker om." },
      { title: "5. Mål, dokumenter og utvid", body: "Mål tidsbruken før og etter. Uten et tall fra før er det umulig å forsvare det neste prosjektet." },
    ],
  },
  {
    heading: "Hva et veikart faktisk bør inneholde",
    paragraphs: [
        "Et brukbart AI-veikart er kort. Det navngir tre til fem arbeidsflyter som skal automatiseres, hvem som eier hver av dem, hva som måles, og hva som skal være i drift ved utgangen av hvert kvartal. Alt utover det er som regel presentasjon og ikke plan.",
        "Vi leverer veikartet som et dokument dere kan bruke uten oss. Er det avhengig av at vi blir med videre for å gi mening, har vi gjort jobben feil.",
    ],
  },
];

const faqs = [
  {
    q: "Hva koster en AI-strategi?",
    a: "Det avhenger av størrelsen på organisasjonen og hvor mange arbeidsflyter som skal kartlegges. For en liten eller mellomstor bedrift er dette typisk et kort oppdrag på noen dager, ikke et månedslangt konsulentprosjekt. Første samtale er gratis, og der sier vi også fra hvis dere ikke trenger en strategi i det hele tatt.",
  },
  {
    q: "Hvor lang tid tar det før AI gir målbar effekt?",
    a: "Et fokusert pilotprosjekt med én konkret arbeidsflyt automatisert tar typisk 2 til 6 uker fra start til produksjon. En full bedriftsutrulling med integrasjoner mot CRM, ERP og fagsystemer tar 3 til 6 måneder.",
  },
  {
    q: "Trenger vi en AI-strategi før vi begynner?",
    a: "Ikke nødvendigvis. Har dere allerede ett tydelig problem dere vil løse, er det bedre å bygge det og måle resultatet enn å skrive en plan først. Strategi er nyttig når dere har mange kandidater og trenger å velge, eller når flere avdelinger drar i hver sin retning.",
  },
  {
    q: "Hvem bør eie AI-arbeidet internt?",
    a: "Den som eier arbeidsflyten som skal endres, ikke IT-avdelingen alene. AI-prosjekter som eies av IT uten en fagperson på laget ender ofte som verktøy ingen tar i bruk.",
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
    { name: "AI-strategi", url: `${SITE_URL}/tjenester/ai-strategi` },
  ]),
];

export default function AIStrategiPage() {
  return (
    <div className="py-12 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AIStrategiContent />
      <div className="mx-auto max-w-6xl px-6">
        <ServiceProse sections={proseSections} />
        <FaqDetails title="Ofte stilte spørsmål om AI-strategi" faqs={faqs} />
      </div>
      <RelatedServices current="/tjenester/ai-strategi" />
    </div>
  );
}
