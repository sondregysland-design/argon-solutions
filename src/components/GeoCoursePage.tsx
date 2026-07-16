import Link from "next/link";

// Delt mal for de programmatiske kurs-landingssidene under /kurs/*.
// Ren server-komponent med semantisk markup (h1/h2/h3/p/ul) slik at
// innholdet er lett å ekstrahere for søkemotorer og AI-assistenter.

export type GeoFaq = { q: string; a: string };
export type GeoSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: { title: string; desc: string }[];
};
export type GeoCourseData = {
  eyebrow: string;
  h1: string;
  intro: string[];
  sections: GeoSection[];
  price: { value: string; unit: string; note: string };
  faqHeading: string;
  faqs: GeoFaq[];
  ctaHref: string;
  ctaLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  relatedHeading: string;
  related: { href: string; label: string }[];
};

export function GeoCoursePage({ data }: { data: GeoCourseData }) {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-text-light">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            {data.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-5xl font-medium tracking-tight text-text sm:text-6xl">{data.h1}</h1>
          <div className="mt-6 space-y-4 text-lg text-text-light">
            {data.intro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={data.ctaHref}
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/85"
            >
              {data.ctaLabel}
            </Link>
            <Link
              href={data.secondaryHref}
              className="rounded-full bg-surface px-6 py-3 text-sm font-semibold text-text transition hover:bg-text/10"
            >
              {data.secondaryLabel}
            </Link>
          </div>
        </div>

        {data.sections.map((s) => (
          <section key={s.heading} className="mt-20">
            <h2 className="font-display text-3xl font-medium tracking-tight text-text">{s.heading}</h2>
            {s.paragraphs && (
              <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-text-light">
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            )}
            {s.bullets && (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <div key={b.title} className="card-lift h-full rounded-2xl bg-surface p-7">
                    <h3 className="font-semibold text-text">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">{b.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        <section className="mt-20">
          <div className="rounded-3xl bg-surface p-8 md:p-10">
            <h2 className="font-display text-3xl font-medium tracking-tight text-text">Pris</h2>
            <p className="mt-6 font-display text-5xl font-medium tracking-tight text-text">{data.price.value}</p>
            <p className="mt-1 text-sm text-text-light">{data.price.unit}</p>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-text-light">{data.price.note}</p>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-display text-3xl font-medium tracking-tight text-text">{data.faqHeading}</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {data.faqs.map((f) => (
              <div key={f.q} className="border-t border-text/15 pt-5">
                <h3 className="font-semibold text-text">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-semibold text-text">{data.relatedHeading}</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {data.related.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full bg-surface px-5 py-2.5 text-sm font-semibold text-text transition hover:bg-text/10"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="rounded-3xl bg-ink px-6 py-16 text-center">
            <h2 className="font-display text-3xl font-medium tracking-tight text-white">Klar til å komme i gang?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Meld deg på en åpen kursdag, eller be om tilbud på opplæring for teamet ditt. Vi svarer vanligvis innen 24 timer.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={data.ctaHref}
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-white/90"
              >
                {data.ctaLabel}
              </Link>
              <Link
                href="/kontakt"
                className="rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Kontakt oss
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
