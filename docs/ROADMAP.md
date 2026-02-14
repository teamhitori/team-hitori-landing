# Roadmap — team-hitori-landing

Phased plan from empty repo to production landing page at `teamhitori.com`.

---

## Phase 1: Scaffold & Local Dev

*Get a working Astro + Tailwind project running locally.*

| Task | Description | Status |
|------|-------------|--------|
| 1.1 | Initialize Astro project (`npm create astro@latest`) | ⬜ |
| 1.2 | Add Tailwind CSS integration (`@astrojs/tailwind`) | ⬜ |
| 1.3 | Create base layout (`src/layouts/Base.astro`) with `<head>`, meta tags, favicon | ⬜ |
| 1.4 | Create index page (`src/pages/index.astro`) with placeholder content | ⬜ |
| 1.5 | Verify `npm run dev` serves locally on `localhost:4321` | ⬜ |
| 1.6 | Verify `npm run build` produces static output in `dist/` | ⬜ |
| 1.7 | Add `.nvmrc` (Node 20 LTS) | ⬜ |

**Deliverable:** Running local dev server with boilerplate Astro + Tailwind page.

---

## Phase 2: Boilerplate Landing Page

*Minimal but real landing page structure — placeholder content, real layout.*

| Task | Description | Status |
|------|-------------|--------|
| 2.1 | Hero section — heading, subheading, CTA button (placeholder link) | ⬜ |
| 2.2 | Features/value props section (3–4 bullet points) | ⬜ |
| 2.3 | "Currently in Private Beta" banner/messaging | ⬜ |
| 2.4 | Footer — copyright, links | ⬜ |
| 2.5 | Nav header — logo placeholder, Login / Get Started links | ⬜ |
| 2.6 | Mobile responsive (Tailwind breakpoints) | ⬜ |
| 2.7 | Wire "Get Started" CTA to B2C sign-up URL | ⬜ |

**Deliverable:** A complete if unstyled/unbranded boilerplate landing page.

---

## Phase 3: GitHub Actions CI/CD

*Automated build and deploy on push to `main`.*

| Task | Description | Status |
|------|-------------|--------|
| 3.1 | Create `.github/workflows/deploy.yml` using `Azure/static-web-apps-deploy@v1` | ⬜ |
| 3.2 | Configure build: `app_location: "/"`, `output_location: "dist"`, `app_build_command: "npm run build"` | ⬜ |
| 3.3 | Add `AZURE_STATIC_WEB_APPS_API_TOKEN` as GitHub repo secret | ⬜ |
| 3.4 | Test: push to `main`, verify build succeeds and deploys to SWA staging URL | ⬜ |
| 3.5 | (Optional) Add PR preview environments (SWA supports this natively) | ⬜ |

**Deliverable:** Every push to `main` auto-deploys to Azure Static Web Apps.

---

## Phase 4: Azure Static Web Apps Infrastructure (Terraform)

*Provision the SWA resource and DNS records via Terraform in `logic-agent-platform`.*

> These tasks are executed in the **logic-agent-platform** repo.

| Task | Description | Status |
|------|-------------|--------|
| 4.1 | Create Terraform module `terraform/modules/static-web-app/` | ⬜ |
| 4.2 | Provision `azurerm_static_web_app` resource (Free tier, West Europe or nearest) | ⬜ |
| 4.3 | Output the SWA deployment token (for GitHub Actions secret) | ⬜ |
| 4.4 | Output the SWA auto-generated hostname (e.g., `*.azurestaticapps.net`) | ⬜ |
| 4.5 | Add custom domain `teamhitori.com` via `azurerm_static_web_app_custom_domain` | ⬜ |
| 4.6 | Add custom domain `www.teamhitori.com` (CNAME → SWA hostname) | ⬜ |
| 4.7 | Update DNS module: change apex `A` record from Bluehost IP to SWA requirements | ⬜ |
| 4.8 | Update DNS module: add TXT validation record for SWA custom domain | ⬜ |
| 4.9 | Remove apex `A → 66.235.200.147` (Bluehost) — no longer needed | ⬜ |
| 4.10 | `terraform plan` + `terraform apply` in dev, verify DNS propagation | ⬜ |

**Deliverable:** Azure SWA provisioned, `teamhitori.com` resolving to it, TLS auto-managed.

### DNS Impact

| Record | Before | After |
|--------|--------|-------|
| A `@` | 66.235.200.147 (Bluehost, temporary) | Removed or pointed to SWA |
| CNAME `www` | teamhitori.com | `<swa-hostname>.azurestaticapps.net` |
| TXT `@` | (existing SPF/DKIM) | + SWA validation TXT |
| A `*` | 178.156.214.79 (Hetzner) | **Unchanged** — still serves `app.*` and `{user}.*` |
| A `app` | 178.156.214.79 (Hetzner) | **Unchanged** |

> **Important:** Wildcard and `app` records remain pointing to Hetzner for the portal
> and user agent stacks. Only the apex (`@`) and `www` change.

---

## Phase 5: Production Go-Live

*Validate everything works end-to-end in production.*

| Task | Description | Status |
|------|-------------|--------|
| 5.1 | Verify `teamhitori.com` serves the landing page via SWA CDN | ⬜ |
| 5.2 | Verify `www.teamhitori.com` redirects to `teamhitori.com` | ⬜ |
| 5.3 | Verify TLS certificate is valid and auto-renewed | ⬜ |
| 5.4 | Verify "Get Started" CTA redirects to B2C sign-up | ⬜ |
| 5.5 | Verify email (MX records) still works | ⬜ |
| 5.6 | Verify `app.teamhitori.com` and `*.teamhitori.com` still route to Hetzner | ⬜ |
| 5.7 | Lighthouse audit: target 95+ on Performance, Accessibility, SEO | ⬜ |
| 5.8 | Update `logic-agent-platform/docs/AGENT_HANDOFF.md` Phase 2 → ✅ complete | ⬜ |

**Deliverable:** Live production landing page at `teamhitori.com`.

---

## Phase 6: Brand & Design

*Apply real branding, informed by the Team Hitori logo.*

| Task | Description | Status |
|------|-------------|--------|
| 6.1 | Add Team Hitori logo to repo (`public/logo.*`) | ⬜ |
| 6.2 | Extract color palette, typography direction from logo | ⬜ |
| 6.3 | Research AI design tools (see below) | ⬜ |
| 6.4 | Generate brand guidelines: colors, fonts, spacing, tone | ⬜ |
| 6.5 | Apply brand to landing page: hero, nav, footer, CTA styling | ⬜ |
| 6.6 | Create favicon + social share image (og:image) from logo | ⬜ |
| 6.7 | Add meta tags for social sharing (Open Graph, Twitter Card) | ⬜ |

### AI Design Tools to Investigate

| Tool | What It Does | Use Case |
|------|-------------|----------|
| **Midjourney / DALL-E 3** | Image generation | Hero imagery, backgrounds, illustrations |
| **Figma AI (+ plugins)** | UI design with AI assistance | Layout exploration, component design |
| **Relume** | AI website wireframe/sitemap generator | Rapid page structure ideation |
| **v0 by Vercel** | AI UI component generator (React/Tailwind) | Generate styled component code directly |
| **Looka / Brandmark** | AI brand identity generator | Color palette, font pairing, brand assets from logo |
| **Khroma** | AI color palette generator | Find palettes that work with the logo |
| **Fontjoy** | AI font pairing | Typography combinations |
| **Galileo AI** | AI UI design tool | Full page mockups from text prompts |
| **Uizard** | AI wireframing + prototyping | Quick mockups for iteration |
| **Claude / GPT-4 (this agent)** | Code generation | Tailwind components, SVG, CSS from design direction |

**Deliverable:** Branded, polished landing page with consistent visual identity.

---

## Phase 7: Content & Polish

*Final content, SEO, analytics.*

| Task | Description | Status |
|------|-------------|--------|
| 7.1 | Final copywriting — hero, features, CTA messaging | ⬜ |
| 7.2 | SEO: title, meta description, structured data | ⬜ |
| 7.3 | Analytics integration (Plausible, Fathom, or similar — privacy-first) | ⬜ |
| 7.4 | 404 page | ⬜ |
| 7.5 | Performance optimization (image compression, lazy loading) | ⬜ |
| 7.6 | Accessibility audit (WCAG 2.1 AA) | ⬜ |

**Deliverable:** Production-quality landing page.

---

## Timeline Summary

```
Phase 1-2:  Scaffold + Boilerplate              (Day 1)
Phase 3:    CI/CD pipeline                       (Day 1-2)
Phase 4:    Azure SWA infrastructure (Terraform) (Day 2-3)
Phase 5:    Production go-live                   (Day 3)
Phase 6:    Brand & design                       (Day 4-7)
Phase 7:    Content & polish                     (Week 2)
```

---

## Cross-Repo Dependencies

| This Repo Needs | From | Action |
|-----------------|------|--------|
| Azure SWA resource provisioned | `logic-agent-platform` | Terraform module + apply |
| DNS records updated (apex → SWA) | `logic-agent-platform` | Terraform DNS module update |
| SWA deployment token | `logic-agent-platform` | Terraform output → GitHub secret |
| B2C sign-up URL | `logic-agent-platform` | Already documented |

| Other Repos Need | From This Repo | Action |
|-------------------|---------------|--------|
| Landing page live at `teamhitori.com` | This repo deployed | Phase 5 complete |
| "Get Started" → B2C → Portal | `pocket-smyth-portal` | Portal must be deployed for full flow |
