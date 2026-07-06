# Argon Solutions SEO Overhaul — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure argonsolutions.no to capture high-volume SEO keywords (Claude Code 8,100/mo, agentic AI 590/mo, AI tjenester 70/mo, AI byrå 30/mo) through dedicated pages, homepage messaging updates, new blog content, and local SEO signals.

**Architecture:** Next.js 16 App Router with file-based routing and markdown blog posts. Each new service gets its own route under `/tjenester/[slug]`. Blog posts are markdown files in `src/content/blog/`. All pages are server components unless interactivity is needed. Existing patterns (metadata exports, schema.org JSON-LD, Playfair headings, Tailwind styling) are followed exactly.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, gray-matter + remark for blog

---

## File Structure

### New files to create:
- `src/app/tjenester/claude-code/page.tsx` — Dedicated Claude Code service page
- `src/app/tjenester/ai-strategi/page.tsx` — AI Strategy/Consulting service page
- `src/app/tjenester/skreddersydd-software/page.tsx` — Dedicated custom software page
- `src/app/tjenester/systemintegrasjon/page.tsx` — Dedicated system integration page
- `src/app/tjenester/ai-agenter/page.tsx` — Dedicated AI agents page
- `src/app/en/ai-agency-stavanger/page.tsx` — English landing page
- `src/content/blog/claude-code-for-bedrifter.md` — Blog post #1
- `src/content/blog/agentic-ai-i-praksis.md` — Blog post #2
- `src/content/blog/ai-tjenester-norske-bedrifter.md` — Blog post #3
- `src/content/blog/hvordan-velge-ai-byraa.md` — Blog post #4
- `src/content/blog/ai-strategi-2026.md` — Blog post #5
- `src/content/blog/claude-code-oppsett-teams.md` — Blog post #6

### Files to modify:
- `src/components/Hero.tsx` — Update H1 and description for AI positioning
- `src/app/layout.tsx` — Update meta description and schema.org
- `src/app/tjenester/page.tsx` — Restructure as overview linking to sub-pages
- `src/app/produkter/page.tsx` — Add keyword-rich intro copy
- `src/app/om-oss/page.tsx` — Add AI authority section + Stavanger SEO
- `src/components/Navbar.tsx` — Add Tjenester dropdown or sub-links
- `src/components/Footer.tsx` — Add AI positioning + Stavanger
- `src/app/sitemap.ts` — Add new routes

---

## Task 1: Update Homepage H1 + Meta Description

**Files:**
- Modify: `src/components/Hero.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update Hero H1**

Change `src/components/Hero.tsx` H1 from:
```tsx
Skreddersydde softwareløsninger
<span className="block text-primary">for energisektoren</span>
```
To:
```tsx
AI-tjenester og skreddersydd software
<span className="block text-primary">for norsk energisektor</span>
```

- [ ] **Step 2: Update Hero description**

Change the `<p>` below the H1 from:
```
Argon Solutions bygger skreddersydde AI- og softwareløsninger for
små og mellomstore bedrifter i olje og gass. Fra CRM og
prosjektstyring til systemintegrasjon og AI-agenter — vi
skreddersyr verktøyet dere trenger. Første måneden gratis.
```
To:
```
Argon Solutions er et AI-byrå i Stavanger. Vi leverer AI-tjenester,
Claude Code-oppsett, og skreddersydd software for energisektoren.
Fra CRM og prosjektstyring til AI-agenter — vi skreddersyr
verktøyet dere trenger. Første måneden gratis.
```

- [ ] **Step 3: Update layout.tsx meta description**

Change `siteDescription` in `src/app/layout.tsx` to:
```ts
const siteDescription =
  "Argon Solutions er et AI-byrå i Stavanger. Vi leverer AI-tjenester, Claude Code-oppsett, og skreddersydd software for energisektoren. Fra AI-agenter og systemintegrasjon til CRM — vi bygger det dere trenger.";
```

- [ ] **Step 4: Update layout.tsx title**

Change the default title to:
```ts
default: "Argon Solutions — AI-byrå i Stavanger | AI-tjenester og skreddersydd software",
```
Also update `openGraph.title` and `twitter.title` to match.

- [ ] **Step 5: Update schema.org description and knowsAbout**

Update `jsonLd.description` to match new `siteDescription`. Add "AI-tjenester", "AI-byrå Stavanger", "Claude Code oppsett" to `knowsAbout` array.

- [ ] **Step 6: Verify build**

```bash
cd argon-solutions && npm run build
```

- [ ] **Step 7: Commit**

```bash
git add src/components/Hero.tsx src/app/layout.tsx
git commit -m "feat: update homepage H1 and meta for AI-byrå + AI-tjenester positioning"
```

---

## Task 2: Create Dedicated /tjenester/claude-code Page

**Files:**
- Create: `src/app/tjenester/claude-code/page.tsx`

- [ ] **Step 1: Create the Claude Code service page**

Create `src/app/tjenester/claude-code/page.tsx` — a full dedicated page targeting "Claude Code" (8,100/mo). Structure:

1. Metadata targeting "Claude Code", "Claude Code oppsett", "Claude Code bedrift", "AI operativsystem", "AI-byrå Stavanger"
2. Schema.org Service markup
3. Breadcrumb: Tjenester / Claude Code
4. H1: "Claude Code for bedrifter"
5. Section: "Hva er Claude Code?" — explanation of CLI tool
6. Section: "Hvorfor bedrifter trenger et AI-operativsystem" — 4 cards (Skills, MCP-servere, CLAUDE.md/hooks, Team-oppsett)
7. Section: "Opplæringspakker" — 4 tiers (Intro, Interactive, Interactive+, Team Setup)
8. Section: "Konsulenttjenester" — Custom Setup, Skill-utvikling, MCP-servere, Agent-arkitektur
9. CTA: "Book en demo"

Use server component. Follow existing page patterns (Playfair headings, Tailwind classes, rounded-xl cards).

- [ ] **Step 2: Verify build**

```bash
cd argon-solutions && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/app/tjenester/claude-code/page.tsx
git commit -m "feat: add dedicated /tjenester/claude-code page targeting 8,100/mo keyword"
```

---

## Task 3: Create Blog Post #1 — Claude Code for bedrifter

**Files:**
- Create: `src/content/blog/claude-code-for-bedrifter.md`

- [ ] **Step 1: Write the blog post**

Create markdown file with frontmatter:
- title: "Claude Code for bedrifter: Mer enn bare et kodeverktøy"
- keywords: Claude Code, Claude Code bedrift, AI-operativsystem, Claude Code oppsett, AI-verktøy, Anthropic Claude, AI-byrå Stavanger
- date: 2026-04-26

Sections: Hva er Claude Code?, Hvorfor er dette relevant for bedrifter? (skills, MCP, CLAUDE.md/hooks), Hvem bruker det?, Slik kommer du i gang, CTA.

- [ ] **Step 2: Verify build**
- [ ] **Step 3: Commit**

---

## Task 4: Create Blog Post #2 — Agentic AI i praksis

**Files:**
- Create: `src/content/blog/agentic-ai-i-praksis.md`

- [ ] **Step 1: Write the blog post**

Frontmatter:
- title: "Agentic AI i praksis: Slik bygger vi autonome AI-agenter"
- keywords: agentic AI, AI-agenter, autonom AI, AI automatisering, AI-byrå, AI-tjenester Stavanger
- date: 2026-04-25

Sections: Hva er agentic AI?, Fra chatbot til agent, Hvordan vi bygger AI-agenter (Playwright, Claude, Orkestrering), Praktiske bruksområder, Er det riktig for deg?, CTA.

- [ ] **Step 2: Commit**

---

## Task 5: Create Remaining 4 Blog Posts

**Files:**
- Create: `src/content/blog/ai-tjenester-norske-bedrifter.md`
- Create: `src/content/blog/hvordan-velge-ai-byraa.md`
- Create: `src/content/blog/ai-strategi-2026.md`
- Create: `src/content/blog/claude-code-oppsett-teams.md`

- [ ] **Step 1: Create "AI-tjenester for norske bedrifter" (target: AI tjenester 70/mo)**
- [ ] **Step 2: Create "Hvordan velge riktig AI-byrå" (target: AI byrå 30/mo)**
- [ ] **Step 3: Create "AI-strategi for 2026" (target: AI strategi 20/mo)**
- [ ] **Step 4: Create "Claude Code oppsett for teams" (target: Claude Code setup 20/mo)**
- [ ] **Step 5: Commit all blog posts**

---

## Task 6: Restructure /tjenester as Overview + Create Sub-pages

**Files:**
- Modify: `src/app/tjenester/page.tsx`
- Create: `src/app/tjenester/skreddersydd-software/page.tsx`
- Create: `src/app/tjenester/systemintegrasjon/page.tsx`
- Create: `src/app/tjenester/ai-agenter/page.tsx`
- Create: `src/app/tjenester/ai-strategi/page.tsx`

- [ ] **Step 1: Rewrite /tjenester as hub page**

Replace service details with card grid linking to sub-pages. Keep "Slik kommer du i gang" and FAQ sections. Update metadata to target "AI tjenester". H1: "AI-tjenester og software". Badge "Mest etterspurt" on Claude Code card.

- [ ] **Step 2: Create /tjenester/skreddersydd-software page**

Expand from existing content. Breadcrumb, features, use cases, CTA.

- [ ] **Step 3: Create /tjenester/systemintegrasjon page**

Expand from existing content. Include AI report system illustration reference.

- [ ] **Step 4: Create /tjenester/ai-agenter page**

Target "agentic AI". Expand from existing content.

- [ ] **Step 5: Create /tjenester/ai-strategi page**

NEW page targeting "AI strategi" + "AI rådgivning". Sections: AI readiness, workflow analysis, ROI modeling, roadmap, ongoing advisory.

- [ ] **Step 6: Verify build**
- [ ] **Step 7: Commit**

---

## Task 7: Update Navbar with Service Sub-links

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Add Tjenester dropdown**

Desktop: hover dropdown listing sub-pages. Mobile: indented sub-items. Style: bg-white border-gray-100 shadow-lg rounded-xl.

- [ ] **Step 2: Verify build**
- [ ] **Step 3: Commit**

---

## Task 8: Update Products Page with Keyword Copy

**Files:**
- Modify: `src/app/produkter/page.tsx`

- [ ] **Step 1: Update intro copy**

Replace description paragraph with keyword-rich version mentioning Claude Code and AI-tjenester.

- [ ] **Step 2: Commit**

---

## Task 9: Update Om Oss with AI Authority + Stavanger SEO

**Files:**
- Modify: `src/app/om-oss/page.tsx`

- [ ] **Step 1: Add AI-operativsystem section** after "Hvem vi er"
- [ ] **Step 2: Update meta description** with AI-byrå and AI-tjenester
- [ ] **Step 3: Update "Bransje" in Nøkkelfakta** to "AI-tjenester og software for energisektoren"
- [ ] **Step 4: Commit**

---

## Task 10: Create English Landing Page

**Files:**
- Create: `src/app/en/ai-agency-stavanger/page.tsx`

- [ ] **Step 1: Create English page** targeting "AI agency" (1,000/mo)

Sections: H1 "AI Agency in Stavanger", What we do (4 service cards), Why Argon Solutions?, CTA.

- [ ] **Step 2: Commit**

---

## Task 11: Update Sitemap + Footer

**Files:**
- Modify: `src/app/sitemap.ts`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Add new routes to sitemap** (claude-code priority 0.9, others 0.8, English 0.7)
- [ ] **Step 2: Update Footer description** with AI-byrå positioning
- [ ] **Step 3: Commit**

---

## Task 12: Update Layout Breadcrumb + Final Verification

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Add new pages to breadcrumb JSON-LD**
- [ ] **Step 2: Full build verification** (`npm run build`)
- [ ] **Step 3: Run dev server and verify all pages**
- [ ] **Step 4: Commit**
