# Feature Requirements — E-07: Landing Page Brand & Content

> **Epic:** E-07 — Landing Page Brand & Content
> **Release:** R1 — Landing Live
> **Epic Status:** To Do
> **Assignee:** team-hitori-landing

## Summary

Transform the boilerplate landing page into a polished, branded experience that builds trust with visitors, communicates the product's value clearly, and establishes Team Hitori's visual identity across every touchpoint — from the browser tab to social media shares.

---

## Features

### F-07-01 — Brand Identity System

| Field | Value |
|-------|-------|
| **ID** | F-07-01 |
| **Epic Id** | E-07 |
| **Release** | R1 |
| **Title** | Brand Identity System |
| **Type** | Functional |
| **Description** | As **Team Hitori**, I want a cohesive brand identity (colour palette, typography, spacing, visual tone) derived from the Team Hitori logo, so that the landing page — and eventually all public-facing surfaces — looks professional and intentional. |
| **Acceptance Criteria** | 1. Colour palette defined: primary, secondary, accent, neutral, and semantic colours (success, warning, error). 2. Typography defined: heading font, body font, and monospace font (if applicable), with size/weight scale. 3. Spacing and layout rhythm documented. 4. Brand tone described (e.g. "technical but approachable", "minimal and confident"). 5. Guidelines captured in a design reference (can be a Markdown doc, Figma file, or Tailwind config). 6. Palette and fonts are derived from or complement the existing Team Hitori logo. |
| **Priority** | Must |
| **Story Points** | 5 |
| **Status** | Backlog |
| **Dependencies** | F-07-02 (design tool evaluation informs tool choice for generating guidelines). Logo must be available in repo (currently `public/favicon.svg` exists; full logo may need to be added). |

---

### F-07-02 — Design Tool Evaluation (Spike)

| Field | Value |
|-------|-------|
| **ID** | F-07-02 |
| **Epic Id** | E-07 |
| **Release** | R1 |
| **Title** | Design Tool Evaluation (Spike) |
| **Type** | Non-Functional |
| **Description** | As a **developer**, I want to evaluate AI-powered design tools for brand generation, colour palette creation, typography pairing, and UI component design, so that I can select the most effective tools for the branding phase and avoid wasted effort on tools that don't fit. |
| **Acceptance Criteria** | 1. At least 3 tools evaluated from the following categories: brand identity generators (Looka, Brandmark), colour palette tools (Khroma), font pairing tools (Fontjoy), UI component generators (v0 by Vercel), full-page mockup tools (Galileo AI, Uizard), image generators (Midjourney, DALL-E 3). 2. Each tool evaluated on: quality of output, speed, cost, compatibility with Astro/Tailwind workflow. 3. Recommendation documented: which tool(s) to use for F-07-01 and F-07-03. 4. Time-boxed to ≤ 1 day of effort. |
| **Priority** | Should |
| **Story Points** | 3 |
| **Status** | Backlog |
| **Dependencies** | None — can be started immediately. |

---

### F-07-03 — Branded Visual Design

| Field | Value |
|-------|-------|
| **ID** | F-07-03 |
| **Epic Id** | E-07 |
| **Release** | R1 |
| **Title** | Branded Visual Design |
| **Type** | Functional |
| **Description** | As a **visitor**, I want the landing page to have polished, brand-consistent styling across the hero, navigation, features, CTA, and footer, so that the site feels professional, trustworthy, and memorable. |
| **Acceptance Criteria** | 1. Brand colours from F-07-01 applied to all page sections (backgrounds, text, borders, buttons, badges). 2. Brand typography from F-07-01 applied to headings, body text, and UI elements. 3. Visual hierarchy is clear: hero draws the eye first, then features, then CTA. 4. Hover/focus states for interactive elements (buttons, links) are brand-consistent. 5. Dark theme maintained (current design is dark-mode; brand refinement should enhance, not replace this). 6. Tailwind config updated with brand design tokens (`tailwind.config.mjs` — custom colours, fonts, spacing). 7. Visual consistency verified across Chrome, Firefox, Safari, and Edge. |
| **Priority** | Must |
| **Story Points** | 8 |
| **Status** | Backlog |
| **Dependencies** | F-07-01 (brand identity must be defined first). |

---

### F-07-04 — Logo & Favicon

| Field | Value |
|-------|-------|
| **ID** | F-07-04 |
| **Epic Id** | E-07 |
| **Release** | R1 |
| **Title** | Logo & Favicon |
| **Type** | Functional |
| **Description** | As a **visitor**, I want to see the Team Hitori logo in the navigation and a proper favicon in my browser tab, so that the brand is instantly recognisable and the site looks complete. |
| **Acceptance Criteria** | 1. Full Team Hitori logo (or wordmark) displayed in the navigation header, replacing the current text-only "Team Hitori" brand name. 2. Logo is an SVG or optimised image with appropriate alt text. 3. Favicon provided in multiple formats: SVG (modern browsers), ICO (legacy), and PNG (Apple Touch Icon — 180×180). 4. Favicon renders correctly in Chrome, Firefox, Safari, and Edge tabs. 5. Logo and favicon are visually consistent with the brand identity from F-07-01. |
| **Priority** | Must |
| **Story Points** | 2 |
| **Status** | Backlog |
| **Dependencies** | F-07-01 (brand identity defines the logo treatment). |

---

### F-07-05 — Social Sharing Assets

| Field | Value |
|-------|-------|
| **ID** | F-07-05 |
| **Epic Id** | E-07 |
| **Release** | R1 |
| **Title** | Social Sharing Assets |
| **Type** | Functional |
| **Description** | As **Team Hitori**, I want branded Open Graph and Twitter Card images and meta tags, so that links shared on social media, Slack, Discord, and messaging apps display a professional, eye-catching preview. |
| **Acceptance Criteria** | 1. Open Graph image (`og:image`) created: 1200×630px, branded, with product name and tagline. 2. `og:title`, `og:description`, `og:type`, `og:url`, and `og:image` meta tags populated in the `<head>`. 3. Twitter Card meta tags: `twitter:card` set to `summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image` populated. 4. Sharing preview verified on: Facebook Sharing Debugger, Twitter Card Validator, LinkedIn Post Inspector. 5. Image hosted in `public/` and delivered via CDN. |
| **Priority** | Should |
| **Story Points** | 3 |
| **Status** | Backlog |
| **Dependencies** | F-07-01 (brand identity needed for visual consistency of the share image). Note: basic OG/Twitter meta tags already exist in `Base.astro` but lack an `og:image` and `twitter:image`. |

---

### F-07-06 — Final Marketing Copy

| Field | Value |
|-------|-------|
| **ID** | F-07-06 |
| **Epic Id** | E-07 |
| **Release** | R1 |
| **Title** | Final Marketing Copy |
| **Type** | Functional |
| **Description** | As a **visitor**, I want clear, compelling copy across all landing page sections, so that I understand Pocket Smyth's value and feel motivated to sign up. |
| **Acceptance Criteria** | 1. Hero heading and tagline finalized (may evolve from current "Your Personal AI Agent"). 2. Hero supporting paragraph rewritten for clarity, impact, and SEO keyword inclusion. 3. Feature card titles and descriptions reviewed and tightened — each under 20 words. 4. Secondary CTA section copy finalized with urgency or benefit framing. 5. Beta messaging copy reviewed — still appropriate for current product stage. 6. All copy proofread for grammar, spelling, and consistent tone (matching F-07-01 brand tone). 7. Copy avoids jargon: a non-technical visitor should understand the value proposition. |
| **Priority** | Must |
| **Story Points** | 5 |
| **Status** | Backlog |
| **Dependencies** | F-07-01 (brand tone guides the copy voice). |

---

### F-07-07 — Search Engine Optimisation

| Field | Value |
|-------|-------|
| **ID** | F-07-07 |
| **Epic Id** | E-07 |
| **Release** | R1 |
| **Title** | Search Engine Optimisation |
| **Type** | Non-Functional |
| **Description** | As **Team Hitori**, I want the site optimised for search engines with proper metadata, semantic HTML, and structured data, so that the site ranks well for relevant queries and attracts organic traffic. |
| **Acceptance Criteria** | 1. Unique, keyword-rich `<title>` tag (≤ 60 chars). 2. `<meta name="description">` compelling and ≤ 160 chars. 3. Semantic HTML: single `<h1>`, logical heading hierarchy (`h2`, `h3`), `<main>`, `<nav>`, `<footer>`, `<section>` used correctly. 4. JSON-LD structured data for Organisation and/or WebSite schema. 5. Canonical URL set: `<link rel="canonical" href="https://teamhitori.com" />`. 6. `robots.txt` and `sitemap.xml` generated (Astro can auto-generate sitemap). 7. Lighthouse SEO score ≥ 95 maintained. |
| **Priority** | Should |
| **Story Points** | 3 |
| **Status** | Backlog |
| **Dependencies** | F-07-06 (final copy determines title and description content). |

---

### F-07-08 — Privacy-First Analytics

| Field | Value |
|-------|-------|
| **ID** | F-07-08 |
| **Epic Id** | E-07 |
| **Release** | R1 |
| **Title** | Privacy-First Analytics |
| **Type** | Functional |
| **Description** | As **Team Hitori**, I want privacy-respecting analytics on the landing page, so that I can understand visitor behaviour (page views, referrers, geography) without compromising user privacy or requiring cookie consent banners. |
| **Acceptance Criteria** | 1. Analytics provider selected: Plausible, Fathom, or equivalent (no Google Analytics). 2. Script tag added to the base layout, loading asynchronously. 3. No cookies set by the analytics script (cookie-free tracking). 4. Dashboard accessible showing: page views, unique visitors, referrer sources, top pages, geographic distribution. 5. Analytics script does not impact Lighthouse Performance score (loaded async/deferred, < 1 KB). 6. No personal data (IP, user agent fingerprint) stored by the provider. |
| **Priority** | Could |
| **Story Points** | 3 |
| **Status** | Backlog |
| **Dependencies** | F-06-03 (site must be live to generate meaningful data). F-07-01 is not a blocker — analytics is brand-independent. |

---

### F-07-09 — 404 Error Page

| Field | Value |
|-------|-------|
| **ID** | F-07-09 |
| **Epic Id** | E-07 |
| **Release** | R1 |
| **Title** | 404 Error Page |
| **Type** | Functional |
| **Description** | As a **visitor who reaches a broken or non-existent URL**, I want a helpful, branded 404 page that guides me back to the main content, so that I don't leave the site in frustration. |
| **Acceptance Criteria** | 1. Custom 404 page created at `src/pages/404.astro`. 2. Page uses the Base layout (consistent nav, footer, styling). 3. Clear message: "Page not found" (or similar) with a friendly tone. 4. Prominent link/button back to the home page. 5. Brand styling applied (consistent with F-07-03). 6. Astro / Azure SWA correctly serves this page for all unmatched routes. |
| **Priority** | Could |
| **Story Points** | 2 |
| **Status** | Backlog |
| **Dependencies** | F-07-03 (brand styling should be in place for visual consistency). |

---

### F-07-10 — Image Optimisation

| Field | Value |
|-------|-------|
| **ID** | F-07-10 |
| **Epic Id** | E-07 |
| **Release** | R1 |
| **Title** | Image Optimisation |
| **Type** | Non-Functional |
| **Description** | As a **visitor**, I want images to be compressed, properly sized, and lazy-loaded, so that the page loads as quickly as possible — especially on slower mobile connections. |
| **Acceptance Criteria** | 1. All raster images served in modern formats (WebP or AVIF) with PNG/JPEG fallback. 2. Images sized appropriately via `srcset` / responsive images (no oversized assets delivered to mobile). 3. Below-the-fold images use `loading="lazy"`. 4. Hero image (if any) preloaded for LCP optimisation. 5. Total image payload on initial page load < 200 KB. 6. Lighthouse Performance score ≥ 95 maintained after image additions. |
| **Priority** | Should |
| **Story Points** | 2 |
| **Status** | Backlog |
| **Dependencies** | F-07-03 (branded design determines which images exist). |

---

### F-07-11 — Accessibility Compliance

| Field | Value |
|-------|-------|
| **ID** | F-07-11 |
| **Epic Id** | E-07 |
| **Release** | R1 |
| **Title** | Accessibility Compliance |
| **Type** | Non-Functional |
| **Description** | As a **visitor with a disability**, I want the site to meet WCAG 2.1 AA standards, so that I can access and understand all content regardless of how I interact with the web. |
| **Acceptance Criteria** | 1. Colour contrast ratios meet WCAG 2.1 AA (≥ 4.5:1 for normal text, ≥ 3:1 for large text). 2. All interactive elements (links, buttons) are keyboard-navigable with visible focus indicators. 3. All images have descriptive `alt` attributes. 4. Page structure uses ARIA landmarks where semantic HTML is insufficient. 5. Form inputs (if any) have associated `<label>` elements. 6. No auto-playing media or flashing content. 7. Axe or Lighthouse Accessibility audit returns 0 critical/serious violations. 8. Lighthouse Accessibility score ≥ 95. |
| **Priority** | Should |
| **Story Points** | 3 |
| **Status** | Backlog |
| **Dependencies** | F-07-03 (colour choices and component design must be finalized before audit). |

---

## Summary

| ID | Title | Type | Priority | Points | Status |
|----|-------|------|----------|--------|--------|
| F-07-01 | Brand Identity System | F | Must | 5 | Backlog |
| F-07-02 | Design Tool Evaluation (Spike) | NF | Should | 3 | Backlog |
| F-07-03 | Branded Visual Design | F | Must | 8 | Backlog |
| F-07-04 | Logo & Favicon | F | Must | 2 | Backlog |
| F-07-05 | Social Sharing Assets | F | Should | 3 | Backlog |
| F-07-06 | Final Marketing Copy | F | Must | 5 | Backlog |
| F-07-07 | Search Engine Optimisation | NF | Should | 3 | Backlog |
| F-07-08 | Privacy-First Analytics | F | Could | 3 | Backlog |
| F-07-09 | 404 Error Page | F | Could | 2 | Backlog |
| F-07-10 | Image Optimisation | NF | Should | 2 | Backlog |
| F-07-11 | Accessibility Compliance | NF | Should | 3 | Backlog |

**Total:** 39 story points.

### Suggested Order of Execution

```
F-07-02 (Spike)         — Can start immediately, informs tooling for everything else
F-07-01 (Brand Identity) — Foundation for all visual work
    ├── F-07-04 (Logo & Favicon)
    ├── F-07-06 (Final Marketing Copy)
    └── F-07-03 (Branded Visual Design)    — Largest effort, depends on identity + copy
        ├── F-07-05 (Social Sharing Assets)
        ├── F-07-09 (404 Error Page)
        └── F-07-10 (Image Optimisation)
F-07-07 (SEO)           — After copy is finalized
F-07-11 (Accessibility)  — After visual design is finalized
F-07-08 (Analytics)      — Independent, can be done any time after go-live
```
