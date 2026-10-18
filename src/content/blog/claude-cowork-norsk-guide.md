---
title: "Claude Cowork på norsk, en praktisk guide for bedrifter"
description: "Hva Claude Cowork er, hvilke abonnement som har det, hvordan du kommer i gang og hva bedriften bør avklare om sikkerhet før teamet tar det i bruk."
keywords: ["Claude Cowork", "Claude Cowork norsk", "hva er Claude Cowork", "Cowork Anthropic", "Claude agent", "Claude for bedrifter"]
date: 2026-10-18
updated: 2026-10-18
faq:
  - q: "Hva er Claude Cowork?"
    a: "Cowork er måten Claude utfører oppgaver i flere steg på, i stedet for å svare på én melding om gangen. Den bygger på samme agentarkitektur som Claude Code, men uten terminal. Claude kan lese og skrive filer i mapper du kobler til, bruke nettleseren og jobbe videre i skyen mens du gjør noe annet."
  - q: "Er Claude Cowork gratis?"
    a: "Nei. Cowork krever et betalt abonnement, altså Pro, Max, Team eller Enterprise. Gratisversjonen av Claude har ikke Cowork."
  - q: "Fungerer Cowork på Windows?"
    a: "Ja. Desktop-appen finnes for både macOS og Windows, og det er den som gir full Cowork med tilgang til lokale filer og nettleser. Cowork finnes også på web og mobil, men lokale filer krever at desktop-appen er åpen."
  - q: "Hvorfor finner jeg ikke Cowork-knappen lenger?"
    a: "Anthropic slår sammen chat og Cowork. På den nye løsningen ber du bare om det du trenger, så avgjør Claude selv om det er et kort svar eller en oppgave. Endringen rulles ut gradvis til Pro og Max, og Enterprise kan slå den på som beta."
  - q: "Er det trygt å bruke Cowork med jobbdokumenter?"
    a: "Det kan være det, men bedriften bør bestemme reglene først. Koble bare til mapper Claude faktisk trenger, hold sensitive filer utenfor, og bruk manuell godkjenning til dere kjenner verktøyet. Anthropic påpeker selv at angrep via skjulte instruksjoner i dokumenter og nettsider ikke kan utelukkes helt."
---

Med Claude Cowork slutter Claude å bare svare og begynner å gjøre jobben. Du beskriver en oppgave, og Claude jobber seg gjennom den i flere steg. Den åpner filene, leser dem, skriver og leverer et ferdig dokument. Denne guiden forklarer hva Cowork er, hva det krever, og hva en norsk bedrift bør tenke gjennom før teamet tar det i bruk.

Fakta i guiden er hentet fra Anthropics egne hjelpesider per oktober 2026. Funksjonen endrer seg raskt, så sjekk [support.claude.com](https://support.claude.com/en/collections/19667525-claude-cowork) hvis noe ser annerledes ut hos deg.

## Hva er Claude Cowork?

Anthropic beskriver Cowork som samme agentarkitektur som driver Claude Code, bare uten terminal. Forskjellen fra vanlig chat er at Claude ikke stopper etter ett svar. Ber du om en oppsummering av tjue leverandørtilbud i en mappe, leser Claude alle tjue, lager en sammenligning og lagrer den som et dokument i mappen.

Cowork kan:

- lese og skrive filer i mapper du kobler til
- bruke nettleseren som en del av en oppgave
- kjøre planlagte oppgaver i skyen, uten at maskinen din må være våken (oppgaver som bruker lokale filer, trenger likevel at desktop-appen er åpen)
- bruke koblinger (connectors) mot andre systemer, og skills og plugins som pakker inn faste arbeidsmåter

Det siste punktet er det som gjør Cowork interessant for bedrifter. En skill er en beskrivelse av hvordan dere gjør en bestemt jobb, for eksempel hvordan en ukesrapport skal se ut. Når den først er skrevet, følger Claude den samme oppskriften hver gang, uansett hvem i teamet som ber om jobben.

## Hvilke abonnement har Cowork?

Cowork krever betalt abonnement. Det betyr Pro, Max, Team eller Enterprise. Gratisversjonen har det ikke.

| Hvor | Pro og Max | Team | Enterprise |
|---|---|---|---|
| Desktop (macOS og Windows) | Ja | Ja | Ja |
| Web | Ja | Beta | Beta, hvis admin slår det på |
| Mobil | Ja | Beta | Beta, hvis admin slår det på |

Desktop-appen er den fulle versjonen. Den gir tilgang til lokale filer og nettleser, og på Pro og Max også datamaskinstyring, som foreløpig er i beta. På web og mobil kjører oppgavene i skyen, men skal Claude jobbe med filer på maskinen din, må desktop-appen være åpen.

Siden 6. oktober 2026 kjører nye Cowork-oppgaver på Pro og Max i skyen, ikke lokalt på maskinen. Valget om å kjøre bare på egen maskin er fjernet.

## Cowork blir bare Claude

Finner du ikke Cowork-knappen, er grunnen at Anthropic slår sammen chat og Cowork. På den nye løsningen ber du om det du trenger, så avgjør Claude om det er et raskt svar eller en oppgave som krever flere steg. Endringen rulles ut gradvis til Pro og Max, og Enterprise kan slå den på som beta under navnet «Chat and Cowork unified».

For brukeren betyr det mindre å tenke på. Navnet Cowork kommer likevel til å henge igjen en stund, både i hjelpesider og når folk snakker om funksjonen.

## Slik kommer du i gang

1. **Installer desktop-appen.** Last ned Claude for Windows eller macOS fra [claude.ai/download](https://claude.ai/download) og logg inn med et betalt abonnement. Skriv gjerne `/setup-claude` i en ny samtale. Da får du et guidet oppsett der du velger rolle og kobler til verktøyene du bruker.
2. **Koble til én mappe.** Velg «Work in a folder» og pek på en mappe med ekte arbeidsfiler, men ikke noe sensitivt. En prosjektmappe med tilbud, møtereferater eller rapporter er et godt sted å starte.
3. **Gi en ekte oppgave.** Anthropics egen opplæring anbefaler å starte med noe fra gjøremålslista, gjerne en oppgave som går over flere steg. Prøv for eksempel «Les møtereferatene i denne mappen fra september og lag en liste over alle åpne aksjonspunkter med ansvarlig og frist».
4. **Skriv instruksjoner.** Globale instruksjoner gjelder alle oppgaver, og der skriver du tone, format og hvem du er. Mappeinstruksjoner gjelder bare den ene mappen, og der hører prosjektspesifikke ting hjemme.
5. **Prøv en planlagt oppgave.** Skriv `/schedule` i en oppgave for å la den gå fast, for eksempel hver mandag morgen.

## Tre moduser for godkjenning

Cowork har tre moduser som bestemmer hvor mye Claude kan gjøre uten å spørre:

- **Manuell** er standard i den nye løsningen. Claude spør før hver handling, og du godkjenner eller avviser.
- **Auto** lar Claude jobbe uten å spørre, men hver handling går gjennom en sikkerhetssjekk som stopper det som ser risikabelt ut. Denne modusen bruker mer av kvoten.
- **Skip** betyr ingen spørsmål og ingen automatisk sjekk. Anthropic anbefaler den bare når du stoler fullt på alt som er involvert.

Det er fristende å slå på auto fra første dag. Vi ville ventet. Bli i manuell modus de første ukene, så lærer du fort hvordan Claude angriper en oppgave og hvilke steg som er trygge å slippe fri.

## Hva bedriften bør avklare om sikkerhet

I Cowork kan Claude endre filer og klikke seg rundt på nettsider på egen hånd. Da må noen spørsmål avklares før et helt team tar det i bruk.

**Hvilke filer får Claude se?** Claude kan bare lese og skrive i mapper du kobler til. Lag en ryddig arbeidsmappe i stedet for å koble til hele disken. Anthropic fraråder å gi tilgang til mapper med sensitiv informasjon, som økonomidokumenter.

**Skjulte instruksjoner.** Når Claude leser innhold utenfra, som nettsider, e-post eller dokumenter fra andre, kan det ligge instruksjoner skjult i teksten. Anthropic kaller dette prompt injection og sier selv at risikoen ikke er null. Risikoen er størst når Claude både leser ukjent innhold og kan gjøre noe med konsekvenser. Begrens det ene eller det andre.

**Planlagte oppgaver.** Ikke sett opp faste oppgaver som rører sensitive filer eller gjør noe som ikke kan angres.

**Kontroll for administrator.** På Team og Enterprise kan eier skru av websøk og Claude i Chrome for hele organisasjonen, og Cowork-hendelser kan strømmes til egne overvåkingsverktøy. Enterprise kan i tillegg skanne skills og plugins for skadelig innhold ved installasjon.

For bedrifter i olje og gass, der kontrakter og brønndata ofte er konfidensielle, lønner det seg å skrive disse reglene ned før første oppgave kjøres. Datasikkerhet er derfor første tema på bedriftskursene våre.

## Hva Cowork faktisk er godt for

Cowork gjør mest nytte der arbeidet er repeterende og følger et mønster som kan beskrives. Det gjelder for eksempel oppgaver som disse.

- sammenstille rapporter fra mange kildefiler
- gå gjennom tilbud, kontrakter eller prosedyrer og trekke ut det som er viktig
- lage faste ukesoversikter fra regneark og e-post
- rydde og omstrukturere dokumentmapper
- fylle ut maler basert på underlag, for eksempel skjema fra et boreprogram

Det Cowork ikke erstatter er faglig vurdering. Claude kan peke ut avvik i en rapport, men det er fortsatt fagpersonen som kontrollerer funnene og avgjør hva de betyr.

## Cowork eller Claude Code?

Begge bygger på samme motor. Claude Code er laget for utviklere og jobber i terminal og kodeprosjekter. Cowork er laget for kunnskapsarbeid utenom koding og jobber med dokumenter, regneark og nettlesere gjennom et vanlig grensesnitt. Plugins dere legger til fungerer i begge, og i vanlig chat.

Har teamet utviklere, gir det ofte mening å bruke begge. Les mer i [guiden vår om Claude Code for bedrifter](/blogg/claude-code-for-bedrifter).

## Vil dere komme raskere i gang?

Vi holder [bedriftsinterne kurs i Claude og Cowork](/kurs) der teamet jobber med egne filer og egne arbeidsflyter, med datasikkerhet som første tema. Vi hjelper også bedrifter med å [sette opp Claude med kjøreregler og skills](/oppsett) slik at hele teamet bruker det likt.
