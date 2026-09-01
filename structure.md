# Portfolio Structure — Living Document

> **Purpose**: This document tracks the file structure, sections, and changelog of the portfolio. Update this file on every modification so changes can be tracked over time.

---

## 📁 File Structure

```
portfolio/
├── index.html          # Main single-page portfolio (all sections)
├── style.css           # Design system, theme, component styles
├── script.js           # Animations, scroll reveal, typing effect
├── structure.md         # This file — living structure & changelog
└── assets/              # Certificate PDFs (referenced by #certifications)
    ├── pranav_c_inmakes_internship.pdf
    ├── prnv_employee_of_month_june.pdf
    └── prnv_oracle_ai_foundation.pdf
```

---

## 📑 Page Sections

| # | Section ID       | Description                                            |
|---|-------------------|---------------------------------------------------------|
| 1 | `#hero`           | Name, animated title, stats, social links               |
| 2 | `#about`          | Summary, contact details                                 |
| 3 | `#skills`         | 6 skill cards grouped by category                        |
| 4 | `#experience`     | Timeline with 3 roles and multiple client projects       |
| 5 | `#education`      | B.Tech — Kannur University; HSS — Pinarayi                |
| 6 | `#certifications` | 3 certificate cards; click opens PDF in a modal viewer    |
| 7 | `#contact`        | Email, LinkedIn, GitHub, Phone                            |

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `--bg-base` (`#050f09` dark / `#f8fafc` light) |
| Surface | `--bg-surface` (`#091410` dark / `#f1f5f9` light) |
| Accent | `--accent` (`#16a34a` dark / `#15803d` light) |
| Accent 2 | `--accent2` (`#4ade80` dark / `#166534` light) |
| Accent 3 | `--accent3` (`#86efac` dark / `#14532d` light) |
| Text Primary | `--text-primary` |
| Text Secondary | `--text-secondary` |
| Font (Headings) | Outfit |
| Font (Body) | Inter |
| Font (Code/Mono) | Fira Code |

> Theme is toggled via `data-theme="dark"` / `data-theme="light"` on `<html>`, controlled by `script.js` and persisted in `localStorage`. All component colors reference CSS custom properties so new sections (like Certifications) theme automatically — avoid hardcoded colors in new CSS.

---

## 📝 Content Summary

**Owner:** Pranav C  
**Role:** Odoo Developer / Python Developer  
**Experience:** 3.5+ years  
**Odoo Versions:** v11 – v18  

### Current employers
- **UL Technology Solutions Pvt Ltd** — Developer Analyst (Sept 2025–Present)
- **Zesty Beanz Technologies** — Associate Software Engineer (Jan 2023–Aug 2025)

### Key clients
Gulfcrafts (Qatar), Hatta Trading (UAE), Consumerfed Kerala, Kerala Deposit Guarantee Fund Board, Toms Pipes, GPSR, Binkhamis (Saudi Arabia), Famous Associates (UAE)

### Certifications & Achievements
- Python Full Stack Developer Internship — INMAKES Infotech (`pranav_c_inmakes_internship.pdf`)
- Employee of the Month — June (`prnv_employee_of_month_june.pdf`)
- Oracle AI Foundations Certification (`prnv_oracle_ai_foundation.pdf`)

---

## 📋 Changelog

### v1.1.0 — 2026-08-31
- 🆕 Added **Certifications & Achievements** section (`#certifications`) between Education and Contact
- 3 clickable cert cards, each opening the matching PDF in an in-page modal (iframe preview + download link)
- Modal supports close via ✕ button, overlay click, or Esc key; keyboard-accessible cards (Tab + Enter/Space)
- Added nav link to `#certifications`
- File(s) modified: `index.html`, `style.css`
- New styles added to `style.css` using existing design tokens (`--accent`, `--bg-glass`, `--border`, `--radius`, etc.) so the section themes correctly in both dark and light mode
- Certificate PDFs live in `assets/` — filenames referenced directly in `data-pdf` attributes on each `.cert-card`

### v1.0.0 — 2026-08-27
- 🚀 Initial portfolio created
- Added Hero section with typing animation and stats
- Added About section with contact details
- Added Skills section (6 cards): Python, Odoo, APIs, PostgreSQL, Reporting, Frontend
- Added Experience timeline: roles and client projects
- Added Education section: B.Tech + Higher Secondary
- Added Contact section with email button and social links
- Dark/light theme with glassmorphism, Google Fonts, scroll-reveal animations

---

## 🔖 Modification Guide

When updating the portfolio, follow this process:

1. **Edit** the relevant file (`index.html`, `style.css`, or `script.js`)
2. **Update** the changelog below with date, version, and description
3. **Update** the File Structure table if files are added/removed
4. **Update** the Page Sections table if sections change
5. **Reference** this file to track what has changed between versions

### Changelog entry format
```
### v1.x.x — YYYY-MM-DD
- Short description of what changed
- File(s) modified: index.html / style.css / script.js
```