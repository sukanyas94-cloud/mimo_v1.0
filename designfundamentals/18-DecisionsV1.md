# 18-DecisionsV1.md

Version: 1.0

Status: Frozen

Date: May 2026

---

# Purpose

This document records the product and design decisions made during the V1 design pass.

It captures:

- decisions taken
- rationale behind each decision
- the principle each decision is grounded in
- the questions that remain open

Future contributors should read this document before re-opening any decision listed here.

If a decision needs to change, this document should be updated first.

---

# Scope of V1

This pass closed four product flows previously left open:

- F-001 Share Extension Save
- F-008 Open Original Source
- F-009 Create Collection From Memory Card
- The capture / handoff workflow as a paired experience

It also introduced one new product principle.

---

# New Principle

## Balanced Automation

Mimo proposes.

The user picks.

Mimo should make the obvious call so the user does not have to think — but every automated choice should be overridable in the same surface, with no penalty for letting Mimo decide.

This principle extends AI Assists.

AI Assists prevents automation from owning decisions.

Balanced Automation defines what Mimo should automate by default, and how the user can reclaim that choice.

---

## Implications

Prefer:

System proposes

↓

User confirms or overrides

↓

User feels supported

Over:

System decides silently

or

System asks before every action

---

# Decision 01 — Collection memberships are multi-valued

A memory may belong to any number of collections at once.

---

## Reasoning

Memories often hold meaning across multiple contexts.

A travel article may belong to "Japan trip" and "Travel".

A gift idea may belong to "Maya gifts" and "To buy".

Forcing single-membership erodes natural retrieval paths.

---

## Implications

Memberships appear as chips on the Recognition layer of Memory Detail.

Collection counts update in both directions when memberships change.

Removal happens by re-opening the picker and untoggling.

---

## Grounded in

Principle 05 · Relationships Create Findability

Principle 06 · Organization Is Optional

---

# Decision 02 — System Understanding is a verb

The system-inferred category chip on Memory Detail is tappable.

Tap saves the memory into a same-named collection — creating it if needed.

---

## Reasoning

The category is already Mimo's interpretation of the memory.

Surfacing it as a label and then asking the user to create a collection with the same name elsewhere is redundant ceremony.

A single tap converts the inference into an organizational outcome.

---

## Visual treatment

Chip carries a circular "+" affordance and uses the system tint.

After action: chip dims and shows a check; the corresponding collection appears as a membership chip beside it.

---

## Grounded in

Balanced Automation

Principle 07 · Meaning Should Emerge

Principle 17 · Reduce Cognitive Load

---

# Decision 03 — Pre-seeded suggestions in the collection picker

The "Save to collection" sheet leads with three suggested collection names inferred from the memory's system understanding.

Order:

Recommended (specific) → Broader (category) → Tighter (moment)

---

## Reasoning

Empty pickers feel hostile.

Asking the user to invent a name in a moment of capture introduces unnecessary friction.

Suggestions teach the user what collections can hold without dictating naming.

---

## Behavior

Suggestions appear when the picker opens and when the search field is empty.

Suggestions disappear when the user types — the typed query takes precedence.

Suggestions adapt to the memory's category map (Travel reference, Workout to try, Future purchase, Reading list).

---

## Grounded in

Balanced Automation

Principle 03 · Recognition Before Recall

---

# Decision 04 — Type-to-create

Any unmatched query in the collection picker becomes a Create row.

No separate "+ New" modal.

No required description.

---

## Reasoning

Find and Create share a single intent: name a destination.

The user already knows the name they want.

A separate "create" flow doubles the steps.

---

## Behavior

The first row of the picker becomes "Create '[typed name]'" when no match exists.

Enter or tap commits.

---

## Grounded in

Principle 02 · Save Before Organize

design.md § 13 · Search and capture share one entry point

---

# Decision 05 — Inherited covers

A new collection automatically takes the thumbnail of the memory that spawned it.

---

## Reasoning

A collection cover is itself a recognition cue.

Asking the user to pick one breaks the capture flow.

The seeded memory's image is almost always the right answer — and is always overrideable later.

---

## Behavior

Collections inherit the source memory's image at creation time.

A "New" badge appears on collection cards for newly inherited covers.

Cover can be replaced from Collection Detail.

---

## Grounded in

Balanced Automation

Principle 03 · Recognition Before Recall

---

# Decision 06 — Save to collection is always visible

A full-width "Save to collection" row sits beneath the primary handoff CTA on Memory Detail at all times.

Mimo never demotes or hides this row based on usage.

---

## Reasoning

Demoting the action would punish users who never use collections — but it would also hide the option from the users who occasionally need it.

Calm software does not pressure organization, but it should not gate organization either.

---

## Grounded in

Principle 06 · Organization Is Optional

Principle 10 · Trust Over Engagement

---

# Decision 07 — V2.5 capture pattern (share extension)

The Mimo share-extension receiver is a bottom sheet over the source app.

Structure:

Monogram and title

↓

Preview card (thumbnail + title + source)

↓

Promoted AI suggestion row (one-tap save to inferred collection)

↓

Collapsed note affordance ("Add a note · Optional")

↓

Cancel / Save

---

## Reasoning

Three forces resolved as one design:

A bottom sheet keeps the user inside the source app rather than ejecting them into Mimo.

A promoted AI row gives the user a one-tap path to organized capture without forcing it.

A collapsed note input preserves capture speed while leaving space for the rare case where the user wants to add context immediately.

---

## Cancellation semantics

Cancel discards the capture in this version.

(Open question — Decision pending.)

---

## Grounded in

Principle 02 · Save Before Organize

Principle 18 · Calm Software Wins

Balanced Automation

---

# Decision 08 — Smart Launcher on Memory Detail

The "Open original" affordance becomes a launcher group:

Primary CTA — Open in [native app] when the source matches a known app

↓

Alternatives — Mimo thinks · other ways

- Open in browser
- Send to [recipient] (suggested · recipient parsed from human context)
- Copy link

---

## Reasoning

A single "Open" button hides the right answer.

Different memory types want different next actions.

A travel post wants Instagram.

A recipe wants browser.

A gift idea wants WhatsApp to Maya.

A surface that defaults to the right answer — while keeping the others adjacent — reduces friction at retrieval, the moment where Mimo creates value.

---

## Behavior

Source string is matched against a known-app list (Instagram, YouTube, TikTok, Pinterest, Reddit, WhatsApp).

Unknown sources fall back to "Open original" + browser path.

Recipient parsing scans human context for a small set of proper-noun matches.

Recommended alternative is highlighted with the accent tint.

---

## Grounded in

Principle 01 · Retrieval First

Principle 17 · Reduce Cognitive Load

Balanced Automation

---

# Decision 09 — Real imagery + brand application

Memory thumbnails carry real photographs (with gradient fallback on failure).

The wordmark + monogram appear together on the Home app bar.

Both adapt automatically to the warm-dark theme via currentColor.

---

## Reasoning

Placeholder colors made Memory Cards look generic.

Real imagery is the recognition layer's primary signal.

Brand presence on Home grounds the product without intruding on other screens.

---

# Decision 10 — Bottom navigation pinning

The bottom navigation is pinned to the device frame at all times.

It does not scroll with content.

---

## Reasoning

A scrolling bottom nav defeats the purpose of a fixed primary navigation.

Pinning preserves orientation during long scrolls — Memory Detail is single-scroll and content-heavy.

---

# Decision 11 — Delete affordance treatment

The "Delete memory" action on Memory Detail is centered and uses the ghost-danger variant.

---

## Reasoning

Delete is a destructive, low-frequency action.

Left-aligning it next to other primary affordances overweights it.

Centering signals deliberate placement without prominence.

---

## Grounded in

Principle 18 · Calm Software Wins

---

# Open Questions

These questions surfaced during the V1 pass.

They are not blocking and should be resolved before production.

---

## OQ-01 — Capture cancellation semantics

Should Cancel on the capture sheet discard the memory, or save it anyway and let the user edit later?

Save Before Organize argues for the latter.

User flow analytics will resolve this best.

---

## OQ-02 — Metadata fetch failures

If Mimo cannot reach the source for metadata, should the capture preview show:

(a) URL-only fallback with an "Add title" affordance

(b) Save anyway with a placeholder title (editable later)

(c) Block save with a retry option

Current implementation: silent fallback to (b).

---

## OQ-03 — Return path after share-extension save

After save, should the user:

(a) Return to the source app instantly

(b) Briefly land on Memory Detail in Mimo

(c) See a persistent overlay that lets them pick

(a) is the most calm; (b) gives the strongest confirmation; (c) is the most flexible.

---

## OQ-04 — Send-to-[name] production data source

In the prototype, the recipient is parsed from the human-context note.

In production, this should likely come from:

(a) OS recent recipients

(b) Mimo contact graph

(c) Both, in priority order

---

## OQ-05 — Non-URL share payloads

What should Mimo do with shares that are not URLs?

Plain text snippets, images, PDFs.

Accept, convert to a Memory Card, or reject.

---

## OQ-06 — Offline capture

If the device is offline at capture time, should Mimo:

(a) Queue the URL and save when back online

(b) Refuse with feedback

(c) Save with a "metadata pending" state

---

## OQ-07 — Multiple URLs in one share

Rare on Android, but possible.

Single Memory Card, multiple Memory Cards, or batch sheet.

---

## OQ-08 — Demoting the system-understanding chip

After a memory is saved into its system-suggested collection, the chip dims and shows a check.

Should it disappear after that, or remain visible as a category label?

Current behavior: remain visible.

---

# Decisions reaffirmed (not re-opened)

These were considered and explicitly held to the existing spec:

- Three bottom-nav tabs (Home · Library · Profile)
- Memory Detail is single-scroll (no tabs)
- Recognition → Context → Understanding → Relationships → Actions ordering
- Sentence case across all UI copy
- Inter as the single font family
- Lucide icons, 1.5px stroke
- No emoji in product UI
- 44px minimum touch target
- Calm motion (≤ 280ms, cubic-bezier(0.2,0,0.2,1), no bounces)

---

# Closing Principle

Every decision in this document is grounded in the foundational principles of Mimo.

When a decision conflicts with a principle, the principle wins — and the decision should be revisited.

When a principle conflicts with a decision, the principle still wins — and the decision should be revisited.
