"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

/**
 * CRM full-flow diagram, drawn as inline SVG so the many small labels stay
 * crisp and switch between Norwegian and English with the language picker.
 * Replaces crm-full-flow.png, which image generation could not recreate cleanly.
 */
export function CrmFlowDiagram() {
  const { locale } = useLanguage();
  const en = locale === "en";

  const stroke = "#495057";
  const blue = "#a5d8ff";
  const yellow = "#ffec99";
  const green = "#b2f2bb";
  const coral = "#ffa8a8";
  const purple = "#d0bfff";
  const ink = "#343a40";

  const tier1 = [
    { x: 20, label: "Brreg", fill: coral },
    { x: 120, label: "Google", fill: blue },
    { x: 220, label: "Proff", fill: purple },
    { x: 320, label: "LinkedIn", fill: blue },
    { x: 420, label: en ? "Form" : "Skjema", fill: yellow },
    { x: 520, label: "Booking", fill: green },
  ];

  const pipeline = [
    { x: 20, w: 95, label: en ? "New" : "Ny", fill: coral },
    { x: 150, w: 120, label: en ? "Contacted" : "Kontaktet", fill: yellow },
    { x: 305, w: 130, label: en ? "Qualified" : "Kvalifisert", fill: purple },
    { x: 480, w: 110, label: en ? "Customer" : "Kunde", fill: green },
  ];

  const outputs = [
    { x: 150, w: 120, label: en ? "AI Email" : "AI E-post", fill: yellow },
    { x: 305, w: 110, label: en ? "Quote" : "Tilbud", fill: purple },
    { x: 480, w: 130, label: "Onboarding", fill: green },
  ];

  return (
    <svg viewBox="0 0 640 470" role="img" aria-label={en ? "CRM Complete Flow" : "CRM Komplett Flyt"} className="mx-auto w-full max-w-2xl">
      <defs>
        <marker id="crm-arrow" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto">
          <path d="M0,0 L6.5,3 L0,6 Z" fill={stroke} />
        </marker>
      </defs>

      <text x="320" y="38" textAnchor="middle" fontSize="26" fontWeight="700" fill={ink}>
        {en ? "CRM Complete Flow" : "CRM Komplett Flyt"}
      </text>

      {/* Tier labels */}
      <text x="20" y="86" fontSize="9" fontWeight="600" fill={stroke}>{en ? "Tier 1 · Lead sources" : "Nivå 1 · Lead-kilder"}</text>
      <text x="20" y="201" fontSize="9" fontWeight="600" fill={stroke}>{en ? "Tier 2 · Processing" : "Nivå 2 · Prosessering"}</text>
      <text x="20" y="326" fontSize="9" fontWeight="600" fill={stroke}>{en ? "Tier 3 · Pipeline and outputs" : "Nivå 3 · Pipeline og output"}</text>

      {/* Solid hierarchy arrows */}
      <g stroke={stroke} strokeWidth="2" fill="none" markerEnd="url(#crm-arrow)">
        <path d="M60,134 L112,216" />
        <path d="M160,134 L122,216" />
        <path d="M260,134 L150,216" />
        <path d="M360,134 L322,208" />
        <path d="M460,134 L345,208" />
        <path d="M560,134 L362,210" />
        <path d="M182,243 L256,245" />
        <path d="M377,232 L476,228" />
        <path d="M115,367 L148,367" />
        <path d="M270,367 L303,367" />
      </g>
      {/* Dashed data flow */}
      <g stroke={stroke} strokeWidth="1.6" fill="none" strokeDasharray="4 4" markerEnd="url(#crm-arrow)">
        <path d="M377,258 L476,272" />
        <path d="M476,278 Q420,290 380,272" />
        <path d="M318,272 L362,341" />
        <path d="M435,367 L477,367" />
      </g>
      {/* Down arrows pipeline -> outputs */}
      <g stroke={stroke} strokeWidth="2" fill="none" markerEnd="url(#crm-arrow)">
        <path d="M210,385 L210,408" />
        <path d="M360,385 L360,408" />
        <path d="M535,385 L540,408" />
      </g>

      {/* Tier 1 boxes */}
      {tier1.map((b) => (
        <g key={b.label}>
          <rect x={b.x} y="96" width="80" height="38" rx="9" fill={b.fill} stroke={stroke} strokeWidth="2" />
          <text x={b.x + 40} y="120" textAnchor="middle" fontSize="11" fontWeight="600" fill={ink}>{b.label}</text>
        </g>
      ))}

      {/* Tier 2 */}
      <rect x="55" y="218" width="125" height="44" rx="10" fill={yellow} stroke={stroke} strokeWidth="2" />
      <text x="117" y="244" textAnchor="middle" fontSize="11" fontWeight="600" fill={ink}>Auto-Scrape</text>

      <rect x="258" y="210" width="120" height="60" rx="11" fill={blue} stroke={stroke} strokeWidth="2" />
      <ellipse cx="318" cy="234" rx="20" ry="6" fill="#fff" stroke={stroke} strokeWidth="1.5" />
      <path d="M298,234 L298,246 A20,6 0 0 0 338,246 L338,234" fill="#fff" stroke={stroke} strokeWidth="1.5" />
      <text x="318" y="262" textAnchor="middle" fontSize="14" fontWeight="700" fill={ink}>CRM</text>

      <rect x="478" y="210" width="120" height="36" rx="9" fill={purple} stroke={stroke} strokeWidth="2" />
      <text x="538" y="232" textAnchor="middle" fontSize="11" fontWeight="600" fill={ink}>AI Score</text>
      <rect x="478" y="258" width="130" height="32" rx="9" fill={green} stroke={stroke} strokeWidth="2" />
      <text x="543" y="278" textAnchor="middle" fontSize="11" fontWeight="600" fill={ink}>{en ? "Enrichment" : "Berikelse"}</text>

      {/* Tier 3 pipeline */}
      {pipeline.map((b) => (
        <g key={b.label}>
          <rect x={b.x} y="349" width={b.w} height="36" rx="9" fill={b.fill} stroke={stroke} strokeWidth="2" />
          <text x={b.x + b.w / 2} y="371" textAnchor="middle" fontSize="11" fontWeight="600" fill={ink}>{b.label}</text>
        </g>
      ))}
      {/* Tier 3 outputs */}
      {outputs.map((b) => (
        <g key={b.label}>
          <rect x={b.x} y="410" width={b.w} height="34" rx="9" fill={b.fill} stroke={stroke} strokeWidth="2" />
          <text x={b.x + b.w / 2} y="431" textAnchor="middle" fontSize="10" fontWeight="600" fill={ink}>{b.label}</text>
        </g>
      ))}
    </svg>
  );
}
