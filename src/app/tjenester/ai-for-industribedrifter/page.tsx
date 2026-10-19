import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqPageJsonLd, ORG_REF, SITE_URL } from "@/lib/schema";
import { FaqDetails } from "@/components/FaqDetails";
import { RelatedServices } from "@/components/RelatedServices";

// Opprettet etter GEO-målingen 2026-10-18: verken ChatGPT eller Claude nevnte
// Argon på «AI-konsulent i Rogaland for en liten industribedrift». Produkt- og
// prisfakta her er hentet fra src/lib/products.ts og /produkter.

const PATH = "/tjenester/ai-for-industribedrifter";
const title = "AI for industribedrifter i Rogaland";
const description =
  "AI for små og mellomstore industribedrifter i Rogaland. Vi automatiserer dokumenter, sertifikater, HMS-rapportering og prosjektoppfølging, og lærer teamet å bruke Claude.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["AI industribedrift", "AI industri Rogaland", "AI-konsulent Rogaland", "automatisering industri", "AI verksted"],
  alternates: { canonical: PATH },
  openGraph: { images: ["/og-image.png"], title, description, url: PATH },
};

const faqs = [
  {
    q: "Hvor bør en liten industribedrift starte med AI?",
    a: "Med én avgrenset oppgave som gjentas hver uke, for eksempel å lese ut data fra sertifikater og fakturaer eller å sette sammen en fast rapport. Da er gevinsten lett å måle, og teamet lærer verktøyet på noe de faktisk gjør.",
  },
  {
    q: "Hva koster det?",
    a: "AI-agenter starter på 3 000 kr per måned og full skreddersøm på 15 000 kr per måned, med hosting, vedlikehold og support inkludert. Det er ingen oppsettskostnad, og første måned er gratis. Bedriftsinterne kurs starter på 40 000 kr per kursdag for hele teamet.",
  },
  {
    q: "Trenger vi en IT-avdeling?",
    a: "Nei. Vi drifter løsningene vi bygger, og kursene krever ingen kodekunnskaper.",
  },
  {
    q: "Hva med sensitive dokumenter?",
    a: "Datasikkerhet er første tema på bedriftskursene våre. Der går vi gjennom hvilke dokumenter som kan behandles med AI og hvilke som aldri skal legges inn.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PATH}#service`,
  name: title,
  serviceType: "AI-automatisering og opplæring for industribedrifter",
  description,
  url: `${SITE_URL}${PATH}`,
  provider: ORG_REF,
  areaServed: [
    { "@type": "AdministrativeArea", name: "Rogaland" },
    { "@type": "Country", name: "Norway" },
  ],
};

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Hjem", url: SITE_URL },
  { name: "Tjenester", url: `${SITE_URL}/tjenester` },
  { name: "AI for industribedrifter", url: `${SITE_URL}${PATH}` },
]);

const tasks = [
  { title: "Dokumenter og sertifikater", body: "Last opp fakturaer, sikkerhetsdokumenter og sertifikater og få strukturerte data tilbake på sekunder.", href: "/produkter" },
  { title: "Kvalitetssikring av dokumenter", body: "Automatisk sammenligning og kontroll av dokumenter i PDF- og Word-format.", href: "/produkter" },
  { title: "HMS-rapportering", body: "Compliance-rapporter og HMS-dokumentasjon som settes sammen automatisk.", href: "/produkter" },
  { title: "Prosjektoppfølging", body: "Oversikt over aktive prosjekter, gjøremål, prosedyrer og lager i ett system.", href: "/produkter" },
];

export default function AIForIndustribedrifterPage() {
  return (
    <div className="py-12 sm:py-20">
      <script
        type="application/ld+json"
        // Safe: static server-side constants, not user input
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceJsonLd, faqPageJsonLd(`${SITE_URL}${PATH}`, faqs), breadcrumbLd]),
        }}
      />
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-display font-medium text-text sm:text-5xl">AI for industribedrifter i Rogaland</h1>
        <p className="mt-6 text-lg leading-relaxed text-text-light">
          Mindre industribedrifter bruker mye tid på papirarbeid som ikke er kjernen i jobben. Sertifikater skal
          leses, rapporter settes sammen og dokumenter kontrolleres. Det er akkurat den typen arbeid AI gjør godt.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/kontakt" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/85">
            Ta kontakt
          </Link>
          <Link href="/kurs" className="rounded-full bg-surface px-6 py-3 text-sm font-semibold text-text transition hover:bg-text/10">
            Se bedriftskurset
          </Link>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-display font-medium text-text">Oppgaver vi automatiserer</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {tasks.map((t) => (
              <li key={t.title} className="rounded-2xl bg-surface p-6">
                <span className="font-semibold text-text">{t.title}</span>
                <span className="mt-2 block text-sm text-text-light">{t.body}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-text-light">
            Se alle løsningene på <Link href="/produkter" className="text-primary hover:underline">produktsiden</Link>.
          </p>
        </section>
      </div>

      <div className="mx-auto mt-16 max-w-3xl space-y-12 px-6">
        <section>
          <h2 className="font-display text-2xl font-medium tracking-tight text-text">Slik starter vi</h2>
          <p className="mt-4 leading-relaxed text-text-light">
            Første samtale er gratis. Der går vi gjennom hvor timene forsvinner hos dere og finner én oppgave som er
            avgrenset, repeterende og målbar. Er svaret at dere ikke trenger skreddersydd software, sier vi det.
          </p>
          <p className="mt-4 leading-relaxed text-text-light">
            Noen bedrifter vil heller at egne folk skal gjøre jobben selv. Da holder vi et{" "}
            <Link href="/kurs" className="text-primary hover:underline">bedriftsinternt Claude-kurs</Link> hos dere, der
            teamet jobber med oppgaver fra egen arbeidshverdag og går hjem med automatiseringer som virker.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-medium tracking-tight text-text">Hvem som står bak</h2>
          <p className="mt-4 leading-relaxed text-text-light">
            Argon Solutions holder til i Stavanger. Sondre, som startet selskapet, har femten år bak seg fra olje og
            gass, fra verksted og offshore-operasjoner til kontor og prosjektstyring. Les mer om{" "}
            <Link href="/ai-byra-stavanger" className="text-primary hover:underline">AI-byrået vårt i Stavanger</Link>.
          </p>
        </section>

        <FaqDetails title="Ofte stilte spørsmål om AI for industribedrifter" faqs={faqs} />
      </div>
      <RelatedServices current={PATH} />
    </div>
  );
}
