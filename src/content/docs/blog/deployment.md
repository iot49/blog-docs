---
title: 'Continuous Deployment Pipeline'
description: 'How we build and safely publish content using our native Astro automated pipeline.'
---
This blog implements a native Astro secure deployment pipeline which handles the separation of public code and private content without fragile synchronization steps.

## The `bin/deploy` Workflow

The deployment process is orchestrated by a single command: `./bin/deploy` (run from your `blog-content` project). When run, it performs the following sequence:

1.  **Validation**: It runs `npm run check` and `eslint` to catch linting or type errors before build.
2.  **Asset Handling**: It prepares images and processes Jupyter notebooks if any updates are detected.
3.  **Static Build**: Astro compiles the site, generating optimized HTML, CSS, and images.
4.  **Security Audit**: The script runs an automated post-build check to ensure:
    - No `/friends/`, `/family/`, or `/private/` content has been accidentally placed in the `public/` directory.
    - No `draft: true` posts are included in the build output.
5.  **Cloudflare Upload**: If all checks pass, the site is uploaded directly to Cloudflare Pages via `wrangler`.
6.  **Access Policy Sync**: Finally, it automatically syncs your `access-list.yaml` definitions with Cloudflare Access.

## Architecture

We use a two-repository system for maximum security:

- **blog-code**: Public. Contains the theme engine, components, and deploy logic.
- **blog-content**: Private. Contains the actual Markdown posts and sensitive draft data.

The `blog-content` repository depends on `blog-code` via an NPM `file:` link. This ensures that the public source code never contains your private content.

## Deployment Troubleshooting

### Wrangler CLI Permissions

If deployment fails with an authorization error, ensure your Cloudflare API token has the following permissions:

- **Account** > **Cloudflare Pages** > **Edit**
- **Zone** > **Cloudflare Pages** > **Edit**

### Manual Deployment (Emergency Only)

If the script fails, you can build and deploy manually:

```bash
# Inside blog-content
npm run build
wrangler pages deploy dist --project-name=blog
```

## Production Environment

The production site is hosted on **Cloudflare Pages**, benefitting from their global CDN and **Cloudflare Access** for secure, Zero Trust authentication.
