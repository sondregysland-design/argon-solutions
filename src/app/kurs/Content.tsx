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
    "Vi kommer til dere og bruker deres hverdag som pensum. Kurset er skreddersydd etter bedriftens ønske, om det er grunnkunnskaper eller hjelp til å sette opp enkle agenter slik at bedriften kan dyppe tåen i AI-verdenen.",
  ctaPrimary: "Be om tilbud",
  ctaSecondary: "Be om møte",
  securityTitle: "Trygg bruk av AI i drift",
  securityBody:
    "Det første spørsmålet i bransjen er alltid det samme. Hva skjer med dataene våre? Derfor starter vi der. Kurset viser hvordan dere kan jobbe med Claude uten å eksponere driftskritisk eller proprietær informasjon.",
  securityPoints: [
    "Gjennomgang av hva som sendes hvor, og hva som lagres",
    "Innstillinger og avtaler som må på plass før teamet slippes løs",
    "Retningslinjer folk faktisk kan følge i arbeidshverdagen",
    "Øvelser med ufarlige data, aldri produksjonsdata",
  ],
  ladderTitle: "Slik ser kursdagene ut",
  ladderIntro:
    "Innholdet slik vi holder det i dag. Dagskurset dekker dag én, intensivkurset går videre til dag to. Introkurset er en kortere gjennomgang av de første punktene.",
  ladder: [
    {
      day: "Dag 1",
      name: "Tre måter å bruke Claude",
      desc: "Chat for raske spørsmål, Cowork som jobber i filene deres, og Code som bygger og automatiserer. Dere lærer når dere skal bruke hva.",
    },
    {
      day: "Dag 1",
      name: "Cowork i praksis",
      desc: "Prosjekter som holder på konteksten på tvers av filer, skills som gjenbrukbare maler, og CLAUDE.md som fast instruks. Faste oppgaver kan kjøre på timeplan.",
    },
    {
      day: "Dag 1",
      name: "Code og automatisering",
      desc: "Code-fanen for skripting og automatisering, rutiner som kjører gjentakende arbeidsflyter i skyen, og taleinput i stedet for tastatur.",
    },
    {
      day: "Dag 1",
      name: "Konseptene som avgjør resultatet",
      desc: "Prompting med nok kontekst og tydelige suksesskriterier, styring av informasjonsflyt, prosjektminne i CLAUDE.md og MEMORY.md, og hvordan kontekstvinduet faktisk fungerer.",
    },
    {
      day: "Dag 1",
      name: "Bygg deres egne skills",
      desc: "Beskriv oppgaven med vanlige ord, kjør den én gang, finpuss resultatet og lagre den som en skill resten av teamet kan bruke igjen.",
    },
    {
      day: "Dag 2",
      name: "Koblinger til systemene deres",
      desc: "MCP er den åpne standarden for integrasjoner. Vi kobler Claude mot verktøyene dere allerede bruker, både gjennom grensesnittet og fra kommandolinjen.",
    },
    {
      day: "Dag 2",
      name: "Fra idé til ferdig løsning",
      desc: "En fast arbeidsflyt i tre faser. Idémyldringen blir en spesifikasjon, spesifikasjonen blir en plan, og planen bygges ut oppgave for oppgave med tester underveis.",
    },
    {
      day: "Dag 2",
      name: "Database uten dramatikk",
      desc: "Driftet database i skyen, med tilgangsstyring på radnivå, innlogging og sanntidsoppdateringer. Nok til at agentene kan lagre og hente ekte data.",
    },
    {
      day: "Dag 2",
      name: "Avanserte grep",
      desc: "Subagenter som tar hver sin oppgave, hooks som utløses av hendelser, agentteam som jobber parallelt, nettleserautomatisering og Python i skyen.",
    },
    {
      day: "Dag 2",
      name: "Sikkerhet og versjonskontroll",
      desc: "Hemmeligheter i miljøvariabler, GitHub som angrefunksjon, sikkerhetsgjennomgang av egen kode, og fem nivåer av tilgangsstyring fra spør alltid til full automatikk.",
    },
  ],
  proofTitle: "Bygget for bransjen",
  proofBody:
    "Kursholderen kjenner hverdagen kurset skal fungere i, fra verksted og offshore-operasjoner til kontor og prosjektstyring.",
  priceTitle: "Tre opplegg å velge mellom",
  priceIntro:
    "Samme kursholder og samme praktiske form, tre nivåer av dybde. Alle tre holdes hos dere, med deres egne oppgaver som pensum.",
  packages: [
    {
      name: "Introkurs",
      duration: "2 timer",
      price: "15 000 kr",
      desc: "Felles oppstart for hele avdelingen. Hva verktøyet er, hva det ikke er, og hvor det treffer arbeidsdagen deres.",
      points: [
        "Datasikkerhet og hva som aldri skal legges inn",
        "Live gjennomgang av tre oppgaver fra deres hverdag",
        "Anbefalt neste steg, tilpasset teamet",
      ],
      badge: "Kom i gang",
      highlight: false,
    },
    {
      name: "Dagskurs",
      duration: "1 dag",
      price: "40 000 kr",
      desc: "Praktisk heldag der alle sitter med verktøyet og løser egne arbeidsoppgaver. Egen laptop, egne filer.",
      points: [
        "Alt fra introkurset, med tid til å øve",
        "Hver deltaker bygger noe de bruker etterpå",
        "Retningslinjer teamet kan følge fra dagen etter",
      ],
      badge: "Mest valgt",
      highlight: true,
    },
    {
      name: "Intensivkurs",
      duration: "2 dager",
      price: "70 000 kr",
      desc: "To sammenhengende dager for team som skal jobbe systematisk, ikke bare prøve. Dag to går i dybden.",
      points: [
        "Alt fra dagskurset, med automatisering på dag to",
        "Claude Code og faste arbeidsflyter som blir stående",
        "Interne ressurspersoner som kan lære opp resten",
      ],
      badge: "Størst utbytte",
      highlight: false,
    },
  ],
  priceNote:
    "Prisene gjelder samlet for gruppen, ikke per deltaker. Kurs er unntatt merverdiavgift etter merverdiavgiftsloven § 3-5. Reise utenfor Rogaland kommer i tillegg. Oppfølging etter kurset avtales separat.",
  packageCta: "Be om tilbud",
  ctaTitle: "Fortell oss hvor dere står",
  ctaBody:
    "Send noen linjer om teamet og hva dere vil oppnå, så kommer vi tilbake med et konkret forslag og pris.",
  ctaButton: "Be om tilbud",
};

const en: typeof no = {
  eyebrow: "Argon Industri / In-house for oil and gas",
  h1: "AI training where you work",
  intro:
    "We come to you and use your everyday work as the curriculum. The course is tailored to what your business wants, whether that is the basics or help setting up simple agents so you can dip a toe into AI.",
  ctaPrimary: "Request a quote",
  ctaSecondary: "Book a meeting",
  securityTitle: "Safe use of AI in operations",
  securityBody:
    "The first question in this industry is always the same. What happens to our data? So that is where we start. The course shows how you can work with Claude without exposing operation-critical or proprietary information.",
  securityPoints: [
    "A walkthrough of what is sent where, and what is stored",
    "Settings and agreements that must be in place before the team is let loose",
    "Guidelines people can actually follow in their working day",
    "Exercises with harmless data, never production data",
  ],
  ladderTitle: "What the course days look like",
  ladderIntro:
    "The content as we run it today. The day course covers day one, the intensive course continues into day two. The intro course is a shorter walkthrough of the first topics.",
  ladder: [
    {
      day: "Day 1",
      name: "Three ways to use Claude",
      desc: "Chat for quick questions, Cowork that works inside your files, and Code that builds and automates. You learn when to reach for which.",
    },
    {
      day: "Day 1",
      name: "Cowork in practice",
      desc: "Projects that hold context across files, skills as reusable templates, and CLAUDE.md as standing instructions. Recurring tasks can run on a schedule.",
    },
    {
      day: "Day 1",
      name: "Code and automation",
      desc: "The Code tab for scripting and automation, routines that run recurring workflows in the cloud, and voice input instead of the keyboard.",
    },
    {
      day: "Day 1",
      name: "The concepts that decide the result",
      desc: "Prompting with enough context and clear success criteria, controlling the flow of information, project memory in CLAUDE.md and MEMORY.md, and how the context window actually works.",
    },
    {
      day: "Day 1",
      name: "Build your own skills",
      desc: "Describe the task in plain words, run it once, refine the output and save it as a skill the rest of the team can reuse.",
    },
    {
      day: "Day 2",
      name: "Connections to your systems",
      desc: "MCP is the open standard for integrations. We connect Claude to the tools you already use, both through the interface and from the command line.",
    },
    {
      day: "Day 2",
      name: "From idea to finished solution",
      desc: "A fixed workflow in three phases. Brainstorming becomes a spec, the spec becomes a plan, and the plan is built out task by task with tests along the way.",
    },
    {
      day: "Day 2",
      name: "Databases without drama",
      desc: "A managed database in the cloud, with row-level access control, sign-in and real-time updates. Enough for agents to store and fetch real data.",
    },
    {
      day: "Day 2",
      name: "Advanced moves",
      desc: "Subagents that each take a task, hooks triggered by events, agent teams working in parallel, browser automation and Python in the cloud.",
    },
    {
      day: "Day 2",
      name: "Security and version control",
      desc: "Secrets in environment variables, GitHub as an undo button, security review of your own code, and five levels of permission from ask every time to full automation.",
    },
  ],
  proofTitle: "Built for the industry",
  proofBody:
    "The instructor knows the workday the course has to function in, from the workshop and offshore operations to the office and project management.",
  priceTitle: "Three formats to choose from",
  priceIntro:
    "The same instructor and the same hands-on format, at three levels of depth. All three run at your place, with your own tasks as the material.",
  packages: [
    {
      name: "Intro course",
      duration: "2 hours",
      price: "15,000 NOK",
      desc: "A shared start for the whole department. What the tool is, what it is not, and where it meets your workday.",
      points: [
        "Data security and what must never be entered",
        "A live walkthrough of three tasks from your own week",
        "A recommended next step, matched to the team",
      ],
      badge: "Get started",
      highlight: false,
    },
    {
      name: "Day course",
      duration: "1 day",
      price: "40,000 NOK",
      desc: "A hands-on full day where everyone sits with the tool and solves their own work tasks. Own laptop, own files.",
      points: [
        "Everything from the intro course, with time to practise",
        "Every participant builds something they use afterwards",
        "Guidelines the team can follow from the next day",
      ],
      badge: "Most chosen",
      highlight: true,
    },
    {
      name: "Intensive course",
      duration: "2 days",
      price: "70,000 NOK",
      desc: "Two consecutive days for teams that will work systematically, not just try it out. Day two goes deep.",
      points: [
        "Everything from the day course, with automation on day two",
        "Claude Code and repeatable workflows that stay in place",
        "Internal champions who can train the rest",
      ],
      badge: "Most value",
      highlight: false,
    },
  ],
  priceNote:
    "Prices are for the group as a whole, not per participant. Courses are exempt from VAT under section 3-5 of the Norwegian VAT Act. Travel outside Rogaland is added. Follow-up after the course is agreed separately.",
  packageCta: "Request a quote",
  ctaTitle: "Tell us where you stand",
  ctaBody:
    "Send a few lines about the team and what you want to achieve, and we will come back with a concrete proposal and price.",
  ctaButton: "Request a quote",
};

export default function KursContent() {
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
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium tracking-tight text-white sm:text-6xl">
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
              href="/kontakt#book"
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
                {/* Dag-etiketten står bare på det første punktet i hver dag, så
                    de to dagene leses som blokker uten å bryte den loddrette linja. */}
                <Reveal className="pt-1.5" delay={i * 60}>
                  {step.day !== m.ladder[i - 1]?.day && (
                    <p className="mb-1.5 text-sm font-semibold text-primary">{step.day}</p>
                  )}
                  <h3 className="text-lg font-semibold text-text">{step.name}</h3>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-text-light">{step.desc}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* Tre pakker */}
        <div id="opplegg" className="mt-24 scroll-mt-24">
          <h2 className="font-display text-3xl font-medium tracking-tight text-text">{m.priceTitle}</h2>
          <p className="mt-4 max-w-2xl text-text-light">{m.priceIntro}</p>
          <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-3">
            {m.packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 90}>
                <div
                  className={`card-lift flex h-full flex-col rounded-3xl p-8 ${
                    pkg.highlight ? "bg-ink text-white ring-2 ring-primary" : "bg-surface"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        pkg.highlight ? "bg-primary text-white" : "bg-white text-primary"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                    <span className={`text-sm font-medium ${pkg.highlight ? "text-white/70" : "text-text-light"}`}>
                      {pkg.duration}
                    </span>
                  </div>
                  <h3
                    className={`mt-5 font-display text-2xl font-medium tracking-tight ${
                      pkg.highlight ? "text-white" : "text-text"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`mt-3 font-display text-4xl font-medium tracking-tight ${
                      pkg.highlight ? "text-white" : "text-text"
                    }`}
                  >
                    {pkg.price}
                  </p>
                  <p className={`mt-4 text-sm leading-relaxed ${pkg.highlight ? "text-white/75" : "text-text-light"}`}>
                    {pkg.desc}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {pkg.points.map((point) => (
                      <li
                        key={point}
                        className={`flex items-start gap-2.5 text-sm ${
                          pkg.highlight ? "text-white/85" : "text-text-light"
                        }`}
                      >
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                            pkg.highlight ? "bg-primary-light" : "bg-primary"
                          }`}
                          aria-hidden
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/kontakt"
                    className={`mt-8 inline-block self-start rounded-full px-6 py-3 text-sm font-semibold transition ${
                      pkg.highlight
                        ? "bg-white text-ink hover:bg-white/90"
                        : "bg-ink text-white hover:bg-ink/85"
                    }`}
                  >
                    {m.packageCta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-text-light">{m.priceNote}</p>
        </div>

        {/* Bevis */}
        <div className="mt-16 rounded-3xl bg-surface p-8 md:p-10">
          <h2 className="font-display text-2xl font-medium tracking-tight text-text">{m.proofTitle}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-light">{m.proofBody}</p>
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
