# 06-Decisions.md

Version: 1.0
Status: Frozen Candidate

---

# Purpose

This document records resolved product decisions for Mimo.

Its purpose is to eliminate ambiguity and provide a single source of truth for:

- product strategy
- UX decisions
- architecture decisions
- AI behavior
- implementation guidance

When uncertainty exists, contributors should consult this document before introducing new assumptions.

Unless explicitly superseded, decisions recorded here should be treated as authoritative.

---

# Status Definitions

Approved

A decision that has been accepted and should guide future work.

---

Deferred

A decision intentionally postponed until additional information exists.

---

Rejected

An alternative considered and intentionally not pursued.

---

# Product Decisions

---

## D-001 — Product Category

Status: Approved

### Decision

Mimo is a personal memory layer for internet discoveries.

### Not

- bookmarking application
- note-taking application
- personal knowledge management system
- productivity platform
- social network

### Rationale

The product exists to help users reconnect with valuable information when it becomes relevant again.

---

## D-002 — Core Value Proposition

Status: Approved

### Decision

Retrieval is the primary source of value.

Storage exists to support retrieval.

### Rationale

Saving information creates potential value.

Retrieving information creates realized value.

---

## D-003 — Product Promise

Status: Approved

### Decision

The core product promise is:

"If I save it, I can find it later."

### Rationale

This promise captures the fundamental outcome the product exists to deliver.

---

## D-004 — Primary Object

Status: Approved

### Decision

Memory Cards are the primary object in the system.

### Rationale

Every captured discovery becomes a Memory Card.

All major workflows revolve around Memory Cards.

---

## D-005 — Product Tone

Status: Approved

### Decision

The product should feel:

- calm
- trustworthy
- lightweight
- unobtrusive
- confidence inspiring

### Rationale

Trust should emerge through usefulness rather than attention.

---

# Capture Decisions

---

## D-006 — Capture Philosophy

Status: Approved

### Decision

Save immediately.

Enrich progressively.

### Rationale

Capture should never be blocked by processing or organization.

---

## D-007 — Save Before Organize

Status: Approved

### Decision

Information is preserved first.

Organization occurs later if necessary.

### Rationale

Users often save information in moments of interruption.

Capture should remain frictionless.

---

## D-008 — Manual Link Capture

Status: Approved

### Decision

Users may manually save URLs.

### Implementation Direction

Integrated into the Home search field.

### Rationale

Capture should remain possible even when share-sheet workflows are unavailable.

---

## D-009 — Source Agnostic Capture

Status: Approved

### Decision

Mimo supports preservation from any shareable URL source.

### Examples

- Instagram
- Pinterest
- Reddit
- YouTube
- WhatsApp
- Browsers
- Marketplaces
- Blogs

### Rationale

Future sources should not require architectural changes.

---

# Organization Decisions

---

## D-010 — Organization Philosophy

Status: Approved

### Decision

Organization is optional.

### Rationale

The product should continue delivering value even when users never create collections or structures.

---

## D-011 — Emergent Organization

Status: Approved

### Decision

Meaning should emerge naturally from accumulated information.

### Rationale

Structure should follow value rather than precede it.

---

## D-012 — Collections

Status: Approved

### Decision

Collections are optional retrieval accelerators.

### Rationale

Collections may improve retrieval but are not required for retrieval.

---

## D-013 — Collection Placement

Status: Approved

### Decision

Collections live inside Library.

Collections do not receive dedicated Home placement in V1.

### Rationale

Home should prioritize retrieval rather than organization.

---

# Retrieval Decisions

---

## D-014 — Retrieval Priority

Status: Approved

### Decision

Recognition is prioritized over recall.

### Rationale

Humans recognize information more reliably than they remember exact details.

---

## D-015 — Relationships As Retrieval Signals

Status: Approved

### Decision

Relationships are first-class retrieval mechanisms.

### Rationale

Users often remember adjacent information rather than the exact target.

---

## D-016 — Multiple Retrieval Paths

Status: Approved

### Decision

Users should be able to retrieve information through:

- search
- recent activity
- relationships
- collections

### Rationale

Multiple retrieval paths improve findability.

---

## D-017 — Context Preservation

Status: Approved

### Decision

Context should be preserved alongside information whenever possible.

### Rationale

Meaning often survives longer than metadata.

---

# AI Decisions

---

## D-018 — Role Of AI

Status: Approved

### Decision

AI assists retrieval.

AI does not become the product.

### Responsibilities

- enrichment
- understanding
- relationships
- rediscovery
- retrieval assistance

### Rationale

AI strengthens memory rather than replacing user intent.

---

## D-019 — Human Context And System Context

Status: Approved

### Decision

Human Context and System Context remain separate.

### Examples

Human Context:

Rahul recommended this.

System Context:

Possible Future Purchase.

### Rationale

Users know intent.

Systems infer intent.

These should not be conflated.

---

## D-020 — Explainability

Status: Approved

### Decision

AI outcomes should be explainable.

### Rationale

Trust increases when users understand why something appeared.

---

## D-021 — Rediscovery

Status: Approved

### Decision

Rediscovery should be contextual.

### Not

- random resurfacing
- engagement resurfacing

### Rationale

Useful rediscovery is more valuable than frequent rediscovery.

---

## D-022 — AI Feed Prevention

Status: Approved

### Decision

Mimo will not contain:

- AI feeds
- recommendation engines
- engagement feeds

### Rationale

The product exists to support retrieval rather than content consumption.

---

# UX Decisions

---

## D-023 — Home Screen Role

Status: Approved

### Decision

Home functions as the Retrieval Workspace.

### Purpose

- retrieve
- revisit
- rediscover
- capture

### Rationale

These represent the highest-frequency user goals.

---

## D-024 — Navigation Structure

Status: Approved

### Decision

Bottom navigation contains:

- Home
- Library
- Profile

### Rationale

Additional primary destinations create unnecessary complexity.

---

## D-025 — Search Placement

Status: Approved

### Decision

Search is integrated into Home.

Dedicated Search tab removed.

### Rationale

Retrieval is the dominant user behavior.

---

## D-026 — Home Structure

Status: Approved

### Decision

Home contains:

- Search / Paste Link
- Recent Activity
- Related Memories

### Rationale

Supports retrieval, capture and rediscovery without feed-like behavior.

---

## D-027 — Recent Activity Naming

Status: Approved

### Decision

Use Recent Activity.

### Not

Recent Memories.

### Rationale

Reflects actual user behavior.

---

## D-028 — Related Memories

Status: Approved

### Decision

Relationships must explain themselves.

### Example

Related because both reference Japan travel.

### Rationale

Explanation builds trust.

---

## D-029 — Continue Exploring

Status: Rejected

### Decision

No dedicated Continue Exploring section in V1.

### Rationale

Risk of evolving into recommendation surfaces or cognitive clutter.

---

## D-030 — Library Presentation

Status: Approved

### Decision

Grid is the default view.

List remains optional.

### Rationale

Recognition is prioritized over dense information display.

---

# Design System Decisions

---

## D-031 — Design System Foundation

Status: Approved

### Decision

MUI serves as the design system foundation.

### Rationale

Promotes consistency, accessibility and implementation speed.

---

## D-032 — Design System Guide

Status: Approved

### Decision

DesignSystemGuide.md may be used independently from the remainder of the repository.

### Rationale

Supports AI-assisted design generation workflows.

---

## D-033 — Theme Direction

Status: Approved

### Decision

The visual language should reinforce:

- calmness
- trust
- clarity
- retrieval confidence

### Rationale

The interface should support memory rather than compete for attention.

---

# Anti-Decisions

The following directions have been intentionally rejected.

---

## A-001 — Social Features

Rejected

Examples:

- followers
- likes
- comments
- activity feeds

---

## A-002 — Engagement Mechanics

Rejected

Examples:

- streaks
- engagement loops
- attention optimization
- compulsive notifications

---

## A-003 — Mandatory Organization

Rejected

Examples:

- required folders
- mandatory categories
- required tagging

---

## A-004 — Productivity Platform Expansion

Rejected

Examples:

- task management
- project management
- kanban boards
- planning systems

---

## A-005 — Knowledge Management Expansion

Rejected

Examples:

- document editing
- rich text systems
- wiki structures
- database builders

---

# Closing Principle

Decisions exist to reduce ambiguity.

Future contributors should prefer consistency over reinvention.

When uncertainty exists, choose the option most aligned with:

- retrieval
- context
- relationships
- trust
- future usefulness

and least aligned with:

- maintenance burden
- attention competition
- unnecessary complexity.