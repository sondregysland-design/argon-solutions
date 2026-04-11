import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-parchment py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-medium tracking-tight text-text sm:text-5xl lg:text-6xl" style={{ lineHeight: 1.1 }}>
          Skreddersydde softwareløsninger
          <span className="block">for energisektoren</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-text-light">
          Skreddersydde AI- og softwareløsninger for små og mellomstore
          bedrifter i olje og gass. Vi skreddersyr verktøyet dere trenger,
          dere prøver det gratis den første måneden uten forpliktelser.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/kontakt"
            className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-text-on-dark shadow-[0_0_0_1px_var(--color-primary)] transition hover:bg-primary-dark"
          >
            Kontakt oss
          </Link>
          <Link
            href="/tjenester"
            className="rounded-xl border border-border-warm px-6 py-3 text-sm font-semibold text-text transition hover:bg-sand"
          >
            Våre tjenester
          </Link>
        </div>
      </div>
    </section>
  );
}
