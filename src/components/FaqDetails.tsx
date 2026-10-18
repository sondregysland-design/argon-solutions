export type Faq = { q: string; a: string };

/**
 * Synlig FAQ-seksjon i et kollapsbart details-element.
 *
 * Grunnen til at denne finnes: flere sider hadde FAQPage-schema uten at
 * spørsmålene sto noe sted i DOM-en. Google ignorerer FAQ-markering som ikke
 * er synlig på siden, så schemaet gjorde ingenting. Send samme `faqs`-array
 * inn her og til faqPageJsonLd, så kan de to ikke komme ut av synk.
 */
export function FaqDetails({ title, faqs }: { title: string; faqs: Faq[] }) {
  if (faqs.length === 0) return null;

  return (
    <details className="group mt-16 border-t border-text/15">
      <summary className="flex cursor-pointer list-none items-center justify-between py-5 font-semibold text-text [&::-webkit-details-marker]:hidden">
        <h2 className="text-base font-semibold tracking-normal">{title}</h2>
        <span aria-hidden className="text-text-light transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="space-y-6 pb-8">
        {faqs.map((f) => (
          <div key={f.q}>
            <h3 className="font-semibold text-text">{f.q}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-light">{f.a}</p>
          </div>
        ))}
      </div>
    </details>
  );
}
