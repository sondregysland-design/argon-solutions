/**
 * Mobilsjekk for argonsolutions.no.
 *
 * Kjorer iPhone 14-emulering mot en lokal prod-build og maaler det som faktisk
 * rammer mobilbrukeren: vannrett sidescroll, trykkflater under 44px, hoyden paa
 * mobilmenyen naar undermenyene er utvidet, og overforte bytes per rute.
 *
 * Frittstaaende med vilje. playwright.config.ts i rota peker paa CRM-appen og
 * skal ikke roeres.
 *
 *   node audit/mobile-check.mjs <label> [baseUrl]
 *
 * Resultat havner i audit/runs/<label>/ som metrics.json, metrics.tsv og shots/.
 */
import { chromium, devices } from "@playwright/test";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const LABEL = process.argv[2] || "run";
const BASE = (process.argv[3] || process.env.AUDIT_BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const OUT = path.join("audit", "runs", LABEL);
const SHOTS = path.join(OUT, "shots");

const ROUTES = [
  { key: "root", path: "/" },
  { key: "kurs", path: "/kurs" },
  { key: "kurs-bedrift", path: "/kurs/bedrift" },
  { key: "kontakt", path: "/kontakt" },
  { key: "blogg-post", path: "/blogg/claude-code-oppsett-teams" },
  { key: "tjenester", path: "/tjenester" },
];

/**
 * Maaler i nettleseren. Kjorer som en enkelt evaluate slik at alle tall stammer
 * fra samme layout-pass.
 */
function measure() {
  const doc = document.documentElement;
  // Maa maales mot clientWidth, ikke innerWidth. Ved sidescroll vokser
  // innerWidth sammen med innholdet, saa differansen blir 0 og feilen usynlig.
  const overflow = doc.scrollWidth - doc.clientWidth;

  // Finn elementet som stikker lengst ut, ellers er sidescroll umulig aa spore.
  let widest = null;
  if (overflow > 1) {
    let max = 0;
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      const right = r.right + window.scrollX;
      if (right > max && r.width > 0) {
        max = right;
        widest = {
          right: Math.round(right),
          tag: el.tagName.toLowerCase(),
          cls: (el.className && String(el.className).slice(0, 80)) || "",
        };
      }
    }
  }

  const small = [];
  for (const el of document.querySelectorAll("a, button, input, select, textarea, [role=button]")) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue; // skjult, ikke en trykkflate
    if (r.width < 44 || r.height < 44) {
      small.push({
        tag: el.tagName.toLowerCase(),
        w: Math.round(r.width),
        h: Math.round(r.height),
        text: (el.textContent || "").trim().slice(0, 40),
        cls: (el.className && String(el.className).slice(0, 60)) || "",
      });
    }
  }

  return {
    scrollWidth: doc.scrollWidth,
    clientWidth: doc.clientWidth,
    innerWidth: window.innerWidth,
    overflow,
    widest,
    smallTapTargets: small,
    domNodes: document.querySelectorAll("*").length,
    h1Count: document.querySelectorAll("h1").length,
  };
}

/** Menyen er den storste enkeltrisikoen paa mobil, saa den maales for seg. */
async function measureMenu(page) {
  const toggle = page.locator('button[aria-label="Meny"]');
  if ((await toggle.count()) === 0) return null;

  await toggle.click();
  await page.waitForTimeout(150);

  // Bare en undermeny kan staa aapen om gangen (mobileOpenMenu er en enkelt
  // verdi i Navbar.tsx), saa verste tilfelle er den med flest barn. Vi maaler
  // hver for seg og beholder den hoyeste.
  // Bare synlige treff: desktop-navet og spraakvelgeren ligger i DOM-en med
  // aria-expanded selv naar de er skjult av media queries.
  const snapshot = async () => page.evaluate(measureMenuState);
  let worst = await snapshot();
  worst.expanded = "ingen";

  const chevrons = page.locator("nav button[aria-expanded]");
  for (let i = 0; i < (await chevrons.count()); i++) {
    const btn = chevrons.nth(i);
    if (!(await btn.isVisible())) continue;
    const label = await btn.getAttribute("aria-label");
    // "Meny" er selve toggelen (et klikk lukker alt), "Velg språk" er
    // spraakvelgeren. Bare undermeny-chevronene skal utvides her.
    if (label === "Velg språk" || label === "Meny") continue;
    await btn.click();
    await page.waitForTimeout(120);
    const state = await snapshot();
    state.expanded = label || `#${i}`;

    // Utenfor viewporten er ikke det samme som utilgjengelig. Scroll panelet
    // til bunns og tell hvor mange lenker som fortsatt ikke lar seg naa.
    state.unreachableAfterScroll = await page.evaluate(() => {
      const nav = document.querySelector("nav");
      let panel = null;
      for (const el of nav.querySelectorAll("*")) {
        if (el.scrollHeight > el.clientHeight + 4) {
          const cs = getComputedStyle(el);
          if (cs.overflowY === "auto" || cs.overflowY === "scroll") {
            panel = el;
            break;
          }
        }
      }
      if (!panel) {
        // Ingen scrollflate: alt utenfor viewporten er permanent utilgjengelig.
        return [...nav.querySelectorAll("a")]
          .filter((a) => {
            const r = a.getBoundingClientRect();
            return r.top < 0 || r.bottom > window.innerHeight;
          })
          .map((a) => (a.textContent || "").trim().slice(0, 30));
      }
      panel.scrollTop = panel.scrollHeight;
      return [...nav.querySelectorAll("a")]
        .filter((a) => {
          const r = a.getBoundingClientRect();
          return r.bottom > window.innerHeight + 1 || r.top < -1;
        })
        .map((a) => (a.textContent || "").trim().slice(0, 30))
        // Lenker over toppen av panelet naas ved aa scrolle opp igjen.
        .filter((_, idx, arr) => arr.length > 0 && idx >= 0)
        .filter((t) => t.length > 0)
        .slice(0, 20);
    });
    // Bare det som er utenfor BADE ved topp- og bunnscroll er utilgjengelig.
    const atTop = state.unreachableLinks;
    state.trulyUnreachable = state.unreachableAfterScroll.filter((t) => atTop.includes(t));

    if (state.navHeight > worst.navHeight) worst = state;
  }
  return worst;
}

/** Kjores i nettleseren fra measureMenu. */
function measureMenuState() {
  const nav = document.querySelector("nav");
    const navRect = nav.getBoundingClientRect();
    const links = [...nav.querySelectorAll("a")].map((a) => {
      const r = a.getBoundingClientRect();
      return {
        text: (a.textContent || "").trim().slice(0, 30),
        top: Math.round(r.top),
        bottom: Math.round(r.bottom),
        // Naabar = enten synlig naa, eller inne i et panel som kan scrolles til
        inViewport: r.top >= 0 && r.bottom <= window.innerHeight,
      };
    });
    // Finn et scrollbart panel inne i nav. Uten et slikt er alt utenfor
    // viewporten permanent utilgjengelig naar nav er sticky top-0.
    let scrollablePanel = null;
    for (const el of nav.querySelectorAll("*")) {
      if (el.scrollHeight > el.clientHeight + 4) {
        const cs = getComputedStyle(el);
        if (cs.overflowY === "auto" || cs.overflowY === "scroll") {
          scrollablePanel = { clientH: el.clientHeight, scrollH: el.scrollHeight };
          break;
        }
      }
    }
    return {
      navHeight: Math.round(navRect.height),
      viewportHeight: window.innerHeight,
      navSharePct: Math.round((navRect.height / window.innerHeight) * 100),
      totalLinks: links.length,
      linksOutsideViewport: links.filter((l) => !l.inViewport).length,
      unreachableLinks: links.filter((l) => !l.inViewport).map((l) => l.text),
      scrollablePanel,
      bodyScrollLocked: getComputedStyle(document.body).overflow === "hidden",
    };
}

const results = [];
mkdirSync(SHOTS, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  ...devices["iPhone 14"],
  reducedMotion: "reduce", // Reveal.tsx og hero-rise skal ikke gi flakete bilder
});

for (const route of ROUTES) {
  const page = await context.newPage();

  let bytes = 0;
  let bytesJs = 0;
  let bytesImg = 0;
  let requests = 0;
  const consoleErrors = [];

  page.on("console", (m) => {
    if (m.type() === "error") consoleErrors.push(m.text().slice(0, 120));
  });
  page.on("response", async (res) => {
    requests++;
    try {
      const buf = await res.body();
      const type = res.headers()["content-type"] || "";
      bytes += buf.length;
      if (type.includes("javascript")) bytesJs += buf.length;
      if (type.startsWith("image/")) bytesImg += buf.length;
    } catch {
      /* redirects og aborterte svar har ingen body */
    }
  });

  await page.goto(BASE + route.path, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  // Trigger scroll-reveal slik at fullPage ikke fanger pre-reveal-tilstand.
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(250);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(150);

  const m = await page.evaluate(measure);

  await page.screenshot({ path: path.join(SHOTS, `${route.key}__atf.png`) });
  await page.screenshot({ path: path.join(SHOTS, `${route.key}__full.png`), fullPage: true });

  let menu = null;
  if (route.key === "root") {
    try {
      menu = await measureMenu(page);
      await page.screenshot({ path: path.join(SHOTS, "root__menu-expanded.png") });
    } catch (err) {
      // En brekt meny skal ikke velte hele maalingen, den skal rapporteres.
      menu = { error: String(err).slice(0, 200) };
    }
  }

  results.push({
    route: route.path,
    key: route.key,
    ...m,
    smallTapCount: m.smallTapTargets.length,
    requests,
    bytes,
    bytesJs,
    bytesImg,
    consoleErrors,
    menu,
  });

  const flag = m.overflow > 1 ? `SIDESCROLL +${m.overflow}px` : "ok";
  console.log(
    `${route.path.padEnd(34)} ${flag.padEnd(20)} tap<44: ${String(m.smallTapTargets.length).padStart(3)}  js: ${(bytesJs / 1024).toFixed(0)}kB  total: ${(bytes / 1024).toFixed(0)}kB`
  );
}

await browser.close();

writeFileSync(path.join(OUT, "metrics.json"), JSON.stringify({ label: LABEL, base: BASE, results }, null, 2));

const tsv = [
  ["route", "overflow_px", "small_tap_targets", "requests", "bytes_total", "bytes_js", "bytes_img", "dom_nodes", "h1", "console_errors"].join("\t"),
  ...results.map((r) =>
    [r.route, r.overflow, r.smallTapCount, r.requests, r.bytes, r.bytesJs, r.bytesImg, r.domNodes, r.h1Count, r.consoleErrors.length].join("\t")
  ),
].join("\n");
writeFileSync(path.join(OUT, "metrics.tsv"), tsv + "\n");

const menu = results.find((r) => r.menu)?.menu;
if (menu) {
  console.log(
    `\nMobilmeny utvidet: nav ${menu.navHeight}px av ${menu.viewportHeight}px (${menu.navSharePct}%), ` +
      `${menu.linksOutsideViewport}/${menu.totalLinks} lenker utenfor viewport, ` +
      `scrollbart panel: ${menu.scrollablePanel ? "ja" : "NEI"}, body-laas: ${menu.bodyScrollLocked ? "ja" : "NEI"}`
  );
  const stuck = menu.trulyUnreachable ?? menu.unreachableLinks;
  console.log(
    stuck.length ? `UTILGJENGELIGE lenker: ${stuck.join(", ")}` : "Alle menylenker naabare (evt. ved scroll i panelet)"
  );
}
console.log(`\nSkrevet til ${OUT}`);
