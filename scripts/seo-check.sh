#!/usr/bin/env bash
# SEO-regresjonssjekk. Kjøres mot en lokal prod-build eller mot prod.
#   ./scripts/seo-check.sh http://localhost:3178
#   ./scripts/seo-check.sh https://www.argonsolutions.no
#
# Sjekker det som faktisk har rotnet før: status, canonical, meta description,
# JSON-LD, foreldreløse sider og passerte kursdatoer.
set -u
BASE="${1:-http://localhost:3178}"
fail=0

note() { printf '%s\n' "$*"; }
bad()  { printf 'FEIL  %s\n' "$*"; fail=1; }

# Hent alle URL-er fra sitemap og gjør dem om til stier mot BASE.
paths=$(curl -s "$BASE/sitemap.xml" \
  | grep -o '<loc>[^<]*</loc>' \
  | sed 's|<loc>||; s|</loc>||' \
  | sed 's|https://www.argonsolutions.no||' \
  | sed 's|^$|/|')

count=$(printf '%s\n' "$paths" | grep -c . )
note "Sjekker $count URL-er mot $BASE"
note ""

note "== Status, canonical og meta description =="
while read -r p; do
  [ -z "$p" ] && continue
  body=$(curl -s "$BASE$p")
  code=$(curl -s -o /dev/null -w '%{http_code}' "$BASE$p")
  [ "$code" = "200" ] || bad "$p svarer $code"
  printf '%s' "$body" | grep -qi 'rel="canonical"' || bad "$p mangler canonical"
  printf '%s' "$body" | grep -qi 'name="description"' || bad "$p mangler meta description"
  printf '%s' "$body" | grep -q 'application/ld+json' || bad "$p mangler JSON-LD"
done <<< "$paths"
note "  ferdig"
note ""

note "== Passerte kursdatoer =="
today=$(date +%Y-%m-%d)
for u in /kurs /kurs/claude-kurs-stavanger /kurs/vibe-coding-kurs-stavanger /llms.txt /llms-full.txt; do
  for d in $(curl -s "$BASE$u" | grep -o '"startDate":"[0-9-]*"' | sed 's/.*:"//; s/"//'); do
    [[ "$d" < "$today" ]] && bad "$u publiserer passert kursdato $d"
  done
done
note "  ferdig"
note ""

note "== Foreldreløse sider (skal ha minst én intern innlenke) =="
# Sidene som tidligere bare var nåbare via sitemap.
for target in /referanser /kunstig-intelligens /tjenester/ai-automatisering /tjenester/ai-chatbot; do
  hits=0
  while read -r p; do
    [ -z "$p" ] && continue
    [ "$p" = "$target" ] && continue
    if curl -s "$BASE$p" | grep -q "href=\"$target\""; then hits=$((hits+1)); fi
  done <<< "$paths"
  [ "$hits" -eq 0 ] && bad "$target har ingen interne innlenker" || note "  $target: $hits innlenker"
done
note ""

note "== FAQPage-schema uten synlig FAQ =="
# Denne kan ikke gjores i sed: HTML-en er minifisert til en linje, og en gradig
# script-stripping spiser da hele body og gir falske positiver. Derfor python.
if python scripts/check_faq_visible.py "$BASE" | grep -q '^FEIL'; then
  python scripts/check_faq_visible.py "$BASE" | grep '^FEIL' | sed 's/^/  /'
  fail=1
else
  note "  ferdig"
fi
note ""

if [ "$fail" -eq 0 ]; then
  note "Alt grønt."
else
  note "Se FEIL-linjene over."
fi
exit "$fail"
