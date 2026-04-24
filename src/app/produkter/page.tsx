import type { Metadata } from "next";
import { products, automations } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { AutomationCard } from "@/components/AutomationCard";

const description =
  "Argon Solutions sine produkter: prosjektstyring, CRM, dashboard, PDF-ekstraksjon og risikostyring for olje- og gassindustrien. Skreddersydd med AI.";

export const metadata: Metadata = {
  title: "Produkter — AI-drevet software for olje og gass",
  description,
  alternates: { canonical: "/produkter" },
  openGraph: {
    title: "Produkter — AI-drevet software for olje og gass | Argon Solutions",
    description,
    url: "/produkter",
  },
};

export default function ProdukterPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-text">Skreddersydde AI- og softwareløsninger</h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Skreddersydde AI- og softwareløsninger for små og mellomstore bedrifter
          i olje og gass. Vi skreddersyr verktøyet dere trenger, dere prøver det
          gratis den første måneden uten forpliktelse.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>

        <h2 className="mt-20 text-3xl font-bold text-text">Automatisering</h2>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Spar tid med ferdige automatiseringsløsninger bygget for olje og
          gass-næringen. Våre automatiseringer håndterer repetitive oppgaver
          slik at teamet ditt kan fokusere på det som gir verdi.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {automations.map((a) => (
            <AutomationCard key={a.slug} {...a} />
          ))}
        </div>
      </div>
    </div>
  );
}
