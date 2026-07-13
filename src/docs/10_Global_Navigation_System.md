# 10_Global_Navigation_System.md

# Global Navigation System

## Purpose

The navigation system is designed to provide orientation without interrupting exploration.

It should always help visitors understand:

* where they are;
* where they can go;
* how to continue exploring.

Navigation should never become the focus of the interface.

Instead, it should quietly support the overall experience.

---

# Navigation Philosophy

The portfolio encourages exploration rather than forcing linear navigation.

Visitors should always feel in control.

The navigation system follows one fundamental principle:

> Give users agency while maintaining orientation.

At every moment, visitors should be free to:

* continue reading;
* jump elsewhere;
* return to a previous section;
* leave the current page.

The interface should support these decisions naturally.

---

# Navigation Levels

The portfolio contains multiple navigation layers.

Each serves a different purpose.

---

## Level 01 — Global Navigation

Shared across the entire portfolio.

Purpose:

Move between primary pages.

Pages:

* Home
* Projects
* Playground
* About
* Contact

This navigation should remain consistent everywhere.

---

## Navbar Layout

Desktop navigation is divided into three visual areas.

### Left

Personal signature element.

A stylized 3D head acts as a recognizable identity element.

Purpose:

Communicate authorship.

It is not intended to function as a Home button.

The element may receive subtle idle animation.

---

### Center

Primary navigation.

Contains:

* Home
* Projects
* Playground

These represent the core portfolio experience.

They should receive the highest visual hierarchy.

---

### Right

Secondary navigation.

Contains:

* About
* Contact

These pages support the primary narrative.

They should remain visually connected while receiving slightly lower emphasis.

---

# Navbar Behaviour

Default:

Visible.

Scrolling downward:

Navbar hides to maximize reading space.

Scrolling upward:

Navbar smoothly reappears.

The transition should feel lightweight and responsive.

The goal is to maximize content while preserving accessibility.

---

# Active State

The current page should always be identifiable.

The active state should remain subtle.

Avoid strong visual emphasis.

---

# Mobile Navigation

The same hierarchy should be preserved.

The interaction pattern may change.

Hierarchy must not.

---

# Level 02 — Projects Navigation

Purpose:

Allow visitors to move between professional projects.

Navigation should always remain voluntary.

The interface should never push users away from the current project.

Possible navigation paths:

* return to Projects
* open another project
* continue reading

Navigation should support exploration without distraction.

---

# Projects Overview

The Projects page acts as the central navigation hub.

Visitors should naturally return here when looking for another case study.

The architecture should encourage this behaviour without forcing it.

---

# Level 03 — Case Study Navigation

Each case study contains its own navigation layer.

Purpose:

Maintain orientation inside long-form content.

---

## Sidebar Navigation

A persistent sidebar displays:

* current section
* completed sections
* remaining sections

Visitors should always understand:

* where they are;
* how much content remains;
* what sections are still available.

The sidebar should also allow direct navigation between chapters.

---

# End of Case Study

When reaching the end of a project, visitors should receive natural continuation options.

Possible actions:

* Next Project
* Previous Project
* Back to Projects
* Explore Playground

The reading experience should never end abruptly.

---

# Level 04 — Playground Navigation

The Playground intentionally follows a different exploration model.

Navigation happens spatially rather than sequentially.

Users discover experiments by exploring the canvas.

The experience should feel open.

Not guided.

---

# Orientation

Even inside exploratory interfaces, users should never feel lost.

The interface should always communicate:

* current focus
* available interactions
* possible next actions

Exploration should remain intentional.

---

# Level 05 — Utility Navigation

Separate from content navigation.

Provides access to portfolio settings.

Implemented through a floating Control Center.

The Control Center remains available throughout the portfolio.

Its behaviour is defined in a dedicated specification document.

---

# Footer Navigation

The footer is intentionally minimal.

It is not a secondary sitemap.

Its purpose is informational.

Content includes:

* copyright
* last update

Avoid repeating navigation links already available in the navbar.

---

# External Navigation

Links leading outside the portfolio should clearly communicate that behaviour.

Examples:

* LinkedIn
* Behance
* GitHub
* X

External links should open in a new tab.

Visitors should never lose their place within the portfolio.

---

# Motion Guidelines

Navigation motion should remain subtle.

Examples:

* navbar hide/show
* hover feedback
* active state transitions
* sidebar updates

Motion should support orientation rather than attract attention.

---

# React Philosophy

Navigation components should remain reusable.

Suggested structure:

MainLayout

↓

Navbar

↓

Page Content

↓

Footer

Additional navigation components:

SidebarNavigation

FilterBar

ControlCenter

Each should remain independent.

Pages should consume these components rather than implementing navigation individually.

---

# Accessibility

Navigation should support:

* keyboard interaction
* visible focus states
* semantic navigation landmarks
* screen reader compatibility

Accessibility should never be sacrificed for visual simplicity.

---

# Future Evolution

The navigation architecture should support future additions such as:

* Journal
* Search
* Localization
* New portfolio sections

The global navigation should remain flexible without requiring structural redesign.

---

# Overall Experience

Visitors should never ask:

"Where am I?"

or

"What should I do next?"

The navigation system should quietly answer these questions while leaving complete freedom of exploration.

Good navigation is almost invisible.

It guides without controlling.
