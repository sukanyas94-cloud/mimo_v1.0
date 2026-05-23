# 10B-MobileApplicationArchitecture.md

Version: 1.0
Status: Frozen Candidate

---

# Purpose

This document defines how Mimo's information architecture is exposed through a mobile application.

It establishes:

- primary screens
- navigation ownership
- screen responsibilities
- interaction entry points
- mobile-specific constraints

This document focuses on application structure rather than visual design.

---

# Mobile-First Assumptions

Mimo is designed primarily for:

- smartphones
- portrait orientation
- one-handed usage
- short sessions
- interrupted attention
- rapid context switching

The architecture should optimize for retrieval with minimal effort.

---

# Application Structure

The application consists of three primary destinations.

Home

Library

Profile

No additional primary navigation destinations exist in V1.

---

# Navigation Model

Bottom Navigation

Home

Library

Profile

---

## Navigation Philosophy

Navigation should expose only the most important product surfaces.

Users should not need to think about system structure.

The product should expose intent rather than architecture.

---

# Screen 01 — Home

Role:

Retrieval Workspace

---

## Purpose

The default landing experience.

Supports:

- retrieval
- capture
- rediscovery
- recent access

---

## User Questions Answered

What am I looking for?

What did I recently use?

What else might be relevant?

---

## Home Structure

Search / Paste Link

↓

Recent Activity

↓

Related Memories

---

## Ownership

Home owns:

- search
- manual capture
- recent activity
- contextual rediscovery

---

## Entry Points

Application Launch

Bottom Navigation

Save Completion Flow

Deep Links

---

# Search / Paste Link

Role:

Unified retrieval and capture entry point.

---

## Behaviors

Text Input

↓

Search

---

URL Input

↓

Save Flow

---

## Principle

One entry point.

Two intents.

No separate capture destination.

---

# Recent Activity

Role:

Rapid re-entry surface.

---

## Includes

Recently:

- saved
- viewed
- shared
- revisited

---

## Goal

Reduce retrieval effort for recently useful information.

---

# Related Memories

Role:

Contextual rediscovery.

---

## Goal

Reconnect users with information through relationships.

---

## Requirement

Every surfaced memory must explain relevance.

Example:

Related because both reference Japan travel.

---

# Screen 02 — Library

Role:

Archive Exploration

---

## Purpose

Support recognition-driven browsing.

Not primary retrieval.

---

## User Questions Answered

What have I saved?

What collections exist?

Can I visually recognize what I need?

---

## Library Structure

Filters

↓

Memory Grid

↓

Collections

---

## Ownership

Library owns:

- archive browsing
- collection access
- visual exploration

---

## Default View

Grid

---

## Optional View

List

---

## Principle

Recognition prioritized over density.

---

# Filters

Role:

Lightweight archive navigation.

---

## Examples

Newest

Oldest

Source

Recently Viewed

---

## Constraint

Filtering remains lightweight in V1.

Search remains primary retrieval.

---

# Collections

Role:

Optional retrieval accelerator.

---

## Purpose

Support voluntary grouping.

---

## Principle

Collections assist retrieval.

Collections do not define retrieval.

---

# Screen 03 — Memory Detail

Role:

Memory Reconstruction Surface

---

## Purpose

Help users:

- recognize
- understand
- reconnect
- act

---

## User Questions Answered

Is this what I was looking for?

Why did this matter?

What is related?

What can I do next?

---

## Information Hierarchy

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

# Recognition Layer

Contains:

- thumbnail
- title
- source
- timestamp

---

## Purpose

Immediate identification.

---

# Context Layer

Contains:

- human context
- source context

---

## Purpose

Restore original meaning.

---

# Understanding Layer

Contains:

- system interpretation
- inferred usefulness

---

## Requirement

System-generated information must remain distinguishable from user-generated information.

---

# Relationship Layer

Contains:

- related memories
- relationship explanations

---

## Purpose

Create alternative retrieval paths.

---

# Action Layer

Contains:

- Open Original
- Share
- Save To Collection
- Delete

---

## Purpose

Support action after retrieval.

---

# Screen 04 — Collection Detail

Role:

Focused Retrieval Group

---

## Purpose

Browse memories grouped around a common theme.

---

## Structure

Collection Header

↓

Memory Grid

---

## Contains

- collection name
- memory count
- optional description

---

# Screen 05 — Profile

Role:

Account And Preferences

---

## Purpose

Manage:

- account
- preferences
- permissions
- integrations

---

## Principle

Administrative functionality remains isolated from retrieval workflows.

---

# Save Confirmation Sheet

Role:

Capture Feedback

---

## Triggered By

Share Sheet Save

Manual URL Save

---

## Structure

Success State

↓

Preview

↓

View

↓

Undo

---

## Principle

Reassure without interrupting.

---

# Mobile Interaction Principles

---

## One-Handed Friendly

Primary actions should remain comfortably reachable.

---

## Recognition First

Visual cues should reduce memory burden.

---

## Low Friction Capture

Saving should require minimal interaction.

---

## Low Maintenance

Users should not be required to organize information continuously.

---

## Calm Interaction

Avoid:

- attention traps
- engagement loops
- unnecessary interruptions

---

# Architecture Boundaries

Home

Owns Retrieval

---

Library

Owns Exploration

---

Memory Detail

Owns Understanding

---

Profile

Owns Administration

---

Responsibilities should remain distinct.

---

# Closing Principle

The mobile application should feel smaller than the system behind it.

Users should experience a simple retrieval product.

Not the complexity of the architecture that powers it.