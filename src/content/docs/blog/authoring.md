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

## Sample Blog

```markdown
---
title: 'My Wonderful Blog Post'
publishDate: 2025-01-01
author: Bernhard
accessLevel: public
excerpt: 'Sample Blog'
category: blog
image: index/sample.png
draft: false
language: en
tags: ['post', 'sample']
---

Awesome new blog ...
```

- `accessLevel`: `public` posts are visible for everyone. Other access levels include `familiy`, `friends`, and `personal` and require login. Only users whose email is specified in `access-list.yaml` will be able to access these posts. Default: `personal`.
- `category`: permissible values defined in `blog-content/src/content/config.ts`. E.g. `blog` (generic post, of interest to most audiences), `railroad` (railroad related posts), `test` (related to testing). Default: `blog`.
- `draft`: Posts with `draft: true` show only in the preview but are not deployed online.

### Images

The simplest way for adding images is to paste them in vscode. This automatically copies the file to the a local folder and inserts a link to it in the markdown file:

```markdown
![alt text](images/authoring/image.png 'Vancouver')
```

![alt text](images/authoring/image.png 'Vancouver')

For the image to appear as the blog title image, copy the link to the `image` tag in the frontmatter and remove the link in the text.

Consult the [Official Astro Docs Tutorial](https://docs.astro.build/en/tutorial/2-pages/2/) for more information.

### Markdown

Astro supports [commonmark](https://commonmark.org/help/)

#### Block Quote

> Block quote
>
> Precede quoted text with a `>`.

#### Lists

````markdown
- Unordered list
  - Code highlighting
    ```python
    def __init__(self):
        pass
    ```
  1. Order
  2. Second
  - Less order
- More ...
````

- Unordered list
  - Code highlighting
    ```python
    def __init__(self):
        pass
    ```
  1. Order
  2. Second
  - Less order
- More ...

#### Latex

LaTeX: inline $a^2 + b^2 = c^2$ or display

$$
a^2 + b^2 = c^2
$$

#### Tables

```markdown
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
```

| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |

#### Alerts

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

#### More Info

[Astro Guide](https://docs.astro.build/en/guides/markdown-content/)

[Useful Plugins](https://ryanwelch.co.uk/blog/useful-markdown-plugins-astro/)

[Images in Astro](https://www.emgoto.com/astro-blog-images/)
