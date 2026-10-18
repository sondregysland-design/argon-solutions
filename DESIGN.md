---
name: Argon Solutions
description: Lys industriell merkevareside for praktiske AI-kurs og Claude-oppsett i Stavanger
colors:
  rust: "#B4400C"
  varm-rust: "#EA580C"
  dyp-rust: "#8A300A"
  staalblaa: "#124559"
  lys-staal: "#3E7A8E"
  blekk: "#121317"
  papir: "#FFFFFF"
  hviskegraa: "#F4F6FA"
  grafitt: "#45474D"
typography:
  display:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
  mono:
    fontFamily: "IBM Plex Mono, ui-monospace, Cascadia Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
rounded:
  input: "8px"
  dropdown: "12px"
  card: "16px"
  panel: "24px"
  pill: "9999px"
spacing:
  gutter: "24px"
  card: "28px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.blekk}"
    textColor: "{colors.papir}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "#121317D9"
  button-secondary:
    backgroundColor: "{colors.hviskegraa}"
    textColor: "{colors.blekk}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  card-surface:
    backgroundColor: "{colors.hviskegraa}"
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
  panel-dark:
    backgroundColor: "{colors.blekk}"
    textColor: "{colors.papir}"
    rounded: "{rounded.panel}"
  input-field:
    backgroundColor: "{colors.papir}"
    textColor: "{colors.blekk}"
    rounded: "{rounded.input}"
    padding: "12px 16px"
---

# Design System: Argon Solutions

## 1. Overview

**Creative North Star: "Rust og stål i dagslys"**

Et lyst, ryddig verksted der materialene selv er paletten: rust-oransje og stålblå mot hvitt papir og blekk. Siden skal føles som den er laget av en som bygger ting: rolige flater, solide pill-knapper, rause seksjonsavstander (96px) og én varm aksent som aldri maser. Interaktive egenbygde elementer (partikkelfeltet og Claude-monitoren i heroen) er systemets utstillingsvindu; de beviser kompetansen i stedet for å beskrive den.

Systemet avviser eksplisitt generisk SaaS/AI-byrå-estetikk: gradient-tekst, glassmorphism, lilla/blå AI-slop, hero-metrics og identiske kortgrid. Fargestrategien er behersket (Restrained): tonede nøytraler bærer siden, rust-oransje brukes på under 10 prosent av enhver skjerm.

**Key Characteristics:**
- Lys flate (hvit + hviskegrå), blekk-mørke handlingsflater
- Én varm signaturaksent (rust) med faste, få jobber
- Pill-formede knapper, mykt avrundede kort (16px) og paneler (24px)
- Flat i hvile; skygge kun på elementer som svever
- Rolig entrance-koreografi i heroen, ellers tilstandsbasert bevegelse

## 2. Colors

Industrielle materialfarger i dagslys: rust og stål mot papir og blekk.

### Primary
- **Rust** (#B4400C): Signaturaksenten. Tre faste jobber: garanti/anbefaling-detaljer, aktiv og hover-tilstand i navigasjonen, og grunder-seksjonen (som 5 prosent tint-flate). Aldri stor dekorativ flatefarge.
- **Varm rust** (#EA580C): Lysere hover/glød-variant av rust der kontrast mot mørk flate trengs.
- **Dyp rust** (#8A300A): Mørk variant for hover på rust-lenker mot lys flate.

### Secondary
- **Stålblå** (#124559): Detaljfarge for ikoner, diagramstreker og partikler. Aldri flater eller tekst.
- **Lys stål** (#3E7A8E): Sekundær diagram/partikkel-nyanse.

### Neutral
- **Papir** (#FFFFFF): Sidens grunnflate og tekst på mørke flater.
- **Hviskegrå** (#F4F6FA): Kortbakgrunner, sekundærknapper og tonale bånd som deler opp siden.
- **Blekk** (#121317): Primærtekst, primærknapper og mørke paneler. Blekk er handlingsfargen; en helt svart pill betyr "trykk her".
- **Grafitt** (#45474D): Sekundærtekst og navigasjonslenker i hvile.

### Named Rules
**Rust-regelen.** Rust-oransje har tre faste jobber og får aldri nye per side. Ser en side ut som den trenger en ny farge, er svaret nei.
**Lånte farger-regelen.** Claude/Anthropic-paletten (#d97757, #faf9f5, #141413) er kun tillatt inne i skjerm-mockups som siterer Claude-produktet (som hero-monitoren). Den lekker aldri ut i sidens egne flater, tekst eller knapper.

## 3. Typography

**Display Font:** Figtree (med ui-sans-serif fallback)
**Body Font:** Figtree
**Label/Mono Font:** IBM Plex Mono (kun tekniske detaljer og skjerm-mockups)

**Character:** Én geometrisk-human sans i flere vekter. Rolig og moderne uten å være kald; vekt- og størrelseskontrast gjør jobben to fonter ellers ville gjort.

### Hierarchy
- **Display** (500, clamp(3rem, 6vw, 3.75rem), 1.08): Hero-overskrifter. Andre linje kan settes i rust for betoning.
- **Headline** (500, 1.875rem, tracking -0.025em): Seksjonsoverskrifter, ofte med en kort grafitt-intro på samme linje (flex justify-between).
- **Statement** (500, 1.875rem til 3rem): Store utsagnssetninger i bevis-seksjoner; bruk text-balance.
- **Title** (600, 1rem): Kort- og komponentoverskrifter.
- **Body** (400, 1rem, 1.625): Brødtekst i grafitt, maks 65 til 75 tegn linjelengde (max-w-2xl/3xl).
- **Label** (500, 0.875rem): Navigasjon, knapper og skjemaetiketter.

### Named Rules
**Én familie-regelen.** Figtree bærer alt brukersynlig. IBM Plex Mono er forbeholdt teknisk detalj (kode, terminal-mockups); mono som "teknisk kostyme" i overskrifter er forbudt.

## 4. Elevation

Flatt system med tonal lagdeling: dybde kommer fra hviskegrå flater mot hvitt, hårfine delelinjer (border-text/10 og /15) og mørke blekk-paneler, ikke fra skygger. Unntaket er elementer som faktisk svever over innholdet.

### Shadow Vocabulary
- **Flytende meny** (`box-shadow: shadow-lg`, Tailwind-standard): Kun dropdowns og andre elementer som legger seg over innhold.
- **Sticky nav** (`bg-white/80 + backdrop-blur-md`): Funksjonell gjennomskinnelighet for lesbarhet under scrolling. Dette er systemets eneste blur og den er funksjonell, ikke dekorativ.

### Named Rules
**Flat-til-det-flyter-regelen.** Flater i ro har aldri skygge. Skygge og blur er reservert for elementer som svever over andre (dropdown, sticky nav). Ser et kort ut som det svever, er det feil.

## 5. Components

Solide og rolige: komponentene tar plass, runder hjørnene og skifter tilstand uten drama.

### Buttons
- **Shape:** Pill (border-radius 9999px)
- **Primary:** Blekk-bakgrunn, hvit tekst, 600-vekt 0.875rem, padding 14px 28px
- **Hover / Focus:** Bakgrunn til 85 prosent opasitet (transition på farge); disabled 50 prosent opasitet
- **Secondary:** Hviskegrå bakgrunn, blekk tekst; hover mørkner til text/10

### Cards / Containers
- **Corner Style:** 16px (kort), 24px (store paneler)
- **Background:** Hviskegrå på hvit side; hvite kort inne i hviskegrå bånd; blekk for mørke CTA-paneler
- **Shadow Strategy:** Ingen (se Elevation)
- **Border:** Ingen på tonale kort; hårfin border-text/10 der flaten er hvit-på-hvit
- **Internal Padding:** 28px

### Inputs / Fields
- **Style:** Hvit flate, 8px radius, hårfin ramme (border-text/15), padding 12px 16px, placeholder i grafitt
- **Focus:** Ramme og 1px ring i rust, outline-none
- **Error:** Rød tint-boks (red-50 bakgrunn, red-200 ramme, red-700 tekst) over skjemaet

### Navigation
- **Style:** Sticky topp, hvit 80 prosent + backdrop-blur, hårfin bunnlinje. Lenker: 0.875rem 500-vekt i grafitt; hover og aktiv i rust. Kontakt-CTA som blekk-pill. Dropdown: hvit, 12px radius, shadow-lg. Mobil: hamburger med utfellbar liste, samme lenkestiler.

### Claude-monitoren (signaturkomponent)
Egenbygd SVG-illustrasjon i heroen: moderne skjerm i champagne-aluminium som viser en miniatyr claude.ai-flate og følger musepekeren (perspektiv-tilt + parallakselag, lerp i requestAnimationFrame). Dekorativ (aria-hidden), avhengighetsfri, skjult på mobil, statisk pose ved prefers-reduced-motion. Malen for fremtidige interaktive bevis: myke SVG-gradienter, aldri CSS 3D-boksflater eller høykontrast 1px-teksturer.

## 6. Do's and Don'ts

### Do:
- **Do** bruk blekk-pills for alle primærhandlinger; hvit tekst, 9999px radius.
- **Do** del opp siden med hviskegrå bånd og 96px seksjonsavstand i stedet for streker og skygger.
- **Do** send all brukersynlig tekst gjennom t()-nøkler (no.ts/en.ts) på sider med LanguageProvider.
- **Do** gi all bevegelse et prefers-reduced-motion-alternativ med statisk fallback.
- **Do** hold rust-aksenten under 10 prosent av enhver skjerm.

### Don't:
- **Don't** bruk gradient-tekst, glassmorphism, lilla/blå AI-slop, hero-metrics eller identiske kortgrid (PRODUCT.md: anti-referanser).
- **Don't** skriv tankestreker som bindeledd, kolon i setninger eller "rule of three"-oppramsing i copy.
- **Don't** bruk stock-fotos eller konsulent-fraser; demoer omtales som egenbygde demoer.
- **Don't** oppgi grunnleggingsår. "Argon Solutions AS" (juridisk navn per juli 2026) hører kun hjemme i juridiske felt (footer, legalName, faktura); i løpende copy skrives bare "Argon Solutions".
- **Don't** la Claude-paletten lekke ut av skjerm-mockups (Lånte farger-regelen).
- **Don't** legg skygge på flater i ro eller farget border-left som aksent-stripe.
- **Don't** introduser nye fonter eller nye farger per side; paletten og Figtree er låst.
