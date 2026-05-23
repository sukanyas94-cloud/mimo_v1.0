# 14-UXFlows.md

Version: 1.0
Status: Frozen Candidate

---

# Purpose

This document defines the primary user flows within Mimo.

These flows translate product strategy, information architecture and interaction decisions into observable user journeys.

The purpose of these flows is to:

- guide UX design
- support wireframe generation
- support high-fidelity design generation
- align implementation expectations
- validate navigation and ownership boundaries

This document focuses on behavior rather than visual presentation.

---

# Flow Structure

Each flow contains:

- Goal
- Trigger
- Entry Point
- Success Outcome
- Happy Path
- Alternate Paths
- Failure Paths
- Design Notes

---

# F-001 — Save Link From Share Sheet

## Goal

Preserve discovered information immediately.

---

## Trigger

User discovers valuable content in another application.

---

## Entry Point

Native Share Sheet

---

## Success Outcome

Memory Card created successfully.

---

## Happy Path

Discover Content

↓

Share

↓

Select Mimo

↓

Save Confirmation Sheet

↓

Memory Card Created

↓

Return To Previous Application

---

## Alternate Paths

Preview metadata unavailable.

↓

Fallback preview generated.

---

## Failure Paths

Network unavailable.

↓

Retry save.

---

## Design Notes

Capture should require minimal interruption.

---

# F-002 — Save Link Manually

## Goal

Preserve information through URL input.

---

## Trigger

User pastes URL manually.

---

## Entry Point

Home Search Field

---

## Success Outcome

Memory Card created.

---

## Happy Path

Open Home

↓

Paste URL

↓

URL Detected

↓

Save Flow

↓

Save Confirmation Sheet

↓

Memory Card Created

---

## Alternate Paths

User edits URL before submission.

---

## Failure Paths

Malformed URL

↓

Validation Feedback

---

## Design Notes

Capture and retrieval share a single entry point.

---

# F-003 — Search Using Fragment Memory

## Goal

Find information using incomplete memory.

---

## Trigger

User remembers fragments only.

---

## Examples

green dress

hotel in Kyoto

AI article

thing Rahul shared

---

## Entry Point

Home Search

---

## Success Outcome

Correct Memory Card located.

---

## Happy Path

Open Home

↓

Tap Search

↓

Enter Query

↓

Search State Opens

↓

Results Appear

↓

Recognition Occurs

↓

Open Memory Card

---

## Alternate Paths

Multiple candidate results.

↓

User identifies correct result.

---

## Failure Paths

No confident match.

↓

No Results State

↓

Recent Activity

↓

Related Memories

---

## Design Notes

Recognition prioritized over precision matching.

---

# F-004 — Retrieve Through Recent Activity

## Goal

Reconnect with recently useful information.

---

## Trigger

User recently interacted with a memory.

---

## Entry Point

Home

---

## Success Outcome

Memory reopened quickly.

---

## Happy Path

Open Home

↓

Recent Activity

↓

Select Memory

↓

Memory Detail Opens

---

## Design Notes

Recent Activity should support rapid re-entry.

---

# F-005 — Retrieve Through Related Memories

## Goal

Find information through association.

---

## Trigger

User remembers adjacent information.

---

## Entry Point

Memory Detail

or

Home Related Memories

---

## Success Outcome

Target Memory Card found.

---

## Happy Path

Open Related Memory

↓

View Related Memories

↓

Review Relationship Explanation

↓

Open Desired Memory

---

## Alternate Paths

Explore multiple related memories.

---

## Failure Paths

No meaningful relationships available.

↓

Hide Related Memory section.

---

## Design Notes

Relationships must explain themselves.

---

# F-006 — Open Memory Card

## Goal

Reconstruct meaning and determine usefulness.

---

## Trigger

User selects a Memory Card.

---

## Entry Point

Any retrieval path.

---

## Success Outcome

User understands the memory and can act.

---

## Happy Path

Open Memory Card

↓

Recognition Layer

↓

Context Layer

↓

Understanding Layer

↓

Related Memories

↓

Actions

---

## Design Notes

Memory reconstruction follows a single vertical narrative.

No tabs.

---

# F-007 — Add Personal Context

## Goal

Preserve user intent.

---

## Trigger

User wants to record meaning.

---

## Entry Point

Memory Detail

---

## Success Outcome

Human Context saved.

---

## Happy Path

Open Memory Card

↓

Add Context

↓

Save

↓

Context Appears

---

## Alternate Paths

Edit Existing Context

---

## Design Notes

Context remains optional.

---

# F-008 — Open Original Source

## Goal

Return to original content.

---

## Trigger

User wants to revisit source material.

---

## Entry Point

Memory Detail

---

## Success Outcome

Original content opens successfully.

---

## Happy Path

Open Memory Card

↓

Open Original

↓

External Content Opens

---

## Failure Paths

Source unavailable

↓

Unavailable State

↓

Memory remains accessible

---

## Design Notes

Opening original content is a primary action.

---

# F-009 — Create Collection From Memory Card

## Goal

Group related memories.

---

## Trigger

User wants lightweight organization.

---

## Entry Point

Memory Detail

---

## Success Outcome

Memory added to collection.

---

## Happy Path

Open Memory Card

↓

Save To Collection

↓

Create New Collection

or

Choose Existing Collection

↓

Collection Updated

---

## Design Notes

Collections remain optional.

---

# F-010 — Create Collection From Multi-Select

## Goal

Organize multiple memories simultaneously.

---

## Trigger

User wants bulk grouping.

---

## Entry Point

Library

---

## Success Outcome

Collection created successfully.

---

## Happy Path

Open Library

↓

Enter Multi-Select

↓

Select Memories

↓

Create Collection

↓

Name Collection

↓

Collection Created

---

## Design Notes

Multi-select exists only within Library.

---

# F-011 — Browse Library

## Goal

Retrieve through recognition.

---

## Trigger

User prefers browsing over search.

---

## Entry Point

Library

---

## Success Outcome

Desired memory located.

---

## Happy Path

Open Library

↓

Browse Grid

↓

Recognize Memory

↓

Open Memory Card

---

## Alternate Paths

Switch To List View

↓

Continue Browsing

---

## Design Notes

Grid remains default view.

---

# F-012 — Rediscover Relevant Memory

## Goal

Reconnect users with useful forgotten information.

---

## Trigger

Context suggests relevance.

---

## Entry Point

Home

or

Memory Detail

---

## Success Outcome

User reconnects with valuable information.

---

## Happy Path

Relevant Memory Appears

↓

Explanation Visible

↓

Recognition Occurs

↓

Open Memory Card

---

## Example

Planning Japan Trip

↓

Travel Memories Become Relevant

---

## Design Notes

Rediscovery must be contextual.

Never random.

---

# F-013 — Share Previously Saved Memory

## Goal

Reuse information quickly.

---

## Trigger

User wants to send information to someone else.

---

## Entry Point

Memory Detail

---

## Success Outcome

Information shared successfully.

---

## Happy Path

Open Memory Card

↓

Share

↓

Choose Destination

↓

Share Complete

---

## Design Notes

Sharing should require minimal effort.

---

# F-014 — Search No Results Recovery

## Goal

Prevent retrieval dead ends.

---

## Trigger

No confident search results.

---

## Entry Point

Search State

---

## Success Outcome

User continues retrieval journey.

---

## Happy Path

Search

↓

No Exact Matches

↓

Related Memories

↓

Recent Activity

↓

Refine Query

or

Continue Exploration

---

## Design Notes

No Results should remain useful.

---

# F-015 — First Memory Creation

## Goal

Help new users begin building a memory space.

---

## Trigger

Empty account.

---

## Entry Point

Home

or

Library

---

## Success Outcome

First Memory Card created.

---

## Happy Path

Empty State

↓

Save Link

↓

Memory Card Created

↓

Recent Activity Populated

---

## Design Notes

Empty states should teach product value.

---

# Flow Relationships

Capture

↓

Enrichment

↓

Retrieval

↓

Understanding

↓

Action

↓

Trust

All primary flows should reinforce this progression.

---

# Success Principles

Every flow should:

- reduce cognitive load
- support imperfect memory
- preserve meaning
- strengthen retrieval confidence
- maintain user control

Every flow should avoid:

- unnecessary decisions
- excessive organization
- attention-seeking behavior
- dead ends
- hidden AI behavior

---

# Closing Principle

The purpose of every flow is to help users reconnect with information when it becomes useful again.

If a flow does not strengthen preservation, retrieval, understanding or action, its existence should be questioned.