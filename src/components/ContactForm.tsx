"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="text-lg font-semibold text-green-800">Takk for meldingen!</h3>
        <p className="mt-2 text-sm text-green-700">Vi tar kontakt så snart vi kan.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text">
          Navn
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Ditt navn"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text">
          E-post
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="din@epost.no"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text">
          Melding
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Fortell oss om prosjektet ditt..."
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
      >
        Send melding
      </button>
    </form>
  );
}
