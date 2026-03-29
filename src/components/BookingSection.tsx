"use client";

import { useState, useEffect, useCallback } from "react";
import { format, addMonths, addDays, parseISO } from "date-fns";
import { nb } from "date-fns/locale";
import { BookingCalendar } from "./BookingCalendar";

export function BookingSection() {
  const [availability, setAvailability] = useState<Record<string, string[]>>({});
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetchingSlots, setFetchingSlots] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [topic, setTopic] = useState("");

  const fetchAvailability = useCallback(async () => {
    setFetchingSlots(true);
    try {
      const from = format(addDays(new Date(), 2), "yyyy-MM-dd");
      const to = format(addMonths(new Date(), 2), "yyyy-MM-dd");
      const res = await fetch(`/api/availability?from=${from}&to=${to}`);
      const data = await res.json();
      if (data.dates) setAvailability(data.dates);
    } catch {
      setError("Kunne ikke laste tilgjengelige tider");
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
        body: JSON.stringify({ date: selectedDate, time: selectedTime, name, email, company, topic }),
      });
      const result = await res.json();
      if (!res.ok) {
        setError(result.error || "Noe gikk galt");
        return;
      }
      setSuccess(true);
    } catch {
      setError("Noe gikk galt. Vennligst prøv igjen.");
    } finally {
      setLoading(false);
    }
  };

  const slotsForDate = selectedDate ? availability[selectedDate] || [] : [];
  const formattedSelectedDate = selectedDate
    ? format(parseISO(selectedDate), "EEEE d. MMMM", { locale: nb })
    : "";

  if (success) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-800">Booking bekreftet!</h3>
        <p className="mt-2 text-sm text-green-700">
          Du mottar en bekreftelse på e-post med kalenderinvitasjon.
        </p>
        <button
          onClick={() => { setSuccess(false); setSelectedDate(null); setSelectedTime(null); setName(""); setEmail(""); setCompany(""); setTopic(""); fetchAvailability(); }}
          className="mt-4 text-sm text-primary hover:underline"
        >
          Book et nytt møte
        </button>
      </div>
    );
  }

  const inputClass =
    "mt-1 block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

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
                <p className="text-sm text-text-light">Laster kalender...</p>
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
                        : "bg-white border border-gray-200 text-text hover:border-primary-light hover:text-primary"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedDate && slotsForDate.length === 0 && (
            <p className="text-sm text-text-light">Ingen ledige tider denne dagen</p>
          )}

          {selectedTime && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="book-name" className="block text-sm font-medium text-text">Navn *</label>
                <input id="book-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Ditt fulle navn" className={inputClass} />
              </div>
              <div>
                <label htmlFor="book-email" className="block text-sm font-medium text-text">E-post *</label>
                <input id="book-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="din@epost.no" className={inputClass} />
              </div>
              <div>
                <label htmlFor="book-company" className="block text-sm font-medium text-text">Selskap</label>
                <input id="book-company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Valgfritt" className={inputClass} />
              </div>
              <div>
                <label htmlFor="book-topic" className="block text-sm font-medium text-text">Tema</label>
                <textarea id="book-topic" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Kort beskrivelse (valgfritt)" maxLength={200} rows={2} className={`${inputClass} resize-none`} />
              </div>
              <button
                type="submit"
                disabled={loading || !name || !email}
                className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-50"
              >
                {loading ? "Booker..." : "Bekreft booking"}
              </button>
            </form>
          )}

          {!selectedDate && !fetchingSlots && (
            <div className="text-center text-sm text-text-light py-8">
              <svg className="w-10 h-10 mx-auto mb-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Velg en dato for å se ledige tider
            </div>
          )}
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-6">
        Tidene oppdateres fortløpende. Booking må gjøres minst 2 dager i forveien.
      </p>
    </div>
  );
}
