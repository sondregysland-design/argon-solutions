"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";

const CheckIcon = () => (
  <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const no = {
  breadcrumbHome: "Hjem",
  breadcrumbCurrent: "Oppsett",
  h1: "Sett opp Claude i bedriften",
  intro:
    "Kurs gir folkene ferdighetene. Vi setter også opp selve verktøyet, trygt og ryddig, med enkle agenter laget for oppgavene dere gjør hver dag. Da kan teamet ta Claude i bruk fra dag én, ikke om et halvt år.",
  ctaTop: "Book en gratis prat",
  stepsTitle: "Slik setter vi opp Claude",
  stepsIntro:
    "Et fast opplegg i fem steg. Vi tar ansvaret for det tekniske, dere beholder kontrollen på data og retning.",
  steps: [
    {
      n: "01",
      title: "Plan og tilganger",
      body: "Vi finner riktig Claude-plan for bedriften, Team eller Enterprise, og setter opp brukere, roller og fakturering. Én tydelig eier, ingen løse privatkontoer.",
    },
    {
      n: "02",
      title: "Data og sikkerhet",
      body: "Vi går gjennom hva som deles med modellen og hva som holdes utenfor. På bedriftsplanene brukes ikke innholdet deres til trening. Trenger dere strengere styring, setter vi opp Enterprise med kontroll på datalagring, pålogging (SSO og SCIM) og revisjonslogg, dokumentert for GDPR.",
    },
    {
      n: "03",
      title: "Koblet til systemene deres",
      body: "Claude kobles mot verktøyene dere allerede bruker via MCP, den åpne standarden for integrasjoner. Ferdige koblinger til vanlige systemer, og skreddersydde der dere trenger det, så agentene henter og oppdaterer ekte data i stedet for å gjette.",
    },
    {
      n: "04",
      title: "Enkle agenter for å komme i gang",
      body: "Vi bygger noen få skreddersydde agenter for oppgavene teamet gjør ofte. Små, konkrete og lette å bruke, så folk ser verdien med én gang og tør å ta dem i bruk.",
    },
    {
      n: "05",
      title: "Utrulling og styring",
      body: "Enkle kjøreregler for hvordan Claude brukes internt, opplæring av teamet, og oppfølging etterpå. Bruken blir trygg, forutsigbar og lett å utvide.",
    },
  ],
  agentsTitle: "Enkle agenter som gir verdi fra dag én",
  agentsIntro:
    "Vi starter smått. Noen få agenter som løser ekte oppgaver i bedriften, ikke en stor plattform ingen rekker å ta i bruk. Eksempler vi ofte bygger:",
  agents: [
    {
      title: "Tilbuds-agent",
      body: "Leser en forespørsel eller PDF og lager utkast til tilbud med riktige tall og formuleringer.",
    },
    {
      title: "Dokument-agent",
      body: "Finner svar i interne prosedyrer, HMS-dokumenter og manualer, og peker på kilden.",
    },
    {
      title: "Rapport-agent",
      body: "Samler dagsrapporter og logger til en ryddig oppsummering for ledelsen.",
    },
    {
      title: "Innboks-agent",
      body: "Sorterer e-post, foreslår svar og løfter fram det som haster.",
    },
    {
      title: "Datasjekk-agent",
      body: "Kontrollerer serienummer, fraktbrev og mottak mot hverandre og flagger avvik.",
    },
    {
      title: "Deres egen",
      body: "Har dere en oppgave som spiser tid hver uke, bygger vi en agent for akkurat den.",
    },
  ],
  agentsNote:
    "Ingen koding kreves fra dere. Agentene kjører der teamet allerede jobber.",
  packagesTitle: "Slik starter dere",
  packagesIntro:
    "Vi tilpasser til der dere er i dag. De fleste begynner med et oppsett og et par agenter, og utvider derfra.",
  packages: [
    {
      name: "Kartlegging",
      target: "Første steg",
      body: "En kort gjennomgang av behov, data og hvilke oppgaver som egner seg først.",
      features: ["Behovsanalyse", "Valg av plan", "Forslag til første agenter"],
    },
    {
      name: "Oppsett",
      target: "Komme i gang",
      body: "Vi setter opp Claude for teamet, kobler til systemene og bygger de første agentene.",
      features: ["Plan, brukere og roller", "Data og sikkerhet på plass", "2-3 skreddersydde agenter", "Opplæring av teamet"],
    },
    {
      name: "Drift og videreutvikling",
      target: "Videre",
      body: "Vi følger opp, bygger nye agenter etter hvert som behovene endrer seg, og holder oppsettet ryddig.",
      features: ["Løpende support", "Nye agenter og skills", "Justering av kjøreregler"],
    },
  ],
  deeperTitle: "Vil dere dypere?",
  deeperIntro: "Oppsettet henger sammen med resten av det vi tilbyr.",
  deeperLinks: [
    { label: "Claude Code som AI-operativsystem", href: "/tjenester/claude-code" },
    { label: "In-house kurs for teamet", href: "/kurs/bedrift" },
    { label: "AI-agenter bygget for dere", href: "/tjenester/ai-agenter" },
  ],
  ctaTitle: "Klar for å komme i gang med Claude?",
  ctaText: "Book en gratis prat, så ser vi på hvilke oppgaver som egner seg først i deres bedrift.",
  ctaButton: "Book en prat",
};

const en: typeof no = {
  breadcrumbHome: "Home",
  breadcrumbCurrent: "Setup",
  h1: "Set up Claude in your business",
  intro:
    "Courses give your people the skills. We also set up the tool itself, safely and cleanly, with simple agents built for the tasks you do every day. That way the team can start using Claude on day one, not six months from now.",
  ctaTop: "Book a free chat",
  stepsTitle: "How we set up Claude",
  stepsIntro:
    "A fixed five-step approach. We take responsibility for the technical side, you keep control of your data and direction.",
  steps: [
    {
      n: "01",
      title: "Plan and access",
      body: "We find the right Claude plan for your business, Team or Enterprise, and set up users, roles and billing. One clear owner, no stray personal accounts.",
    },
    {
      n: "02",
      title: "Data and security",
      body: "We go through what is shared with the model and what stays out. On the business plans your content is not used for training. If you need stricter control, we set up Enterprise with control over data retention, sign-in (SSO and SCIM) and audit logs, documented for GDPR.",
    },
    {
      n: "03",
      title: "Connected to your systems",
      body: "Claude connects to the tools you already use via MCP, the open standard for integrations. Prebuilt connectors for common systems, and custom ones where you need them, so agents read and update real data instead of guessing.",
    },
    {
      n: "04",
      title: "Simple agents to get started",
      body: "We build a handful of tailored agents for the tasks your team does often. Small, concrete and easy to use, so people see the value right away and actually adopt them.",
    },
    {
      n: "05",
      title: "Rollout and governance",
      body: "Simple ground rules for how Claude is used internally, training for the team, and follow-up afterwards. Usage stays safe, predictable and easy to expand.",
    },
  ],
  agentsTitle: "Simple agents that deliver from day one",
  agentsIntro:
    "We start small. A few agents that solve real tasks in the business, not a big platform no one has time to adopt. Examples we often build:",
  agents: [
    {
      title: "Quote agent",
      body: "Reads an inquiry or PDF and drafts a quote with the right numbers and wording.",
    },
    {
      title: "Document agent",
      body: "Finds answers in internal procedures, HSE documents and manuals, and points to the source.",
    },
    {
      title: "Report agent",
      body: "Gathers daily reports and logs into a clean summary for management.",
    },
    {
      title: "Inbox agent",
      body: "Sorts email, suggests replies and surfaces what is urgent.",
    },
    {
      title: "Data check agent",
      body: "Cross-checks serial numbers, shipping and receiving documents and flags discrepancies.",
    },
    {
      title: "Your own",
      body: "If you have a task that eats time every week, we build an agent for exactly that.",
    },
  ],
  agentsNote:
    "No coding required from you. The agents run where your team already works.",
  packagesTitle: "How you get started",
  packagesIntro:
    "We adapt to where you are today. Most start with a setup and a couple of agents, then expand from there.",
  packages: [
    {
      name: "Discovery",
      target: "First step",
      body: "A short review of needs, data and which tasks are best suited first.",
      features: ["Needs analysis", "Plan selection", "First agent proposals"],
    },
    {
      name: "Setup",
      target: "Get started",
      body: "We set up Claude for the team, connect your systems and build the first agents.",
      features: ["Plan, users and roles", "Data and security in place", "2-3 tailored agents", "Team training"],
    },
    {
      name: "Run and extend",
      target: "Ongoing",
      body: "We follow up, build new agents as needs change, and keep the setup tidy.",
      features: ["Ongoing support", "New agents and skills", "Adjusting ground rules"],
    },
  ],
  deeperTitle: "Want to go deeper?",
  deeperIntro: "The setup connects to the rest of what we offer.",
  deeperLinks: [
    { label: "Claude Code as an AI operating system", href: "/tjenester/claude-code" },
    { label: "In-house course for the team", href: "/kurs/bedrift" },
    { label: "AI agents built for you", href: "/tjenester/ai-agenter" },
  ],
  ctaTitle: "Ready to get started with Claude?",
  ctaText: "Book a free chat and we will look at which tasks are best suited first in your business.",
  ctaButton: "Book a chat",
};

export default function OppsettContent() {
  const { locale } = useLanguage();
  const m = locale === "en" ? en : no;

  return (
    <div className="mx-auto max-w-6xl px-6">
      <nav className="mb-8 flex items-center gap-2 text-sm text-text-light">
        <Link href="/" className="hover:text-text transition-colors">{m.breadcrumbHome}</Link>
        <span>/</span>
        <span className="text-text">{m.breadcrumbCurrent}</span>
      </nav>

      <h1 className="text-4xl font-display font-medium text-text">{m.h1}</h1>
      <p className="mt-4 max-w-2xl text-lg text-text-light">{m.intro}</p>
      <Link
        href="/kontakt"
        className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
      >
        {m.ctaTop}
      </Link>

      {/* Steps */}
      <div className="mt-20">
        <h2 className="text-2xl font-display font-medium text-text">{m.stepsTitle}</h2>
        <p className="mt-4 max-w-2xl text-text-light">{m.stepsIntro}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {m.steps.map((step) => (
            <div key={step.n} className="rounded-xl border border-text/10 p-6">
              <span className="font-mono text-sm text-primary">{step.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm text-text-light">{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Starter agents */}
      <div className="mt-20 rounded-xl bg-surface p-8 md:p-12">
        <h2 className="text-2xl font-display font-medium text-text">{m.agentsTitle}</h2>
        <p className="mt-4 max-w-2xl text-text-light">{m.agentsIntro}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {m.agents.map((agent) => (
            <div key={agent.title} className="rounded-xl border border-text/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-primary">{agent.title}</h3>
              <p className="mt-2 text-sm text-text-light">{agent.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-text-light">{m.agentsNote}</p>
      </div>

      {/* Packages */}
      <div className="mt-20 border-t border-text/10 pt-16">
        <h2 className="text-2xl font-display font-medium text-text">{m.packagesTitle}</h2>
        <p className="mt-4 max-w-2xl text-text-light">{m.packagesIntro}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {m.packages.map((pkg) => (
            <div key={pkg.name} className="flex flex-col rounded-xl border border-text/10 p-6">
              <span className="inline-block self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{pkg.target}</span>
              <h3 className="mt-3 text-lg font-semibold text-text">{pkg.name}</h3>
              <p className="mt-2 text-sm text-text-light">{pkg.body}</p>
              <ul className="mt-4 space-y-2">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-text-light">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Deeper links */}
      <div className="mt-20">
        <h2 className="text-2xl font-display font-medium text-text">{m.deeperTitle}</h2>
        <p className="mt-4 max-w-2xl text-text-light">{m.deeperIntro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {m.deeperLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border border-text/15 px-4 py-2 text-sm text-text-light transition-colors hover:border-primary hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 rounded-xl bg-primary p-10 text-center md:p-14">
        <h2 className="text-2xl font-display font-medium text-white">{m.ctaTitle}</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/90">{m.ctaText}</p>
        <Link
          href="/kontakt"
          className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-white/90"
        >
          {m.ctaButton}
        </Link>
      </div>
    </div>
  );
}
