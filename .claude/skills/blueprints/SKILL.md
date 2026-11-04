---
name: blueprints
description: The style of the project cards ("blueprints") on bas.dev, the 16:9 art above each project on /work, the home page and /about. Use when adding a project, changing a project's image, building or changing ProjectGrid or ProjectCard, or when a blueprint looks off in light or dark mode.
---

# Blueprints

A blueprint is the 16:9 art at the top of a project card. Every project uses the same recipe, so the grid reads as one set in both light and dark mode. Only three things differ per project: the logo, the logo variant per appearance, and the icons in the pattern.

The design board this comes from lives in `.ruimte/private/designs/design/Blueprints.html` (untracked). Open it to compare.

## Assets

- `assets/logos/<slug>.svg`: the logo alone, without background, tightly cropped. Most come from the old `public/image/work/blueprint-*.svg` files. The language servers, Agent Skills and Apple Protocols have new logos because those projects have no real one.
- `assets/logos/<slug>.dark.svg` and `<slug>.light.svg`: the same logo with another ink for one appearance.
- `assets/logos/ruimte.png`: the Ruimte app icon (`AppIcon-iOS-Default-256@1x.png` from `ruimte/assets/AppIcon.export`). The white icon is used in both appearances. An app icon is the one logo that stays a PNG, marked with `format: 'png'`. 256px stays sharp at 2x on every card size.
- `assets/patterns/streamwithlien.svg`: the pattern from the Stream with Lien repository, without its orange fill, for use as a mask.
- `assets/blueprints.ts`: logo sizes, variants, the icon set per project, the icon paths and the tile slots.

Copy what the site needs into `public/` and `app/`. Keep the data next to `app/data/projects.ts`.

## The recipe

The layers, from back to front, inside the art box (`aspect-ratio: 16/9`, `overflow: hidden`):

1. **Background:** the `sunken` token (`bg-sunken`). It is always neutral and follows the theme. Never use a brand color as background.
2. **Pattern:** a layer at `inset: -45%`, rotated `-14deg`, filled with the `text` token (`--text`) and masked by the pattern tile (`mask: <tile> 0 0 / 69px repeat`). Its opacity is `.065` in light and `.075` in dark. The Stream with Lien file uses `110px auto` as its size and 55% of that opacity, because it consists of filled shapes.
3. **Fade:** a centered element with `radial-gradient(closest-side, var(--sunken) 62%, transparent 100%)`. It is `236 × 140px` in light and `142 × 84px` in dark. It clears the pattern around the logo and has a fixed size, whatever the logo.
4. **Logo:** centered, in its own colors.

### Pattern tile

A 96 × 96 SVG with five icons from `icons`, each in a 24px box, placed at the top-left corners in `slots`. Draw them with `fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"`. The color comes from CSS, so the tile only serves as a mask. Encode it as a data URL, or write one SVG file per project.

### Logo size

Every logo gets the same visual area instead of the same width, so wide wordmarks don't dominate square marks. As a percentage of the art box:

```ts
const ratio = width / height;
let h = Math.sqrt(820 / ratio) * 16 / 9;
let w = ratio * h * 9 / 16;
const fit = Math.min(1, 64 / w, 48 / h);
// width: w * fit %, height: h * fit %
```

**The exception:** Is het Friet and Is het Patat (`bottom: true`) are larger and stand on the bottom edge. They are `76%` of the art box tall, horizontally centered, with `bottom: 0`. The fries are cut off at the bottom of their logo on purpose.

### Logo per appearance

- `variant: 'dark'`: the logo has dark ink that disappears on the dark background. Use `<slug>.dark.svg` in dark mode.
- `variant: 'light'`: the logo is white and disappears on the light background. Use `<slug>.light.svg` in light mode, which uses the brand color.

The site toggles the `.dark` class on `<html>`. Render both `<img>` elements and hide one with `dark:hidden` and `hidden dark:block`, so nothing flashes on load.

## Adding a project

1. Get the real logo from the project's repository or site. Strip the background, crop it tightly and save it as `assets/logos/<slug>.svg`. Outline text into paths, because a font does not load in an SVG used as an image.
2. Check it on both backgrounds. Make a `.dark` or `.light` variant if the ink disappears, by swapping only that color.
3. Pick five icons from the project's world, and add new ones to `icons` in the same style: 24px box, outline, whole shapes. A motif must never look cut off inside the tile.
4. Add the entry to `blueprints` with the size of the logo's viewBox.

## Don'ts

- No brand-colored backgrounds, gradients or glows. Color comes only from the logo.
- No logos in the pattern.
- No pattern that draws attention. If it competes with the logo, lower the opacity instead of adding contrast.
- Don't scale a logo by hand. Use the area formula, and keep the fries as the only exception.
