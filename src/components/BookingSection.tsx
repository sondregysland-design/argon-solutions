"use client";

import { useState, useEffect, useCallback } from "react";
import { format, addMonths, addDays, parseISO } from "date-fns";
import { nb, enUS } from "date-fns/locale";
import { useLanguage } from "@/i18n/LanguageProvider";
import { track } from "@vercel/analytics";
import { BookingCalendar } from "./BookingCalendar";

export function BookingSection() {
  const { locale } = useLanguage();
  const dfnsLocale = locale === "en" ? enUS : nb;
  const m =
    locale === "en"
      ? {
          genericError: "Something went wrong",
          retryError: "Something went wrong. Please try again.",
          successTitle: "Booking confirmed",
          successBody:
            "You will receive a confirmation by email with a calendar invitation.",
          bookAnother: "Book a new meeting",
          loadingCalendar: "Loading calendar...",
          noSlots: "No available times on this day",
          selectDate: "Select a date to see available times",
          nameLabel: "Name *",
          namePlaceholder: "Your full name",
          emailLabel: "Email *",
          emailPlaceholder: "you@email.com",
          companyLabel: "Company name",
          companyPlaceholder: "Optional",
          topicLabel: "Topic",
          topicPlaceholder: "Short description (optional)",
          submit: "Confirm booking",
          submitting: "Booking...",
          footer:
            "Times are updated continuously. Bookings must be made at least 2 days in advance.",
          unavailableTitle: "The calendar is temporarily unavailable",
          unavailableBody:
            "Send us a short message instead, and we will suggest a time that suits you.",
          unavailableForm: "Write to us",
          unavailableRetry: "Try again",
        }
      : {
          genericError: "Noe gikk galt",
          retryError: "Noe gikk galt. Vennligst prøv igjen.",
          successTitle: "Booking bekreftet!",
          successBody:
            "Du mottar en bekreftelse på e-post med kalenderinvitasjon.",
          bookAnother: "Book et nytt møte",
          loadingCalendar: "Laster kalender...",
          noSlots: "Ingen ledige tider denne dagen",
          selectDate: "Velg en dato for å se ledige tider",
          nameLabel: "Navn *",
          namePlaceholder: "Ditt fulle navn",
          emailLabel: "E-post *",
          emailPlaceholder: "din@epost.no",
          companyLabel: "Firmanavn",
          companyPlaceholder: "Valgfritt",
          topicLabel: "Tema",
          topicPlaceholder: "Kort beskrivelse (valgfritt)",
          submit: "Bekreft booking",
          submitting: "Booker...",
          footer:
            "Tidene oppdateres fortløpende. Booking må gjøres minst 2 dager i forveien.",
          unavailableTitle: "Kalenderen er midlertidig utilgjengelig",
          unavailableBody:
            "Send oss en kort melding i stedet, så foreslår vi et tidspunkt som passer deg.",
          unavailableForm: "Skriv til oss",
          unavailableRetry: "Prøv igjen",
        };

  const [availability, setAvailability] = useState<Record<string, string[]>>({});
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetchingSlots, setFetchingSlots] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [topic, setTopic] = useState("");
  const [website, setWebsite] = useState(""); // honeypot

  const fetchAvailability = useCallback(async () => {
    setFetchingSlots(true);
    setLoadFailed(false);
    try {
      const from = format(addDays(new Date(), 2), "yyyy-MM-dd");
      const to = format(addMonths(new Date(), 2), "yyyy-MM-dd");
      const res = await fetch(`/api/availability?from=${from}&to=${to}`);
      if (!res.ok) {
        setLoadFailed(true);
        return;
      }
      const data = await res.json();
      if (data.dates) setAvailability(data.dates);
    } catch {
      setLoadFailed(true);
    } finally {
      setFetchingSlots(false);
    }
  }, []);

  useEffect(() => {
    fetchAvailability();
  }, [fetchAvailability]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date: selectedDate, time: selectedTime, name, email, company, topic, website }),
      });
      const result = await res.json();
      if (!res.ok) {
        setError(result.error || m.genericError);
        return;
      }
      setSuccess(true);
      track("booking_confirmed");
    } catch {
      setError(m.retryError);
    } finally {
      setLoading(false);
    }
  };

  const slotsForDate = selectedDate ? availability[selectedDate] || [] : [];
  const formattedSelectedDate = selectedDate
    ? format(parseISO(selectedDate), "EEEE d. MMMM", { locale: dfnsLocale })
    : "";

  if (success) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-800">{m.successTitle}</h3>
        <p className="mt-2 text-sm text-green-700">
          {m.successBody}
        </p>
        <button
          onClick={() => { setSuccess(false); setSelectedDate(null); setSelectedTime(null); setName(""); setEmail(""); setCompany(""); setTopic(""); fetchAvailability(); }}
          className="tap-target-inline mt-4 px-2 text-sm text-primary hover:underline"
        >
          {m.bookAnother}
        </button>
      </div>
    );
  }

  // Når kalender-API-et feiler (f.eks. utløpt Google-token) skal besøkende
  // ikke stå fast: send dem til kontaktskjemaet på samme side.
  if (loadFailed) {
    return (
      <div className="rounded-xl border border-text/10 bg-white p-8 text-center">
        <h3 className="text-lg font-semibold text-text">{m.unavailableTitle}</h3>
        <p className="mt-2 text-sm text-text-light">{m.unavailableBody}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#melding"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/85"
          >
            {m.unavailableForm}
          </a>
          <a
            href="mailto:post@argonsolutions.no"
            className="tap-target-inline px-2 text-sm text-primary hover:underline"
          >
            post@argonsolutions.no
          </a>
          <button
            onClick={() => fetchAvailability()}
            className="tap-target-inline px-2 text-sm text-text-light hover:underline"
          >
            {m.unavailableRetry}
          </button>
        </div>
      </div>
    );
  }

  const inputClass =
    "mt-1 block w-full rounded-lg border border-text/15 px-4 py-3 text-sm transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

  return (
    <div>
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-2">
        {/* Calendar */}
        <div>
          {fetchingSlots ? (
            <div className="flex items-center justify-center h-64">
              <div className="flex flex-col items-center gap-3">
                <svg className="animate-spin h-6 w-6 text-primary-light" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <p className="text-sm text-text-light">{m.loadingCalendar}</p>
              </div>
            </div>
          ) : (
            <BookingCalendar
              availability={availability}
              selectedDate={selectedDate}
              onSelectDate={(date) => { setSelectedDate(date); setSelectedTime(null); setError(null); }}
            />
          )}
        </div>

        {/* Time slots + Form */}
        <div className="space-y-6">
          {selectedDate && slotsForDate.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-text-light mb-3 capitalize">
                {formattedSelectedDate}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {slotsForDate.map((time) => (
                  <button
                    key={time}
                    onClick={() => { setSelectedTime(time); setError(null); }}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150 ${
                      selectedTime === time
                        ? "bg-primary text-white shadow-sm"
                        : "bg-white border border-text/15 text-text hover:border-primary-light hover:text-primary"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedDate && slotsForDate.length === 0 && (
            <p className="text-sm text-text-light">{m.noSlots}</p>
          )}

          {selectedTime && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="book-website">Website</label>
                <input id="book-website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </div>
              <div>
                <label htmlFor="book-name" className="block text-sm font-medium text-text">{m.nameLabel}</label>
                <input id="book-name" type="text" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder={m.namePlaceholder} className={inputClass} />
              </div>
              <div>
                <label htmlFor="book-email" className="block text-sm font-medium text-text">{m.emailLabel}</label>
                <input id="book-email" type="email" autoComplete="email" inputMode="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={m.emailPlaceholder} className={inputClass} />
              </div>
              <div>
                <label htmlFor="book-company" className="block text-sm font-medium text-text">{m.companyLabel}</label>
                <input id="book-company" type="text" autoComplete="organization" value={company} onChange={(e) => setCompany(e.target.value)} placeholder={m.companyPlaceholder} className={inputClass} />
              </div>
              <div>
                <label htmlFor="book-topic" className="block text-sm font-medium text-text">{m.topicLabel}</label>
                <textarea id="book-topic" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder={m.topicPlaceholder} maxLength={200} rows={2} className={`${inputClass} resize-none`} />
              </div>
              <button
                type="submit"
                disabled={loading || !name || !email}
                className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/85 disabled:opacity-50"
              >
                {loading ? m.submitting : m.submit}
              </button>
            </form>
          )}

          {!selectedDate && !fetchingSlots && (
            <div className="text-center text-sm text-text-light py-8">
              <svg className="w-10 h-10 mx-auto mb-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {m.selectDate}
            </div>
          )}
        </div>
      </div>

      <p className="mt-6 text-[13px] leading-relaxed sm:text-xs text-gray-400">
        {m.footer}
      </p>
    </div>
  );
}
