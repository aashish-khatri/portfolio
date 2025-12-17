# Feature Roadmap

Future feature improvements for the portfolio, focused on functionality rather than design.

---

## High Priority

### 1. Blog Enhancements

#### Table of Contents Generation
Auto-generate TOC from headings in blog posts.
```typescript
// lib/blog.ts
export function extractHeadings(content: string): Heading[] {
  const regex = /^#{2,3}\s+(.+)$/gm;
  // Return array of { level, text, id }
}
```
- Sticky sidebar TOC on desktop
- Scroll spy to highlight current section

#### Code Copy Button
Add copy-to-clipboard for code blocks.
```typescript
// components/blog/CodeBlock.tsx
<button onClick={() => navigator.clipboard.writeText(code)}>
  Copy
</button>
```

#### Series/Collections
Group related posts into series.
```mdx
---
series: 'System Design Fundamentals'
seriesOrder: 1
---
```

#### View Count Tracking
Track and display post views.
- Vercel KV or Upstash Redis for storage
- API route for incrementing counts
- Display on blog cards and post pages

---

### 2. Search Improvements

#### Full-Text Search with Fuse.js
```bash
npm install fuse.js
```
```typescript
const fuse = new Fuse(posts, {
  keys: ['title', 'description', 'content', 'tags'],
  threshold: 0.3,
  includeScore: true
});
```

#### Search Suggestions/Autocomplete
- Show matching tags as user types
- Recent searches (localStorage)

---

### 3. Contact Form Backend

#### Option A: Formspree (No-code)
```html
<form action="https://formspree.io/f/{id}" method="POST">
```

#### Option B: API Route + Email Service
```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  await resend.emails.send({
    from: 'portfolio@yourdomain.com',
    to: 'your@email.com',
    subject: `Contact: ${name}`,
    html: `<p>${message}</p><p>From: ${email}</p>`
  });
}
```

---

### 4. Newsletter Integration

#### ConvertKit/Buttondown
```typescript
// app/api/subscribe/route.ts
export async function POST(req: Request) {
  const { email } = await req.json();
  
  await fetch('https://api.convertkit.com/v3/forms/{formId}/subscribe', {
    method: 'POST',
    body: JSON.stringify({
      api_key: process.env.CONVERTKIT_API_KEY,
      email
    })
  });
}
```

- Add subscribe form to blog sidebar
- Optional: RSS-to-email automation

---

## Medium Priority

### 5. Comments System

#### Giscus (GitHub Discussions)
```tsx
<script src="https://giscus.app/client.js"
  data-repo="username/portfolio"
  data-repo-id="..."
  data-category="Blog Comments"
  data-mapping="pathname"
  async>
</script>
```

No backend required, uses GitHub for auth.

---

### 6. Resume/CV Feature

#### PDF Generation
```bash
npm install @react-pdf/renderer
```

```typescript
// app/resume/page.tsx
import { Document, Page, Text } from '@react-pdf/renderer';

const Resume = () => (
  <Document>
    <Page>
      <Text>Aashish Khatri</Text>
      {/* Pull from experience.ts and projects.ts */}
    </Page>
  </Document>
);
```

Alternatively: Host PDF in `/public/resume.pdf` with download link.

---

### 7. Analytics

#### Vercel Analytics
```bash
npm install @vercel/analytics
```
```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
<Analytics />
```

#### Plausible (Privacy-focused)
```tsx
<Script
  defer
  data-domain="yourdomain.com"
  src="https://plausible.io/js/script.js"
/>
```

---

### 8. Project Demo Integration

#### Live Demos
- Embed iframe previews for web projects
- CodeSandbox/StackBlitz embeds for code projects

#### GitHub Stats Integration
```typescript
// Fetch repo stats from GitHub API
const repo = await fetch('https://api.github.com/repos/user/repo');
const { stargazers_count, forks_count } = await repo.json();
```

Display stars, forks, last updated on project cards.

---

## Low Priority (Nice to Have)

### 9. Internationalization (i18n)
Support multiple languages using `next-intl`:
```bash
npm install next-intl
```

### 10. Bookmarks/Reading List
Let visitors save posts to read later (localStorage).

### 11. Share Buttons
Native share API or social share links:
```typescript
navigator.share({
  title: post.title,
  url: window.location.href
});
```

### 12. Command Palette (⌘K)
Quick navigation with keyboard:
```bash
npm install cmdk
```

### 13. Content Versioning
Show "Last updated" dates, changelog for posts.

### 14. API for External Use
Public API for fetching blog posts (for integration with other apps).

---

## Implementation Priority Matrix

| Feature | Effort | Impact | Priority |
|---------|--------|--------|----------|
| Contact form backend | Low | High | 🔴 Do First |
| Code copy button | Low | Medium | 🔴 Do First |
| Full-text search | Medium | High | 🟡 Soon |
| Table of contents | Medium | Medium | 🟡 Soon |
| View count tracking | Medium | Medium | 🟡 Soon |
| Newsletter | Low | Medium | 🟡 Soon |
| Comments (Giscus) | Low | Medium | 🟢 Later |
| Analytics | Low | Low | 🟢 Later |
| Resume PDF | Medium | Low | 🟢 Later |
| i18n | High | Low | ⚪ Maybe |

---

## Quick Wins (< 1 hour each)

1. Add copy button to code blocks
2. Implement contact form with Formspree
3. Add Vercel Analytics
4. Add social share buttons
5. Host resume PDF with download link
6. Add "Last updated" to blog posts
