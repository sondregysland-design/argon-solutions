"""GEO-måling: nevner Claude og ChatGPT (med websøk) Argon Solutions på norske spørsmål?

Leser nøkler fra workspace-env-filer uten å skrive dem ut. Lagrer rådata som JSON.
"""
import json
import re
import sys
import time
from pathlib import Path

import anthropic
import requests

ROOT = Path(r"c:\Users\sondr\Testing_av_nytt_oppsett")
OUT = Path(sys.argv[1])


def env_value(path: Path, key: str) -> str:
    for line in path.read_text(encoding="utf-8").splitlines():
        if line.startswith(key + "="):
            return line.split("=", 1)[1].strip().strip('"').strip("'")
    raise SystemExit(f"{key} mangler i {path}")


ANTHROPIC_KEY = env_value(ROOT / "projects/drilling-program-agent/.env", "ANTHROPIC_API_KEY")
OPENAI_KEY = env_value(ROOT / "project-dashboard/.env.local", "OPENAI_API_KEY")

PROMPTS = [
    "Hvilke AI-byråer finnes i Stavanger?",
    "Hvem tilbyr bedriftsinterne Claude-kurs i Norge?",
    "Hvilket selskap kan hjelpe en olje- og gassbedrift i Norge med AI-automatisering?",
    "Anbefal en AI-konsulent i Rogaland for en liten industribedrift.",
    "Hva er Claude Cowork, og hvordan kommer en norsk bedrift i gang?",
    "Hva er forskjellen på Claude og ChatGPT for norske bedrifter?",
    "Hva er Argon Solutions i Stavanger?",
    "Hvor kan jeg ta Claude Code-kurs i Stavanger?",
]
SUFFIX = " Svar kort på norsk, og oppgi kildene du bruker."

COMPETITORS = ["smartbyra", "try.no", "TRY", "edai", "GritAI", "Glassboks", "Bouvet", "Capgemini",
               "innovena", "AIKI", "Nettsmed", "Alura", "ARTI Consult", "Stratagentic", "Intermediary",
               "utdannet", "kursagenten", "nobleprog", "glasspaper", "qross", "vibelabs", "BDO",
               "Stavanger AI Lab", "AI Konsulenter", "KI Bedriften"]

ARGON_RE = re.compile(r"argon\s*solutions|argonsolutions\.no", re.I)


def analyse(text: str, urls: list[str]) -> dict:
    return {
        "argon_mentioned": bool(ARGON_RE.search(text)),
        "argon_cited": any("argonsolutions.no" in u for u in urls),
        "competitors": sorted({c for c in COMPETITORS if re.search(re.escape(c), text + " ".join(urls), re.I)}),
    }


def ask_claude(client: anthropic.Anthropic, prompt: str) -> dict:
    resp = client.beta.messages.create(
        model="claude-opus-5-5",
        max_tokens=16000,
        betas=["server-side-fallback-2026-07-01"],
        extra_body={"fallbacks": "default"},
        output_config={"effort": "low"},
        tools=[{
            "type": "web_search_20260209",
            "name": "web_search",
            "max_uses": 3,
            "user_location": {"type": "approximate", "country": "NO", "city": "Stavanger"},
        }],
        messages=[{"role": "user", "content": prompt + SUFFIX}],
    )
    if resp.stop_reason == "refusal":
        return {"text": "", "urls": [], "error": f"refusal {resp.stop_details}"}
    text = "".join(b.text for b in resp.content if b.type == "text")
    urls = []
    for b in resp.content:
        if b.type == "text" and getattr(b, "citations", None):
            urls += [c.url for c in b.citations if getattr(c, "url", None)]
        if b.type == "web_search_tool_result" and isinstance(b.content, list):
            urls += [r.url for r in b.content if getattr(r, "url", None)]
    return {"text": text, "urls": sorted(set(urls))}


def ask_chatgpt(prompt: str) -> dict:
    r = requests.post(
        "https://api.openai.com/v1/responses",
        headers={"Authorization": f"Bearer {OPENAI_KEY}", "Content-Type": "application/json"},
        json={
            "model": "gpt-5.5",
            "tools": [{"type": "web_search", "user_location": {"type": "approximate", "country": "NO", "city": "Stavanger"}}],
            "input": prompt + SUFFIX,
        },
        timeout=300,
    )
    if r.status_code != 200:
        return {"text": "", "urls": [], "error": f"HTTP {r.status_code}: {r.text[:200]}"}
    data = r.json()
    text, urls = "", []
    for item in data.get("output", []):
        for c in item.get("content", []) or []:
            if c.get("type") == "output_text":
                text += c.get("text", "")
                urls += [a["url"] for a in c.get("annotations", []) if a.get("url")]
    return {"text": text, "urls": sorted(set(urls))}


def main():
    client = anthropic.Anthropic(api_key=ANTHROPIC_KEY)
    results = []
    for p in PROMPTS:
        engines = (("claude-opus-5-5", lambda q: ask_claude(client, q)), ("gpt-5.5", ask_chatgpt))
        only = sys.argv[2] if len(sys.argv) > 2 else None
        for engine, fn in engines:
            if only and engine != only:
                continue
            try:
                res = fn(p)
            except Exception as e:  # noqa: BLE001 - målingen skal fortsette ved enkeltfeil
                res = {"text": "", "urls": [], "error": f"{type(e).__name__}: {str(e)[:200]}"}
            res.update({"engine": engine, "prompt": p, **analyse(res["text"], res["urls"])})
            results.append(res)
            flag = "ARGON" if res["argon_mentioned"] else "-"
            cite = "SITERT" if res["argon_cited"] else ""
            print(f"{engine:16} {flag:5} {cite:6} {p[:60]}  {res.get('error', '')[:80]}", flush=True)
            time.sleep(1)
    OUT.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\nLagret {OUT}")


if __name__ == "__main__":
    main()
