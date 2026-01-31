# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GetCookie marketing website - a landing page and documentation site for a Discord bot that enables employee recognition with crypto token rewards (Cookies).

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
```

## Tech Stack

- **Framework**: Astro 5.x (static site generator)
- **3D Graphics**: Three.js for the interactive globe component
- **Styling**: CSS custom properties for theming (light/dark mode)
- **Node version**: 22.x (specified in package.json engines)

## Architecture

### Layouts
- `src/layouts/Layout.astro` - Base layout with SEO meta tags, theme switching, and the Stars background component
- `src/layouts/DocsLayout.astro` - Documentation layout with sidebar navigation (extends Layout)

### Pages
- `src/pages/index.astro` - Main landing page with hero, features, and interactive globe
- `src/pages/docs/` - Documentation pages using DocsLayout

### Key Components
- `src/components/Globe.astro` - Three.js interactive Earth globe with emoji markers showing recognition activity
- `src/components/Stars.astro` - Background animation
- `src/components/ThemeToggle.astro` - Light/dark mode toggle
- `src/components/PhoneMockup.astro` - Phone mockup display for screenshots

### Theming
CSS custom properties defined in Layout.astro control theming:
- Theme is stored in localStorage as `theme` (values: `light` or `dark`)
- Default theme is `dark`
- Theme is set via `data-theme` attribute on `<html>` element
- Components observe theme changes via MutationObserver on `data-theme`

### Static Assets
- `public/` - Static assets (favicons, OG images)
- `src/assets/` - Build-processed assets (logo images, SVGs)
