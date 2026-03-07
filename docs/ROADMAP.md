# Roadmap — team-hitori-landing

Phased plan from empty repo to production landing page at `teamhitori.com`.

> **Feature details** for each epic are in the feature-requirements docs under `docs/`:
> - [feature-requirements-E-04.md](feature-requirements-E-04.md) — Landing Page Scaffold (7 features, 15 pts)
> - [feature-requirements-E-06.md](feature-requirements-E-06.md) — CI/CD & Go-Live (7 features, 15 pts)
> - [feature-requirements-E-07.md](feature-requirements-E-07.md) — Brand & Content (11 features, 39 pts)
>
> **Platform-wide epics** are tracked in [logic-agent-platform/docs/project-epics.md](https://github.com/teamhitori/logic-agent-platform/blob/main/docs/project-epics.md).

---

## Epic Overview

| Epic | Name | Release | Points | Status | Blocked By |
|------|------|---------|--------|--------|------------|
| E-04 | Landing Page Scaffold | Foundation | 15 | ✅ Done | — |
| E-06 | Landing Page CI/CD & Go-Live | R1 | 15 | ⏳ Blocked | E-05 (infra) |
| E-07 | Landing Page Brand & Content | R1 | 39 | ⬜ Backlog | E-06 |

**Total effort remaining:** 54 story points across 18 features.

---

## E-04 — Landing Page Scaffold ✅

*Completed. Established the Astro + Tailwind project with a boilerplate landing page — hero section, feature cards, sign-up CTA, navigation, footer, and mobile responsiveness.*

**Deliverable:** Functional landing page running locally, ready for deployment.

→ Features: [feature-requirements-E-04.md](feature-requirements-E-04.md)

---

## E-06 — Landing Page CI/CD & Go-Live ⏳

*Connect the codebase to production hosting and verify everything works.*

This epic covers automated deployment (pushes to `main` go live automatically), production domain validation (`teamhitori.com` + `www` redirect), security verification (HTTPS), sign-up flow testing, platform isolation checks (other services unaffected), and a performance baseline audit.

**Deliverable:** Live production landing page at `teamhitori.com`, auto-deployed on every merge.

**Blocker:** E-05 (SWA Provisioning & DNS Cutover, owned by `logic-agent-platform`) must provision the hosting infrastructure and share the deployment credential. The Terraform module is written and ready; it needs `terraform apply`.

→ Features: [feature-requirements-E-06.md](feature-requirements-E-06.md)

---

## E-07 — Landing Page Brand & Content ⬜

*Transform the boilerplate into a polished, branded experience.*

This epic spans brand identity creation (colours, typography, tone from the logo), branded visual design applied across all sections, final marketing copy, logo and favicon, social sharing assets, SEO, privacy-first analytics, a 404 page, image optimisation, and accessibility compliance.

**Deliverable:** Production-quality branded landing page that builds visitor trust.

**Dependency:** E-06 (deployment pipeline needed to iterate on design in production).

→ Features: [feature-requirements-E-07.md](feature-requirements-E-07.md)

---

## Timeline Summary

```
E-04:  Scaffold + Boilerplate              ✅ Complete
E-06:  CI/CD + Go-Live                     ⏳ Blocked on E-05 (infra)
E-07:  Brand & Content                     ⬜ After E-06
```

Estimated elapsed time once E-05 unblocks: ~1.5 weeks (E-06: 2–3 days, E-07: 5–7 days).

---

## Cross-Repo Dependencies

| This Repo Needs | From | Epic | Status |
|-----------------|------|------|--------|
| Hosting infrastructure provisioned | `logic-agent-platform` | E-05 | ⬜ Blocked |
| DNS cutover (`teamhitori.com` → new hosting) | `logic-agent-platform` | E-05 | ⬜ Blocked |
| Deployment credential (GitHub secret) | `logic-agent-platform` | E-05 | ⬜ Blocked |
| B2C sign-up URL | `logic-agent-platform` | E-02 | ✅ Done |

| Other Repos Need | From This Repo | Epic | Status |
|-------------------|---------------|------|--------|
| Landing page live at `teamhitori.com` | This repo deployed | E-06 | ⬜ Blocked |
| "Get Started" → B2C → Portal (full flow) | `pocket-smyth-portal` deployed | E-10+ | ⬜ Future |
