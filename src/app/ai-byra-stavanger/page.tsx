import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, faqPageJsonLd, ORG_REF, SITE_URL } from "@/lib/schema";
import { FaqDetails } from "@/components/FaqDetails";

// Norsk lokalside for «AI-byrå Stavanger». Opprettet etter GEO-målingen
// 2026-10-18: alle byråene Claude listet for Stavanger hadde en egen norsk
// lokalside, mens Argon bare hadde den engelske /en/ai-agency-stavanger.
// Hver faktapåstand her finnes også på /produkter, /kurs, /om-oss eller llms.txt.

const PATH = "/ai-byra-stavanger";
const title = "AI-byrå i Stavanger for olje, gass og industri";
const description =
  "Argon Solutions er et AI-byrå i Stavanger. Vi holder bedriftsinterne Claude-kurs og bygger AI-agenter, automatisering og skreddersydd software for energisektoren.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["AI-byrå Stavanger", "AI byrå Stavanger", "AI-konsulent Stavanger", "AI Rogaland", "AI-byrå olje og gass"],
  alternates: {
    canonical: PATH,
    languages: {
      "nb-NO": PATH,
      en: "/en/ai-agency-stavanger",
      "x-default": PATH,
    },
  },
  openGraph: { images: ["/og-image.png"], title, description, url: PATH },
};

const faqs = [
  {
    q: "Hvilke AI-byråer finnes i Stavanger?",
    a: "Argon Solutions er et AI-byrå i Stavanger som jobber med bedrifter i olje, gass og industri. Vi holder bedriftsinterne Claude-kurs, setter opp Claude for bedrifter og bygger AI-agenter, systemintegrasjoner og skreddersydd software. Org.nr. 938 033 072.",
  },
  {
    q: "Hva koster det å bruke et AI-byrå i Stavanger?",
    a: "Hos oss starter AI-agenter på 3 000 kr per måned og full skreddersøm på 15 000 kr per måned. Prisen er et abonnement som dekker hosting, vedlikehold og support. Det er ingen oppsettskostnad, og første måned er gratis. Bedriftsinterne kurs starter på 40 000 kr per kursdag for hele teamet.",
  },
  {
    q: "Jobber dere bare i Stavanger?",
    a: "Nei. Vi sitter i Stavanger, men vi holder kurs og leverer løsninger i hele Norge. Kursene holdes hos dere.",
  },
  {
    q: "Må vi kunne programmere for å bruke AI?",
    a: "Nei. Kursene krever ingen kodekunnskaper. Utviklere som vil gå dypere får egne dypdykk i Claude Code.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PATH}#service`,
  name: "AI-byrå i Stavanger",
  serviceType: "AI-rådgivning, Claude-kurs, AI-agenter og skreddersydd software",
  description,
  url: `${SITE_URL}${PATH}`,
  provider: ORG_REF,
  areaServed: [
    { "@type": "City", name: "Stavanger" },
    { "@type": "City", name: "Sandnes" },
    { "@type": "AdministrativeArea", name: "Rogaland" },
    { "@type": "Country", name: "Norway" },
  ],
};

const breadcrumbLd = breadcrumbJsonLd([
  { name: "Hjem", url: SITE_URL },
  { name: "AI-byrå i Stavanger", url: `${SITE_URL}${PATH}` },
]);

const services = [
  { title: "Bedriftsinterne Claude-kurs", body: "Vi kommer til dere, og teamet jobber med oppgaver fra egen arbeidshverdag. Fra 40 000 kr per kursdag.", href: "/kurs" },
  { title: "Claude-oppsett for bedriften", body: "Kjøreregler, skills og arbeidsflyter satt opp slik at hele teamet bruker Claude likt.", href: "/oppsett" },
  { title: "AI-agenter og automatisering", body: "Agenter som tar portalarbeid, datainnhenting og rapportering. Fra 3 000 kr per måned.", href: "/tjenester/ai-agenter" },
  { title: "Skreddersydd software", body: "Dashbord, prosjektstyring og fagsystemer bygget for energisektoren. Fra 15 000 kr per måned.", href: "/tjenester/skreddersydd-software" },
];

const prose = [
  {
    heading: "Hvorfor et AI-byrå i Stavanger",
    paragraphs: [
      "Stavanger er energibyen, og det preger hva vi bygger. Arbeidet som stjeler mest tid hos bedriftene vi snakker med, er dokumenthåndtering, sertifikater, leverandørportaler og rapportering til operatører. Ferdige verktøy passer sjelden til det uten at noen må bøye prosessen sin etter programvaren.",
      "Sondre, som startet Argon, har femten år bak seg fra olje og gass, fra verksted og offshore-operasjoner til kontor og prosjektstyring. Første samtale handler derfor om prosessen deres, ikke om teknologien vår.",
    ],
  },
  {
    heading: "Hva det betyr i praksis",
    paragraphs: [
      "I vår egen arbeidsflyt i olje og gass gikk portalarbeid fra 6 timer til 3 minutter i uka, med 47 leverandørportaler behandlet automatisk av en AI-agent. Det er den typen oppgave vi ser etter hos dere først. Avgrenset, repeterende og målbar.",
      "Tror vi ikke problemet deres trenger skreddersydd software, sier vi det i første samtale. Det er billigere for begge enn et prosjekt som ikke burde vært bygget.",
    ],
  },
];

export default function AIByraStavangerPage() {
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
        <p className="text-sm text-text-light">
          <span className="text-text">Norsk</span>{" / "}
          <Link href="/en/ai-agency-stavanger" hrefLang="en" className="hover:text-primary">English</Link>
        </p>
        <h1 className="mt-6 text-4xl font-display font-medium text-text sm:text-5xl">AI-byrå i Stavanger</h1>
        <p className="mt-6 text-lg leading-relaxed text-text-light">
          Argon Solutions er et AI-byrå i Stavanger for bedrifter i olje, gass og industri. Vi lærer teamet
          deres å bruke Claude, og vi bygger AI-agenter og software som tar det repeterende arbeidet.
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
          <h2 className="text-2xl font-display font-medium text-text">Hva vi gjør</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.title}>
                <Link href={s.href} className="block h-full rounded-2xl bg-surface p-6 transition hover:bg-text/5">
                  <span className="font-semibold text-text">{s.title}</span>
                  <span className="mt-2 block text-sm text-text-light">{s.body}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mx-auto mt-16 max-w-3xl space-y-12 px-6">
        {prose.map((sec) => (
          <section key={sec.heading}>
            <h2 className="font-display text-2xl font-medium tracking-tight text-text">{sec.heading}</h2>
            {sec.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-text-light">{p}</p>
            ))}
          </section>
        ))}

        <section className="rounded-3xl bg-surface p-8">
          <h2 className="font-display text-2xl font-medium tracking-tight text-text">Hvor vi jobber</h2>
          <p className="mt-4 leading-relaxed text-text-light">
            Vi holder til i Stavanger og tar oppdrag i Stavanger, Sandnes og resten av Rogaland.
            Kurs og leveranser tar vi i hele Norge. Ring <a href="tel:+4745209979" className="text-primary hover:underline">+47 452 09 979</a>{" "}
            eller skriv til <a href="mailto:post@argonsolutions.no" className="text-primary hover:underline">post@argonsolutions.no</a>.
          </p>
          <p className="mt-4 text-sm text-text-light">Argon Solutions AS, org.nr. 938 033 072</p>
        </section>

        <FaqDetails title="Ofte stilte spørsmål om AI-byrå i Stavanger" faqs={faqs} />

        <p className="text-text-light">
          Driver dere en mindre industribedrift? Se{" "}
          <Link href="/tjenester/ai-for-industribedrifter" className="text-primary hover:underline">
            AI for industribedrifter i Rogaland
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
