import { LogoFull } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <LogoFull />
            <p className="mt-4 text-sm text-text-light">
              Argon Solutions er et AI-byrå i Stavanger som leverer AI-tjenester,
              Claude Code-oppsett, skreddersydd software og AI-agenter for
              energisektoren i Norge.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-text">Sider</h3>
            <ul className="mt-3 space-y-2 text-sm text-text-light">
              <li><a href="/" className="hover:text-primary">Hjem</a></li>
              <li><a href="/tjenester" className="hover:text-primary">Tjenester</a></li>
              <li><a href="/produkter" className="hover:text-primary">Produkter</a></li>
              <li><a href="/referanser" className="hover:text-primary">Referanser</a></li>
              <li><a href="/blogg" className="hover:text-primary">Blogg</a></li>
              <li><a href="/om-oss" className="hover:text-primary">Om oss</a></li>
              <li><a href="/faq" className="hover:text-primary">FAQ</a></li>
              <li><a href="/kontakt" className="hover:text-primary">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text">Kontakt</h3>
            <ul className="mt-3 space-y-2 text-sm text-text-light">
              <li>
                <a href="mailto:post@argonsolutions.no" className="hover:text-primary transition-colors">
                  post@argonsolutions.no
                </a>
              </li>
              <li>
                <a href="tel:+4745209979" className="hover:text-primary transition-colors">
                  +47 452 09 979
                </a>
              </li>
              <li>Stavanger, Rogaland, Norge</li>
            </ul>
            <div className="mt-4">
              <a href="https://www.linkedin.com/company/112877302/post" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-xs text-text-light">
          &copy; {new Date().getFullYear()} Argon Solutions. Alle rettigheter reservert.
        </div>
      </div>
    </footer>
  );
}
