import type { Metadata } from "next";
import { products } from "@/lib/products";
import { ProdukterContent } from "./ProdukterContent";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";

const description =
  "Argon Solutions sine produkter: prosjektstyring, CRM, dashboard, PDF-ekstraksjon og risikostyring for olje- og gassindustrien. Skreddersydd med AI.";

export const metadata: Metadata = {
  title: "Produkter: AI-drevet software for olje og gass",
  description,
  alternates: { canonical: "/produkter" },
  openGraph: {
    title: "Produkter | AI-drevet software for olje og gass | Argon Solutions",
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
        "@id": "https://argonsolutions.no/#organization",
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
    <div className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: catalogScript }} />
      <ProdukterContent />
    </div>
  );
}
