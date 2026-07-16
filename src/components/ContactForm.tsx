"use client";

import { useState } from "react";
import { useT } from "@/i18n/LanguageProvider";

export function ContactForm() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="text-lg font-semibold text-green-800">{t("contactForm.successTitle")}</h3>
        <p className="mt-2 text-sm text-green-700">{t("contactForm.successBody")}</p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSending(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Sending feilet");
      setSubmitted(true);
    } catch {
      setError(t("contactForm.error"));
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text">
          {t("contactForm.name")}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-lg border border-text/15 px-4 py-3 text-sm placeholder:text-text-light transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder={t("contactForm.namePh")}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text">
          {t("contactForm.email")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-lg border border-text/15 px-4 py-3 text-sm placeholder:text-text-light transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder={t("contactForm.emailPh")}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text">
          {t("contactForm.message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 block w-full rounded-lg border border-text/15 px-4 py-3 text-sm placeholder:text-text-light transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder={t("contactForm.messagePh")}
        />
      </div>
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}
      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink/85 disabled:opacity-50"
      >
        {sending ? t("contactForm.sending") : t("contactForm.send")}
      </button>
    </form>
  );
}
