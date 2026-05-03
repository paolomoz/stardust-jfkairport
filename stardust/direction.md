<!--
_provenance:
  writtenBy: stardust:direct
  writtenAt: 2026-05-03T00:00:00Z
  stardustVersion: 0.3.0
-->

# Direction

## 2026-05-03 — initial direction (B + Mode A)

### User phrase

> "Direction: B — NYC-flavoured gateway. Mode: keep type and colors as is."

### Restated in dimensional vocabulary

| Axis | Movement | Notes |
|---|---|---|
| register | brand (no change) | service-utility hybrid retained |
| expressive | restrained → committed | type + photography earn more space |
| distinctiveness | familiar → distinctive | escape municipal-modernism template silhouette |
| tone | institutional → warm | NYC sensibility; less procedural; airline-adjacent without becoming an airline |
| density | balanced (default) | multi-audience hard floor caps `sectionPadding` ≤ 64px |
| decade | 2025-now (no change) | inheriting current era |
| audience | implicit → 5-way explicit routing | structural change, not visual |
| amplified-trait (variant role B) | NYC editorial sensibility | bigger Sharp Grotesk, neighborhood/people-led photography, "Welcome to New York" voice |

### Mode resolution

**Mode A (brand-faithful) is active.** Captured brand signal stamped `signal-strong` in extract: 11 distinct palette colors, two named custom-licensed type families (Sharp Grotesk Semibold + Helvetica Now for PANYNJ).

User explicitly pinned both:
- **Type pinned** — Sharp Grotesk Semibold (display) + Helvetica Now for PANYNJ (body). Both inherited verbatim from `_brand-extraction.json`. `font_deck.picked_by = "user-constraint"`.
- **Palette pinned** — full PANYNJ blue family + ground-white/ice-blue/mint alt grounds + advisory-yellow + success-green + slate scale. Inherited from `_brand-extraction.json` with **role renames**:
  - `panynj-blue` was used for everything (links + CTAs + headlines + active tabs); under direction B the role narrows to **single primary action per surface**
  - `panynj-deep-blue` was CTA hover only; promoted to **inline link color**
  - `ink` was body text; promoted to **headlines + body** (lets type weight carry hierarchy)

These are role renames, not palette divergence — the hex values are unchanged.

### Divergence (rolled dimensions)

In Mode A, only the non-locked dimensions roll; type and palette are inert. Result:

```
decade           inherited   → 2025-now (current)
craft            inherited   → web (no print/letterpress crossover)
register         inherited   → brand
ground-family    override    → stark-white (#FFFFFF brand-faithful, beats any seed roll)
font deck        inherited   → Sharp Grotesk + Helvetica Now (user-constraint)
palette          inherited   → PANYNJ family (user-constraint, with role renames)
amplified trait  user-direction → NYC editorial sensibility (B's job)
```

### Brand-faithful inversions (the load-bearing edits)

These are the captured-vs-target deltas that the redesign must enforce, drawn from `home-improvements.md`:

1. **Color-imbalance.** From "blue carries every cue" → "blue carries single primary action; type weight carries hierarchy."
2. **Display-body cliff.** From "Sharp Grotesk reserved for hero" → "Sharp Grotesk used ≥ 4× per home at ≥ 64px."
3. **IA clutter.** From "5 audiences share undifferentiated home" → "explicit 5-way audience router in viewport one."
4. **Photography under-cashed.** From "thumbnail rendering, no alt" → "full-bleed at intended dims, descriptive alt, srcset."
5. **Voice distance.** From "civic-procedural" → "warm, direct, faintly editorial — what a New Yorker would say out loud."
6. **Template silhouette.** From "same skeleton on every page" → "broken on home; each IA pillar varies layout strategy."

### Anti-references (target guardrails)

- Generic-2026-SaaS silhouette
- Editorial-register vocabulary on a civic brand ("the journal," "atelier")
- Consumer-airline marketing tone (fare-deal banners, destination promos)
- Premium-luxury cues (gold accents, dark-mode cinematic — that's direction E)
- Yellow used decoratively
- Stock photography (use captured editorial only; signal gaps honestly with placeholders)

### IA-priority preservation audit

Captured signals that fired triggers (from `intent-dimensions.md` § 8) and become hard constraints in `DESIGN.json.extensions.iaPriorities[]`:

1. **audience-routing** — 5 audiences share home; `preserveAs: first 1.5 viewports`
2. **commercial-conversion** — flight-search panel; `preserveAs: first-viewport on home, full-width on /flights`
3. **crisis-affordance** — construction advisories on /transportation; `preserveAs: first-class section on home (status strip)`
4. **accessibility-affordance** — dedicated /accessibility-services hub; `preserveAs: primary-nav-level entry retained`

### Plan resolved

Phase 2.5 → improvements list (home only — load-bearing for variants) ✓
Phase 3 → target `PRODUCT.md` written ✓
Phase 4 → target `DESIGN.md` + `DESIGN.json` written (with `iaPriorities[]` and `divergence` audit trail) ✓
Phase 5 → this document + state.json update ✓

### Next step

`stardust:prototype` on home — user has requested 5 variants, each varying on one axis (audience-routing-led / editorial-NYC-led / typographic-heroic / live-ops-led / stories-led). Each variant amplifies a different captured trait while honoring all six brand-faithful inversions and all four IA-priorities.
