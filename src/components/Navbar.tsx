"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoFull } from "./Logo";
import { useT } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

const tjenesterSubLinks = [
  { href: "/tjenester/claude-code", key: "claudeCode" },
  { href: "/tjenester/ai-chatbot", key: "aiChatbot" },
  { href: "/tjenester/ai-agenter", key: "aiAgents" },
  { href: "/tjenester/ai-strategi", key: "aiStrategy" },
  { href: "/tjenester/skreddersydd-software", key: "customSoftware" },
  { href: "/tjenester/systemintegrasjon", key: "systemIntegration" },
  { href: "/produkter", key: "products" },
  { href: "/kunstig-intelligens", key: "whatIsAi" },
];

const links = [
  { href: "/", key: "home" },
  { href: "/oppsett", key: "oppsett" },
  { href: "/kurs", key: "kurs" },
  { href: "/kurs/bedrift", key: "bedrift" },
  { href: "/tjenester", key: "services" },
  { href: "/om-oss", key: "about" },
  { href: "/kontakt", key: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [tjenesterOpen, setTjenesterOpen] = useState(false);
  const pathname = usePathname();
  const t = useT();

  return (
    <nav className="sticky top-0 z-50 border-b border-text/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <LogoFull />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) =>
            l.href === "/tjenester" ? (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={() => setTjenesterOpen(true)}
                onMouseLeave={() => setTjenesterOpen(false)}
              >
                <Link
                  href={l.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === l.href || pathname.startsWith("/tjenester/")
                      ? "text-primary"
                      : "text-text-light"
                  }`}
                >
                  {t(`nav.${l.key}`)}
                </Link>
                {tjenesterOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl border border-text/10 bg-white py-2 shadow-lg">
                    {tjenesterSubLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-text-light hover:bg-surface hover:text-primary transition-colors"
                      >
                        {t(`sub.${sub.key}`)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === l.href ? "text-primary" : "text-text-light"
                }`}
              >
                {t(`nav.${l.key}`)}
              </Link>
            )
          )}
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="-m-2.5 p-2.5 md:hidden"
          aria-label="Meny"
          aria-expanded={open}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-text/10 px-6 py-4 md:hidden">
          {links.map((l) => (
            <div key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  pathname === l.href || (l.href === "/tjenester" && pathname.startsWith("/tjenester/"))
                    ? "text-primary"
                    : "text-text-light"
                }`}
              >
                {t(`nav.${l.key}`)}
              </Link>
              {l.href === "/tjenester" && (
                <div className="pl-4">
                  {tjenesterSubLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setOpen(false)}
                      className={`block py-1.5 text-sm ${
                        pathname === sub.href ? "text-primary" : "text-text-light"
                      }`}
                    >
                      {t(`sub.${sub.key}`)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4 border-t border-text/10 pt-4">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
