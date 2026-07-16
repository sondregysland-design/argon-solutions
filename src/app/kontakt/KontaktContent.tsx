"use client";

import { ContactForm } from "@/components/ContactForm";
import { BookingSection } from "@/components/BookingSection";
import { useT } from "@/i18n/LanguageProvider";

export function KontaktContent() {
  const t = useT();

  return (
    <div className="mx-auto max-w-6xl px-6">
      <h1 className="text-4xl font-display font-medium text-text">{t("kontakt.h1")}</h1>
      <p className="mt-4 max-w-2xl text-lg text-text-light">{t("kontakt.intro")}</p>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <ContactForm />

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-text">{t("kontakt.emailLabel")}</h3>
            <p className="mt-1 text-text-light">post@argonsolutions.no</p>
          </div>
          <div>
            <h3 className="font-semibold text-text">{t("kontakt.phoneLabel")}</h3>
            <p className="mt-1 text-text-light">+47 452 09 979</p>
          </div>
          <div>
            <h3 className="font-semibold text-text">{t("kontakt.locationLabel")}</h3>
            <p className="mt-1 text-text-light">{t("kontakt.locationValue")}</p>
          </div>
          <div>
            <h3 className="font-semibold text-text">{t("kontakt.socialLabel")}</h3>
            <div className="mt-1 space-y-1">
              <a href="https://www.linkedin.com/company/argonsolutions/" target="_blank" rel="noopener noreferrer" className="block text-text-light hover:text-primary transition-colors">{t("kontakt.linkedin")}</a>
            </div>
          </div>
          <div className="rounded-2xl bg-surface p-6">
            <h3 className="font-semibold text-text">{t("kontakt.responseLabel")}</h3>
            <p className="mt-1 text-sm text-text-light">{t("kontakt.responseBody")}</p>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <p className="text-sm font-semibold text-primary">{t("kontakt.bookingTag")}</p>
        <h2 className="text-3xl font-display font-medium text-text mt-2">{t("kontakt.bookingTitle")}</h2>
        <p className="mt-4 max-w-2xl text-text-light">{t("kontakt.bookingIntro")}</p>
        <div className="mt-8 rounded-3xl bg-surface p-6 md:p-8">
          <BookingSection />
        </div>
      </div>
    </div>
  );
}
