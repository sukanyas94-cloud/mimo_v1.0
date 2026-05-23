# 12-SearchAndRetrievalArchitecture.md

Version: 1.0
Status: Frozen Candidate

---

# Purpose

This document defines the retrieval architecture of Mimo.

Retrieval is the primary value creation mechanism within the product.

Without successful retrieval:

- Memory Cards lose value
- Context loses value
- Relationships lose value
- AI loses value

This document defines:

- retrieval philosophy
- retrieval hierarchy
- retrieval paths
- search behavior
- retrieval signals
- retrieval confidence principles
- retrieval-related constraints

This document intentionally avoids implementation-specific technologies and algorithms.

---

# Core Retrieval Philosophy

Users search with memory.

Not metadata.

People rarely remember:

- exact titles
- exact URLs
- exact timestamps
- exact storage locations

People more commonly remember:

- people
- situations
- colors
- goals
- activities
- recommendations
- fragments

The architecture should support human memory rather than require perfect recall.

---

# Retrieval Definition

Retrieval is the process of reconnecting a user with previously saved information.

Retrieval succeeds when users can locate desired information despite incomplete memory.

Retrieval is not limited to search.

Any mechanism that helps users reconnect with useful information is considered retrieval.

---

# Retrieval Goals

The retrieval architecture should maximize:

- retrieval success
- retrieval confidence
- recognition speed
- context reconstruction
- action readiness

The retrieval architecture should minimize:

- search effort
- memory burden
- organizational dependency
- navigation complexity
- retrieval abandonment

---

# Retrieval Hierarchy

Not all retrieval mechanisms are equally important.

The architecture prioritizes retrieval methods in the following order.

---

## Primary Retrieval

Search

---

## Secondary Retrieval

Recent Activity

Related Memories

---

## Tertiary Retrieval

Collections

Library Browsing

---

## Architectural Implication

Interface emphasis should follow this hierarchy.

Primary retrieval methods receive the highest visibility.

---

# Retrieval Paths

Users should be able to retrieve information through multiple paths.

No single retrieval path should become mandatory.

---

# Path 01 — Fragment Retrieval

Users remember fragments.

---

## Examples

green dress

hotel in Kyoto

AI article

leg workout

---

## Purpose

Support imperfect memory.

---

# Path 02 — Person Retrieval

Users remember people.

---

## Examples

thing Rahul shared

restaurant Priya recommended

---

## Retrieval Sources

- Human Context
- recommendation references
- contextual notes

---

# Path 03 — Context Retrieval

Users remember situations.

---

## Examples

Japan trip

apartment hunting

wedding planning

fitness journey

---

## Retrieval Sources

- Human Context
- System Context
- Relationships

---

# Path 04 — Source Retrieval

Users remember where information originated.

---

## Examples

Instagram

Reddit

YouTube

Pinterest

---

## Retrieval Sources

Source Context

Source Metadata

---

# Path 05 — Collection Retrieval

Users remember organizational structures they created.

---

## Examples

Japan Travel

Apartment Research

Gift Ideas

---

## Purpose

Accelerate retrieval.

Not replace retrieval.

---

# Path 06 — Relationship Retrieval

Users remember adjacent information.

---

## Example

Remembers:

Japan Rail Pass

Needs:

Kyoto Hotel

---

## Purpose

Enable associative navigation.

---

# Path 07 — Recognition Retrieval

Users recognize information visually.

---

## Examples

thumbnail

image

visual memory

source cues

---

## Purpose

Support browsing-based retrieval.

---

# Unified Search Philosophy

Search serves two intents.

---

Intent 01

Retrieve Information

---

Intent 02

Capture Information

---

## Single Entry Point

One input field.

Multiple outcomes.

---

Text Input

↓

Search Flow

---

URL Input

↓

Capture Flow

---

## Principle

Users should not choose between searching and saving.

The system interprets intent.

---

# Search States

Search should support predictable states.

---

# Empty State

No active query.

---

## Purpose

Support quick retrieval without typing.

---

## Surface

Recent Activity

Related Memories

---

# Active Search State

User enters a query.

---

## Purpose

Display retrieval results.

---

## Surface

Search Results

---

# URL Detection State

User enters a URL.

---

## Purpose

Begin capture flow.

---

## Outcome

Save Confirmation Flow

---

# No Results State

No confident retrieval match found.

---

## Purpose

Prevent dead ends.

---

## Surface

- related memories
- recent activity
- contextual suggestions

---

## Principle

No results should remain useful.

---

# Retrieval Signals

Retrieval should leverage multiple signals.

No single signal should dominate.

---

# Recognition Signals

Help users identify content.

Examples:

- thumbnail
- preview image
- title
- source

---

# Human Context Signals

Help users remember intent.

Examples:

Rahul recommended this.

Compare with blue version.

Use during wedding planning.

---

# System Context Signals

Help users understand inferred meaning.

Examples:

Travel Reference

Future Purchase

Workout To Try

---

# Source Signals

Help users remember origin.

Examples:

Instagram

YouTube

Reddit

Pinterest

---

# Relationship Signals

Help users navigate associations.

Examples:

same trip

same activity

same recommendation source

same goal

---

# Activity Signals

Help users reconnect with recently useful information.

Examples:

recently viewed

recently saved

recently shared

recently revisited

---

# Retrieval Confidence Model

Retrieval confidence is one of the most important outcomes within Mimo.

---

Successful Retrieval

↓

Trust

↓

Future Saving

↓

Richer Memory Network

↓

Improved Retrieval

↓

More Successful Retrieval

---

## Implication

Every retrieval success strengthens long-term product value.

---

# Search Result Architecture

Search results should mirror Memory Card architecture.

---

Recognition

↓

Context

↓

Understanding

↓

Relationship Clues

---

## Recognition

Answer:

Is this what I am looking for?

---

## Context

Answer:

Why did this matter?

---

## Understanding

Answer:

What does this represent?

---

## Relationship Clues

Answer:

What else is connected?

---

# Retrieval Failure Philosophy

Retrieval failures should remain constructive.

---

## Avoid

Nothing Found

Dead Ends

Blank States

---

## Prefer

Helpful alternatives.

Examples:

- related memories
- recent activity
- adjacent content
- contextual guidance

---

## Principle

The system should support exploration when certainty is low.

---

# Search Scope

Search should support information across:

- titles
- context
- relationships
- source information
- understanding
- collections

Users should not need to know where information is stored.

---

# Organizational Independence

Retrieval should succeed regardless of organizational effort.

Users should be able to retrieve information even if they never:

- create collections
- organize content
- rename items
- maintain structures

---

# Retrieval Anti-Patterns

The architecture intentionally rejects the following models.

---

## Exact Match Dependency

Reason:

Humans rarely remember exact information.

---

## Search-Only Retrieval

Reason:

Many users retrieve through recognition.

---

## Folder Navigation Dependency

Reason:

Creates maintenance burden.

---

## Advanced Query Syntax

Reason:

Creates cognitive overhead.

---

## Administrative Retrieval

Reason:

Users should retrieve through meaning rather than system structure.

---

## Feed-Based Discovery

Reason:

Encourages content consumption rather than retrieval.

---

# Success Criteria

A successful retrieval architecture enables users to:

- find information using fragments
- recover information after long periods
- reconstruct meaning quickly
- navigate relationships naturally
- act immediately after retrieval

without requiring perfect memory.

---

# Closing Principle

Retrieval succeeds when users can find information despite imperfect memory.

The system should adapt to how people remember rather than forcing people to adapt to how systems store information.

Every retrieval decision should strengthen confidence, reduce effort and preserve future usefulness.