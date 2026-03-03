---
title: Authoring Guide
description: How to author, build, and serve this documentation site.
---

This documentation site is built with [Starlight](https://starlight.astro.build/), a documentation framework for [Astro](https://astro.build/).

## ✍️ Authoring

Documentation is written in Markdown (`.md`) or MDX (`.mdx`).

### File Location
All documentation files are located in:
`src/content/docs/`

### Frontmatter
Each file must begin with a frontmatter block:

```markdown
---
title: My Page Title
description: A short description of this page.
---
```

### Sidebars
The sidebar is configured in `astro.config.mjs`. When adding a new page, ensure you add it to the `sidebar` array if you want it to appear in the navigation.

## 🚀 Commands

| Command | Action |
| :--- | :--- |
| `./bin/preview` | Starts local dev server at `localhost:4321` |
| `npm run build` | Build your production site to `./dist/` |
| `npm run preview` | Preview your build locally, before deploying |

## 🏗️ Build & Deploy

This site is designed to be hosted on **Cloudflare Pages**.

1. **Build**: `npm run build` generates the static site in the `dist/` folder.
2. **Deploy**: Push to the `main` branch of the `blog-docs` GitHub repository to trigger an automatic deployment on Cloudflare.
