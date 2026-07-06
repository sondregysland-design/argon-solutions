# Brand-system: Argon Kurs

## Navn og rasjonale

**Argon Kurs.** Argon beholdes som masterbrand (domenet, juridisk enhet, edelgass-historien). "Kurs" er beskrivende og norsk, ikke et påfunn. AI kommuniseres av tagline og metadata, ikke av navnet, så navnet holder seg når porteføljen utvides.

To spor under samme system:

- **Argon Kurs** (privat): åpne kohorter i Stavanger. Sporfarge: signal-rust.
- **Argon Industri** (bedrift): in-house for olje og gass. Sporfarge: petrol.

Flaggskip-produkt: **Cowork & Code**.

## Posisjonering (én linje)

Praktiske AI-kurs i Stavanger, holdt av en praktiker fra bransjen: du lærer å jobbe og bygge med Claude, ikke å snakke om AI.

## Visuell idé

Industriell Stavanger møter moderne studio. Referansene er spec-sheets, sveiselys og Nordsjø-stål, ikke SaaS-landingssider. Konkret:

- Mono-etiketter i caps med indeksnummer ("01 / KURS") som eyebrows.
- Hårfine linjer og tabell-aktige oppsett (spec-sheet-følelse).
- Én dominant aksent (signal-rust) mot rolig, varmt papir. Petrol som sekundær for Industri-sporet.
- Ingen glassmorphism, ingen lilla gradienter, ingen stock-foto.

Argon er sveisegass: aksentfargen er fargen på glødende metall og signalfarger offshore. Det er brandets historie i én farge.

## Palett

| Token | Hex | Bruk | Kontrast |
|---|---|---|---|
| `--color-primary` | `#B4400C` | Signal-rust. CTA-er, lenker, Kurs-sporet | 5.8:1 på hvit, 5.0:1 på surface (AA for normal tekst) |
| `--color-primary-light` | `#EA580C` | Grafikk, store elementer, orbital i logo. Ikke brødtekst | 3.2:1 (kun stor/grafisk) |
| `--color-primary-dark` | `#8A300A` | Hover på primærknapper | 7.8:1 på hvit |
| `--color-steel` | `#124559` | Petrol. Industri-sporet, mørke flater | hvit tekst på steel: 10.4:1 |
| `--color-steel-light` | `#3E7A8E` | Grafikk i Industri-sporet | kun stor/grafisk |
| `--color-ink` | `#10181F` | Mørke seksjoner (footer-CTA o.l.) | hvit tekst: 17:1 |
| `--color-paper` | `#FBFAF7` | Body-bakgrunn (varmt papir) | |
| `--color-surface` | `#F3F0E9` | Seksjonsveksling, kort (varm betong) | |
| `--color-text` | `#1B242E` | Brødtekst (Nordsjø-koks) | 14:1 på papir |
| `--color-text-light` | `#5A6472` | Sekundærtekst | 5.9:1 på hvit, 5.2:1 på surface |

Lys modus kun (som i dag). Mørke flater i systemet dekkes av `ink` og `steel` med hvit tekst, alle AA.

## Typografi

- **Display + brødtekst: Archivo.** Grotesk med røtter i plakat- og skilttradisjon. Industriell uten å være kald. Erstatter Inter (generisk) og Playfair (luksus-serif, feil tone for praktiker-kurs).
- **Mono: IBM Plex Mono.** Etiketter, priser, datoer, spec-detaljer. Signaliserer kode og presisjon (kurset handler om å bygge).
- Headlines: Archivo semibold/bold, stram tracking, under 8 ord.
- Eyebrows: IBM Plex Mono, caps, letterspaced, med indeksnummer.

## Voice

- Praktiker til praktiker. Kort, konkret, bokmål.
- Verb først i CTA-er ("Se kurs", "Be om tilbud").
- Ingen hype-adjektiv, ingen em-tankestrek, ingen kolon-i-setning-triks, ingen tretrinns-oppramsing.
- Bevis nevnes nøkternt: kurs levert for Hytorc, femten år i olje og gass. Ingenting oppdiktet.
- MVA-fritaket nevnes én gang, som fakta, ikke som salgstriks.

## Logo

`LogoIcon`: eksisterende A-form beholdes, farger flyttes til ink + signal-rust orbital.
`LogoFull`: wordmark `ARGON` (bold, ink) + `Kurs` (semibold, signal-rust).
