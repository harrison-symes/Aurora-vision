# Design uplift — queue

All nine items raised during review are now implemented. The phased plan and its
remaining blockers live in [DESIGN_PLAN.md](DESIGN_PLAN.md).

## Testing mobile

`resize_window` is unreliable here. It reports success immediately but the viewport does not follow: a resize can be ignored entirely, or land minutes later — one call to 420x860 applied only after several unrelated tool calls, by which point the window was stuck small and would not resize back. While a resize is pending the browser reports `outerWidth`/`outerHeight` of `0` and a `screen.width` identical to `innerWidth`. Do not trust it for responsive checks.

Workaround: load the site into an iframe of the target width from a page on the same origin. Media queries inside an iframe resolve against the iframe's own viewport, so the mobile layout renders and can be measured and screenshotted:

```js
document.documentElement.innerHTML =
  '<body style="margin:0"><iframe src="/about-us" style="width:390px;height:844px;border:0"></iframe></body>';
// then reach in: frame.contentWindow.innerWidth === 390, media queries match
```

Items 8 and 9 were diagnosed this way. Scroll and click inside the frame via `contentWindow` rather than page coordinates.

---

## Done

| # | Item | Commit |
|---|---|---|
| 1 | Hero titles over the stills — flat tint plus a radial anchored to the type; eyebrow off magenta | `dfe0cc9` |
| 2 | About Us creative statement — fixed height dropped, columns centred, image's dead space removed | `dfe0cc9` |
| 3 | Member roles — optional `role` under each name, identity wrapper keeps the name in place | `dfe0cc9` |
| 4 | Temporal character blocks — layered text halo (`999af8d`), body copy to IBM Plex Mono | `999af8d`, `dfe0cc9` |
| 5 | Meet the directors reveal — `IntersectionObserver` replaces react-animate-on-scroll, visible by default | `dfe0cc9` |
| 6 | Meet our crew heading — container was a flex column centring on the cross axis | `dfe0cc9` |
| 7 | Our Work credits — leftover padding removed, reverse variant no longer right-aligns | `dfe0cc9` |
| 8 | Mobile nav — one hamburger, panel toggles by presence rather than transform | `1dddda8` |
| 9 | Mobile footer — real gap and padding, larger labels, scrim extended to 260px | `1dddda8` |

Earlier in the same pass: Chora funding bar and block spacing, We Will Share,
the Chora team grid and the Contact Instagram band (`e175ece`).

## Still open

- **Phase 8 and 9 of the plan** — see DESIGN_PLAN.md. Phase 8 needs the Chora WIP in the working tree committed or stashed.
- **Placeholder roles.** Every member currently reads `role here`; swap in the real ones.
- **Dead code for the phase 9 cleanup:** `react-youtube`, `react-animate-on-scroll` and `animate.css` are now all unreferenced, along with the `useWindowWidth` hook, `crew-banner.webp` and the three social SVGs.
