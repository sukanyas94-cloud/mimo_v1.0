# 17-DesignSystemGuide.md

Version: 1.0
Status: Frozen

---

# Purpose

This document serves as the primary design-generation guide for Mimo.

It is intended to be consumed by:

- Claude Design
- AI design agents
- Product Designers
- Frontend Engineers

This document should be sufficient to generate the foundational design system and screen designs even without access to the remainder of the repository.

It defines:

- product context
- visual philosophy
- interaction philosophy
- component inventory
- component intent
- component usage rules
- accessibility expectations
- responsive expectations

This document intentionally does not define:

- exact color values
- design tokens
- implementation code
- React architecture

---

# Mimo Overview

Mimo is a personal memory layer for internet discoveries.

Users save:

- links
- articles
- products
- videos
- recommendations
- destinations
- ideas

that may become useful later.

The product exists to help users reconnect with valuable information when it becomes relevant again.

Retrieval is the primary value.

Storage supports retrieval.

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

Users should feel confident that information remains recoverable even when details have been forgotten.

---

# Design System Foundation

Mimo must use Material UI (MUI) as the foundational component library.

Use existing MUI components whenever appropriate.

Prefer:

- composition
- extension
- customization

over creating entirely new primitives.

Custom components should only be introduced when:

- the interaction pattern does not exist within MUI
- retrieval workflows require specialized behavior
- Memory Card experiences cannot be represented using existing MUI primitives

The design system should establish a unique Mimo identity through:

- hierarchy
- spacing
- content presentation
- interaction behavior
- visual tone

Avoid replacing MUI components purely for stylistic reasons.

Prioritize:

- consistency
- accessibility
- maintainability
- implementation speed

---

# Experience Attributes

The interface should feel:

- calm
- trustworthy
- lightweight
- personal
- focused
- supportive

Avoid:

- playful
- noisy
- gamified
- attention-seeking
- enterprise-heavy
- overly technical

The interface should feel like a memory companion rather than a productivity platform.

---

# Design Principles

## Recognition Before Recall

Show clues before requiring memory.

Prioritize:

- imagery
- source cues
- context cues

over metadata-heavy interfaces.

---

## Meaning Before Action

Users should understand why information matters before being presented with actions.

---

## Progressive Disclosure

Reveal complexity gradually.

Start simple.

Expand only when needed.

---

## Calm Assistance

Support users quietly.

Never compete for attention.

---

## Relationships Over Hierarchies

Connections between memories are more important than folder structures.

---

## Low Organizational Burden

The interface should not require ongoing maintenance from users.

---

# Visual Direction

## Prefer

- soft surfaces
- generous whitespace
- clear hierarchy
- content-first layouts
- lightweight elevation
- calm visual rhythm
- large touch-friendly targets
- strong readability

---

## Avoid

- dashboard aesthetics
- enterprise density
- promotional banners
- marketing-style layouts
- excessive visual decoration
- attention-grabbing surfaces

---

## Visual Hierarchy

Primary

Content

---

Secondary

Context

---

Tertiary

Metadata

---

The UI should consistently reinforce retrieval over administration.

---

# Component Inventory

The following components should exist within the design system.

---

# Search Components

## Global Search Field

Purpose:

Unified retrieval and capture entry point.

---

Variants

- Default
- Focused
- URL Detected

---

Behavior

Text Input

↓

Search

URL Input

↓

Capture Flow

---

Rules

- Single global search pattern
- No competing search bars
- Visible from Home
- Optimized for retrieval

---

## Search Result Card

Purpose:

Recognition-focused retrieval result.

---

Required Content

- thumbnail
- title
- source

---

Optional Content

- human context
- system understanding
- relationship hint

---

Rules

Recognition should occur before opening.

---

# Memory Components

## Memory Card

Purpose:

Primary object of the system.

---

Required Content

- thumbnail
- title
- source

---

Optional Content

- timestamp
- context indicators
- relationship indicators

---

Rules

Support rapid recognition.

Avoid metadata overload.

---

## Recent Activity Card

Purpose:

Quick re-entry into recently useful memories.

---

Required Content

- recognition cues
- timestamp

---

Rules

Optimized for speed.

---

## Related Memory Card

Purpose:

Associative retrieval.

---

Required Content

- recognition cues
- relationship explanation

---

Rules

Always explain relevance.

---

## Collection Card

Purpose:

Represent optional groupings.

---

Required Content

- collection name
- memory count

---

Optional Content

- preview imagery

---

Rules

Collections support retrieval.

Collections are not the primary object.

---

# Context Components

## Human Context Block

Purpose:

Display user-provided meaning.

---

Examples

Rahul recommended this.

Use for wedding planning.

Compare with blue version.

---

Rules

Must be visually distinct.

Treated as authoritative.

---

## System Understanding Block

Purpose:

Display inferred meaning.

---

Examples

Travel Reference

Future Purchase

Workout To Try

---

Rules

Must remain visually distinct from Human Context.

Never appear as fact.

---

## Relationship Explanation Block

Purpose:

Explain why memories are connected.

---

Examples

Related because both reference Japan travel.

---

Rules

Explanation required.

No unexplained relationships.

---

# Navigation Components

## Bottom Navigation

Items

- Home
- Library
- Profile

---

Rules

Three destinations only.

---

## Top App Bar

Purpose

Provide screen context.

---

May Contain

- title
- back navigation
- contextual actions

---

Rules

Keep lightweight.

---

# Feedback Components

## Save Confirmation Sheet

Purpose

Confirm successful capture.

---

Contents

- success state
- preview
- view memory
- undo

---

Rules

Reassuring but unobtrusive.

---

## Empty State

Purpose

Provide guidance.

---

Rules

Must include:

- value explanation
- next action

Avoid:

- dead ends
- blank states

---

## Error State

Purpose

Explain failures clearly.

---

Rules

Provide recovery paths whenever possible.

---

# Selection Components

## Multi-Select Mode

Available In

Library only.

---

Purpose

Bulk collection creation.

---

Rules

Do not expose globally.

---

# Dialog Components

## Confirmation Dialog

Purpose

Protect destructive actions.

---

Examples

Delete Memory

Delete Collection

---

Rules

Use sparingly.

---

# Motion Principles

Motion should be:

- purposeful
- subtle
- informative

Avoid:

- decorative animation
- attention-seeking transitions
- unnecessary movement

Motion should communicate:

- state change
- navigation
- feedback

---

# Accessibility Requirements

The design system must support:

- keyboard accessibility
- screen readers
- visible focus indicators
- touch-friendly targets
- sufficient contrast
- semantic hierarchy

---

Users should never depend solely on:

- color
- animation
- iconography

to understand information.

---

# Responsive Principles

Primary Target

Mobile

---

Secondary Target

Tablet

---

Future Support

Desktop

---

Rules

Design mobile-first.

Scale upward progressively.

Do not rely on hover interactions.

---

# Design System Anti-Patterns

Avoid:

- dashboard-heavy layouts
- card overload
- hidden navigation
- dense data tables
- feed patterns
- social interaction patterns
- gamification
- promotional surfaces
- AI-first interfaces
- excessive filtering systems

---

# Design System Success Criteria

The design system succeeds when users can:

- recognize information quickly
- understand meaning rapidly
- retrieve memories confidently
- navigate naturally
- act with minimal effort

without feeling overwhelmed.

---

# Closing Principle

Mimo is not a bookmarking tool.

It is a memory retrieval product.

Every component should strengthen recognition, context, understanding, relationships or action.

If a component primarily increases complexity, maintenance burden or attention demand, it should be reconsidered.