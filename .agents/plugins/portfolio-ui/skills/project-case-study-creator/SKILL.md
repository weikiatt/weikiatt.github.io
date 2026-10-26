---
name: project-case-study-creator
description: Scaffold and format new project case study pages and link them into the portfolio project grid with consistent styling and structured metrics.
---

# Project Case Study Creator Skill

Use this workflow whenever adding a new project showcase or deep-dive case study to the portfolio.

## Workflow Overview
1. Gather project details: title, timeline, role, problem statement, technical solution, architectural highlights, quantitative metrics, and live demo / repo / cert links.
2. Generate the dedicated project page `project-[name].html`.
3. Add the project card to `index.html#projects` with matching filters and tags.
4. Verify navigation, themes, and responsive design.

---

## 1. Case Study HTML Template (`project-[slug].html`)

Ensure the page adheres to the established project layout:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <link rel="stylesheet" href="style.css" />
    <title>[Project Name] | Lee Wei Kiat</title>
    <script>
      (function() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
      })();
    </script>
  </head>
  <body class="project-page">
    <nav class="custom-navbar">
      <a class="navbar-brand" href="index.html" aria-label="Lee Wei Kiat — home">LEE WEI KIAT</a>
      <ul class="navbar-links" id="navbar-links">
        <li><a href="index.html#about">ABOUT</a></li>
        <li><a href="index.html#education">EDUCATION</a></li>
        <li><a href="index.html#skills">SKILLS</a></li>
        <li><a href="index.html#experience">EXPERIENCE</a></li>
        <li><a href="index.html#awards">AWARDS</a></li>
        <li><a href="index.html#projects">PROJECTS</a></li>
        <li><a href="index.html#contact">CONTACT</a></li>
      </ul>
      <div class="nav-actions">
        <button class="theme-toggle" id="theme-toggle" type="button" aria-label="Toggle theme">
          <i class="fa-solid fa-moon" aria-hidden="true"></i>
        </button>
        <button class="hamburger" id="hamburger" type="button" aria-label="Open navigation menu" aria-controls="navbar-links" aria-expanded="false">
          <i class="fa-solid fa-bars" aria-hidden="true"></i>
        </button>
      </div>
    </nav>

    <section class="project-page-section">
      <div class="container">
        <div class="section-header">
          <h3>[Project Name]</h3>
        </div>
        <div class="project-details-card">
          <div style="margin-bottom: 1.5rem;">
            <span class="hero-tag" style="margin-bottom: 0.5rem;">[Role] &middot; [Date Range]</span>
            <p style="color: var(--text-muted); font-size: 0.95rem; margin: 0.4rem 0 0; font-style: italic;">
              [One-sentence impactful summary of the project architecture and impact]
            </p>
          </div>

          <h4 class="details-heading">The Problem</h4>
          <p class="details-text">
            [Clear articulation of the business or technical friction, pain point, or limitation]
          </p>

          <h4 class="details-heading">The Solution</h4>
          <p class="details-text">
            [Overview of what was engineered, the architecture, and core methodologies used]
          </p>

          <h4 class="details-heading">Key Architectural Highlights &amp; Outcomes</h4>
          <ul class="details-list">
            <li class="details-list-item">
              <strong>[Highlight / Metric 1]</strong>: [Explanation with numbers, tech stack, and impact]
            </li>
            <li class="details-list-item">
              <strong>[Highlight / Metric 2]</strong>: [Explanation with numbers, tech stack, and impact]
            </li>
            <li class="details-list-item">
              <strong>[Highlight / Metric 3]</strong>: [Explanation with numbers, tech stack, and impact]
            </li>
          </ul>

          <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="index.html#projects" class="btn-case-study" style="width: auto;">&larr; Back to Projects</a>
            <!-- Optional Demo or GitHub link -->
            <a href="[URL]" class="btn-case-study" style="width: auto;" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-github" aria-hidden="true"></i> View Repository
            </a>
          </div>
        </div>
      </div>
    </section>

    <footer class="site-footer">
      <p>&copy; 2026 Lee Wei Kiat. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
  </body>
</html>
```

---

## 2. Card Integration in `index.html#projects`

Add the corresponding card within `.projects-grid` with the appropriate category tag:

```html
<div class="project-card" data-category="[ai|ml|data|web]">
  <div class="project-thumb">
    <img src="images/[thumbnail].png" alt="[Project Name] Thumbnail" loading="lazy" />
  </div>
  <div class="project-info">
    <div class="project-tags">
      <span class="tag">[Tech 1]</span>
      <span class="tag">[Tech 2]</span>
    </div>
    <h4 class="project-title">[Project Name]</h4>
    <p class="project-desc">[Concise 2-line summary focusing on quantifiable achievements]</p>
    <a href="project-[slug].html" class="btn-case-study">Read Case Study &rarr;</a>
  </div>
</div>
```

---

## 3. Quality Verification Checklist
- [ ] Theme switcher works consistently on the new page.
- [ ] Mobile hamburger menu toggles and closes properly.
- [ ] Return link `&larr; Back to Projects` properly navigates back to `index.html#projects`.
- [ ] External links include `target="_blank" rel="noopener noreferrer"`.
