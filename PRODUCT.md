<!--
_provenance:
  writtenBy: stardust:direct
  writtenAt: 2026-05-03T00:00:00Z
  basis: user direction "B — NYC-flavoured gateway" with Mode A pinned (type + palette inherited)
  readArtifacts:
    - stardust/current/PRODUCT.md
    - stardust/current/_brand-extraction.json
    - stardust/direction.md
  stardustVersion: 0.3.0
-->

# PRODUCT — jfkairport.com (target)

## Register

**brand** — service-utility hybrid. Civic stewardship is the foundation; New York editorial sensibility is the amplification. The site behaves as both an operational tool (flight status, parking, transportation, advisories) and an editorial surface (the airport of New York City — its terminals, its art program, its restaurants, the people who keep it running).

The hybrid is not a compromise. The operational surface earns trust; the editorial surface gives JFK a voice that doesn't exist on any peer airport site.

## Users

Five audiences share the home and most IA pillar pages. Routing is **explicit**, not implicit:

- **Departing passengers** — need check-in time guidance, terminal info, security wait, parking, flight status. Highest volume.
- **Arriving passengers** — need their flight's actual arrival time, baggage claim, ground transportation, the latest pickup zone (acutely disrupted by current construction).
- **Pickup drivers / meeters** — need *current* pickup zones (changing weekly under JFK Redevelopment), terminal-by-terminal access status, ride-app pickup points, parking strategy.
- **Connecting passengers** — need terminal-to-terminal navigation (AirTrain, walk times, minimum connection times), gate-change subscription.
- **Visitors / dwell-time travellers** — looking at dining, shopping, lounges, hotels, accessibility services, and the editorial content that distinguishes JFK from "an airport."

A sixth audience — **logistical / institutional** (cargo, press, lost & found, partner-agency) — is not optimised for; it's correctly off-loaded to PANYNJ.gov via the footer.

## Product Purpose

JFK Airport's official traveller-facing site, operated by the Port Authority of New York & New Jersey. **The job to be done is to reduce traveller anxiety and routing time at every stage of an airport interaction**, while making the site feel unmistakably *of New York* — not generic municipal infrastructure.

Three durable promises:
1. **You can find what you need in one viewport.** Audience-aware routing on home; clear primary action on every section.
2. **The construction reality is honest, not buried.** While the redevelopment is mid-flight (~2025–2028), disruption status is first-class content, not a yellow band.
3. **The site sounds like New York.** Voice is warm, direct, faintly editorial. No corporate distance in copy that humans actually read.

Scope: traveller-facing only. Air cargo, business affairs, and corporate matters remain off-loaded to PANYNJ.gov.

## Brand Personality

Inherited from the captured surface (Mode A) and amplified along the NYC-flavoured axis:

- **Civic-confident, not consumer-airline.** This is the *airport*, not an airline. Tone is owner-of-record. We don't sell flights; we host them.
- **Editorial sensibility, civic accountability.** Sharp Grotesk's display capability gets used at scale — section heads, named-people story headlines, departures-board columns. The body voice carries warmth without losing operational accuracy.
- **New York–native.** Photography of named people who work here. References to terminals as places, not abstractions ("at T5 with JetBlue"). Acknowledgement of NYC realities (traffic, weather, the Q3 bus, the AirTrain) without becoming a tourism site.
- **Construction-aware.** Disruption disclosure is inline, contextual, current-state — not a banner pinned forever to a global header.
- **One blue, used surgically.** `panynj-blue #0045FF` is reserved for the single primary action per surface. Inline links use the deeper `panynj-deep-blue #022DB7`. Headlines use `ink #09090B`. Hierarchy is carried by type weight + scale, not by color alone.

## Anti-references

The redesign visibly avoids:

- **Generic-2026-SaaS silhouette** (centered hero + dual-CTA + 3-column-icon-card-grid as default — that template is the problem we're solving).
- **Editorial-register vocabulary applied to a civic brand.** No "the journal," "atelier," "the studio," "the gazette." JFK is not a magazine.
- **Consumer-airline marketing tone.** No fare-deal banners, no destination-promo carousels, no "have a wonderful flight" copy.
- **Premium-luxury cues.** No gold accents, no dark-mode cinematic, no champagne photography. JFK is a public agency; if we read as DXB, we've gone wrong.
- **Yellow used decoratively.** `advisory-yellow #FFCD00` stays warning-only, full stop.
- **Stock photography.** Where captured photography exists, reuse it at intended scale. Where it doesn't, signal the gap honestly with a placeholder, not a Unsplash silhouette.

## Design Principles

1. **Lead with the audience the user actually is.** Every page surfaces "what stage are you in?" routing within the first viewport. Departing ≠ Arriving ≠ Pickup ≠ Connecting ≠ Visiting — make the differences visible.
2. **One color does one job.** Solid-fill `panynj-blue` = the *single* primary action on the surface. Anything else is link-blue, ink, or no color at all. Hierarchy is type-led, not color-led.
3. **Cash the type investment everywhere, not just the hero.** Sharp Grotesk Semibold is licensed; use it. Section heads, departure-board column heads, named-people story headlines.
4. **Disclose disruption as first-class content.** Construction, weather, security, gate-changes — surfaced inline near the affected affordance, not buried, not banner-only.
5. **Photography earns the page.** If an editorial photo can carry a section, let it carry the section. Full-bleed by default; thumbnail only when the photo is decorative. Always with descriptive alt.
6. **New York shows through.** In photography subjects (named people who work at JFK), in copy ("the AirTrain to Jamaica," "the Q3 bus", "Terminal 5 with JetBlue"), and in voice (warm, direct, faintly self-aware).

## Accessibility & Inclusion

Mode-A inheritance plus three upgrades:

- **Image alt-text discipline.** Every editorial photo carries descriptive alt; cosmetic photos use empty alt explicitly. No "(no alt)" gaps.
- **Affordance distinguishability.** With one color carrying every cue removed (Principle 2), interactive elements gain non-color cues — underline on links, fill+padding on buttons, under-bar on tabs. Improves screen-reader inferences and keyboard scanning.
- **Locale.** JFK is the largest international gateway in the US; the site is `en-us` only. The redesign target language is English — internationalisation is **deliberately out of scope** for this round to keep it shippable, but the typographic system uses Latin-only constraints that don't preclude future locale work.
- **Accessibility hub** retained at primary-nav level; the dedicated /accessibility-services entry stays prominent.
