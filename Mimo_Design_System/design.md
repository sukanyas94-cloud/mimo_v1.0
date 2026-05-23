# design.md — Mimo Design System

**Single source of truth.** When designing anything for Mimo, read this file first. It consolidates the brand voice, all design tokens (color, type, spacing, motion), component recipes, screen architecture, and content rules. Companion files (`colors_and_type.css`, `ui_kits/mobile_app/*`, `preview/*`) are derived from what's written here.

---

## 1. The product in 30 seconds

Mimo is a **mobile-first memory layer for the internet** — Android-first in v1. People save articles, videos, products, places, recommendations as **Memory Cards**. The goal is retrieval, not storage.

Promise: _"If I save it, I can find it later."_

Mimo is **not** a bookmarking tool, a feed, a notes app, a social network, a knowledge manager, or a productivity surface. It's a calm memory companion.

> Every screen, every component, every decision serves this question: **"Will this help users reconnect with information when it becomes useful again?"**

Source documentation: https://github.com/sukanyas94-cloud/mimo_v1.0 — especially `designfundamentals/17-DesignSystemGuide.md`.

---

## 2. The recognition hierarchy (the system's spine)

Every multi-section screen, every Memory Card, every retrieval surface follows this vertical order. **This is non-negotiable.**

```
Recognition  →  Context  →  Understanding  →  Relationships  →  Actions
```

| Layer | Question it answers | Typical contents |
|---|---|---|
| Recognition | Is this what I was looking for? | Thumbnail, title, source, timestamp |
| Context | Why did this matter? | Human Context, Source Context |
| Understanding | What does this represent? | System inference (Travel Reference, Future Purchase…) |
| Relationships | What else is connected? | Related Memory cards + relationship explanation |
| Actions | What can I do now? | Open Original, Share, Save To Collection, Edit, Delete |

If you flip the order or skip a layer, you're working against the system.

---

## 3. Application architecture

Bottom navigation has exactly **three** destinations. No more.

| Tab | Owns |
|---|---|
| Home | Retrieval · capture · rediscovery |
| Library | Browsing · collections · multi-select |
| Profile | Preferences · permissions · account |

Seven screen types in total:
1. **Home** — Search/paste field + Recent Activity + Related Memories.
2. **Search** — Dedicated retrieval surface, replaces Home content with keyboard up.
3. **Memory Detail** — Single-scroll page following the recognition hierarchy. **No tabs.**
4. **Library** — Default grid view, optional list view, filter chips, Collections row.
5. **Collection Detail** — Header + memory grid.
6. **Profile** — Grouped settings.
7. **Save Confirmation Sheet** — Transient bottom sheet after capture.

Modal/state additions (also built in the kit):
- **Add Personal Context** sheet (UC-008)
- **Multi-select mode** on Library (UC-010)
- **Source Unavailable** banner on Memory Detail (UC-007 edge)
- **Empty Home** (UC-015 / F-015)

---

## 4. Content fundamentals

### Voice
Calm, plain, confidence-building. A quiet companion, never a coach, never promotional. Statements over commands.

### Rules
- **Second person** ("you") for guidance; spare. **Never "we"** inside the app.
- **First person** (_"If I save it, I can find it later"_) only in the brand promise.
- **Sentence case** everywhere. _"Save link"_ not _"Save Link"_. _"Recent activity"_ not _"Recent Activity"_.
- **Title Case** only for proper nouns and the product name itself: _Mimo_, _Memory Card_, _Collection_.
- **No emoji** in product UI. Ever.
- **No marketing speak.** No "unlock", "supercharge", "AI-powered", "ignite", "boost".
- **No urgency.** No "don't lose your memories!", no streak counts, no badges.
- **The separator** between metadata is a neutral interpunct `·`.
- **Down arrow `↓`** in flow diagrams (matches the source docs).

### Length & rhythm
- Headlines: 2–6 words.
- Empty-state bodies: one short sentence.
- Button labels: 1–3 words, verb-first.
- Relationship explanations start with a connective: _"Related because both reference Japan travel."_

### Required copy patterns

| Surface | Example |
|---|---|
| Empty Home | _Start saving links to build your memory space._ |
| Search no-results | _No exact matches. Here's what might be related._ |
| Save confirmation | _Saved._ → _View memory · Undo_ |
| Human context label | _You noted_ |
| System context label | _Mimo thinks_ |
| Relationship label | _Related because both reference Japan travel._ |
| Profile section header | _Preferences_ |
| Source unavailable | _Original page is no longer reachable. Your memory is still safe._ |

### Voice anti-patterns (never write these)
- ❌ "Unlock your second brain!"
- ❌ "🚀 Welcome aboard!"
- ❌ "You've got 0 memories — let's change that!"
- ❌ "AI-powered intelligent retrieval"
- ❌ "Don't forget to organize your library!"

---

## 5. Color tokens

The palette is **warm monochrome with two semantic tints**. Colors recede so thumbnails and titles do the recognition work. Saturated color is reserved for human/system context and a single accent.

CSS variables live in `colors_and_type.css`. Below are the literal values for both themes.

### Light theme (default)

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#FFFFFF` | Page background |
| `--surface` | `#FFFFFF` | Cards, sheets |
| `--surface-quiet` | `#F5F4EF` | Recessed area (chip bg, save-sheet preview) |
| `--surface-press` | `#EDECE6` | Active/press state |
| `--border` | `#ECEAE3` | 1px card borders |
| `--border-strong` | `#DAD7CE` | Stronger borders |
| `--divider` | `#F1EFE9` | In-card dividers |
| `--ink-1` | `#1A1A18` | Primary text |
| `--ink-2` | `#5C5B56` | Secondary text |
| `--ink-3` | `#8C8B83` | Tertiary text, captions |
| `--ink-4` | `#B5B3AA` | Disabled text |
| `--ink-on-accent` | `#FFFFFF` | Text on `--accent` |

### Brand accent (warm umber — use sparingly)

| Token | Hex |
|---|---|
| `--accent` | `#8B5A3C` |
| `--accent-strong` | `#6F4429` |
| `--accent-soft` | `#F2E6DA` |

**Where to use accent:** wordmark, primary CTA (text only), focus rings. **Never** as a fill on large surfaces.

### Context tints (must remain visually distinct)

| Token | Hex | Used for |
|---|---|---|
| `--human-bg` | `#F5EBD9` | Human Context background |
| `--human-border` | `#E8D7BB` | Human Context border |
| `--human-ink` | `#6B4E1F` | Human Context text |
| `--system-bg` | `#E9EEF3` | System Understanding background |
| `--system-border` | `#D2DCE7` | System Understanding border |
| `--system-ink` | `#34526E` | System Understanding text |

> **Hard rule** (from `11-MemoryCardArchitecture.md`): Human Context (user-provided) and System Understanding (AI-inferred) **must never be styled the same**. Users must be able to tell at a glance which is which.

### Semantic status (muted, never primary)

| Token | Hex |
|---|---|
| `--success` / `--success-bg` | `#4F7A52` / `#E8EFE7` |
| `--warning` / `--warning-bg` | `#A66A24` / `#F5E9D6` |
| `--danger`  / `--danger-bg`  | `#A14437` / `#F4E1DD` |
| `--info`    / `--info-bg`    | `#426D8E` / `#E3EBF2` |

### Dark theme (`[data-theme="dark"]`)

| Token | Hex |
|---|---|
| `--bg` | `#121211` |
| `--surface` | `#1B1B19` |
| `--surface-quiet` | `#232220` |
| `--surface-press` | `#2C2B27` |
| `--border` | `#2A2926` |
| `--border-strong` | `#3D3B36` |
| `--ink-1` | `#F2F0E9` |
| `--ink-2` | `#B5B3AA` |
| `--ink-3` | `#8C8B83` |
| `--accent` | `#C58A6A` (softer in dark) |
| `--human-bg` | `#3A2D1A`, `--human-ink` | `#F0D9A8` |
| `--system-bg` | `#1F2E40`, `--system-ink` | `#B5CCE0` |
| `--scrim` | `rgba(0,0,0,0.55)` |

Dark is **warm dark** — not pure black. Use the same separation rules.

---

## 6. Typography

### Family
**Inter.** Single family. Fallback: `Roboto, system-ui, sans-serif`. **Never mix families.** Hierarchy comes from size + weight + tracking — never family-switching.

Weights used: 400 (regular), 500 (medium), 600 (semibold), 700 (bold, rare).

### Type scale

| Token | Size | Weight | Line-height | Tracking | Used for |
|---|---|---|---|---|---|
| `--fs-display` / `.t-display` | 32px | 600 | 1.2 | -0.02em | Empty-state headlines |
| `--fs-h1` / `.t-h1` | 24px | 600 | 1.2 | -0.02em | Screen titles |
| `--fs-h2` / `.t-h2` | 20px | 600 | 1.3 | -0.02em | Section headers |
| `--fs-h3` / `.t-h3` | 17px | 600 | 1.3 | 0 | Card titles |
| `--fs-body` / `.t-body` | 15px | 400 | 1.45 | 0 | Body |
| `--fs-body-sm` / `.t-body-sm` | 14px | 400 | 1.45 | 0 | Compact body |
| `--fs-meta` / `.t-meta` | 13px | 400 | 1.3 | 0 | Source, timestamp; tabular figures |
| `--fs-caption` / `.t-caption` | 12px | 500 | 1.3 | 0 | Chips, micro-labels |
| `--fs-eyebrow` / `.t-eyebrow` | 11px | 600 | 1.3 | 0.06em | All-caps eyebrow labels (rare) |

**Minimum body text:** 14px on mobile.
**Tabular figures** (`font-feature-settings: "tnum"`) on timestamps, counts, version strings.

---

## 7. Spacing, radius, elevation, motion

### Spacing (4px base)
`--space-4` (4) · `--space-8` (8) · `--space-12` (12) · `--space-16` (16) · `--space-20` (20) · `--space-24` (24) · `--space-32` (32) · `--space-40` (40) · `--space-56` (56) · `--space-80` (80)

- Card interior padding: **20px**.
- Screen edge padding (mobile): **16px**.
- Section gap inside a scroll surface: **32px**.
- Touch target floor: **44px**.

### Radius

| Token | Px | For |
|---|---|---|
| `--radius-sm` | 6 | Inputs, chips |
| `--radius-md` | 10 | Buttons, thumbnails, small cards |
| `--radius-lg` | 14 | Memory Cards, sheets |
| `--radius-xl` | 20 | Bottom sheets |
| `--radius-full` | 999 | Pill chips, avatars |

### Elevation (warm soft shadows; light theme)

| Token | Shadow | For |
|---|---|---|
| `--elev-0` | `none` | Flat sections inside containers |
| `--elev-1` | `0 1px 2px rgba(20,20,18,0.04)` | Memory Cards at rest |
| `--elev-2` | `0 6px 16px -4px rgba(20,20,18,0.08)` | Bottom sheet, menus |
| `--elev-3` | `0 18px 40px -12px rgba(20,20,18,0.12)` | Modals (rare) |

Cards rely on **1px border + barely-there shadow**, not big drop shadows.

### Motion

| Token | Value | For |
|---|---|---|
| `--duration-fast` | 120ms | Hover swaps |
| `--duration-base` | 160ms | Default transition |
| `--duration-medium` | 220ms | Sheet rise, panel slide |
| `--duration-slow` | 280ms | Maximum |
| `--ease-out` | `cubic-bezier(0.2, 0, 0.2, 1)` | Entrances |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Exits |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Symmetric |

**No bounces. No overshoot. No springs. Nothing above 280ms.** Reduce-motion is honored — all transitions degrade to opacity-only.

### Interaction states

- **Hover:** background shifts to `--surface-hover` (`#F5F4EF`). Never opacity-based, never scale.
- **Press / active:** background shifts to `--surface-press` (`#EDECE6`); card scales to `0.985` for 120ms.
- **Focus:** 2px outline in `--accent`, offset 2px. Always visible.
- **Disabled:** `opacity: 0.42`, `cursor: not-allowed`.

---

## 8. Iconography

**Lucide** (https://lucide.dev). All outline, **1.5px stroke**, inherits `currentColor`. Inlined as SVG — no font dependency, no mixed weights.

### Sizes
- 16px inside chips and small actions
- 18–20px in body and toolbars
- 22–24px in bottom nav

### Rules
- Outline only. No filled glyphs in the chrome.
- Color always inherits from text.
- Every icon needs a visible label or `aria-label`.
- Active bottom-nav item bumps stroke to **1.9** for emphasis — same icon, slightly heavier.

### Icon table

| Concept | Lucide |
|---|---|
| Home | `home` |
| Library | `library` |
| Profile | `user` |
| Search | `search` |
| Save / paste link | `link` |
| Open original | `external-link` |
| Share | `share-2` |
| Add to collection | `bookmark-plus` |
| Edit context | `pencil-line` |
| Delete | `trash-2` |
| More | `more-horizontal` |
| Back / forward | `chevron-left` / `chevron-right` |
| Close | `x` |
| Filter | `sliders-horizontal` |
| Grid / list view | `layout-grid` / `list` |
| Multi-select check | `check` |
| Empty state | `inbox` |
| Human context | `quote` |
| System understanding | `sparkles` |
| Theme light / dark | `sun` / `moon` |
| Warning | `triangle-alert` |
| Add | `plus` |
| Clock / timestamp | `clock` |
| Notifications | `bell` |
| Folder | `folder` |
| Image fallback | `image` |
| Source · Instagram | `instagram` |
| Source · YouTube | `youtube` |
| Source · generic web | `globe` |

### Emoji
**Never in product UI.**

---

## 9. Component recipes

Copy from `ui_kits/mobile_app/components.jsx` rather than rebuilding. Below is the high-level inventory + composition rules.

### Button
Variants: `primary` (black bg, white text) · `secondary` (white bg, gray border) · `ghost` (transparent) · `accent` (umber) · `danger` (red text only).
Sizes: `md` (44px h, default) · `sm` (32px h).
Layout: icon + label, never icon-only without `aria-label`.

### AppBar
56px tall. Sentence-case title. One leading icon slot, one trailing icon slot. Transparent variant only for full-bleed hero screens.

### BottomNav
56px tall. Three items, label always visible. Active state = ink-1 color + 1.9 stroke weight. Background matches `--bg`.

### SearchField
48px tall. Three modes:
- **Default:** white bg, gray border, search icon.
- **Focused:** accent border + 3px accent-soft focus ring.
- **URL detected:** cool slate tint (`--system-bg`), link icon, "Save link" pill button revealed at trailing edge.

Same component is the Home capture field AND the Search screen's input.

### Chip
- `neutral` (quiet bg, gray text) — source chips, generic labels.
- `human` (cream bg, sepia text) — "You noted".
- `system` (slate bg, deep-blue text) — "Mimo thinks".
- `accent` (warm soft bg).
- `success` (muted green bg).
Sizes: `md` (28px) · `sm` (22px).

### FilterChip
Segmented filter pill. 32px tall. Active = ink-1 bg / white text.

### MemoryCard
Variants:
- **Standard** — 16:9 thumbnail, title (15px/600), meta line (12px/ink-3), context badges row.
- **Video** — same as standard with centered play overlay on dark thumbnail.
- **Fallback** — no thumbnail; quiet bg with centered `image` icon.
- **Compact** — list row, 64×64 square thumb, single line title, no badges.

Always: 1px border, `--elev-1` shadow, `--radius-lg`.

### HumanContextBlock / SystemContextBlock
Each is a tinted rounded block with:
- Eyebrow label (icon + uppercase text, 11px/600)
- Body (14px, 1.45 line height)

These two **must never be swapped or styled the same**.

### RelatedCard
Compact row: 56×56 thumb + title + relationship reason. The reason is **required**.

### SectionHeader
17px/600 left, optional trailing action. 12px gap below before content.

### SaveSheet
Bottom sheet, 20px top radius, scrim `rgba(20,20,18,0.32)`. Structure: grabber → success check + "Saved." → preview card → Undo / View memory buttons.

### AddContextSheet
Bottom sheet. Title + helper text + textarea (background = `--human-bg`) + Cancel / Save context buttons. Save disabled until non-empty.

### SourceUnavailableBlock
Warning banner inside Memory Detail when source link is broken. Warning tint, triangle-alert icon, two-line copy.

### MultiSelectBar
Fixed bottom action bar that replaces the bottom nav when Library multi-select is active. Cancel · count · Delete · Create collection.

---

## 10. Layout rules

- **Mobile width target:** 390px (iPhone 15). Must remain correct 360–428px.
- **Bottom nav** fixed, 56px, respects safe-area inset.
- **Top app bar** 56px, single title + ≤1 trailing action.
- **Sticky search field** on Home — floats at the top of the scroll area.
- **Section gap** 32px between major content blocks.
- **No nested cards.** A Memory Card never contains another card.
- **Hide empty sections.** A Memory Detail screen skips any layer (Context, Understanding, Relationships) with no data — never shows empty containers.

---

## 11. Imagery

- All product imagery is **user-saved content thumbnails** — they will be warm, cool, b&w, grainy, branded, all over the map. The chrome around them must stay **neutral enough to host any color**.
- Thumbnails: `--radius-md` (10px), `object-fit: cover`, 1px inset border (`rgba(20,20,18,0.04)`) for low-contrast edges.
- Fallback when no thumbnail: `--surface-quiet` bg with centered `image` icon in `--ink-4`.
- **No illustrated empty states.** Empty states are typographic — a short headline + a CTA.
- **No background imagery** at the screen level. No textures, no patterns, no gradients on chrome.
- **One acceptable gradient exception:** a 20px linear protection fade from `--bg` → transparent at the top of a full-bleed Memory Detail thumbnail, so the back button stays legible.

---

## 12. Accessibility

- **Touch targets ≥ 44px.**
- **Visible focus rings** (2px `--accent`, 2px offset).
- **Don't rely on color, icons, or animation alone.** Every state needs a redundant text label.
- **Contrast:** all text ≥ 4.5:1 against its background (verified on neutral tokens).
- **Reduced motion:** honored via `prefers-reduced-motion` — transitions degrade to opacity-only.
- **Screen readers:** every icon needs either visible text or `aria-label`. Section landmarks on every major screen region.

---

## 13. Hard rules (cheat sheet)

When in doubt, follow these:

1. **Single font family** (Inter). Never mix.
2. **Sentence case** in all UI copy.
3. **No emoji** in product UI.
4. **Recognition → Context → Understanding → Relationships → Actions** ordering on any screen with multiple sections.
5. **Human context** ≠ **System understanding** — visually distinct, always.
6. **Single-scroll Memory Detail.** No tabs.
7. **Hide empty sections** — never show empty containers.
8. **Every "Related" item explains the relationship.**
9. **44px minimum touch target.**
10. **No gradients on chrome.** No background patterns. No illustrated empty states.
11. **Motion ≤ 280ms**, `cubic-bezier(0.2, 0, 0.2, 1)`, no bounces, no scale-up.
12. **Three bottom-nav tabs.** Never four.
13. **Search and capture share one entry point** — the same field is used for both.
14. **Outline icons only**, 1.5px stroke.

---

## 14. File index

```
design.md                ← THIS FILE — single source of truth
README.md                ← overview + sources
SKILL.md                 ← Claude skill manifest
colors_and_type.css      ← CSS variables + utility classes
assets/
  logo-wordmark.svg
  logo-wordmark-ink.svg
  logo-monogram.svg
fonts/                   ← Inter loaded via Google Fonts (no local files)
preview/                 ← design-system preview cards (Design System tab)
ui_kits/
  mobile_app/
    README.md
    index.html           ← click-thru Android prototype
    icons.jsx            ← Lucide icons as React components
    components.jsx       ← All primitives (Button, MemoryCard, …)
    screens.jsx          ← All six primary screens
    data.jsx             ← Mock memories + collections
    app.jsx              ← Stack navigation + theme + sheet wiring
    android-frame.jsx    ← Device shell
```

---

## 15. Workflow when designing something new

1. **Read this file** (you're doing it).
2. **Locate the relevant primary screen** in section 3. If the design is a new state of an existing screen, it must follow that screen's ownership and hierarchy.
3. **Lift components from `ui_kits/mobile_app/components.jsx`** rather than rebuilding. They already encode the rules.
4. **Reuse tokens from `colors_and_type.css`** via CSS variables. Never hard-code hex.
5. **Walk through section 13** before declaring done. Most "this feels off" moments are violations of that list.
6. **Show the work inside an Android frame** at 412×892 so scale and density are honest.
7. **Surface flagged substitutions** (brand mark, anything new) to the user explicitly.

---

## 16. Open questions / known substitutions

## Resolved in V1 (May 2026)

The following open questions were resolved during the V1 design pass. See `designfundamentals/18-DecisionsV1.md` for the full rationale.

- **Share-extension UI.** ✅ Resolved as the V2.5 capture pattern — bottom sheet over the source app with preview, promoted AI suggestion row, and collapsed note affordance. See `14-UXFlows.md § F-001` and Decision 07.
- **Open original handoff.** ✅ Resolved as the Smart Launcher — native-app primary CTA, "Mimo thinks · other ways" alternatives, recipient suggestion. See `14-UXFlows.md § F-008` and Decision 08.
- **Save to collection from a memory.** ✅ Resolved as the canonical picker — pre-seeded suggestions, type-to-create, inherited covers, multi-membership. See `14-UXFlows.md § F-009` and Decisions 01, 03, 04, 05, 06.
- **System understanding as a verb.** ✅ The category chip on Memory Detail is now tappable — one tap saves into a same-named collection. See Decision 02.

## Still open

- **Brand mark.** Wordmark + monogram in `assets/` were designed from scratch. Acceptable as placeholder per user; should be reviewed if brand team has an existing mark.
- **Notifications.** Source docs don't specify if/how Mimo notifies users. The bell icon in the Home app bar is a placeholder.
- **Onboarding.** No formal first-run flow specified — the Empty Home state handles UC-015 (first save) at a minimum. Full onboarding is open.
- **Capture cancellation semantics.** Cancel currently discards. Save Before Organize argues for save-anyway. See OQ-01.
- **Metadata fetch failures.** Currently silent fallback. See OQ-02.
- **Return path after share-extension save.** Currently returns the user to the source app. See OQ-03.
- **Send-to-[name] production data source.** Currently parsed from the human-context note. Production should pull from OS recents or Mimo's contact graph. See OQ-04.
- **Non-URL share payloads.** Plain text, images, PDFs — not yet specified. See OQ-05.
- **Offline capture.** Queueing behavior not yet defined. See OQ-06.
- **Multiple URLs in one share.** Not yet specified. See OQ-07.

---

_This document is the contract. If a design conflicts with it, fix the design — or, if the conflict is intentional, update this document first and explain why._
