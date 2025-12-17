# Portfolio Architecture & Engineering Guide

This document provides in-depth technical details about the engineering decisions, design patterns, and implementation strategies used in this portfolio.

---

## Table of Contents
1. [Rendering Strategy](#rendering-strategy)
2. [Blog Engine Deep Dive](#blog-engine-deep-dive)
3. [Animation System Architecture](#animation-system-architecture)
4. [Design Token System](#design-token-system)
5. [SEO & Feed Generation](#seo--feed-generation)
6. [Performance Patterns](#performance-patterns)

---

## Rendering Strategy

### Static vs Dynamic Routes

This portfolio uses a hybrid rendering approach optimized for performance:

```
┌─────────────────────────────────────────────────────────────────┐
│                        RENDERING MATRIX                         │
├───────────────────┬──────────────┬──────────────────────────────┤
│ Route             │ Strategy     │ Reason                       │
├───────────────────┼──────────────┼──────────────────────────────┤
│ /                 │ Static (○)   │ Content rarely changes       │
│ /blog             │ Static (○)   │ List pre-rendered at build   │
│ /blog/[slug]      │ SSG (●)      │ generateStaticParams()       │
│ /sitemap.xml      │ Static (○)   │ Generated at build time      │
│ /robots.txt       │ Static (○)   │ Generated at build time      │
│ /rss.xml          │ Dynamic (ƒ)  │ Always fresh content         │
└───────────────────┴──────────────┴──────────────────────────────┘
```

### Static Site Generation (SSG) for Blog

Blog posts use `generateStaticParams()` for build-time generation:

```typescript
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,      // Pre-renders /blog/postgresql-optimization, etc.
  }));
}
```

**Why SSG over SSR?**
- Blog content is static (MDX files don't change at runtime)
- Zero runtime database queries
- Maximum caching potential (CDN-friendly)
- Instant page loads for users

---

## Blog Engine Deep Dive

### MDX Processing Pipeline

```
┌──────────────────────────────────────────────────────────────────────┐
│                      MDX PROCESSING PIPELINE                         │
└──────────────────────────────────────────────────────────────────────┘

  .mdx file
      │
      ▼
┌─────────────────┐
│  gray-matter    │  ──► Extracts frontmatter (title, date, tags)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  remark-gfm     │  ──► GitHub Flavored Markdown (tables, strikethrough)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  remark-math    │  ──► Parses LaTeX: $E = mc^2$ and $$...$$
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ rehype-highlight│  ──► Code syntax highlighting (highlight.js)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  rehype-katex   │  ──► Renders math to HTML with KaTeX
└────────┬────────┘
         │
         ▼
   React Components
```

### Reading Time Algorithm

```typescript
// lib/blog.ts
const WORDS_PER_MINUTE = 200;  // Industry standard for technical content

function calculateReadingTime(content: string): number {
  // Split on whitespace to count words
  const words = content.trim().split(/\s+/).length;
  
  // Round up, minimum 1 minute
  const minutes = Math.ceil(words / WORDS_PER_MINUTE);
  return Math.max(1, minutes);
}
```

**Design Decisions:**
- 200 WPM chosen for technical content (vs 250 for casual reading)
- Includes code blocks in word count (developers do read code)
- Minimum 1 minute prevents awkward "0 min read"

### Related Posts Algorithm

```typescript
// lib/blog.ts
export function getRelatedPosts(currentSlug: string, limit: number = 3) {
  const allPosts = getBlogPosts();
  const currentPost = allPosts.find(p => p.slug === currentSlug);
  
  if (!currentPost) return [];

  // Score by shared tag count
  const scoredPosts = allPosts
    .filter(p => p.slug !== currentSlug)          // Exclude current
    .map(post => {
      const sharedTags = post.tags.filter(tag => 
        currentPost.tags.includes(tag)
      );
      return { post, score: sharedTags.length };
    })
    .filter(item => item.score > 0)               // Must have overlap
    .sort((a, b) => b.score - a.score);           // Highest score first

  return scoredPosts.slice(0, limit).map(item => item.post);
}
```

**Scoring Logic:**
- Posts sharing 3 tags with current = score 3
- Posts sharing 1 tag = score 1
- Posts with 0 shared tags = excluded
- Ties broken by sort order (date)

### Pagination Implementation

```typescript
// components/blog/BlogList.tsx
const POSTS_PER_PAGE = 6;

// Memoized filtering (recalculates only when inputs change)
const filteredPosts = useMemo(() => {
  return posts.filter((post) => {
    const matchesFilter = filter === 'all' || post.tags.includes(filter);
    const matchesSearch = 
      post.title.toLowerCase().includes(search.toLowerCase()) || 
      post.description.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });
}, [posts, filter, search]);

// Slice for current page
const paginatedPosts = filteredPosts.slice(
  (currentPage - 1) * POSTS_PER_PAGE,
  currentPage * POSTS_PER_PAGE
);
```

**Why client-side pagination?**
- Small dataset (<100 posts expected)
- Instant filter/search response
- No server round-trips
- URL-based might be overkill for portfolio

---

## Animation System Architecture

### Component Hierarchy

```typescript
// components/shared/Motion.tsx

// 1. SECTION WRAPPER - Triggers animation when entering viewport
export function MotionSection({ children, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"        // Animate when scrolled into view
      viewport={{ once: true, margin: "-100px" }}  // 100px before fully visible
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 2. STAGGER CONTAINER - Orchestrates children timing
export function MotionStagger({ children, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}    // Children animate sequentially
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 3. STAGGER ITEM - Individual animated element
export function MotionItem({ children, className = '' }) {
  return (
    <motion.div variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  );
}
```

### Animation Variants

```typescript
// Cubic bezier for natural motion
const easeOut = [0.22, 1, 0.36, 1];  // Framer's "circOut" approximation

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 30    // Start 30px below
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: easeOut
    }
  }
};

export const staggerContainer = {
  hidden: {},  // No initial state needed
  visible: {
    transition: {
      staggerChildren: 0.1,    // 100ms between each child
      delayChildren: 0.1       // 100ms before first child
    }
  }
};
```

### Usage Pattern

```tsx
// components/home/Projects.tsx
<MotionStagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {projects.map((project) => (
    <MotionItem key={project.id}>
      <ProjectCard project={project} />
    </MotionItem>
  ))}
</MotionStagger>
```

**Result:** Cards animate in with 100ms delay between each, creating a "wave" effect.

---

## Design Token System

### Tailwind CSS 4 @theme Directive

```css
/* app/globals.css */
@theme {
  /* PRIMARY PALETTE - Monochromatic grays */
  --color-primary: #1A1A1A;         /* Main brand color */
  --color-primary-light: #2D2D2D;   /* Hover state */
  --color-primary-lighter: #404040; /* Active state */
  
  /* TEXT HIERARCHY */
  --color-text-primary: #0A0A0A;    /* Headings, important text */
  --color-text-secondary: #404040;  /* Body text */
  --color-text-muted: #6B6B6B;      /* Meta info, captions */
  --color-text-subtle: #999999;     /* Placeholders, disabled */
  
  /* SURFACE COLORS (layered backgrounds) */
  --color-bg-primary: #FFFFFF;      /* Page background */
  --color-bg-secondary: #FAFAFA;    /* Cards, sections */
  --color-bg-tertiary: #F5F5F5;     /* Nested elements */
  --color-bg-quaternary: #F0F0F0;   /* Deep nesting */
  
  /* BORDER SYSTEM */
  --color-border-primary: #E5E5E5;  /* Default borders */
  --color-border-secondary: #EBEBEB; /* Subtle dividers */
}
```

### Typography Scale

```css
@layer utilities {
  .text-hero {
    font-size: clamp(2.5rem, 8vw, 5.5rem);  /* Fluid 40px → 88px */
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.025em;
  }
  
  .text-heading-1 {
    font-size: clamp(2.25rem, 5vw, 3.5rem); /* Fluid 36px → 56px */
    font-weight: 600;
    line-height: 1.1;
  }
}
```

**clamp() breakdown:**
- `clamp(min, preferred, max)`
- `8vw` = 8% of viewport width
- At 375px viewport: `8vw = 30px` (clamped to 40px min)
- At 1440px viewport: `8vw = 115px` (clamped to 88px max)

---

## SEO & Feed Generation

### Sitemap Generation

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aashishkhatri.dev';
  const posts = getBlogPosts();
  
  // Map blog posts to sitemap entries
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),     // Use post date
    changeFrequency: 'monthly' as const,   // Rarely updated
    priority: 0.7,                          // Below homepage
  }));

  return [
    { url: baseUrl, priority: 1, changeFrequency: 'weekly' },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' },
    ...blogUrls,
  ];
}
```

### RSS Feed Implementation

```typescript
// app/rss.xml/route.ts
export async function GET() {
  const posts = getBlogPosts();
  
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Aashish Khatri - Engineering Blog</title>
    <atom:link href="${siteUrl}/rss.xml" rel="self"/>
    ${posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      ${post.tags.map(tag => `<category>${tag}</category>`).join('')}
    </item>`).join('')}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',  // Cache 1 hour
    },
  });
}
```

**Why Route Handler (not static file)?**
- Dynamically pulls latest posts
- No build step needed to update
- Can add conditional logic later (e.g., filter by category)

---

## Performance Patterns

### Memoization Strategy

```typescript
// BlogList.tsx - Expensive computations memoized
const allTags = useMemo(() => {
  const tagSet = new Set<string>();
  posts.forEach(post => post.tags.forEach(tag => tagSet.add(tag)));
  return ['all', ...Array.from(tagSet).sort()];
}, [posts]);  // Only recalculate if posts array changes

const filteredPosts = useMemo(() => {
  return posts.filter(...);
}, [posts, filter, search]);  // Recalculate on filter/search change
```

### Component Lazy Loading (Future)

For future optimization, heavy components can be lazy-loaded:

```typescript
// Example pattern
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false  // Client-only
});
```

### Image Optimization

All images should use `next/image`:

```tsx
import Image from 'next/image';

<Image
  src="/project-screenshot.png"
  alt="Project screenshot"
  width={800}
  height={600}
  placeholder="blur"        // Show blur during load
  blurDataURL="data:..."    // Base64 placeholder
  priority={false}          // Lazy load by default
/>
```

---

## Data Architecture

### Type Definitions

```typescript
// lib/blog.ts
export interface BlogPost {
  slug: string;          // URL-safe identifier
  title: string;         // Display title
  date: string;          // ISO date string
  description: string;   // Meta description
  tags: string[];        // Category tags
  content: string;       // Raw MDX content
  readingTime: number;   // Calculated minutes
}

export type BlogPostMeta = Omit<BlogPost, 'content'>;
// Used for listings (don't load full content)
```

```typescript
// data/projects.ts
export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  techShort: string;     // "Go • PostgreSQL"
  description: string;
  techStack: string[];
  stats?: { label: string; value: string }[];
  githubUrl?: string;
  featured: boolean;     // Show in main grid
}
```

### Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         DATA SOURCES                            │
└─────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│ /data/*.ts    │    │ /content/     │    │ Environment   │
│               │    │ blogs/*.mdx   │    │ Variables     │
│ • projects    │    │               │    │               │
│ • experience  │    │ Frontmatter   │    │ Site URL etc  │
└───────┬───────┘    └───────┬───────┘    └───────┬───────┘
        │                    │                    │
        ▼                    ▼                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                    SERVER COMPONENTS                            │
│  • getBlogPosts()  • getBlogPost()  • getRelatedPosts()        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    CLIENT COMPONENTS                            │
│  • BlogList (pagination, filtering)                             │
│  • Navbar (mobile menu state)                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Error Handling

### Blog Post Not Found

```typescript
// lib/blog.ts
export function getBlogPost(slug: string): BlogPost {
  const fullPath = path.join(blogsDirectory, `${slug}.mdx`);
  
  // Will throw if file doesn't exist - Next.js catches and shows 404
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // ...
}
```

**Future improvement:** Add try/catch with notFound():
```typescript
import { notFound } from 'next/navigation';

if (!fs.existsSync(fullPath)) {
  notFound();
}
```

---

## Testing Strategy (Recommended)

### Unit Tests
- `calculateReadingTime()` with various content lengths
- `getRelatedPosts()` with edge cases (no matches, all matches)
- Tag extraction from posts

### Integration Tests
- Blog post rendering with various MDX features
- Pagination navigation flow
- Filter + search combinations

### E2E Tests (Playwright)
- Full navigation flow
- Mobile menu toggle
- Contact form submission (when backend added)

---

## Future Architecture Considerations

### Potential Improvements

1. **Content Layer Migration**
   - Move from file-based MDX to Contentlayer for type-safe content

2. **Search Enhancement**
   - Add Fuse.js for fuzzy search
   - Index content for full-text search

3. **Analytics Integration**
   - Vercel Analytics or Plausible
   - Page view tracking per blog post

4. **Comments System**
   - Giscus (GitHub Discussions)
   - Self-hosted with database

5. **Newsletter Integration**
   - ConvertKit or Buttondown
   - RSS-to-email automation
