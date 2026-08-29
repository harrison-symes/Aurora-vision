# AuroraVision Design Uplift Plan

Decision (2026-08-30): **Palette A "Aurora" · Type "Big Shoulders Display + IBM Plex" · Layout L1 "Rail"**.

Full proposal with alternatives: https://claude.ai/code/artifact/b46338ce-b343-4dd3-b0c0-b2a0d9db0db1

## Hard constraint: the Chōra map

The map's tooltip lines are computed from live `getBoundingClientRect()` geometry (`ChoraBubble.tsx`, `SVG_PADDING = 200`), the info panel is found via `document.querySelector('.chora-info-panel')`, and mobile ordering uses flex `order`. It must be pixel-identical after every phase.

**Never edit**

- `src/components/Chora/ChoraMap/ChoraMap.scss`
- `src/components/Chora/ChoraBubble/ChoraBubble.scss`
- `src/components/Chora/ChoraBubble/WorldTooltip.tsx`
- `src/components/Chora/ChoraInfoPanel/ChoraInfoPanel.scss`
- `src/components/Chora/ChoraMap/EEStars.tsx`

**Selectors JS depends on** — `.chora-map`, `.chora-info-panel`, `.chora-bubble` / `.active`, `.world-tooltip--{bottom-left|bottom-right|top-left|top-right|top}`, `.chora-map__bubble-row--1/2/3`.

**Global rules that would leak in** — do not add site-wide `h1`/`h2` resets, `img { max-width/display }`, or `* { transition }`. Scope new heading/font rules to a class. Pin the tooltip's `font-family` explicitly before changing the global `div`/`p` font rule.

**Only permitted change inside the map:** replace local `$chora-pink` / `$background` literals with imports of the same values from the token file.

## Tokens

### Colour (Palette A · Aurora)

| Token | Value | Replaces |
|---|---|---|
| `--ground` | `#0E0F17` | `$black` (unchanged) |
| `--surface` | `#2A2633` | `$grey #4C4C5C` everywhere |
| `--light` | `#F1EEF4` | `$white #EAEAEA` as light-section ground |
| `--text` | `#F1EEF4` | text on dark |
| `--text-on-light` | `#17141D` | text on light |
| `--muted` | `#9A93A8` | secondary text, borders |
| `--accent` | `#D627A9` | `$pink` — links, active nav, primary button only |
| `--skin-chora` | `#544468` / `#fbaae3` | `$chora-purple` / `$chora-pink` (unchanged) |
| `--skin-temporal` | `#00D4D4` | `$blue` (unchanged) |

Legacy `$jet`, `$violet`, `$green`, `$very-light-grey` … `$very-dark-grey` become aliases, then are deleted in phase 9.

### Type

| Role | Face | Weight | Replaces |
|---|---|---|---|
| Display | Big Shoulders Display | 700–900 | League Gothic |
| Body | IBM Plex Sans | 400 / 500 / 600 | Quicksand |
| Labels / credits / nav | IBM Plex Mono | 400 / 500 | League Gothic small |
| Chōra wordmark | Bauhaus 93 (local) | — | unchanged |
| Chōra info panel | Bitcount Single | — | unchanged |

Drop: League Gothic, Montserrat Alternates, Barlow Semi Condensed, Exo 2, Quicksand, Raleway.

Scale (`_vars.scss`): `--fs-1 clamp(2.5rem, 6vw, 5rem)` display · `--fs-2 clamp(1.75rem, 3vw, 2.5rem)` · `--fs-3 1.25rem` · `--fs-body 1rem` (1.6 lh, 60ch max) · `--fs-label .75rem` tracked `.1em`.

Spacing: `--sp-1 .5rem` `--sp-2 1rem` `--sp-3 1.5rem` `--sp-4 2.5rem` `--sp-5 4rem` `--sp-6 6rem`. Section padding `clamp(var(--sp-4), 8vw, var(--sp-6))`.

### Layout (L1 · Rail)

- One container: `1200px`, `padding-inline: clamp(1rem, 4vw, 2.5rem)`.
- Nav: single row, logo left, links right, `$navbar-height: 64px`; hamburger below `md`.
- Sections: `.section[data-ground="dark|light|skin"]`, 12-col grid, content in 5/7 or 7/5 split alternating sides. Grounds alternate dark/light by rule; `skin` only on film pages.
- Copy left-aligned, 60ch measure. No centred paragraphs.
- Breakpoints: mobile-first `@include md/lg` only. Remove `max-width: 768px` and `768–1024` range queries from shared styles.

## Phases

Each phase ships on its own. Re-capture map snapshots (phase 0) after every phase and diff.

| # | Phase | Scope | Map risk |
|---|---|---|---|
| 0 | Snapshot | Screenshots of `/` at 390 / 768 / 1440: idle, bubble active + tooltip, info panel open | baseline |
| 1 | Tokens | Rewrite `colours.scss` to the table above as SCSS vars + CSS custom properties on `:root`; keep old names as aliases. Delete local `$chora-pink`/`$background` in `index.scss`, `ChoraMap.scss`, `ChoraBanner.scss` → import. Values identical | low |
| 2 | Fonts | Remove four `@import url()` from `index.scss`; add `<link rel=preconnect>` + one Google Fonts `<link>` for Big Shoulders Display / IBM Plex Sans / IBM Plex Mono in `index.html`. Keep Bauhaus 93 `@font-face` and Bitcount. Scope the `h1, p, div, input…` font rule to `.site` so map title/tooltip inherit exactly what they do now | low |
| 3 | Scale & breakpoints | Type + spacing scales in `_vars.scss`. Replace raw queries with mixins in `_hero`, `content-block`, `_immersive-block`, `youtube-block`, `_meet-our-crew`, `_contact-us`, `_member-frame`, `_footer` only | none |
| 4 | Nav | Single-row `NavBar`, `$navbar-height: 64px`, `.page-content` follows. Verify `ChoraBanner.scrollToChoraMap` (uses `rect.bottom − innerHeight`, should be unaffected) | low |
| 5 | Hero | One `.hero` with `--photo`, `--split`, `--plain` variants. Migrate About / Our Work / Contact / Temporal / Things. Title bottom-left on photo variants. Chōra keeps `ChoraBanner` | none |
| 6 | Section wrapper | `.section` + grid. Wrap `TextBlockWithImage`, `SplitTextPanel`, `YoutubeBlock`, `MeetOurCrew`, `ContactUsGrid`, `MemberFrame`. On Chōra page wrap everything **except** `ChoraMap` and `ChoraInfoPanel` | medium — adjacent DOM, re-snapshot |
| 7 | Buttons, forms, footer | Filled primary + outline secondary from tokens; remove `!important` in `ChoraBanner.scss`; Contact form fields; footer on spacing scale | low |
| 8 | Chōra skin | Token swaps only in `ChoraBanner`, `FundraiseBanner`, `WeWillShare`, `AboutUsChora`, `SecondGenesisStoryboard`, `MomentumBTS` | medium — diff against snapshots |
| 9 | Clean-up | Delete legacy colour aliases; drop Tachyons if no utility class survives (`grep className` first); Lighthouse before/after | none |

## Acceptance

- Map screenshots from phase 0 diff clean at all three widths after phase 9.
- Font requests ≤ 3 Google families + 1 local.
- No `@media (max-width` left in `src/styles/`.
- Every page uses `.hero` + `.section`; no paragraph is `text-align: center`.
