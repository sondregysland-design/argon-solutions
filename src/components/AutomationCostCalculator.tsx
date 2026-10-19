"use client";

import { useState } from "react";

// Arbeidsuker per år etter ferie og helligdager. Vises i forutsetningene under.
const WORK_WEEKS = 46;
// Laveste pris for en AI-agent, samme tall som på /produkter.
const AGENT_PER_MONTH = 3000;

const nok = new Intl.NumberFormat("nb-NO", { maximumFractionDigits: 0 });

/**
 * Regner ut hva repetitivt manuelt arbeid koster per år, ved siden av
 * startprisen for en AI-agent. Lover ingen besparelse: hvor mye av arbeidet en
 * agent kan ta, avhenger av oppgaven og avklares i første samtale.
 */
export function AutomationCostCalculator() {
  const [hours, setHours] = useState(5);
  const [people, setPeople] = useState(2);
  const [rate, setRate] = useState(800);

  const yearly = Math.max(0, hours) * Math.max(0, people) * Math.max(0, rate) * WORK_WEEKS;
  const agentYearly = AGENT_PER_MONTH * 12;

  const field = (
    id: string,
    label: string,
    value: number,
    set: (n: number) => void,
    suffix: string,
    max: number,
  ) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text">{label}</label>
      <div className="mt-1 flex items-center gap-2">
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={0}
          max={max}
          value={value}
          onChange={(e) => set(Math.min(max, Number(e.target.value) || 0))}
          className="block w-full rounded-lg border border-text/15 px-4 py-3 text-sm transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <span className="shrink-0 text-sm text-text-light">{suffix}</span>
      </div>
    </div>
  );

  return (
    <section aria-labelledby="kostnadskalkulator" className="mt-16 rounded-3xl bg-surface p-6 sm:p-8">
      <h2 id="kostnadskalkulator" className="font-display text-2xl font-medium tracking-tight text-text">
        Hva koster det manuelle arbeidet i dag?
      </h2>
      <p className="mt-2 text-sm text-text-light">
        Fyll inn tall for én repeterende oppgave, for eksempel portalarbeid eller en fast rapport.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {field("kalk-timer", "Timer per person per uke", hours, setHours, "timer", 40)}
        {field("kalk-personer", "Antall personer", people, setPeople, "pers.", 500)}
        {field("kalk-timepris", "Timekostnad", rate, setRate, "kr/t", 5000)}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2" aria-live="polite">
        <div className="rounded-2xl bg-white p-5">
          <p className="text-sm text-text-light">Oppgaven koster dere per år</p>
          <p className="mt-1 font-display text-3xl font-medium text-text">{nok.format(yearly)} kr</p>
        </div>
        <div className="rounded-2xl bg-white p-5">
          <p className="text-sm text-text-light">En AI-agent koster fra</p>
          <p className="mt-1 font-display text-3xl font-medium text-text">{nok.format(agentYearly)} kr per år</p>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-text-light">
        Forutsetninger: {WORK_WEEKS} arbeidsuker per år. Agentprisen er startprisen på {nok.format(AGENT_PER_MONTH)} kr
        per måned, med hosting, vedlikehold og support inkludert. Hvor mye av arbeidet en agent kan ta, avhenger av
        oppgaven, og det avklarer vi i første samtale.
      </p>
    </section>
  );
}
