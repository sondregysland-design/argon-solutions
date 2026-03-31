import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { ProductCard } from "@/components/ProductCard";
import { products, miniProducts } from "@/lib/products";
import Link from "next/link";

const services = [
  {
    title: "Skreddersydd Software",
    description:
      "Utvikling av spesialtilpassede applikasjoner som løser deres unike utfordringer i energisektoren.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Systemintegrasjon",
    description:
      "Sømløs kobling mellom eksisterende systemer. API-utvikling, dataflyt og automatisering.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "API-utvikling",
    description:
      "Robuste og dokumenterte API-er som knytter systemer sammen og muliggjør datadeling.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "10+", label: "Års erfaring i olje og gass" },
  { value: "100%", label: "Norsk" },
  { value: "0 kr", label: "Første måneden" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Tjenester */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-text">
            Hva vi tilbyr
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Produkter */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-text">
            Våre produkter
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Se noen av løsningene vi har bygget for olje og gass-næringen.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/produkter"
              className="text-sm font-semibold text-primary transition hover:text-primary-dark"
            >
              Se alle produkter &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Mini-produkter */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-text">
            Mini-produkter
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-text-light">
            Mindre verktøy mer for avbrekk.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {miniProducts.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistikk */}
      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-12 px-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-text-light">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Klar for å modernisere systemene?
          </h2>
          <p className="mt-3 text-blue-100">
            Ta kontakt for en uforpliktende samtale om hvordan vi kan hjelpe.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-primary transition hover:bg-blue-50"
          >
            Ta kontakt
          </Link>
        </div>
      </section>
    </>
  );
}
