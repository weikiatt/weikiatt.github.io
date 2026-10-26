---
name: portfolio-seo-optimizer
description: Audit and optimize SEO, Open Graph metadata, Twitter Cards, Schema.org JSON-LD structured data, and search engine discoverability for the portfolio website.
---

# Portfolio SEO & Social Metadata Optimizer Skill

Use this workflow to maximize the search engine visibility, recruiter discoverability, and social sharing appearance (LinkedIn, Twitter/X, GitHub previews) of the portfolio.

## 1. Metadata Audit & Standards

Ensure every HTML page (`index.html` and all `project-*.html` pages) contains complete meta tags in `<head>`:

### Required Tags
- **Charset & Viewport**:
  ```html
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ```
- **Title Tag**:
  - Main page: `Lee Wei Kiat | Business Analytics & AI Portfolio` (50–60 characters).
  - Project page: `[Project Title] | Lee Wei Kiat` (e.g. `NCCS Capstone Project (ANCHOR Chatbot) | Lee Wei Kiat`).
- **Meta Description**:
  - 140–160 characters, concise and keyword-rich (e.g., Business Analytics, Machine Learning, Agentic AI, NUS).
- **Canonical URL**:
  ```html
  <link rel="canonical" href="https://weikiatt.github.io/" />
  ```

### Open Graph (LinkedIn, Discord, Slack)
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://weikiatt.github.io/" />
<meta property="og:title" content="Lee Wei Kiat | Business Analytics & AI Portfolio" />
<meta property="og:description" content="Final-year NUS Business Analytics student specializing in Machine Learning, Multi-Agent AI systems, and predictive analytics." />
<meta property="og:image" content="https://weikiatt.github.io/images/og-preview.png" />
<meta property="og:image:alt" content="Preview of Lee Wei Kiat's Portfolio" />
```

### Twitter / X Card
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Lee Wei Kiat | Business Analytics & AI Portfolio" />
<meta name="twitter:description" content="Final-year NUS Business Analytics student specializing in Machine Learning and Agentic AI." />
<meta name="twitter:image" content="https://weikiatt.github.io/images/og-preview.png" />
```

## 2. Structured Data (Schema.org JSON-LD)

Place the following JSON-LD in `index.html` before `</head>` to enable Google Rich Snippets:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Lee Wei Kiat",
  "url": "https://weikiatt.github.io/",
  "image": "https://weikiatt.github.io/images/profile_picture.jpg",
  "jobTitle": "AI Engineer & Data Analyst",
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "National University of Singapore"
  },
  "sameAs": [
    "https://www.linkedin.com/in/lee-wei-kiat/",
    "https://github.com/weikiatt"
  ],
  "knowsAbout": [
    "Machine Learning",
    "Agentic AI",
    "Predictive Modeling",
    "LangGraph",
    "Python",
    "SQL",
    "Business Analytics"
  ]
}
</script>
```

## 3. SEO Checklist
- [ ] Heading hierarchy: Exactly one `<h1>` per page, followed by logical `<h3>`/`<h4>` section headings.
- [ ] Image accessibility: All `<img>` tags must include keyword-relevant `alt` text (e.g. `alt="Lee Wei Kiat - Business Analytics and Machine Learning Portfolio"`).
- [ ] `robots.txt`: Check that `robots.txt` exists at root allowing crawling:
  ```txt
  User-agent: *
  Allow: /
  Sitemap: https://weikiatt.github.io/sitemap.xml
  ```
- [ ] `sitemap.xml`: Contains `https://weikiatt.github.io/` and all project URLs with `<lastmod>` timestamps.
