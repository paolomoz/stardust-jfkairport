# stardust-jfkairport

Stardust prototype redesign and full-site migration of [jfkairport.com](https://www.jfkairport.com/).

## What's here

A complete static-HTML reproduction of the JFK Airport website (56 pages across 7 page types), produced through the stardust workflow:

1. **Extract** — Playwright crawl of the live site, capturing brand surface (palette, typography, components), system components, captured imagery, page inventory.
2. **Direct** — resolved direction "B (NYC-flavoured gateway) with Mode A pin" (brand-faithful: PANYNJ blue family + Sharp Grotesk Semibold + Helvetica Now retained).
3. **Prototype** — 5-variant axis-differentiated home exploration → 1 selected + 7 iteration rounds (delight, animate, typeset, colorize, overdrive, adapt, polish) → final locked design at `stardust/prototypes/home-proposed.html`.
4. **Migrate** — full-site cascade: deep-extract structured DOM blocks per page → smart renderer with sub-pattern templates (stat-grid, walk-times, sub-ia, service-grid, advisory) → 56 production-ready pages in `stardust/migrated/`.

## Locked design highlights

- **Audience-routing first viewport** — the home opens with five tiles (Departing / Arriving / Picking up / Connecting / Visiting) with View Transitions on tile change.
- **Hero "JFK" wordmark** at 280px Sharp Grotesk Semibold over the captured Manhattan skyline.
- **Live status feed** as a sidekick overlay on the brand hero (3 timestamped entries; Security / Pickup / AirTrain).
- **PANYNJ co-brand footer** with the official Port Authority logo + grouped utility links + social.
- **Single-action color discipline** — solid `panynj-blue #0045FF` reserved for the primary CTA per surface; inline links use `panynj-deep-blue #022DB7`; headlines use `panynj-navy #011565`.
- **Captured PANYNJ icon font + brand fonts** (Sharp Grotesk Semibold 20, Helvetica Now for PANYNJ regular + bold) loaded via `@font-face` from `assets/icons/`.

## How to view

From the repo root:

```sh
./serve-migrated.sh
```

Then open <http://127.0.0.1:8765/> for the home, or <http://127.0.0.1:8765/_site-index.html> for the directory of all 56 pages.

## Layout

```
PRODUCT.md                            # target brand/users/anti-references (impeccable format)
DESIGN.md / DESIGN.json               # target visual system (tokens, components, motifs)
jfkairport-direction-analysis.pdf     # the direction-analysis report shared with stakeholders

serve-migrated.sh                     # local static server launcher

stardust/
  state.json                          # page inventory + status (extracted → directed → prototyped → approved)
  direction.md                        # full reasoning trace for the direction lock
  migration-plan.md                   # detailed plan for the autonomous migration run

  current/                            # extracted state (snapshot of the live site)
    PRODUCT.md / DESIGN.md / DESIGN.json
    _brand-extraction.json            # consolidated brand surface
    _crawl-log.json
    brand-review.html                 # visual eyeballing of the extracted brand
    pages/<slug>.json                 # per-page captured DOM + content
    blocks/<slug>.json                # deep-extracted structured blocks (per h2, with sub-patterns)
    assets/
      icons/                          # captured PANYNJ icon font + brand fonts (woff2)
      media/                          # captured imagery (281 images)
      screenshots/                    # per-page screenshots from initial extract

  prototypes/
    home-proposed.html                # the locked home design
    home-V*-proposed.html             # full iteration history (15 versions)
    home-improvements.md              # load-bearing weakness list
    home-variants-shape.md            # shape briefs per variant

  migrated/                           # 56 production-ready static HTML pages (the deliverable)
    index.html                        # the home
    _site-index.html                  # developer-facing index of all pages
    assets/
      canon.css                       # full design system tokens + components
      canon.js                        # view transitions, count-up, keyboard shortcut
      migrate.css                     # additional template styles
      migrate-rich.css                # block-pattern templates (stat-grid, walk-times, sub-ia, etc.)
      icons/                          # canon assets (fonts + icon font)
      media/                          # canon assets (imagery)
    flights/index.html
    transportation/index.html
    explore-jfk/...                   # all sub-pages
    alerts-advisories/...
    contact-us/, lost-and-found/, feedback/, frequently-asked-questions/, privacy/, website-disclaimer/
```

## Page types in the migration

| Type | Count | Sample |
|---|---|---|
| home | 1 | `/` |
| ia-pillar | 4 | `/flights/`, `/transportation/`, `/explore-jfk/`, `/dine-shop-relax/` |
| flight-info | 5 | `/flights/arrivals/` (with sample flight board) |
| service-info | 30 | `/explore-jfk/terminals/terminal-4/` (rich: advisory + stats + walk-times + sub-IA + service-grid) |
| alert-content | 10 | `/alerts-advisories/jfk-redevelopment/` |
| form | 3 | `/contact-us/` |
| static | 3 | `/privacy/` |

## Notes

- **Direction-faithful.** The migration honors Mode A pin: no fonts or hues outside the captured PANYNJ brand surface.
- **Voice-authored copy** (rephrased H2s on home and herofeed entries) ships under direction B's voice rule. PANYNJ content review would happen before deploy.
- **Live numerals** (security wait, pickup state, weather, departure count, parking %) and sample flight rows are illustrative placeholders. No backend feed wired.
- **Form submissions** are non-functional (alert-only).
- **Provenance** is recorded in each `index.html` as an HTML comment in the document head. Search any file for `_provenance`.

## Built with

- [stardust](https://github.com/pbakaus/stardust) — the redesign + migration workflow
- [impeccable](https://github.com/pbakaus/impeccable) — the design-craft engine
- Playwright (Chromium) — for capture + verification

Generated 2026-05-03.
