---
title: System Architecture
description: Overview of the 4-repository structure of the IoT Blog project.
---

The IoT Blog project is architected as a decoupled system spanning four distinct repositories. This separation of concerns ensures security, maintainability, and clarity.

## 🗃️ Repository Overview

### 1. `blog-code` (UI Engine & Theme)
- **Role**: The core logic, Astro components, and styling theme.
- **Access**: Public.
- **Details**: This is the "brain" of the blog. It defines how posts are rendered, the search functionality, and the overall look and feel (based on the Astrowind theme).

### 2. `blog-content` (Data & Assets)
- **Role**: Your actual blog posts (.md files) and images.
- **Access**: Private.
- **Details**: Keeps your personal data separate from the code. The `blog-code` engine syncs content from here during the build process.

### 3. `blog-docs` (Technical Documentation)
- **Role**: This documentation site itself.
- **Access**: Public.
- **Details**: Documents how to use, configure, and maintain the blog system. Built with Starlight.

### 4. `blog-comments` (Interaction Data)
- **Role**: Stores comment data and configuration.
- **Access**: Private.
- **Details**: Used for managing user interactions and feedback separate from the main content.

---

## 🔗 How it works together

When you run `./bin/preview` or `./bin/deploy` from the `blog-content` repository:
1. It triggers a sync process.
2. It pulls the latest theme from `blog-code`.
3. It validates images and content.
4. It builds a static site that combines your private content with the public engine.
