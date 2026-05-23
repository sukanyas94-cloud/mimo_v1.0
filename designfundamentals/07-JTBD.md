# 07-JTBD.md

Version: 1.0
Status: Frozen Candidate

---

# Purpose

This document defines the Jobs To Be Done (JTBD) that Mimo is hired to perform.

Jobs describe progress users are trying to make in their lives.

They are independent of:

- demographics
- professions
- age groups
- interface designs
- implementation details

The same job may exist across many different types of users.

Understanding jobs helps ensure the product remains focused on outcomes rather than features.

---

# JTBD Framework

Each job is expressed using the following structure:

When...

I want to...

So I can...

This format emphasizes user motivation rather than solution design.

---

# Functional Jobs

---

## JTBD-F01 — Preserve Something Valuable Before It Is Lost

### When

I discover information that may be useful in the future

### I Want To

save it immediately

### So I Can

access it later if it becomes relevant.

---

### Examples

- article
- video
- travel recommendation
- restaurant
- product
- tutorial
- workout
- marketplace listing

---

### Success Signals

- capture success rate
- capture completion time
- share-sheet completion rate
- manual save completion rate

---

# JTBD-F02 — Recover Something I Only Partially Remember

### When

I know I saved something previously

### I Want To

find it using incomplete memory

### So I Can

reuse it without frustration.

---

### Examples

- green dress
- thing Rahul shared
- Kyoto hotel
- AI article
- leg workout reel

---

### Success Signals

- retrieval success rate
- search success rate
- retrieval completion time
- retrieval abandonment rate

---

# JTBD-F03 — Understand Why It Mattered

### When

I rediscover a previously saved item

### I Want To

quickly understand its original relevance

### So I Can

decide whether it is still useful.

---

### Examples

- why it was saved
- who recommended it
- what problem it solved
- what goal it supported

---

### Success Signals

- detail view engagement
- context usage
- personal context usage
- successful follow-on actions

---

# JTBD-F04 — Reconnect Related Information

### When

I am exploring a topic or goal

### I Want To

see connected information

### So I Can

reconstruct broader context.

---

### Examples

- travel planning
- apartment research
- learning journeys
- workout references
- purchasing decisions

---

### Success Signals

- related memory usage
- relationship navigation rate
- multi-memory retrieval sessions

---

# JTBD-F05 — Reuse Information Quickly

### When

I find the information I need

### I Want To

act on it immediately

### So I Can

benefit from it without additional effort.

---

### Examples

- open original
- share with someone
- revisit content
- make a purchase
- continue research

---

### Success Signals

- open-original actions
- share actions
- post-retrieval action rate

---

# JTBD-F06 — Retrieve Information Across Time

### When

weeks, months or years have passed

### I Want To

recover information regardless of when it was saved

### So I Can

continue benefiting from previous discoveries.

---

### Success Signals

- long-term retrieval success
- retrieval of older content
- archive usage

---

# Emotional Jobs

---

## JTBD-E01 — Feel Confident My Discoveries Are Safe

### When

I save something important

### I Want To

trust that it will remain accessible

### So I Can

stop worrying about losing it.

---

### Desired Outcome

Peace of mind.

---

# JTBD-E02 — Feel Less Dependent On Perfect Memory

### When

I forget details

### I Want To

rely on the system rather than my memory

### So I Can

recover information confidently.

---

### Desired Outcome

Reduced cognitive burden.

---

# JTBD-E03 — Feel Organized Without Maintaining A System

### When

I accumulate large amounts of information

### I Want To

find things easily

### So I Can

avoid spending time organizing everything.

---

### Desired Outcome

Effortless control.

---

# JTBD-E04 — Feel Rewarded For Past Curiosity

### When

something I saved becomes useful later

### I Want To

recover it easily

### So I Can

benefit from discoveries I made in the past.

---

### Desired Outcome

Validation that saving information was worthwhile.

---

# JTBD-E05 — Feel In Control Of My Information

### When

AI contributes context or relationships

### I Want To

understand what the system is doing

### So I Can

maintain confidence in outcomes.

---

### Desired Outcome

Trust without surrendering agency.

---

# Social Jobs

---

## JTBD-S01 — Preserve Recommendations From People I Trust

### When

someone shares something valuable

### I Want To

save it with context

### So I Can

remember both the recommendation and the source.

---

### Examples

- friend recommendations
- family recommendations
- colleague recommendations

---

### Success Signals

- personal context creation
- recommendation retrieval

---

# JTBD-S02 — Reuse Trusted Recommendations

### When

I need information someone previously shared

### I Want To

recover it quickly

### So I Can

act on advice I trust.

---

### Success Signals

- retrieval of recommendation-based memories
- repeat usage of recommendation memories

---

# JTBD-S03 — Share Previously Saved Information

### When

someone needs information I already saved

### I Want To

share it quickly

### So I Can

help them without searching again.

---

### Success Signals

- share actions
- retrieval-to-share conversion

---

# Anti-Jobs

These are jobs Mimo is intentionally not designed to perform.

---

## AJ-01 — Project Management

Users are not hiring Mimo to:

- manage tasks
- track projects
- plan roadmaps
- coordinate work

---

## AJ-02 — Knowledge Base Authoring

Users are not hiring Mimo to:

- write documentation
- create wikis
- build databases
- author structured content

---

## AJ-03 — Social Engagement

Users are not hiring Mimo to:

- gain followers
- collect likes
- consume social feeds
- build audiences

---

## AJ-04 — Content Consumption

Users are not hiring Mimo to endlessly browse information.

The objective is retrieval and usefulness.

Not attention retention.

---

## AJ-05 — Organizational Maintenance

Users are not hiring Mimo to:

- manage folders
- maintain tags
- reorganize structures
- perform information housekeeping

---

# Job Relationships

Many jobs naturally reinforce one another.

Example:

Preserve Something Valuable Before It Is Lost

↓

Recover Something I Only Partially Remember

↓

Understand Why It Mattered

↓

Reuse Information Quickly

↓

Feel Confident My Discoveries Are Safe

↓

Preserve More Information

This loop contributes directly to retrieval confidence.

---

# Primary Job Hierarchy

Not all jobs are equally important.

Priority order:

1. Preserve Something Valuable Before It Is Lost
2. Recover Something I Only Partially Remember
3. Understand Why It Mattered
4. Reconnect Related Information
5. Reuse Information Quickly

Emotional and social jobs support these core functional jobs.

---

# Success Definition

Users are not hiring Mimo to store URLs.

Users are hiring Mimo to preserve future usefulness.

The product succeeds when users can reliably reconnect with information at the moment it becomes relevant again.

---

# Closing Principle

Every feature should strengthen at least one meaningful job.

If a feature does not improve preservation, retrieval, understanding, rediscovery or action, it should be questioned before inclusion.