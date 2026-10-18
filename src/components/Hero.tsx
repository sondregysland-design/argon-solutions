"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useT } from "@/i18n/LanguageProvider";

// Monitoren er dekorasjon som bare vises fra lg. Uten dette lastes og
// monteres hele SVG-treet på mobil også, og rAF-loopen starter mot et
// display:none-element før IntersectionObserver rekker å stoppe den.
const ClaudeMonitor = dynamic(() => import("./ClaudeMonitor").then((m) => m.ClaudeMonitor), {
  ssr: false,
});

const DESKTOP = "(min-width: 1024px)";

function useIsDesktop() {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(DESKTOP);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(DESKTOP).matches,
    () => false // server: anta mobil, monitoren er uansett ikke i SSR-HTML
  );
}

export function Hero() {
  const t = useT();
  const isDesktop = useIsDesktop();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EDF1F6] via-[#F5F7FA] to-white py-16 sm:py-28 lg:py-36">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_minmax(0,420px)]">
        <div className="text-left">
          <p className="hero-rise inline-flex items-center gap-2 text-sm font-medium text-text-light">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
            {t("hero.eyebrow")}
          </p>
          <h1 className="hero-rise mt-6 max-w-4xl font-display text-4xl font-medium tracking-tight text-text sm:text-5xl lg:text-6xl" style={{ lineHeight: 1.08 }}>
            {t("hero.titleLine1")}{" "}
            <span className="block text-primary">{t("hero.titleLine2")}</span>
          </h1>
          <p className="hero-rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-text-light">
            {t("hero.subtitle")}
          </p>
          <div className="hero-rise-3 mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/kurs"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-ink/85"
            >
              {t("hero.ctaKurs")}
            </Link>
            <Link
              href="/kontakt"
              className="rounded-full bg-surface px-7 py-3.5 text-sm font-semibold text-text transition hover:bg-text/10"
            >
              {t("hero.ctaBedrift")}
            </Link>
          </div>
        </div>
        <div className="hero-rise-3 hidden justify-center lg:flex">
          {isDesktop && <ClaudeMonitor />}
        </div>
      </div>
    </section>
  );
}
