# 09_Contact_Specification.md

# Contact Specification

## Purpose

The Contact page is the final destination of the portfolio.

Its purpose is simple:

Make it effortless for visitors to reach me.

Unlike other pages, this page should prioritize clarity over storytelling.

The visitor should immediately understand how to contact me and where to find me online.

---

# Experience Goal

The Contact page should feel calm, minimal and welcoming.

It should remove every possible barrier between the visitor and the next action.

Whether someone wants to:

* send an email,
* connect on LinkedIn,
* explore my work,
* download my CV,

they should be able to do so immediately.

The page should communicate openness rather than promotion.

---

# Page Structure

```text
Navbar

↓

Page Title

↓

Short Introductory Copy

↓

Contact Information

↓

Downloads

↓

Footer
```

Everything should remain visible above the fold on desktop whenever possible.

The page should require little or no scrolling.

---

# Section 01 — Introduction

Purpose:

Briefly introduce the page.

The copy should not repeat information from the Home or About pages.

Instead, it should simply communicate availability.

Example tone:

* open
* friendly
* professional
* approachable

Keep the copy extremely concise.

---

# Section 02 — Contact Information

This is the primary content of the page.

Display the most relevant communication channels.

Examples:

* Email
* LinkedIn
* Behance
* X (if dedicated to design)
* GitHub (future)
* Other professional platforms

Each platform should be represented by:

* icon
* platform name
* external link

Avoid unnecessary descriptions.

---

# Contact Hierarchy

Email should receive the highest visual importance.

It is the primary communication channel.

Professional platforms should follow.

Personal or secondary platforms should receive lower emphasis.

---

# Section 03 — Downloads

Provide quick access to downloadable resources.

Initially:

* CV (PDF)
* Portfolio PDF

These should appear as secondary actions.

Downloads should support the portfolio, not dominate it.

---

# Layout

Desktop-first.

Suggested layout:

Two-column composition.

Left:

Title and introductory copy.

Right:

Contact methods and downloads.

The layout should create generous breathing space.

Avoid unnecessary visual elements.

---

# Motion Guidelines

Motion should remain minimal.

Possible interactions:

* button hover
* icon hover
* subtle elevation
* link feedback

Avoid page entrance animations beyond a simple fade.

The content should always remain the focus.

---

# React Philosophy

The page should be almost entirely data-driven.

Social links should come from a structured data source.

Downloads should also be configurable.

This allows future additions without modifying the component structure.

Suggested composition:

Contact

↓

ContactIntro

↓

ContactLinks

↓

Downloads

Each block should remain reusable.

---

# Data Structure

The page should retrieve structured information for:

* social platforms
* email
* downloadable resources

Each contact item should expose:

* name
* icon
* URL
* type
* visibility

Avoid hardcoding links directly inside components.

---

# Future Evolution

Future additions may include:

* scheduling link
* speaking requests
* freelance availability
* contact preferences

The architecture should support these additions without changing the page layout.

---

# Overall Experience

Visitors should leave the Contact page thinking:

"I know exactly how to reach Federico."

The experience should feel simple, immediate and frictionless.

No unnecessary storytelling.

No unnecessary interactions.

Just a clear invitation to continue the conversation.
