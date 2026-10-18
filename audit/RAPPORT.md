# Mobiloptimalisering, målt før og etter

Alt målt mot lokal prod-build (`npm run build && npx next start -p 4311`), iPhone
14-emulering (390×664 viewport), reduced motion. Ingenting er deployet.

Kjør på nytt med `node audit/mobile-check.mjs <label> http://localhost:4311`.

## Målte tall

| Rute | Sidescroll før | etter | tap<44 før | etter | JS kB før | etter |
|---|---|---|---|---|---|---|
| `/` | 0 | 0 | 0 | 0 | 726 | 723 |
| `/kurs` | 0 | 0 | 1 | 1 | 627 | 625 |
| `/kurs/bedrift` | 0 | 0 | 0 | 0 | 627 | 625 |
| `/kontakt` | 0 | 0 | 0 | 0 | 627 | 625 |
| `/blogg/claude-code-oppsett-teams` | **426px** | **0** | 2 | 2 | 627 | 625 |
| `/tjenester` | 0 | 0 | 0 | 0 | 651 | 648 |

Mobilmeny med «Tjenester» utvidet:

| | Før | Etter |
|---|---|---|
| Navbar-høyde | 835px av 664px viewport (126 %) | 664px (kappet, panelet scroller) |
| Scrollbart panel | nei | ja |
| Body-scroll låst | nei | ja |
| Utilgjengelige lenker | **«Om oss», «Kontakt»** | ingen |

Andre målte enkeltverdier:

| | Før | Etter |
|---|---|---|
| Kalenderceller på `/kontakt` | 40×44px | **44×44px** |
| `theme-color` i HTML | mangler | `#B4400C` |
| `.crt-scene` i DOM på mobil | ja | **nei** (fortsatt ja på desktop) |
| Chunks lastet på forsiden | 17 | **13** på mobil, 17 på desktop |
| Kodeblokk på blogg | 725px innhold i 342px kolonne, dyttet hele dokumentet | scroller i egen boks, dokumentet står stille |

## Hva som ble gjort

**P0**
1. Mobilmenyen er nå et eget scrollbart panel (`max-h-[calc(100svh-65px)] overflow-y-auto overscroll-contain`), `src/components/Navbar.tsx`.
2. Body-scroll låses mens menyen er åpen, og Escape lukker den.
3. Menyen lukker seg ved navigasjon. Løst som utledet tilstand (`menu.path === pathname`) i stedet for en effekt, fordi `setState` i effekt er en lint-feil i dette oppsettet.
4. `.prose pre { overflow-x: auto }`, `:not(pre) > code { overflow-wrap: anywhere }`, `table { display: block; overflow-x: auto }` og `html, body { overflow-x: clip }`, `src/app/globals.css`. `clip`, ikke `hidden`, fordi `hidden` ville brutt `position: sticky` på navbaren.

**P1**

5. `autoComplete` på navn/e-post/firma i alle fire skjemaene, pluss `inputMode="email"`.
6. `.tap-target-inline` (44px høy uten å bli fullbreddes) lagt til, og satt på språkvelgeren og på ti tekstlenker som tidligere brukte `.tap-target` og dermed ble fullbreddes trykkflater.
7. «Meld på en til» og «Book et nytt møte» gikk fra ca. 20px til 44px.
8. `/kontakt`-kortet fikk `p-4` under `sm`, som ga kalenderen de 4 pikslene den manglet per celle.
9. `export const viewport` med `themeColor` og `viewportFit: "cover"`, `src/app/layout.tsx`.

**P2**

10. `ClaudeMonitor` lastes nå via `next/dynamic` bak en `matchMedia("(min-width: 1024px)")`-sjekk, `src/components/Hero.tsx`. Den ble tidligere montert og startet rAF-loopen på mobil selv om CSS skjulte den.
11. Sju overskrifter gikk fra `text-5xl` fra 0px til `text-4xl` på mobil.
12. HMS-quiz-iframen følger skjermhøyden i stedet for fast 700px, og har `loading="lazy"`.
13. Desktop-navet starter først fra `lg` i stedet for `md`, slik at nettbrett i portrett får touch-menyen. Hover-dropdownene var utilgjengelige der.

## Verifisert funksjonelt

Kjørt mot lokal prod-build, alle passerer:

1. Menyen åpner, `body.overflow` blir `hidden`
2. Escape lukker, `body.overflow` gjenopprettes
3. Menylenke navigerer og lukker menyen
4. Tilbakeknappen lukker menyen
5. Kontakt-pillen i toppraden lukker menyen (den hadde ingen egen `onClick` før)

`npm run lint`: 0 feil, 2 advarsler, begge for ubrukte variabler som lå der fra før.
`npm run build`: grønn.

## Det som ikke ble fikset, og hvorfor

- **Tre tekstlenker under 44px** står igjen (`/kurs` én, blogginnlegget to). Alle er inline lenker midt i løpende tekst. Å tvinge dem til 44px høyde ville brutt linjeavstanden i brødteksten. Dette er den dokumenterte unntaksregelen i `globals.css`.
- **JS-tallene beveget seg knapt** (2-3 kB). Målingen er dessuten støyete, forsiden varierte 641-726 kB mellom kjøringer på identisk kode, trolig fordi Next prefetcher lenker som kommer i viewport. Den reelle gevinsten fra punkt 10 er synlig i chunk-antallet (17 → 13 på mobil) og i at rAF-loopen ikke lenger starter, ikke i totalbytes.
- **`ai-agenter-demo.original.mp4` (13,4 MB) og de store PNG-ene i `public/`** er ikke rørt. De er ureferert i koden og lastes ikke av noen bruker, så de er deploy-vekt, ikke mobilvekt. Egen opprydding.

## Feil i mitt eget utgangspunkt, korrigert underveis

- Første overflyt-detektor målte `scrollWidth - innerWidth`. Ved sidescroll vokser `innerWidth` sammen med innholdet, så feilen ble usynlig. Riktig referanse er `clientWidth`.
- Menyløkken klikket først på selve «Meny»-knappen og lukket menyen, som ga et for lavt tall (471px). Reell verdi var 835px.
- Påstanden om at både «Kurs» og «Tjenester» kunne stå utvidet samtidig stemte ikke. `mobileOpenMenu` holder én verdi, så bare én undermeny kan være åpen. Verste tilfelle er «Tjenester» alene.
