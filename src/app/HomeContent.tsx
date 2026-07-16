"use client";

import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/i18n/LanguageProvider";

export default function HomeContent() {
  const t = useT();

  const learnItems = [1, 2, 3, 4].map((n) => ({
    title: t(`home.learn.i${n}t`),
    desc: t(`home.learn.i${n}d`),
  }));

  const faqItems = [1, 4, 5, 8].map((n) => ({
    q: t(`home.faq.q${n}`),
    a: t(`home.faq.a${n}`),
  }));

  const seoLinks = [
    { href: "/kurs/claude-kurs-stavanger", label: t("home.seo.links.claude") },
    { href: "/kurs/claude-code-kurs-stavanger", label: t("home.seo.links.claudeCode") },
    { href: "/kurs/ai-kurs-bedrift-stavanger", label: t("home.seo.links.bedrift") },
    { href: "/kurs/vibe-coding-kurs-stavanger", label: t("home.seo.links.vibe") },
    { href: "/blogg/slik-kommer-du-i-gang-med-claude", label: t("home.seo.links.guide") },
  ];

  return (
    <>
      <Hero />

      {/* 01 / Hva du lærer */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-medium tracking-tight text-text">{t("home.learn.heading")}</h2>
            <p className="max-w-md text-sm text-text-light">{t("home.learn.intro")}</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {learnItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="card-lift h-full rounded-2xl bg-surface p-7">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-semibold text-text">{i + 1}</span>
                  <h3 className="mt-4 font-semibold text-text">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-light">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 02 / To spor */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-medium tracking-tight text-text">{t("home.tracks.heading")}</h2>
            <p className="max-w-md text-sm text-text-light">{t("home.tracks.intro")}</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {/* Argon Kurs */}
            <Reveal>
            <div className="card-lift flex h-full flex-col rounded-3xl bg-surface p-8 md:p-10">
              <span className="text-sm font-medium text-text-light">{t("home.tracks.kursTag")}</span>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-text">{t("home.tracks.kursName")}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-text-light">{t("home.tracks.kursDesc")}</p>
              <p className="mt-6 text-sm font-semibold text-text">{t("home.tracks.kursPrice")}</p>
              <Link
                href="/kurs"
                className="mt-6 inline-block self-start rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/85"
              >
                {t("home.tracks.kursCta")}
              </Link>
            </div>
            </Reveal>
            {/* Argon Industri */}
            <Reveal delay={90}>
            <div className="card-lift flex h-full flex-col rounded-3xl bg-ink p-8 md:p-10">
              <span className="text-sm font-medium text-white/60">{t("home.tracks.industriTag")}</span>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-white">{t("home.tracks.industriName")}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-white/75">{t("home.tracks.industriDesc")}</p>
              <p className="mt-6 text-sm font-semibold text-white">{t("home.tracks.industriPrice")}</p>
              <Link
                href="/kurs/bedrift"
                className="mt-6 inline-block self-start rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white/90"
              >
                {t("home.tracks.industriCta")}
              </Link>
            </div>
            </Reveal>
          </div>
          <p className="mt-5 text-sm text-text-light">
            <span className="font-semibold text-primary">{t("home.price.garanti")}</span>{" "}
            {t("home.price.mva")}
          </p>
        </div>
      </section>

      {/* 03 / Bevis */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-sm font-semibold text-primary">{t("home.proof.label")}</h2>
          <p className="mt-6 max-w-3xl font-display text-3xl font-medium tracking-tight text-text text-balance sm:text-5xl">
            {t("home.proof.body")}
          </p>
          <Link
            href="/kurs/bedrift"
            className="mt-6 inline-block text-sm font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
          >
            {t("home.proof.link")}
          </Link>
        </div>
      </section>

      {/* 04 / Hvem holder kurset */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 rounded-3xl bg-primary/5 p-8 md:grid-cols-[1fr_2fr] md:p-12">
            <h2 className="font-display text-3xl font-medium tracking-tight text-text">{t("home.founder.heading")}</h2>
            <div className="space-y-4 leading-relaxed text-text-light">
              <p>{t("home.founder.p1")}</p>
              <p>{t("home.founder.p2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 / Kursene i Stavanger, utdypet */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-medium tracking-tight text-text">{t("home.seo.heading")}</h2>
          <div className="mt-8 max-w-3xl space-y-4 leading-relaxed text-text-light">
            <p>{t("home.seo.p1")}</p>
            <p>{t("home.seo.p2")}</p>
            <p>{t("home.seo.p3")}</p>
            <p>{t("home.seo.p4")}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {seoLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full bg-surface px-5 py-2.5 text-sm font-semibold text-text transition hover:bg-text/10"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 06 / FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-medium tracking-tight text-text">{t("home.faq.heading")}</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {faqItems.map((f) => (
              <div key={f.q} className="border-t border-text/15 pt-5">
                <h3 className="font-semibold text-text">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">{f.a}</p>
              </div>
            ))}
          </div>
          <Link
            href="/faq"
            className="mt-6 inline-block text-sm font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
          >
            {t("home.faq.more")}
          </Link>
        </div>
      </section>

      {/* Vi bygger også */}
      <section className="py-16">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6">
          <div>
            <h2 className="font-semibold text-text">{t("home.services.heading")}</h2>
            <p className="mt-1 max-w-2xl text-sm text-text-light">{t("home.services.body")}</p>
          </div>
          <Link
            href="/tjenester"
            className="rounded-full bg-surface px-5 py-2.5 text-sm font-semibold text-text transition hover:bg-text/10"
          >
            {t("home.services.cta")}
          </Link>
        </div>
      </section>

      {/* Booking-CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-ink px-6 py-20 text-center">
            <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">{t("home.cta.heading")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">{t("home.cta.body")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/kurs#pamelding"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-white/90"
              >
                {t("home.cta.kurs")}
              </Link>
              <Link
                href="/kontakt"
                className="rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                {t("home.cta.bedrift")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
