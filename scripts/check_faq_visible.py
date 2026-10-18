# -*- coding: utf-8 -*-
"""Sjekker at FAQPage-schema faktisk finnes som synlig tekst på siden.

Google ignorerer FAQPage-markering som ikke er synlig i DOM-en. Sjekken kan
ikke gjøres med sed, fordi HTML-en er minifisert til én linje og en grådig
script-stripping da spiser hele body. Derfor python.

Bruk: python scripts/check_faq_visible.py <base-url>

Henter selv alle URL-er fra <base-url>/sitemap.xml.
"""
import json
import re
import sys
import urllib.request

SCRIPT_RE = re.compile(r"<script\b[^>]*>.*?</script>", re.S | re.I)
TAG_RE = re.compile(r"<[^>]+>")


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "argon-seo-check"})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8", "replace")


def questions_in_schema(html):
    out = []
    for m in re.finditer(
        r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', html, re.S
    ):
        try:
            data = json.loads(m.group(1))
        except ValueError:
            continue
        for node in data if isinstance(data, list) else [data]:
            if not isinstance(node, dict):
                continue
            if node.get("@type") != "FAQPage":
                continue
            for q in node.get("mainEntity", []):
                name = q.get("name")
                if name:
                    out.append(name)
    return out


def visible_text(html):
    # Fjern alle script-blokker (inkludert RSC-payloaden), deretter tagger.
    stripped = SCRIPT_RE.sub(" ", html)
    text = TAG_RE.sub(" ", stripped)
    return " ".join(text.split())


def sitemap_paths(base):
    xml = fetch(base + "/sitemap.xml")
    locs = re.findall(r"<loc>([^<]+)</loc>", xml)
    out = []
    for loc in locs:
        path = re.sub(r"^https?://[^/]+", "", loc)
        out.append(path or "/")
    return out


def main():
    base = sys.argv[1].rstrip("/")
    paths = sitemap_paths(base)
    failures = 0
    for p in paths:
        url = base + p
        try:
            html = fetch(url)
        except Exception as exc:  # noqa: BLE001
            print("FEIL  %s kunne ikke hentes: %s" % (p, exc))
            failures += 1
            continue
        qs = questions_in_schema(html)
        if not qs:
            continue
        text = visible_text(html)
        missing = [q for q in qs if " ".join(q.split()) not in text]
        if missing:
            failures += 1
            print("FEIL  %s: %d av %d FAQ-sporsmal mangler synlig" % (p, len(missing), len(qs)))
            for q in missing[:3]:
                print("        mangler: %s" % q)
        else:
            print("  ok  %s (%d sporsmal synlige)" % (p, len(qs)))
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
