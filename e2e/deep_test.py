"""Deep interactive testing of Argon CRM - test all pages, forms, interactions, and edge cases."""
import sys, os
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
from playwright.sync_api import sync_playwright

BASE = "https://argon-crm-live.vercel.app"
OUT = "c:/Users/sondr/Testing_av_nytt_oppsett/argon-solutions/e2e/recon_output"
os.makedirs(OUT, exist_ok=True)

issues = []

def log_issue(severity, page, description):
    issues.append({"severity": severity, "page": page, "description": description})
    print(f"  ⚠ [{severity}] {description}")

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(viewport={"width": 1280, "height": 900})

    # Capture console errors globally
    console_errors = []

    page = context.new_page()
    page.on("console", lambda msg: console_errors.append(f"[{msg.type}] {page.url}: {msg.text}") if msg.type == "error" else None)

    # ========================================
    # TEST 1: Dashboard (/)
    # ========================================
    print("\n========== TEST 1: Dashboard ==========")
    resp = page.goto(f"{BASE}/", wait_until="networkidle", timeout=30000)
    print(f"Status: {resp.status}")

    # Check pipeline columns
    columns = page.locator("h3").all_text_contents()
    print(f"Pipeline columns: {columns}")
    expected_cols = ["Ny", "Kontaktet", "Kvalifisert", "Kunde"]
    for col in expected_cols:
        if col not in columns:
            log_issue("HIGH", "/", f"Missing pipeline column: {col}")

    # Check lead cards exist
    lead_cards = page.locator("a[href^='/leads/']").count()
    print(f"Lead cards: {lead_cards}")
    if lead_cards == 0:
        log_issue("MEDIUM", "/", "No lead cards visible on dashboard")

    # Check "Slett alle" button visibility
    slett_btn = page.locator("button:has-text('Slett alle')")
    if slett_btn.is_visible():
        log_issue("HIGH", "/", "'Slett alle' (Delete all) button is visible without confirmation - dangerous!")

    # Check for status change buttons
    kontaktet_btns = page.locator("button:has-text('Kontaktet')").count()
    print(f"'Kontaktet →' buttons: {kontaktet_btns}")

    # Check lead card content formatting
    first_lead = page.locator("a[href^='/leads/']").first
    if first_lead.count() > 0:
        lead_text = first_lead.text_content()
        # Check if company name and location are properly separated
        if lead_text and "\n" not in lead_text and len(lead_text) > 100:
            log_issue("MEDIUM", "/", f"Lead card text appears to run together without proper spacing: {lead_text[:80]}...")

    # ========================================
    # TEST 2: Lead Detail (/leads/1)
    # ========================================
    print("\n========== TEST 2: Lead Detail ==========")
    resp = page.goto(f"{BASE}/leads/1", wait_until="networkidle", timeout=30000)
    print(f"Status: {resp.status}")

    # Check all sections present
    h2_sections = page.locator("h2").all_text_contents()
    print(f"Sections: {h2_sections}")
    expected_sections = ["Bedriftsinformasjon", "Om bedriften", "Prosjekt & Salg", "Aktivitetslogg"]
    for sec in expected_sections:
        if sec not in h2_sections:
            log_issue("MEDIUM", "/leads/1", f"Missing section: {sec}")

    # Check company info fields
    page.screenshot(path=f"{OUT}/lead_detail_full.png", full_page=True)

    # Check for "Send e-post" button
    email_btn = page.locator("button:has-text('Send e-post')")
    if email_btn.count() > 0:
        print("  'Send e-post' button found")

    # Check activity log note input
    note_input = page.locator("input[placeholder='Legg til et notat...']")
    if note_input.count() > 0:
        print("  Note input found")
    else:
        log_issue("MEDIUM", "/leads/1", "Note input field missing")

    # Check for broken links/empty fields
    info_labels = page.eval_on_selector_all(
        "dt, label, th",
        "els => els.map(e => ({label: e.textContent.trim(), next: e.nextElementSibling ? e.nextElementSibling.textContent.trim() : 'NO_SIBLING'}))"
    )
    for info in info_labels:
        if info.get('next') in ['', 'undefined', 'null', 'NO_SIBLING']:
            log_issue("LOW", "/leads/1", f"Empty value for field: {info['label']}")

    # Test non-existent lead
    print("\n  Testing non-existent lead...")
    resp = page.goto(f"{BASE}/leads/99999", wait_until="networkidle", timeout=15000)
    print(f"  Status for /leads/99999: {resp.status}")
    has_error = page.locator("text=ikke funnet, text=not found, text=404, text=finnes ikke").count()
    if resp.status == 200 and has_error == 0:
        page_text = page.locator("h1").text_content() if page.locator("h1").count() > 0 else ""
        log_issue("HIGH", "/leads/99999", f"Non-existent lead returns 200 with no error. H1: {page_text}")
    page.screenshot(path=f"{OUT}/lead_nonexistent.png", full_page=True)

    # ========================================
    # TEST 3: Produkter (/produkter)
    # ========================================
    print("\n========== TEST 3: Produkter ==========")
    resp = page.goto(f"{BASE}/produkter", wait_until="networkidle", timeout=30000)
    print(f"Status: {resp.status}")

    # Check table headers
    headers = page.eval_on_selector_all("th", "els => els.map(e => e.textContent.trim())")
    print(f"Table headers: {headers}")
    expected_headers = ["Navn", "Beskrivelse", "Enhet", "Pris"]
    for h in expected_headers:
        if h not in headers:
            log_issue("MEDIUM", "/produkter", f"Missing table header: {h}")

    # Check product data
    rows = page.eval_on_selector_all("tbody tr", "els => els.map(e => e.textContent.trim())")
    print(f"Product rows: {len(rows)}")
    for row in rows:
        if "XX" in row:
            log_issue("HIGH", "/produkter", f"Placeholder price 'XX kr' found in product data: {row[:60]}")
        if "oversitkt" in row.lower():
            log_issue("MEDIUM", "/produkter", f"Typo in product description: 'oversitkt' should be 'oversikt': {row[:60]}")

    # Check "+ Nytt produkt" button
    new_product_btn = page.locator("button:has-text('Nytt produkt')")
    if new_product_btn.count() == 0:
        log_issue("MEDIUM", "/produkter", "'+ Nytt produkt' button missing")

    # ========================================
    # TEST 4: Tilbud (/tilbud)
    # ========================================
    print("\n========== TEST 4: Tilbud ==========")
    resp = page.goto(f"{BASE}/tilbud", wait_until="networkidle", timeout=30000)
    print(f"Status: {resp.status}")

    # Check filter buttons
    filter_texts = page.locator("button").all_text_contents()
    expected_filters = ["Alle", "Utkast", "Sendt", "Akseptert", "Avvist"]
    for f in expected_filters:
        if f not in filter_texts:
            log_issue("MEDIUM", "/tilbud", f"Missing filter button: {f}")

    # Check empty state message
    empty_msg = page.locator("text=Ingen tilbud enda").count()
    if empty_msg > 0:
        print("  Empty state message shown correctly")

    # Test filter tabs
    for filter_name in ["Utkast", "Sendt", "Akseptert", "Avvist", "Alle"]:
        btn = page.locator(f"button:has-text('{filter_name}')").first
        if btn.count() > 0:
            btn.click()
            page.wait_for_timeout(500)
            print(f"  Filter '{filter_name}' clicked OK")

    # ========================================
    # TEST 5: Søk bedrifter (/sok)
    # ========================================
    print("\n========== TEST 5: Søk bedrifter ==========")
    resp = page.goto(f"{BASE}/sok", wait_until="networkidle", timeout=30000)
    print(f"Status: {resp.status}")

    # Check form fields
    navn_input = page.locator("input[name='navn']")
    if navn_input.count() == 0:
        log_issue("HIGH", "/sok", "Name search input missing")

    kommune_select = page.locator("select[name='kommunenummer']")
    if kommune_select.count() == 0:
        log_issue("HIGH", "/sok", "Kommune dropdown missing")

    # Test search with a known company
    print("  Testing search...")
    page.fill("input[name='navn']", "Equinor")
    page.click("button:has-text('Søk')")
    page.wait_for_timeout(3000)
    page.screenshot(path=f"{OUT}/sok_equinor.png", full_page=True)

    # Check for results or errors
    results_text = page.text_content("body")
    if "Ingen resultater" in results_text:
        print("  Search returned no results for 'Equinor'")
    elif "feil" in results_text.lower() or "error" in results_text.lower():
        log_issue("HIGH", "/sok", "Search returned an error")
    else:
        # Count result rows
        result_rows = page.locator("table tbody tr, .result-card, [class*='result']").count()
        print(f"  Search results: {result_rows}")

    # Test empty search
    page.fill("input[name='navn']", "")
    page.click("button:has-text('Søk')")
    page.wait_for_timeout(2000)
    page.screenshot(path=f"{OUT}/sok_empty.png", full_page=True)

    # ========================================
    # TEST 6: Auto-scrape (/scrape-leads)
    # ========================================
    print("\n========== TEST 6: Auto-scrape ==========")
    resp = page.goto(f"{BASE}/scrape-leads", wait_until="networkidle", timeout=30000)
    print(f"Status: {resp.status}")

    # Check form fields
    fields = {
        "navn": "input[name='navn']",
        "kommunenummer": "select[name='kommunenummer']",
        "naeringskode": "select[name='naeringskode']",
        "fraAntallAnsatte": "input[name='fraAntallAnsatte']",
        "tilAntallAnsatte": "input[name='tilAntallAnsatte']",
        "maxLeads": "select[name='maxLeads']"
    }
    for name, selector in fields.items():
        if page.locator(selector).count() == 0:
            log_issue("HIGH", "/scrape-leads", f"Missing field: {name}")
        else:
            print(f"  Field '{name}' found")

    # Check "Start scraping" button
    start_btn = page.locator("button:has-text('Start scraping')")
    if start_btn.count() == 0:
        log_issue("HIGH", "/scrape-leads", "'Start scraping' button missing")

    # ========================================
    # TEST 7: Jobber (/jobber)
    # ========================================
    print("\n========== TEST 7: Jobber ==========")
    resp = page.goto(f"{BASE}/jobber", wait_until="networkidle", timeout=30000)
    print(f"Status: {resp.status}")
    page.screenshot(path=f"{OUT}/jobber.png", full_page=True)

    # Check for job listings
    job_rows = page.locator("table tbody tr").count()
    print(f"Job rows: {job_rows}")

    # Check "Kjør nå" buttons
    run_btns = page.locator("button:has-text('Kjør nå')").count()
    print(f"'Kjør nå' buttons: {run_btns}")

    # ========================================
    # TEST 8: Oppfølging (/oppfolging)
    # ========================================
    print("\n========== TEST 8: Oppfølging ==========")
    resp = page.goto(f"{BASE}/oppfolging", wait_until="networkidle", timeout=30000)
    print(f"Status: {resp.status}")

    empty_msg = page.locator("text=Ingen ventende oppfølginger").count()
    if empty_msg > 0:
        print("  Empty state shown correctly")

    # ========================================
    # TEST 9: Navigation & Sidebar
    # ========================================
    print("\n========== TEST 9: Navigation ==========")
    page.goto(f"{BASE}/", wait_until="networkidle", timeout=30000)

    nav_links = page.eval_on_selector_all("aside a, nav a", "els => els.map(e => ({text: e.textContent.trim(), href: e.getAttribute('href')}))")
    print(f"Nav links: {len(nav_links)}")
    for link in nav_links:
        print(f"  {link['text']:20s} -> {link['href']}")

    # Test each nav link
    for link in nav_links:
        href = link.get('href', '')
        if href and href.startswith('/'):
            resp = page.goto(f"{BASE}{href}", wait_until="domcontentloaded", timeout=15000)
            status = resp.status if resp else 0
            if status != 200:
                log_issue("HIGH", href, f"Navigation link returns {status}")
            else:
                print(f"  ✓ {href} -> {status}")

    # ========================================
    # TEST 10: Responsive / Mobile
    # ========================================
    print("\n========== TEST 10: Mobile viewport ==========")
    mobile_page = context.new_page()
    mobile_page.set_viewport_size({"width": 375, "height": 812})
    mobile_page.goto(f"{BASE}/", wait_until="networkidle", timeout=30000)
    mobile_page.screenshot(path=f"{OUT}/mobile_dashboard.png", full_page=True)

    # Check if sidebar is hidden/collapsed on mobile
    sidebar_visible = mobile_page.locator("aside").is_visible() if mobile_page.locator("aside").count() > 0 else False
    print(f"Sidebar visible on mobile: {sidebar_visible}")
    if sidebar_visible:
        # Check if it overlaps content
        aside_box = mobile_page.locator("aside").bounding_box()
        if aside_box and aside_box['width'] > 200:
            log_issue("MEDIUM", "/", "Sidebar takes too much space on mobile viewport")

    # Check mobile navigation
    hamburger = mobile_page.locator("button[aria-label*='menu'], button[aria-label*='Menu'], .hamburger, [class*='burger']").count()
    print(f"Hamburger menu: {hamburger > 0}")

    mobile_page.close()

    # ========================================
    # TEST 11: API Routes
    # ========================================
    print("\n========== TEST 11: API Routes ==========")

    # Test search API directly
    api_page = context.new_page()
    try:
        resp = api_page.goto(f"{BASE}/api/brreg?navn=Equinor", wait_until="networkidle", timeout=15000)
        print(f"  /api/brreg?navn=Equinor -> {resp.status}")
        if resp.status == 200:
            body = api_page.text_content("body")
            print(f"  Response length: {len(body)}")
    except Exception as e:
        print(f"  /api/brreg error: {e}")

    # Test leads API
    try:
        resp = api_page.goto(f"{BASE}/api/leads", wait_until="networkidle", timeout=15000)
        print(f"  /api/leads -> {resp.status}")
    except Exception as e:
        print(f"  /api/leads error: {e}")

    # Test common API patterns
    api_routes = ["/api/leads", "/api/leads/1", "/api/produkter", "/api/tilbud", "/api/scrape", "/api/jobber"]
    for route in api_routes:
        try:
            resp = api_page.goto(f"{BASE}{route}", wait_until="domcontentloaded", timeout=10000)
            status = resp.status if resp else 0
            print(f"  {route:25s} -> {status}")
        except Exception as e:
            print(f"  {route:25s} -> ERROR: {str(e)[:50]}")

    api_page.close()

    # ========================================
    # TEST 12: Performance & Accessibility
    # ========================================
    print("\n========== TEST 12: Performance & A11y ==========")
    page.goto(f"{BASE}/", wait_until="networkidle", timeout=30000)

    # Check for alt text on images
    images_without_alt = page.eval_on_selector_all("img:not([alt]), img[alt='']", "els => els.map(e => e.src)")
    if images_without_alt:
        log_issue("MEDIUM", "/", f"Images without alt text: {len(images_without_alt)}")

    # Check for form labels
    inputs_without_labels = page.eval_on_selector_all(
        "input:not([type='hidden']):not([aria-label]):not([id])",
        "els => els.map(e => e.outerHTML.substring(0, 80))"
    )
    if inputs_without_labels:
        log_issue("LOW", "global", f"Inputs without proper labels: {len(inputs_without_labels)}")

    # Check meta tags
    meta_desc = page.locator("meta[name='description']").count()
    meta_viewport = page.locator("meta[name='viewport']").count()
    if meta_desc == 0:
        log_issue("LOW", "/", "Missing meta description")
    if meta_viewport == 0:
        log_issue("MEDIUM", "/", "Missing viewport meta tag")

    # ========================================
    # TEST 13: Console errors summary
    # ========================================
    print("\n========== Console Errors ==========")
    if console_errors:
        for err in console_errors:
            log_issue("HIGH", "console", err)
    else:
        print("  No console errors detected")

    # ========================================
    # SUMMARY
    # ========================================
    print("\n" + "=" * 60)
    print("TEST SUMMARY")
    print("=" * 60)

    high = [i for i in issues if i["severity"] == "HIGH"]
    medium = [i for i in issues if i["severity"] == "MEDIUM"]
    low = [i for i in issues if i["severity"] == "LOW"]

    print(f"\nTotal issues: {len(issues)}")
    print(f"  HIGH:   {len(high)}")
    print(f"  MEDIUM: {len(medium)}")
    print(f"  LOW:    {len(low)}")

    if high:
        print("\n--- HIGH SEVERITY ---")
        for i in high:
            print(f"  [{i['page']}] {i['description']}")

    if medium:
        print("\n--- MEDIUM SEVERITY ---")
        for i in medium:
            print(f"  [{i['page']}] {i['description']}")

    if low:
        print("\n--- LOW SEVERITY ---")
        for i in low:
            print(f"  [{i['page']}] {i['description']}")

    browser.close()
    print("\nDone!")
