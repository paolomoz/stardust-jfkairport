# Migration plan: jfkairport.com full-site migration

**Started:** 2026-05-03
**Locked design:** `home-V1-faithful-navy-v7-herofeed-proposed.html` (after adapt + polish round)
**Direction:** B with Mode A (NYC-flavoured gateway, brand-faithful)
**Inventory:** 55 pages discovered via sitemap.xml; 5 already extracted (home, flights, transportation, explore-jfk, dine-shop-relax); 50 to extract this run
**Authority to proceed without confirmation:** explicit user instruction (user away during the run)

---

## Operating constraints (autonomous decisions)

| Decision area | Choice this run |
|---|---|
| Real-time data values | Illustrative placeholders, no backend wiring; documented in page provenance |
| Voice-authored copy (H2 rephrasings, herofeed entries, dispatch sentence) | Ships under direction B voice rule with provenance |
| Captured PANYNJ assets (icon font, brand fonts, editorial imagery) | Reused at semantic position per Mode A image-reuse contract |
| Critique gating between phases | Waived per user instruction; quality verification at the end |
| Combined-polish per finding 11 | One adapt+polish round on home; one polish round per archetype |
| Stale flag | Don't re-extract the original 5 pages unless content known stale |

---

## Phase 0 — Lock the home design (~10 min)

1. **Adapt** v7-herofeed via `impeccable:adapt` for tablet (768px) and mobile (375px) breakpoints. Already partially handled (mobile herofeed fallback). This run hardens edge cases: small-mobile audience tile stack, task-panel single-column, hero wordmark `clamp()` floor on narrow viewports.
2. **Polish** the adapted file via `impeccable:polish`. Final pass for chrome, micro-spacing, typography rhythm, accessibility honesty.
3. **Promote** the polished file to `stardust/prototypes/home-proposed.html` (the spec-canonical name).
4. **Mark approved** in `stardust/state.json`: `pages[home].status = "approved"`, append history entry.

**Verification:** open `home-proposed.html` at viewports 1440 / 768 / 375 via Playwright; capture screenshots; zero JS errors.

---

## Phase 1 — Extract `--prep` full sitemap (~15 min)

1. Re-fetch the sitemap to confirm the 55-page inventory hasn't changed (5/3/2026 vs initial 5/3/2026 capture; should match).
2. Skip the 5 already-extracted pages (home, flights, transportation, explore-jfk, dine-shop-relax). Their `currentStatePath` is populated and `_brand-extraction.json` was aggregated from them.
3. **Crawl the remaining 50 pages** with the existing Playwright recipe (`extract-page.mjs`), in parallel batches of 5 to keep runtime manageable. Each page produces `current/pages/<slug>.json` with the standard schema.
4. **Page typing** per `extract --prep` spec. Inferred types from URL pattern + content shape. Catalog from `state-machine.md`:
   - `landing`, `article`, `listing`, `program`, `form`, `static`, `unique`
   - JFK-specific likely: `landing` (1: home), `ia-pillar` (4: flights/transportation/explore-jfk/dine-shop-relax), `transport-mode` (8 under /transportation), `terminal` (5: T1/T4/T5/T7/T8), `terminal-detail` (3: airlines-at-terminal-X / About-JFKIAT), `accessibility-service` (5 under /accessibility-services), `alert-detail` (10 under /alerts-advisories), `alerts-listing` (1: /alerts-advisories), `explore-detail` (3: hotels/services/airport-map), `dining-detail` (3: food/shops/lounge-and-rest), `flight-info` (4: arrivals/departures/connections-guide/airlines), `static` (6: feedback/contact/faq/lost/disclaimer/privacy), `unique` (0)
5. **Module candidate detection** per spec: cross-page recurring DOM patterns (header, footer, advisory band, the herofeed-style live status, etc.). Each candidate gets a draft entry in `DESIGN.json.extensions.modules[]` with `status: "candidate"`.
6. **Typed content slots** per page-type capture rules.
7. Write to `stardust/state.json` with `pages[].type` populated.

**Verification:** `state.json` contains 55 pages, all with status `extracted` and `type` non-null.

---

## Phase 2 — Direct `--prep` confirm catalog (~5 min)

1. Read the inferred page-type catalog from Phase 1.
2. **Auto-accept** the LLM inference (user is away; no opportunity to refine). Document the inferences in `stardust/direction.md` § Prep mode log so user can audit on return.
3. **Promote module candidates → confirmed** for the obvious cases (header, footer, advisory band). For ambiguous cases, accept the candidate slot vocabulary as-is.
4. **Color reservations**: none expected (no centennial-red-style reserved color in the JFK brand).
5. **Brand metadata defaults**: write to `DESIGN.json.extensions.metadata`:
   - `siteName: "John F. Kennedy International Airport"`
   - `defaultOgImage: <captured>`
   - `themeColor: "#011565"`
   - `organization: { name: "Port Authority of NY & NJ", url: "https://www.panynj.gov/", sameAs: [facebook, twitter, whatsapp] }`
   - `locale: "en-us"`
6. **Wider direction re-evaluation**: confirm direction B + Mode A still holds against the wider crawl. Expected outcome: confirm, no change.

**Verification:** `direction.md` has a § Prep section with the confirmed catalog. `DESIGN.json.extensions.metadata` populated.

---

## Phase 3 — Prototype `--prep` archetypes per page type (~40 min)

For each confirmed page type, author one representative archetype:

| Type | Archetype slug | Representative content |
|---|---|---|
| landing | home | already approved (Phase 0) — canon-author |
| ia-pillar | flights | flight search panel + live departures table + IA tiles |
| transport-mode | transportation/airport-parking | mode hero + booking module + content sections |
| terminal | explore-jfk/terminals/terminal-4 | terminal hero + airlines-at-this-terminal + amenities |
| terminal-detail | explore-jfk/terminals/terminal-1/airlines-at-terminal-1 | airlines list + terminal context |
| accessibility-service | explore-jfk/accessibility-services/mobility-accessibility | service-detail layout |
| alert-detail | alerts-advisories/jfk-redevelopment | single-alert article layout |
| alerts-listing | alerts-advisories | list of all alerts |
| explore-detail | explore-jfk/hotels | grid of options + filters |
| dining-detail | dine-shop-relax/food | grid of restaurants by terminal |
| flight-info | flights/arrivals | live arrivals table |
| static | contact-us | static info + form |

For each archetype:
1. Author `<slug>-shape.md` per `prototype/reference/page-shape-brief.md`
2. Render `<slug>-proposed.html` directly (per dogfood finding 11: combine polish into one round, don't chain enhance commands)
3. Apply combined polish: layout → typeset → colorize → animate → delight in single render
4. **Auto-approve** (no stops; user away)
5. After first approval (home), `prototype --prep` writes canon to `stardust/canon/`:
   - `header.html`, `footer.html`, `herofeed.html` (if reused)
   - `canon.css`
   - Module renderings under `canon/modules/`
   - `DESIGN.json.extensions.canon` updated
6. Subsequent archetype approvals run canon-extraction in diff mode: net-new items append; conflicts log as deviations.

**Verification:** 11 archetype files in `stardust/prototypes/`; `stardust/canon/` populated; `state.json` shows each archetype `approved`.

---

## Phase 4 — Migrate all 55 pages (~10 min)

Per `migrate/SKILL.md`:

1. For each page in `state.json.pages[]`:
   - If page is the canon-author (home) → output the approved file directly to `stardust/migrated/<path>/index.html`
   - If page matches an approved archetype's type → fork the archetype (Path A′), substitute per-page content from `current/pages/<slug>.json`, write to `stardust/migrated/<path>/index.html`
   - If page is `unique` → render one-off (no expected uniques; just-in-case fallback)
2. Site-wide canon (header, footer, herofeed) inlined into each page.
3. Asset paths rewritten to relative paths under `stardust/migrated/assets/`. Copy `current/assets/{icons,media}` into `migrated/assets/`.
4. Per-page metadata composed: title, description, og:image, theme-color (per page-type defaults).
5. Internal links rewritten from `/path` to `path/index.html` for static-file viewing. Or leave as `/path` if served via a static server.

**Output structure:**
```
stardust/migrated/
  index.html            (home)
  assets/
    icons/...           (panynj-icons + brand fonts)
    media/...           (captured imagery)
  flights/index.html
  flights/arrivals/index.html
  flights/departures/index.html
  ...
  alerts-advisories/index.html
  alerts-advisories/jfk-redevelopment/index.html
  ...
  contact-us/index.html
```

**Verification:** 55 `index.html` files emitted. Total page count matches sitemap.

---

## Phase 5 — Verify + write site index (~10 min)

1. Smoke-test 8 sample pages via headless Playwright: home, flights, /flights/arrivals, /transportation, /transportation/airport-parking, /explore-jfk/terminals/terminal-4, /alerts-advisories, /alerts-advisories/jfk-redevelopment.
2. For each: confirm zero JS errors, no broken `<img>` (status 200 on every src), header + footer + herofeed render, page-specific h1 present.
3. Write `stardust/migrated/_site-index.html`: a developer-facing index of all 55 migrated pages, grouped by section, with thumbnail + title + path.
4. Print final report: pages migrated count, total assets size, smoke-test results, known-placeholder content list.
5. Open the migrated home in the user's default browser as the deliverable landing point.

**Verification:** smoke test returns clean across 8 sample pages. Site-index renders. Home opens.

---

## Time budget

| Phase | Estimate |
|---|---|
| 0 lock home | ~10 min |
| 1 extract --prep | ~15 min |
| 2 direct --prep | ~5 min |
| 3 prototype --prep | ~40 min |
| 4 migrate | ~10 min |
| 5 verify | ~10 min |
| **Total** | **~90 min** |

---

## Stop conditions

I will stop and surface to the user only if:
- An impeccable hard-rule violation cannot be resolved within scope (a banned pattern is structurally required by the design)
- Asset download fails irrecoverably for >5% of references
- Critique would refuse to approve a critical archetype (home, flights, alert-detail) on a P0 contrast or accessibility issue
- The number of distinct page types exceeds 15 (would warrant user confirmation before authoring)

Otherwise: proceed continuously, document everything in provenance, deliver the full migrated site.
