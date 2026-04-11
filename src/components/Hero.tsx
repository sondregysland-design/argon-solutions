import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
          Skreddersydde softwareløsninger
          <span className="block text-primary">for energisektoren</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-light">
          Skreddersydde AI- og softwareløsninger for små og mellomstore
          bedrifter i olje og gass. Vi skreddersyr verktøyet dere trenger,
          dere prøver det gratis den første måneden uten forpliktelser.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/kontakt"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-dark"
          >
            Kontakt oss
          </Link>
          <Link
            href="/tjenester"
            className="rounded-lg border border-gray-200 px-6 py-3 text-sm font-semibold text-text transition hover:bg-surface"
          >
            Våre tjenester
          </Link>
        </div>
      </div>
    </section>
  );
}
