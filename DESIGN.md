---
name: jfkairport.com — target (B / NYC-flavoured, Mode A)
register: brand
colors:
  ground-white: "#FFFFFF"
  ice-blue: "#EFF9FF"
  mint-tint: "#F1FCF2"
  ink: "#09090B"
  slate-900: "#0F172A"
  slate-700: "#334155"
  slate-600: "#475569"
  slate-300: "#CBD5E1"
  slate-200: "#E2E8F0"
  slate-100: "#F1F5F9"
  panynj-blue: "#0045FF"
  panynj-deep-blue: "#022DB7"
  panynj-navy: "#011565"
  advisory-yellow: "#FFCD00"
  advisory-tint: "#FFFBEA"
  success-green: "#1B7A2F"
  success-tint: "#DCF8E2"
typography:
  display: Sharp Grotesk Semibold
  displayFallback: '"Helvetica Neue Condensed Bold", "Inter", system-ui'
  body: Helvetica Now for PANYNJ
  bodyFallback: '"Helvetica Neue", "Inter", "Arial"'
  scale: [12, 14, 16, 20, 24, 32, 40, 64, 96, 160, 280]
  scaleRatio: 1.25–1.4 (with editorial display jumps to 96/160/280)
  scaleKind: modular-with-display-jumps
rounded:
  primary: 2px
  secondary: 4px
  pill: 9999px
spacing:
  base: 8px
  sectionPadding: { desktop: 64px, tablet: 48px, mobile: 32px }
  densityTier: balanced (multi-audience hard floor active)
components:
  - audience-router
  - flight-search-panel
  - departures-board
  - status-strip
  - advisory-band
  - editorial-photo-block
  - story-card
  - 3col-icon-card
  - section-header
  - footer
---

<!--
_provenance:
  writtenBy: stardust:direct
  writtenAt: 2026-05-03T00:00:00Z
  basis: target visual system for direction B with Mode A pinned
  inheritedFrom: stardust/current/_brand-extraction.json (type families, palette)
  readArtifacts:
    - stardust/current/DESIGN.md
    - stardust/current/_brand-extraction.json
    - stardust/prototypes/home-improvements.md
  stardustVersion: 0.3.0
-->

# DESIGN — jfkairport.com (target)

## North star

A civic-grade airport service site that earns its New York identity through type, photography, and voice — without becoming a marketing brand. The Sharp Grotesk + Helvetica Now investment is cashed everywhere, not just the hero. The single brand blue is reserved for the single primary action per surface; hierarchy is carried by type weight + scale. Photography of named people who work at JFK is the trust signal. Construction reality is first-class content, not a yellow band.

## Overview

The home page leads with **explicit audience routing** — Departing / Arriving / Pickup / Connecting / Visiting — surfaced in the first viewport. The flight-search panel becomes the default interaction inside the Departing/Arriving paths rather than a single floating module that ignores three audiences.

Below routing, sections alternate between **editorial blocks** (full-bleed photography, big Sharp Grotesk display, named-people stories) and **operational blocks** (departures board, transportation modes, advisories). The site reads as a magazine that knows it's also an operating system.

The IA pillar pages (flights, transportation, explore, dine-shop-relax) inherit the same routing/composition logic, dialled to that pillar's audience.

## Key characteristics

- **Audience-aware first viewport.** Every page declares "who is this for, right now?" within the first 1.5 viewports.
- **Type carries hierarchy.** Sharp Grotesk Semibold for h1/h2/section heads/named-display moments; Helvetica Now for body, h3, UI. The display family appears 4–6 times per home, not once.
- **Single-action color discipline.** `panynj-blue` solid fill = single primary action. `panynj-deep-blue` for inline link text. Headlines in `ink`. Tabs use under-bar, not text-color, for active state.
- **Photography at intended scale.** Captured editorial photography reused at full-bleed (16:9), 4:5 portrait, or 4:3 photo — never thumbnail, always with `srcset` and descriptive alt.
- **Construction-aware editorial.** Disruption is a section type, not a banner. The yellow band is reserved for genuinely urgent inline warnings (acute safety, immediate closure).
- **Density: balanced.** `sectionPadding.desktop = 64px` — calm but not airy. Multi-audience hard floor (>5 sections, >2 audience tracks) is active.

## Rules

- Display family (Sharp Grotesk) used **at minimum 4 times per home** at scales ≥ 64px (vs. current site's 1 use at 320px).
- Solid-fill `panynj-blue #0045FF` reserved for the *single* primary action per surface (Search, Book Parking, Subscribe to Status). Anything else is link-blue, secondary, or unfilled.
- Inline text links use `panynj-deep-blue #022DB7` with underline-on-hover. Never `panynj-blue` solid text on body grounds.
- Active-tab indicator: 3px under-bar in `panynj-deep-blue`, not text recolor.
- Yellow (`advisory-yellow #FFCD00`) used **exclusively for warning bands**. Never decorative, never headline, never icon-fill.
- Every editorial photo carries descriptive `alt`; cosmetic photos use empty `alt` (`alt=""`).
- Image elements include `srcset` matching rendered sizes (no >2× oversampling).
- Construction status references the date/window of impact ("Through Sep 2026") not vague "ongoing."

## Dos

- Open every page with audience-aware routing in the first viewport.
- Mix editorial and operational blocks down the page. No two consecutive 3-column-icon-card grids.
- Use Sharp Grotesk Semibold for departures-board column heads, named-people story headlines, and section heads at 64–96px.
- Reuse captured photography at intended dimensions (16:9 hero, 4:5 portrait, 4:3 photo).
- Voice: write headlines a New Yorker would say out loud.

## Don'ts

- No centered-hero + dual-CTA + 3-column-icon-card silhouette as a default home pattern.
- No "the journal," "atelier," "the studio" register vocabulary. JFK is not a magazine.
- No fare-deal banners, no destination-promo carousels, no consumer-airline marketing tone.
- No gold accents, no dark-mode cinematic — that's direction E.
- No yellow-as-decoration. Warnings only.
- No `panynj-blue` solid text on body grounds — too saturated for body density; use `panynj-deep-blue`.

## Components

- **`audience-router`** — first-viewport 5-up tile strip on home (Departing / Arriving / Pickup / Connecting / Visiting). Each tile: Sharp Grotesk Semibold label at 32–40px, sub-label in body, ink/blue arrow. Active-state on the tile the user picks.
- **`flight-search-panel`** — the Departing/Arriving conversion. Tabbed (Departures / Arrivals), date input, destination autocomplete, `panynj-blue` solid Search button. Floats when nested under the Departing tile; full-width when on /flights.
- **`departures-board`** — Sharp Grotesk Semibold column heads (TIME · DESTINATION · AIRLINE · FLIGHT · GATE · STATUS), monospace numerals optional, status pills (`success-green` for On Time, `slate-600` for Delayed, `panynj-navy` for Boarding). Captured pattern from `/flights`.
- **`status-strip`** — full-width band, ink ground or white, surfaces real-time state ("Security wait T4: 18 min · T5 pickup zone moved to lot 2 · Today's weather: clear").
- **`advisory-band`** — `advisory-yellow` ground, ⚠ icon, paragraph + "Learn more →". Reserved for acute disruption only.
- **`editorial-photo-block`** — full-bleed 16:9 photograph + Sharp Grotesk Semibold caption headline at 64–96px overlaid or stacked. Used for terminal stories, NYC connection, named-people features.
- **`story-card`** — 4:5 portrait photo + name + role + one-sentence quote. Stack of 3–4 in a strip. Used for "people of JFK."
- **`3col-icon-card`** — retained from current site for utility navigation only (not as default content unit). Icon-tile in `panynj-deep-blue`, 20px Helvetica Now bold h3, body, secondary text-link.
- **`section-header`** — Sharp Grotesk Semibold at 64–96px, ink, ≤ 8 words. Optional one-line slate-700 deck below at 20px.
- **`footer`** — PANYNJ co-brand + utility links (grouped: Help / Legal / About / Connect) + 3 social icons. Replaces current flat list.
