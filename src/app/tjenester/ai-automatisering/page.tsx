import type { Metadata } from "next";
import { RelatedServices } from "@/components/RelatedServices";
import Link from "next/link";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";

const description =
  "AI-automatisering for norske bedrifter. Argon Solutions automatiserer dokumenthåndtering, rapportering og repetitive prosesser med Claude AI og Playwright, bygget for energisektoren.";

export const metadata: Metadata = {
  title: "AI-automatisering for bedrifter",
  description,
  keywords: ["AI automatisering", "automatisering med AI", "AI-automatisering bedrift", "automatisere arbeidsoppgaver AI", "Claude automatisering"],
  alternates: { canonical: "/tjenester/ai-automatisering" },
  openGraph: {
    images: ["/og-image.png"],
    title: "AI-automatisering for bedrifter",
    description,
    url: "/tjenester/ai-automatisering",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Automation",
  name: "AI-automatisering fra Argon Solutions i Stavanger",
  provider: {
    "@type": "Organization",
    "@id": "https://www.argonsolutions.no/#organization",
    name: "Argon Solutions",
  },
  areaServed: { "@type": "Country", name: "Norway" },
  description,
};

const faqs = [
  {
    q: "Hva er AI-automatisering?",
    a: "AI-automatisering betyr at programvare med kunstig intelligens tar over repetitive arbeidsoppgaver som i dag gjøres manuelt. Typiske eksempler er dokumentbehandling, rapportgenerering, dataflytting mellom systemer og innlogging i portaler. Forskjellen fra klassisk automatisering er at AI-en håndterer variasjon, som ulike dokumentformater eller endrede nettsider, uten at noen må omprogrammere regler.",
  },
  {
    q: "Hvilke oppgaver egner seg for AI-automatisering?",
    a: "Oppgaver som gjentas ukentlig eller oftere, følger et gjenkjennelig mønster og i dag stjeler tid fra fagarbeid. I teamets egen arbeidsflyt i olje og gass reduserte en AI-agent 6 timer ukentlig portalarbeid til 3 minutter, med 47 leverandørportaler behandlet automatisk.",
  },
  {
    q: "Hva koster AI-automatisering?",
    a: "Det avhenger av oppgaven. En enkel automatisering av én arbeidsflyt er et lite prosjekt, mens integrasjoner mot flere systemer er større. Ta kontakt for en konkret vurdering av arbeidsflyten dere vil automatisere. Første samtale er gratis.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Hjem", url: SITE_URL },
  { name: "Tjenester", url: `${SITE_URL}/tjenester` },
  { name: "AI-automatisering", url: `${SITE_URL}/tjenester/ai-automatisering` },
]);

const sections = [
  {
    heading: "Slik jobber vi med automatisering",
    paragraphs: [
      "Vi starter alltid med arbeidsflyten, ikke teknologien. Dere viser oss en oppgave som stjeler tid, vi kartlegger stegene og bygger en automatisering som gjør jobben. Løsningen kjører på deres data og varsler når noe trenger et menneske.",
      "Verktøyene er Claude AI for forståelse av dokumenter og tekst, og Playwright for nettleserarbeid som innlogging, nedlasting og skjemautfylling. Alt bygges som små, vedlikeholdbare systemer dere selv eier.",
    ],
  },
  {
    heading: "Eksempler på hva som kan automatiseres",
    paragraphs: [
      "Dokumenthåndtering der PDF-er som fakturaer, sertifikater og HMS-dokumenter leses automatisk og legges strukturert inn i systemene deres. Rapportering der ukesrapporter og statusoversikter genereres fra rådata. Portalarbeid der innlogging, nedlasting og oppdatering på tvers av leverandørportaler skjer uten manuell innsats. Dataflyt der informasjon flyttes automatisk mellom systemer som ikke snakker sammen.",
    ],
  },
  {
    heading: "Hvor gevinsten faktisk ligger",
    paragraphs: [
      "De største tidstyvene i en bedrift er sjelden de oppgavene folk klager mest over. De er oppgavene ingen tenker på lenger, fordi de alltid har vært der. Noen laster ned en rapport, limer tall inn i et regneark og sender en e-post, hver mandag, i årevis.",
      "Derfor begynner vi med å måle før vi foreslår noe. Hvor mange minutter går med, hvor ofte, og hvor mange personer gjør det samme. Uten det tallet er det umulig å si om en automatisering er verdt å bygge, og umulig å vise etterpå at den var det.",
    ],
  },
  {
    heading: "Forskjellen fra klassisk automatisering",
    paragraphs: [
      "Tradisjonell automatisering følger regler noen har skrevet på forhånd. Den knekker når et dokument har et nytt format, når en nettside flytter en knapp, eller når en leverandør endrer malen sin. Da må noen programmere reglene på nytt.",
      "AI-automatisering håndterer den variasjonen. Den leser et fakturaformat den ikke har sett før, finner riktig felt på en side som er bygget om, og spør heller enn å gjette når noe er uklart. Det er grunnen til at oppgaver som før var for uryddige til å automatiseres nå kan automatiseres.",
    ],
  },
  {
    heading: "Hva vi trenger fra dere",
    paragraphs: [
      "Et automatiseringsprosjekt står og faller på tilgang til den som faktisk gjør oppgaven i dag. Ikke en beskrivelse av hvordan den skal gjøres, men en halvtime der vi ser den bli gjort. Der ligger alle unntakene som ingen rutinebeskrivelse nevner, og det er unntakene som avgjør om automatiseringen holder i drift.",
    ],
  },
];

export default function AIAutomatiseringPage() {
  return (
    <div className="py-12 sm:py-20">
      <script
        type="application/ld+json"
        // Safe: static server-side constants, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, faqJsonLd, breadcrumbLd]) }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-medium tracking-tight text-text sm:text-6xl">
            AI-automatisering for bedrifter
          </h1>
          <p className="mt-6 text-lg text-text-light">
            Repetitive oppgaver som dokumentbehandling, rapportering og portalarbeid kan gjøres av AI.
            Vi bygger automatiseringer med Claude og Playwright som fjerner timene, ikke fagfolkene.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/kontakt"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/85"
            >
              Be om vurdering
            </Link>
            <Link
              href="/tjenester/ai-agenter"
              className="rounded-full bg-surface px-6 py-3 text-sm font-semibold text-text transition hover:bg-text/10"
            >
              Se AI-agenter
            </Link>
          </div>
        </div>

        <div className="mt-16 max-w-3xl">
          {sections.map((s) => (
            <details key={s.heading} className="group border-t border-text/15">
              <summary className="flex cursor-pointer list-none items-center justify-between py-5 font-semibold text-text [&::-webkit-details-marker]:hidden">
                <h2 className="text-base font-semibold tracking-normal">{s.heading}</h2>
                <span aria-hidden className="text-text-light transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="space-y-4 pb-8 leading-relaxed text-text-light">
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </details>
          ))}

          <details className="group border-t border-text/15">
            <summary className="flex cursor-pointer list-none items-center justify-between py-5 font-semibold text-text [&::-webkit-details-marker]:hidden">
              <h2 className="text-base font-semibold tracking-normal">Ofte stilte spørsmål om AI-automatisering</h2>
              <span aria-hidden className="text-text-light transition-transform group-open:rotate-45">+</span>
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
        </div>

        <section className="mt-20">
          <div className="rounded-3xl bg-ink px-6 py-16 text-center">
            <h2 className="font-display text-3xl font-medium tracking-tight text-white">
              Har dere en oppgave som stjeler tid?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Beskriv arbeidsflyten, så vurderer vi om den kan automatiseres. Vi svarer vanligvis innen 24 timer.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/kontakt"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-white/90"
              >
                Kontakt oss
              </Link>
            </div>
          </div>
        </section>
      </div>
      <RelatedServices current="/tjenester/ai-automatisering" />
    </div>
  );
}
