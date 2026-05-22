# Agentic Schooled

A static Astro website powered entirely by Markdown files. No database, no CMS, no backend.

## How to edit content

All page content lives in `/src/content/pages/`. Each `.md` file is one page on the site.

### Frontmatter fields

Every Markdown file starts with a frontmatter block:

```yaml
---
title: About
slug: /about
order: 2
description: About this website
heroImage: about.svg
---
```

| Field | Required | Description |
|---|---|---|
| `title` | Yes | Page title shown in the browser tab and navigation |
| `slug` | Yes | URL path for this page. Use `/` for the homepage |
| `order` | Yes | Navigation order (lower numbers appear first) |
| `description` | Yes | Meta description for the page |
| `heroImage` | No | Filename of the hero image in `/public/images/` |

### Adding a new page

1. Create a new `.md` file in `/src/content/pages/`
2. Add the frontmatter block with a unique `slug` and `order`
3. Write your content below the frontmatter in Markdown
4. The page will appear automatically in the navigation

### Editing an existing page

Open the `.md` file in `/src/content/pages/` and edit the content directly. The site rebuilds automatically when you save.

## How to add images

All images live in `/public/images/`. They are served directly — no build step required.

### Adding an image to a page

Place your image file in `/public/images/`, then reference it in your Markdown:

```markdown
![Alt text describing the image](/images/your-image.jpg)
```

Supported formats: `.jpg`, `.png`, `.svg`, `.webp`, `.gif`

### Setting a hero image

Add the filename to your frontmatter (just the filename, not the full path):

```yaml
heroImage: my-image.jpg
```

Make sure the file exists at `/public/images/my-image.jpg`.

## Project structure

```
artifacts/agentic-schooled/
├── public/
│   ├── images/          ← all images go here
│   └── favicon.svg
├── src/
│   ├── content/
│   │   ├── config.ts    ← content collection schema (don't edit unless adding fields)
│   │   └── pages/       ← one .md file per page
│   ├── layouts/
│   │   └── Layout.astro ← shared page layout and navigation
│   └── pages/
│       ├── index.astro       ← homepage route
│       └── [...slug].astro   ← all other routes
├── astro.config.mjs
└── README.md
```

## Running locally

```bash
pnpm --filter @workspace/agentic-schooled run dev
```

## Building for production

```bash
pnpm --filter @workspace/agentic-schooled run build
```

Output goes to `dist/`.
