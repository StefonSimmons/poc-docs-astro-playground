# CLAUDE.md

## Project overview

POC playground for experimenting with Astro (v6, minimal template). Used for prototyping docs-site concepts — component sourcing, icon systems, layouts, etc.

## Stack

- **Framework**: Astro 6 (`astro.config.mjs`)
- **Package manager**: Yarn (use `yarn`, not `npm`)
- **Node**: >=22.12.0
- **TypeScript**: configured via `tsconfig.json`
- **No UI framework installed** (add with `astro add react|vue|svelte` as needed)

## Commands

```sh
yarn dev       # dev server at localhost:4321
yarn build     # production build to ./dist/
yarn preview   # preview the production build
```

## Project structure

```
src/
  layouts/
    Layout.astro   # root shell (html, head, body, Nav slot)
    Nav.astro      # top nav — Home / Sourcing / Icons
    styles.css     # global styles
  pages/
    index.astro    # /
public/            # static assets (favicons)
```

## Conventions

- Pages live in `src/pages/` — file name = route (Astro file-based routing).
- Shared layouts/components go in `src/layouts/` or `src/components/`.
- Add new nav links in `src/layouts/Nav.astro`.
- This is a POC repo — prefer quick, focused experiments over production-grade abstractions.
