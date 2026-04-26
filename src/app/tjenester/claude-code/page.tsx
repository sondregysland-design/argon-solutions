import type { Metadata } from "next";
import Link from "next/link";

const description =
  "Argon Solutions setter opp Claude Code som et komplett AI-operativsystem for din bedrift. Skreddersydde skills, MCP-servere, hooks og arbeidsflyter. AI-byrå i Stavanger.";

export const metadata: Metadata = {
  title: "Claude Code for bedrifter — Oppsett, opplæring og rådgivning",
  description,
  keywords: ["Claude Code", "Claude Code oppsett", "Claude Code bedrift", "AI operativsystem", "AI-byrå Stavanger"],
  alternates: { canonical: "/tjenester/claude-code" },
  openGraph: {
    title: "Claude Code for bedrifter — Oppsett, opplæring og rådgivning",
    description,
    url: "/tjenester/claude-code",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Claude Code Setup and Training",
  name: "Claude Code for bedrifter",
  provider: { "@type": "Organization", "@id": "https://argonsolutions.no/#organization", name: "Argon Solutions" },
  areaServed: { "@type": "Country", name: "Norway" },
  description,
  offers: [
    { "@type": "Offer", name: "Intro", description: "2-timers introduksjon for enkeltpersoner." },
    { "@type": "Offer", name: "Interactive", description: "Halvdags workshop for utviklerteam." },
    { "@type": "Offer", name: "Interactive+", description: "Heldags dypdykk for tekniske team." },
    { "@type": "Offer", name: "Team Setup", description: "Komplett oppsett + 30 dager support." },
  ],
};

const featureCards = [
  { title: "Skreddersydde skills", description: "Vi bygger tilpassede Claude Code skills som lar AI-en utføre oppgaver spesifikke for din bransje." },
  { title: "MCP-servere", description: "Model Context Protocol-servere som kobler Claude Code mot dine interne systemer og API-er." },
  { title: "CLAUDE.md og hooks", description: "Vi setter opp prosjekthukommelse og hooks som gir Claude Code full kontekst om din organisasjon." },
  { title: "Team-oppsett", description: "Delt konfigurasjon på tvers av teamet og opplæring som gjør hele organisasjonen produktiv." },
];

const trainingTiers = [
  { name: "Intro", target: "Enkeltpersoner", duration: "2-timers intro",
    description: "Kom i gang med Claude Code raskt. Grunnleggende oppsett og de viktigste kommandoene.",
    features: ["Installasjon og konfigurasjon", "Grunnleggende kommandoer", "Første CLAUDE.md", "Q&A-sesjon"] },
  { name: "Interactive", target: "Utviklerteam", duration: "Halvdags workshop",
    description: "Praktisk workshop for hele utviklerteamet med felles arbeidsoppsett og konkrete use cases.",
    features: ["Team-konfigurasjon", "Delte workflows", "Skills og slash-kommandoer", "Hands-on øvelser"] },
  { name: "Interactive+", target: "Tekniske team", duration: "Heldags dypdykk",
    description: "Komplett heldagsworkshop med avansert oppsett, MCP-servere og systemintegrasjoner.",
    features: ["MCP-serveroppsett", "Hooks og automatisering", "Systemintegrasjoner", "Custom skills-utvikling"] },
  { name: "Team Setup", target: "Organisasjoner", duration: "Komplett oppsett + 30 dager support",
    description: "Vi tar ansvar for hele oppsettet fra analyse til ferdig AI-operativsystem.",
    features: ["Behovsanalyse og planlegging", "Komplett infrastrukturoppsett", "Opplæring av hele teamet", "30 dager support"] },
];

const konsulentTjenester = [
  { title: "Custom Setup", description: "Vi setter opp Claude Code fra bunnen av tilpasset din organisasjon." },
  { title: "Skill-utvikling", description: "Vi bygger skreddersydde skills og slash-kommandoer for din bransje." },
  { title: "MCP-servere", description: "Utvikling og integrasjon av MCP-servere mot dine interne systemer." },
  { title: "Agent-arkitektur", description: "Design og implementering av multi-agent systemer der Claude Code koordinerer autonomt." },
];

const CheckIcon = () => (
  <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function ClaudeCodePage() {
  return (
    <div className="py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <div className="mx-auto max-w-6xl px-6">
        <nav className="mb-8 flex items-center gap-2 text-sm text-text-light">
          <Link href="/tjenester" className="hover:text-text transition-colors">Tjenester</Link>
          <span>/</span>
          <span className="text-text">Claude Code</span>
        </nav>

        <h1 className="text-4xl font-[family-name:var(--font-playfair)] font-medium text-text">
          Claude Code for bedrifter
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Claude Code er ikke bare et kodeverktøy — det er et fullstendig AI-operativsystem for din bedrift.
          Argon Solutions hjelper deg med oppsett og skreddersydde konfigurasjoner som gjør teamet produktivt.
        </p>
        <div className="mt-16 rounded-xl bg-surface p-8 md:p-12">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">Hva er Claude Code?</h2>
          <p className="mt-4 text-text-light">
            Claude Code er Anthropics CLI-baserte AI-assistent som kjører direkte i terminalen din.
            I motsetning til vanlige chatbots kan Claude Code lese og skrive filer, kjøre kommandoer,
            browse nettet og koordinere komplekse oppgaver autonomt.
          </p>
          <p className="mt-3 text-text-light">
            Der en chatbot svarer på spørsmål, tar Claude Code ansvar for oppgaver. Det skriver kode,
            tester og deployer — alt mens det husker konteksten gjennom CLAUDE.md.
            Med riktig oppsett blir det et virtuelt teammedlem som kjenner bedriften din fra innsiden.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">
            Hvorfor bedrifter trenger et AI-operativsystem
          </h2>
          <p className="mt-4 max-w-2xl text-text-light">
            De fleste selskaper bruker AI som en chatbot. Med riktig oppsett er Claude Code
            et AI-operativsystem som jobber på tvers av hele organisasjonen.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {featureCards.map((card) => (
              <div key={card.title} className="rounded-xl border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-primary">{card.title}</h3>
                <p className="mt-2 text-sm text-text-light">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 border-t border-gray-100 pt-16">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">Opplæringspakker</h2>
          <p className="mt-4 max-w-2xl text-text-light">
            Fra en rask introduksjon til komplett organisasjonsoppsett — vi tilpasser til der dere er i dag.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trainingTiers.map((tier) => (
              <div key={tier.name} className="flex flex-col rounded-xl border border-gray-100 p-6">
                <div>
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{tier.target}</span>
                  <h3 className="mt-3 text-lg font-semibold text-text">{tier.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{tier.duration}</p>
                  <p className="mt-3 text-sm text-text-light">{tier.description}</p>
                </div>
                <ul className="mt-4 flex-1 space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-text-light">
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 border-t border-gray-100 pt-16">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">Konsulenttjenester</h2>
          <p className="mt-4 max-w-2xl text-text-light">
            Trenger dere mer enn opplæring? Vi setter opp hele AI-infrastrukturen fra bunnen av.
          </p>
          <div className="mt-8 space-y-4">
            {konsulentTjenester.map((tjeneste) => (
              <div key={tjeneste.title} className="flex items-start gap-4 rounded-xl border border-gray-100 p-6">
                <CheckIcon />
                <div>
                  <h3 className="font-semibold text-text">{tjeneste.title}</h3>
                  <p className="mt-1 text-sm text-text-light">{tjeneste.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-2xl bg-primary/5 p-8 text-center md:p-12">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">
            Klar for å sette opp Claude Code?
          </h2>
          <p className="mt-4 text-text-light">Book en gratis demo og se hva Claude Code kan gjøre for din bedrift.</p>
          <div className="mt-8">
            <Link href="/kontakt" className="rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_var(--color-primary)] transition hover:bg-primary-dark">
              Book en demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}