# Mimo Design System

A design system for **Mimo** — a mobile-first memory layer for the internet.

> If I save it, I can find it later.

---

## 📖 Start here: [`design.md`](./design.md)

`design.md` is the **single source of truth** for this design system — voice, color tokens, type, spacing, motion, components, screen architecture, icon set, accessibility, and hard rules. Read it before doing any design work.

This README is just an orientation page.

---

## What Mimo is

A mobile app (Android-first, v1) for saving and **retrieving** internet discoveries — articles, videos, products, recommendations, places, ideas. Every saved item becomes a **Memory Card** that preserves access, context, understanding, and relationships.

Mimo is explicitly **not** a bookmarking utility, note-taking app, productivity tool, knowledge manager, or social network.

Every screen and component follows the same vertical order:

```
Recognition → Context → Understanding → Relationships → Actions
```

---

## Sources

Generated from the Mimo product documentation:

- **GitHub:** https://github.com/sukanyas94-cloud/mimo_v1.0 (branch `main`)
- The primary brief is `designfundamentals/17-DesignSystemGuide.md`. Strategic context lives in the other files in `designfundamentals/`.

Reading the source repo gives a deeper understanding of product strategy, user behaviors, and AI behavior boundaries that are summarized but not exhaustively repeated in `design.md`.

---

## What's in this folder

| Path | Purpose |
|---|---|
| **[`design.md`](./design.md)** | **Single source of truth — read this.** |
| `SKILL.md` | Claude skill manifest. |
| `colors_and_type.css` | CSS variables for every token. Import this in any HTML you build. |
| `assets/` | Logo wordmark + monogram (SVG, placeholder marks). |
| `preview/` | Preview cards rendered in the Design System tab. |
| `ui_kits/mobile_app/` | Click-through Android prototype + reusable React components. **Lift components from here when building new screens.** |
| `fonts/` | Inter is loaded via Google Fonts; no local files. |

---

## Quick start (for the next designer or agent)

1. Open and read **`design.md`** end-to-end.
2. Open **`ui_kits/mobile_app/index.html`** to see the live app and play with all six primary screens.
3. When building something new, **lift components from `ui_kits/mobile_app/components.jsx`** and **reuse tokens from `colors_and_type.css`**.
4. Verify your work against the hard-rules cheat sheet in `design.md` § 13 before declaring done.

---

## Known substitutions

- **Brand mark.** The wordmark and monogram in `assets/` were designed from scratch — the source repo has no logo. Acceptable as placeholders pending the brand team.
- **Notifications.** The bell icon in the Home app bar is a placeholder concept; the source docs don't specify notifications.
- **Onboarding.** No formal first-run flow is specified — the Empty Home state covers the minimum (UC-015).

Full open-questions list in `design.md` § 16.
