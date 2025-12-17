# Aashish Khatri - Portfolio

A modern, performant portfolio website built with Next.js 16, React 19, and Tailwind CSS 4.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

## Features

- **🎨 Modern Design** - Monochromatic color scheme with clean typography
- **✨ Scroll Animations** - Framer Motion powered reveal effects
- **📝 MDX Blog** - Write posts in Markdown with code highlighting & LaTeX math
- **🔍 Blog Search & Filter** - Dynamic tag filtering with pagination
- **📖 Reading Time** - Auto-calculated from content
- **🔗 Related Posts** - Smart suggestions based on shared tags
- **📡 RSS Feed** - Subscribe at `/rss.xml`
- **🗺️ SEO Optimized** - Sitemap, robots.txt, Open Graph & Twitter cards

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Content | MDX (next-mdx-remote) |
| Code Highlighting | rehype-highlight |
| Math Rendering | KaTeX |
| Icons | Lucide React |

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── blog/               # Blog pages
│   ├── rss.xml/            # RSS feed route
│   ├── sitemap.ts          # Dynamic sitemap
│   └── layout.tsx          # Root layout
├── components/
│   ├── blog/               # Blog components
│   ├── home/               # Home page sections
│   └── shared/             # Reusable components
├── content/blogs/          # MDX blog posts
├── data/                   # Projects & experience data
└── lib/                    # Utilities (blog helpers)
```

## Adding Content

### New Blog Post
Create `content/blogs/your-post.mdx`:
```mdx
---
title: 'Post Title'
date: '2024-12-17'
description: 'Brief description'
tags: ['Tag1', 'Tag2']
---

Your content here...
```

### New Project
Edit `data/projects.ts` and add an entry to `projectsData`.

### New Experience
Edit `data/experience.ts` and add an entry to `experienceData`.

## Documentation

See [ARCHITECTURE.md](./ARCHITECTURE.md) for in-depth technical documentation covering:
- Rendering strategies
- Blog engine implementation
- Animation system
- Design token system
- SEO & feed generation

## Deployment

Deploy on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/aashish-khatri/portfolio)

## License

MIT © Aashish Khatri
