import type { Metadata } from "next";
import Link from "next/link";
import { SetHtmlLang } from "@/components/SetHtmlLang";

const title = "AI Agency in Stavanger, Norway";
const description = "Argon Solutions is an AI agency in Stavanger, Norway. We deliver AI services, Claude Code setup, custom software and AI agents for the energy sector.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["AI agency", "AI agency Norway", "AI agency Stavanger", "AI consulting Norway", "Claude Code"],
  alternates: {
    canonical: "/en/ai-agency-stavanger",
    languages: {
      "nb-NO": "/ai-byra-stavanger",
      en: "/en/ai-agency-stavanger",
      "x-default": "/ai-byra-stavanger",
    },
  },
  openGraph: { images: ["/og-image.png"], title, description, url: "/en/ai-agency-stavanger", locale: "en_US" },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.argonsolutions.no/en/ai-agency-stavanger",
  name: title,
  description,
  inLanguage: "en",
  isPartOf: { "@id": "https://www.argonsolutions.no/#website" },
  about: { "@id": "https://www.argonsolutions.no/#organization" },
  mainEntity: {
    "@type": "Service",
    name: "AI agency services in Stavanger, Norway",
    description,
    serviceType: "AI consulting, Claude Code setup, custom software, AI agents",
    provider: { "@type": "Organization", "@id": "https://www.argonsolutions.no/#organization", name: "Argon Solutions" },
    areaServed: { "@type": "Country", name: "Norway" },
  },
};

const enProseSections = [
  {
    heading: "Why an agency in Stavanger",
    paragraphs: [
      "Stavanger is Norway's oil and energy capital, and that shapes what we build. The workflows that cost our clients the most time are document handling, certificate tracking, supplier portals and reporting to operators. None of that is generic office work, and off-the-shelf tools rarely fit it without someone bending their process to match the software.",
      "We come out of that industry rather than into it. The founder is an engineer with experience from offshore operations and subsea projects on the Norwegian continental shelf, which means the first conversation is about your process and not about our technology stack.",
    ],
  },
  {
    heading: "What we actually do",
    paragraphs: [
      "Three things, in roughly this order of demand. We run hands-on in-house AI courses at your offices anywhere in Norway. We set up Claude and Claude Code for companies, with the skills, hooks and integrations that match how your team already works. And we build custom software, system integrations and AI agents for the energy sector.",
      "Everything we have built is live and publicly accessible. When you evaluate any supplier, including us, ask to see a system running rather than a presentation.",
    ],
  },
  {
    heading: "How we price",
    paragraphs: [
      "In-house course days start at 40,000 NOK for the whole team, exempt from VAT. Software is a monthly subscription that covers hosting, maintenance and support, starting at 3,000 NOK per month for a single AI agent and 15,000 NOK per month for full custom development. There is no setup fee and the first month is free.",
      "If we think your problem does not need custom software, we will say so in the first conversation. That is cheaper for both of us than a project that should not be built.",
    ],
  },
];

export default function AIAgencyPage() {
  return (
    // lang på wrapperen gjør språket riktig allerede i server-HTML-en.
    // SetHtmlLang retter <html lang> etterpå for skjermlesere som ser på roten.
    <div className="py-12 sm:py-20" lang="en">
      <SetHtmlLang lang="en" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-sm text-text-light">
          <Link href="/ai-byra-stavanger" hrefLang="nb" className="hover:text-primary">Norsk</Link>{" / "}<span className="text-text">English</span>
        </p>
        <h1 className="mt-6 text-4xl font-display font-medium text-text sm:text-5xl">
          AI Agency in Stavanger
        </h1>
        <p className="mt-6 text-lg text-text-light leading-relaxed">
          Argon Solutions is an AI agency based in Stavanger, Norway, the energy capital of the Nordics.
          We build custom AI solutions, set up Claude Code environments, and develop AI agents for
          businesses in the energy sector.
        </p>

        <section className="mt-16">
          <h2 className="text-2xl font-display font-medium text-text">What we do</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Claude Code Setup", desc: "We set up Claude Code as a complete AI operating system for your team: custom skills, MCP servers, and workflows." },
              { title: "Custom Software", desc: "Bespoke web applications, dashboards, and tools built for the energy sector." },
              { title: "AI Agents", desc: "Autonomous agents that handle browser automation, data collection, and repetitive processes." },
              { title: "System Integration", desc: "Connect your existing systems with custom APIs, automated data flows, and AI-powered reporting." },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl bg-surface p-6">
                <h3 className="font-semibold text-text">{s.title}</h3>
                <p className="mt-2 text-sm text-text-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl bg-surface p-8 md:p-12">
          <h2 className="text-2xl font-display font-medium text-text">Why Argon Solutions?</h2>
          <ul className="mt-6 space-y-3 text-text-light">
            {[
              "Founded by an engineer with fifteen years of hands-on experience in oil & gas operations",
              "We build working AI systems, not PowerPoint presentations",
              "First month free. Try before you commit",
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

        <section className="mt-16 rounded-3xl bg-primary/5 p-8 text-center md:p-12">
          <h2 className="text-2xl font-display font-medium text-text">Ready to get started?</h2>
          <p className="mt-3 text-text-light">Book a free 30-minute consultation to discuss how AI can transform your operations.</p>
          <Link href="/kontakt" className="mt-6 inline-block rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-ink/85">
            Get in touch
          </Link>
        </section>
      </div>
      <div className="mx-auto max-w-3xl px-6 mt-16 space-y-12">
        {enProseSections.map((sec) => (
          <section key={sec.heading}>
            <h2 className="font-display text-2xl font-medium tracking-tight text-text">
              {sec.heading}
            </h2>
            {sec.paragraphs.map((para) => (
              <p key={para.slice(0, 40)} className="mt-4 leading-relaxed text-text-light">
                {para}
              </p>
            ))}
          </section>
        ))}
        <p className="mt-10 text-text-light">
            Looking for developer training specifically? See our{" "}
            <Link href="/en/claude-code-course" className="text-primary hover:underline">
              Claude Code course in Norway
            </Link>
            .
          </p>
      </div>
    </div>
  );
}
