# Feature Requirements — E-04: Landing Page Scaffold

> **Epic:** E-04 — Landing Page Scaffold
> **Release:** Foundation
> **Epic Status:** Done
> **Assignee:** team-hitori-landing

## Summary

Establish the technical foundation and initial content for the Team Hitori landing page, providing visitors with their first impression of Pocket Smyth and a clear path to sign up.

---

## Features

### F-04-01 — Project Foundation & Tooling

| Field | Value |
|-------|-------|
| **ID** | F-04-01 |
| **Epic Id** | E-04 |
| **Release** | Foundation |
| **Title** | Project Foundation & Tooling |
| **Type** | Non-Functional |
| **Description** | As a **developer**, I want a modern static site framework (Astro) with utility-first CSS (Tailwind) scaffolded and building correctly, so that I can develop pages quickly with consistent styling and zero-JS output by default. |
| **Acceptance Criteria** | 1. Astro project initialised with `@astrojs/tailwind` integration. 2. `npm run dev` serves locally on `localhost:4321`. 3. `npm run build` produces static HTML/CSS in `dist/`. 4. Base layout (`src/layouts/Base.astro`) includes `<head>` with charset, viewport, meta description, favicon, and page title. 5. `.nvmrc` pins Node 20 LTS. |
| **Priority** | Must |
| **Story Points** | 3 |
| **Status** | Done |
| **Dependencies** | None |

---

### F-04-02 — Hero Section & Primary Call-to-Action

| Field | Value |
|-------|-------|
| **ID** | F-04-02 |
| **Epic Id** | E-04 |
| **Release** | Foundation |
| **Title** | Hero Section & Primary Call-to-Action |
| **Type** | Functional |
| **Description** | As a **visitor**, I want to see a bold hero section that introduces Pocket Smyth with a clear "Get Started" call-to-action, so that I immediately understand the product and know how to sign up. |
| **Acceptance Criteria** | 1. Full-viewport hero section with product name ("Pocket Smyth"), tagline ("Your Personal AI Agent"), and supporting description. 2. Primary CTA button labelled "Get Started — It's Free" links to the B2C sign-up URL. 3. Secondary "Learn More" link scrolls to the features section. 4. "Currently in Private Beta" badge is visible above the heading. |
| **Priority** | Must |
| **Story Points** | 3 |
| **Status** | Done |
| **Dependencies** | F-04-01 |

---

### F-04-03 — Product Value Proposition

| Field | Value |
|-------|-------|
| **ID** | F-04-03 |
| **Epic Id** | E-04 |
| **Release** | Foundation |
| **Title** | Product Value Proposition |
| **Type** | Functional |
| **Description** | As a **visitor**, I want to see the key benefits of Pocket Smyth (persistent memory, full dev environment, security/isolation, 24/7 availability), so that I can quickly evaluate whether the product is relevant to me. |
| **Acceptance Criteria** | 1. Features section with anchor id `#features`, reachable from "Learn More" link. 2. Four feature cards displayed in a responsive grid. 3. Each card includes an icon, short title, and one-sentence description. 4. Content covers: Persistent Memory, Full Dev Environment, Secure & Isolated, Anywhere/Anytime. |
| **Priority** | Must |
| **Story Points** | 2 |
| **Status** | Done |
| **Dependencies** | F-04-01 |

---

### F-04-04 — Beta Messaging

| Field | Value |
|-------|-------|
| **ID** | F-04-04 |
| **Epic Id** | E-04 |
| **Release** | Foundation |
| **Title** | Beta Messaging |
| **Type** | Functional |
| **Description** | As a **visitor**, I want to see clear "Currently in Private Beta" messaging, so that I set appropriate expectations about product availability and feel a sense of exclusivity. |
| **Acceptance Criteria** | 1. Pill/badge displaying "Currently in Private Beta" is visible in the hero section. 2. The badge has a distinct visual treatment (border, background tint) that draws attention without being intrusive. |
| **Priority** | Must |
| **Story Points** | 1 |
| **Status** | Done |
| **Dependencies** | F-04-02 |

---

### F-04-05 — Navigation Header

| Field | Value |
|-------|-------|
| **ID** | F-04-05 |
| **Epic Id** | E-04 |
| **Release** | Foundation |
| **Title** | Navigation Header |
| **Type** | Functional |
| **Description** | As a **visitor**, I want a fixed navigation bar with the Team Hitori brand name and action links (Login, Get Started), so that I can always access key actions regardless of scroll position. |
| **Acceptance Criteria** | 1. Fixed-position nav bar at the top of the viewport. 2. Brand name "Team Hitori" on the left, links home. 3. "Login" text link and "Get Started" button on the right, both linking to B2C sign-up URL. 4. Semi-transparent backdrop blur effect so content is visible behind the nav. |
| **Priority** | Must |
| **Story Points** | 2 |
| **Status** | Done |
| **Dependencies** | F-04-01 |

---

### F-04-06 — Footer & Secondary CTA

| Field | Value |
|-------|-------|
| **ID** | F-04-06 |
| **Epic Id** | E-04 |
| **Release** | Foundation |
| **Title** | Footer & Secondary CTA |
| **Type** | Functional |
| **Description** | As a **visitor**, I want a footer with copyright information and a GitHub link, and a secondary sign-up prompt above it, so that I have multiple opportunities to engage and can find Team Hitori's open-source presence. |
| **Acceptance Criteria** | 1. CTA section above the footer with heading "Ready to get started?", supporting text, and a "Get Started" button. 2. Footer with copyright year (dynamic), "Team Hitori" attribution, and GitHub link. 3. Footer visually separated from content with a top border. |
| **Priority** | Should |
| **Story Points** | 2 |
| **Status** | Done |
| **Dependencies** | F-04-01 |

---

### F-04-07 — Mobile Responsiveness

| Field | Value |
|-------|-------|
| **ID** | F-04-07 |
| **Epic Id** | E-04 |
| **Release** | Foundation |
| **Title** | Mobile Responsiveness |
| **Type** | Non-Functional |
| **Description** | As a **visitor on a mobile device**, I want the landing page to be fully usable and visually attractive on any screen size, so that I have a quality experience regardless of how I access the site. |
| **Acceptance Criteria** | 1. All sections render correctly on viewports from 320px to 2560px+. 2. Feature cards stack vertically on small screens, 2-column on medium, 4-column on large. 3. Nav actions remain accessible without overflow on mobile. 4. CTA buttons stack vertically on small screens, horizontally on larger. 5. No horizontal scrolling on any standard viewport. |
| **Priority** | Must |
| **Story Points** | 2 |
| **Status** | Done |
| **Dependencies** | F-04-02, F-04-03, F-04-05, F-04-06 |

---

## Summary

| ID | Title | Type | Priority | Points | Status |
|----|-------|------|----------|--------|--------|
| F-04-01 | Project Foundation & Tooling | NF | Must | 3 | Done |
| F-04-02 | Hero Section & Primary Call-to-Action | F | Must | 3 | Done |
| F-04-03 | Product Value Proposition | F | Must | 2 | Done |
| F-04-04 | Beta Messaging | F | Must | 1 | Done |
| F-04-05 | Navigation Header | F | Must | 2 | Done |
| F-04-06 | Footer & Secondary CTA | F | Should | 2 | Done |
| F-04-07 | Mobile Responsiveness | NF | Must | 2 | Done |

**Total:** 15 story points — all complete.
