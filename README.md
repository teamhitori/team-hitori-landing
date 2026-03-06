# Team Hitori Landing Page

Static company landing page for [Team Hitori](https://teamhitori.com) — solo ventures in practical AI.

## Overview

This is the public-facing marketing site at `teamhitori.com`. It showcases Team Hitori's products, starting with **Pocket Smyth** (a personal AI agent platform).

## URL

```
teamhitori.com      → This site
www.teamhitori.com  → Redirects here
```

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | Astro |
| Styling | Tailwind CSS |
| Hosting | Azure Static Web Apps (CDN) |
| TLS | Managed by Azure SWA |
| CI/CD | GitHub Actions (auto-deploy on push to `main`) |
| DNS | Azure DNS (managed via Terraform in `logic-agent-platform`) |

## Project Structure

```
team-hitori-landing/
├── src/
│   ├── layouts/        # Base HTML layouts
│   ├── pages/          # Astro pages (index, etc.)
│   └── components/     # Reusable UI components
├── public/             # Static assets (images, favicon, logo)
├── .github/workflows/  # GitHub Actions CI/CD
├── docs/               # Project-specific documentation
│   ├── AGENT_HANDOFF.md
│   └── ROADMAP.md
└── README.md
```

## Related Repositories

| Repository | Purpose |
|---|---|
| [logic-agent-platform](https://github.com/teamhitori/logic-agent-platform) | Infrastructure, IaC, deployment scripts, platform-wide docs |
| [pocket-smyth-portal](https://github.com/teamhitori/pocket-smyth-portal) | Portal UI + API Routes + Admin Agent sidecar |
| [agent-zero](https://github.com/teamhitori/agent-zero) | Agent Zero AI framework (fork) |

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Deployed to **Azure Static Web Apps** via GitHub Actions. Pushing to `main` triggers an automatic build and deploy.

- Custom domain `teamhitori.com` configured via Azure DNS (Terraform)
- See [docs/ROADMAP.md](docs/ROADMAP.md) for the project plan
- See [logic-agent-platform](https://github.com/teamhitori/logic-agent-platform) for infrastructure details
- For platform-wide architecture, see [logic-agent-platform/docs/platform-overview.md](https://github.com/teamhitori/logic-agent-platform/blob/main/docs/platform-overview.md)

---

*Built by [Team Hitori](https://teamhitori.com)*
