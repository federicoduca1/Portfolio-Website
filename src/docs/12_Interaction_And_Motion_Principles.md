# 11_Data_Model.md

# Data Model

## Purpose

The portfolio should be entirely content-driven.

Pages should never own content directly.

Instead, every page should retrieve structured data and render reusable components.

This approach ensures:

* scalability
* maintainability
* consistency
* future extensibility

Adding a new project should require updating the data, not rewriting the interface.

---

# Data Philosophy

Separate:

Content

from

Presentation.

React components should only describe how data is displayed.

They should never contain portfolio-specific information.

---

# Data Organization

Suggested structure:

```text
src/

data/

│

├── projects.js

├── experiments.js

├── navigation.js

├── socialLinks.js

├── about.js

├── designJourney.js

├── perspectiveExplorer.js

└── settings.js
```

Each file represents a specific content domain.

---

# Projects

Professional work.

Each project should expose structured information.

Suggested fields:

* id
* slug
* title
* category
* description
* thumbnail
* featured
* technologies
* year
* role

Future fields may include:

* awards
* duration
* status
* prototype
* repository

Projects should never be hardcoded inside pages.

---

# Case Study Content

Each project should reference its own structured content.

Suggested model:

Project

↓

Hero

↓

Overview

↓

Sections

↓

Technical

↓

Reflection

↓

Navigation

The architecture should support projects with different structures.

Not every project requires identical chapters.

---

# Featured Projects

The Home page should never manually select projects.

Instead:

featured: true

determines which projects appear inside the Featured section.

Changing featured projects should only require updating the data.

---

# Playground Experiments

Experiments are stored independently from Projects.

Suggested fields:

* id
* slug
* title
* description
* thumbnail
* position
* medium
* tags
* status

Canvas position should belong to the data rather than the interface.

---

# Navigation Data

Navigation should be configurable.

Suggested structure:

Navigation Items

↓

Label

↓

Route

↓

Order

↓

Visibility

This allows future additions without modifying the Navbar component.

---

# Social Links

Store all external links in one location.

Examples:

* Email
* LinkedIn
* Behance
* GitHub
* X

Suggested fields:

* name
* url
* icon
* visibility
* priority

The Contact page simply renders these entries.

---

# About Content

Personal information should remain structured.

Examples:

Identity Statements

↓

Journey Timeline

↓

Perspective Explorer

↓

Gallery

Each content block should remain independent.

---

# Design Journey

Suggested fields:

* step
* title
* description

Ordering should come from the data itself.

---

# Perspective Explorer

Each perspective item should expose:

* id
* title
* description
* gallery
* optional quote

The React component should simply render the currently selected entry.

---

# Global Settings

General portfolio configuration should remain centralized.

Examples:

* portfolio title
* author
* current language
* current theme
* accent color
* latest update
* footer information

Future settings may include:

* feature flags
* experimental sections
* analytics configuration

---

# React Philosophy

Every page should consume data.

Example:

Projects Page

↓

Projects Data

↓

Project Grid

↓

Project Card

Pages should compose.

Components should render.

Data should describe.

---

# Single Source of Truth

Every piece of information should exist in only one place.

Example:

A project title should never be duplicated across multiple files.

If the title changes, only the data should be updated.

The interface should automatically reflect the change.

---

# Future Scalability

The architecture should support:

* additional projects
* Journal articles
* talks
* publications
* awards
* new experiment categories
* localization

without requiring structural changes.

---

# Content Evolution

The portfolio is expected to grow throughout my career.

Therefore:

Adding content should always be easier than modifying the interface.

Whenever possible:

Create new data.

Reuse existing components.

Avoid creating new page-specific implementations.

---

# Overall Principle

The interface should never know *what* it is rendering.

It should only know *how* to render it.

This separation allows the portfolio to evolve naturally while keeping the codebase clean, modular and maintainable.
