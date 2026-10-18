import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/schema";

const description =
  "Personvernerklæring for Argon Solutions AS. Hvilke personopplysninger vi behandler når du bruker kontaktskjema eller booking, hvorfor, hvor lenge, og hvilke rettigheter du har.";

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description,
  alternates: { canonical: "/personvern" },
  openGraph: {
    images: ["/og-image.png"],
    title: "Personvernerklæring",
    description,
    url: "/personvern",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Personvernerklæring",
    description,
    url: `${SITE_URL}/personvern`,
    inLanguage: "nb-NO",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  },
  breadcrumbJsonLd([
    { name: "Hjem", url: SITE_URL },
    { name: "Personvern", url: `${SITE_URL}/personvern` },
  ]),
];

// Dato for siste endring. Oppdater når innholdet faktisk endres, ikke per build.
const SIST_OPPDATERT = "18. oktober 2026";

export default function PersonvernPage() {
  return (
    <div className="py-12 sm:py-20">
      {/* Safe: static server-side constants from this file, not user input */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-display text-4xl font-medium tracking-tight text-text">
          Personvernerklæring
        </h1>
        <p className="mt-4 text-lg text-text-light">
          Denne siden forklarer hvilke personopplysninger Argon Solutions AS behandler når du
          bruker argonsolutions.no, hvorfor vi gjør det, hvor lenge vi lagrer dem, og hvilke
          rettigheter du har.
        </p>
        <p className="mt-2 text-sm text-text-light">Sist oppdatert {SIST_OPPDATERT}.</p>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-medium text-text">Behandlingsansvarlig</h2>
          <p className="mt-4 leading-relaxed text-text-light">
            Argon Solutions AS, organisasjonsnummer 938 033 072, Stavanger, Norge, er
            behandlingsansvarlig for personopplysningene som behandles gjennom dette nettstedet.
            Spørsmål om personvern sendes til{" "}
            <a href="mailto:post@argonsolutions.no" className="text-primary hover:underline">
              post@argonsolutions.no
            </a>{" "}
            eller på telefon{" "}
            <a href="tel:+4745209979" className="text-primary hover:underline">
              +47 452 09 979
            </a>
            .
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-medium text-text">Hva vi samler inn</h2>
          <p className="mt-4 leading-relaxed text-text-light">
            Vi samler ikke inn personopplysninger når du bare leser nettstedet. Opplysninger
            oppgis av deg selv i ett av to skjemaer.
          </p>
          <dl className="mt-6 space-y-4">
            <div className="rounded-xl bg-surface p-5">
              <dt className="font-semibold text-text">Kontaktskjema</dt>
              <dd className="mt-1 text-sm leading-relaxed text-text-light">
                Navn, e-postadresse og meldingen du skriver. Grunnlaget er berettiget interesse i
                å besvare henvendelsen din, jf. personvernforordningen artikkel 6 nr. 1 bokstav f.
              </dd>
            </div>
            <div className="rounded-xl bg-surface p-5">
              <dt className="font-semibold text-text">Booking av møte</dt>
              <dd className="mt-1 text-sm leading-relaxed text-text-light">
                Navn, e-postadresse, eventuelt firmanavn, og hva du vil snakke om, samt tidspunktet
                du velger. Grunnlaget er at vi skal kunne gjennomføre møtet du ber om, jf. artikkel
                6 nr. 1 bokstav b.
              </dd>
            </div>
          </dl>
          <p className="mt-6 leading-relaxed text-text-light">
            Vi ber aldri om sensitive personopplysninger i disse skjemaene, og du bør ikke skrive
            slike opplysninger i fritekstfeltene.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-medium text-text">
            Hvem opplysningene deles med
          </h2>
          <p className="mt-4 leading-relaxed text-text-light">
            Vi selger ikke personopplysninger, og vi deler dem ikke til markedsføring hos andre.
            For å drive nettstedet bruker vi noen underleverandører som behandler opplysninger på
            våre vegne.
          </p>
          <dl className="mt-6 space-y-4">
            <div className="rounded-xl bg-surface p-5">
              <dt className="font-semibold text-text">Vercel</dt>
              <dd className="mt-1 text-sm leading-relaxed text-text-light">
                Hosting av nettstedet, og Vercel Analytics for besøksstatistikk. Analytics-verktøyet
                setter ingen informasjonskapsler og bygger ingen profil på deg. Det teller
                sidevisninger aggregert, uten å lagre IP-adressen din.
              </dd>
            </div>
            <div className="rounded-xl bg-surface p-5">
              <dt className="font-semibold text-text">Resend</dt>
              <dd className="mt-1 text-sm leading-relaxed text-text-light">
                Sender e-posten som genereres når du fyller ut kontaktskjemaet eller booker et
                møte. Innholdet i skjemaet går gjennom denne tjenesten.
              </dd>
            </div>
            <div className="rounded-xl bg-surface p-5">
              <dt className="font-semibold text-text">Google Calendar</dt>
              <dd className="mt-1 text-sm leading-relaxed text-text-light">
                Brukes til å vise ledige tider og opprette møtet når du booker. Navn, e-post og tema
                legges inn i kalenderoppføringen.
              </dd>
            </div>
            <div className="rounded-xl bg-surface p-5">
              <dt className="font-semibold text-text">Vårt kundesystem (Turso)</dt>
              <dd className="mt-1 text-sm leading-relaxed text-text-light">
                Navn, e-post, firmanavn og meldingen eller møtetemaet lagres i vårt eget
                kundesystem, slik at vi kan følge opp henvendelsen. Databasen driftes hos Turso.
              </dd>
            </div>
            <div className="rounded-xl bg-surface p-5">
              <dt className="font-semibold text-text">Google Fonts</dt>
              <dd className="mt-1 text-sm leading-relaxed text-text-light">
                Skriftene lastes ned ved bygging av nettstedet og serveres fra vårt eget domene.
                Nettleseren din kontakter altså ikke Google når du besøker sidene.
              </dd>
            </div>
          </dl>
          <p className="mt-6 leading-relaxed text-text-light">
            Noen av disse leverandørene behandler data utenfor EØS. Overføringen skjer på grunnlag
            av EU-kommisjonens standard personvernbestemmelser.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-medium text-text">Informasjonskapsler</h2>
          <p className="mt-4 leading-relaxed text-text-light">
            Nettstedet setter én informasjonskapsel, <code className="font-mono text-sm">argon_locale</code>.
            Den husker om du har valgt norsk eller engelsk, varer i ett år, og inneholder ingenting
            annet enn de to bokstavene for språket. Dette er en nødvendig funksjonell kapsel som
            ikke krever samtykke etter ekomloven.
          </p>
          <p className="mt-4 leading-relaxed text-text-light">
            Utover den setter vi ingen informasjonskapsler for markedsføring, sporing eller
            profilering, og du blir derfor ikke møtt av noe samtykkebanner her.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-medium text-text">Hvor lenge vi lagrer</h2>
          <p className="mt-4 leading-relaxed text-text-light">
            Henvendelser via kontaktskjema og booking oppbevares så lenge dialogen er aktiv, og
            slettes normalt innen 12 måneder etter siste kontakt hvis den ikke fører til et
            kundeforhold. Opplysninger knyttet til kursavtaler og fakturering oppbevares så lenge
            bokføringsloven krever, som i dag er fem år.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-medium text-text">Dine rettigheter</h2>
          <p className="mt-4 leading-relaxed text-text-light">
            Du har rett til innsyn i opplysningene vi har om deg, til å få rettet feil, til å be om
            sletting, til å be om begrensning av behandlingen, og til å protestere mot behandling
            basert på berettiget interesse. Du kan også be om å få utlevert opplysningene du har gitt
            oss i et maskinlesbart format.
          </p>
          <p className="mt-4 leading-relaxed text-text-light">
            Send en e-post til{" "}
            <a href="mailto:post@argonsolutions.no" className="text-primary hover:underline">
              post@argonsolutions.no
            </a>{" "}
            så svarer vi innen 30 dager. Mener du at vi behandler opplysningene dine i strid med
            regelverket, kan du klage til Datatilsynet. Kontaktinformasjon finnes på{" "}
            <a
              href="https://www.datatilsynet.no"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              datatilsynet.no
            </a>
            .
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-2xl font-medium text-text">Bruk av AI-verktøy</h2>
          <p className="mt-4 leading-relaxed text-text-light">
            Vi bygger AI-løsninger, men vi mater ikke henvendelsene dine inn i AI-verktøy for
            trening. I kundeprosjekter avtaler vi særskilt hvilke data som kan behandles av
            AI-tjenester, og databehandleravtale inngås før arbeidet starter.
          </p>
        </section>

        <div className="mt-16 rounded-2xl bg-primary/5 p-8 text-center">
          <p className="text-text-light">
            Har du spørsmål om hvordan vi behandler opplysningene dine?
          </p>
          <Link
            href="/kontakt"
            className="mt-4 inline-block rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Ta kontakt
          </Link>
        </div>
      </div>
    </div>
  );
}
