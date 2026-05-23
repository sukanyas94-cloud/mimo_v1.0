# 02-Principles.md

Version: 1.0
Status: Frozen Candidate

---

# Purpose

This document defines the foundational principles that guide Mimo.

These principles act as decision filters whenever:

- product features are proposed
- UX solutions are evaluated
- tradeoffs are considered
- AI behaviors are introduced
- future roadmap decisions are made

When multiple valid solutions exist, the option most aligned with these principles should generally be preferred.

These principles are intended to remain stable over time, even as individual features evolve.

---

# Principle 01 — Retrieval First

Mimo optimizes for retrieval rather than storage.

Saving information creates potential value.

Retrieving information creates realized value.

Every major decision should strengthen a user's ability to recover information when it becomes relevant.

---

## Implications

Prefer:

- retrieval improvements
- retrieval confidence
- retrieval speed
- retrieval accuracy

Over:

- organizational complexity
- storage-centric features
- management workflows

---

# Principle 02 — Save Before Organize

Capture should never be blocked by organization.

Users often discover information in moments of movement, distraction or urgency.

The system should preserve information immediately.

Organization may happen later.

---

## Implications

Prefer:

Save

↓

Preserve

↓

Organize Later

Over:

Save

↓

Categorize

↓

Organize

↓

Preserve

---

# Principle 03 — Recognition Before Recall

People recognize information more effectively than they recall it.

Users frequently remember:

- fragments
- visuals
- people
- places
- situations

Rather than exact titles or locations.

The product should prioritize recognition cues wherever possible.

---

## Examples

Prefer:

- thumbnails
- contextual cues
- related memories
- visual associations

Over:

- exact title matching
- precise folder paths
- rigid retrieval requirements

---

# Principle 04 — Context Preserves Meaning

Information loses value when context disappears.

The system should preserve clues that help users understand:

- why something mattered
- who shared it
- when it became relevant
- what problem it was connected to

Context often provides more value than metadata.

---

# Principle 05 — Relationships Create Findability

Information becomes easier to retrieve when connected to other information.

Users frequently remember something adjacent to the thing they need.

Relationships create alternative retrieval paths.

---

## Examples

Connections may emerge through:

- people
- locations
- activities
- topics
- recommendations
- shared intent

---

# Principle 06 — Organization Is Optional

Users should not be required to maintain a system.

The product should continue delivering value even when users never create:

- folders
- collections
- categories
- structures

Organization may accelerate retrieval.

It should not be required for retrieval.

---

# Principle 07 — Meaning Should Emerge

Organization should emerge from meaning.

Not from administrative effort.

The system should help users discover patterns and relationships naturally.

Avoid forcing structure before value exists.

---

# Principle 08 — AI Assists, Never Replaces Intent

AI exists to strengthen retrieval.

AI does not own decisions.

AI should support user goals by:

- enriching context
- discovering relationships
- improving retrieval
- supporting rediscovery

AI should never override user intent.

---

# Principle 08B — Balanced Automation

Mimo proposes.

The user picks.

Mimo should make the obvious call so the user does not have to think — but every automated choice should be overridable in the same surface, with no penalty for letting Mimo decide.

This principle extends AI Assists.

AI Assists prevents automation from owning decisions.

Balanced Automation defines what Mimo should automate by default, and how the user can reclaim that choice.

---

## Prefer

System proposes

↓

User confirms or overrides

---

## Over

System decides silently

or

System asks before every action

---

## Examples in V1

- The system-understanding chip on Memory Detail is tappable — one tap saves into a same-named collection.
- The "Save to collection" picker leads with three suggestions from the memory's category.
- A new collection inherits the spawning memory's cover automatically.
- The Smart Launcher highlights the most likely handoff destination.

In every case, the user can override the automation in the same surface — no extra steps, no warning prompts.

---

# Principle 09 — Explainability Builds Trust

Users should understand why the system produced an outcome.

Whenever possible:

- relationships should be explained
- rediscovery should be explained
- AI inferences should be understandable

Invisible reasoning reduces trust.

Visible reasoning increases trust.

---

# Principle 10 — Trust Over Engagement

The product should optimize for confidence rather than attention.

Success is not measured through:

- time spent
- session length
- engagement loops
- habitual checking

Success is measured through retrieval confidence.

Users should trust the system even when they spend very little time inside it.

---

# Principle 11 — Relevance Over Activity

Useful resurfacing is more valuable than frequent resurfacing.

Information should appear when relevance exists.

Not because the system needs attention.

---

## Prefer

Relevant Rediscovery

Over

Constant Rediscovery

---

# Principle 12 — Progressive Disclosure

Complexity should appear only when needed.

The simplest useful experience should appear first.

Additional functionality should be revealed gradually.

Users should never feel overwhelmed by capability.

---

## Examples

Show:

- retrieval
- recognition
- context

First

Reveal:

- collections
- advanced organization
- secondary actions

Only when useful.

---

# Principle 13 — Source Agnostic Capture

Mimo should not depend on specific platforms.

Any shareable URL should be preservable.

The system should remain compatible with future sources without requiring architectural changes.

---

## Examples

- Instagram
- Pinterest
- Reddit
- WhatsApp
- YouTube
- Browsers
- Blogs
- Marketplaces

All represent discovery environments.

None should receive privileged treatment.

---

# Principle 14 — Human Memory Is Imperfect

The system should accommodate:

- incomplete recall
- fuzzy memory
- fragmented information
- forgotten details

Rather than expecting perfect behavior.

The architecture should adapt to humans.

Humans should not adapt to the architecture.

---

# Principle 15 — Retrieval Should Feel Effortless

Users should not need to remember:

- exact titles
- exact URLs
- storage locations
- organizational structures

The retrieval experience should minimize effort while maximizing confidence.

---

# Principle 16 — Preserve Future Value

People save information because they believe it may matter later.

The system should focus on preserving future usefulness rather than maximizing present interaction.

The goal is not content consumption.

The goal is future utility.

---

# Principle 17 — Reduce Cognitive Load

Every interaction should reduce mental effort.

The product should help users think less about:

- where something was stored
- how something was organized
- what category it belongs to

And spend more time benefiting from information they already discovered.

---

# Principle 18 — Calm Software Wins

Mimo should feel calm.

Not demanding.

Not noisy.

Not urgent.

The system should quietly support users without competing for attention.

The ideal experience is one where users trust the product deeply without feeling compelled to constantly interact with it.

---

# Closing Principle

Mimo exists to help people reconnect with information that once felt valuable.

Every decision should strengthen preservation, retrieval, understanding or action.

If a feature does not improve one of those outcomes, it should be questioned before inclusion.