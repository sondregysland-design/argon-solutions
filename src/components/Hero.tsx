"use client";

import Link from "next/link";
import { useT } from "@/i18n/LanguageProvider";

export function Hero() {
  const t = useT();

  return (
    <section className="relative overflow-hidden border-b border-text/10 bg-paper py-24 sm:py-32">
      {/* Technical grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(27,36,46,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,36,46,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 90% 80% at 30% 20%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 30% 20%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="hero-rise font-mono text-xs uppercase tracking-[0.25em] text-primary">{t("hero.eyebrow")}</p>
        <h1 className="hero-rise mt-6 max-w-4xl font-display text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl" style={{ lineHeight: 1.08 }}>
          {t("hero.titleLine1")}
          <span className="block text-primary">{t("hero.titleLine2")}</span>
        </h1>
        <p className="hero-rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-text-light">
          {t("hero.subtitle")}
        </p>
        <div className="hero-rise-3 mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/kurs"
            className="rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            {t("hero.ctaKurs")}
          </Link>
          <Link
            href="/kurs/bedrift"
            className="rounded-lg border border-text/20 px-7 py-3.5 text-sm font-semibold text-text transition hover:border-steel hover:text-steel"
          >
            {t("hero.ctaBedrift")}
          </Link>
        </div>
        <p className="mt-10 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-light">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-light" aria-hidden />
          {t("hero.proof")}
        </p>
      </div>
    </section>
  );
}
