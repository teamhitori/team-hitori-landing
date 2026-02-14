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
| Hosting | Hetzner VM (Docker container) |
| TLS | Let's Encrypt wildcard (via `logic-agent-platform`) |

## Project Structure

```
team-hitori-landing/
├── src/                # Astro pages and components
├── public/             # Static assets (images, favicon)
├── Dockerfile          # Static file serving
├── docs/               # Project-specific documentation
└── README.md           # This file
```

## Related Repositories

| Repository | Purpose |
|---|---|
| [logic-agent-platform](https://github.com/teamhitori/logic-agent-platform) | Infrastructure, IaC, deployment scripts, platform-wide docs |
| [pocket-smyth-portal](https://github.com/teamhitori/pocket-smyth-portal) | Portal UI + Control Plane API |
| [agent-zero](https://github.com/teamhitori/agent-zero) | Agent Zero AI framework (fork) |

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Deployment

Deployed as a Docker container on the Hetzner VM, routed via Traefik at `teamhitori.com`. See [logic-agent-platform](https://github.com/teamhitori/logic-agent-platform) for infrastructure details.

---

*Built by [Team Hitori](https://teamhitori.com)*
