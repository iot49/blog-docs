---
title: 'Cloudflare Access Authentication'
description: 'Setting up Zero Trust hierarchical access control for your blog content.'
---


Cloudflare Access provides Zero Trust authentication for your blog, allowing you to protect content based on hierarchical access levels (`public`, `friends`, `family`, `private`) without custom server-side code.

The file `access-list.yaml` is used to configure the access levels for authorized email addresses.

## Architecture

The blog uses a path-based security model:

- `/public/*` → No authentication required (Public Bypass).
- `/friends/*` → Requires authentication (Friends Email List).
- `/family/*` → Requires authentication (Family Email List).
- `/private/*` → Requires authentication (Restricted to Owner).

## Prerequisites

1.  Cloudflare account with an active website (Zone).
2.  Domain already configured on Cloudflare.
3.  [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-setup/) installed.
4.  Cloudflare API token with the following permissions:
    - **Account** > **Access: Organizations and Groups** > **Edit**
    - **Account** > **Access: Apps and Policies** > **Edit**
    - **Zone** > **Access: Apps and Policies** > **Edit**
    - **Zone** > **Zone** > **Read**

## Automated Setup

We provide a script to automatically sync your `access-list.yaml` to Cloudflare Access Policies.

```bash
# 1. Configure environment variables
export CLOUDFLARE_API_TOKEN="your-token"
export CLOUDFLARE_ACCOUNT_ID="your-account-id"
export CLOUDFLARE_ZONE_ID="your-zone-id"
export DOMAIN="your-blog.com"

# 2. Run the sync script
../blog-code/infra/cloudflare-access.sh
```

## Search and Overview

Search and overviews (e.g. `All Plots`) show all posts, regardless of access restriction. If needed, the user is asked to login to access the content. Cloudflare will return a "Not Authorized" error if the user does not have the required credentials (specified in `access-list.yaml`).

This approach has the benefit of not requiring a dedicated login button. The drawback is that the title, excerpts, and tags of protected posts are publically available. Knowledge of the existence of a post may further give an attacker a target.

## Testing with Gmail Aliases

You can test multiple access levels using a single Gmail account via aliases:

- `yourname@gmail.com`
- `yourname+friend1@gmail.com`
- `yourname+family1@gmail.com`

All aliases deliver to the same inbox, but Cloudflare treats them as distinct identities, allowing you to verify that policies are working as expected.

## Manual Setup (Reference)

If you prefer manual control over policies instead of using the automated sync script, you can use the `wrangler access` commands.

### 1. Create Access Application

```bash
wrangler access application create \
  --name "My Blog" \
  --domain "your-blog.com" \
  --session-duration "24h"
```

### 2. Configure Authentication Method

Use one-time email codes for simplicity:

```bash
wrangler access identity-provider add \
  --type "onetimepin" \
  --name "Email OTP"
```

### 3. Create Manual Policies

#### Friends Policy

```bash
wrangler access policy create \
  --application-id "<app-id>" \
  --name "Friends Access" \
  --path "/friends/*" \
  --decision "allow" \
  --include-email "friend1@example.com" \
  --include-email "friend2@example.com"
```

#### Using Email Lists

For easier management of groups:

```bash
# Create email list for friends
wrangler access list create \
  --name "Friends" \
  --emails "friend1@example.com,friend2@example.com"

# Use in policy
wrangler access policy create \
  --application-id "<app-id>" \
  --name "Friends Access" \
  --path "/friends/*" \
  --decision "allow" \
  --include-list "<list-id>"
```

## Monitoring

### View Access Logs

```bash
wrangler access logs application <app-id>
```

### Check Active Sessions

```bash
wrangler access application revoke-session --user <email>
```

## Resources

- [Cloudflare Access Documentation](https://developers.cloudflare.com/cloudflare-one/identity/access/)
- [Wrangler Access Commands](https://developers.cloudflare.com/workers/wrangler/commands/#access)
