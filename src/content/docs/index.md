---
title: 'Technical Documentation Overview'
description: 'An overview of the technical architecture and features of this blog.'
---


Welcome to the technical documentation for this blog. This series of posts covers how the blog is built, deployed, and the various features it supports.

## Feature Documentation

- [**Installation & Setup**](/public/docs/installation) - How to get the theme engine running.
- [**Deployment Pipeline**](/public/docs/deployment) - Native Astro automated build and deployment process.
- [**Cloudflare Authentication**](/public/docs/authentication) - Zero Trust hierarchical access control.
- [**Comments**](/public/docs/comments) - GitHub Discussions-backed Giscus integration.
- [**Search**](/public/docs/search) - Privacy-preserving static site search.
- [**Client-Side Translation**](/public/docs/translation) - On-demand translation features.
- [**VSCode Image Paste**](/public/docs/vscode-images) - Seamless image authoring workflow.
- [**Jupyter Notebooks**](/public/docs/jupyter-notebooks) - Writing posts using Jupyter.

## Development Reference

- [**Environment Variables**](/public/docs/setting-up-env) - Full list of supported configuration variables.

## Architecture

This blog is built with **Astro 5.0**, leveraging its static site generation (SSG) capabilities for extreme performance and security. Content is separate from code, allowing for private draft management and hierarchical access control.
