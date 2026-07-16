"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { KursSignup, COHORTS } from "@/components/KursSignup";
import { Reveal } from "@/components/Reveal";

const CheckIcon = () => (
  <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const no = {
  eyebrow: "Argon Kurs / Claude Dagskurs for private / Stavanger",
  h1: "Bygg noe ekte med Claude på én dag",
  intro:
    "Lær å bygge apper, verktøy og automatiseringer med AI, rett fra Claude-appen, uten kodekunnskaper. Et praktisk dagskurs for privatpersoner i liten gruppe. Du tar med egen laptop og egne oppgaver, og sitter med verktøyet hele tiden.",
  heroNote: "Kan du skrive en tydelig e-post, kan du lære dette. Ingen utviklerbakgrunn nødvendig.",
  heroGaranti: "Fornøyd etter første kursdag, eller pengene tilbake.",
  ctaPrimary: "Meld deg på",
  ctaSecondary: "For bedrifter",
  cardTitle: "Claude Dagskurs",
  cardDesc: "Du går hjem med noe som virker. Et verktøy eller en automatisering du bruker dagen etter.",
  cardTime: "09:00 til 16:00",
  cardPlace: "Stavanger",
  cardGroup: "Liten gruppe",
  cardPrice: "5 900 kr",
  cardPerSeat: "per plass",
  cardMore: "Vis mer",
  learnTitle: "Hva du lærer",
  learnItems: [
    {
      title: "Jobbe med Claude i hverdagen",
      desc: "Prompting som faktisk virker, dokumenter, analyse og skriving. Du lærer å gi AI-en nok kontekst til å gjøre ekte arbeid.",
    },
    {
      title: "Claude-appen fra null",
      desc: "Installasjon og oppsett på egen maskin. Du lager dokumenter, analyser og små verktøy direkte i appen, uten å skrive kode.",
    },
    {
      title: "Automatisere egne oppgaver",
      desc: "Faste arbeidsflyter og gjenbrukbare oppsett som tar de repetitive delene av jobben din. Bygget på dine egne eksempler.",
    },
    {
      title: "Bygge noe ekte",
      desc: "Du går hjem med noe som virker. Et verktøy, en automasjon eller et oppsett du bruker dagen etter.",
    },
  ],
  splitTitle: "Privat eller bedrift?",
  splitBody:
    "Dette er det åpne dagskurset for privatpersoner og enkeltdeltakere. Det varer én dag, du bruker Claude-appen og trenger ingen utviklerbakgrunn. Skal dere kurse et helt team, holder vi bedriftsinterne kurs der Claude Code og automatisering står på planen.",
  splitCta: "Se kurs for bedrifter",
  agendaTitle: "Slik ser dagskurset ut",
  agendaIntro:
    "Konkret plan for en typisk kursdag, så du vet hva du melder deg på. Tidene er veiledende, innholdet tilpasses gruppa og oppgavene dere tar med.",
  agendaItems: [
    {
      time: "09:00",
      title: "Oppsett og intro",
      desc: "Alle får Claude-appen på plass på egen maskin. Kort om hva verktøyet faktisk er.",
    },
    {
      time: "09:30",
      title: "Prompting og kontekst",
      desc: "Hvordan gi Claude nok kontekst til å gjøre ekte arbeid, ikke bare svare pent.",
    },
    {
      time: "10:30",
      title: "Claude-appen i praksis",
      desc: "Dokumenter, filer og ditt første verktøy. Du bygger, ikke ser på.",
    },
    {
      time: "12:00",
      title: "Pause",
      desc: "Lunsj og luft.",
    },
    {
      time: "12:45",
      title: "Dine egne oppgaver",
      desc: "Vi tar utgangspunkt i det du faktisk gjør på jobb og bygger derfra.",
    },
    {
      time: "14:30",
      title: "Verktøy og automatisering",
      desc: "Sett automatiseringen i system så den fortsetter å virke etter kurset.",
    },
    {
      time: "15:30",
      title: "Oppsummering og veien videre",
      desc: "Du går hjem med noe som virker, og en plan for hva du bygger neste uke.",
    },
  ],
  priceTitle: "Pris",
  priceValue: "5 900 kr",
  priceUnit: "per plass, åpen kohort i Stavanger",
  priceNote:
    "Kurs er unntatt merverdiavgift etter merverdiavgiftsloven § 3-5. Prisen er det du betaler, uten mva-påslag.",
  priceCorporate: "Skal dere kurse et helt team? Se in-house opplæring under Argon Industri.",
  priceCorporateLink: "Argon Industri",
  garantiLabel: "Fornøyd, eller pengene tilbake",
  garantiBody:
    "Er ikke kurset verdt tiden din etter første dag, sier du ifra og får hele kursavgiften tilbake. Ingen diskusjon.",
  datesTitle: "Neste kohorter",
  datesBody:
    "To åpne kohorter i Stavanger i høst. Lokale annonseres på e-post før kursstart. Meld deg på, så holder vi av plassen din.",
  cohortMeta: "Stavanger, 09:00 til 16:00",
  freeTitle: "Bør du heller ta gratiskurset til Anthropic?",
  freeIntro:
    "Anthropic har et gratis introkurs på engelsk, rundt tre timer med video og quiz. Ta det gjerne, det er fin forberedelse. Dette kurset er for deg som vil forbi videostadiet.",
  freeItems: [
    {
      title: "Live hjelp når noe feiler",
      desc: "I et selvstudium er en feilmelding et stoppunkt. Her sitter det en trener ved siden av deg til det virker.",
    },
    {
      title: "Dine oppgaver, ikke demoer",
      desc: "Videokursene bruker generiske eksempler. Du jobber med dine egne filer og din egen arbeidshverdag.",
    },
    {
      title: "Norsk, og for alle",
      desc: "Anthropic-kurset går på engelsk og forutsetter erfaring med terminal og Git. Her trenger du ingen utviklerbakgrunn.",
    },
    {
      title: "Noen å spørre etterpå",
      desc: "Interaktiv+ inkluderer oppfølging etter kurset. Et videokurs svarer ikke på e-post.",
    },
  ],
  founderTitle: "Hvem holder kurset",
  founderP1:
    "Sondre Gysland har femten år bak seg fra olje og gass, fra verksted og offshore-operasjoner til kontor og prosjektstyring. Han bygger daglig med Claude og Claude Code, og underviser med de samme verktøyene han bruker selv.",
  founderP2:
    "Argon er selskapet bak kursene. Vi bygger også software og AI-agenter for olje og gass, så opplæringen kommer fra folk som bruker verktøyene på ekte prosjekter.",
  bookTitle: "Meld deg på",
  bookIntro:
    "Velg dato og fyll inn skjemaet, så holder vi av plassen din og sender bekreftelse på e-post. Usikker på om kurset passer? Skriv det i kommentarfeltet, så tar vi en prat først.",
};

const en: typeof no = {
  eyebrow: "Argon Kurs / Claude day course for individuals / Stavanger",
  h1: "Build something real with Claude in one day",
  intro:
    "Learn to build apps, tools and automations with AI, straight from the Claude app, with no coding skills. A hands-on one-day course for individuals in a small group. You bring your own laptop and your own tasks, and sit with the tool the whole time.",
  heroNote: "If you can write a clear email, you can learn this. No developer background required.",
  heroGaranti: "Happy after the first course day, or your money back.",
  ctaPrimary: "Sign up",
  ctaSecondary: "For businesses",
  cardTitle: "Claude day course",
  cardDesc: "You go home with something that works. A tool or an automation you use the next day.",
  cardTime: "09:00 to 16:00",
  cardPlace: "Stavanger",
  cardGroup: "Small group",
  cardPrice: "5,900 NOK",
  cardPerSeat: "per seat",
  cardMore: "Show more",
  learnTitle: "What you learn",
  learnItems: [
    {
      title: "Working with Claude every day",
      desc: "Prompting that actually works, documents, analysis and writing. You learn to give the AI enough context to do real work.",
    },
    {
      title: "The Claude app from zero",
      desc: "Installation and setup on your own machine. You create documents, analyses and small tools directly in the app, without writing code.",
    },
    {
      title: "Automating your own tasks",
      desc: "Fixed workflows and reusable setups that take over the repetitive parts of your job. Built on your own examples.",
    },
    {
      title: "Building something real",
      desc: "You go home with something that works. A tool, an automation or a setup you use the next day.",
    },
  ],
  splitTitle: "Individual or business?",
  splitBody:
    "This is the open one-day course for individuals. It lasts one day, you use the Claude app and need no developer background. Training a whole team? We run in-house courses where Claude Code and automation are on the agenda.",
  splitCta: "See courses for businesses",
  agendaTitle: "What the one-day course looks like",
  agendaIntro:
    "A concrete plan for a typical course day, so you know what you are signing up for. Times are indicative, the content adapts to the group and the tasks you bring.",
  agendaItems: [
    {
      time: "09:00",
      title: "Setup and intro",
      desc: "Everyone gets the Claude app set up on their own machine. A short look at what the tool actually is.",
    },
    {
      time: "09:30",
      title: "Prompting and context",
      desc: "How to give Claude enough context to do real work, not just answer politely.",
    },
    {
      time: "10:30",
      title: "The Claude app in practice",
      desc: "Documents, files and your first tool. You build, you do not watch.",
    },
    {
      time: "12:00",
      title: "Break",
      desc: "Lunch and fresh air.",
    },
    {
      time: "12:45",
      title: "Your own tasks",
      desc: "We start from what you actually do at work and build from there.",
    },
    {
      time: "14:30",
      title: "Tools and automation",
      desc: "Put the automation into a system so it keeps working after the course.",
    },
    {
      time: "15:30",
      title: "Wrap-up and next steps",
      desc: "You go home with something that works, and a plan for what to build next week.",
    },
  ],
  priceTitle: "Price",
  priceValue: "5,900 NOK",
  priceUnit: "per seat, open cohort in Stavanger",
  priceNote:
    "Courses are exempt from VAT under section 3-5 of the Norwegian VAT Act. The price is what you pay, with no VAT added.",
  priceCorporate: "Training a whole team? See in-house training under Argon Industri.",
  priceCorporateLink: "Argon Industri",
  garantiLabel: "Happy, or your money back",
  garantiBody:
    "If the course is not worth your time after the first day, just say so and you get the full fee back. No questions asked.",
  datesTitle: "Upcoming cohorts",
  datesBody:
    "Two open cohorts in Stavanger this autumn. The venue is announced by email before the course starts. Sign up and we will reserve your seat.",
  cohortMeta: "Stavanger, 09:00 to 16:00",
  freeTitle: "Should you just take Anthropic's free course instead?",
  freeIntro:
    "Anthropic offers a free intro course in English, around three hours of video and quizzes. Go ahead and take it, it is good preparation. This course is for when you want to get past the video stage.",
  freeItems: [
    {
      title: "Live help when something breaks",
      desc: "In self-study, an error message is a dead end. Here a trainer sits next to you until it works.",
    },
    {
      title: "Your tasks, not demos",
      desc: "The video courses use generic examples. You work on your own files and your own workday.",
    },
    {
      title: "Norwegian, and for everyone",
      desc: "The Anthropic course is in English and assumes terminal and Git experience. Here you need no developer background.",
    },
    {
      title: "Someone to ask afterwards",
      desc: "Interactive+ includes follow-up after the course. A video course does not answer email.",
    },
  ],
  founderTitle: "Who teaches the course",
  founderP1:
    "Sondre Gysland has fifteen years behind him in oil and gas, from the workshop and offshore operations to the office and project management. He builds with Claude and Claude Code every day, and teaches with the same tools he uses himself.",
  founderP2:
    "Argon is the company behind the courses. We also build software and AI agents for oil and gas, so the training comes from people who use the tools on real projects.",
  bookTitle: "Sign up",
  bookIntro:
    "Choose a date and fill in the form, and we will reserve your seat and send a confirmation by email. Unsure whether the course is right for you? Mention it in the comment field and we will have a chat first.",
};

export default function KursContent() {
  const { locale } = useLanguage();
  const m = locale === "en" ? en : no;

  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="inline-flex items-center gap-2 text-sm font-medium text-text-light">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
          {m.eyebrow}
        </p>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-tight text-text sm:text-6xl">{m.h1}</h1>
        <p className="mt-6 text-lg text-text-light">{m.intro}</p>
        <p className="mt-4 text-text-light">{m.heroNote}</p>
        <div className="mt-10 space-y-4">
          {COHORTS.map((c, i) => (
            <Reveal key={c.id} delay={i * 90}>
              <div className="card-lift flex overflow-hidden rounded-2xl bg-white ring-1 ring-text/10">
                <div
                  className="relative hidden w-40 shrink-0 flex-col items-center justify-center bg-ink sm:flex"
                  style={{
                    backgroundImage:
                      "radial-gradient(120% 90% at 20% 15%, rgba(217,119,87,0.4), transparent 60%), radial-gradient(100% 80% at 85% 90%, rgba(96,125,139,0.35), transparent 55%)",
                  }}
                >
                  <span className="absolute left-3 top-3 flex h-12 w-12 flex-col items-center justify-center rounded-lg bg-white text-ink shadow">
                    <span className="text-base font-bold leading-none">{c.day}</span>
                    <span className="mt-0.5 text-[10px] font-semibold leading-none">{c.monthNo}</span>
                  </span>
                  <span className="px-4 text-center font-display text-lg font-medium leading-tight text-white">
                    Claude
                    <br />
                    Dagskurs
                  </span>
                </div>
                <div className="flex-1 p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-text">{m.cardTitle}</h3>
                    <div className="text-right">
                      <p className="text-lg font-bold leading-none text-text">{m.cardPrice}</p>
                      <p className="mt-1 text-xs text-text-light">{m.cardPerSeat}</p>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-light">
                    <span>{locale === "en" ? c.labelEn : c.labelNo}</span>
                    <span>{m.cardTime}</span>
                    <span>{m.cardPlace}</span>
                    <span>{m.cardGroup}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-text-light">{m.cardDesc}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-5">
                    <a
                      href="#pamelding"
                      className="rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-ink/85"
                    >
                      {m.ctaPrimary}
                    </a>
                    <a href="#agenda" className="text-sm font-semibold text-primary hover:underline">
                      {m.cardMore} &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href="/kurs/bedrift"
            className="rounded-full bg-surface px-6 py-3 text-sm font-semibold text-text transition hover:bg-text/10"
          >
            {m.ctaSecondary}
          </Link>
          <p className="flex items-center gap-2 text-sm font-medium text-primary">
            <CheckIcon />
            {m.heroGaranti}
          </p>
        </div>
      </div>

      {/* Hva du lærer */}
      <div className="mt-24">
        <h2 className="font-display text-3xl font-medium tracking-tight text-text">{m.learnTitle}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {m.learnItems.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 90}>
              <div className="card-lift h-full rounded-2xl bg-surface p-8">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-semibold text-text">{i + 1}</span>
                <h3 className="mt-4 text-lg font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Privat eller bedrift */}
      <Reveal className="mt-24">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-surface p-8 md:p-10">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-medium tracking-tight text-text">{m.splitTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-light">{m.splitBody}</p>
          </div>
          <Link
            href="/kurs/bedrift"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/85"
          >
            {m.splitCta}
          </Link>
        </div>
      </Reveal>

      {/* Agenda / slik ser dagskurset ut */}
      <div id="agenda" className="mt-24 scroll-mt-24">
        <h2 className="font-display text-3xl font-medium tracking-tight text-text">{m.agendaTitle}</h2>
        <p className="mt-4 max-w-2xl text-text-light">{m.agendaIntro}</p>
        <ol className="mt-10 space-y-0">
          {m.agendaItems.map((item, i) => (
            <li key={item.time} className="flex gap-6">
              <div className="flex flex-col items-center">
                <span className="flex h-8 w-16 shrink-0 items-center justify-center rounded-full bg-surface text-xs font-semibold text-text">
                  {item.time}
                </span>
                {i < m.agendaItems.length - 1 && <span className="w-px flex-1 bg-text/10" aria-hidden />}
              </div>
              <div className="pb-8">
                <h3 className="font-semibold text-text">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-light">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Pris + datoer */}
      <div className="mt-24">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-surface p-8 md:p-10">
            <h2 className="font-display text-3xl font-medium tracking-tight text-text">{m.priceTitle}</h2>
            <p className="mt-6 font-display text-5xl font-medium tracking-tight text-text">{m.priceValue}</p>
            <p className="mt-1 text-sm text-text-light">{m.priceUnit}</p>
            <p className="mt-6 text-sm leading-relaxed text-text-light">{m.priceNote}</p>
            <p className="mt-4 text-sm text-text-light">
              {m.priceCorporate.split(m.priceCorporateLink)[0]}
              <Link href="/kurs/bedrift" className="font-medium text-steel underline underline-offset-2 hover:text-steel-light">
                {m.priceCorporateLink}
              </Link>
              {m.priceCorporate.split(m.priceCorporateLink)[1]}
            </p>
          </div>
          <div className="rounded-3xl bg-surface p-8 md:p-10">
            <h2 className="font-display text-3xl font-medium tracking-tight text-text">{m.datesTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-text-light">{m.datesBody}</p>
            <div className="mt-6 space-y-3">
              {COHORTS.map((c) => (
                <a
                  key={c.id}
                  href="#pamelding"
                  className="card-lift flex items-center gap-4 rounded-xl bg-white p-4 transition hover:ring-1 hover:ring-primary"
                >
                  <span className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-ink text-white">
                    <span className="text-base font-bold leading-none">{c.day}</span>
                    <span className="mt-0.5 text-[10px] font-semibold leading-none">{c.monthNo}</span>
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-semibold text-text">
                      {locale === "en" ? c.labelEn : c.labelNo}
                    </span>
                    <span className="block text-xs text-text-light">{m.cohortMeta}</span>
                  </span>
                  <span className="text-sm font-semibold text-primary">{m.ctaPrimary}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-start gap-3 rounded-2xl bg-primary/5 p-6">
          <CheckIcon />
          <div>
            <p className="text-sm font-semibold text-primary">{m.garantiLabel}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-text-light">{m.garantiBody}</p>
          </div>
        </div>
      </div>

      {/* Gratiskurs-sammenligning */}
      <div className="mt-24">
        <h2 className="font-display text-3xl font-medium tracking-tight text-text">{m.freeTitle}</h2>
        <p className="mt-4 max-w-2xl text-text-light">{m.freeIntro}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {m.freeItems.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 90}>
              <div className="card-lift h-full rounded-2xl bg-surface p-8">
                <h3 className="text-lg font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Hvem holder kurset */}
      <div className="mt-24">
        <div className="grid gap-10 rounded-3xl bg-primary/5 p-8 md:grid-cols-[1fr_2fr] md:p-12">
          <h2 className="font-display text-3xl font-medium tracking-tight text-text">{m.founderTitle}</h2>
          <div className="space-y-4 leading-relaxed text-text-light">
            <p>{m.founderP1}</p>
            <p>{m.founderP2}</p>
          </div>
        </div>
      </div>

      {/* Påmelding / booking */}
      <div id="pamelding" className="mt-24 scroll-mt-24">
        <h2 className="font-display text-3xl font-medium tracking-tight text-text">{m.bookTitle}</h2>
        <p className="mt-4 max-w-2xl text-text-light">{m.bookIntro}</p>
        <div className="mt-8 rounded-3xl bg-surface p-6 md:p-10">
          <KursSignup />
        </div>
      </div>
    </div>
  );
}
