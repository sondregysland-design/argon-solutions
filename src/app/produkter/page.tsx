import type { Metadata } from "next";
import { products, miniProducts } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Produkter | Argon Solutions",
  description: "Se produktene vi har bygget for olje og gass-næringen.",
};

export default function ProdukterPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-text">Våre produkter</h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Vi bygger produkter som løser reelle utfordringer i olje og gass.
          Her er noen av løsningene vi har utviklet.
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
