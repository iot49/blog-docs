---
title: 'Blog Site - Technical Overview'
description: 'An overview of the technical architecture and features of this blog.'
---


Welcome to the technical documentation for the IoT Blog project. This site covers the architecture, setup, and features of our decoupled blogging system.

## 🏗️ 4-Repository Architecture

The project is split into four separate repositories to ensure clean separation of concerns:

- [**System Architecture**](/blog/architecture) - Deep dive into how the repos interact.
- **blog-code** - The UI Engine & Theme.
- **blog-content** - Private blog posts and assets.
- **blog-comments** - Stores blog user comment entries "abusing" github discussions.
- **blog-docs** - Universal repo for this and other project (e.g. railroad) documentation. Called `blog-docs` (rather than just `docs`) for historic reasons. 

## 📚 Feature Documentation

- [**Installation & Setup**](/blog/installation) - How to get the theme engine running.
- [**Deployment Pipeline**](/blog/deployment) - Native Astro automated build and deployment process.
- [**Cloudflare Authentication**](/blog/authentication) - Zero Trust hierarchical access control.
- [**Comments**](/blog/comments) - GitHub Discussions-backed Giscus integration.
- [**Search**](/blog/search) - Privacy-preserving static site search.
- [**Client-Side Translation**](/blog/translation) - On-demand translation features.
- [**VSCode Image Paste**](/blog/vscode-images) - Seamless image authoring workflow.
- [**Jupyter Notebooks**](/blog/jupyter-notebooks) - Writing posts using Jupyter.

## 🛠️ Development & Authoring

- [**Environment Variables**](/blog/setting-up-env) - Full list of supported configuration variables.
- [**Authoring Guide**](/blog/authoring) - How to add and edit these docs.
