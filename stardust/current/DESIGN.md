---
name: jfkairport.com — current state
register: brand
colors:
  ground-white: "#FFFFFF"
  ice-blue: "#EFF9FF"
  mint-tint: "#F1FCF2"
  ink: "#09090B"
  slate-900: "#0F172A"
  slate-600: "#475569"
  panynj-blue: "#0045FF"
  panynj-deep-blue: "#022DB7"
  panynj-navy: "#011565"
  advisory-yellow: "#FFCD00"
  success-green: "#1B7A2F"
typography:
  display: Sharp Grotesk Semibold
  body: Helvetica Now for PANYNJ
  scale: [12, 14, 16, 18, 20, 24, 28, 32, 40, 52, 96, 320]
  scaleKind: modular (1.25–1.3) with heroic 320px hero outlier
rounded:
  primary: 2px
  secondary: 4px
  pill: 9999px
spacing:
  base: 8px
  sectionPadding: { desktop: ~80px, tablet: ~56px, mobile: ~32px }
components:
  - button-primary
  - button-secondary
  - card-with-icon
  - tabbed-search-panel
  - advisory-band
  - data-table
---

<!--
_provenance:
  writtenBy: stardust:extract
  writtenAt: 2026-05-03T00:00:00Z
  purpose: descriptive snapshot of the existing jfkairport.com DESIGN
  readArtifacts:
    - stardust/current/_brand-extraction.json
    - stardust/current/pages/{home,flights,transportation,explore-jfk,dine-shop-relax}.json
  stardustVersion: 0.3.0
-->

# DESIGN — jfkairport.com (current state)

## North star

A civic-grade airport service site that uses bespoke typography to carry institutional confidence (PANYNJ stewardship of New York's international gateway), and conventional municipal-modernism composition to deliver utility (flight search, transportation modes, terminal info) at speed. The brand investment is in the type and the wordmark; the page architecture is intentionally template-conservative.

## Overview

Five extracted IA pillars (home / flights / transportation / explore-jfk / dine-shop-relax) all share the same composition skeleton:

1. **Sticky white nav bar** — JFK + PANYNJ logo lockup left, four primary nav buttons in `panynj-blue`, accessibility icon, search icon.
2. **Full-bleed photographic hero** — landscape photo (Manhattan skyline, plane on rotation, terminal interior, gate scene, dining floor) with a Sharp Grotesk Semibold uppercase headline overlaid at scale (52–320px).
3. **Functional utility panel** (home + flights only) — tabbed search module floating over the hero.
4. **Body sections** — alternating white / ice-blue / mint-tint grounds, each carrying a `52px` h2, a brief lede, and a 3-column card grid (icon + h3 + body + link).
5. **Cross-promo "Your Guide to JFK"** — appears on multiple pages, links to other IA pillars.
6. **Construction advisory band** — yellow ground, surfaced contextually near affected sections.
7. **Footer** — PANYNJ master logo + 14 utility links + 3 social icons, flat list.

## Key characteristics

- **Single-hue affordance system.** Every interactive cue (link text, CTA fill, active tab, headline accent) uses `panynj-blue #0045FF`. Discovery affordances and submit affordances look identical, which makes the page read as monotone.
- **Heroic display, restrained body.** H1 hero at 320px Sharp Grotesk uppercase is the strongest visual move. Below the hero the type collapses to a conventional 16/20px scale.
- **Architectural radii.** 2px is the dominant border-radius; 4px is the secondary; pills are reserved for filter chips. Combined with the lack of shadow elevation, the page reads crisp/civic, not soft/consumer.
- **Photo-led but alt-poor.** Editorial photography is real and well-shot but rendered at small dimensions and almost entirely missing `alt` text — both an accessibility and a perceived-quality miss.
- **No motion, no decoration.** No gradients, no SVG illustrations beyond category icons, no animations beyond probable mega-menu hover. The visual register is print-civic, not digital-product.

## Rules (observed)

- Display family (Sharp Grotesk) reserved for h1/h2 only; h3+ falls back to Helvetica Now body family.
- Yellow (`advisory-yellow #FFCD00`) used exclusively for warning bands, never decorative.
- Every IA pillar page includes a "Your Guide to JFK" cross-promo back to siblings.
- Construction-related disruption is disclosed inline near the affected functional area.

## Dos (observed)

- Open every IA pillar page with a single declarative hero + headline.
- Lead with utility (search, table, mode list) before editorial.
- Reserve the 320px display moment for the home wordmark only.

## Don'ts (observed)

- No marketing-style discount banners, fare deals, or promotional overlays.
- No third-party advertising.
- No consumer-airline tonal flourishes (no "have a wonderful flight!" copy).

## Components

- **`button-primary`** — `panynj-blue` fill, white text, 2px radius, `~12px 24px` padding, 16px Helvetica Now bold. Used for "Search," "Submit."
- **`button-secondary`** — text-only, `panynj-blue` color, no fill, no border. Used for nav and inline CTAs ("Learn more →").
- **`card-with-icon`** — white ground, thin border, 16px icon-tile (filled `panynj-blue` background, white icon), 20px bold h3, 14–16px body, blue text-link footer. The dominant content unit on every page.
- **`tabbed-search-panel`** — white card, ~36px tall tabs (DEPARTURES / ARRIVALS / PARKING) with active-tab underline in `panynj-deep-blue`, radio toggle, date input, autocomplete input, fill button. Floats over hero on home; inline on /flights.
- **`advisory-band`** — `advisory-yellow` ground, ⚠ icon left, paragraph with inline navy links, "Learn more →" right. ~88px tall typical.
- **`data-table`** — full-width, `panynj-blue` header band, white rows. Used for live departures/arrivals.
