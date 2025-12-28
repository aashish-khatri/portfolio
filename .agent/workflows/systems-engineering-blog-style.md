---
description: Detailed style guide for systems engineering blog posts with case-study driven content
---

# Systems Engineering Blog Style Guide

## Philosophy

**"Case Studies Before Theory"** — Every article is anchored in real production systems, not academic abstractions.

---

## Article Structure (~no limit on lines)

### 1. Hook (3-4 paragraphs)
- Open with a **specific engineering problem** at Mag7 scale
- Include a **philosophical quote** framing the tension
- Name the companies and products using the concept

**Example opening:**
> "How does Google Bigtable determine if a row exists without reading from disk? How does Akamai decide what to cache across 300,000+ servers?"

### 2. The Scale Problem
- Quantify the naive approach's failure with **concrete numbers**
- Use LaTeX for cost/memory calculations:
  ```
  $$10^9 \times 16 \text{ bytes} = 16 \text{ GB RAM}$$
  ```
- Show why this breaks at scale

### 3. Case Studies (3-5 companies)

Each case study follows this template:

```markdown
## Case Study N: [Company] [Product] — [Key Metric]

[2-3 sentence context of the problem they faced]

| Metric | Before | After |
|:-------|:-------|:------|
| **[Key Metric]** | X | Y |

[SQL/code snippet showing their API]

[1-2 sentences on the key insight]
```

**Priority order for case studies:**
1. Google (Bigtable, BigQuery, Spanner)
2. Meta (Cassandra, Presto, TAO)
3. Amazon (DynamoDB, Redshift, ElastiCache)
4. Netflix (streaming analytics)
5. Microsoft (Azure Data Explorer)
6. Redis (in-memory reference implementation)
7. Akamai/Cloudflare (CDN edge cases)

### 4. First Principles Derivation
- Start from **intuition** (coin flips, probability)
- Build up mathematical foundation step-by-step
- Include **formal theorem/definition** boxes
- Use LaTeX for all formulas

### 5. Implementation
- **C++ for DSA/algorithms** topics
- **Go for systems** topics
- Must include:
  - Complete, copy-paste ready code
  - Edge case handling
  - Memory-efficient design
  - Usage example with output

### 6. Complexity Analysis Table

```markdown
| Operation | Time | Space | Notes |
|:----------|:-----|:------|:------|
| Insert    | O(k) | —     | k = hash functions |
| Query     | O(k) | —     | Constant time |
| Storage   | —    | O(m)  | m = bit array size |
```

### 7. Algorithm Evolution (if applicable)
- Show historical progression
- Include year and key innovation

### 8. Conclusion
- Tie back to opening problem
- One-liner on engineering impact

---

## Formatting Rules

1. **LaTeX**: `$...$` inline, `$$...$$` display
2. **Code blocks**: Always specify language (`cpp`, `go`, `sql`, `bash`)
3. **Tables**: Use for all structured comparisons
4. **Blockquotes**: Philosophical framing only, max 1-2 per article. **Do NOT use quotation marks inside blockquotes** (MDX adds them automatically).
5. **Horizontal rules**: Separate major sections
6. **Tags**: 3-4 from: `System Design`, `Algorithms`, `C++`, `Go`, `Big Data`, `Distributed Systems`, `Performance`

---

## Tone & Voice

- **Authoritative**: Write like a senior engineer explaining to a peer
- **Specific**: Always cite concrete metrics and systems
- **Dense**: Every sentence teaches something
- **No fluff**: Cut phrases like "In this article, we will explore..."

---

## Example Metrics to Include

| Topic | Metric Examples |
|:------|:----------------|
| Databases | Read throughput, SSTable misses avoided |
| Caching | Cache hit rate, one-hit-wonders filtered |
| Analytics | Query cost reduction, data scanned |
| Memory | Bytes per element, compression ratio |
| Latency | P99 reduction, disk seeks avoided |

---

## Research Checklist

Before writing, search for:
- [ ] Google/Meta/Amazon engineering blog posts
- [ ] Academic papers (original algorithm paper)
- [ ] Open-source implementations (Redis, RocksDB)
- [ ] Wikipedia for historical context
- [ ] ByteByteGo / HighScalability for system design context