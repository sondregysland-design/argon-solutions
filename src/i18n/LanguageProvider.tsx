"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { no } from "./messages/no";
import { en } from "./messages/en";

export type Locale = "no" | "en";

const dictionaries: Record<Locale, unknown> = { no, en };

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readCookie(): Locale | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)argon_locale=(no|en)/);
  return (match?.[1] as Locale) ?? null;
}

function lookup(dict: unknown, key: string): string {
  const value = key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, dict);
  return typeof value === "string" ? value : key;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("no");

  useEffect(() => {
    const saved = readCookie();
    if (saved && saved !== locale) setLocaleState(saved);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    document.cookie = `argon_locale=${next}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = next;
  }, []);

  const t = useCallback(
    (key: string) => lookup(dictionaries[locale], key),
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

export function useT(): (key: string) => string {
  return useLanguage().t;
}
