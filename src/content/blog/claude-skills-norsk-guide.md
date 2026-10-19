---
title: "Claude skills på norsk, slik lærer du Claude jobben deres"
description: "Hva Claude skills er, hvordan de virker, hvilke abonnement som har dem og hvordan du lager din første skill. Basert på Anthropics egne sider per oktober 2026."
keywords: ["Claude skills", "Claude skills norsk", "hva er Claude skills", "Agent Skills", "lage skill i Claude", "SKILL.md", "Claude for bedrifter"]
date: 2026-10-19
updated: 2026-10-19
faq:
  - q: "Hva er Claude skills?"
    a: "En skill er en mappe med instruksjoner, og gjerne skript og andre filer, som Claude henter inn når en oppgave trenger den. Den beskriver hvordan en bestemt jobb skal gjøres, for eksempel en rapport i bedriftens format, slik at Claude følger samme fremgangsmåte hver gang."
  - q: "Er Claude skills gratis?"
    a: "Per oktober 2026 finnes skills på Free, Pro, Max, Team og Enterprise, altså også i gratisversjonen. Funksjonen krever at kodekjøring er slått på. Deling med kolleger og utrulling til hele organisasjonen krever Team eller Enterprise."
  - q: "Hvordan lager jeg en skill i Claude?"
    a: "Den enkleste veien er å be Claude om det i en vanlig samtale, for eksempel «Jeg vil lage en skill for ukesrapporter». Claude stiller spørsmål om fremgangsmåten og bygger skillen for deg. Du kan også skrive filene selv, pakke mappen som ZIP og laste den opp under Customize > Skills."
  - q: "Hva er forskjellen på en skill og et prosjekt?"
    a: "Et prosjekt gir Claude fast bakgrunnskunnskap som er lastet inn i alle samtalene i prosjektet. En skill er en fremgangsmåte som bare lastes når den er relevant, og den virker på tvers av Claude."
  - q: "Er det trygt å installere skills fra andre?"
    a: "Bare hvis du stoler på kilden. Anthropic peker på prompt injection og datalekkasje som de største risikoene, og anbefaler å lese gjennom filene i en skill før du slår den på, også når den kommer fra en kollega."
---

Bruker du Claude på jobb, har du sikkert skrevet de samme instruksjonene flere ganger. Hvordan rapporten skal se ut, hvilken mal som gjelder, hvilken tone kunden skal møte. Claude skills løser akkurat det. Du beskriver jobben én gang, og Claude henter beskrivelsen selv når oppgaven dukker opp igjen.

Fakta i guiden er hentet fra Anthropics hjelpesider og utviklerdokumentasjon per oktober 2026. Funksjonen endrer seg, så sjekk [support.claude.com](https://support.claude.com/en/articles/12512176-what-are-skills) hvis noe ser annerledes ut hos deg.

## Hva er Claude skills?

Anthropic beskriver skills som mapper med instruksjoner, skript og ressurser som Claude laster inn ved behov for å gjøre det bedre på spesialiserte oppgaver ([kilde](https://support.claude.com/en/articles/12512176-what-are-skills)). En skill lærer Claude å løse en bestemt oppgave på samme måte hver gang. Anthropic nevner selv eksempler som dokumenter etter bedriftens profil, dataanalyse etter organisasjonens egne arbeidsflyter og automatisering av personlige oppgaver.

Tenk på en skill som en arbeidsbeskrivelse til en ny kollega. Anthropics dokumentasjon bruker nesten samme bilde og sammenligner en skill med en introduksjonsguide du ville laget til et nytt teammedlem.

## Hvordan virker det?

Skills bygger på det Anthropic kaller progressive disclosure. Claude leser ikke alt på en gang, men i tre nivåer ([dokumentasjon](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)).

| Nivå | Hva det er | Når Claude leser det |
|---|---|---|
| Metadata | Navn og beskrivelse øverst i SKILL.md | Alltid, ved oppstart |
| Instruksjoner | Selve teksten i SKILL.md | Når skillen blir tatt i bruk |
| Ressurser og kode | Ekstra filer, maler og skript | Bare når de trengs |

Fordelen er at du kan ha mange skills installert uten at de fyller opp Claudes arbeidsminne. Før en skill tas i bruk, er det bare navnet og beskrivelsen som tar plass.

Det gjør beskrivelsen til den viktigste linjen i hele skillen. Claude bruker den til å avgjøre når skillen skal brukes. Bruker ikke Claude skillen din, ber Anthropic deg sjekke at den er slått på, og at beskrivelsen sier tydelig når den skal brukes.

## Fire typer skills

- **Anthropics egne.** Lages og vedlikeholdes av Anthropic, blant annet for Excel, Word, PowerPoint og PDF. Claude bruker dem automatisk når de passer.
- **Egne skills.** De du eller bedriften lager for egne arbeidsflyter.
- **Skills fra organisasjonen.** På Team og Enterprise kan eierne rulle ut skills til hver bruker, slått på eller av som standard.
- **Partnerskills.** Skills fra partnere som Notion, Figma og Atlassian, laget for å virke sammen med koblingene deres.

## Hvilke abonnement har skills?

Per oktober 2026 er skills tilgjengelig på Free, Pro, Max, Team og Enterprise, og funksjonen krever at kodekjøring er slått på ([kilde](https://support.claude.com/en/articles/12512180-use-skills-in-claude)). Forskjellen ligger i hva du kan gjøre med dem.

| | Free, Pro og Max | Team | Enterprise |
|---|---|---|---|
| Bruke Anthropics skills og laste opp egne | Ja | Ja | Ja |
| Dele en skill med kolleger | Nei | Ja | Ja, også med grupper |
| Publisere en skill til organisasjonen | Nei | Ja | Ja |
| Eier ruller ut skills til hele organisasjonen | Nei | Ja | Ja |

Deling og publisering på Team og Enterprise styres av eieren, så knappene kan mangle hvis de er slått av hos dere. På Free, Pro og Max slår du på «Code execution and file creation» under Settings > Capabilities, og finner skillene under Customize > Skills. På Team er funksjonen slått på som standard. På Enterprise må en eier slå den på under Organization settings > Plugins & skills. Enterprise kan i tillegg skru på skanning som sjekker opplastede skills for skadelig innhold.

## Skills, prosjekter, instruksjoner og koblinger

Claude har flere måter å huske hvordan du jobber på, og de overlapper litt. Slik skiller Anthropic dem.

- **Prosjekter** gir fast bakgrunnskunnskap som er lastet inn i samtalene i prosjektet. Skills er fremgangsmåter som aktiveres når de trengs, og de virker overalt i Claude.
- **Egne instruksjoner** gjelder alle samtalene dine. Skills hører til én type oppgave og lastes bare når de er relevante.
- **Koblinger (MCP)** gir Claude tilgang til eksterne tjenester og data. Skills lærer Claude hvordan verktøyene skal brukes, og de to kan brukes sammen.

Vår tommelfingerregel er enkel. Det som gjelder hver gang du snakker med Claude, hører hjemme i instruksjonene. Det som er en oppskrift på én bestemt jobb, hører hjemme i en skill.

## Slik lager du din første skill

Det finnes to veier.

**Gjennom en samtale.** Åpne en ny samtale og skriv noe som «Jeg vil lage en skill for kvartalsrapporter». Last opp maler og eksempler på arbeid du er fornøyd med. Claude stiller spørsmål om fremgangsmåten, lager SKILL.md-filen og pakker alt i en skillfil du kan lagre ([kilde](https://support.claude.com/en/articles/12599426-how-to-create-a-skill-with-claude-through-conversation)). Her trenger du ingen teknisk bakgrunn.

**Skriv filene selv.** En skill er en mappe med minst én SKILL.md-fil. Fila starter med et lite hode der `name` og `description` er påkrevd, og under kommer instruksjonene i vanlig Markdown ([kilde](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills)). Et enkelt eksempel ser slik ut.

```markdown
---
name: ukesrapport-prosjekt
description: Lager ukesrapport for prosjekter i fast format. Bruk når brukeren ber om ukesrapport, statusrapport eller ukesoppsummering for et prosjekt.
---

# Ukesrapport

## Struktur
1. Status i tre setninger
2. Fremdrift mot plan, i en tabell
3. Avvik og risiko, med ansvarlig
4. Plan for neste uke

## Regler
- Skriv på bokmål, kort og konkret
- Tall hentes fra vedlagte regneark og anslås ikke
- Tall som mangler, markeres med «mangler»
```

Pakk mappen som en ZIP-fil med mappen som rot, og sørg for at mappenavnet er det samme som navnet på skillen. Last den opp under Customize > Skills ved å klikke «+», velge «Create skill» og deretter «Upload a skill». Test etterpå med flere ulike forespørsler, og se i Claudes tankerekke om skillen faktisk blir lastet.

Anthropics egne råd er å holde hver skill til én arbeidsflyt, starte med ren tekst før du legger til skript, ta med eksempler på inndata og ønsket resultat, og teste etter hver større endring. Vi ville startet med en jobb som gjøres hver uke og som ingen gleder seg til. Ukesrapporten, tilbudsmalen eller referatet etter prosjektmøtet.

## Sikkerhet

En skill kan inneholde kode og instruksjoner som styrer hva Claude gjør. Anthropic peker på to hovedrisikoer, prompt injection og datalekkasje, for eksempel gjennom skadelig kode i pakker ([kilde](https://support.claude.com/en/articles/12512180-use-skills-in-claude)). Rådene er konkrete.

- installer bare skills fra kilder du stoler på
- les filene i skillen før du slår den på, også når en kollega har delt den
- se etter instruksjoner som ber Claude koble seg til ukjente nettsteder
- ikke legg API-nøkler eller passord inn i en skill

Utviklerdokumentasjonen sier det enda kortere. Behandle en skill som programvare du installerer. For bedrifter i olje og gass, der kontrakter og brønndata ofte er konfidensielle, bør noen eie den vurderingen før teamet begynner å dele skills med hverandre.

## Skills utenfor chatten

Skills er ikke låst til chatvinduet.

- **Claude Code** støtter egne skills som mapper med en SKILL.md-fil, lagret i `~/.claude/skills/` for deg selv eller `.claude/skills/` for et prosjekt. Les mer i [guiden vår om Claude Code for bedrifter](/blogg/claude-code-for-bedrifter).
- **Microsoft 365.** Skills du har slått på, er også tilgjengelige i Claude-tilleggene for Excel, PowerPoint, Word og Outlook.
- **Cowork.** Deling av skills virker både i chat og i Cowork. På Pro, Max og Team kan du også ta opp skjermen mens du gjør en oppgave og la Claude foreslå en skill ut fra opptaket. Det gjelder foreløpig bare Claude for Mac, ikke Windows. Les mer i [guiden vår om Claude Cowork](/blogg/claude-cowork-norsk-guide).
- **Åpen standard.** Formatet er publisert som en åpen standard på [agentskills.io](https://agentskills.io), så en skill kan også brukes av andre verktøy som tar standarden i bruk.

## Vil dere komme raskere i gang?

Den første skillen er rask å lage. Å finne ut hvilke skills som faktisk sparer teamet tid, tar lengre. Vi holder [bedriftsinterne kurs i Claude](/kurs) der teamet lager skills for egne arbeidsflyter, med datasikkerhet som første tema. Vi hjelper også bedrifter med å [sette opp Claude med kjøreregler og skills](/oppsett) slik at hele teamet jobber likt.
