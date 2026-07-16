"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";

const ShieldIcon = () => (
  <svg className="mt-0.5 h-4 w-4 shrink-0 text-steel" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const no = {
  eyebrow: "Argon Industri / In-house for olje og gass",
  h1: "AI-opplæring der dere jobber",
  intro:
    "Vi kommer til dere og bruker deres hverdag som pensum. Fra ledelsen til verkstedgulvet, med en kursholder som har femten år bak seg fra verksted, offshore og kontor.",
  ctaPrimary: "Be om tilbud",
  ctaSecondary: "Se dagskurset for private",
  securityTitle: "Trygg bruk av AI i drift",
  securityBody:
    "Det første spørsmålet i bransjen er alltid det samme. Hva skjer med dataene våre? Derfor starter vi der. Kurset viser hvordan dere kan jobbe med Claude uten å eksponere driftskritisk eller proprietær informasjon.",
  securityPoints: [
    "Gjennomgang av hva som sendes hvor, og hva som lagres",
    "Innstillinger og avtaler som må på plass før teamet slippes løs",
    "Retningslinjer folk faktisk kan følge i arbeidshverdagen",
    "Øvelser med ufarlige data, aldri produksjonsdata",
  ],
  ladderTitle: "Slik ruller vi det ut",
  ladderIntro:
    "En stige fra forankring i ledelsen til varig kompetanse i organisasjonen. Dere kan starte hvor som helst på stigen.",
  ladder: [
    {
      name: "Ledelsesworkshop",
      desc: "Ledelsen får oversikt over muligheter, risiko og hva AI kan gjøre for akkurat deres drift. Halv dag.",
    },
    {
      name: "Inspirasjonsforedrag",
      desc: "Hele organisasjonen får felles forståelse og ser konkrete eksempler fra bransjen. En til to timer.",
    },
    {
      name: "Heldagskurs nivå 1",
      desc: "Praktisk heldag der ansatte løser egne arbeidsoppgaver med Claude. Egen laptop, egne eksempler.",
    },
    {
      name: "Champions-dag",
      desc: "De ivrigste får dypere opplæring i Claude Code og automatisering, og blir interne ressurspersoner.",
    },
    {
      name: "Oppfølging",
      desc: "Vi kommer tilbake etter noen uker, svarer på det som har dukket opp og hjelper dere videre.",
    },
  ],
  proofTitle: "Bygget for bransjen",
  proofBody:
    "Kursholderen kjenner hverdagen kurset skal fungere i, fra verksted og offshore-operasjoner til kontor og prosjektstyring.",
  priceTitle: "Pris",
  priceValue: "fra 40 000 kr",
  priceUnit: "per kursdag",
  priceNote:
    "Innhold, omfang og antall deltakere tilpasses dere. Foredrag, workshops og oppfølging prises samlet i tilbudet.",
  ctaTitle: "Fortell oss hvor dere står",
  ctaBody:
    "Send noen linjer om teamet og hva dere vil oppnå, så kommer vi tilbake med et konkret forslag og pris.",
  ctaButton: "Be om tilbud",
};

const en: typeof no = {
  eyebrow: "Argon Industri / In-house for oil and gas",
  h1: "AI training where you work",
  intro:
    "We come to you and use your everyday work as the curriculum. From management to the workshop floor, with an instructor who has fifteen years behind him from the workshop, offshore and the office.",
  ctaPrimary: "Request a quote",
  ctaSecondary: "See the day course for individuals",
  securityTitle: "Safe use of AI in operations",
  securityBody:
    "The first question in this industry is always the same. What happens to our data? So that is where we start. The course shows how you can work with Claude without exposing operation-critical or proprietary information.",
  securityPoints: [
    "A walkthrough of what is sent where, and what is stored",
    "Settings and agreements that must be in place before the team is let loose",
    "Guidelines people can actually follow in their working day",
    "Exercises with harmless data, never production data",
  ],
  ladderTitle: "How we roll it out",
  ladderIntro:
    "A ladder from buy-in at the top to lasting competence in the organisation. You can start anywhere on the ladder.",
  ladder: [
    {
      name: "Leadership workshop",
      desc: "Management gets an overview of opportunities, risk and what AI can do for your specific operations. Half a day.",
    },
    {
      name: "Inspiration talk",
      desc: "The whole organisation gets a shared understanding and sees concrete examples from the industry. One to two hours.",
    },
    {
      name: "Full-day course level 1",
      desc: "A hands-on full day where employees solve their own work tasks with Claude. Own laptop, own examples.",
    },
    {
      name: "Champions day",
      desc: "The keenest get deeper training in Claude Code and automation, and become internal go-to people.",
    },
    {
      name: "Follow-up",
      desc: "We come back after a few weeks, answer what has come up and help you move on.",
    },
  ],
  proofTitle: "Built for the industry",
  proofBody:
    "The instructor knows the workday the course has to function in, from the workshop and offshore operations to the office and project management.",
  priceTitle: "Price",
  priceValue: "from 40,000 NOK",
  priceUnit: "per course day",
  priceNote:
    "Content, scope and number of participants are adapted to you. Talks, workshops and follow-up are priced together in the quote.",
  ctaTitle: "Tell us where you stand",
  ctaBody:
    "Send a few lines about the team and what you want to achieve, and we will come back with a concrete proposal and price.",
  ctaButton: "Request a quote",
};

export default function BedriftContent() {
  const { locale } = useLanguage();
  const m = locale === "en" ? en : no;

  return (
    <div>
      {/* Header band, petrol */}
      <div className="bg-ink">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-white/60">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-light" aria-hidden />
            {m.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-medium tracking-tight text-white sm:text-6xl">
            {m.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">{m.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white/90"
            >
              {m.ctaPrimary}
            </Link>
            <Link
              href="/kurs"
              className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              {m.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Datasikkerhet */}
        <div className="mt-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-medium tracking-tight text-text">{m.securityTitle}</h2>
              <p className="mt-4 leading-relaxed text-text-light">{m.securityBody}</p>
            </div>
            <ul className="space-y-4 rounded-2xl bg-surface p-8">
              {m.securityPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-text">
                  <ShieldIcon />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ladder */}
        <div className="mt-24">
          <h2 className="font-display text-3xl font-medium tracking-tight text-text">{m.ladderTitle}</h2>
          <p className="mt-4 max-w-2xl text-text-light">{m.ladderIntro}</p>
          <ol className="mt-10">
            {m.ladder.map((step, i) => (
              <li key={step.name} className="relative flex gap-6 pb-10 last:pb-0">
                {i < m.ladder.length - 1 && (
                  <span className="absolute top-10 left-[19px] h-full w-px bg-steel/25" aria-hidden />
                )}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-steel/30 bg-white font-mono text-sm font-semibold text-steel">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Reveal className="pt-1.5" delay={i * 60}>
                  <h3 className="text-lg font-semibold text-text">{step.name}</h3>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-text-light">{step.desc}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* Bevis + pris */}
        <div className="mt-24 grid gap-4 md:grid-cols-2">
          <div className="card-lift rounded-3xl bg-surface p-8 md:p-10">
            <h2 className="font-display text-2xl font-medium tracking-tight text-text">{m.proofTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-text-light">{m.proofBody}</p>
          </div>
          <div className="card-lift rounded-3xl bg-surface p-8 md:p-10">
            <h2 className="font-display text-2xl font-medium tracking-tight text-text">{m.priceTitle}</h2>
            <p className="mt-4 font-display text-5xl font-medium tracking-tight text-text">{m.priceValue}</p>
            <p className="mt-1 text-sm text-text-light">{m.priceUnit}</p>
            <p className="mt-4 text-sm leading-relaxed text-text-light">{m.priceNote}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 rounded-3xl bg-ink p-10 text-center md:p-14">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white">{m.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">{m.ctaBody}</p>
          <Link
            href="/kontakt"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-ink transition hover:bg-white/90"
          >
            {m.ctaButton}
          </Link>
        </div>
      </div>
    </div>
  );
}
