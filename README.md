# Garage Door Repair Service Website

A production-oriented marketing and lead-generation website for a garage door repair company serving U.S. locations. The project is built with **Next.js (App Router)** and **React**, and includes service pages, a service-area directory, blog content, and working quote/contact request handling.

## Overview

This repository contains a multi-page website for a garage door repair business ("Up & Over" branding in the current implementation). It is designed to present services clearly, help visitors find coverage areas, and collect service requests with server-side validation.

## Features

- **Multi-page site structure**
  - Home page with hero, services overview, trust/process sections, and quote form
  - Services page describing repair and installation offerings
  - About page with company/service information
  - Contact page with inquiry form and business contact details
  - Service Areas page with searchable/filterable U.S. coverage directory
  - Blog index and article pages for educational/service content
- **Lead capture forms**
  - Homepage, modal, and contact forms submit to `POST /api/requests`
  - Server-side validation for required fields (name, phone, email, service, message, consent, date, ZIP, etc.)
  - ZIP validation against a local ZIP code lookup
  - Successful submissions return a unique request reference
- **Inquiry persistence (local/server host)**
  - Valid inquiries are appended to `data/inquiries.jsonl` (JSON Lines)
  - Records include request metadata such as ID and creation date
  - Data directory can be overridden with `INQUIRY_DATA_DIR`
  - Files are created with restrictive permissions where supported
  - No public inquiry-read endpoint is exposed
- **Service area directory**
  - Uses the [`zipcodes`](https://www.npmjs.com/package/zipcodes) package (v8) for local ZIP/city/state data queries
  - Directory includes all 50 U.S. states and Washington, D.C.
  - Supports browsing/filtering/search and pagination patterns in the UI
  - Listings indicate service-area information only and do **not** guarantee technician availability
- **Responsive UI and interaction details**
  - Responsive layouts across mobile, tablet, and desktop breakpoints
  - Accessible/touch-friendly form controls and tap targets
  - Route loading UI (`app/loading.js`) and custom not-found page
  - Interactive UI enhancements (hover/call/experience components) with reduced-motion considerations
- **Original content and assets**
  - Blog/article content defined in project data files (e.g. `lib/posts.js`)
  - Generated illustrative images in `public/` (not real employees/customers unless replaced)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, React DOM 19
- **Icons:** `lucide-react`
- **Data/Utility:** `zipcodes` (local ZIP database queries)
- **Language/Runtime:** Node.js, JavaScript (ES modules)

## Project Structure

```text
.
├─ app/                  # App Router pages, layouts, API routes, global styles
│  ├─ api/               # Request/inquiry API endpoints (e.g. /api/requests)
│  ├─ about/
│  ├─ blog/
│  ├─ contact/
│  ├─ service-areas/
│  ├─ services/
│  ├─ layout.js
│  ├─ page.js
│  └─ ...
├─ components/           # Reusable UI components (forms, layout, sections, etc.)
├─ lib/                  # Site config/content/helpers (site settings, posts, ZIP utilities)
├─ public/               # Static assets/images
├─ scripts/              # Dev/build helper scripts
├─ data/                 # Local inquiry storage (runtime-generated, environment-dependent)
├─ package.json
└─ README.md
```

> Note: Exact file names may evolve; inspect `app/`, `components/`, and `lib/` for the current implementation.

## Getting Started

### Prerequisites

- **Node.js** (LTS recommended)
- **npm**

### Installation

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

- Production build output is configured to use `.next-build` (separate from dev cache).
- The app is intended to run on a **Node.js server**. Do not deploy as a static-only export unless the implementation is adapted accordingly.

## Configuration

### Business/site settings

Update business-specific values in `lib/site.js`, including (as applicable):

- Brand/company name
- Phone number and contact details
- Service promises/coverage messaging

**Important:** Verify phone ownership, licensing/claims, and actual service coverage before launching publicly.

### Environment variables

- `INQUIRY_DATA_DIR` (optional): override the directory used to store inquiry records (e.g. `data/inquiries.jsonl`).

## Forms and Data Handling Notes

- Request submissions are validated on the server before being accepted.
- The current local implementation persists inquiries to the filesystem on the Node host.
- **Not included by default:** email notifications, SMS, appointment confirmation, dispatch/CRM integrations.
- For production deployments (especially serverless platforms), connect a durable database/CRM and notification provider. A serverless filesystem should not be treated as durable storage.

## Content, Coverage, and Compliance Notes

- **Service area data:** ZIP/location information is sourced from the `zipcodes` package database and may be outdated. It does not validate deliverable street addresses.
- **Coverage claims:** Directory presence does not guarantee service availability in every location. Confirm real coverage before publishing.
- **Imagery/content:** Generated/illustrative assets and sample content should be reviewed and replaced with verified business materials where required.
- **Licensing:** Review third-party package licenses and the repository `LICENSE` file (Mozilla Public License 2.0) before redistribution or commercial use.

## Available Scripts

- `npm run dev` — start the development server (`scripts/dev.mjs`)
- `npm run build` — create a production build (`NEXT_BUILD_DIR=.next-build`)
- `npm start` — start the production server on `0.0.0.0`

## License

This project is licensed under the **Mozilla Public License 2.0 (MPL-2.0)**. See [`LICENSE`](./LICENSE) for details.
