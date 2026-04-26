"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoFull } from "./Logo";

const tjenesterSubLinks = [
  { href: "/tjenester/claude-code", label: "Claude Code oppsett" },
  { href: "/tjenester/skreddersydd-software", label: "Skreddersydd Software" },
  { href: "/tjenester/systemintegrasjon", label: "Systemintegrasjon" },
  { href: "/tjenester/ai-agenter", label: "AI-agenter" },
  { href: "/tjenester/ai-strategi", label: "AI-strategi" },
];

const links = [
  { href: "/", label: "Hjem" },
  { href: "/tjenester", label: "Tjenester" },
  { href: "/produkter", label: "Produkter" },
  { href: "/referanser", label: "Referanser" },
  { href: "/blogg", label: "Blogg" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [tjenesterOpen, setTjenesterOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <LogoFull />
        </Link>

        {/* Desktop */}
        <div className="hidden gap-8 md:flex">
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
                  {l.label}
                </Link>
                {tjenesterOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl border border-gray-100 bg-white py-2 shadow-lg">
                    {tjenesterSubLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-text-light hover:bg-surface hover:text-primary transition-colors"
                      >
                        {sub.label}
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
                {l.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Meny"
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
        <div className="border-t border-gray-100 px-6 py-4 md:hidden">
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
                {l.label}
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
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
