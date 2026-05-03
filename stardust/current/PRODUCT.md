<!--
_provenance:
  writtenBy: stardust:extract
  writtenAt: 2026-05-03T00:00:00Z
  purpose: descriptive snapshot of the existing jfkairport.com PRODUCT
  readArtifacts:
    - stardust/current/_brand-extraction.json
    - stardust/current/pages/{home,flights,transportation,explore-jfk,dine-shop-relax}.json
    - stardust/current/_crawl-log.json
  stardustVersion: 0.3.0
-->

# PRODUCT — jfkairport.com (current state)

## Register

**brand** — service-utility hybrid. The site behaves as a marketing landing for the JFK Airport experience (full-bleed hero photography, editorial-scale h1, narrative section heads) but the dominant load-bearing surface is functional (flight search, parking booking, departures table, transportation modes). The hybrid is real, not an inconsistency.

## Users

Five distinct audiences share the home page:
- **Departing passengers** (highest volume) — need check-in time guidance, terminal info, security wait, parking, flight status.
- **Arriving passengers / pickup-drivers** — need arrival times, pickup zones (heavily disrupted by current construction), ground transportation.
- **Connecting passengers** — need terminal-to-terminal navigation (AirTrain, walk times).
- **Visitors / dwell-time travellers** — looking at dining, shopping, lounges, hotels, accessibility services.
- **Logistical / institutional** — air cargo, press, lost & found, feedback, partner-agency pathways (PANYNJ.gov).

The audience-routing problem is structurally hard: a single home page must serve a panicked late traveller, a relaxed early arrival, a pickup driver, and an institutional researcher — within seconds.

## Product Purpose

JFK Airport's official traveller-facing site, operated by the Port Authority of New York & New Jersey. **The job to be done is to reduce traveller anxiety and routing time at every stage of an airport interaction** — from "what's my flight status" to "where do I get picked up now that the road is closed for construction" to "is there a lounge in T5."

Scope: traveller-facing only. Air cargo, business affairs, and corporate matters are off-loaded to PANYNJ.gov via footer links.

## Brand Personality

Inferred from execution, not authored copy:
- **Civic-institutional, not consumer-airline.** This is the *airport*, not an airline. Tone is procedural, neutral, owner-of-record.
- **Confident at the wordmark, restrained in the body.** The 320px "JFK" hero is an editorial-grade move that says "this is a global brand"; the rest of the page reverts to small body copy and conventional 3-column card grids that say "we're a service site."
- **Investment-signaled but execution-templated.** Two custom-licensed type families (Sharp Grotesk + Helvetica Now) signal real brand investment; the page composition (hero + three-card row + cross-promo + advisory band) is a generic 2019-era municipal-modernism template.
- **Construction-aware.** The $19B JFK redevelopment program is acknowledged as load-bearing context — yellow advisory bands, redirect notices, rerouted pickup info. This is honest and necessary.

## Anti-references (inferred)

The site visibly avoids the aesthetics of:
- consumer airlines (no marketing flourishes, no fare-deal banners, no booking funnel)
- low-cost-carrier "everything yellow" energy (yellow is reserved for warnings only)
- city-tourism site (no sweeping "discover NYC" framing — JFK is treated as infrastructure, not a destination)

## Design Principles (inferred from execution)

1. **Function before flourish.** Every page leads with a hero + utility (search box, table, mode list). Editorial-style sections sit below the fold.
2. **One blue, used for everything.** `#0045FF` is the universal affordance signal — links, CTAs, headlines, active tab. Risk: when one color carries every cue, hierarchy collapses.
3. **Typography earns the brand.** The custom families (Sharp Grotesk + Helvetica Now for PANYNJ) do most of the brand-distinctiveness work. The composition is template; the type is bespoke.
4. **Architectural over rounded.** 2px / 4px radii throughout. The site reads crisp, not friendly.
5. **Disclose disruption.** Construction advisories are surfaced near the affected functional context, not buried in a global banner.

## Accessibility & Inclusion

- Skip-to-content link present.
- Dedicated /explore-jfk/accessibility-services hub with 5 sub-pages (handicap transportation, vision, hidden disabilities, hearing, mobility) — surfaced via accessibility icon in primary nav. This is structurally serious.
- Image alt-text coverage is poor: 9 of 10 sampled hero/card images have empty `alt`. Cosmetic vs. informational distinction not made.
- `panynj-blue` on `ice-blue` background measures ~4.4:1 — borderline WCAG AA for normal text. Used for inline links inside informational tints; some instances may fail.
- `lang="en-us"` site-wide. No locale variant observed despite JFK being the largest international gateway in the US.
