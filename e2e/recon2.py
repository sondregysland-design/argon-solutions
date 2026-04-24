"""Deep recon of all CRM pages."""
import sys, os
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
from playwright.sync_api import sync_playwright

OUT = "c:/Users/sondr/Testing_av_nytt_oppsett/argon-solutions/e2e/recon_output"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 900})

    pages_to_check = [
        ("/produkter", "produkter"),
        ("/tilbud", "tilbud"),
        ("/sok", "sok"),
        ("/scrape-leads", "scrape_leads"),
        ("/jobber", "jobber"),
        ("/oppfolging", "oppfolging"),
        ("/leads/1", "lead_detail"),
    ]

    for route, name in pages_to_check:
        url = f"https://argon-crm-live.vercel.app{route}"
        print(f"\n=== {route} ===")
        try:
            resp = page.goto(url, wait_until="networkidle", timeout=20000)
            print(f"Status: {resp.status if resp else 'no response'}")
            print(f"Title: {page.title()}")
            page.screenshot(path=f"{OUT}/{name}.png", full_page=True)

            # Headings
            headings = page.eval_on_selector_all("h1, h2, h3", "els => els.map(e => `<${e.tagName}> ${e.textContent.trim().substring(0, 80)}`)")
            for h in headings:
                print(f"  {h}")

            # Inputs/forms
            inputs = page.eval_on_selector_all("input, textarea, select", "els => els.map(e => `<${e.tagName}> type=${e.type} name=${e.name} placeholder='${e.placeholder}'`)")
            if inputs:
                print(f"  Inputs ({len(inputs)}):")
                for inp in inputs:
                    print(f"    {inp}")

            # Buttons
            buttons = page.eval_on_selector_all("button", "els => els.map(e => e.textContent.trim().substring(0, 60))")
            if buttons:
                print(f"  Buttons ({len(buttons)}):")
                for btn in buttons:
                    if btn:
                        print(f"    [{btn}]")

            # Tables
            tables = page.locator("table").count()
            if tables:
                print(f"  Tables: {tables}")
                rows = page.eval_on_selector_all("table tr", "els => els.length")
                print(f"  Table rows: {rows}")

            # Error messages
            errors = page.locator("text=Error, text=error, text=feil, .error, [role='alert']").count()
            if errors:
                print(f"  ⚠ Error elements: {errors}")

            # Console errors
        except Exception as e:
            print(f"  ERROR: {e}")

    # Check console errors on homepage
    print("\n=== Console errors check ===")
    console_messages = []
    page.on("console", lambda msg: console_messages.append(f"[{msg.type}] {msg.text}") if msg.type in ("error", "warning") else None)
    page.goto("https://argon-crm-live.vercel.app/", wait_until="networkidle", timeout=20000)
    page.wait_for_timeout(2000)
    for msg in console_messages:
        print(f"  {msg}")
    if not console_messages:
        print("  No console errors/warnings")

    browser.close()
    print("\nDeep recon complete!")
