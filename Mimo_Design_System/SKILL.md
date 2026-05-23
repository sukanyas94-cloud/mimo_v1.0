---
name: mimo-design
description: Use this skill to generate well-branded interfaces and assets for Mimo — a mobile-first memory layer for the internet — either for production or for throwaway prototypes, mocks, and explorations. Contains essential design guidelines, color and type tokens, fonts, brand assets, and a complete Android-flavored UI kit for prototyping the Mimo app.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

Mimo is a **retrieval-first memory companion**. The product is mobile (Android-first), built around a single core object called the **Memory Card**, with three bottom-nav destinations (Home, Library, Profile) and seven screen types in total.

The visual language is **warm monochrome** — Notion-tonal, Google Keep–simple, MUI baseline. Inter font. No emoji. Lucide icons, all outline, 1.5px stroke. Calm motion. Full **light + dark** themes are provided — switch via `[data-theme="dark"]` on any container.

Every multi-section surface follows the same vertical order: **Recognition → Context → Understanding → Relationships → Actions.** This is not just structural; it's a visual contract.

## Files to consult first

- `README.md` — the full system overview, content tone, visual foundations, iconography.
- `colors_and_type.css` — CSS variables for every token. Import this and use the variables; do not hard-code values.
- `ui_kits/mobile_app/` — a working click-through recreation. Lift components from here.
- `assets/` — logo, wordmark, monogram (these are designed substitutes — flag them when you copy).

## Hard rules

- **Single font family** (Inter). Never mix families.
- **Sentence case** in all UI copy. _"Save link"_, never _"Save Link"_.
- **No emoji** in product UI.
- **Recognition → Context → Understanding → Relationships → Actions** ordering on any screen that has multiple sections.
- **Human context** (cream tint, sepia ink) and **System understanding** (cool slate, deep-blue ink) must remain visually distinct — they can never be styled the same.
- **Single-scroll Memory Detail** — no tabs.
- **Hide empty sections** — never show empty containers.
- **Every "Related" item must include a relationship explanation.**
- **44px minimum touch target** on every interactive element.
- **No gradients on chrome.** No background patterns. No illustrated empty states.
- **Motion is calm:** ≤ 280ms, `cubic-bezier(0.2, 0, 0.2, 1)`. No bounces. No scale-up.
