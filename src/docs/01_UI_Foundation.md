# 01_UI_Foundation.md

# UI Foundation

## Purpose

This document defines the visual foundation of the portfolio.

It is **not** the final design system.

Its purpose is to establish a coherent visual direction that every future component should follow while allowing room for iteration during development.

Whenever visual decisions are required, they should be consistent with the principles described in this document.

---

# Visual Direction

The portfolio should feel like a **digital laboratory** rather than a marketing website.

Keywords:

* Editorial
* Clean
* Modern
* Intentional
* Technical
* Human
* Curious
* Spacious

The interface should never compete with the content.

Visual design exists to support storytelling and usability.

---

# General Design Principles

## Content First

Content is always the primary visual element.

Typography, spacing and hierarchy should guide attention.

Avoid decorative UI.

---

## Clarity Over Decoration

Prefer:

* whitespace
* typography
* alignment
* hierarchy

Instead of:

* unnecessary gradients
* decorative shapes
* excessive shadows
* visual noise

---

## Consistency

Spacing, typography, cards and interactions should follow reusable patterns.

Avoid creating unique visual solutions unless they improve the experience.

---

# Layout System

Desktop-first approach.

Primary design target:

Desktop screens.

Tablet and mobile layouts should adapt from the desktop experience rather than driving the initial design.

---

## Content Width

Use a centered content container.

Approximate maximum width:

1200–1400px.

Sections should breathe.

Avoid stretching content across the full viewport.

---

## Vertical Rhythm

Create generous spacing between sections.

The experience should feel calm.

Never compress multiple sections together.

---

# Spacing System

Base spacing should follow an 8px grid.

Recommended values:

* 4px
* 8px
* 16px
* 24px
* 32px
* 48px
* 64px
* 96px
* 128px

Use these values consistently across the project.

---

# Typography

Typography is one of the strongest visual elements of the portfolio.

It should communicate confidence without becoming expressive.

---

## Font Style

Modern sans-serif.

Recommended families:

* Geist
* Inter

Do not introduce multiple font families.

Typography hierarchy should be sufficient.

---

## Hierarchy

Approximate desktop sizes:

Hero title:
80–96px

Section titles:
48–64px

Subtitles:
24–32px

Body:
18–20px

Metadata:
14–16px

These values may be adjusted during visual refinement.

---

# Color System

Keep the color palette minimal.

The portfolio should not rely on color for identity.

---

## Light Theme

Background:
Very light neutral.

Primary text:
Near black.

Secondary text:
Medium gray.

---

## Dark Theme

Background:
Very dark neutral.

Primary text:
Near white.

Secondary text:
Light gray.

---

## Accent Color

The global accent system uses `accent-600: #3B83F6` as its primary tone.

Tonal scale:

* `accent-50: #EFF6FF`
* `accent-100: #DBEAFE`
* `accent-200: #BFDBFE`
* `accent-300: #93C5FD`
* `accent-400: #60A5FA`
* `accent-500: #4B92F7`
* `accent-600: #3B83F6`
* `accent-700: #2568DC`
* `accent-800: #1F54B5`
* `accent-900: #1D438E`

Semantic aliases:

* `accent`: primary active state
* `accent-hover`: accessible accent text and hover state
* `accent-active`: pressed state
* `accent-soft`: subtle accent surface
* `focus-ring`: keyboard focus
* `link-hover`: reusable primary-link hover

Purpose:

* interactive words
* links
* active states
* selected filters
* progress indicators
* subtle highlights

Use accent on small interactive states, markers and structural details. Keep
large surfaces, body copy, inactive navigation, section backgrounds and
decorative ambient icons neutral. Prefer `accent-700` or darker for normal-size
accent text on white; `accent-600` is reserved for large text, indicators,
underlines and focus rings.

It supports interaction, not branding.

---

# Border Radius

Keep shapes modern but restrained.

Recommended direction:

Cards:
20–24px

Buttons:
12px or pill-shaped depending on context.

Small UI elements:
8px

Avoid extremely sharp or overly rounded interfaces.

---

# Shadows

Use shadows only to communicate elevation.

Never use shadows as decoration.

Hover elevation should remain subtle.

---

# Card Philosophy

Cards are one of the core reusable components.

Every card should prioritize:

* visual preview
* clear hierarchy
* concise metadata

Different card types may exist, but they should share the same design language.

Examples:

* Featured Project Card
* Project Card
* Playground Card

Each card type may vary in size and layout while remaining visually consistent.

---

# Hover Behaviour

Hover should communicate possibility.

Standard hover behaviour:

* slight vertical lift
* soft shadow
* subtle image zoom

Purpose:

Create the feeling of entering the project.

Avoid exaggerated animations.

---

# Buttons

Use as few button styles as possible.

Primary:

Filled.

Used for important CTAs.

Secondary:

Outline or text button.

Used for navigation and secondary actions.

Buttons should never dominate the interface.

---

# Icons

Icons should remain minimal.

Recommended:

Lucide React.

Icons should support actions, not replace text.

---

# Motion Philosophy

Motion is part of the experience, not decoration.

Every animation should answer at least one of these questions:

* Does it explain?
* Does it guide?
* Does it reinforce hierarchy?
* Does it improve continuity?

If the answer is no, the animation should not exist.

---

## Motion Principles

Prefer:

* fade
* translate
* scale
* opacity
* stagger

Avoid:

* unnecessary rotations
* bouncing effects
* exaggerated elastic animations

Motion should feel intentional and calm.

---

# CSS vs GSAP

Use CSS transitions for:

* hover states
* button feedback
* card interactions
* simple opacity changes

Use GSAP only for:

* scroll storytelling
* timeline animations
* section reveals
* complex sequences
* coordinated interactions

Do not use GSAP where CSS is sufficient.

---

# Responsive Philosophy

Desktop is the primary experience.

Mobile should preserve:

* hierarchy
* clarity
* storytelling

Layouts may change.

Content hierarchy must not.

---

# Accessibility

Always consider:

* sufficient contrast
* readable typography
* visible focus states
* keyboard navigation
* semantic HTML

Accessibility should be built into the interface from the beginning.

---

# Future Evolution

This document defines version 1 of the UI Foundation.

Specific elements such as:

* final color palette
* complete design tokens
* advanced motion language
* component variants

will evolve during development without changing the principles described here.
