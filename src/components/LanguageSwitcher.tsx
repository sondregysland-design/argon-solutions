"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useLanguage, type Locale } from "@/i18n/LanguageProvider";

function FlagNO() {
  return (
    <svg viewBox="0 0 22 16" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="22" height="16" fill="#ba0c2f" />
      <rect x="6" width="4" height="16" fill="#fff" />
      <rect y="6" width="22" height="4" fill="#fff" />
      <rect x="7" width="2" height="16" fill="#00205b" />
      <rect y="7" width="22" height="2" fill="#00205b" />
    </svg>
  );
}

function FlagGB() {
  const uid = useId().replace(/:/g, "");
  const square = `sq-${uid}`;
  const diag = `dg-${uid}`;
  return (
    <svg viewBox="0 0 60 30" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <clipPath id={square}>
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id={diag}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath={`url(#${square})`}>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${diag})`} stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

const languages: { code: Locale; label: string; Flag: () => React.ReactElement }[] = [
  { code: "no", label: "Norsk", Flag: FlagNO },
  { code: "en", label: "English", Flag: FlagGB },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = languages.find((l) => l.code === locale) ?? languages[0];

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Velg språk"
        aria-expanded={open}
        className="tap-target-inline flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm font-medium text-text-light transition-colors hover:text-primary"
      >
        <span className="inline-block h-5 w-5 overflow-hidden rounded-full ring-1 ring-black/10">
          <current.Flag />
        </span>
        <span>{current.label}</span>
        <svg className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-text/10 bg-white py-1 shadow-lg">
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setLocale(l.code);
                setOpen(false);
              }}
              className={`tap-target flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                l.code === locale ? "bg-primary/5 font-semibold text-text" : "text-text-light hover:bg-surface"
              }`}
            >
              <span className="inline-block h-5 w-5 shrink-0 overflow-hidden rounded-full ring-1 ring-black/10">
                <l.Flag />
              </span>
              <span className="flex-1 text-left">{l.label}</span>
              {l.code === locale && (
                <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
