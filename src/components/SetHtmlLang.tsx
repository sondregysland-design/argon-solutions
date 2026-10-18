"use client";

import { useEffect } from "react";

// Root layout hardcoder <html lang="no">; denne overstyrer på engelske ruter.
export function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const prev = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = prev;
    };
  }, [lang]);
  return null;
}
