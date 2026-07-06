"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

/**
 * Project Dashboard architecture diagram, drawn as inline SVG so the labels
 * are crisp and switch between Norwegian and English with the language picker.
 * Replaces the static dashboard-architecture.png, which image generation could
 * not recreate cleanly because of its many small labels.
 */
export function DashboardDiagram() {
  const { locale } = useLanguage();
  const en = locale === "en";

  const stroke = "#495057";
  const blue = "#a5d8ff";
  const yellow = "#ffec99";
  const green = "#b2f2bb";
  const coral = "#ffa8a8";
  const purple = "#d0bfff";
  const ink = "#343a40";

  const t = {
    title: en ? "Project Dashboard" : "Prosjektdashboard",
    manager: en ? "MANAGER" : "LEDER",
    workshop: en ? "WORKSHOP" : "VERKSTED",
    aiReport: en ? "AI REPORT" : "AI RAPPORT",
    sharedData: en ? "SHARED DATA" : "DELT DATA",
  };

  const modules = [
    { x: 16, label: en ? "PROJECT" : "PROSJEKT" },
    { x: 90, label: "ROV" },
    { x: 164, label: en ? "ROUTINE" : "RUTINE" },
    { x: 238, label: en ? "INVENTORY" : "LAGER" },
    { x: 350, label: en ? "OVERVIEW" : "OVERSIKT" },
    { x: 424, label: en ? "DRAWING" : "TEGNING" },
    { x: 498, label: en ? "LOG" : "LOGG" },
  ];

  return (
    <svg
      viewBox="0 0 600 405"
      role="img"
      aria-label={t.title}
      className="mx-auto w-full max-w-2xl"
    >
      <defs>
        <marker id="dd-arrow" markerWidth="9" markerHeight="9" refX="6.5" refY="3" orient="auto">
          <path d="M0,0 L6.5,3 L0,6 Z" fill={stroke} />
        </marker>
      </defs>

      <text x="300" y="36" textAnchor="middle" fontSize="27" fontWeight="700" fill={ink}>
        {t.title}
      </text>

      {/* Solid hierarchy arrows */}
      <g stroke={stroke} strokeWidth="2" fill="none" markerEnd="url(#dd-arrow)">
        <path d="M285,102 L200,136" />
        <path d="M315,102 L410,136" />
        <path d="M165,184 L60,206" />
        <path d="M172,184 L126,206" />
        <path d="M182,184 L200,206" />
        <path d="M190,184 L272,206" />
        <path d="M412,184 L388,206" />
        <path d="M422,184 L460,206" />
        <path d="M432,184 L532,206" />
      </g>

      {/* LOGIN */}
      <rect x="250" y="64" width="100" height="38" rx="11" fill={blue} stroke={stroke} strokeWidth="2" />
      <text x="300" y="88" textAnchor="middle" fontSize="14" fontWeight="700" fill={ink}>LOGIN</text>

      {/* Roles */}
      <rect x="112" y="142" width="120" height="42" rx="11" fill={yellow} stroke={stroke} strokeWidth="2" />
      <text x="172" y="168" textAnchor="middle" fontSize="14" fontWeight="700" fill={ink}>{t.manager}</text>
      <rect x="358" y="142" width="132" height="42" rx="11" fill={coral} stroke={stroke} strokeWidth="2" />
      <text x="424" y="168" textAnchor="middle" fontSize="14" fontWeight="700" fill={ink}>{t.workshop}</text>

      {/* Module row */}
      {modules.map((m) => (
        <g key={m.label}>
          <rect x={m.x} y="206" width="68" height="32" rx="8" fill={green} stroke={stroke} strokeWidth="2" />
          <text x={m.x + 34} y="226" textAnchor="middle" fontSize="10" fontWeight="600" fill={ink}>{m.label}</text>
        </g>
      ))}

      {/* AI report + DOCX */}
      <path d="M50,238 L98,294" stroke={stroke} strokeWidth="2" fill="none" markerEnd="url(#dd-arrow)" />
      <rect x="44" y="296" width="112" height="40" rx="11" fill={purple} stroke={stroke} strokeWidth="2" />
      <text x="100" y="321" textAnchor="middle" fontSize="12" fontWeight="700" fill={ink}>{t.aiReport}</text>
      <path d="M100,336 L100,356" stroke={stroke} strokeWidth="2" fill="none" markerEnd="url(#dd-arrow)" />
      <text x="100" y="372" textAnchor="middle" fontSize="10" fontWeight="600" fill={ink}>DOCX</text>

      {/* Database cylinder */}
      <path d="M268,300 A32,10 0 0 1 332,300 L332,334 A32,10 0 0 1 268,334 Z" fill={blue} stroke={stroke} strokeWidth="2" />
      <ellipse cx="300" cy="300" rx="32" ry="10" fill={blue} stroke={stroke} strokeWidth="2" />
      <text x="300" y="360" textAnchor="middle" fontSize="12" fontWeight="700" fill={ink}>DB</text>

      {/* Dashed data flow */}
      <g stroke={stroke} strokeWidth="1.5" fill="none" strokeDasharray="4 4" markerEnd="url(#dd-arrow)">
        <path d="M156,316 L266,320" />
        <path d="M332,318 L386,242" />
        <path d="M300,238 L300,288" />
      </g>
      <text x="250" y="284" textAnchor="middle" fontSize="9" fontWeight="600" fill={stroke}>{t.sharedData}</text>
    </svg>
  );
}
