# 05_Projects_Specification.md

# Projects Specification

## Purpose

The Projects page is the main archive of my professional work.

Unlike the Home page, its purpose is not storytelling.

Its purpose is exploration.

Visitors should be able to quickly understand:

* what I have worked on;
* the variety of projects available;
* which project they want to explore.

This page should feel calm, structured and highly scannable.

---

# Experience Goal

The Projects page should communicate professionalism.

Users should never feel overwhelmed.

Instead, they should feel that every project has enough space to be appreciated.

The page should encourage exploration while remaining extremely simple to navigate.

---

# Content Strategy

The page presents professional case studies.

Projects represent complete design processes.

Each project should demonstrate:

* research
* problem solving
* UX thinking
* interaction design
* visual execution

Experimental work belongs to the Playground page and should never appear here.

---

# Page Structure

```text
Navbar

↓

Page Title

↓

Short Introduction

↓

Filter Bar

↓

Projects Grid

↓

Footer
```

The page should remain intentionally simple.

No unnecessary sections should be introduced.

---

# Page Header

## Title

Projects

The title should immediately communicate the purpose of the page.

---

## Supporting Copy

A short paragraph introducing the collection.

The copy should explain that these are complete design case studies documenting both the process and the final outcome.

Keep it concise.

---

# Filter System

The filter system exists primarily for scalability.

Even if only a few projects are available initially, the architecture should already support future growth.

---

## Filter Behaviour

Selecting a filter should not dramatically rearrange the page.

Preferred behaviour:

Matching projects remain fully visible.

Non-matching projects become visually de-emphasized.

Possible treatments:

* reduced opacity
* grayscale
* disabled interaction

This preserves spatial orientation and avoids abrupt layout changes.

---

## Future Scalability

Filters should easily support future categories such as:

* Product Design
* UX/UI
* XR
* Game Design
* Industrial Design
* Creative Coding

The architecture should allow adding new categories without modifying the filtering system.

---

# Projects Grid

The grid is the primary content area.

It should prioritize readability over density.

Projects should have enough breathing room.

Avoid creating a crowded gallery.

---

# Project Cards

Each project is represented by a reusable ProjectCard component.

The card should communicate enough information for visitors to decide whether to enter the case study.

---

## Card Content

Each card contains:

* project preview
* title
* project category
* short description

Additional metadata may be introduced later if needed.

---

## Hover Behaviour

Hover should suggest exploration.

Standard behaviour:

* subtle elevation
* soft shadow
* slight preview zoom

Additionally:

When hovering a card, surrounding cards may become slightly de-emphasized.

Purpose:

Guide attention toward the selected project while maintaining context.

This effect should remain subtle.

---

## Click Behaviour

Clicking a project opens the dedicated case study.

Navigation should feel immediate and predictable.

---

# Motion Guidelines

Motion should remain minimal.

Recommended animations:

* section reveal
* card hover
* page transitions (optional)

Avoid storytelling animations on this page.

Projects should remain the focus.

---

# React Philosophy

The page should be completely data-driven.

The grid should never contain hardcoded projects.

Instead:

Projects data

↓

ProjectGrid

↓

ProjectCard

The page is responsible for composition.

Cards are responsible for presentation.

---

# Data Structure

Each project should expose structured information such as:

* title
* slug
* category
* description
* thumbnail
* featured (boolean)

Additional properties may be introduced later.

The page should remain compatible with future project expansion.

---

# Future Evolution

Potential future additions:

* search
* sorting
* project status
* technologies
* awards
* publication year

These additions should integrate naturally without requiring structural changes.

The page should remain simple regardless of the number of projects.

---

# Overall Experience

Visitors should leave the page thinking:

"I immediately found the projects I was looking for."

The interface should disappear behind the content.

Projects should always remain the protagonists.
