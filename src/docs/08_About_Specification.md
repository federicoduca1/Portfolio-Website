# 08_About_Specification.md

# About Specification

## Purpose

The About page introduces the person behind the work.

Unlike the Home page, which presents my design identity, the About page focuses on who I am, how I arrived here and what shapes my perspective.

Its goal is not to repeat my design philosophy.

Instead, it should reveal the experiences, interests and personal journey that influence my work as a designer.

---

# Experience Goal

Visitors should finish this page with the feeling that they know the person behind the portfolio.

The page should communicate authenticity rather than self-promotion.

It should feel personal, concise and human.

The About page should answer questions such as:

* Who is Federico?
* How did he become a designer?
* What inspires him?
* What kind of person would he be to work with?

---

# Storytelling Structure

The page follows a simple vertical narrative.

```text
Introduction

↓

Design Journey

↓

What Shapes My Perspective

↓

Contact CTA

↓

Footer
```

Unlike the Home page, storytelling happens through content rather than interactions.

The reading experience should remain calm and natural.

---

# Section 01 — Introduction

Purpose:

Present the person before presenting the designer.

The introduction should immediately feel more personal than the Home page.

---

## Layout

Two-column layout.

Left:

Introduction text.

Right:

Portrait photograph.

The photograph should communicate personality rather than acting as a branding element.

Avoid decorative treatments.

---

## Dynamic Identity

Instead of using a static role description, the page introduces a rotating identity statement.

Example structure:

Hello, my name is Federico Duca and I am...

↓

a Digital Experience Designer.

↓

23 years old.

↓

Italian.

↓

a cinema enthusiast.

↓

an aspiring cook.

↓

a curious traveler.

The rotating text should slowly cycle through different aspects of my identity.

The animation should remain subtle and readable.

---

# Section 02 — Design Journey

Purpose:

Connect my personal history with my professional evolution.

The section explains how different experiences gradually shaped my design mindset.

It is not a CV.

It is a narrative.

---

## Layout

Two-column composition.

Left column:

Section title and short introduction.

Right column:

Vertical timeline.

Each timeline item contains:

* step number
* title
* short description

The timeline should feel clean and editorial.

Avoid unnecessary decoration.

---

## Motion

The entire timeline section may gently fade into view while scrolling.

Individual items should not animate independently.

Reading should remain uninterrupted.

---

# Section 03 — What Shapes My Perspective

Purpose:

Show the interests that influence the way I think and design.

This section intentionally moves beyond design.

It explores the experiences that continuously feed my curiosity.

---

## Interactive Explorer

This section introduces a playful interaction.

A fixed sentence begins with:

"I love..."

The visitor can cycle through different passions.

Each selection reveals:

* a short personal statement
* a curated visual gallery
* optional quotes or references

Examples:

Watching films

Drawing and painting

Travelling

Cooking

Music

Video games

The purpose is not to list hobbies.

The purpose is to explain why these activities matter and how they shape my perspective.

---

## React Philosophy

The explorer should be built as a reusable interactive component.

Content should be driven entirely by structured data.

Each passion should contain:

* title
* description
* gallery
* optional quote
* optional references

The component should simply render the currently selected item.

---

# Section 04 — Contact CTA

Purpose:

Conclude the narrative.

Rather than ending with another biography, the page should gently invite visitors to continue the conversation.

Keep this section extremely concise.

Include:

* short message
* CTA leading to the Contact page

---

# Motion Guidelines

Motion should remain subtle.

Examples:

* fade-in sections
* rotating identity text
* gallery transitions
* gentle hover feedback

Avoid dramatic storytelling animations.

The page should feel reflective rather than spectacular.

---

# React Philosophy

The About page should be composed of reusable sections.

Suggested structure:

About

↓

IntroductionSection

↓

JourneySection

↓

PerspectiveExplorer

↓

ContactCTA

Each section should remain independent.

The Perspective Explorer should be implemented as a reusable component capable of supporting future passions without architectural changes.

---

# Data Structure

The page should retrieve structured data for:

* identity statements
* journey timeline
* passions
* gallery items

Avoid hardcoded content whenever possible.

The page should assemble data rather than own it.

---

# Future Evolution

Possible future additions:

* books
* exhibitions
* talks
* personal projects
* recommended resources

These additions should naturally extend the Perspective Explorer without changing the page structure.

---

# Overall Experience

Visitors should leave the About page thinking:

"I understand who Federico is—not only as a designer, but as a person."

The page should create familiarity without becoming autobiographical or overly personal.
