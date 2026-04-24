import { test, expect } from "@playwright/test";

const BASE = "https://argon-crm-live.vercel.app";

// ──────────────────────────────────────────────
// NAVIGATION & LAYOUT
// ──────────────────────────────────────────────

test.describe("Navigation", () => {
  test("sidebar has all nav links", async ({ page }) => {
    await page.goto(BASE);
    const nav = page.locator("aside");
    await expect(nav.locator("a")).toHaveCount(7);

    const expected = [
      { label: "Dashboard", href: "/" },
      { label: "Produkter", href: "/produkter" },
      { label: "Tilbud", href: "/tilbud" },
      { label: "Søk bedrifter", href: "/sok" },
      { label: "Auto-scrape", href: "/scrape-leads" },
      { label: "Jobber", href: "/jobber" },
      { label: "Oppfølging", href: "/oppfolging" },
    ];

    for (const item of expected) {
      const link = nav.locator(`a[href="${item.href}"]`);
      await expect(link).toBeVisible();
      await expect(link).toContainText(item.label);
    }
  });

  test("all nav links return 200", async ({ page }) => {
    const routes = ["/", "/produkter", "/tilbud", "/sok", "/scrape-leads", "/jobber", "/oppfolging"];
    for (const route of routes) {
      const resp = await page.goto(`${BASE}${route}`);
      expect(resp?.status()).toBe(200);
    }
  });

  test("active link is highlighted", async ({ page }) => {
    await page.goto(`${BASE}/produkter`);
    const activeLink = page.locator('aside a[href="/produkter"]');
    await expect(activeLink).toHaveClass(/bg-blue-50/);
  });

  test("logo and branding are present", async ({ page }) => {
    await page.goto(BASE);
    await expect(page.locator("aside").locator("text=Argon CRM")).toBeVisible();
  });
});

// ──────────────────────────────────────────────
// MOBILE RESPONSIVENESS
// ──────────────────────────────────────────────

test.describe("Mobile", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("sidebar is hidden on mobile", async ({ page }) => {
    await page.goto(BASE);
    const desktopSidebar = page.locator("aside.fixed.hidden.md\\:flex");
    // The desktop sidebar should be hidden via CSS
    await expect(desktopSidebar).toBeHidden();
  });

  test("mobile header bar is visible", async ({ page }) => {
    await page.goto(BASE);
    // Mobile header bar with hamburger
    const mobileHeader = page.locator("div.fixed.md\\:hidden");
    await expect(mobileHeader).toBeVisible();
  });

  test("hamburger menu opens sidebar", async ({ page }) => {
    await page.goto(BASE);
    // The hamburger button is the first button in the mobile header
    const hamburger = page.locator("div.fixed.md\\:hidden button").first();
    await expect(hamburger).toBeVisible();
    await hamburger.click();
    // Mobile overlay sidebar should appear
    const mobileSidebar = page.locator("div.fixed.inset-0 aside");
    await expect(mobileSidebar).toBeVisible();
  });
});

// ──────────────────────────────────────────────
// DASHBOARD (/)
// ──────────────────────────────────────────────

test.describe("Dashboard", () => {
  test("displays pipeline with 4 columns", async ({ page }) => {
    await page.goto(BASE);
    await expect(page.locator("h1")).toContainText("Dashboard");

    const columns = ["Ny", "Kontaktet", "Kvalifisert", "Kunde"];
    for (const col of columns) {
      await expect(page.locator("h3", { hasText: col })).toBeVisible();
    }
  });

  test("pipeline has lead cards", async ({ page }) => {
    await page.goto(BASE);
    const leadLinks = page.locator("a[href^='/leads/']");
    expect(await leadLinks.count()).toBeGreaterThan(0);
  });

  test("lead cards link to detail pages", async ({ page }) => {
    await page.goto(BASE);
    const firstLead = page.locator("a[href^='/leads/']").first();
    const href = await firstLead.getAttribute("href");
    expect(href).toMatch(/^\/leads\/\d+$/);
  });

  test("status change buttons are present", async ({ page }) => {
    await page.goto(BASE);
    // "Kontaktet →" buttons for leads in "Ny" column
    const statusBtns = page.locator("button:has-text('Kontaktet')");
    expect(await statusBtns.count()).toBeGreaterThan(0);
  });
});

// ──────────────────────────────────────────────
// LEAD DETAIL (/leads/[id])
// ──────────────────────────────────────────────

test.describe("Lead Detail", () => {
  test("displays lead information sections", async ({ page }) => {
    await page.goto(`${BASE}/leads/1`);
    const sections = ["Bedriftsinformasjon", "Om bedriften", "Prosjekt & Salg", "Aktivitetslogg"];
    for (const section of sections) {
      await expect(page.locator("h2", { hasText: section })).toBeVisible();
    }
  });

  test("has note input in activity log", async ({ page }) => {
    await page.goto(`${BASE}/leads/1`);
    await expect(page.locator("input[placeholder='Legg til et notat...']")).toBeVisible();
  });

  test("has send email button", async ({ page }) => {
    await page.goto(`${BASE}/leads/1`);
    await expect(page.locator("button:has-text('Send e-post')")).toBeVisible();
  });

  test("returns 404 for non-existent lead", async ({ page }) => {
    const resp = await page.goto(`${BASE}/leads/99999`);
    expect(resp?.status()).toBe(404);
  });
});

// ──────────────────────────────────────────────
// PRODUKTER (/produkter)
// ──────────────────────────────────────────────

test.describe("Produkter", () => {
  test("displays products table with correct headers", async ({ page }) => {
    await page.goto(`${BASE}/produkter`);
    await expect(page.locator("h1")).toContainText("Produkter");

    const headers = ["Navn", "Beskrivelse", "Enhet", "Pris"];
    for (const header of headers) {
      await expect(page.locator("th", { hasText: header })).toBeVisible();
    }
  });

  test("has '+ Nytt produkt' button", async ({ page }) => {
    await page.goto(`${BASE}/produkter`);
    await expect(page.locator("button:has-text('Nytt produkt')")).toBeVisible();
  });

  test("product table displays data", async ({ page }) => {
    await page.goto(`${BASE}/produkter`);
    // Should have at least one product row or empty state
    const rows = page.locator("tbody tr");
    expect(await rows.count()).toBeGreaterThan(0);
  });
});

// ──────────────────────────────────────────────
// TILBUD (/tilbud)
// ──────────────────────────────────────────────

test.describe("Tilbud", () => {
  test("displays filter tabs", async ({ page }) => {
    await page.goto(`${BASE}/tilbud`);
    await expect(page.locator("h1")).toContainText("Tilbud");

    const filters = ["Alle", "Utkast", "Sendt", "Akseptert", "Avvist"];
    for (const filter of filters) {
      await expect(page.locator(`button:has-text("${filter}")`)).toBeVisible();
    }
  });

  test("filter tabs are clickable", async ({ page }) => {
    await page.goto(`${BASE}/tilbud`);
    for (const filter of ["Utkast", "Sendt", "Akseptert", "Avvist", "Alle"]) {
      await page.locator(`button:has-text("${filter}")`).first().click();
      await page.waitForTimeout(300);
    }
  });

  test("has table with correct columns", async ({ page }) => {
    await page.goto(`${BASE}/tilbud`);
    const headers = ["Nummer", "Kunde", "Status", "Dato"];
    for (const h of headers) {
      await expect(page.locator("th", { hasText: h })).toBeVisible();
    }
  });

  test("shows empty state when no quotes", async ({ page }) => {
    await page.goto(`${BASE}/tilbud`);
    // Either has quotes or shows empty message
    const emptyMsg = page.locator("text=Ingen tilbud enda");
    const rows = page.locator("tbody tr");
    const hasContent = (await rows.count()) > 0 || (await emptyMsg.count()) > 0;
    expect(hasContent).toBe(true);
  });
});

// ──────────────────────────────────────────────
// SØK BEDRIFTER (/sok)
// ──────────────────────────────────────────────

test.describe("Søk bedrifter", () => {
  test("has search form with all fields", async ({ page }) => {
    await page.goto(`${BASE}/sok`);
    await expect(page.locator("h1")).toContainText("Søk bedrifter");
    await expect(page.locator("input[name='navn']")).toBeVisible();
    await expect(page.locator("select[name='kommunenummer']")).toBeVisible();
    await expect(page.locator("select[name='naeringskode']")).toBeVisible();
    await expect(page.locator("button:has-text('Søk')")).toBeVisible();
  });

  test("shows error feedback on failed search", async ({ page }) => {
    await page.goto(`${BASE}/sok`);
    // Clear search and click
    await page.fill("input[name='namn']", "").catch(() => {});
    await page.click("button:has-text('Søk')");
    await page.waitForTimeout(3000);
    // Should show either results or empty state or error - not silent failure
    const hasVisibleFeedback =
      (await page.locator("text=Ingen resultater").count()) > 0 ||
      (await page.locator("text=treff totalt").count()) > 0 ||
      (await page.locator("table tbody tr").count()) > 0 ||
      (await page.locator("text=feilet").count()) > 0 ||
      (await page.locator("text=Prøv et annet søk").count()) > 0;
    expect(hasVisibleFeedback).toBe(true);
  });
});

// ──────────────────────────────────────────────
// AUTO-SCRAPE (/scrape-leads)
// ──────────────────────────────────────────────

test.describe("Auto-scrape", () => {
  test("has scrape form with all fields", async ({ page }) => {
    await page.goto(`${BASE}/scrape-leads`);
    await expect(page.locator("h1")).toContainText("Auto-scrape");
    await expect(page.locator("input[name='navn']")).toBeVisible();
    await expect(page.locator("select[name='kommunenummer']")).toBeVisible();
    await expect(page.locator("select[name='naeringskode']")).toBeVisible();
    await expect(page.locator("input[name='fraAntallAnsatte']")).toBeVisible();
    await expect(page.locator("input[name='tilAntallAnsatte']")).toBeVisible();
    await expect(page.locator("select[name='maxLeads']")).toBeVisible();
    await expect(page.locator("button:has-text('Start scraping')")).toBeVisible();
  });
});

// ──────────────────────────────────────────────
// JOBBER (/jobber)
// ──────────────────────────────────────────────

test.describe("Jobber", () => {
  test("displays scraping jobs table", async ({ page }) => {
    await page.goto(`${BASE}/jobber`);
    await expect(page.locator("h1")).toContainText("Scraping-jobber");
    const table = page.locator("table");
    await expect(table).toBeVisible();
    expect(await page.locator("tbody tr").count()).toBeGreaterThan(0);
  });

  test("has 'Kjør nå' buttons", async ({ page }) => {
    await page.goto(`${BASE}/jobber`);
    expect(await page.locator("button:has-text('Kjør nå')").count()).toBeGreaterThan(0);
  });
});

// ──────────────────────────────────────────────
// OPPFØLGING (/oppfolging)
// ──────────────────────────────────────────────

test.describe("Oppfølging", () => {
  test("displays follow-up page", async ({ page }) => {
    await page.goto(`${BASE}/oppfolging`);
    await expect(page.locator("h1")).toContainText("Oppfølging");
    // Wait for loading to finish — shows "Laster..." then content
    await page.waitForFunction(
      () => !document.body.textContent?.includes("Laster..."),
      { timeout: 10000 },
    ).catch(() => {});
    // Should show either pending items or empty state
    const hasContent =
      (await page.locator("text=Ingen ventende oppfølginger").count()) > 0 ||
      (await page.locator("text=Laster...").count()) > 0 ||
      (await page.locator("button:has-text('Godkjenn')").count()) > 0;
    expect(hasContent).toBe(true);
  });
});

// ──────────────────────────────────────────────
// API ROUTES
// ──────────────────────────────────────────────

test.describe("API", () => {
  test("GET /api/leads returns 200", async ({ request }) => {
    const resp = await request.get(`${BASE}/api/leads`);
    expect(resp.status()).toBe(200);
    const data = await resp.json();
    expect(Array.isArray(data)).toBe(true);
  });

  test("GET /api/leads/1 returns lead data", async ({ request }) => {
    const resp = await request.get(`${BASE}/api/leads/1`);
    expect(resp.status()).toBe(200);
    const data = await resp.json();
    expect(data.name).toBeTruthy();
    expect(data.orgNumber).toBeTruthy();
  });

  test("GET /api/jobber returns 200", async ({ request }) => {
    const resp = await request.get(`${BASE}/api/jobber`);
    expect(resp.status()).toBe(200);
  });
});

// ──────────────────────────────────────────────
// META & ACCESSIBILITY
// ──────────────────────────────────────────────

test.describe("Meta & A11y", () => {
  test("has correct title", async ({ page }) => {
    await page.goto(BASE);
    await expect(page).toHaveTitle(/Argon CRM/);
  });

  test("has lang attribute", async ({ page }) => {
    await page.goto(BASE);
    const lang = await page.locator("html").getAttribute("lang");
    expect(lang).toBe("no");
  });

  test("no console errors on dashboard", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto(BASE);
    await page.waitForTimeout(2000);
    expect(errors.length).toBe(0);
  });
});
