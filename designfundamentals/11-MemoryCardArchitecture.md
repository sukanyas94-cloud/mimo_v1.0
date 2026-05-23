# 11-MemoryCardArchitecture.md

Version: 1.0
Status: Frozen Candidate

---

# Purpose

This document defines the architecture of the Memory Card.

The Memory Card is the primary object within Mimo.

Every major workflow ultimately exists to support one or more Memory Cards.

This document defines:

- what a Memory Card is
- what information it contains
- how it evolves over time
- how it supports retrieval
- how context and relationships are preserved
- how future intelligence can enrich it

This document is intentionally independent of visual implementation.

It defines the object, not the component.

---

# Core Definition

A Memory Card is not a bookmark.

A bookmark preserves access.

A Memory Card preserves:

- access
- context
- understanding
- relationships
- future usefulness

The purpose of a Memory Card is not simply to store information.

The purpose is to help users reconnect with information when it becomes relevant again.

---

# Architectural Role

The Memory Card is the center of the product architecture.

Everything else exists to support it.

Examples:

- search retrieves Memory Cards
- collections group Memory Cards
- AI enriches Memory Cards
- relationships connect Memory Cards
- rediscovery surfaces Memory Cards

The product revolves around Memory Cards rather than folders, feeds or collections.

---

# Memory Card Lifecycle

Information evolves over time.

A Memory Card should support that evolution.

---

Discovery

↓

Capture

↓

Enrichment

↓

Retrieval

↓

Action

↓

Rediscovery

---

## Discovery

Information is encountered outside Mimo.

Examples:

- Instagram
- Reddit
- YouTube
- Browser
- WhatsApp
- Marketplace

---

## Capture

Information enters Mimo.

A Memory Card is created.

---

## Enrichment

Context, understanding and relationships become available.

May occur:

- immediately
- progressively
- asynchronously

---

## Retrieval

User reconnects with information.

---

## Action

User acts on information.

Examples:

- open original
- purchase
- share
- revisit
- research further

---

## Rediscovery

Previously forgotten information becomes useful again.

---

# Architectural Layers

The Memory Card is organized around five layers.

These layers reflect how users reconstruct meaning.

---

Recognition

↓

Context

↓

Understanding

↓

Relationships

↓

Actions

---

# Layer 01 — Recognition

## Purpose

Answer:

Is this the thing I am looking for?

---

## Contents

May include:

- thumbnail
- title
- source
- favicon
- timestamp
- preview image

---

## Design Principle

Recognition should require minimal effort.

Users should identify information before needing to interpret it.

---

# Layer 02 — Context

## Purpose

Answer:

Why did this matter?

---

## Contents

May include:

- personal context
- recommendation source
- source context
- discovery context

---

## Examples

Rahul recommended this.

Compare against blue version.

Found while planning Japan trip.

---

## Design Principle

Context restores meaning across time.

---

# Layer 03 — Understanding

## Purpose

Answer:

What does this represent?

---

## Contents

May include:

- system interpretation
- inferred purpose
- inferred category
- inferred usefulness

---

## Examples

Travel Reference

Future Purchase

Workout To Try

Apartment Research

---

## Design Principle

Understanding supports retrieval.

It should never replace user intent.

---

# Layer 04 — Relationships

## Purpose

Answer:

What else is connected?

---

## Contents

May include:

- related memories
- relationship explanations
- shared themes
- shared activities
- shared goals

---

## Examples

Related because both reference Japan travel.

Related because both were saved during apartment research.

---

## Design Principle

Relationships create additional retrieval paths.

---

# Layer 05 — Actions

## Purpose

Answer:

What can I do now?

---

## Contents

May include:

- Open Original
- Share
- Save To Collection
- Edit Context
- Delete

---

## Design Principle

Actions exist after meaning has been restored.

---

# Context Architecture

Context preserves meaning.

Three context types exist within the architecture.

---

# Human Context

## Definition

Meaning provided directly by the user.

---

## Examples

Rahul recommended this.

Try next leg day.

Use during wedding planning.

---

## Characteristics

- explicit
- intentional
- authoritative

---

## Principle

Human Context is treated as known truth.

---

# System Context

## Definition

Meaning inferred by the system.

---

## Examples

Travel Reference

Future Purchase

Restaurant Recommendation

Learning Resource

---

## Characteristics

- inferred
- probabilistic
- non-authoritative

---

## Principle

System Context must remain distinguishable from Human Context.

---

# Source Context

## Definition

Information describing where the Memory Card originated.

---

## Examples

Instagram

YouTube

Reddit

Pinterest

Browser

---

## Purpose

Provide environmental clues that aid recognition.

---

# Relationship Architecture

Relationships belong to Memory Cards.

Not collections.

Not categories.

Not folders.

---

## Relationship Types

Examples include:

- same topic
- same goal
- same person
- same trip
- same project
- same activity
- same recommendation source

---

## Relationship Principles

Relationships are:

- associative
- flexible
- contextual

Relationships are not hierarchical.

---

# Metadata Architecture

Metadata exists to support retrieval.

Metadata is not the product.

---

## Examples

- title
- URL
- timestamp
- source
- preview image

---

## Principle

Metadata should assist recognition and retrieval without dominating the experience.

---

# Collection Relationship

Collections do not own Memory Cards.

Memory Cards remain independent.

Collections provide optional grouping.

---

Memory Card

↓

May Belong To

↓

Zero Or More Collections

---

This prevents collections from becoming mandatory organizational structures.

---

# Memory Card States

A Memory Card may exist in several operational states.

---

## Newly Captured

Minimal information available.

Capture completed successfully.

---

## Enriched

Additional context, understanding or relationships available.

---

## Retrieved

Recently opened or interacted with.

---

## Rediscovered

Resurfaced because relevance emerged.

---

## Archived

Older Memory Card that remains retrievable.

---

# Ownership Model

Memory Cards own:

- source information
- context
- relationships
- retrieval history

Memory Cards do not own:

- navigation
- collections
- user settings

---

# Future Extensibility

The architecture should support future enrichment without changing the identity of the Memory Card.

Possible future enhancements:

- improved understanding
- richer relationships
- better relevance explanations
- enhanced contextual reconstruction

The object should remain stable while intelligence evolves.

---

# Architectural Anti-Patterns

The following models are intentionally rejected.

---

## Bookmark Object

URL + title only.

Reason:

Insufficient context and meaning.

---

## Note Object

Long-form document editing.

Reason:

Moves product toward knowledge management.

---

## Task Object

Task management behavior.

Reason:

Outside product purpose.

---

## Social Object

Likes, comments and followers.

Reason:

Creates engagement-driven behavior.

---

## Folder Object

Deep hierarchical organization.

Reason:

Increases maintenance burden.

---

# Success Criteria

A successful Memory Card allows users to:

- recognize information quickly
- understand why it mattered
- reconnect related information
- act immediately
- trust future retrieval

without requiring perfect memory.

---

# Closing Principle

The Memory Card is the foundation of Mimo.

Every capability within the product ultimately exists to make Memory Cards easier to preserve, retrieve, understand and act upon.

If a future feature does not strengthen one of those outcomes, its place within the system should be questioned.