# 10-InformationArchitecture.md

Version: 1.0
Status: Frozen Candidate

---

# Purpose

This document defines the structural information architecture of Mimo.

It describes:

- what exists in the system
- how information is organized
- how objects relate to one another
- how users navigate information
- how retrieval is prioritized

This document intentionally focuses on structure rather than interface design.

It should remain stable even if visual layouts evolve.

---

# Information Architecture Goal

The purpose of the architecture is not to organize information.

The purpose is to help users retrieve information.

Information architecture should strengthen:

- retrieval confidence
- recognition
- context reconstruction
- relationship discovery
- future usefulness

The architecture should reduce:

- organizational burden
- maintenance effort
- retrieval friction
- cognitive load

---

# Core IA Principles

---

## Retrieval First

The architecture exists to support retrieval.

Storage is supporting infrastructure.

Retrieval is the primary outcome.

---

## Recognition Before Recall

Information should be structured to support recognition.

Not perfect memory.

---

## Relationships Over Hierarchies

Information should be connected through meaning.

Not constrained by rigid folder structures.

---

## Context Preserves Meaning

Information should retain clues explaining why it mattered.

---

## Organization Is Optional

The architecture should continue functioning even when users never create collections or organizational structures.

---

# Primary Objects

---

# Memory Card

## Definition

The primary object within Mimo.

Every captured discovery becomes a Memory Card.

---

## Purpose

Preserve:

- access
- context
- meaning
- relationships
- future usefulness

---

## Examples

- article
- video
- product
- destination
- recommendation
- tutorial

---

## Importance

All major workflows revolve around Memory Cards.

---

# Collection

## Definition

An optional grouping of Memory Cards.

---

## Purpose

Accelerate retrieval when useful.

---

## Importance

Secondary object.

Collections support Memory Cards.

Memory Cards do not exist to support Collections.

---

# Relationship

## Definition

A meaningful connection between Memory Cards.

---

## Examples

Shared:

- topic
- person
- location
- activity
- recommendation source
- goal

---

## Purpose

Create additional retrieval paths.

---

# Context

## Definition

Information explaining why a Memory Card mattered.

---

## Types

Human Context

System Context

Source Context

---

## Purpose

Preserve meaning across time.

---

# User

## Definition

Owner of Memory Cards, Collections and Personal Context.

---

## Purpose

Source of intent and meaning.

---

# Object Relationships

Memory Cards form the center of the architecture.

---

User

↓

Memory Cards

↓

Context

↓

Relationships

↓

Collections

---

The architecture should never elevate Collections above Memory Cards.

---

# Navigation Domains

The product contains three primary navigation domains.

---

# Home

Role:

Retrieval Workspace

---

Purpose

- retrieve information
- capture links
- revisit activity
- rediscover memories

---

Contains

- Search / Paste Link
- Recent Activity
- Related Memories

---

# Library

Role:

Archive Exploration

---

Purpose

- browse memories
- explore archive contents
- access collections

---

Contains

- Memory Grid
- Filters
- Collections

---

# Profile

Role:

Preferences And Administration

---

Purpose

- account management
- permissions
- preferences
- integrations

---

Contains

- account settings
- preferences
- permissions
- application information

---

# Retrieval Hierarchy

Not all retrieval methods are equally important.

The architecture prioritizes retrieval mechanisms in the following order.

---

Primary Retrieval

Search

---

Secondary Retrieval

Recent Activity

Related Memories

---

Tertiary Retrieval

Collections

Library Browsing

---

Implication

The interface should emphasize retrieval methods according to this hierarchy.

---

# Recognition Hierarchy

When viewing information, users should encounter content in the following order.

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

## Recognition Layer

Helps answer:

Is this what I am looking for?

---

## Context Layer

Helps answer:

Why did this matter?

---

## Understanding Layer

Helps answer:

What does this represent?

---

## Relationship Layer

Helps answer:

What else is connected?

---

## Action Layer

Helps answer:

What can I do now?

---

# Relationship Model

Relationships are associative.

Not hierarchical.

---

## Examples

Same:

- trip
- project
- location
- topic
- creator
- recommendation source
- activity

---

## Non-Examples

Folder Trees

Category Trees

Nested Hierarchies

---

## Purpose

Relationships increase retrieval flexibility.

Users frequently remember adjacent information rather than exact information.

---

# Context Model

Context exists to preserve meaning.

---

# Human Context

Provided directly by the user.

---

Examples

Rahul recommended this.

Compare with blue version.

Try next leg day.

---

# System Context

Generated through system understanding.

---

Examples

Possible Future Purchase.

Travel Reference.

Workout To Try.

---

# Source Context

Derived from the discovery environment.

---

Examples

Instagram

Reddit

YouTube

Browser

---

# Metadata Model

Metadata exists to support retrieval.

Metadata is not the product.

---

## Examples

- title
- URL
- source
- creation date
- thumbnail
- timestamps

---

## Principle

Metadata should assist retrieval rather than dominate the experience.

---

# Collection Model

Collections remain optional.

---

Users may:

- create collections
- rename collections
- remove memories
- browse collections

---

Users should never be required to create collections to achieve retrieval success.

---

# Navigation Ownership

Each navigation domain owns distinct responsibilities.

---

Home Owns

- retrieval
- rediscovery
- capture

---

Library Owns

- browsing
- archive exploration
- collections

---

Profile Owns

- preferences
- permissions
- account management

---

Responsibility overlap should be minimized.

---

# Structural Anti-Patterns

The architecture intentionally rejects the following structures.

---

## Deep Folder Hierarchies

Reason

Maintenance burden increases over time.

---

## Mandatory Categorization

Reason

Capture friction increases.

---

## Dashboard-Centric Architecture

Reason

Shifts focus from retrieval toward administration.

---

## Feed-Centric Architecture

Reason

Encourages consumption rather than retrieval.

---

## Taxonomy Maintenance Systems

Reason

Users should not be required to manage information structures continuously.

---

# Information Flow Model

Discovery

↓

Capture

↓

Memory Card

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

This flow represents the fundamental path through which value is created within the system.

---

# Closing Architecture

The architecture of Mimo revolves around a single idea:

Memory Cards preserve future usefulness.

Everything else in the system exists to make those memories easier to find, understand and act upon.

When evaluating future features, contributors should ask:

Does this strengthen retrieval, context, relationships or future usefulness?

If not, its place within the architecture should be questioned.