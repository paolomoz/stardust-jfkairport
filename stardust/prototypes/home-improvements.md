<!--
_provenance:
  writtenBy: stardust:direct
  writtenAt: 2026-05-03T00:00:00Z
  readArtifacts:
    - stardust/current/_brand-extraction.json
    - stardust/current/brand-review.html
    - stardust/current/pages/home.json
  stardustVersion: 0.3.0
-->

# Improvements — home

Five specific weaknesses on `https://www.jfkairport.com/` as captured in `stardust/current/pages/home.json` and `_brand-extraction.json`. Each item is a load-bearing brief for the home variants. Variants A–E close (or amplify around) every item below.

1. **[ia-clutter]** Five distinct audiences share an undifferentiated first viewport — the home opens with a single full-bleed photo + a flight-search panel that assumes "departing or arriving," but does not address the pickup-driver crisis (acute right now under the $19B redevelopment), the connecting passenger, or the dwell-time visitor. Audience routing is implicit, not explicit.
   *Fix:* Surface a 5-way audience picker in viewport one — Departing / Arriving / Pickup / Connecting / Visiting — each routed to its own task surface. The flight-search panel becomes the default interaction inside the Departing/Arriving paths; the Pickup path leads with current construction state.

2. **[color-imbalance]** `panynj-blue #0045FF` carries every interactive cue — link text, primary CTAs, headlines, active tabs — used 211 times across the sample. Hierarchy collapses; the user can't tell "navigate" from "submit" at a glance.
   *Fix:* Reserve `panynj-blue #0045FF` solid fill for the *single primary action per surface* (Search). Recolor inline link text to `panynj-deep-blue #022DB7` with underline-on-hover. Recolor headlines to `ink #09090B` (let type weight, not color, carry headline emphasis). Active-tab indicator stays blue but moves to a 3px under-bar, not text color.

3. **[display-body-cliff]** The 320px Sharp Grotesk hero is exceptional — then everything below collapses to a generic 16/20px Helvetica Now grid that any 2019 municipal site could produce. The brand investment is being under-cashed in the section type.
   *Fix:* Cash the Sharp Grotesk display family below the fold — section heads at 64–96px, departure-board column heads at 24–32px Sharp Grotesk, named-people story headlines at 80px+. Don't reserve the display family for the hero alone.

4. **[missed-opportunity-photography]** The captured editorial photography is real and well-shot (named-program participants, terminal interiors, NYC skyline) but rendered at thumbnail scale (312×416 from 1080×1440 sources — 12× oversampled) and almost entirely without `alt` text. The photography is the trust signal and it's being suppressed.
   *Fix:* Promote photography to full-bleed editorial scale at least once per scroll. Reuse captured images at their *intended* dimensions (16:9 hero, 4:5 portrait, 4:3 photo). Write descriptive alt for every editorial photo. Use `srcset` to stop oversampling.

5. **[voice-distance]** Section heads read as agency communication: *"Welcome to John F. Kennedy International Airport"*, *"Get your essentials and more at JFK"*, *"An entirely new $19B JFK is being constructed"*. No NYC flavour, no acknowledgment of traveller anxiety, no human warmth in a context where humans are mostly stressed.
   *Fix:* Voice rule — if a sentence reads more like an annual report than a person, rewrite it. *"You're flying out of JFK today"* > *"Welcome to John F. Kennedy International Airport"*. *"Construction at JFK — here's what's open and where to go"* > *"An entirely new $19B JFK is being constructed."* Keep procedural copy where it earns its keep (instructions, table headers, advisories).

6. **[template-silhouette]** All five IA pillar pages — and the home — share one composition skeleton: full-bleed photo hero → 52px h2 → 3-column icon-card grid → cross-promo → footer. The skeleton is municipal-modernism circa 2018. It's recognisable as *a template*, not as JFK.
   *Fix:* Break the silhouette on home in at least one structurally meaningful way — magazine-grid editorial, journey-staged tabs, departures-board hero, or named-people story strip. Each variant below picks one.
