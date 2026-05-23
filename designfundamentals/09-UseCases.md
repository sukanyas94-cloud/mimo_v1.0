# 09-UseCases.md

Version: 1.0
Status: Frozen Candidate

---

# Purpose

This document defines the primary use cases supported by Mimo.

Use cases describe concrete situations that occur within the product.

Unlike Jobs To Be Done, which describe motivations, use cases describe observable interactions between users and the system.

These use cases should be used to:

- validate architecture decisions
- design UX flows
- prioritize functionality
- evaluate AI behavior
- generate wireframes and high-fidelity designs

---

# Use Case Structure

Each use case contains:

- Primary Persona
- Trigger
- User Goal
- Success Outcome
- Primary Flow
- Edge Cases
- Design Considerations

---

# UC-001 — Save A Link From Share Sheet

## Primary Persona

Opportunistic Saver

Collector

---

## Trigger

User discovers information on another platform.

---

## User Goal

Preserve information immediately.

---

## Success Outcome

Memory Card successfully created.

---

## Primary Flow

Discover Content

↓

Share

↓

Select Mimo

↓

Save Confirmation

↓

Memory Card Created

---

## Edge Cases

- unsupported URL metadata
- network unavailable
- duplicate content
- incomplete preview generation

---

## Design Considerations

Capture should be fast and interrupt minimally.

---

# UC-002 — Save A Link Manually

## Primary Persona

Opportunistic Saver

Future Planner

---

## Trigger

User possesses a URL outside share-sheet workflows.

---

## User Goal

Save information manually.

---

## Success Outcome

Memory Card created successfully.

---

## Primary Flow

Open Home

↓

Paste URL Into Search Field

↓

URL Detected

↓

Save Flow

↓

Memory Card Created

---

## Edge Cases

- malformed URL
- unsupported URL
- duplicate URL

---

## Design Considerations

Manual capture should feel like a natural extension of retrieval.

---

# UC-003 — Retrieve Using Fragment Memory

## Primary Persona

Memory Retriever

---

## Trigger

User remembers only part of the information.

---

## Examples

- green dress
- hotel in Kyoto
- AI article
- thing Rahul shared

---

## User Goal

Find the desired memory.

---

## Success Outcome

Correct Memory Card located.

---

## Primary Flow

Enter Fragment

↓

Search

↓

Recognize Result

↓

Open Memory

---

## Edge Cases

- vague query
- multiple similar memories
- missing contextual signals

---

## Design Considerations

Recognition cues should be prioritized.

---

# UC-004 — Retrieve Through Recent Activity

## Primary Persona

Memory Retriever

Collector

---

## Trigger

User recently interacted with a memory.

---

## User Goal

Return quickly to previous information.

---

## Success Outcome

Memory reopened without search.

---

## Primary Flow

Open Home

↓

Recent Activity

↓

Select Memory

↓

Open Memory

---

## Edge Cases

- large activity history
- repeated interactions

---

## Design Considerations

Recent Activity should support rapid re-entry.

---

# UC-005 — Retrieve Through Relationships

## Primary Persona

Research Explorer

Memory Retriever

---

## Trigger

User remembers adjacent information.

---

## User Goal

Find target information through connected memories.

---

## Success Outcome

Target memory found through relationships.

---

## Primary Flow

Open Related Memory

↓

View Relationships

↓

Navigate Connections

↓

Find Desired Memory

---

## Edge Cases

- weak relationships
- ambiguous associations

---

## Design Considerations

Relationship explanations should remain visible.

---

# UC-006 — Understand Why Something Was Saved

## Primary Persona

Future Planner

Collector

---

## Trigger

User opens an older memory.

---

## User Goal

Reconstruct original meaning.

---

## Success Outcome

User understands relevance quickly.

---

## Primary Flow

Open Memory

↓

View Context

↓

Review Understanding

↓

Interpret Relevance

---

## Edge Cases

- missing context
- unclear source
- forgotten intent

---

## Design Considerations

Context should be easy to scan.

---

# UC-007 — Revisit Original Source

## Primary Persona

All Personas

---

## Trigger

User finds desired memory.

---

## User Goal

Return to original content.

---

## Success Outcome

Original source opens successfully.

---

## Primary Flow

Open Memory

↓

Select Open Original

↓

External Content Opens

---

## Edge Cases

- deleted content
- broken links
- unavailable source

---

## Design Considerations

Opening original content should be a primary action.

---

# UC-008 — Save Personal Context

## Primary Persona

Recommendation Keeper

Future Planner

---

## Trigger

User wants to preserve intent.

---

## User Goal

Record meaning for future retrieval.

---

## Success Outcome

Personal Context saved.

---

## Primary Flow

Open Memory

↓

Add Personal Context

↓

Save Context

↓

Context Preserved

---

## Examples

- Rahul recommended this
- Compare with blue version
- Try next leg day

---

## Edge Cases

- empty context
- context edits

---

## Design Considerations

Personal context should remain optional.

---

# UC-009 — Rediscover Relevant Information

## Primary Persona

Future Planner

Research Explorer

---

## Trigger

Current context makes older information relevant.

---

## User Goal

Reconnect with forgotten discoveries.

---

## Success Outcome

Useful memory rediscovered.

---

## Primary Flow

Open Home

↓

Related Memories

↓

Recognize Relevant Memory

↓

Open Memory

---

## Edge Cases

- weak relevance
- incorrect associations

---

## Design Considerations

Rediscovery should always explain relevance.

---

# UC-010 — Create Collection

## Primary Persona

Collector

Research Explorer

---

## Trigger

User chooses to group related memories.

---

## User Goal

Create optional structure.

---

## Success Outcome

Collection created successfully.

---

## Primary Flow

Select Memories

↓

Create Collection

↓

Name Collection

↓

Collection Created

---

## Edge Cases

- duplicate collection names
- empty collections

---

## Design Considerations

Collections should remain optional.

---

# UC-011 — Browse Library

## Primary Persona

Collector

Research Explorer

---

## Trigger

User prefers exploration rather than direct search.

---

## User Goal

Recognize useful information visually.

---

## Success Outcome

Desired memory located.

---

## Primary Flow

Open Library

↓

Browse Grid

↓

Recognize Memory

↓

Open Memory

---

## Edge Cases

- large archives
- visually similar content

---

## Design Considerations

Recognition should remain prioritized.

---

# UC-012 — Share Previously Saved Information

## Primary Persona

Recommendation Keeper

---

## Trigger

User wants to reuse saved information.

---

## User Goal

Share information quickly.

---

## Success Outcome

Information successfully shared.

---

## Primary Flow

Open Memory

↓

Select Share

↓

Choose Destination

↓

Share Complete

---

## Edge Cases

- unavailable destination
- interrupted share flow

---

## Design Considerations

Sharing should require minimal effort.

---

# UC-013 — Retrieve Through Collection

## Primary Persona

Collector

Research Explorer

---

## Trigger

User remembers the collection but not the individual memory.

---

## User Goal

Locate information through grouped content.

---

## Success Outcome

Target memory found.

---

## Primary Flow

Open Collection

↓

Browse Collection

↓

Recognize Memory

↓

Open Memory

---

## Edge Cases

- large collections
- poorly named collections

---

## Design Considerations

Collections should accelerate retrieval rather than replace search.

---

# UC-014 — Understand AI Interpretation

## Primary Persona

Future Planner

Memory Retriever

---

## Trigger

User encounters AI-generated understanding.

---

## User Goal

Interpret system meaning.

---

## Success Outcome

User understands AI contribution.

---

## Primary Flow

Open Memory

↓

View Understanding

↓

Interpret Meaning

---

## Edge Cases

- weak inference
- incorrect interpretation

---

## Design Considerations

AI-generated understanding must remain distinguishable from user-provided context.

---

# UC-015 — Recover Information After Long Time Gaps

## Primary Persona

Future Planner

Memory Retriever

---

## Trigger

Weeks, months or years have passed.

---

## User Goal

Recover previously saved information.

---

## Success Outcome

Successful retrieval despite time elapsed.

---

## Primary Flow

Search

or

Browse

or

Related Memories

↓

Recognition

↓

Open Memory

---

## Edge Cases

- forgotten context
- outdated content
- archive scale growth

---

## Design Considerations

The retrieval experience should remain effective regardless of archive age.

---

# Use Case Relationships

Capture

↓

Preservation

↓

Context

↓

Relationships

↓

Retrieval

↓

Action

↓

Trust

Most use cases reinforce this progression.

---

# Priority Hierarchy

Highest Priority

- UC-001
- UC-002
- UC-003
- UC-006
- UC-007

High Priority

- UC-004
- UC-005
- UC-009
- UC-015

Medium Priority

- UC-008
- UC-010
- UC-011
- UC-012
- UC-013
- UC-014

---

# Closing Principle

Use cases should describe real situations rather than ideal behavior.

The purpose of Mimo is not to manage information.

The purpose is to help people reconnect with information when it becomes useful again.