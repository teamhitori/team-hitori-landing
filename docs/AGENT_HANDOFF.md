# Agent Handoff — team-hitori-landing

This document provides context for an AI agent working on this repo.

## Project Summary

Static landing page for **Team Hitori** at `teamhitori.com`. This is a marketing site that showcases Team Hitori's products, with **Pocket Smyth** as the first product.

## Current State

| Component | Status |
|-----------|--------|
| Repository created | ✅ |
| Astro project scaffolded | ⬜ Not started |
| Landing page design | ⬜ Not started |
| GitHub Actions CI/CD | ⬜ Not started |
| Azure Static Web Apps infra | ⬜ Not started |
| Production deployment | ⬜ Not started |
| Brand/design exploration | ⬜ Not started |

## Key Requirements

1. **Hero section** — Introduce Team Hitori and Pocket Smyth
2. **"Get Started" CTA** — Links to Azure AD B2C sign-up flow
3. **Mobile responsive** — Works on all screen sizes
4. **Fast** — Static site, minimal JS, CDN-delivered
5. **"Currently in Private Beta"** — Messaging for early stage
6. **Brand-consistent** — Design informed by Team Hitori logo

## B2C Sign-Up Link

The "Get Started" button should redirect to:
```
https://teamhitorib2c.b2clogin.com/teamhitorib2c.onmicrosoft.com/B2C_1_SignUpSignIn_Google/oauth2/v2.0/authorize?client_id=79c882fb-0977-408e-b3b9-5a8128a1e68c&redirect_uri=https://app.teamhitori.com/oauth2/callback&response_type=code&scope=openid%20email%20profile
```

(This will need updating once `pocket-smyth-portal` is deployed.)

## Deployment

- **Target URL:** `teamhitori.com` (+ `www.teamhitori.com` redirect)
- **Hosting:** Azure Static Web Apps (Free tier)
- **CDN:** Azure Front Door (built into Static Web Apps)
- **Custom Domain:** Configured via CNAME/TXT in Azure DNS (managed by `logic-agent-platform` Terraform)
- **TLS:** Managed automatically by Azure Static Web Apps
- **CI/CD:** GitHub Actions — auto-deploy on push to `main`

### Why Azure Static Web Apps (not Docker/Hetzner)

This is a purely static site. A CDN is more appropriate than a VM-hosted container:
- **Global edge delivery** — faster for all visitors
- **Zero server maintenance** — no Docker, no Traefik config for this site
- **Free tier** — no cost for a static marketing site
- **Native GitHub Actions** — built-in CI/CD integration
- **Azure ecosystem** — consistent with existing Azure DNS, B2C, and Terraform

> **Note:** The Hetzner VM and Traefik remain the deployment target for `app.teamhitori.com`
> and `{username}.teamhitori.com` (dynamic services). Only the static landing page moves to CDN.

### DNS Changes Required

The `@` (apex) A record in Azure DNS currently points to `66.235.200.147` (Bluehost, temporary).
This must be updated to support Azure Static Web Apps custom domain validation:

| Record | Old Value | New Value |
|--------|-----------|-----------|
| A `@` | 66.235.200.147 (Bluehost) | Azure SWA IP (auto-assigned) |
| TXT `@` | (existing) | + SWA domain validation TXT |
| CNAME `www` | teamhitori.com | SWA auto-generated hostname |

These changes are managed in `logic-agent-platform/terraform/modules/dns/`.

## Roadmap

See [docs/ROADMAP.md](ROADMAP.md) for the phased project plan.

## Related Repos

- **[logic-agent-platform](https://github.com/teamhitori/logic-agent-platform)** — Infrastructure, platform-wide docs, deployment scripts
- **[pocket-smyth-portal](https://github.com/teamhitori/pocket-smyth-portal)** — Portal UI + API (where "Get Started" leads after sign-up)

## How to Resume Work

```
Read docs/AGENT_HANDOFF.md for project context.
Read docs/ROADMAP.md for the phased project plan.
This is the Team Hitori static landing page at teamhitori.com.
See logic-agent-platform/docs/ for platform-wide architecture and roadmap.
```
