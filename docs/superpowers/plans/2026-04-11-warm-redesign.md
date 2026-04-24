# Warm Claude-Inspired Redesign

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align the Argon Solutions website with the warm, Claude-inspired design system documented in DESIGN.md — replacing the current cool blue tech aesthetic with warm parchment tones, terracotta accents, serif headlines, and ring-based shadows.

**Architecture:** Pure CSS/class refactoring. Update Tailwind theme variables in globals.css, swap font stack in layout.tsx, then update every component and page to use warm classes. No structural/logic changes.

**Tech Stack:** Next.js 16, Tailwind CSS 4, Google Fonts (Inter + Playfair Display as Georgia substitute)

---

### Task 1: Update Theme Variables (globals.css)

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace the @theme block with warm palette**

Replace the entire `@theme { ... }` block with:

```css
@theme {
  /* Primary - Terracotta */
  --color-primary: #c96442;
  --color-primary-light: #d97757;
  --color-primary-dark: #b05535;

  /* Surfaces */
  --color-parchment: #f5f4ed;
  --color-ivory: #faf9f5;
  --color-surface: #f5f4ed;
  --color-sand: #e8e6dc;
  --color-dark-surface: #30302e;
  --color-near-black: #141413;

  /* Text */
  --color-text: #141413;
  --color-text-light: #5e5d59;
  --color-text-muted: #87867f;
  --color-text-on-dark: #faf9f5;
  --color-warm-silver: #b0aea5;

  /* Borders */
  --color-border-cream: #f0eee6;
  --color-border-warm: #e8e6dc;
  --color-border-dark: #30302e;

  /* Ring shadows */
  --color-ring-warm: #d1cfc5;
  --color-ring-deep: #c2c0b6;

  /* Fonts */
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", Georgia, "Times New Roman", serif;
}
```

- [ ] **Step 2: Update prose styles for warm palette**

Replace `.prose a` color with `var(--color-primary)` and `.prose hr` border with `var(--color-border-warm)`. These already reference --color-primary so they'll auto-update.

- [ ] **Step 3: Verify build compiles**

Run: `cd c:/Users/sondr/Testing_av_nytt_oppsett/argon-solutions && npx next build --no-lint 2>&1 | tail -5`
Expected: Build succeeds (or at minimum no CSS errors)

---

### Task 2: Update Layout & Font Stack (layout.tsx)

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Add Playfair Display font import alongside Inter**

Add `import { Playfair_Display } from "next/font/google"` and configure it:
```typescript
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["500"], variable: "--font-playfair" });
```

- [ ] **Step 2: Update body classes**

Change body className to use parchment background:
```tsx
<body className={`${inter.className} ${playfair.variable} bg-parchment text-text antialiased`}>
```

---

### Task 3: Update Logo (Logo.tsx)

**Files:**
- Modify: `src/components/Logo.tsx`

- [ ] **Step 1: Change logo colors from blue to terracotta/warm**

- SVG path fill: `#1E40AF` → `#c96442`
- Ellipse stroke: `#3B82F6` → `#d97757`
- Circle fills: `#3B82F6` → `#d97757`
- Text `text-primary` stays (will auto-update)
- `text-text-light` stays (will auto-update)

---

### Task 4: Update Navbar (Navbar.tsx)

**Files:**
- Modify: `src/components/Navbar.tsx`

- [ ] **Step 1: Apply warm styling to navbar**

- `bg-white/80` → `bg-parchment/80`
- `border-gray-100` → `border-border-cream`
- Mobile menu border: same change
- All `text-text-light` and `text-primary` refs auto-update via theme

---

### Task 5: Update Hero (Hero.tsx)

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Apply warm, editorial hero styling**

Key changes:
- Background: `bg-white` → `bg-parchment`
- Remove blue gradient div entirely
- Headline h1: add `font-serif` class (Playfair Display), change to `font-medium` (weight 500)
- Remove `<span className="block text-primary">` wrapper — make entire headline warm black
- Subtitle: `text-lg` → `text-xl`, line-height 1.6
- Primary CTA: keep `bg-primary` (now terracotta), add ring shadow style
- Secondary CTA: `border-gray-200` → `border-border-warm`, `hover:bg-surface` → `hover:bg-sand`

---

### Task 6: Update ServiceCard (ServiceCard.tsx)

**Files:**
- Modify: `src/components/ServiceCard.tsx`

- [ ] **Step 1: Apply warm card styling**

- Container: `border-gray-100 bg-white` → `border-border-cream bg-ivory`
- Shadow: `shadow-sm hover:shadow-md` → ring shadow approach: `shadow-[0_0_0_1px_var(--color-border-cream)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)]`
- Icon bg: `bg-blue-50` → `bg-sand`

---

### Task 7: Update ProductCard (ProductCard.tsx)

**Files:**
- Modify: `src/components/ProductCard.tsx`

- [ ] **Step 1: Apply warm card styling**

- Container: `border-gray-100 bg-white` → `border-border-cream bg-ivory`
- Shadow: same ring approach as ServiceCard
- Tag badges: `bg-blue-50 text-primary` → `bg-sand text-primary` (auto-updates to terracotta)

---

### Task 8: Update AutomationCard (AutomationCard.tsx)

**Files:**
- Modify: `src/components/AutomationCard.tsx`

- [ ] **Step 1: Apply warm card styling**

- Container: `border-gray-100 bg-white` → `border-border-cream bg-ivory`
- Icon bg: `bg-blue-50` → `bg-sand`

---

### Task 9: Update Homepage Sections (page.tsx)

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add dark/light section alternation**

- Services section: `bg-surface` stays (now parchment)
- Products section: `bg-white` → `bg-ivory`
- Automations section: `bg-surface` stays
- Stats section: `bg-white` → `bg-ivory`
- Headings: add `font-serif font-medium` for section headings
- CTA section: `bg-primary` stays (now terracotta), fix `text-blue-100` → `text-primary-light/80`, `hover:bg-blue-50` → `hover:bg-ivory`

- [ ] **Step 2: Add a dark CTA section**

Change CTA section to use dark palette per DESIGN.md alternation:
- `bg-primary` → `bg-near-black`
- Heading: `text-white` → `text-text-on-dark font-serif font-medium`
- Subtitle: use `text-warm-silver`
- Button: `bg-white text-primary` → `bg-primary text-text-on-dark` (terracotta CTA on dark)

---

### Task 10: Update Tjenester Page

**Files:**
- Modify: `src/app/tjenester/page.tsx`

- [ ] **Step 1: Apply warm typography and colors**

- Heading: add `font-serif font-medium`
- Sub-headings (h2): add `font-serif font-medium`
- Check icons: `text-primary` auto-updates
- AI Agent illustration: `from-blue-50 to-indigo-50` → `from-sand to-parchment`
- Blue borders in illustration: `border-blue-200` → `border-border-warm`, `bg-blue-50` → `bg-sand`

---

### Task 11: Update Om Oss Page

**Files:**
- Modify: `src/app/om-oss/page.tsx`

- [ ] **Step 1: Apply warm palette**

- Headings: add `font-serif font-medium`
- `bg-surface` stays (now parchment)
- Value cards: `border-gray-100` → `border-border-cream`
- `text-primary` auto-updates

---

### Task 12: Update Kontakt Page

**Files:**
- Modify: `src/app/kontakt/page.tsx`

- [ ] **Step 1: Apply warm palette**

- Headings: add `font-serif font-medium`
- `border-gray-200 pt-16` → `border-border-warm pt-16`
- `text-primary-light` → `text-primary`
- `from-primary/20` → auto-updates
- Booking card: `bg-white border-gray-100` → `bg-ivory border-border-cream`
- Response time box: `bg-surface` auto-updates

---

### Task 13: Update ContactForm

**Files:**
- Modify: `src/components/ContactForm.tsx`

- [ ] **Step 1: Apply warm form styling**

- Input borders: `border-gray-200` → `border-border-warm`
- Focus ring: keep `focus:border-primary focus:ring-primary` (auto-updates)
- Submit button: auto-updates via `bg-primary`
- Success state: keep green (semantic color, appropriate)
- Error state: keep red (semantic color, appropriate)

---

### Task 14: Update BookingSection & BookingCalendar

**Files:**
- Modify: `src/components/BookingSection.tsx`
- Modify: `src/components/BookingCalendar.tsx`

- [ ] **Step 1: Update BookingSection warm styling**

- Input borders: `border-gray-200` → `border-border-warm`
- Time slot buttons: `border-gray-200` → `border-border-warm`, `hover:border-primary-light` stays
- Error/success states: keep semantic colors

- [ ] **Step 2: Update BookingCalendar warm styling**

- Navigation hover: `hover:bg-gray-100` → `hover:bg-sand`
- Day cells: `text-gray-300` → `text-text-muted`
- Keep primary selection styling (auto-updates)

---

### Task 15: Update Footer (Footer.tsx)

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Apply warm footer - consider dark variant**

Option A (warm light): `border-gray-100 bg-surface` → `border-border-cream bg-ivory`
Option B (dark per DESIGN.md alternation): `bg-near-black` with light text

Go with Option A for consistency, update border-t: `border-gray-200` → `border-border-warm`

---

### Task 16: Update Blog Prose Styles

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Update prose hr border color**

Change `.prose hr { border-color: #e2e8f0; }` → `.prose hr { border-color: var(--color-border-warm); }`

---

### Task 17: Visual Verification

- [ ] **Step 1: Run dev server and verify**

Run: `cd c:/Users/sondr/Testing_av_nytt_oppsett/argon-solutions && npm run dev`
Check: Homepage loads with warm parchment background, terracotta CTAs, serif headlines
