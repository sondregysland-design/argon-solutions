import type { Metadata } from "next";
import { products } from "@/lib/products";
import { ProdukterContent } from "./ProdukterContent";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";
import { ServiceProse } from "@/components/ServiceProse";

const description =
  "Argon Solutions sine produkter: prosjektstyring, CRM, dashboard, PDF-ekstraksjon og risikostyring for olje- og gassindustrien. Skreddersydd med AI.";

const proseSections = [
  {
    heading: "Hvorfor vi bygger egne produkter",
    paragraphs: [
        "Alt som står på denne siden er bygget for å løse et problem vi selv hadde, eller som en kunde hadde og vi ikke fant hyllevare til. De er i drift, ikke prototyper, og de er offentlig tilgjengelige slik at du kan se dem før du snakker med oss.",
        "Grunnen til at vi viser dem fram er enkel. Det er lett å si at man kan bygge software. Det er vanskeligere å vise noe som kjører. Når du vurderer en leverandør, be alltid om å se et system i drift i stedet for en presentasjon.",
    ],
  },
  {
    heading: "Slik kjøper du et av dem",
    paragraphs: [
        "Produktene er utgangspunkt, ikke ferdige lisenser. Vi tar det som ligner mest på behovet deres og tilpasser det, i stedet for å starte fra blankt ark hver gang. Det er derfor første versjon som regel er i bruk etter fire til åtte uker.",
        "Prisen er et månedlig abonnement som dekker hosting, vedlikehold og support. Første måned er gratis, og det er ingen oppsettskostnad. Passer ingen av dem, sier vi det.",
    ],
    list: [
      { title: "AI-agenter fra 3 000 kr per måned", body: "Automatisering av en avgrenset, repeterende arbeidsflyt, typisk portalarbeid, datainnhenting eller skjemautfylling." },
      { title: "AI-dashboards fra 5 000 kr per måned", body: "Sanntidsvisning av prosjekt, utstyr eller produksjon, med data hentet fra systemene dere allerede har." },
      { title: "Full skreddersøm fra 15 000 kr per måned", body: "Komplett arbeidsflytstyring bygget for deres prosess, med integrasjoner mot ERP, CRM og fagsystemer." },
    ],
  },
];

export const metadata: Metadata = {
  title: "Produkter: AI-drevet software for olje og gass",
  description,
  alternates: { canonical: "/produkter" },
  openGraph: { images: ["/og-image.png"],
    title: "Produkter: AI-drevet software for olje og gass",
    description,
    url: "/produkter",
  },
};

const productCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Argon Solutions Produkter",
  description:
    "Skreddersydde AI- og softwareløsninger for olje- og gassindustrien fra Argon Solutions i Stavanger.",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "SoftwareApplication",
      name: p.title,
      description: p.description,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "NOK",
        description: "Første måned gratis",
      },
      creator: {
        "@type": "Organization",
        "@id": "https://www.argonsolutions.no/#organization",
        name: "Argon Solutions",
      },
    },
  })),
};

export default function ProdukterPage() {
  const catalogScript = JSON.stringify([
    productCatalogJsonLd,
    breadcrumbJsonLd([
      { name: "Hjem", url: SITE_URL },
      { name: "Produkter", url: `${SITE_URL}/produkter` },
    ]),
  ]);

  return (
    <div className="py-12 sm:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: catalogScript }} />
      <ProdukterContent />
      <div className="mx-auto max-w-6xl px-6">
        <ServiceProse sections={proseSections} />
      </div>
    </div>
  );
}
