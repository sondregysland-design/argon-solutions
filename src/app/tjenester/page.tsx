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

function IntegrationIllustration() {
  return (
    <div className="flex h-full min-h-[300px] items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="w-full max-w-[280px] space-y-4">
        {/* System boxes */}
        <div className="flex items-center justify-between">
          <div className="rounded-lg border border-blue-200 bg-white px-4 py-3 text-center shadow-sm">
            <div className="text-xs font-medium text-primary">ERP</div>
            <div className="text-[10px] text-text-light">SAP / Oracle</div>
          </div>
          <div className="flex-1 border-t-2 border-dashed border-primary-light/40" />
          <div className="rounded-lg border border-blue-200 bg-white px-4 py-3 text-center shadow-sm">
            <div className="text-xs font-medium text-primary">CRM</div>
            <div className="text-[10px] text-text-light">Salesforce</div>
          </div>
        </div>

        {/* Center hub */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -top-3 left-1/2 h-3 w-0.5 -translate-x-1/2 bg-primary-light/40" />
            <div className="rounded-xl border-2 border-primary bg-white px-6 py-4 text-center shadow-md">
              <div className="text-xs font-bold text-primary">ARGON</div>
              <div className="text-[10px] text-text-light">Integrasjon</div>
              <div className="mt-1 flex justify-center gap-1">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a6e3a1]" />
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a6e3a1] [animation-delay:0.2s]" />
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a6e3a1] [animation-delay:0.4s]" />
              </div>
            </div>
            <div className="absolute -bottom-3 left-1/2 h-3 w-0.5 -translate-x-1/2 bg-primary-light/40" />
          </div>
        </div>

        {/* Bottom systems */}
        <div className="flex items-center justify-between">
          <div className="rounded-lg border border-blue-200 bg-white px-4 py-3 text-center shadow-sm">
            <div className="text-xs font-medium text-primary">SCADA</div>
            <div className="text-[10px] text-text-light">Prosessdata</div>
          </div>
          <div className="flex-1 border-t-2 border-dashed border-primary-light/40" />
          <div className="rounded-lg border border-blue-200 bg-white px-4 py-3 text-center shadow-sm">
            <div className="text-xs font-medium text-primary">BI</div>
            <div className="text-[10px] text-text-light">Rapportering</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApiIllustration() {
  return (
    <div className="flex h-full min-h-[300px] flex-col rounded-xl border border-gray-200 bg-white p-0 font-mono text-sm shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="rounded bg-green-100 px-2 py-0.5 text-[11px] font-bold text-green-700">GET</div>
          <span className="text-xs text-text-light">/api/v1/jobs</span>
        </div>
        <div className="rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-medium text-green-700">200 OK</div>
      </div>
      {/* Response */}
      <div className="flex-1 bg-gray-50 p-4 text-[12px]">
        <div className="text-gray-400">{"{"}</div>
        <div className="pl-4">
          <span className="text-primary">&quot;status&quot;</span>
          <span className="text-gray-400">: </span>
          <span className="text-green-600">&quot;success&quot;</span>
          <span className="text-gray-400">,</span>
        </div>
        <div className="pl-4">
          <span className="text-primary">&quot;data&quot;</span>
          <span className="text-gray-400">: [{"{"}</span>
        </div>
        <div className="pl-8">
          <span className="text-primary">&quot;id&quot;</span>
          <span className="text-gray-400">: </span>
          <span className="text-amber-600">1042</span>
          <span className="text-gray-400">,</span>
        </div>
        <div className="pl-8">
          <span className="text-primary">&quot;platform&quot;</span>
          <span className="text-gray-400">: </span>
          <span className="text-green-600">&quot;Gullfaks C&quot;</span>
          <span className="text-gray-400">,</span>
        </div>
        <div className="pl-8">
          <span className="text-primary">&quot;type&quot;</span>
          <span className="text-gray-400">: </span>
          <span className="text-green-600">&quot;vedlikehold&quot;</span>
          <span className="text-gray-400">,</span>
        </div>
        <div className="pl-8">
          <span className="text-primary">&quot;status&quot;</span>
          <span className="text-gray-400">: </span>
          <span className="text-green-600">&quot;aktiv&quot;</span>
        </div>
        <div className="pl-4 text-gray-400">{"}],"}</div>
        <div className="pl-4">
          <span className="text-primary">&quot;total&quot;</span>
          <span className="text-gray-400">: </span>
          <span className="text-amber-600">847</span>
        </div>
        <div className="text-gray-400">{"}"}</div>
      </div>
      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-100 px-4 py-2">
        <span className="text-[10px] text-text-light">Response time: 42ms</span>
        <div className="flex gap-1">
          <div className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] text-primary">REST</div>
          <div className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] text-primary">Auth</div>
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
    title: "Systemintegrasjon",
    description:
      "Knytt eksisterende systemer sømløst sammen. Vi sørger for at data flyter fritt mellom plattformer, fjerner manuelle prosesser og reduserer feil.",
    features: [
      "ERP- og SAP-integrasjon",
      "Datamigrasjon mellom systemer",
      "Automatiserte arbeidsflyter",
      "Sanntidssynkronisering",
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
  <IntegrationIllustration key="integration" />,
  <ClaudeCodeIllustration key="claude-training" />,
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
