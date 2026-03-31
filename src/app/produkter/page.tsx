import type { Metadata } from "next";
import { products, miniProducts } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Produkter | Argon Solutions",
  description: "Skreddersydde AI- og softwareløsninger for små og mellomstore bedrifter i olje og gass.",
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

        <h2 className="mt-20 text-3xl font-bold text-text">Mini-produkter</h2>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Mindre verktøy mer for avbrekk.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {miniProducts.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
