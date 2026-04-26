import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-medium tracking-tight text-text sm:text-5xl lg:text-6xl" style={{ lineHeight: 1.15 }}>
          AI-tjenester og skreddersydd software
          <span className="block text-primary">for norsk energisektor</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-light">
          Argon Solutions er et AI-byrå i Stavanger. Vi leverer AI-tjenester,
          Claude Code-oppsett, og skreddersydd software for energisektoren.
          Fra CRM og prosjektstyring til AI-agenter, vi skreddersyr
          verktøyet dere trenger. Første måneden gratis.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/kontakt"
            className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_var(--color-primary)] transition hover:bg-primary-dark"
          >
            Kontakt oss
          </Link>
          <Link
            href="/tjenester"
            className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-text transition hover:bg-surface"
          >
            Våre tjenester
          </Link>
        </div>
      </div>
    </section>
  );
}
