import { LogoFull } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <LogoFull />
            <p className="mt-4 text-sm text-text-light">
              Skreddersydd software og integrasjonsløsninger for norsk olje og gass.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-text">Sider</h3>
            <ul className="mt-3 space-y-2 text-sm text-text-light">
              <li><a href="/" className="hover:text-primary">Hjem</a></li>
              <li><a href="/tjenester" className="hover:text-primary">Tjenester</a></li>
              <li><a href="/blogg" className="hover:text-primary">Blogg</a></li>
              <li><a href="/om-oss" className="hover:text-primary">Om oss</a></li>
              <li><a href="/kontakt" className="hover:text-primary">Kontakt</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text">Kontakt</h3>
            <ul className="mt-3 space-y-2 text-sm text-text-light">
              <li>post@argonsolutions.no</li>
              <li>+47 452 09 979</li>
              <li>Stavanger, Norge</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-xs text-text-light">
          &copy; {new Date().getFullYear()} Argon Solutions. Alle rettigheter reservert.
        </div>
      </div>
    </footer>
  );
}
