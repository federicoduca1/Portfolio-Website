# 13_Control_Center.md

# Control Center Specification

## Purpose

The Control Center is a global utility component available throughout the portfolio.

Its purpose is to provide visitors with control over the portfolio experience without interfering with navigation or content.

Unlike the Navbar, which helps users move through the portfolio, the Control Center allows users to customize how they experience it.

The component should always remain secondary to the content.

---

# Experience Goal

The Control Center should feel like a quiet companion.

Visitors should always know it is available, but it should never compete with the page itself.

The interaction should communicate:

> "You are free to adapt this experience to your preferences."

---

# Design Philosophy

The Control Center is not a settings page.

It is not a developer menu.

It is not a toolbox.

Instead, it acts as a collection of small utility actions that improve the overall experience.

Every option should have a clear purpose.

If a feature does not genuinely improve the visitor's experience, it should not be added.

---

# Placement

The Control Center should remain globally accessible.

Suggested position:

Bottom-right corner.

The component should float above page content while respecting generous margins from the viewport edges.

It should never obstruct important interface elements.

---

# Default State

By default, the Control Center appears as a single floating button.

The button should remain visually lightweight.

Its presence should become familiar rather than distracting.

---

# Expanded State

Clicking the floating button reveals the available controls.

Expansion should happen close to the original button.

Avoid full-screen overlays or modal windows.

The interaction should feel lightweight and reversible.

---

# Interaction Behaviour

Opening:

Smooth expansion.

Closing:

Click outside.

Click button again.

Press Escape.

The interaction should always feel immediate.

---

# Initial Features

Version 1 should include only a small number of utilities.

---

## Theme Toggle

Purpose:

Switch between Light Mode and Dark Mode.

The transition should feel smooth.

Theme selection should persist between visits.

---

## Language Switch

Purpose:

Switch between English and Italian.

The portfolio should always remember the selected language.

Future languages may be added without redesigning the component.

---

## Reading Mode (Future)

Purpose:

Adjust scrolling behaviour.

Possible options:

* Standard browser scrolling
* Guided scrolling (where sections snap gently according to the designed rhythm)

This feature is optional and may be introduced in a later version.

---

# Future Utilities

The architecture should support additional utilities without changing the component itself.

Possible future additions include:

* reduced motion
* text scaling
* high contrast mode
* experimental features
* accessibility preferences

The component should remain flexible while avoiding unnecessary complexity.

---

# Interaction Principles

Every action inside the Control Center should provide immediate visual feedback.

Examples:

* active state
* subtle transition
* smooth toggle animation

Avoid excessive motion.

Interactions should communicate confidence and clarity.

---

# Visual Hierarchy

The Control Center should always remain visually lighter than:

* Navbar
* Hero
* Featured Projects

It exists to support the experience, not to become a focal point.

---

# React Philosophy

The Control Center should be implemented as a reusable global component.

Suggested structure:

MainLayout

↓

ControlCenter

↓

ControlButton

↓

ControlMenu

↓

ControlItems

Each control should be an independent reusable element.

Future utilities should only require adding new items rather than rewriting the component.

---

# Data Structure

Control items should be generated from structured configuration.

Suggested properties:

* id
* label
* icon
* type
* action
* enabled

This allows future controls to be introduced without modifying the UI architecture.

---

# Accessibility

The Control Center should fully support:

* keyboard navigation
* focus management
* screen readers
* visible focus indicators

All controls should remain fully accessible.

---

# Motion Guidelines

Opening and closing animations should be subtle.

Recommended behaviour:

* fade
* scale
* slight translate

The interaction should feel responsive rather than decorative.

---

# Future Evolution

Potential future integrations:

* localization settings
* feature flags
* accessibility options
* Journal preferences
* developer playground (private mode)

These additions should integrate naturally without changing the component's overall behaviour.

---

# Overall Experience

Visitors should feel that the portfolio respects their preferences.

The Control Center should quietly communicate one of the portfolio's core principles:

Good experiences adapt to people, not the other way around.
