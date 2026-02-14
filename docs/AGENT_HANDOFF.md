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
| Dockerfile | ⬜ Not started |
| CI/CD pipeline | ⬜ Not started |

## Key Requirements

1. **Hero section** — Introduce Team Hitori and Pocket Smyth
2. **"Get Started" CTA** — Links to Azure AD B2C sign-up flow
3. **Mobile responsive** — Works on all screen sizes
4. **Fast** — Static site, minimal JS
5. **"Currently in Private Beta"** — Messaging for early stage

## B2C Sign-Up Link

The "Get Started" button should redirect to:
```
https://teamhitorib2c.b2clogin.com/teamhitorib2c.onmicrosoft.com/B2C_1_SignUpSignIn_Google/oauth2/v2.0/authorize?client_id=79c882fb-0977-408e-b3b9-5a8128a1e68c&redirect_uri=https://app.teamhitori.com/oauth2/callback&response_type=code&scope=openid%20email%20profile
```

(This will need updating once `pocket-smyth-portal` is deployed.)

## Deployment

- **Target URL:** `teamhitori.com`
- **Hosting:** Docker container on Hetzner VM
- **Routing:** Traefik reverse proxy (managed in `logic-agent-platform`)
- **TLS:** Wildcard cert `*.teamhitori.com` (already provisioned)

## Related Repos

- **[logic-agent-platform](https://github.com/teamhitori/logic-agent-platform)** — Infrastructure, platform-wide docs, deployment scripts
- **[pocket-smyth-portal](https://github.com/teamhitori/pocket-smyth-portal)** — Portal UI + API (where "Get Started" leads after sign-up)

## How to Resume Work

```
Read docs/AGENT_HANDOFF.md for project context.
This is the Team Hitori static landing page at teamhitori.com.
See logic-agent-platform/docs/ for platform-wide architecture and roadmap.
```
