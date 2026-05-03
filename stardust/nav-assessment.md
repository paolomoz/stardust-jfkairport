# Navigation assessment + production nav system

**Done 2026-05-03 after the migration was production-ready.**

## What was assessed

A thorough audit of navigation needs across the 56 migrated pages, comparing against the captured live-site behavior and prototype-design conventions for content-rich public-agency sites.

## Decisions

| Element | Decision | Rationale |
|---|---|---|
| **L2 megamenu** on the 4 top nav items | **Implement** | Live site uses hover-driven L2 dropdowns with 2-col link grid + featured CTA. Mode A inheritance: replicate the structure, refine the visual treatment. CSS-driven hover for desktop; click-toggle for touch (with `aria-expanded`, Escape, outside-click close). |
| **Breadcrumbs** on pages 2+ levels deep | **Implement** | 25 of 56 pages live at `/explore-jfk/terminals/X/`, `/transportation/airport-parking/`, `/alerts-advisories/X/`, etc. Breadcrumbs help re-orient users who land deep via search or alerts. Skip on home and 1-level pages. |
| **Mobile hamburger menu** + slide-out drawer | **Implement** | Critical gap: the current nav was hidden on `<768px` with no replacement. Hamburger triggers a navy-drenched drawer with all megamenu items in stacked form, plus Help section. Escape to close. |
| **Back-to-top button** on long pages | **Implement** | Floating navy circle pinned bottom-right, appears after `1.5 × viewport` scroll. Smooth-scroll to top. Useful on terminal-4 (6,170px), home (5,582px), airport-parking (3,784px), and other long pages. |
| **Skip-to-content link** | **Already in place** | A11y baseline; was set up from the start. |
| **Sticky in-page TOC** for very-long pages | **Skip** | Only ~5 pages exceed 5,000px; back-to-top + breadcrumbs already address the core navigation pain. Adding a sticky TOC on a per-page basis would be a per-template authoring cost for marginal benefit. Reserve for editorial-led content sites where pages average 8,000px+. |
| **Top-bar search overlay (autocomplete)** | **Skip** | Search icon already in header (placeholder). Real search needs a backend index; out of scope for the prototype. |
| **"Recent activity" / personalization** | **Skip** | Requires state management. Overkill for a public-agency prototype. |
| **Footer site-map expansion** | **Skip** | Footer 4-col covers Help / Travel info / About / Connect with the most-used links. Adding more would dilute the signal. |

## Implementation notes

- **CSS** lives in `stardust/migrated/assets/canon.css` (additive; megamenu, breadcrumbs, mobile-drawer, back-to-top, page-toc selectors). Linked from every migrated page including the home (where it's loaded after the inline `<style>` so the new selectors layer cleanly).
- **JS** lives in `stardust/migrated/assets/canon.js` (additive; click-toggle, escape, outside-click, mobile-drawer toggle, back-to-top scroll trigger).
- **Header builder** is `tmp/stardust-pw/build-header.mjs` — exports `buildHeader()`, `buildBreadcrumbs(urlPath, title)`, `buildBackToTop()`, `FOOTER_HTML`, and the `NAV` data structure (4 top items × 2 columns × N links + 1 featured CTA each, captured from the live site via Playwright).
- Both renderers (`migrate-renderer.mjs` for static/form pages, `migrate-rich.mjs` for ia-pillar/service-info/flight-info/alert-content pages) import the same builder, so the nav renders identically across all 56 pages.
- The home (`migrated/index.html`) was patched in place: existing inline `<header>` swapped for the megamenu, mobile drawer injected after `</header>`, back-to-top before `</body>`, canon.css linked after the inline `<style>`, canon.js loaded after the inline `<script>`. Same patch applied to the source `prototypes/home-proposed.html` so re-rendering keeps consistency.

## What changed visibly

- **Every page** now has a 4-item top nav with chevron-down indicators, hover/click-driven megamenus with 2-col link grids and a featured CTA on the right.
- **Pages 2+ levels deep** show breadcrumbs immediately below the header (e.g., `Home / Explore JFK / Terminals / JFK Terminal 4`).
- **All pages** have a back-to-top button that fades in after the user scrolls past 1.5 viewport heights.
- **Mobile (<768px)** has a hamburger that opens a full-height navy drawer with the entire megamenu IA stacked.

## Verification

7 sample pages smoke-tested across all 7 page types (home, ia-pillar, service-info, alert-content, form, static, flight-info). All show 4 nav items, back-to-top, mobile-drawer; deep pages also show breadcrumbs. **0 JS errors, 0 broken images, 0 4xx responses** across the run.
