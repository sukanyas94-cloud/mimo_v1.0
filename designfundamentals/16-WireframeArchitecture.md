# 16-WireframeArchitecture.md

Version: 1.0
Status: Frozen

---

# Purpose

This document defines the structural blueprint for Mimo's primary screens.

It specifies:

- screen responsibilities
- information hierarchy
- content ordering
- interaction ownership
- primary and secondary actions
- empty state requirements

This document intentionally does not define:

- colors
- typography
- spacing
- component styling
- animation language

Those concerns belong to DesignSystemGuide.md.

The purpose of this document is to establish what appears on each screen and in what hierarchy.

---

# Wireframe Independence Principle

Wireframes define:

- structure
- hierarchy
- ownership
- interaction placement

Wireframes do not define:

- branding
- visual design
- styling
- implementation details

The same wireframe architecture should remain valid even if the visual design evolves.

---

# Screen Inventory

Mimo V1 contains seven primary screen types:

1. Home
2. Search
3. Memory Detail
4. Library
5. Collection Detail
6. Profile
7. Save Confirmation Sheet

---

# S-001 Home

## Purpose

Retrieval Workspace

---

## Primary User Questions

- What am I looking for?
- What did I recently use?
- What else might be useful right now?

---

## Entry Points

- App launch
- Bottom navigation
- Deep link return
- Save completion flow

---

## Information Hierarchy

Search / Paste Link

↓

Recent Activity

↓

Related Memories

---

## Primary Actions

- Search
- Paste URL
- Open Memory

---

## Secondary Actions

- Open Library
- Open Profile

---

## Empty State

### Structure

Headline

↓

Short value proposition

↓

Save First Link CTA

### Example

Start saving links to build your memory space.

---

## Ownership

- Retrieval
- Capture
- Rediscovery

---

# S-002 Search

## Purpose

Dedicated Retrieval Surface

---

## Primary User Questions

- Can I find what I am looking for?
- Which result is the correct one?

---

## Entry Points

- Home search field

---

## Information Hierarchy

Search Input

↓

Results

↓

No Results Recovery

---

## Search Result Structure

Thumbnail

↓

Title

↓

Source

↓

Human Context (optional)

↓

System Understanding (optional)

↓

Relationship Hint (optional)

---

## Primary Actions

- Search
- Open Memory
- Refine Query

---

## Secondary Actions

- Clear Search
- Return Home

---

## No Results State

### Structure

No Exact Matches

↓

Related Memories

↓

Recent Activity

↓

Refine Search Guidance

---

## Ownership

- Search
- Retrieval
- Retrieval Recovery

---

# S-003 Memory Detail

## Purpose

Memory Reconstruction Surface

---

## Primary User Questions

- Is this what I was looking for?
- Why did this matter?
- What else is connected?
- What can I do now?

---

## Entry Points

- Search
- Recent Activity
- Related Memories
- Library
- Collections
- Deep links

---

## Information Hierarchy

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

## Recognition Layer

Contains:

- Thumbnail
- Title
- Source
- Timestamp

Purpose:

Immediate identification

---

## Context Layer

Contains:

- Human Context
- Source Context

Purpose:

Restore original meaning

---

## Understanding Layer

Contains:

- System Understanding
- Inferred usefulness

Purpose:

Support interpretation

---

## Related Memories Layer

Contains:

- Related Memories
- Relationship Explanations

Purpose:

Associative retrieval

---

## Actions Layer

Contains:

- Open in [native app] / Open original (primary)
- Mimo thinks · other ways (browser, send to recipient, copy link)
- Save to collection (always visible)
- Edit context
- Delete

Purpose:

Post-retrieval actions

---

## Primary Actions

- Open Original (via Smart Launcher)
- Open Related Memory
- Save To Collection

---

## Secondary Actions

- Send to recipient
- Open in browser (when primary is native app)
- Copy link
- Edit Context
- Delete

---

## Smart Launcher

The primary action surface is a Smart Launcher.

The primary CTA defaults to opening the source's native app when known.

Alternatives appear beneath under "Mimo thinks · other ways" with the recommended path highlighted.

Decision: see 18-DecisionsV1.md § Decision 08.

---

## Save to Collection

A full-width row sits directly beneath the primary Smart Launcher CTA.

The row remains visible at all times.

Memberships persist as chips on the Recognition layer.

Decision: see 18-DecisionsV1.md § Decision 06.

---

## Empty State Behavior

If a section has no content:

Hide the section.

Do not show empty containers.

---

## Ownership

- Understanding
- Context Reconstruction
- Relationship Exploration
- Action Readiness

---

## Notes

Single-scroll page.

No tabs.

No section navigation.

---

# S-004 Library

## Purpose

Archive Exploration

---

## Primary User Questions

- What have I saved?
- Can I visually recognize what I need?
- What collections exist?

---

## Entry Points

- Bottom navigation
- Collection return flow

---

## Information Hierarchy

Filters

↓

Memory Grid

↓

Collections

---

## Primary Actions

- Open Memory
- Filter Memories
- Open Collection
- Multi-Select

---

## Secondary Actions

- Switch To List View
- Create Collection

---

## Empty State

### Structure

Value Proposition

↓

Save First Link CTA

---

## Ownership

- Browsing
- Collection Access
- Multi-Select

---

## Notes

Grid is default.

List is optional.

Recognition is prioritized over density.

---

# S-005 Collection Detail

## Purpose

Focused Retrieval Group

---

## Primary User Questions

- What memories belong here?
- Can I find information faster?

---

## Entry Points

- Library
- Collection links

---

## Information Hierarchy

Collection Header

↓

Memory Grid

---

## Collection Header

Contains:

- Collection Name
- Memory Count
- Optional Description

---

## Primary Actions

- Open Memory
- Add Memory
- Edit Collection

---

## Secondary Actions

- Rename Collection
- Delete Collection

---

## Empty State

Collection Empty Message

↓

Add Memories CTA

---

## Ownership

- Grouped Retrieval
- Collection Maintenance

---

## Notes

Collections are optional retrieval accelerators.

---

# S-006 Profile

## Purpose

Account And Preferences

---

## Primary User Questions

- How is my account configured?
- What preferences are active?

---

## Information Hierarchy

Account

↓

Preferences

↓

Permissions

↓

Integrations

↓

Application Information

---

## Primary Actions

- Edit Preferences
- Manage Permissions
- Manage Integrations

---

## Secondary Actions

- Version Information
- Support Information

---

## Ownership

- Configuration
- Administration
- Preferences

---

## Notes

Avoid feature bloat.

Keep administrative concerns separate from retrieval workflows.

---

# S-007 Save Confirmation Sheet

## Purpose

Capture Feedback

---

## Entry Points

- Share Sheet Save
- Manual URL Save

---

## Information Hierarchy

Success State

↓

Preview

↓

View Memory

↓

Undo

---

## Primary Actions

- View Memory
- Undo Save
- Dismiss

---

## Ownership

- Capture Confirmation
- Immediate Feedback

---

## Notes

Transient surface.

Provide reassurance without interruption.

---

# Cross-Screen Hierarchy Rule

Whenever multiple information layers appear together, maintain this order:

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

# Visibility Rule

Users should be able to answer these questions in order:

1. Is this what I am looking for?
2. Why did this matter?
3. What does this represent?
4. What else is connected?
5. What can I do now?

---

# Empty State Principles

Every empty state should:

- teach value
- provide direction
- preserve orientation
- suggest a next action

Avoid:

- Empty
- No Data
- Nothing Here

Prefer:

- guidance
- recovery
- next steps

---

# Ownership Principles

Home owns:

- Retrieval
- Capture
- Rediscovery

Search owns:

- Retrieval
- Retrieval Recovery

Memory Detail owns:

- Understanding
- Context
- Relationships
- Actions

Library owns:

- Browsing
- Collections
- Multi-Select

Profile owns:

- Administration
- Preferences

---

# Closing Principle

Every screen should help users reconnect with information while minimizing memory burden, organizational effort and cognitive load.

Retrieval, recognition and understanding should always take precedence over management and maintenance.