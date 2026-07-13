# 02_Technical_Architecture.md

# Technical Architecture

## Purpose

This document defines the technical architecture of the portfolio.

Its goal is to provide a scalable, maintainable and modular project structure that can evolve over time without requiring major refactoring.

The architecture should prioritize clarity over unnecessary abstraction.

---

# Technology Stack

Current stack:

* React
* Vite
* React Router
* Tailwind CSS
* GSAP + ScrollTrigger

Additional technologies should only be introduced when they solve a concrete problem.

Avoid adding libraries preemptively.

---

# Architecture Philosophy

The portfolio should behave like a real digital product.

The codebase must be:

* modular
* predictable
* maintainable
* reusable
* scalable

Every implementation should favor long-term readability over short-term speed.

---

# Folder Structure

Recommended structure:

```text
src/

│
├── assets/
│
├── components/
│
├── pages/
│
├── layouts/
│
├── data/
│
├── hooks/
│
├── styles/
│
├── utils/
│
├── App.jsx
│
└── main.jsx
```

Each folder has a single responsibility.

---

# Folder Responsibilities

## assets/

Contains static resources.

Examples:

* images
* icons
* videos
* PDFs
* fonts

Avoid storing data here.

---

## components/

Reusable UI components.

Examples:

* Navbar
* Footer
* Button
* Cards
* Section titles
* Filter components

Components should remain generic whenever possible.

Avoid page-specific logic.

---

## pages/

Top-level application pages.

Examples:

* Home
* Projects
* Playground
* About
* Contact

Each page should compose reusable components rather than implementing everything directly.

---

## layouts/

Application layouts.

Initially:

MainLayout

Responsibilities:

* Navbar
* Main content
* Footer

Future layouts may be added if necessary.

---

## data/

Static structured data.

Examples:

* projects
* experiments
* social links
* navigation
* design journey
* perspective explorer

Avoid hardcoding content inside components whenever possible.

---

## hooks/

Custom React hooks.

Examples:

* scroll behaviour
* viewport detection
* copy-to-clipboard
* reusable interaction logic

Only create hooks when logic is reused.

---

## styles/

Global styles.

Examples:

* typography
* variables
* utility classes
* global resets

Avoid page-specific styling here.

---

## utils/

Pure utility functions.

Examples:

* formatting
* helpers
* calculations

Utilities should never contain UI logic.

---

# Component Philosophy

Components should be:

* small
* reusable
* predictable

Each component should have one clear responsibility.

Avoid "mega components".

---

Good example:

ProjectCard

Responsibilities:

* display project preview
* handle hover state
* expose navigation action

Not responsible for:

* fetching data
* filtering
* layout decisions

---

# Data Driven Development

Whenever possible:

UI should be generated from structured data.

Example:

Instead of:

```jsx
<ProjectCard ... />
<ProjectCard ... />
<ProjectCard ... />
```

Prefer:

```jsx
projects.map(project => ...)
```

This makes the portfolio easier to update as new projects are added.

---

# Routing

React Router should manage all navigation.

Initial routes:

/

/projects

/playground

/about

/contact

Future routes:

/projects/:slug

/playground/:slug (optional)

Avoid unnecessary nested routing unless justified.

---

# State Management

Keep state as local as possible.

Prefer:

React state

Props

Context only when necessary.

Do not introduce external state management libraries.

The portfolio does not require Redux or similar solutions.

---

# Styling Strategy

Use Tailwind CSS as the primary styling solution.

Global design rules should live inside global styles.

Avoid inline style objects unless strictly necessary.

Prefer reusable utility patterns.

---

# Animation Strategy

CSS handles:

* hover
* transitions
* simple effects

GSAP handles:

* scroll storytelling
* timelines
* complex sequences
* coordinated motion

Do not use GSAP for simple hover interactions.

---

# File Organization

Prefer:

One component per file.

Keep files reasonably small.

Avoid files exceeding a few hundred lines unless truly necessary.

---

# Naming Conventions

Components:

PascalCase

Example:

ProjectCard.jsx

Hooks:

camelCase starting with "use"

Example:

useScrollDirection.js

Utilities:

camelCase

Example:

formatDate.js

Data:

camelCase

Example:

projects.js

---

# Scalability

The architecture should allow future additions such as:

* Journal
* CMS integration
* new project categories
* additional Playground experiences
* localization
* analytics

without changing the overall folder organization.

---

# Reusability

Before creating a new component, always ask:

Can an existing component be reused?

If not:

Can it be generalized?

Duplicate code should be avoided whenever possible.

---

# Code Quality

Prioritize:

* readable names
* small functions
* descriptive props
* clear hierarchy

Avoid:

* deeply nested JSX
* duplicated logic
* premature optimization

---

# Development Workflow

New features should generally follow this order:

1. Define the data model.
2. Create the reusable component.
3. Integrate it into the page.
4. Add styling.
5. Add interactions.
6. Add animations if necessary.

Do not start from animations.

---

# Architectural Decisions

If a significantly better technical solution exists:

* explain the trade-offs;
* justify the proposal;
* ask for confirmation before changing the architecture.

Architecture should evolve intentionally, never accidentally.
