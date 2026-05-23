# 03-Patterns.md

Version: 1.0
Status: Frozen Candidate

---

# Purpose

This document captures the recurring human, information and behavioral patterns that Mimo is designed around.

Patterns describe observable realities.

They are not features.

They are not solutions.

They represent recurring behaviors that influence product decisions.

Understanding these patterns helps explain:

- why Mimo exists
- why certain decisions were made
- why certain alternatives were rejected
- how future features should be evaluated

Patterns act as reusable design and product lenses.

Whenever a new feature is proposed, contributors should ask:

Which pattern does this support?

And:

Which pattern does this violate?

---

# Pattern 01 — Discovery Happens Unexpectedly

People rarely sit down with the intention of finding something valuable.

Useful information often appears unexpectedly.

Examples:

- Instagram reels
- Reddit comments
- YouTube videos
- WhatsApp messages
- marketplace listings
- blog posts
- articles
- recommendations from friends

Discovery is frequently accidental.

---

## Design Implication

Capture must be lightweight.

Users should be able to preserve information immediately without interrupting their current activity.

---

# Pattern 02 — Save Now, Understand Later

Users often save information before fully understanding whether it will be useful.

Examples:

- interesting article
- travel destination
- recipe
- product recommendation
- workout routine

At the moment of saving:

Future value is uncertain.

Users preserve possibility.

---

## Design Implication

Capture should not require commitment.

The system should support saving first and understanding later.

---

# Pattern 03 — Save And Forget

Most saved information is forgotten shortly after capture.

The information still exists.

The memory of saving it fades.

---

## Example

User saves:

- restaurant
- hotel
- article

Months later:

The user has no conscious memory of saving it.

---

## Design Implication

The system should assume forgetting is normal.

Retrieval should not depend on remembering storage details.

---

# Pattern 04 — Fragment Recall

People rarely remember complete information.

Instead they remember fragments.

Examples:

- green dress
- AI article
- thing Rahul recommended
- hotel in Kyoto
- leg workout reel

The remembered fragment is often sufficient to trigger recognition.

---

## Design Implication

Search and retrieval should support incomplete memory.

Exact matching should not be required.

---

# Pattern 05 — Recognition Beats Recall

People struggle to recall information precisely.

They recognize it immediately when presented with it.

Examples:

- image thumbnails
- creator names
- locations
- contextual clues

Recognition is faster and more reliable than recall.

---

## Design Implication

Visual recognition should be prioritized throughout the product.

Thumbnails and contextual cues often matter more than metadata.

---

# Pattern 06 — Context Preserves Meaning

Information loses value when context disappears.

People often remember:

- who shared it
- why it mattered
- what problem it solved
- when they discovered it

More readily than technical details.

---

## Design Implication

Context should be preserved whenever possible.

Meaning often matters more than metadata.

---

# Pattern 07 — Relationships Aid Retrieval

People frequently remember information adjacent to what they need.

Example:

Remembers:

Japan Rail Pass

Needs:

Kyoto Hotel

The relationship provides a retrieval path.

---

## Design Implication

Related information should support retrieval.

Relationships should be treated as first-class retrieval signals.

---

# Pattern 08 — Future Self Preservation

Users often save information for a future version of themselves.

Examples:

- future purchase
- future trip
- future project
- future workout
- future learning

The value may not exist today.

The user expects it to exist later.

---

## Design Implication

The system should optimize for future usefulness rather than immediate consumption.

---

# Pattern 09 — Information Gains Gravity

Information becomes valuable when life circumstances create relevance.

---

## Example

User saves:

- train pass
- hotel
- restaurant

Months later:

A Japan trip becomes real.

The information gains relevance.

Value emerges.

---

## Design Implication

The system should optimize for future retrieval rather than ongoing engagement.

---

# Pattern 10 — Rediscovery Creates Value

People benefit when forgotten information reappears at the right moment.

Examples:

- saved travel plans
- previous purchases
- workout references
- recommendations

Rediscovery becomes useful when relevance exists.

---

## Design Implication

Rediscovery should be contextual.

Never promotional.

Never engagement-driven.

---

# Pattern 11 — Low Maintenance Wins

Users abandon systems requiring continuous effort.

Examples:

- excessive categorization
- manual tagging
- constant organization
- ongoing cleanup

Maintenance burden grows over time.

Value declines.

---

## Design Implication

Organization should remain optional.

The system should function even when users never organize anything.

---

# Pattern 12 — Trust Emerges From Retrieval

Users do not trust systems because information was stored.

Users trust systems because information was successfully recovered.

---

## Trust Cycle

Save

↓

Retrieve

↓

Trust

↓

Save More

↓

Retrieve Again

↓

Trust Deepens

---

## Design Implication

Retrieval success should be prioritized over storage sophistication.

---

# Pattern 13 — Explainability Builds Confidence

People trust systems more when outcomes are understandable.

Examples:

Related because both reference Japan travel.

Recommended because both were saved during apartment research.

Explanation creates confidence.

---

## Design Implication

AI outcomes should be explainable whenever possible.

---

# Pattern 14 — Human Intent And System Understanding Differ

Users know why they saved something.

Systems infer why something was saved.

These are not equivalent.

---

## Example

User Context:

Rahul recommended this.

System Context:

Possible future purchase.

Both may be useful.

Neither should replace the other.

---

## Design Implication

User-provided meaning and AI-generated meaning should remain visually distinct.

---

# Pattern 15 — Organization Emerges From Meaning

Traditional systems assume structure must come first.

Human behavior suggests otherwise.

Meaning often emerges after information accumulates.

Patterns become visible over time.

---

## Design Implication

The system should support emergent organization rather than requiring upfront structure.

---

# Pattern 16 — The Cost Of Lost Information Is Invisible

People rarely notice information disappearing.

They notice when they need it and cannot find it.

The failure occurs long before the frustration is experienced.

---

## Design Implication

Retrieval confidence is more important than storage volume.

The system should prioritize future accessibility.

---

# Pattern 17 — Attention Is Limited

Users interact with memory systems in short bursts.

Examples:

- commuting
- standing
- multitasking
- between tasks

Attention is fragmented.

Time is limited.

---

## Design Implication

Interactions should be concise.

Complex workflows should be avoided.

---

# Pattern 18 — Calm Systems Build Long-Term Trust

People prefer systems that quietly support them.

Not systems that constantly demand attention.

Examples:

- unnecessary notifications
- engagement loops
- urgency mechanics
- activity pressure

Reduce trust over time.

---

## Design Implication

Mimo should feel calm, reliable and unobtrusive.

Trust should be earned through usefulness rather than attention.

---

# Pattern Relationships

Many patterns reinforce each other.

Example:

Discovery Happens Unexpectedly

↓

Save And Forget

↓

Information Gains Gravity

↓

Retrieval

↓

Trust

↓

Future Saving

These patterns collectively explain how Mimo creates value.

---

# Closing Principle

Mimo is designed around how people actually discover, remember and reuse information.

The product should adapt to human behavior rather than expecting human behavior to adapt to the product.

Patterns should be treated as enduring truths that guide future decisions, architecture and feature development.