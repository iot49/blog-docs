---
title: 'Technical Documentation Overview'
description: 'An overview of the technical architecture and features of this blog.'
---


Welcome to the technical documentation for the IoT Blog project. This site covers the architecture, setup, and features of our decoupled blogging system.

## 🏗️ 4-Repository Architecture

The project is split into four separate repositories to ensure clean separation of concerns:

- [**System Architecture**](/architecture) - Deep dive into how the repos interact.
- **blog-code** - The UI Engine & Theme.
- **blog-content** - Private blog posts and assets.
- **blog-docs** - This documentation site.
- **blog-comments** - Private comment data.

## 📚 Feature Documentation

- [**Installation & Setup**](/installation) - How to get the theme engine running.
- [**Deployment Pipeline**](/deployment) - Native Astro automated build and deployment process.
- [**Cloudflare Authentication**](/authentication) - Zero Trust hierarchical access control.
- [**Comments**](/comments) - GitHub Discussions-backed Giscus integration.
- [**Search**](/search) - Privacy-preserving static site search.
- [**Client-Side Translation**](/translation) - On-demand translation features.
- [**VSCode Image Paste**](/vscode-images) - Seamless image authoring workflow.
- [**Jupyter Notebooks**](/jupyter-notebooks) - Writing posts using Jupyter.

## 🛠️ Development & Authoring

- [**Environment Variables**](/setting-up-env) - Full list of supported configuration variables.
- [**Authoring Guide**](/authoring) - How to add and edit these docs.
