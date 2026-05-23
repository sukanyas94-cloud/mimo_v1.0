# Mimo v1 · Live App

Self-contained click-through prototype of the Mimo v1 Android app.

Open `index.html` in a browser. The whole experience runs locally — no build step, no server.

---

## What this contains

| File | Purpose | Status |
|---|---|---|
| `index.html` | Entry point — loads React, Babel, and the kit files in order | Self-contained |
| `colors_and_type.css` | Design tokens (copy of `Mimo_Design_System/colors_and_type.css`) | Mirrored from design system |
| `android-frame.jsx` | Android device shell (status bar, gesture nav, keyboard) | Unchanged from kit |
| `icons.jsx` | Lucide icon set, inlined as React components | Unchanged from kit |
| `components.jsx` | UI primitives — Button, MemoryCard, Chips, Sheets, Toast, etc. | **Modified · see below** |
| `screens.jsx` | Home / Search / Memory Detail / Library / Collection / Profile | **Modified · see below** |
| `data.jsx` | Mock memories, collections, helper functions | **Modified · see below** |
| `app.jsx` | Stack navigation, theme, sheet wiring | **Modified · see below** |

---

## What's new in v1 (vs. the original UI kit)

This iteration locked four product flows that the source docs had left open. Each one is now wired through the live prototype.

### 1. Save to collection · canonical flow (F-009)

Resolves the largest gap in `14-UXFlows.md` § F-009. Implements the "balanced automation" doctrine.

- **System understanding is a verb.** The category chip on Memory Detail ("Travel reference", "Future purchase", "Reading list") is now tappable — one tap saves the memory into a same-named collection, creating it if needed.
- **Picker sheet leads with suggestions.** Pre-seeded recommended/broader/tighter names inferred from the memory's category. Type-to-create — any unmatched query becomes a `Create "[name]"` row.
- **Memberships persist** as recognition-layer chips on Memory Detail; tap to open the collection.
- **Inherited covers** — new collections automatically take the spawning memory's thumbnail.
- **Multi-membership** is supported; re-open the picker to remove.

Components: `CollectionPickerSheet`, `SystemActionChip`, `MembershipChip`, `Toast` (all in `components.jsx`).

### 2. Capture flow · V2.5 hybrid (F-001 / F-002)

Resolves the docs' explicitly-deferred *"Share-extension UI is open territory"* note (`design.md § 16`).

- Bottom sheet rises over the source app (or in-app paste flow) with: monogram + "Save to Mimo" header → preview card → **promoted AI-suggestion row** ("Save to [category] ↵") → **collapsed "Add a note · Optional"** affordance → Cancel/Save.
- The note field expands inline into the cream "You noted" block on tap — no wasted vertical space for the 90% of users who won't write one.
- After Save, a transient toast surfaces a `View` action that opens Memory Detail.

Component: `SaveSheet` (rewritten in `components.jsx`).

### 3. Handoff flow · smart launcher (F-008)

Replaces the kit's plain "Open original" button with a source-aware launcher.

- Primary CTA reads `Open in [native app]` when the source matches a known app (Instagram, YouTube, TikTok, Pinterest, Reddit, WhatsApp). Falls back to `Open original` for unknown sources.
- Below: `Mimo thinks · other ways` — open in browser, **Send to [name]** (parsed from human context — looks for proper-noun matches in your note), Copy link.
- The recommended path is highlighted with the accent token.
- Source-unavailable memories continue to show the disabled fallback per the original F-008 failure path.

Components: `SmartLauncher`, `SmartRow` (in `screens.jsx`); helpers `getNativeApp`, `getRecipient` (in `data.jsx`).

### 4. Real imagery + brand application

- Memory thumbnails now use real photographs (Unsplash); the gradient fallback covers failures.
- Memory Detail and Library collection cards both render the real image.
- The Mimo wordmark + monogram appear in the Home app bar; both use `currentColor` against `var(--accent)` so they adapt to the warm-dark theme automatically.

Components: updated `Thumb`, new `Wordmark`/`Monogram` (in `screens.jsx`).

---

## Decisions baked into the build

These were debated during the v1 iteration. Recording them here so the repo carries the rationale forward.

| Decision | Choice | Why |
|---|---|---|
| Multi-membership | Yes — a memory can live in any number of collections. | Common pattern; nothing in the docs forbids it. |
| Removal from a collection | Re-open the picker and untoggle. | Single surface, low-cost. |
| Empty-account picker | Pre-seeded suggestions (1c). | Mimo proposes the first three names rather than leaving the user staring at an empty list. |
| System chip as a verb | Yes (2a). | One-tap save into a category-named collection — the biggest "balanced automation" win. |
| Save-to-collection always visible | Yes (3a). | Available, never demanded; never demoted. |
| New collection naming | Just the name + inherited cover (4c). | No required description, no color picker — covers come from the memory that spawned it. |
| Capture pattern | V2.5 hybrid — V2 sheet + V3 AI prominence + V3 handoff. | Keeps the user in their source-app flow, gives space for details, surfaces inference without forcing it. |
| Voice & content rules | Sentence case, no emoji, calm, no urgency. | Per `Mimo_Design_System/design.md § 4`. |

---

## Still owed (open questions)

These came up but weren't resolved in this iteration. They block nothing live, but each is worth deciding before production:

1. **Return path after Save** from the share-extension — back to source app instantly, or briefly in-Mimo to confirm?
2. **Metadata fetch failures** — URL-only preview with an "Add title" affordance, or save anyway and edit later?
3. **Cancel on the capture sheet** — discard, or save-anyway-and-edit-later? Save-First would argue the latter.
4. **`Send to [name]` data source in production** — currently parsed from the human-context note via a small known-name list; in production this should pull from the OS recent recipients or Mimo's own contacts.
5. **Non-URL shares** (plain text, image, PDF) — accept, convert, or reject?
6. **Offline at capture** — queue the URL locally?
7. **Multiple URLs in one share** — single memory, multi-memory, or batch sheet?

---

## How to integrate into `mimo_v1.0`

Two reasonable paths:

**(a) Replace the existing kit in-place.** Copy these files into `Mimo_Design_System/ui_kits/mobile_app/`, replacing the originals. The kit's existing `index.html` at that path stays as the single entry point. Update its `<link rel="stylesheet">` path if needed — it currently points two levels up at `../../colors_and_type.css`.

**(b) Land as a sibling folder.** Drop this entire folder into the repo as e.g. `Mimo_App_v1/` next to `Mimo_Design_System/`. The `index.html` is self-contained and references local files only.

I'd recommend **(a)** if this is officially v1, **(b)** if you want the original kit preserved for diffing.

---

## Out of scope (deliberately)

These were not implemented and are placeholders only:

- Smart-launcher destination buttons don't actually open external apps.
- Library multi-select → Create collection commits aren't fully wired.
- Profile settings are static.
- The notifications bell is decorative.
- The actual Android share extension cannot be simulated in a browser-only prototype — the in-app paste-URL flow stands in for that moment.
