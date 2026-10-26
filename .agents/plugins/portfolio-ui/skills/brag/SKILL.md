---
name: brag
description: Guides you in creating launch videos, interactive demo walkthroughs, showcase assets, and visual proof for your projects.
---

# Brag: Launch Videos & Project Showcase Assets

Use this skill when preparing visual proof, demo video scripts, screen recordings, interactive teasers, and high-converting launch assets for projects.

---

## 1. The 60-Second Video Demo Script Formula

Technical hiring managers and users rarely watch demos longer than 60–90 seconds. Use this high-density timeline:

| Timestamp | Screen Action | Voiceover / Text Overlay |
|-----------|---------------|--------------------------|
| **0:00 – 0:10** | Immediate hook: Live problem or error state. | "Querying millions of hospital clinical records in real-time without cloud leaks used to be impossible on consumer hardware." |
| **0:10 – 0:25** | The Magic Moment: User types query or inputs data; agents spin up in real-time. | "Here is ANCHOR: I type a clinical survival query in plain English, and 8 local LangGraph agents orchestrate SQL generation within 8 GB VRAM." |
| **0:25 – 0:45** | Architecture & Guardrails: Zoom into trace, terminal, or schema validation. | "It uses Bio_ClinicalBERT + FAISS to eliminate hallucinations, then runs deterministic SciPy routines with human-in-the-loop validation." |
| **0:45 – 0:60** | The Result & CTA: Final survival curve rendered + link to GitHub/Live Demo. | "Zero patient data sent to the cloud, instant insights. Check out the full case study and code on my portfolio." |

---

## 2. High-Impact Visual Asset Guidelines

### Screen Recordings & GIFs / WebP
- **Resolution**: Record at 1080p (1920x1080) at 60fps.
- **Mouse Dynamics**: Smooth cursor motion; turn on click highlights or subtle cursor ripples.
- **Zoom In**: Zoom to 125%–150% when showing terminal logs, code snippets, or UI details to ensure legibility on mobile feeds.
- **Conversion**: Convert demo clips to compressed `.webm` or animated `.webp` for instant page load on the portfolio (avoiding 50MB raw GIF files).

### Screenshot Beautification & Frame Wrappers
- **Frame Styling**: Place screenshots inside sleek dark-mode device frames or rounded browser windows (`border-radius: 12px; box-shadow: 0 20px 50px rgba(0,0,0,0.5)`).
- **Subtle Background Mesh**: Place the frame over a soft gradient backdrop (slate `#0f172a` with cyan/indigo glow `#38bdf8` at 10% opacity).

---

## 3. GitHub README & Case Study Showcase Badges

Include standardized visual asset ribbons in case studies and GitHub repositories:
- **Live Demo Badge**: `[![Live Demo](https://img.shields.io/badge/Demo-Live_Site-0284c7?style=for-the-badge&logo=vercel)](URL)`
- **Tech Stack Badges**: `![Python](https://img.shields.io/badge/Python-3.11-blue?style=flat-square&logo=python)` `![LangGraph](https://img.shields.io/badge/LangGraph-Multi_Agent-emerald?style=flat-square)`
- **Video Walkthrough Embed**: Include a clickable thumbnail with play button linking to the demo video.

---

## 4. Launch Asset Checklist
- [ ] 60-second video script focuses on the problem, live demo, and architecture.
- [ ] Screenshots are sharp, high-DPI, and wrapped in clean browser frames.
- [ ] Demo video has high-contrast captions / subtitles for muted mobile viewing.
- [ ] Video/GIF file sizes are compressed (< 5MB) for web performance.
- [ ] Clear call-to-action link provided at the end of the showcase.
