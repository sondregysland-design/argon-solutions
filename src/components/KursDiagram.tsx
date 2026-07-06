"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

/**
 * Claude Code courses overview, drawn as inline SVG so the labels stay crisp
 * and switch between Norwegian and English with the language picker.
 * Replaces claude-code-kurs.png, which image generation could not recreate cleanly.
 */
export function KursDiagram() {
  const { locale } = useLanguage();
  const en = locale === "en";

  const steel = "#124559";
  const primary = "#B4400C";
  const ink = "#10181F";
  const muted = "#3E5460";

  // Fills are tints of the site palette (steel for 1/2/4, primary for the
  // recommended Interaktiv+ course) so the diagram sits inside the brand.
  const cards = [
    { n: "1", x: 50, y: 78, fill: "#EDF1F2", stroke: steel, title: en ? "Intro Course" : "Intro Kurs", dur: en ? "2.5 hours" : "2,5 timer", topic: en ? "AI theory + Demo" : "AI-teori + Demo" },
    { n: "2", x: 310, y: 78, fill: "#D5E0E4", stroke: steel, title: en ? "Interactive Course" : "Interaktiv Kurs", dur: en ? "1 day" : "1 dag", topic: "Hooks + Skills" },
    { n: "3", x: 50, y: 224, fill: "#F4DDCF", stroke: primary, title: en ? "Interactive Course+" : "Interaktiv Kurs+", dur: en ? "2 days" : "2 dager", topic: "Agent SDK" },
    { n: "4", x: 310, y: 224, fill: "#C3D4DA", stroke: steel, title: "Team Setup", dur: en ? "1 day" : "1 dag", topic: en ? "Conventions" : "Konvensjoner" },
  ];

  return (
    <svg viewBox="0 0 600 380" role="img" aria-label={en ? "Claude Code Courses" : "Claude Code Kurs"} className="mx-auto w-full max-w-2xl">
      <text x="300" y="44" textAnchor="middle" fontSize="26" fontWeight="700" fill={ink}>
        {en ? "Claude Code Courses" : "Claude Code Kurs"}
      </text>

      {cards.map((c) => (
        <g key={c.n}>
          <rect x={c.x} y={c.y} width="240" height="122" rx="14" fill={c.fill} stroke={c.stroke} strokeWidth="2" />
          <circle cx={c.x + 28} cy={c.y + 28} r="13" fill="#fff" stroke={c.stroke} strokeWidth="2" />
          <text x={c.x + 28} y={c.y + 33} textAnchor="middle" fontSize="13" fontWeight="700" fill={ink}>{c.n}</text>
          <text x={c.x + 120} y={c.y + 56} textAnchor="middle" fontSize="17" fontWeight="700" fill={ink}>{c.title}</text>
          <text x={c.x + 120} y={c.y + 82} textAnchor="middle" fontSize="12" fontWeight="600" fill={muted}>{c.dur}</text>
          <text x={c.x + 120} y={c.y + 104} textAnchor="middle" fontSize="12" fontWeight="500" fill={muted}>{c.topic}</text>
        </g>
      ))}
    </svg>
  );
}
