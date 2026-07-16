"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoFull } from "./Logo";
import { useT } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";

const kursSubLinks = [
  { href: "/kurs", key: "kursPrivate" },
  { href: "/kurs/bedrift", key: "kursBedrift" },
];

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

type NavLink = {
  href: string;
  key: string;
  subs?: { href: string; key: string }[];
  activePrefix?: string;
};

const links: NavLink[] = [
  { href: "/", key: "home" },
  { href: "/oppsett", key: "oppsett" },
  { href: "/kurs", key: "kurs", subs: kursSubLinks, activePrefix: "/kurs" },
  { href: "/tjenester", key: "services", subs: tjenesterSubLinks, activePrefix: "/tjenester" },
  { href: "/om-oss", key: "about" },
  { href: "/kontakt", key: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const t = useT();

  const isActive = (l: NavLink) =>
    pathname === l.href || (l.activePrefix ? pathname.startsWith(`${l.activePrefix}/`) : false);

  return (
    <nav className="sticky top-0 z-50 border-b border-text/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <LogoFull />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) =>
            l.subs ? (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(l.href)}
                onMouseLeave={() => setOpenMenu(null)}
                onFocus={() => setOpenMenu(l.href)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenMenu(null);
                }}
              >
                <Link
                  href={l.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(l) ? "text-primary" : "text-text-light"
                  }`}
                >
                  {t(`nav.${l.key}`)}
                </Link>
                {openMenu === l.href && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl border border-text/10 bg-white py-2 shadow-lg">
                    {l.subs.map((sub) => (
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
            ) : l.href === "/kontakt" ? null : (
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
          <Link
            href="/kontakt"
            className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white transition hover:bg-ink/85"
          >
            {t("nav.contact")}
          </Link>
        </div>

        {/* Mobile: contact pill + toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/kontakt"
            className="rounded-full bg-ink px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-ink/85"
          >
            {t("nav.contact")}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="-m-2.5 p-2.5"
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
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-text/10 px-6 py-4 md:hidden">
          {links.map((l) => (
            <div key={l.href}>
              <div className="flex items-center justify-between">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-sm font-medium ${
                    isActive(l) ? "text-primary" : "text-text-light"
                  }`}
                >
                  {t(`nav.${l.key}`)}
                </Link>
                {l.subs && (
                  <button
                    onClick={() => setMobileOpenMenu(mobileOpenMenu === l.href ? null : l.href)}
                    className="-m-2 p-2 text-text-light"
                    aria-label={t(`nav.${l.key}`)}
                    aria-expanded={mobileOpenMenu === l.href}
                  >
                    <svg
                      className={`h-4 w-4 transition-transform ${mobileOpenMenu === l.href ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
              {l.subs && mobileOpenMenu === l.href && (
                <div className="pl-4">
                  {l.subs.map((sub) => (
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
