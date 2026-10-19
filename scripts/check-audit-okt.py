"""Regresjonssjekk for audit-fiksene 2026-10-18.

Bruk: python -I scripts/check-audit-okt.py <base-url>
Sender aldri ekte e-post: API-testene bruker bare honeypot og ugyldige kall.
"""
import json
import re
import sys
import urllib.error
import urllib.request

sys.stdout.reconfigure(encoding="utf-8")
BASE = (sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3317").rstrip("/")
fails = 0


def get(path):
    with urllib.request.urlopen(BASE + path) as r:
        return r.status, {k.lower(): v for k, v in r.headers.items()}, r.read()


def post(path, body, raw=False):
    data = body if raw else json.dumps(body).encode()
    req = urllib.request.Request(BASE + path, data=data, headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req) as r:
            return r.status, r.read().decode()
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode()


def check(name, ok, detail=""):
    global fails
    print(("OK  " if ok else "FEIL") + f"  {name}" + (f"  ({detail})" if detail else ""))
    if not ok:
        fails += 1


def meta(html, prop):
    m = re.search(r'<meta[^>]+(?:property|name)="' + re.escape(prop) + r'"[^>]+content="([^"]*)"', html)
    return m.group(1) if m else None


# 1. Blogg: og:image + twitter:image, og-bildet svarer PNG
for slug in ["claude-cowork-norsk-guide", "custom-crm-automation-energy-norway"]:
    _, _, b = get(f"/blogg/{slug}")
    html = b.decode()
    og, tw = meta(html, "og:image"), meta(html, "twitter:image")
    check(f"og:image /blogg/{slug}", bool(og), og or "mangler")
    check(f"twitter:image /blogg/{slug}", bool(tw))
    if og:
        img_path = re.sub(r"^https?://[^/]+", "", og)
        st, h, _ = get(img_path)
        check(f"og-bilde svarer PNG", st == 200 and "image/png" in h.get("content-type", ""), f"{st} {h.get('content-type')}")

# 2. Én H1 på postene som hadde to
for slug in ["argon-solutions-software-oil-gas-stavanger", "custom-crm-automation-energy-norway",
             "digitale-losninger-energisektoren-stavanger", "software-for-olje-og-gass-hvem-velge"]:
    html = get(f"/blogg/{slug}")[2].decode()
    n = len(re.findall(r"<h1[\s>]", html))
    check(f"én H1 /blogg/{slug}", n == 1, f"{n} H1")

# 3. Ny Cowork-guide: synlig FAQ, i sitemap og llms.txt
html = get("/blogg/claude-cowork-norsk-guide")[2].decode()
check("Cowork-guide har FAQPage", '"FAQPage"' in html)
check("Cowork-guide viser FAQ synlig", "Er Claude Cowork gratis?" in re.sub(r"<script.*?</script>", "", html, flags=re.S))
check("Cowork-guide i sitemap", "claude-cowork-norsk-guide" in get("/sitemap.xml")[2].decode())
check("Cowork-guide i llms.txt", "claude-cowork-norsk-guide" in get("/llms.txt")[2].decode())

# 4. Sikkerhetsheadere
_, h, _ = get("/")
check("Referrer-Policy", h.get("referrer-policy") == "strict-origin-when-cross-origin", h.get("referrer-policy"))
check("Permissions-Policy", "camera=()" in (h.get("permissions-policy") or ""))

# 5. Descriptions ≤ 160 tegn på sidene som var lengst
for p in ["/kurs/claude-code-kurs-stavanger", "/kurs/ai-kurs-bedrift-stavanger", "/kunstig-intelligens", "/en/claude-code-course"]:
    d = meta(get(p)[2].decode(), "description") or ""
    d = d.replace("&amp;", "&")
    check(f"description ≤160 {p}", 0 < len(d) <= 160, f"{len(d)} tegn")

# 6. Personvern uten kurspåmelding, med kundesystem
pv = get("/personvern")[2].decode()
check("personvern uten kurspåmelding", "urspåmelding" not in pv)
check("personvern nevner kundesystem", "kundesystem" in pv)

# 7. Andre tjenester-blokk på tjenestesidene
for s in ["ai-automatisering", "ai-agenter", "claude-code", "ai-chatbot"]:
    html = get(f"/tjenester/{s}")[2].decode()
    check(f"Andre tjenester på /tjenester/{s}", "Andre tjenester" in html and f'href="/tjenester/{s}"' not in html.split("Andre tjenester", 1)[1])

# 8. Kontakt: klikkbar e-post/telefon og anker for fallback
k = get("/kontakt")[2].decode()
check("kontakt: mailto og tel", 'href="mailto:post@argonsolutions.no"' in k and 'href="tel:+4745209979"' in k)
check("kontakt: #melding-anker", 'id="melding"' in k)

# 9. API-validering (sender aldri e-post)
st, b = post("/api/contact", b"{ikke json", raw=True)
check("contact: ugyldig JSON gir 400", st == 400, f"{st} {b[:60]}")
st, b = post("/api/contact", {"name": "Bot", "email": "bot@example.com", "message": "x", "website": "spam.example"})
check("contact: honeypot gir stille 200", st == 200 and "success" in b, f"{st}")
st, b = post("/api/contact", {"name": "A", "email": "a@example.com", "message": "x" * 5001})
check("contact: for lang melding gir 400", st == 400, f"{st}")
st, b = post("/api/book", {"date": "2026-11-02", "time": "10:00", "name": "Bot", "email": "b@example.com", "website": "x"})
check("book: honeypot gir stille 200", st == 200 and "success" in b, f"{st}")
st, b = post("/api/book", {"date": "02.11.2026", "time": "10:00", "name": "A", "email": "a@example.com"})
check("book: ugyldig datoformat gir 400", st == 400, f"{st} {b[:60]}")
st, b = post("/api/book", {"date": "2026-11-02", "time": "10:00", "name": "<b>" * 60, "email": "a@example.com"})
check("book: for langt navn gir 400", st == 400, f"{st} {b[:60]}")

# 10. GEO-tiltak 2026-10-19
html = get("/ai-byra-stavanger")[2].decode()
check("/ai-byra-stavanger har én H1", len(re.findall(r"<h1[\s>]", html)) == 1)
check("/ai-byra-stavanger hreflang til EN",
      re.search(r'<link[^>]+hreflang="en"[^>]+/en/ai-agency-stavanger', html, re.I) is not None)
check("/ai-byra-stavanger FAQ synlig",
      "Hvilke AI-byråer finnes i Stavanger?" in re.sub(r"<script.*?</script>", "", html, flags=re.S))
en = get("/en/ai-agency-stavanger")[2].decode()
check("EN-side hreflang til /ai-byra-stavanger",
      re.search(r'<link[^>]+hreflang="nb-NO"[^>]+/ai-byra-stavanger', en, re.I) is not None)
check("EN-side uten åpne dagskurs", "open one-day" not in en)
ind = get("/tjenester/ai-for-industribedrifter")[2].decode()
check("industriside har FAQPage", '"FAQPage"' in ind)
check("kalkulator på /tjenester/ai-automatisering", "kostnadskalkulator" in get("/tjenester/ai-automatisering")[2].decode())
sm = get("/sitemap.xml")[2].decode()
check("nye sider i sitemap", "/ai-byra-stavanger" in sm and "/tjenester/ai-for-industribedrifter" in sm)
full = get("/llms-full.txt")[2].decode()
check("llms-full uten åpne dagskurs", "open day course" not in full and "open Claude day" not in full)
check("footer lenker til /ai-byra-stavanger", 'href="/ai-byra-stavanger"' in get("/")[2].decode())

print(f"\n{'Alt grønt' if fails == 0 else f'{fails} feil'}")
sys.exit(1 if fails else 0)
