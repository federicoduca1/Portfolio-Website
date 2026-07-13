# 03_Component_Philosophy.md

# Component Philosophy

## Purpose

This document defines how UI components should be designed, structured and reused throughout the portfolio.

The portfolio should not be developed as a collection of isolated pages.

Instead, it should be built as a modular design system composed of reusable components.

Whenever possible, pages should assemble existing components rather than introducing new custom implementations.

---

# General Philosophy

A component is a reusable building block.

It should solve one specific problem and do it well.

Components should be:

* reusable
* predictable
* scalable
* easy to maintain
* independent whenever possible

Avoid creating components that try to solve multiple unrelated problems.

---

# Component Hierarchy

The project follows a hierarchical component architecture.

```text
Pages

↓

Sections

↓

Components

↓

UI Elements
```

Each level has a different responsibility.

---

# Pages

Pages define the overall experience.

Responsibilities:

* assemble sections
* define storytelling
* define content order

Pages should contain very little implementation logic.

Examples:

* Home
* Projects
* Playground
* About
* Contact

---

# Sections

Sections organize content inside a page.

Examples:

* Hero
* Featured Projects
* Playground Preview
* Design Journey
* Contact CTA

A section may contain multiple reusable components.

Sections are responsible for composition.

Not for low-level UI.

---

# Components

Components represent reusable functional blocks.

Examples:

* Project Card
* Playground Card
* Navbar
* Footer
* Filter Bar
* Section Header
* CTA Block
* Timeline Item

Components should receive data.

They should not own application content.

---

# UI Elements

Small reusable primitives.

Examples:

* Button
* Icon
* Badge
* Divider
* Tag
* Tooltip

These should remain completely generic.

---

# Component Responsibilities

Every component should have a single responsibility.

Example:

ProjectCard

Responsible for:

* displaying project information
* hover interaction
* navigation entry

Not responsible for:

* filtering
* page layout
* fetching data

---

# Data-Driven Components

Components should receive structured data through props.

Avoid hardcoded content.

Instead of:

```jsx
<ProjectCard
    title="Nintendo eShop"
/>
```

Prefer:

```jsx
<ProjectCard
    project={project}
/>
```

The component should not care where the data comes from.

---

# Separation of Concerns

Keep responsibilities separated.

Content belongs to:

data/

Presentation belongs to:

components/

Composition belongs to:

pages/

Business logic belongs to:

hooks/
utils/

Avoid mixing these responsibilities.

---

# Reusability Before Creation

Before creating a new component, always ask:

1. Does a similar component already exist?

2. Can it be extended?

3. Can it be generalized?

Only create a new component if reuse is not appropriate.

---

# Composition Over Duplication

Prefer composing existing components.

Example:

Instead of creating:

FeaturedProjectCard

SecondaryProjectCard

LargeProjectCard

SmallProjectCard

Prefer:

ProjectCard

configured through props.

Example:

* size
* featured
* orientation

The component should adapt.

---

# Flexible Components

Components should support different contexts.

Example:

SectionHeader

Can be used in:

* Home
* Projects
* Playground
* About

Changing only:

* title
* description
* alignment

The structure remains identical.

---

# Content Independence

Components should never contain portfolio-specific information.

Avoid:

* project names
* personal text
* fixed labels

Everything should come from structured data whenever possible.

---

# Animation Philosophy

Components should remain functional without animation.

Animation is an enhancement.

Never build a component that only works because of an animation.

Animations should be progressively added.

---

# Component Categories

The portfolio will mainly contain four categories.

---

## Layout Components

Examples:

* MainLayout
* Navbar
* Footer

Purpose:

Structure the application.

---

## Content Components

Examples:

* ProjectCard
* PlaygroundCard
* TimelineItem
* PerspectiveItem

Purpose:

Display structured information.

---

## Navigation Components

Examples:

* FilterBar
* Sidebar Navigation
* Pagination
* Control Center

Purpose:

Help users navigate the portfolio.

---

## UI Components

Examples:

* Button
* Badge
* Tag
* Divider
* Tooltip

Purpose:

Provide reusable interface primitives.

---

# Component Growth

Components should be designed with future evolution in mind.

For example:

ProjectCard

Today:

* image
* title
* category

Tomorrow:

* project status
* technologies
* awards
* featured badge

The component should allow extension without rewriting it.

---

# Naming Convention

Use descriptive names.

Good examples:

ProjectCard

SectionHeader

TimelineItem

ContactCTA

PerspectiveExplorer

Avoid generic names such as:

Card1

Container2

Block

Item

---

# Props Philosophy

Props should be explicit.

Prefer:

```jsx
<ProjectCard
    project={project}
    featured={true}
/>
```

Over:

```jsx
<ProjectCard
    data={project}
    mode={3}
/>
```

Props should explain themselves.

---

# Scalability

The portfolio is expected to grow.

Components should be designed to support:

* additional projects
* more experiments
* future Journal
* localization
* additional pages

without changing their core architecture.

---

# Developer Mindset

Think of every component as part of a design system rather than a one-off implementation.

Whenever implementing a component, ask:

* Can another page reuse it?
* Is the API intuitive?
* Is the responsibility clear?
* Can it evolve without breaking existing pages?

If the answer is yes, the component is likely well designed.
