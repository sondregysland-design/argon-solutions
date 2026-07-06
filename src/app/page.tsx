"use client";

import Link from "next/link";
import { Hero } from "@/components/Hero";
import { useT } from "@/i18n/LanguageProvider";

export default function Home() {
  const t = useT();

  const learnItems = [1, 2, 3, 4].map((n) => ({
    title: t(`home.learn.i${n}t`),
    desc: t(`home.learn.i${n}d`),
  }));

  const faqItems = [1, 2, 3].map((n) => ({
    q: t(`home.faq.q${n}`),
    a: t(`home.faq.a${n}`),
  }));

  return (
    <>
      <Hero />

      {/* 01 / Hva du lærer */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text">{t("home.learn.heading")}</h2>
            <p className="max-w-md text-sm text-text-light">{t("home.learn.intro")}</p>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-text/10 bg-text/10 sm:grid-cols-2 lg:grid-cols-4">
            {learnItems.map((item, i) => (
              <div key={item.title} className="bg-paper p-7">
                <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 / To spor */}
      <section className="border-y border-text/10 bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text">{t("home.tracks.heading")}</h2>
            <p className="max-w-md text-sm text-text-light">{t("home.tracks.intro")}</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Argon Kurs */}
            <div className="flex flex-col rounded-xl border border-text/10 bg-white p-8 shadow-sm md:p-10">
              <span className="mb-6 block h-1 w-10 rounded-full bg-primary" aria-hidden />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{t("home.tracks.kursTag")}</span>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-text">{t("home.tracks.kursName")}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-text-light">{t("home.tracks.kursDesc")}</p>
              <p className="mt-6 font-mono text-sm text-text">{t("home.tracks.kursPrice")}</p>
              <Link
                href="/kurs"
                className="mt-6 inline-block self-start rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                {t("home.tracks.kursCta")}
              </Link>
            </div>
            {/* Argon Industri */}
            <div className="flex flex-col rounded-xl bg-steel p-8 shadow-sm md:p-10">
              <span className="mb-6 block h-1 w-10 rounded-full bg-steel-light" aria-hidden />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">{t("home.tracks.industriTag")}</span>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white">{t("home.tracks.industriName")}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-white/75">{t("home.tracks.industriDesc")}</p>
              <p className="mt-6 font-mono text-sm text-white">{t("home.tracks.industriPrice")}</p>
              <Link
                href="/kurs/bedrift"
                className="mt-6 inline-block self-start rounded-lg bg-white px-6 py-3 text-sm font-semibold text-steel transition hover:bg-white/90"
              >
                {t("home.tracks.industriCta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 03 / Bevis */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-sm font-semibold text-primary">{t("home.proof.label")}</h2>
          <p className="mt-6 max-w-3xl font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
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

      {/* 04 / Pris */}
      <section className="border-y border-text/10 bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text">{t("home.price.heading")}</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-text/10 bg-text/10 md:grid-cols-2">
            <div className="bg-white p-8 md:p-10">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{t("home.price.kursLabel")}</span>
              <p className="mt-4 font-mono text-4xl font-semibold text-text">{t("home.price.kursValue")}</p>
              <p className="mt-1 text-sm text-text-light">{t("home.price.kursUnit")}</p>
            </div>
            <div className="bg-white p-8 md:p-10">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-steel">{t("home.price.industriLabel")}</span>
              <p className="mt-4 font-mono text-4xl font-semibold text-text">{t("home.price.industriValue")}</p>
              <p className="mt-1 text-sm text-text-light">{t("home.price.industriUnit")}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-text-light">{t("home.price.mva")}</p>
        </div>
      </section>

      {/* 05 / Hvem holder kurset */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-text">{t("home.founder.heading")}</h2>
            <div className="space-y-4 leading-relaxed text-text-light">
              <p>{t("home.founder.p1")}</p>
              <p>{t("home.founder.p2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 / FAQ */}
      <section className="border-y border-text/10 bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text">{t("home.faq.heading")}</h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-3">
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
            className="rounded-lg border border-text/15 px-5 py-2.5 text-sm font-semibold text-text transition hover:border-primary hover:text-primary"
          >
            {t("home.services.cta")}
          </Link>
        </div>
      </section>

      {/* Booking-CTA */}
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t("home.cta.heading")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">{t("home.cta.body")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/kurs#pamelding"
              className="rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-light"
            >
              {t("home.cta.kurs")}
            </Link>
            <Link
              href="/kontakt"
              className="rounded-lg border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/60"
            >
              {t("home.cta.bedrift")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
