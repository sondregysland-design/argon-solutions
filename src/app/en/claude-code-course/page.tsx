import type { Metadata } from "next";
import Link from "next/link";
import { SetHtmlLang } from "@/components/SetHtmlLang";

const title = "Claude Code Course in Norway";
const description =
  "In-house Claude Code course for developers and technical teams in Stavanger or anywhere in Norway. Skills, MCP, subagents and workflows. From 40,000 NOK a day.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["Claude Code course", "Claude Code training", "Claude Code Norway", "Claude course Norway", "Anthropic Claude training"],
  alternates: {
    canonical: "/en/claude-code-course",
    languages: {
      "nb-NO": "/kurs/claude-code-kurs-stavanger",
      en: "/en/claude-code-course",
      "x-default": "/kurs/claude-code-kurs-stavanger",
    },
  },
  openGraph: {
    images: ["/og-image.png"],
    title,
    description,
    url: "/en/claude-code-course",
    locale: "en_US",
  },
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://www.argonsolutions.no/en/claude-code-course#course",
  name: "Claude Code Course (in-house, Norway)",
  description,
  url: "https://www.argonsolutions.no/en/claude-code-course",
  inLanguage: "en",
  provider: { "@type": "Organization", "@id": "https://www.argonsolutions.no/#organization", name: "Argon Solutions" },
  offers: {
    "@type": "Offer",
    price: "40000",
    priceCurrency: "NOK",
    availability: "https://schema.org/InStock",
    url: "https://www.argonsolutions.no/kontakt",
  },
};

const topics = [
  { title: "Setup that sticks", desc: "Claude Code installed and configured for your stack, with CLAUDE.md project memory and permissions that fit your security requirements." },
  { title: "Skills and MCP servers", desc: "Custom skills for your recurring workflows and MCP servers that connect Claude Code to your internal systems." },
  { title: "Subagents and workflows", desc: "Parallel agents, code review flows and automation patterns your team can run from day one." },
  { title: "Real tasks from your codebase", desc: "The course runs on your own repositories. The team leaves with working setups, not slides." },
];

const enProseSections = [
  {
    heading: "Who the course is for",
    paragraphs: [
      "Developers and technical teams who already write code and want Claude Code to do the parts of the job that are mechanical. That includes refactors across many files, test writing, migrations, documentation and the long tail of maintenance work that never reaches the top of a backlog.",
      "It is not an introduction to AI. If nobody on the team has used Claude before, the general AI course is the better starting point, and we will tell you that rather than sell you the wrong day.",
    ],
  },
  {
    heading: "What a course day covers",
    paragraphs: [
      "We start with your own repository, not a demo project. The morning covers how Claude Code reads a codebase, how to give it context that actually helps, and where it goes wrong. The afternoon is setup that survives the course, which means a CLAUDE.md the team agrees on, a few skills that encode your real workflows, hooks that run your linting and tests automatically, and MCP servers connected to the systems you already use.",
      "You leave with a working configuration committed to your own repository, not notes from a slideshow.",
    ],
  },
  {
    heading: "Practical details",
    paragraphs: [
      "In-house courses start at 40,000 NOK per course day for the whole team, and we travel anywhere in Norway. A day runs 09:00 to 16:00. Participants need their own laptop and access to a repository they are allowed to work in.",
      "Courses are exempt from Norwegian VAT under merverdiavgiftsloven section 3-5, so the price you see is the price you pay.",
    ],
  },
];

export default function ClaudeCodeCoursePage() {
  return (
    // lang på wrapperen gjør språket riktig allerede i server-HTML-en.
    <div className="py-12 sm:py-20" lang="en">
      <SetHtmlLang lang="en" />
      <script
        type="application/ld+json"
        // Safe: static server-side constants, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-sm text-text-light">
          <Link href="/kurs/claude-code-kurs-stavanger" className="hover:text-primary">Norsk</Link>
          {" / "}
          <span className="text-text">English</span>
        </p>
        <h1 className="mt-6 font-display text-4xl font-medium tracking-tight text-text sm:text-5xl">
          Claude Code course for your team
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-text-light">
          A hands-on, in-house Claude Code course for developers and technical teams. Taught by
          practitioners at Argon Solutions who build with Claude Code daily. Delivered in Stavanger
          or on-site anywhere in Norway. From 40,000 NOK per course day for the whole team.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/kontakt"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/85"
          >
            Request an offer
          </Link>
          <Link
            href="/kurs/claude-code-kurs-stavanger"
            className="rounded-full bg-surface px-6 py-3 text-sm font-semibold text-text transition hover:bg-text/10"
          >
            Norwegian course page
          </Link>
        </div>

        <div className="mt-16">
          {topics.map((s) => (
            <details key={s.title} className="group border-t border-text/15">
              <summary className="flex cursor-pointer list-none items-center justify-between py-5 font-semibold text-text [&::-webkit-details-marker]:hidden">
                <h2 className="text-base font-semibold tracking-normal">{s.title}</h2>
                <span aria-hidden className="text-text-light transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-8 leading-relaxed text-text-light">{s.desc}</p>
            </details>
          ))}
        </div>

        <section className="mt-20 rounded-3xl bg-ink px-6 py-16 text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white">Ready to get started?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Tell us about your team and stack. We usually reply within 24 hours.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-white/90"
          >
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
            More about what we do:{" "}
            <Link href="/en/ai-agency-stavanger" className="text-primary hover:underline">
              Argon Solutions, AI agency in Stavanger
            </Link>
            .
          </p>
      </div>
    </div>
  );
}
