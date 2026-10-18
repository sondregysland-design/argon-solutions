# Product

## Register

brand

## Users

Beslutningstakere i norske olje- og gassbedrifter (SMB) i Stavanger-regionen: daglige ledere, operasjonsledere og ingeniører som vurderer AI-verktøy, Claude-oppsett eller kurs for teamet sitt. De leser på jobb, ofte mobil, kommer via LinkedIn eller søk, og har lav toleranse for buzzord. De bestemmer seg raskt: virker dette konkret og troverdig, eller er det enda et AI-byrå?

## Product Purpose

Offentlig nettside for Argon Solutions AS (juridisk navn, se under). Forsiden leder med bedriftsinterne AI-kurs (fra 40 000 kr per kursdag, ingen åpne kurs for privatpersoner siden 2026-09-18); sekundært selges Claude-oppsett for bedrifter og skreddersydd software for energisektoren. Suksess = tilbudsforespørsler, bookede møter og kontaktskjema-innsendinger. Sterk SEO/GEO-satsing (JSON-LD, norsk copy, egen engelsk landingsside for "AI agency Stavanger").

## Brand Personality

Industriell, praktisk, jordnær. Grunnlagt på offshore-/subsea-erfaring; leder med grunderens felterfaring, ikke selskapets alder eller størrelse. Norsk copy er hovedspråket. Tone: konkret og teknisk trygg, ikke salgsete. Siden skal føles som den er laget av en som bygger ting, ikke en som selger slides.

## Anti-references

- Generisk SaaS/AI-byrå-estetikk: gradient-tekst, glassmorphism, lilla/blå AI-slop, hero-metrics, identiske kortgrid.
- AI-skrivetegn i copy: tankestreker som bindeledd, kolon i setninger, "rule of three"-oppramsing.
- Konsulent-corporate: stock-fotos, tomme fraser, "vi hjelper deg å realisere potensialet".
- Aldri oppgi grunnleggingsår (2024) eller antyde eksisterende kunder; demoer omtales som egenbygde demoer.
- "Argon Solutions AS" (juridisk navn per juli 2026) brukes kun i juridiske felt: footer-copyright, JSON-LD legalName, llms-fakta, faktura/kontrakt. I løpende copy skrives bare "Argon Solutions".

## Design Principles

1. Felterfaring foran festtale: vis konkrete arbeidsflyter og resultater, ikke abstrakte AI-løfter.
2. Siden er selv beviset: interaktive, egenbygde elementer (som Claude-monitoren i heroen) demonstrerer byggekompetansen direkte. Dekorative demoer er alltid aria-hidden, avhengighetsfrie og reduced-motion-sikre.
3. Norsk først: copy skrives for norske industrifolk; engelsk kun på dedikerte EN-sider.
4. Rask og lett: statisk-først Next.js, ingen tunge klientbiblioteker uten grunn.
5. Én tydelig handling per side: kurspåmelding eller kontakt.
6. Én varm signaturaksent (rust-oransje) med faste, få jobber; blekk-mørke flater som handlingsfarge; ingen nye farger per side. Eksakte tokens ligger i `src/app/globals.css` (@theme); Claude/Anthropic-paletten brukes kun inne i skjerm-mockups som siterer Claude-produktet, aldri som sidens egne farger.

## Accessibility & Inclusion

WCAG 2.1 AA som mål: kontrast på minst 4.5:1 på brødtekst, synlig fokus, reduced-motion-alternativ for all animasjon (statisk fallback, ingen innhold gjemt bak bevegelse). Tospråklig (NO/EN) via LanguageProvider på utvalgte sider; all brukersynlig tekst går gjennom t()-nøkler der provider finnes.
