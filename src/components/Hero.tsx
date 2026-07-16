"use client";

import Link from "next/link";
import { useT } from "@/i18n/LanguageProvider";
import { ClaudeMonitor } from "./ClaudeMonitor";

export function Hero() {
  const t = useT();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EDF1F6] via-[#F5F7FA] to-white py-28 sm:py-36">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_minmax(0,420px)]">
        <div className="text-center lg:text-left">
          <p className="hero-rise inline-flex items-center gap-2 text-sm font-medium text-text-light">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            {t("hero.eyebrow")}
          </p>
          <h1 className="hero-rise mx-auto mt-6 max-w-4xl font-display text-5xl font-medium tracking-tight text-text sm:text-6xl lg:mx-0" style={{ lineHeight: 1.08 }}>
            {t("hero.titleLine1")}
            <span className="block text-primary">{t("hero.titleLine2")}</span>
          </h1>
          <p className="hero-rise-2 mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-text-light lg:mx-0">
            {t("hero.subtitle")}
          </p>
          <div className="hero-rise-3 mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link
              href="/kurs"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-ink/85"
            >
              {t("hero.ctaKurs")}
            </Link>
            <Link
              href="/kurs/bedrift"
              className="rounded-full bg-surface px-7 py-3.5 text-sm font-semibold text-text transition hover:bg-text/10"
            >
              {t("hero.ctaBedrift")}
            </Link>
          </div>
        </div>
        <div className="hero-rise-3 hidden justify-center lg:flex">
          <ClaudeMonitor />
        </div>
      </div>
    </section>
  );
}
