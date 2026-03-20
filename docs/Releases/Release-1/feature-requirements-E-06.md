# Feature Requirements — E-06: Landing Page CI/CD & Go-Live

> **Epic:** E-06 — Landing Page CI/CD & Go-Live
> **Release:** R1 — Landing Live
> **Epic Status:** In Progress
> **Assignee:** team-hitori-landing

## Summary

Establish an automated deployment pipeline and verify the landing page is accessible, secure, and performant in production at `teamhitori.com`. This is the bridge between "code works locally" and "the world can see it".

---

## Features

### F-06-01 — Automated Build & Deploy Pipeline

| Field | Value |
|-------|-------|
| **ID** | F-06-01 |
| **Epic Id** | E-06 |
| **Release** | R1 |
| **Title** | Automated Build & Deploy Pipeline |
| **Type** | Non-Functional |
| **Description** | As a **developer**, I want every push to `main` to automatically build and deploy the site to production hosting, so that changes go live without manual intervention and the deploy process is repeatable and reliable. |
| **Acceptance Criteria** | 1. GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers on push to `main`. 2. Workflow uses `Azure/static-web-apps-deploy@v1` action with `app_location: "/"`, `output_location: "dist"`, `app_build_command: "npm run build"`. 3. The `AZURE_STATIC_WEB_APPS_API_TOKEN` secret is configured in the GitHub repo. 4. A push to `main` results in a successful build and deployment to the Azure Static Web Apps staging URL within 5 minutes. 5. The deployed site content matches the latest `main` commit. |
| **Priority** | Must |
| **Story Points** | 3 |
| **Status** | Done |
| **Dependencies** | E-05 (SWA Provisioning & DNS Cutover — `logic-agent-platform`) must provide the deployment token. The workflow file is already scaffolded; this feature is blocked solely on the infrastructure secret. |

---

### F-06-02 — Pull Request Preview Environments

| Field | Value |
|-------|-------|
| **ID** | F-06-02 |
| **Epic Id** | E-06 |
| **Release** | R1 |
| **Title** | Pull Request Preview Environments |
| **Type** | Non-Functional |
| **Description** | As a **developer**, I want pull requests to automatically generate a preview deployment, so that proposed changes can be visually reviewed in a real environment before merging. |
| **Acceptance Criteria** | 1. Opening or updating a PR against `main` triggers a preview build. 2. Azure Static Web Apps generates a unique preview URL for the PR. 3. Closing or merging the PR automatically cleans up the preview environment. 4. Preview URL is accessible and displays the PR branch content. |
| **Priority** | Should |
| **Story Points** | 2 |
| **Status** | Done |
| **Dependencies** | F-06-01 (pipeline must be operational). The `close_pull_request` job is already scaffolded in the workflow. |

---

### F-06-03 — Production Domain Verification

| Field | Value |
|-------|-------|
| **ID** | F-06-03 |
| **Epic Id** | E-06 |
| **Release** | R1 |
| **Title** | Production Domain Verification |
| **Type** | Non-Functional |
| **Description** | As **Team Hitori**, I want `teamhitori.com` to serve the landing page and `www.teamhitori.com` to redirect to the apex domain, so that visitors always reach the correct site regardless of which URL they use. |
| **Acceptance Criteria** | 1. `https://teamhitori.com` returns the landing page with HTTP 200. 2. `https://www.teamhitori.com` issues a 301 redirect to `https://teamhitori.com`. 3. `http://teamhitori.com` redirects to `https://teamhitori.com` (HTTPS enforcement). 4. Page content matches the latest deployed version from `main`. |
| **Priority** | Must |
| **Story Points** | 2 |
| **Status** | Done |
| **Dependencies** | F-06-01 + E-05 (DNS cutover to Azure Static Web Apps must be complete). |

---

### F-06-04 — TLS Certificate Verification

| Field | Value |
|-------|-------|
| **ID** | F-06-04 |
| **Epic Id** | E-06 |
| **Release** | R1 |
| **Title** | TLS Certificate Verification |
| **Type** | Non-Functional |
| **Description** | As a **visitor**, I want the site to be served over HTTPS with a valid, auto-renewing TLS certificate, so that my connection is secure and my browser shows no warnings. |
| **Acceptance Criteria** | 1. `teamhitori.com` serves content over HTTPS with a valid TLS certificate. 2. Certificate is issued by a trusted CA (Azure-managed via DigiCert). 3. Certificate covers both `teamhitori.com` and `www.teamhitori.com`. 4. Certificate auto-renews before expiry (managed by Azure SWA). 5. No mixed-content warnings in the browser console. |
| **Priority** | Must |
| **Story Points** | 1 |
| **Status** | Done |
| **Dependencies** | F-06-03 (production domain must be live). |

---

### F-06-05 — Sign-Up Flow End-to-End Verification

| Field | Value |
|-------|-------|
| **ID** | F-06-05 |
| **Epic Id** | E-06 |
| **Release** | R1 |
| **Title** | Sign-Up Flow End-to-End Verification |
| **Type** | Functional |
| **Description** | As a **visitor**, I want the "Get Started" button on the production site to successfully redirect me to the sign-up flow, so that I can create an account from the live landing page. |
| **Acceptance Criteria** | 1. Clicking "Get Started" in the hero section redirects to the B2C sign-up/sign-in page. 2. Clicking "Get Started" in the secondary CTA section does the same. 3. Clicking "Login" in the nav bar redirects to the B2C sign-up/sign-in page. 4. The B2C page loads without errors and displays identity provider options (Google, Microsoft). 5. The `redirect_uri` parameter in the B2C URL is correct for production (updated from placeholder if necessary). |
| **Priority** | Must |
| **Story Points** | 2 |
| **Status** | Deferred to R2 / E-09 |
| **Dependencies** | F-06-03 (production site must be serving). B2C tenant and identity providers are already configured (E-02, owned by `logic-agent-platform`). |

> **Note:** Moved to Release 2 (E-09 — Portal Middleware & Auth Routing). The sign-up flow E2E verification depends on the portal's `redirect_uri` and auth callback being finalized, which happens in R2.

---

### F-06-06 — Platform Service Isolation Verification

| Field | Value |
|-------|-------|
| **ID** | F-06-06 |
| **Epic Id** | E-06 |
| **Release** | R1 |
| **Title** | Platform Service Isolation Verification |
| **Type** | Non-Functional |
| **Description** | As **Team Hitori**, I want to confirm that the landing page deployment has not disrupted any other platform services (portal, agent subdomains, email), so that existing infrastructure remains fully operational. |
| **Acceptance Criteria** | 1. `*.teamhitori.com` wildcard DNS still resolves to the Hetzner VM IP. 2. `app.teamhitori.com` still routes to the Hetzner VM. 3. Email delivery via Google Workspace (MX records) still functions — send a test email to/from `@teamhitori.com`. 4. No DNS record changes have affected any non-landing-page services. |
| **Priority** | Must |
| **Story Points** | 2 |
| **Status** | Done |
| **Dependencies** | F-06-03 (DNS changes for the landing page must be applied first). |

---

### F-06-07 — Performance Baseline (Lighthouse Audit)

| Field | Value |
|-------|-------|
| **ID** | F-06-07 |
| **Epic Id** | E-06 |
| **Release** | R1 |
| **Title** | Performance Baseline (Lighthouse Audit) |
| **Type** | Non-Functional |
| **Description** | As **Team Hitori**, I want the production site to achieve a Lighthouse score of 95+ on Performance, Accessibility, and SEO, so that the site meets professional quality standards from day one and provides a baseline for ongoing monitoring. |
| **Acceptance Criteria** | 1. Lighthouse audit run against `https://teamhitori.com` in production. 2. Performance score ≥ 95. 3. Accessibility score ≥ 95. 4. SEO score ≥ 95. 5. Best Practices score ≥ 90. 6. Any failures documented and addressed or deferred to E-07 with justification. |
| **Priority** | Should |
| **Story Points** | 3 |
| **Status** | Backlog |
| **Dependencies** | F-06-03 (site must be live in production to audit). |

---

## Summary

| ID | Title | Type | Priority | Points | Status |
|----|-------|------|----------|--------|--------|
| F-06-01 | Automated Build & Deploy Pipeline | NF | Must | 3 | Done |
| F-06-02 | Pull Request Preview Environments | NF | Should | 2 | Done |
| F-06-03 | Production Domain Verification | NF | Must | 2 | Done |
| F-06-04 | TLS Certificate Verification | NF | Must | 1 | Done |
| F-06-05 | Sign-Up Flow E2E Verification | F | Must | 2 | Deferred to R2 / E-09 |
| F-06-06 | Platform Service Isolation Verification | NF | Must | 2 | Done |
| F-06-07 | Performance Baseline (Lighthouse Audit) | NF | Should | 3 | Backlog |

**Total:** 15 story points — 10 Done, 2 deferred to R2, 3 remaining (F-06-07).

### Key Dependency

E-05 — SWA Provisioning & DNS Cutover is **Done**. F-06-05 deferred to R2/E-09 (sign-up flow depends on portal auth routing).
