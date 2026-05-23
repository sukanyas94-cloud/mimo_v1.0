# Mimo Mobile App — UI Kit

A click-through recreation of the Mimo mobile app, built directly against the spec in `designfundamentals/17-DesignSystemGuide.md`. This kit is mobile-first and frames the app inside an Android device shell — but every screen and component would translate to iOS with no design changes (Mimo uses a calm, OS-agnostic visual language by design).

## What's here

| File | What it is |
|---|---|
| `index.html` | The entry point. Open this to see the kit. |
| `app.jsx` | Top-level shell — bottom nav, stack navigation, save-sheet wiring. |
| `screens.jsx` | The six primary screens. |
| `components.jsx` | Mimo primitives — Button, AppBar, BottomNav, SearchField, MemoryCard, ContextBlocks, RelatedCard, FilterChip, SaveSheet (V2.5 capture), CollectionPickerSheet, SystemActionChip, MembershipChip, Toast. |
| `icons.jsx` | Lucide icons inlined as React components. |
| `data.jsx` | Mock memories + collections (Kyoto trip, kettlebell workout, Aesop bottle, etc.). |
| `android-frame.jsx` | The starter Android device chrome (status bar, gesture nav). |

## Screens covered (all seven from the spec)

1. **Home** — search/paste field + Recent Activity + Related Memories. Includes the empty-state variant. Mimo wordmark + monogram appear together in the app bar.
2. **Search** — full-screen retrieval surface with suggestion chips, results, no-results recovery, and URL-detected → capture flow.
3. **Memory Detail** — the full Recognition → Context → Understanding → Relationships → Actions stack on a single scrolling page (no tabs, as the spec requires). System-understanding chip is tappable. Smart Launcher replaces the plain Open Original button. Save-to-collection sits as a full-width row beneath the primary CTA.
4. **Library** — grid (default) + list view, filter chips, and Collections row at the bottom. Collection cards carry inherited covers.
5. **Collection Detail** — focused grid for a single collection. Filters memories by membership.
6. **Profile** — grouped settings: Preferences, Permissions, Integrations, Account.
7. **Save Confirmation Sheet** — V2.5 capture sheet (preview · AI suggestion row · collapsed note affordance · Cancel/Save).

## Click-through paths to try

- **Search:** tap the search field on Home → type _"kyoto"_ → tap a result → land on Memory Detail.
- **Paste link:** in Search, type _"https://..."_ → the field turns into a save action → tap **Save link** → the V2.5 capture sheet appears. Tap the AI suggestion row to save into a category-named collection, or tap **Add a note** → **Save**.
- **One-tap organize:** open any Memory Detail → tap the system-understanding chip ("Travel reference", "Future purchase", etc.) → a same-named collection is created and the memory joins it.
- **Picker:** open any Memory Detail → tap **Save to collection** → pick a pre-seeded suggestion, type a new name, or pick an existing collection.
- **Smart Launcher:** open a Memory Detail with a known source (Instagram, YouTube…) → the primary CTA reads "Open in [native app]" → alternatives appear beneath, including a Send-to-[name] suggestion parsed from the human context.
- **Browse:** tap **Library** in the bottom nav → switch between grid and list via the trailing icon → tap a Collection card.
- **Relationships:** from any Memory Detail, tap a card under _Related memories_ to jump between connected memories.

## Components covered

- **Button** — primary, secondary, ghost, accent, danger; md + sm sizes.
- **AppBar** — sentence-case title (or wordmark on Home), leading + trailing icon slots, transparent variant for full-bleed hero use.
- **BottomNav** — three destinations, label always visible, active state via weight + color (never just color). Pinned to the device frame; does not scroll with content.
- **SearchField** — default, focused (focus ring in accent), and URL-detected (cool slate tint, save action revealed). The same component is the Home capture entry and the Search screen's input.
- **Chip** — neutral, human-context, system-context, accent, success.
- **SystemActionChip** — the system-understanding label is a tappable verb chip. One tap saves the memory into a same-named collection.
- **MembershipChip** — collection memberships persist on the Recognition layer of Memory Detail.
- **FilterChip** — segmented filter chip with active state.
- **MemoryCard** — standard (with thumbnail, title, source, context badges), video (play overlay), compact (list-row), fallback (no thumbnail). Thumbnails render real imagery with gradient fallback.
- **HumanContextBlock / SystemContextBlock** — always visually distinct, per the hard rule in `11-MemoryCardArchitecture.md`.
- **RelatedCard** — thumb + title + relationship explanation. Explanation is required.
- **SaveSheet** — V2.5 capture sheet (preview · promoted AI suggestion row · collapsed note affordance · Cancel / Save).
- **CollectionPickerSheet** — pre-seeded suggestions · type-to-create · existing collections filtered by query.
- **SmartLauncher** — native-first primary CTA on Memory Detail with "Mimo thinks · other ways" alternatives.
- **Toast** — transient confirmation with optional View action; auto-dismisses after ~4s.
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
- Smart-launcher destinations don't actually open external apps.
- Library multi-select → Create collection commits aren't fully wired.
- Profile rows are not wired to settings screens.
- There is no auth, no onboarding flow.
- The native Android share extension cannot be simulated in a browser-only prototype — the in-app paste-URL flow stands in for that moment.

## Open questions to validate with the team

- The **brand wordmark and monogram** in `assets/` are designed, not given — please review.
- **Lucide** was chosen as the icon system because nothing was specified — confirm or substitute.
- The accent color (warm umber `#8B5A3C`) and human/system context tints were derived from the stated tone — they need a sign-off from whoever owns brand.
- The Notification icon in the Home app bar is a placeholder concept — the spec doesn't define notifications. Hide it if Mimo intentionally has none.
- Eight V1-specific open questions live in `designfundamentals/18-DecisionsV1.md § Open Questions` — cancellation semantics, metadata failures, return path, recipient data source, non-URL shares, offline capture, multi-URL shares, system chip persistence.
