# Mimo Mobile App — UI Kit

A click-through recreation of the Mimo mobile app, built directly against the spec in `designfundamentals/17-DesignSystemGuide.md`. This kit is mobile-first and frames the app inside an Android device shell — but every screen and component would translate to iOS with no design changes (Mimo uses a calm, OS-agnostic visual language by design).

## What's here

| File | What it is |
|---|---|
| `index.html` | The entry point. Open this to see the kit. |
| `app.jsx` | Top-level shell — bottom nav, stack navigation, save-sheet wiring. |
| `screens.jsx` | The six primary screens. |
| `components.jsx` | Mimo primitives — Button, AppBar, BottomNav, SearchField, MemoryCard, ContextBlocks, RelatedCard, FilterChip, SaveSheet. |
| `icons.jsx` | Lucide icons inlined as React components. |
| `data.jsx` | Mock memories + collections (Kyoto trip, kettlebell workout, Aesop bottle, etc.). |
| `android-frame.jsx` | The starter Android device chrome (status bar, gesture nav). |

## Screens covered (all seven from the spec)

1. **Home** — search/paste field + Recent Activity + Related Memories. Includes the empty-state variant.
2. **Search** — full-screen retrieval surface with suggestion chips, results, no-results recovery, and URL-detected → save flow.
3. **Memory Detail** — the full Recognition → Context → Understanding → Relationships → Actions stack on a single scrolling page (no tabs, as the spec requires).
4. **Library** — grid (default) + list view, filter chips, and Collections row at the bottom.
5. **Collection Detail** — focused grid for a single collection.
6. **Profile** — grouped settings: Preferences, Permissions, Integrations, Account.
7. **Save Confirmation Sheet** — bottom-sheet modal with View memory / Undo.

## Click-through paths to try

- **Search:** tap the search field on Home → type _"kyoto"_ → tap a result → land on Memory Detail.
- **Paste link:** in Search, type _"https://..."_ → the field turns into a save action → tap **Save link** → the save sheet appears.
- **Browse:** tap **Library** in the bottom nav → switch between grid and list via the trailing icon → tap a Collection card.
- **Relationships:** from any Memory Detail, tap a card under _Related memories_ to jump between connected memories.

## Components covered

- **Button** — primary, secondary, ghost, accent, danger; md + sm sizes.
- **AppBar** — sentence-case title, leading + trailing icon slots, transparent variant for full-bleed hero use.
- **BottomNav** — three destinations, label always visible, active state via weight + color (never just color).
- **SearchField** — default, focused (focus ring in accent), and URL-detected (cool slate tint, save action revealed). The same component is the Home capture entry and the Search screen's input.
- **Chip** — neutral, human-context, system-context, accent, success.
- **FilterChip** — segmented filter chip with active state.
- **MemoryCard** — standard (with thumbnail, title, source, context badges), video (play overlay), compact (list-row), fallback (no thumbnail).
- **HumanContextBlock / SystemContextBlock** — always visually distinct, per the hard rule in `11-MemoryCardArchitecture.md`.
- **RelatedCard** — thumb + title + relationship explanation. Explanation is required.
- **SaveSheet** — bottom sheet, success indicator, preview, View / Undo.
- **EmptyState** — typographic, no illustration (calm, content-first).

## Design rules enforced

These are not optional — they're contracts from the source docs:

- **Single font family** (Inter). Hierarchy from size + weight + tracking.
- **Recognition → Context → Understanding → Relationships → Actions** as the visual order on every multi-section screen.
- **Sentence case** everywhere. _"Save link"_, never _"Save Link"_.
- **No emoji.** Lucide icons only, 1.5px stroke, outline.
- **Calm motion:** durations under 280ms, cubic-bezier(0.2,0,0.2,1), no bounces, no scale-up.
- **Single-scroll Memory Detail.** No tabs. No section navigation.
- **Empty sections are hidden, not shown empty.** The Memory Detail screen skips any context block whose memory has none.
- **Every Related card explains the relationship.**
- **Touch targets are 44px floor.**

## What is intentionally minimal

This kit is a **visual + interaction recreation** — not a production codebase. Real wiring is faked:

- Search is a substring match against the mock data array, not a real retrieval engine.
- Save actions surface the bottom sheet but don't actually save.
- Profile rows are not wired to settings screens.
- There is no auth, no onboarding flow, no share-extension capture surface (a native concern).

## Open questions to validate with the team

- The **brand wordmark and monogram** in `assets/` are designed, not given — please review.
- **Lucide** was chosen as the icon system because nothing was specified — confirm or substitute.
- The accent color (warm umber `#8B5A3C`) and human/system context tints were derived from the stated tone — they need a sign-off from whoever owns brand.
- The Notification icon in the Home app bar is a placeholder concept — the spec doesn't define notifications. Hide it if Mimo intentionally has none.
