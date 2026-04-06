import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tjenester — Argon Solutions",
  description: "Software, systemintegrasjon og API-utvikling for olje og gass.",
};

function ClaudeCodeIllustration() {
  return (
    <div className="flex h-full min-h-[300px] flex-col rounded-xl border border-gray-200 bg-[#1e1e2e] p-0 font-mono text-sm shadow-lg">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-gray-700 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 text-xs text-gray-400">claude — argon-solutions</span>
      </div>
      {/* Terminal content */}
      <div className="flex-1 space-y-3 p-4 text-[13px] leading-relaxed">
        <div>
          <span className="text-gray-500">$</span>{" "}
          <span className="text-[#cba6f7]">claude</span>{" "}
          <span className="text-gray-300">Build a dashboard for offshore job tracking</span>
        </div>
        <div className="space-y-1.5">
          <div className="text-[#a6e3a1]">
            <span className="mr-1.5">{">"}</span>Creating project structure...
          </div>
          <div className="text-[#a6e3a1]">
            <span className="mr-1.5">{">"}</span>Setting up Supabase integration
          </div>
          <div className="text-[#a6e3a1]">
            <span className="mr-1.5">{">"}</span>Building real-time data pipeline
          </div>
          <div className="text-[#89b4fa]">
            <span className="mr-1.5">{">"}</span>Generating components...
          </div>
        </div>
        <div className="mt-2 rounded border border-gray-700 bg-[#181825] p-3">
          <div className="text-gray-500">// src/components/JobTracker.tsx</div>
          <div>
            <span className="text-[#cba6f7]">export function</span>{" "}
            <span className="text-[#89b4fa]">JobTracker</span>
            <span className="text-gray-400">() {"{"}</span>
          </div>
          <div className="pl-4">
            <span className="text-[#cba6f7]">const</span>{" "}
            <span className="text-gray-300">jobs</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-[#89b4fa]">useRealtimeJobs</span>
            <span className="text-gray-400">()</span>
          </div>
          <div className="text-gray-400">{"}"}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#a6e3a1]" />
          <span className="text-gray-400">Ready to deploy</span>
        </div>
      </div>
    </div>
  );
}

function AIAgentIllustration() {
  return (
    <div className="flex h-full min-h-[300px] items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="w-full max-w-[300px] space-y-3">
        {/* Trigger */}
        <div className="rounded-lg border border-blue-200 bg-white px-4 py-3 text-center shadow-sm">
          <div className="text-xs font-medium text-primary">Oppgave</div>
          <div className="text-[10px] text-text-light">&quot;Hent sertifikater fra leverandørportal&quot;</div>
        </div>

        <div className="flex justify-center">
          <div className="h-4 w-0.5 bg-primary-light/40" />
        </div>

        {/* Agent hub */}
        <div className="flex justify-center">
          <div className="rounded-xl border-2 border-primary bg-white px-5 py-4 text-center shadow-md">
            <div className="flex items-center justify-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.47 4.411a2.25 2.25 0 01-2.133 1.589H8.603a2.25 2.25 0 01-2.133-1.589L5 14.5m14 0H5" />
              </svg>
              <div className="text-sm font-bold text-primary">AI Agent</div>
            </div>
            <div className="mt-1 flex justify-center gap-1">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a6e3a1]" />
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a6e3a1] [animation-delay:0.2s]" />
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a6e3a1] [animation-delay:0.4s]" />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-4 w-0.5 bg-primary-light/40" />
        </div>

        {/* Steps */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2">
            <svg className="h-4 w-4 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs text-green-800">Åpnet nettleser, logget inn</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2">
            <svg className="h-4 w-4 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs text-green-800">47 leverandører behandlet</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2">
            <div className="h-4 w-4 shrink-0 animate-spin rounded-full border-2 border-blue-300 border-t-blue-600" />
            <span className="text-xs text-blue-800">Eksporterer rapport...</span>
          </div>
        </div>

        {/* Time saved */}
        <div className="rounded-lg bg-primary/5 px-4 py-2 text-center">
          <span className="text-xs font-medium text-primary">3 min i stedet for 6 timer manuelt</span>
        </div>
      </div>
    </div>
  );
}

function ClaudeStartupIllustration() {
  return (
    <div className="flex h-full min-h-[300px] flex-col rounded-xl border border-gray-200 bg-[#1a1b26] p-0 font-mono text-sm shadow-lg">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-gray-700 px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 text-xs text-gray-400">PowerShell — claude</span>
      </div>
      {/* Terminal content */}
      <div className="flex-1 space-y-4 p-5 text-[13px] leading-relaxed">
        <div>
          <span className="text-[#7aa2f7]">PS C:\Users\dev&gt;</span>{" "}
          <span className="text-gray-300">claude</span>
        </div>
        <div className="flex gap-6">
          {/* Mascot */}
          <div className="text-[11px] leading-[1.1]">
            <div className="text-amber-600">{"  ╭──────╮"}</div>
            <div className="text-amber-600">{"  │"}<span className="text-white">▪</span>{"  "}<span className="text-white">▪</span>{"│"}</div>
            <div className="text-amber-600">{"  │  ──  │"}</div>
            <div className="text-amber-600">{"  ╰┬────┬╯"}</div>
            <div className="text-amber-600">{"   │    │"}</div>
          </div>
          {/* Version info */}
          <div className="space-y-1">
            <div className="text-lg font-bold text-gray-200">Claude Code <span className="text-gray-500">v2.1.86</span></div>
            <div className="text-gray-400">Opus 4.6 (1M context) · Claude Max</div>
            <div className="text-gray-500">~/project</div>
          </div>
        </div>
        <div className="text-[#7aa2f7]">
          ↑ Opus now defaults to 1M context · 5x more room
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-gray-300">{">"}</span>
          <div className="h-4 w-1.5 animate-pulse bg-gray-400" />
        </div>
        {/* Status bar */}
        <div className="mt-auto flex items-center gap-3 pt-4 text-[11px]">
          <span className="text-gray-500">[Opus 4.6 (1M context)]</span>
          <div className="h-1.5 flex-1 rounded-full bg-gray-700">
            <div className="h-1.5 w-[3%] rounded-full bg-[#7aa2f7]" />
          </div>
          <span className="text-gray-500">0% context</span>
        </div>
      </div>
    </div>
  );
}

const tjenester = [
  {
    title: "Skreddersydd Software",
    description:
      "Vi utvikler spesialtilpassede applikasjoner som løser deres unike utfordringer. Fra dashboards og overvåkningssystemer til komplett arbeidsflytstyring, vi bygger det dere trenger.",
    features: [
      "Webapplikasjoner og dashboards",
      "Mobilvenlige løsninger",
      "Sanntids datavisualisering",
      "Offline-støtte for feltarbeid",
    ],
  },
  {
    title: "AI-agenter",
    description:
      "Intelligente agenter som automatiserer nettleseroppgaver, datainnhenting og repetitive prosesser. Spar timer hver dag på manuelt arbeid.",
    features: [
      "Nettleserautomatisering",
      "Automatisk datainnhenting",
      "Skjemautfylling og rapportering",
      "Integrasjon med eksisterende systemer",
    ],
  },
  {
    title: "Claude Code opplæring",
    description:
      "Lær å bruke Claude Code for å akselerere utviklingen. Vi tilbyr opplæring og workshops som gjør teamet deres mer produktive med AI-assistert koding.",
    features: [
      "Hands-on workshops",
      "Tilpasset opplæring for deres stack",
      "Best practices og arbeidsflyter",
      "Integrasjon i eksisterende utviklingsprosesser",
    ],
  },
];

const illustrations = [
  <ClaudeCodeIllustration key="claude" />,
  <AIAgentIllustration key="ai-agent" />,
  <div key="claude-screenshot" className="flex h-full min-h-[300px] items-center justify-center rounded-xl border border-gray-200 bg-[#1a1b26] p-4 shadow-lg">
    <img src="/products/claude-code-preview.png" alt="Claude Code terminal" className="rounded-lg" />
  </div>,
];

export default function TjenesterPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold text-text">Våre tjenester</h1>
        <p className="mt-4 max-w-2xl text-lg text-text-light">
          Vi leverer teknologiløsninger skreddersydd for energisektoren.
          Her er hva vi kan hjelpe med.
        </p>

        <div className="mt-16 space-y-16">
          {tjenester.map((t, i) => (
            <div
              key={t.title}
              className={`flex flex-col gap-8 md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-text">{t.title}</h2>
                <p className="mt-3 text-text-light">{t.description}</p>
                <ul className="mt-6 space-y-2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-text-light">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                {illustrations[i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
