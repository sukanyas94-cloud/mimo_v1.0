# 17-DesignSystemGuide.md

Version: 2.0
Status: Active

---

# Purpose

This document is the primary design-generation brief for Mimo.

Use this document to generate:

- design system foundations
- screen layouts
- component variants
- interaction states
- high-fidelity mobile designs

This document should take precedence over design creativity when conflicts arise.

---

# Product Summary

Mimo is a mobile-first application for saving and retrieving internet discoveries.

Users save:

- articles
- videos
- products
- recommendations
- links
- places
- ideas

The primary goal is retrieval.

Users should be able to find information later even when they do not remember exact titles, URLs or where the information was stored.

The interface should prioritize:

Recognition

↓

Context

↓

Understanding

↓

Relationships

↓

Actions

The product should feel like a personal memory companion rather than a productivity tool.

---

# Technology Constraint

## Component Library

Use Material UI (MUI) as the foundational component library.

Prefer:

- existing MUI components
- composition
- extension

Avoid creating new primitives unless necessary.

Create custom components only when required for Memory Card experiences.

---

# Visual Direction

## Design References

Use these products as tonal references:

### Notion

Reference for:

- typography
- hierarchy
- spacing
- readability
- calm presentation

### Google Keep

Reference for:

- simplicity
- quick capture
- low-friction interaction

Do not copy these products.

Use them only as visual and interaction references.

---

# Desired Experience

The interface should feel:

- calm
- clean
- modern
- lightweight
- personal
- trustworthy
- highly readable

The interface should be content-first.

---

# Avoid

- enterprise dashboard aesthetics
- excessive decoration
- gamification
- social media patterns
- promotional surfaces
- heavy gradients
- flashy visuals
- dense administration interfaces
- clutter

---

# Typography

Use a single font family across the application.

Preferred order:

1. Inter
2. Roboto
3. System UI Fonts

Do not use multiple font families.

Create hierarchy using:

- font size
- font weight
- spacing

The interface should feel consistent and quiet.

---

# Layout Philosophy

Content drives layout.

The interface should feel spacious and easy to scan.

Prefer:

- generous spacing
- predictable hierarchy
- simple alignment
- large touch targets
- minimal chrome

Avoid:

- nested containers
- excessive card stacking
- crowded toolbars
- visual noise

---

# Complexity Rule

When multiple design solutions are possible:

Choose the simpler solution.

Prefer:

- fewer actions
- fewer decisions
- fewer visual treatments
- fewer navigation paths

Complexity must be earned.

Simplicity is the default.

---

# Application Structure

Primary Screens:

1. Home
2. Search
3. Memory Detail
4. Library
5. Collection Detail
6. Profile

Navigation:

Bottom Navigation

- Home
- Library
- Profile

Only three primary destinations should exist.

---

# Home Screen

## Purpose

Retrieval workspace.

---

## Sections

1. Search / Paste Link
2. Recent Activity
3. Related Memories

---

## Primary Actions

- Search
- Save Link
- Open Memory

---

## Design Goals

- immediate retrieval
- low cognitive load
- clear hierarchy

---

# Search Screen

## Purpose

Dedicated retrieval state.

---

## Sections

1. Search Input
2. Results
3. No Result Recovery

---

## Search Result Structure

Required:

- Thumbnail
- Title
- Source

Optional:

- Human Context
- System Understanding
- Relationship Hint

---

## Design Goals

Recognition should happen before opening a result.

---

# Memory Detail Screen

## Purpose

Memory reconstruction.

---

## Structure

Recognition

↓

Context

↓

Understanding

↓

Related Memories

↓

Actions

---

## Required Sections

### Recognition

- Thumbnail
- Title
- Source
- Timestamp

---

### Context

- Human Context
- Source Context

---

### Understanding

- System Understanding

---

### Related Memories

- Related Memory Cards
- Relationship Explanation

---

### Actions

- Open Original
- Share
- Save To Collection
- Edit Context
- Delete

---

## Rules

Single scrolling page.

No tabs.

No complex navigation.

Hide empty sections.

---

# Library Screen

## Purpose

Archive exploration.

---

## Structure

Filters

↓

Memory Grid

↓

Collections

---

## Default View

Grid

---

## Optional View

List

---

## Primary Actions

- Open Memory
- Open Collection
- Filter
- Multi Select

---

# Collection Detail Screen

## Purpose

Focused retrieval group.

---

## Structure

Collection Header

↓

Memory Grid

---

## Header Contents

- Collection Name
- Memory Count
- Description (optional)

---

# Profile Screen

## Purpose

Preferences and account management.

---

## Structure

- Account
- Preferences
- Permissions
- Integrations

Keep minimal.

Avoid feature bloat.

---

# Core Components

## Global Search Field

Purpose:

Unified retrieval and capture entry.

---

Variants:

- Default
- Focused
- URL Detected

---

Behavior:

Text Input

↓

Search

URL Input

↓

Capture Flow

---

## Memory Card

Purpose:

Primary content object.

---

Required:

- Thumbnail
- Title
- Source

---

Optional:

- Context Indicators
- Relationship Indicators
- Timestamp

---

Variants:

- Standard
- Compact
- Search Result

---

## Related Memory Card

Purpose:

Associative retrieval.

---

Required:

- Thumbnail
- Title
- Relationship Explanation

---

Rule:

Always explain why memories are related.

---

## Collection Card

Purpose:

Represent collections.

---

Required:

- Collection Name
- Memory Count

---

Optional:

- Preview Image

---

## Recent Activity Card

Purpose:

Fast re-entry.

---

Required:

- Recognition cues
- Timestamp

---

# Context Components

## Human Context

User-provided meaning.

Examples:

- Rahul recommended this
- Use for wedding planning
- Compare with blue version

Must be visually distinct.

Treated as authoritative.

---

## System Understanding

AI-generated meaning.

Examples:

- Travel Reference
- Future Purchase
- Workout To Try

Must be visually distinct from Human Context.

Never presented as fact.

---

## Relationship Explanation

Explain why memories are connected.

Example:

Related because both reference Japan travel.

Relationship explanations are required.

---

# Feedback Components

## Save Confirmation Sheet

Structure:

Success

↓

Preview

↓

View Memory

↓

Undo

---

## Empty States

Every empty state should:

- explain value
- provide guidance
- suggest next action

Never create dead ends.

---

## Error States

Clearly explain the issue.

Always provide recovery paths.

---

# Accessibility

Must support:

- keyboard navigation
- screen readers
- visible focus states
- sufficient contrast
- touch-friendly targets

Users should never rely solely on:

- color
- icons
- animation

to understand information.

---

# Responsive Design

Primary Target:

Mobile

Secondary Target:

Tablet

Future:

Desktop

Design mobile-first.

Do not depend on hover interactions.

---

# Generation Instructions

Generate:

- mobile-first screens
- design system foundations
- component variants
- interaction states
- high-fidelity UI

Prioritize:

Recognition

↓

Context

↓

Understanding

before actions.

Do not generate:

- feeds
- dashboards
- social features
- gamification
- promotional experiences

---

# Success Criteria

The design succeeds when users can:

- recognize information quickly
- retrieve information confidently
- understand why it mattered
- navigate naturally
- act with minimal effort

without feeling overwhelmed.

---

# Final Principle

Mimo is a retrieval-first product.

Every screen and component should help users reconnect with information when it becomes useful again.
