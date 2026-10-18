#!/usr/bin/env bash
# Sjekker at det private dagskurset er borte og at bedriftskurset står igjen.
# Kjøres mot en lokal prod-build (npx next start -p 3311) eller mot prod.
BASE="${1:-http://localhost:3311}"
fail=0
ok()   { echo "  OK    $1"; }
bad()  { echo "  FEIL  $1"; fail=1; }

echo "== Redirects (skal gi 308 til /kurs) =="
for p in /kurs/bedrift /kurs/v2 /kurs/claude-kurs-stavanger /kurs/vibe-coding-kurs-stavanger; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$BASE$p")
  loc=$(curl -s -o /dev/null -w "%{redirect_url}" "$BASE$p")
  case "$code" in
    301|308) [[ "$loc" == */kurs ]] && ok "$p -> $code $loc" || bad "$p redirecter til $loc" ;;
    *) bad "$p ga status $code" ;;
  esac
done

echo "== Sider som skal svare 200 =="
for p in / /kurs /kurs/ai-kurs-bedrift-stavanger /kurs/claude-code-kurs-stavanger /faq /om-oss /llms.txt /llms-full.txt /sitemap.xml; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$BASE$p")
  [ "$code" = "200" ] && ok "$p 200" || bad "$p ga status $code"
done

echo "== Ingen spor av privat dagskurs =="
for p in / /kurs /kurs/ai-kurs-bedrift-stavanger /kurs/claude-code-kurs-stavanger /faq /om-oss /kontakt /blogg/norske-ai-byraer-2026 /en/ai-agency-stavanger /llms.txt /llms-full.txt /sitemap.xml; do
  # Negasjonene ("holder ikke åpne kurs") er med vilje, og skal ikke telle som treff.
  body=$(curl -s "$BASE$p" | grep -v -e "does not run open courses" -e "no open courses" -e "holder ikke åpne kurs" -e "There are no open courses")
  for needle in "5 900" "5,900" "Dagskurs for private" "Åpen kohort" "Open cohort" "åpne kohorter" "pamelding" "vibe-coding-kurs" "claude-kurs-stavanger" "kurs/bedrift" "åpent dagskurs" "åpne kurs" "open course" "Meld deg på"; do
    if echo "$body" | grep -qi -- "$needle"; then bad "$p inneholder \"$needle\""; fi
  done
done
[ $fail -eq 0 ] && ok "ingen treff på privat-kurs-strenger"

echo "== Bedriftskurset er synlig =="
body=$(curl -s "$BASE/kurs")
echo "$body" | grep -q "Argon Industri" && ok "/kurs nevner Argon Industri" || bad "/kurs mangler Argon Industri"
echo "$body" | grep -q "40 000" && ok "/kurs viser pris fra 40 000 kr" || bad "/kurs mangler prisen"

echo
[ $fail -eq 0 ] && echo "ALT OK" || echo "NOE FEILET"
exit $fail
