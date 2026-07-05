# getcookie.org

Static marketing and docs site built with **Astro** and **Three.js** for **GetCookie** — a Slack / Microsoft Teams app where remote teammates give each other cookies and redeem them for rewards.

🔗 **Live site:** https://poteresting.github.io/getcookie.org/

**Static-first** (Astro, zero JS by default) · **Interactive 3D globe** (Three.js, live recognition markers) · **SEO** (sitemap, OpenGraph)

## Run

Requires Node 22.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the production build locally
```

## Structure

```
src/
  pages/            landing, platform, teams, docs/
  components/       Three.js earth, Stars background, CSS-animated rocket, dynamic UI mockups
  layouts/          base + docs layouts with OG/SEO meta
  content/          MDX content collections (legal pages)
```

## Deploy

Pushes to `main` build and deploy to GitHub Pages automatically via GitHub Actions
(`.github/workflows/deploy.yml`). The site is served from the `/getcookie.org/` subpath,
so asset and link paths use Astro's `BASE_URL`.

## Notes

- Theme (light/dark) persists in `localStorage` and propagates via a `data-theme`
  attribute — pure CSS custom properties restyle the page; only the Three.js globe
  (which CSS can't reach) watches the attribute via a `MutationObserver`.
- The globe's people markers are emoji drawn onto canvases at runtime
  (`THREE.CanvasTexture`) — no marker image assets to load or maintain.
