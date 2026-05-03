<!--
_provenance:
  writtenBy: stardust:prototype
  writtenAt: 2026-05-03T00:00:00Z
  basis: 5 axis-differentiated variants of home, all under direction B + Mode A
  readArtifacts:
    - PRODUCT.md
    - DESIGN.md
    - DESIGN.json
    - stardust/direction.md
    - stardust/prototypes/home-improvements.md
    - stardust/current/pages/home.json
    - stardust/current/_brand-extraction.json
  stardustVersion: 0.3.0
-->

# Home — 5-variant shape brief

All variants share **direction B with Mode A pinned** — Sharp Grotesk Semibold display + Helvetica Now body, the PANYNJ blue family, single-action color discipline, audience-aware first viewport. They differ on a single amplification axis each. Each variant honors the six brand-faithful inversions in `home-improvements.md` and the four IA-priorities in `DESIGN.json.extensions.iaPriorities[]`.

## Shared scaffolding (all variants)

- **Header.** Sticky white nav: JFK + PANYNJ lockup left, primary nav (Flights / Transportation / Explore / Dine, Shop, Relax) middle, accessibility + search icon right. `data-section="header"`
- **Footer.** Grouped utility links (Help / Legal / About / Connect) + PANYNJ co-brand + 3 social icons. `data-section="footer"`
- **Anti-toolbox guardrails active.** No generic-2026-SaaS silhouette. No editorial-register-on-civic-brand. Hero text on photo always has scrim. `panynj-blue` solid fill = single primary action. No invented stats / addresses / quotes / named people.
- **Content sourcing.** Section heads, CTA labels, and existing copy come from `current/pages/home.json`. New copy proposed under direction B is voice-matched and marked. Fabricated content (a named-person quote, a real-time number) is rendered with `[data-placeholder]` signature.

---

## V1 — Audience-routing-led (axis: IA)

**Trait amplified:** the captured 5-audience IA need (5 audiences share an undifferentiated home today).

**Section sequence**
1. Header
2. **Audience router** (full-bleed, ground-white, 5 large tiles): Departing · Arriving · Pickup · Connecting · Visiting. Each tile carries Sharp Grotesk Semibold label at 40px, one-line slate-700 sub-label, and a count/status if relevant ("→ 612 departures today"). Active tile expands inline below the strip.
3. **Expanded task area** for the active tile. Default = Departing. Departing renders the captured **flight-search panel** (DEPARTURES / ARRIVALS tabs, date input, destination autocomplete, Search). Arriving = arrivals search. Pickup = construction-aware terminal pickup map + ride-app pickup zones. Connecting = AirTrain map + minimum-connection-time table. Visiting = dine/shop/relax + airport map.
4. **Today at JFK status strip** — security wait by terminal, pickup state by terminal, weather, AirTrain status. Three-up live cards on white.
5. **Construction reality** — section head + image + paragraph + "What's open today / What's changed" two-up. Reuses the captured "$19B redevelopment" framing but reframes from announcement to current state.
6. **Accessibility services** — single full-width band, ice-blue ground, link to dedicated hub.
7. **Cross-promo** — three IA tiles (Transportation / Explore / Dine, Shop, Relax) at quiet scale.
8. Footer.

**Layout strategy:** 5-tile router is the single hero. No giant photo above it. Sharp Grotesk Semibold lives in the tile labels (40px) and section heads (64px).

**Differs from V2/V3/V4/V5 by:** IA priority (audience-routing first), section sequence (no editorial hero), section presence (today-at-jfk status strip is a primary section).

---

## V2 — Editorial NYC-led (axis: composition)

**Trait amplified:** the underused editorial photography (current site renders editorial photos at 12× oversampled thumbnail scale).

**Section sequence**
1. **Quiet sticky toolbar** instead of header — JFK lockup + 4 nav links + sticky compact flight-search trigger button right ("Search flights →"). Function present, not central.
2. **Editorial hero** — full-bleed 16:9 captured photograph (Manhattan skyline through terminal window) with massive Sharp Grotesk Semibold caption stacked left at 96–160px: *"The airport of New York."* Sub-deck at 24px slate-700 below: "612 flights today, 90+ destinations, every borough an hour away."
3. **Two-column feature block** — left column: 60ch editorial paragraph about JFK as a place (terminal stories, art, food, the people). Right column: 4:5 portrait photo (named participant or terminal interior). Sharp Grotesk Semibold pull-quote at 56px overlaid.
4. **Magazine-grid story strip** — three editorial cards (Story 1: "What's open at T4," Story 2: "AirTrain to Jamaica," Story 3: "Hidden Disabilities Sunflower"). Each card = 4:3 photo + 32px Sharp Grotesk title + 16px deck + read-more link.
5. **Quiet operational strip** — "Get in, get out, get parking" — three small cards in body register (no display family), each linking to /flights, /transportation, /transportation/parking. Compact.
6. **Construction editorial** — full-bleed photo (or honest placeholder) + Sharp Grotesk Semibold "Building tomorrow's JFK" + paragraph + "What's open / What's coming" inline.
7. **Editorial CTA** — single full-width band, Sharp Grotesk Semibold "Plan your day at JFK", primary CTA `panynj-blue` button "Search flights".
8. Footer.

**Layout strategy:** photography dominates; type plays editorial-magazine; flight-search demoted to sticky button. 2-col blocks and magazine grids replace 3-col-icon-card.

**Differs from V1/V3/V4/V5 by:** layout strategy (magazine grid + 2-col blocks), section presence (editorial cards instead of audience tiles), function/aesthetic balance (function quieted).

---

## V3 — Wordmark-heroic / typographic (axis: type)

**Trait amplified:** the captured Sharp Grotesk display capability (the existing 320px hero proves the family can carry weight).

**Section sequence**
1. Header
2. **Wordmark hero** — black `ink` ground, full-bleed, Sharp Grotesk Semibold "JFK" at 280px+ centered with tight tracking. Below at 32px: "John F. Kennedy International Airport · New York City." Single small primary action: "Search flights →" in `panynj-blue` text-button.
3. **Display section 1** — "Where you're going" — Sharp Grotesk Semibold at 160px ink on white. Right side: compact flight-search panel collapsed to a 2-line form. Photo (16:9) at right edge bleeding to the page edge.
4. **Display section 2** — "Getting here" — Sharp Grotesk Semibold at 160px on `ice-blue` ground. Three transportation-mode tiles below (AirTrain · Taxi · Parking) at body scale.
5. **Display section 3** — "While you're here" — 160px on white. Three story-tiles (Dine · Shop · Relax) using captured imagery, each tile = full-bleed photo + label.
6. **Display section 4** — "Building tomorrow" — 160px on `mint-tint` ground. Construction status + redevelopment editorial.
7. **Display section 5** — "Help, anytime" — 160px on white. Accessibility services + 24/7 contact.
8. Footer with "JFK" wordmark at 96px in footer header.

**Layout strategy:** Sharp Grotesk Semibold drives every section transition. Section heads are the page architecture. Photography is supporting, often masked by type or right-bleed.

**Differs from V1/V2/V4/V5 by:** type theatricality (display family at 160px+ in five places), layout strategy (display-anchor per section), section presence (no audience-router; display sections substitute).

---

## V4 — Live-ops / departures-board-led (axis: data)

**Trait amplified:** the real-time departures table pattern captured on `/flights` (this is the strongest functional signal in the existing site).

**Section sequence**
1. **Mini status strip** — full-width navy band above header: live system state — "Security T4: 18 min · T5 pickup: lot 2 · AirTrain: normal · 612 dep today". Sharp Grotesk Semibold monospace numerals.
2. Header (compressed; logo + 4 nav + accessibility, no search icon since search is below).
3. **Live departures board hero** — full-width, ink ground, Sharp Grotesk Semibold column heads (TIME · DESTINATION · AIRLINE · FLIGHT · GATE · STATUS) at 24–32px monospace, white type on ink, 8 rows visible. Status pills (`success-green` On Time, `slate-600` Delayed, `panynj-deep-blue` Boarding). Filter row above: Departures/Arrivals tabs (3px under-bar `panynj-deep-blue`), search input, time-window filter, destination filter. Single primary action: "Subscribe to gate changes →" in `panynj-blue`.
4. **Today at JFK dashboard** — three large status cards: Security wait by terminal (live), Parking availability by lot (live), Construction state (which terminals/roads are affected today). Each card uses big numerals, type-led not graphic.
5. **Quick-access 5-tile mini-router** — compact horizontal strip of audience destinations (Departing / Arriving / Pickup / Connecting / Visiting). Smaller than V1, function-only.
6. **Editorial accent strip** — single editorial card: terminal story (4:3 photo + Sharp Grotesk title + paragraph). Reminds the user there's a brand here.
7. Footer.

**Layout strategy:** data is the page architecture. Big monospace numerals carry visual weight where editorial photography would in V2.

**Differs from V1/V2/V3/V5 by:** data-led IA (live board first), section sequence (status strip above header), section presence (today-at-jfk dashboard, mini-router demoted), photography minimal.

---

## V5 — Stories / people-led (axis: voice)

**Trait amplified:** the captured pattern of editorial photography of named program participants (e.g., the accessibility-services photographs).

**Section sequence**
1. Header
2. **Portrait collage hero** — full-bleed grid of 4 captured-photo portraits stitched edge-to-edge (4:5 each, 4-up across). Overlay headline at 120px Sharp Grotesk Semibold left-aligned: *"612 flights today. The people who make it happen."* Sub-deck at 20px white slate-300 below.
3. **Big quote feature** — full-bleed, ink ground, Sharp Grotesk Semibold at 80px left-anchored: *"I started at T4 in 1998. The people changed; the welcome didn't."* Pull-quote attribution at 16px: "[PLACEHOLDER — Maria, T4 ground services since 1998]". Right side: 4:5 portrait photo. (Quote and name are clearly placeholder per F-002.)
4. **4-up people strip** — four story-cards horizontal, each = 4:5 portrait + name + role + one-line quote. All marked PLACEHOLDER (no real named-person content sourced; the variant demonstrates the *pattern* without inventing identities).
5. **"Today at JFK" practical strip** — three compact cards: today's departures count, today's pickup state, today's security wait. Body-scale, no display family.
6. **Audience routing** — quiet 5-tile strip at compact scale. Functional, not foregrounded.
7. **Visit & welcome** — single editorial photo + Sharp Grotesk title + paragraph about JFK as a public place + cross-promo to dine/shop/relax/accessibility.
8. Footer.

**Layout strategy:** people photography drives the page; voice carries warmth; function reachable but quieted. Most warm of the 5.

**Differs from V1/V2/V3/V4 by:** subject (named people instead of architecture/data), voice (warmer, quote-led), layout strategy (portrait-grid hero, big-quote feature blocks), section sequence (function demoted below story).

---

## Per-pair differentiation check (≥ 2 substantive changes)

|  | V1 | V2 | V3 | V4 | V5 |
|---|---|---|---|---|---|
| **V1** | — | seq, layout, photo | seq, layout, type | seq, IA, layout | seq, voice, photo |
| **V2** | | — | layout, photo, type | seq, layout, function | voice, layout, sub |
| **V3** | | | — | seq, layout, photo | sub, layout, voice |
| **V4** | | | | — | seq, sub, voice |

All 10 variant pairs differ by ≥ 2 substantive changes from {section sequence, section presence, layout strategy, IA priority}. Differentiation contract met.

## C-cliff check

None of V2–V5 are defined as "V1 but more." Each amplifies a distinct captured trait (editorial photography / type capability / live-data pattern / named-people photography). No "extreme [axis]" definitions. No editorial-register vocabulary applied to the civic brand. No 96px+ padding-as-personality moves. Contract met.

## Unsourced content (per F-002 placeholder contract)

- **V1:** "612 departures today" — placeholder live count.
- **V2:** "612 flights today, 90+ destinations" — placeholder editorial framing.
- **V3:** all section-anchor headlines ("Where you're going," "Getting here," etc.) — voice-authored under direction B; not direct quotes from current site.
- **V4:** all live numerals (security waits, pickup states, parking availability) — placeholder demo data.
- **V5:** all named-person quotes and identities — explicitly placeholder; the pattern is real, the people aren't.

Each placeholder is wrapped with `[data-placeholder]` in the rendered HTML so reviewers can see the gap rather than mistake it for sourced content.
