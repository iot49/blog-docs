---
title: 'VSCode Image Paste Support'
description: "Learn how to use VSCode's native image paste feature for a seamless authoring experience."
---
This blog implements a seamless workflow for adding images to your posts using VSCode's built-in image paste functionality. This allows you to focus on writing without worrying about manual file management.

## Authoring Workflow

1.  **Open a Markdown file**: Open any post in the `src/data/post/` directory.
2.  **Paste an image**: Copy an image to your clipboard and paste it directly into the Markdown editor (`Cmd+V` or `Ctrl+V`).
3.  **Automatic placement**: VSCode will automatically:
    - Save the image into a subfolder: `images/<post-name>/<image-name>.png`.
    - Insert a correctly formatted link: `![Description](images/<post-name>/<image-name>.png)`.

## How it works (The Build Pipeline)

When you run `npm run build` or `./bin/deploy`, the blog-code engine performs the following behind the scenes:

1.  **Asset Resolution**: The blog engine (Astro) is configured to look for images in both the local post directories and the central asset store.
2.  **Optimization**: Astro's image service takes over, converting your images to modern formats like **WebP** and applying responsive compression for faster page loads.
3.  **No Manual Moves Required**: Unlike older versions of the blog, images stay in your post folder – no manual copying or path rewriting is required.

## VSCode Configuration

The behavior is controlled by the following setting in `.vscode/settings.json`:

```json
"markdown.copyFiles.destination": {
  "**/*.md": "images/${documentBaseName}/"
}
```

## Benefits

- **Grouped Assets**: Images for a specific post are neatly grouped in a folder named after the post.
- **VSCode Preview Compatibility**: Because the paths are relative, images display correctly in the VSCode editor preview.
- **Extreme Portability**: You can move a post Markdown file and its image folder together, and everything will still work.
- **Source Integrity**: Your original files in the `blog-content` repository remain untouched; optimization occurs only during the build process.
