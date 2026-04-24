"""Check API response formats."""
import sys
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
from playwright.sync_api import sync_playwright
import json

BASE = "https://argon-crm-live.vercel.app"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context()
    page = ctx.new_page()

    # Check /api/leads/1 response format
    resp = page.goto(f"{BASE}/api/leads/1", wait_until="networkidle")
    print(f"GET /api/leads/1 -> {resp.status}")
    body = page.text_content("body")
    try:
        data = json.loads(body)
        print(f"  Keys: {list(data.keys())}")
        print(f"  Data (first 300): {json.dumps(data, indent=2)[:300]}")
    except:
        print(f"  Raw (first 200): {body[:200]}")

    # Check /api/email/pending
    resp = page.goto(f"{BASE}/api/email/pending", wait_until="networkidle")
    print(f"\nGET /api/email/pending -> {resp.status}")
    body = page.text_content("body")
    try:
        data = json.loads(body)
        print(f"  Type: {type(data).__name__}, length: {len(data) if isinstance(data, list) else 'N/A'}")
        print(f"  Data (first 300): {json.dumps(data, indent=2)[:300]}")
    except:
        print(f"  Raw (first 200): {body[:200]}")

    browser.close()
