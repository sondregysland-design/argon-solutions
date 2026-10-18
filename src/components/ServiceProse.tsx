export type ProseSection = {
  heading: string;
  paragraphs: string[];
  list?: { title: string; body: string }[];
};

/**
 * Løpende tekstseksjon for tjenestesidene.
 *
 * Tjenestesidene besto nesten utelukkende av korte kort, og flere av dem lå
 * under 300 ord. Det er for tynt både for søk og for at en LLM skal finne noe
 * å sitere. Denne komponenten gir dem en prosadel med faktisk substans.
 */
export function ServiceProse({ sections }: { sections: ProseSection[] }) {
  return (
    <div className="mt-16 space-y-12">
      {sections.map((s) => (
        <section key={s.heading} className="max-w-3xl">
          <h2 className="font-display text-2xl font-medium tracking-tight text-text">{s.heading}</h2>
          {s.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-text-light">
              {p}
            </p>
          ))}
          {s.list && (
            <dl className="mt-6 space-y-4">
              {s.list.map((item) => (
                <div key={item.title} className="rounded-xl bg-surface p-5">
                  <dt className="font-semibold text-text">{item.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-text-light">{item.body}</dd>
                </div>
              ))}
            </dl>
          )}
        </section>
      ))}
    </div>
  );
}
