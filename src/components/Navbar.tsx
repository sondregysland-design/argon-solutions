"use client";

import { useEffect, useState } from "react";
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

type NavLink = {
  href: string;
  key: string;
  // Full i18n-nokkel der etiketten ikke ligger under nav.*, slik at
  // kurslenken deler streng med footeren i stedet for a duplisere den.
  labelKey?: string;
  subs?: { href: string; key: string }[];
  activePrefix?: string;
  excludePrefix?: string;
};

// Bloggen ligger bevisst ikke her. Den naas fra footeren og fra lenkene nederst
// paa forsiden, saa hovedmenyen kan holdes paa salgsveiene.
const links: NavLink[] = [
  { href: "/", key: "home" },
  { href: "/kurs", key: "kursBedrift", labelKey: "sub.kursBedrift", activePrefix: "/kurs" },
  { href: "/oppsett", key: "oppsett" },
  { href: "/tjenester", key: "services", subs: tjenesterSubLinks, activePrefix: "/tjenester" },
  { href: "/om-oss", key: "about" },
  { href: "/kontakt", key: "contact" },
];

export function Navbar() {
  // Menyen husker hvilken rute den ble aapnet paa. Da lukker den seg av seg
  // selv ved navigasjon, ogsaa via tilbakeknappen og lenker uten egen onClick,
  // uten at vi trenger en effekt som setter state.
  const [menu, setMenu] = useState({ open: false, path: "" });
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const t = useT();

  const open = menu.open && menu.path === pathname;
  const setOpen = (next: boolean) => setMenu({ open: next, path: pathname });

  const label = (l: NavLink) => t(l.labelKey ?? `nav.${l.key}`);

  const isActive = (l: NavLink) => {
    if (l.excludePrefix && pathname.startsWith(l.excludePrefix)) return false;
    return pathname === l.href || (l.activePrefix ? pathname.startsWith(`${l.activePrefix}/`) : false);
  };

  // Laas siden bak den aapne menyen, og lukk paa Escape.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu((m) => ({ ...m, open: false }));
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 border-b border-text/10 bg-white/80 backdrop-blur-md">
      {/* Lavere vertikal padding på mobil, slik at 44px trykkflater ikke
          gjør navbaren høyere enn den var. */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5 xl:py-4">
        <Link href="/" className="tap-target" aria-label="Argon Solutions, til forsiden">
          <LogoFull />
        </Link>

        {/* Desktop. Foerst fra xl: dropdownene er hover-baserte og dermed
            ubrukelige paa nettbrett, og med seks lenker klemmer raden mot
            logoen under 1280px. Under xl gaar alt i hamburgeren. */}
        <div className="hidden items-center gap-6 xl:flex">
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
                  aria-haspopup="true"
                  aria-expanded={openMenu === l.href}
                  className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-primary ${
                    isActive(l) ? "text-primary" : "text-text-light"
                  }`}
                >
                  {label(l)}
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
                className={`text-sm font-medium whitespace-nowrap transition-colors hover:text-primary ${
                  isActive(l) ? "text-primary" : "text-text-light"
                }`}
              >
                {label(l)}
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
        <div className="flex items-center gap-3 xl:hidden">
          <Link
            href="/kontakt"
            className="tap-target rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ink/85"
          >
            {t("nav.contact")}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="-m-2.5 p-2.5"
            aria-label="Meny"
            aria-expanded={open}
            aria-controls="mobile-menu"
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

      {/* Mobile menu. Egen scrollflate, ellers vokser den sticky navbaren forbi
          skjermhoyden naar Tjenester (8 undersider) er utvidet, og de nederste
          punktene blir umulige aa naa. 65px = hoyden paa toppraden over. */}
      {open && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100svh-65px)] overflow-y-auto overscroll-contain border-t border-text/10 px-6 py-4 xl:hidden"
        >
          {links.map((l) => (
            <div key={l.href}>
              <div className="flex items-center justify-between">
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`tap-target block flex-1 py-2.5 text-sm font-medium ${
                    isActive(l) ? "text-primary" : "text-text-light"
                  }`}
                >
                  {label(l)}
                </Link>
                {l.subs && (
                  <button
                    onClick={() => setMobileOpenMenu(mobileOpenMenu === l.href ? null : l.href)}
                    className="-mr-2 flex h-11 w-11 items-center justify-center text-text-light"
                    aria-label={label(l)}
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
                      className={`tap-target block py-2.5 text-sm ${
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
