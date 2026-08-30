# Design uplift — queue

Follow-up items raised during review. **Nothing here is implemented yet.**
The phased plan and its blockers live in [DESIGN_PLAN.md](DESIGN_PLAN.md).

Each item below was reproduced in the browser and the cause confirmed, so these
are ready to pick up in any order.

---

## 1. Hero titles are hard to read over the black-and-white stills

**Where:** About Us, Our Work, Contact — the `.hero--photo` title and eyebrow.

**Cause.** The scrim is a bottom-up linear gradient, which assumes the photograph darkens toward the bottom. These stills have bright sky and pale rock exactly where the title sits, and a frame-anchored gradient cannot fix a locally bright patch.

Approximate contrast on the About Us still:

| Element | Over dark rock | Over pale sky/rock |
|---|---|---|
| Title `#F1EEF4` | ~3.0:1 | ~1.5:1 |
| Eyebrow `#D627A9` | ~1.3:1 | worse |

Large text wants 3:1, smaller text 4.5:1. The magenta eyebrow is the worst offender by a distance: magenta and mid-grey sit at nearly the same luminance, so it fails regardless of the scrim.

**Recommendation — treat the photograph, not the text.**

1. **Tint the still.** A `--ground` multiply overlay at roughly 55–65% across the whole image. The photography is already black and white, so it takes a tint well, and pushing it toward the purple-black of `--ground` ties the heroes to the palette rather than reading as generic dimming. This is the robust fix: it works wherever the bright areas happen to fall.
2. **Anchor the remaining gradient to the text** — bottom-left, not the frame — for extra weight exactly where the type sits.
3. **Stop using magenta on photographs.** Either `--light` at ~80% opacity, or keep magenta on a solid chip so it has its own ground. Reserve magenta for interaction on flat grounds.

Rejected: a solid panel behind the title (turns type-on-image into a label), text-shadow alone (looks cheap on large display type and does not rescue 1.5:1), moving titles into a band below the photo (readable, but loses the cinematic overlap).

## 2. About Us creative statement is vertically centred oddly

**Where:** `.content-block` on About Us — the AURORAVISION statement beside the spaceship.

**Cause.** `.content-block` is a fixed `height: 500px`. The text container is `height: 100%` and stretches, so copy starts hard at the top, while the image is `align-self: center` with `translateY(-100px)`. Short copy hugs the top and leaves dead space below it; the two columns share no vertical relationship.

**Fix.** Drop the fixed height, let the block size to its content with `$section-padding`, centre the two columns against each other. Check the other `TextBlockWithImage` uses (Temporal, Things) at the same time — they share the rule.

## 3. Member roles under each name

**Where:** `MemberFrame`, used on About Us and JerryMe.

Add an optional `role` prop rendered under `.member-frame__name`, with a temporary `"role here"` on every member until real roles arrive. Set it in the label treatment (mono, tracked, `--muted`) so it reads as a subtitle, not a second name.

**Constraint.** Names sit against tall cut-out images in alternating left/right frames. Adding a line must not shift the name's existing position — the subtitle has to hang below it.

## 4. Temporal's BOOTS and EMMONS blocks look wrong

**Where:** `.immersive-block__paragraph` on Temporal.

**Cause.** This is a regression from phase 2, not a missing font. The block's body copy was Exo 2; it got swapped to `$font-display` along with everything else. Big Shoulders is a *condensed display* face — at body size, over a photograph, it is cramped and hard to read, and it gives the character name and its description the same voice, so the hierarchy collapses. The `text-shadow: 1px 1px` under it is a hard 1px offset that reads as cheap at this size.

**Recommendation — no fourth family.**

- Character name keeps `$font-display`, large, uppercase, tracked.
- Description moves to `$font-mono` — the terminal voice already used by the Chōra info panel and the nav. Mono over a film still reads as a production slate or title card, which is more genuinely "cinematic" than a second display face, and it costs no new font.
- Replace the hard shadow with a soft, large-radius one, or lean on the item 1 tint so no shadow is needed.

If you still want a dedicated face after seeing that, worth saying: the site just went from eight families to four, Temporal already has its own logo lockup doing the film's identity work, and a fifth voice used on two blocks is a lot of weight for a little copy. I would want to see the mono version fail first.

## 5. "Meet the directors" image does not always slide in

**Where:** `TextBlockWithImage` on Temporal (`imageAnimation="fadeInRight"`, and `"fadeIn"` further down).

**Likely cause.** `react-animate-on-scroll` triggers on scroll events and computes offsets on mount. Two things work against it here: `initiallyVisible={!props.imageAnimation}` means an animated image starts hidden, and `Router`'s `DelayedSuspense` holds the page behind a fallback for 1000ms, so the library can mount against a layout that then changes. Arriving from another route with the block already in view means no scroll event ever fires, and the image stays at opacity 0.

**Fix direction.** Replace the library with an `IntersectionObserver`, which fires on intersection regardless of whether a scroll happened. It also drops a dependency. Whatever the approach, the image must be visible by default and animate as an enhancement, so it can never be stuck invisible — and respect `prefers-reduced-motion`.

## 6. Temporal's "Meet our crew" heading is still centred

**Where:** `.meet-our-crew__title`.

**Answer: no, it should not be.** The heading is centred over its column while the paragraphs under it are left-aligned, so the block has two competing axes. Left-align the heading with its copy, and move `$desktop-title` / `$mobile-title` / `$tablet-title` onto `$fs-heading` while there — those three fixed sizes still override the fluid scale below 1024px.

## 7. Our Work credits are not properly left-aligned

**Where:** `.youtube-block__credits`.

**Cause.** `padding: 0 .5rem` on the credits block, left over from the old centred layout. The credits sit 8px right of the paragraph above them, giving the column a ragged left edge — visible on the OUTCAST block.

**Fix.** Drop the horizontal padding so credits share the paragraphs' left edge. The `--reverse` variant also sets `text-align: right` on credits; check whether that is still wanted now that everything else is left-aligned.
