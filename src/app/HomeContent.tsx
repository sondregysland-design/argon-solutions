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
    { href: "/kurs/claude-code-kurs-stavanger", label: t("home.seo.links.claudeCode") },
    { href: "/kurs/ai-kurs-bedrift-stavanger", label: t("home.seo.links.bedrift") },
    { href: "/blogg/slik-kommer-du-i-gang-med-claude", label: t("home.seo.links.guide") },
  ];

  return (
    <>
      <Hero />

      {/* 01 / Kursopplegget */}
      <section className="py-14 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-medium tracking-tight text-text">{t("home.tracks.heading")}</h2>
            <p className="max-w-md text-sm text-text-light">{t("home.tracks.intro")}</p>
          </div>
          <div className="mt-10">
            <Reveal>
            <div className="card-lift flex h-full flex-col rounded-3xl bg-ink p-8 md:p-10">
              <span className="text-sm font-medium text-white/60">{t("home.tracks.industriTag")}</span>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-white">{t("home.tracks.industriName")}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-white/75">{t("home.tracks.industriDesc")}</p>
              {/* Format i stedet for pris. Prisene på de tre oppleggene står på /kurs. */}
              <p className="mt-6 text-sm font-semibold text-white">{t("home.tracks.industriFormats")}</p>
              <Link
                href="/kurs"
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
      <section className="py-14 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-sm font-semibold text-primary">{t("home.proof.label")}</h2>
          <p className="mt-6 max-w-3xl font-display text-3xl font-medium tracking-tight text-text text-balance sm:text-5xl">
            {t("home.proof.body")}
          </p>
          <Link
            href="/kurs"
            className="tap-target-inline mt-6 inline-block text-sm font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
          >
            {t("home.proof.link")}
          </Link>
        </div>
      </section>

      {/* 03 / Detaljer, kollapset. Alt innhold ligger i DOM for søk og agenter. */}
      <section className="py-14 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <details className="group border-t border-text/15">
            <summary className="flex cursor-pointer list-none items-center justify-between py-5 font-semibold text-text [&::-webkit-details-marker]:hidden">
              {t("home.learn.heading")}
              <span aria-hidden className="text-text-light transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="pb-8">
              <p className="text-sm text-text-light">{t("home.learn.intro")}</p>
              <div className="mt-6 space-y-5">
                {learnItems.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-semibold text-text">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </details>

          <details className="group border-t border-text/15">
            <summary className="flex cursor-pointer list-none items-center justify-between py-5 font-semibold text-text [&::-webkit-details-marker]:hidden">
              {t("home.founder.heading")}
              <span aria-hidden className="text-text-light transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="space-y-4 pb-8 leading-relaxed text-text-light">
              <p>{t("home.founder.p1")}</p>
              <p>{t("home.founder.p2")}</p>
            </div>
          </details>

          <details className="group border-t border-text/15">
            <summary className="flex cursor-pointer list-none items-center justify-between py-5 font-semibold text-text [&::-webkit-details-marker]:hidden">
              {t("home.seo.heading")}
              <span aria-hidden className="text-text-light transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="pb-8">
              <div className="space-y-4 leading-relaxed text-text-light">
                <p>{t("home.seo.p1")}</p>
                <p>{t("home.seo.p2")}</p>
                <p>{t("home.seo.p3")}</p>
                <p>{t("home.seo.p4")}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {seoLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="tap-target rounded-full bg-surface px-5 py-2.5 text-sm font-semibold text-text transition hover:bg-text/10"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </details>

          <details className="group border-t border-text/15">
            <summary className="flex cursor-pointer list-none items-center justify-between py-5 font-semibold text-text [&::-webkit-details-marker]:hidden">
              {t("home.faq.heading")}
              <span aria-hidden className="text-text-light transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="pb-8">
              <div className="space-y-6">
                {faqItems.map((f) => (
                  <div key={f.q}>
                    <h3 className="font-semibold text-text">{f.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-light">{f.a}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/faq"
                className="tap-target-inline mt-6 inline-block text-sm font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
              >
                {t("home.faq.more")}
              </Link>
            </div>
          </details>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-text/15 py-5">
            <p className="text-sm text-text-light">
              <span className="font-semibold text-text">{t("home.services.heading")}</span>{" "}
              {t("home.services.body")}
            </p>
            <Link
              href="/tjenester"
              className="tap-target-inline text-sm font-medium text-primary underline underline-offset-4 hover:text-primary-dark"
            >
              {t("home.services.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* Booking-CTA */}
      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-ink px-6 py-14 text-center sm:py-20">
            <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">{t("home.cta.heading")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">{t("home.cta.body")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/kontakt"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-white/90"
              >
                {t("home.cta.kurs")}
              </Link>
              <Link
                href="/kontakt#book"
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
