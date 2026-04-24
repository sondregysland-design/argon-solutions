"""Reconnaissance script to discover the CRM app structure."""
import sys, os
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
from playwright.sync_api import sync_playwright

OUT = "c:/Users/sondr/Testing_av_nytt_oppsett/argon-solutions/e2e/recon_output"
os.makedirs(OUT, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 900})

    # 1. Homepage
    print("--- Homepage ---")
    page.goto("https://argon-crm-live.vercel.app/", wait_until="networkidle", timeout=30000)
    page.screenshot(path=f"{OUT}/homepage.png", full_page=True)
    print(f"Title: {page.title()}")
    print(f"URL: {page.url}")

    # Collect all links
    links = page.eval_on_selector_all("a[href]", "els => els.map(e => ({text: e.textContent.trim(), href: e.href}))")
    print(f"\nLinks found: {len(links)}")
    for link in links:
        print(f"  {link['text'][:50]:50s} -> {link['href']}")

    # Collect all buttons
    buttons = page.eval_on_selector_all("button", "els => els.map(e => ({text: e.textContent.trim(), type: e.type, disabled: e.disabled}))")
    print(f"\nButtons found: {len(buttons)}")
    for btn in buttons:
        print(f"  {btn['text'][:60]:60s} type={btn['type']} disabled={btn['disabled']}")

    # Collect all inputs
    inputs = page.eval_on_selector_all("input, textarea, select", "els => els.map(e => ({tag: e.tagName, type: e.type, name: e.name, placeholder: e.placeholder, id: e.id}))")
    print(f"\nInputs found: {len(inputs)}")
    for inp in inputs:
        print(f"  <{inp['tag']}> type={inp['type']} name={inp['name']} placeholder={inp['placeholder']} id={inp['id']}")

    # Collect nav items
    nav = page.eval_on_selector_all("nav a, nav button, [role='navigation'] a", "els => els.map(e => ({text: e.textContent.trim(), href: e.href || ''}))")
    print(f"\nNav items: {len(nav)}")
    for n in nav:
        print(f"  {n['text'][:40]:40s} -> {n['href']}")

    # Check for login/auth
    print(f"\nPage content length: {len(page.content())}")

    # Check if there's a login page or redirect
    has_login = page.locator("text=Logg inn").count() + page.locator("text=Login").count() + page.locator("text=Sign in").count()
    print(f"Login elements found: {has_login}")

    # Look for sidebar/dashboard elements
    sidebar = page.locator("aside, [role='complementary'], nav.sidebar, .sidebar").count()
    print(f"Sidebar elements: {sidebar}")

    # Look for tables
    tables = page.locator("table").count()
    print(f"Tables: {tables}")

    # Look for headings
    headings = page.eval_on_selector_all("h1, h2, h3", "els => els.map(e => ({tag: e.tagName, text: e.textContent.trim().substring(0, 80)}))")
    print(f"\nHeadings:")
    for h in headings:
        print(f"  <{h['tag']}> {h['text']}")

    # Try common CRM routes
    routes_to_check = [
        "/dashboard", "/contacts", "/leads", "/deals", "/pipeline",
        "/settings", "/login", "/auth", "/signin", "/register",
        "/customers", "/companies", "/tasks", "/calendar",
        "/api/health", "/kunder", "/oppgaver", "/innstillinger"
    ]

    print("\n--- Route discovery ---")
    for route in routes_to_check:
        url = f"https://argon-crm-live.vercel.app{route}"
        resp = page.goto(url, wait_until="domcontentloaded", timeout=10000)
        status = resp.status if resp else "no response"
        final_url = page.url
        redirected = " (REDIRECTED)" if final_url != url else ""
        title = page.title()
        print(f"  {route:25s} -> {status} {title[:40]}{redirected}")
        if status == 200 and final_url == url:
            page.screenshot(path=f"{OUT}/route_{route.strip('/').replace('/', '_')}.png", full_page=True)

    browser.close()
    print("\nReconnaissance complete!")
