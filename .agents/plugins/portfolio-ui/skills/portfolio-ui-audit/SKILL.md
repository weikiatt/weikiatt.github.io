---
name: portfolio-ui-audit
description: Review, audit, and enhance UI components, animations, responsive design, and web accessibility for the personal portfolio.
---

# Portfolio UI Audit & Enhancement Skill

Use this workflow whenever modifying or reviewing UI components, adding new case studies, or updating visual aesthetics.

## Audit Checklist
1. **Responsive Verification**:
   - Check mobile layout (< 768px): Does the hamburger menu toggle cleanly? Do cards stack into a single column with proper gutter spacing?
   - Check desktop layout (> 1024px): Are grids aligned? Is whitespace balanced?
2. **Animation & Interaction Quality**:
   - Verify card tilt & glare initializes only when `prefers-reduced-motion` is not enabled.
   - Check for smooth scroll behavior and active navigation highlights.
3. **Accessibility**:
   - Ensure all image tags have descriptive `alt` text.
   - Ensure icon-only buttons include descriptive `aria-label` attributes.
   - Test tab order and focus rings on interactive elements.
