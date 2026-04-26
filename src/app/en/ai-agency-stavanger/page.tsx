import type { Metadata } from "next";
import Link from "next/link";

const title = "AI Agency in Stavanger, Norway — Argon Solutions";
const description = "Argon Solutions is an AI agency in Stavanger, Norway. We deliver AI services, Claude Code setup, custom software and AI agents for the energy sector.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["AI agency", "AI agency Norway", "AI agency Stavanger", "AI consulting Norway", "Claude Code"],
  alternates: { canonical: "/en/ai-agency-stavanger" },
  openGraph: { title, description, url: "/en/ai-agency-stavanger", locale: "en_US" },
};

export default function AIAgencyPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-sm text-text-light">
          <Link href="/" className="hover:text-primary">Norsk</Link>{" / "}<span className="text-text">English</span>
        </p>
        <h1 className="mt-6 text-4xl font-[family-name:var(--font-playfair)] font-medium text-text sm:text-5xl">
          AI Agency in Stavanger
        </h1>
        <p className="mt-6 text-lg text-text-light leading-relaxed">
          Argon Solutions is an AI agency based in Stavanger, Norway — the energy capital of the Nordics.
          We build custom AI solutions, set up Claude Code environments, and develop AI agents for
          businesses in the energy sector.
        </p>

        <section className="mt-16">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">What we do</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Claude Code Setup", desc: "We set up Claude Code as a complete AI operating system for your team — custom skills, MCP servers, and workflows." },
              { title: "Custom Software", desc: "Bespoke web applications, dashboards, and tools built for the energy sector." },
              { title: "AI Agents", desc: "Autonomous agents that handle browser automation, data collection, and repetitive processes." },
              { title: "System Integration", desc: "Connect your existing systems with custom APIs, automated data flows, and AI-powered reporting." },
            ].map((s) => (
              <div key={s.title} className="rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-text">{s.title}</h3>
                <p className="mt-2 text-sm text-text-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-xl bg-surface p-8 md:p-12">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">Why Argon Solutions?</h2>
          <ul className="mt-6 space-y-3 text-text-light">
            {[
              "Founded by engineers with 10+ years of hands-on experience in oil & gas operations",
              "We build working AI systems, not PowerPoint presentations",
              "First month free — try before you commit",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="mt-1 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 rounded-2xl bg-primary/5 p-8 text-center md:p-12">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] font-medium text-text">Ready to get started?</h2>
          <p className="mt-3 text-text-light">Book a free 30-minute consultation to discuss how AI can transform your operations.</p>
          <Link href="/kontakt" className="mt-6 inline-block rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_var(--color-primary)] transition hover:bg-primary-dark">
            Get in touch
          </Link>
        </section>
      </div>
    </div>
  );
}
