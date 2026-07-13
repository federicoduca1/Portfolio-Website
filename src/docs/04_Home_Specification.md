# 04_Home_Specification.md

# Home Specification

## Purpose

The Home page is the most important page of the portfolio.

It is not simply an introduction.

It is the main storytelling experience of the entire website.

Its purpose is to communicate who I am as a designer before visitors even start reading individual projects.

The Home should answer one fundamental question:

> "Why should I explore this portfolio?"

---

# Experience Goal

Within approximately one minute, visitors should understand:

* who I am;
* what kind of designer I am;
* what I design;
* why I define myself as a Digital Experience Designer;
* how technology fits into my design process;
* that I explore multiple interaction domains;
* that I have both professional case studies and experimental work;
* how to continue exploring.

The Home should never feel like a landing page.

It should feel like the beginning of an exploration.

---

# Storytelling Structure

The Home is divided into three narrative chapters.

```text
Identity
↓

Demonstration

↓

Continuation
```

Each chapter has a different purpose.

---

# Chapter 01 — Identity

Purpose:

Introduce my mindset before introducing my work.

Visitors should first understand how I think.

Only afterwards should they discover what I have created.

---

## Section 01 — Manifesto

This is the visual hero of the portfolio.

The page opens with a large positioning statement.

The sentence should occupy most of the first viewport.

It should immediately communicate:

* Digital Experiences
* Technology
* Human Interaction
* Curiosity

The exact copy will evolve over time.

The structure should remain flexible.

---

### Interactive Keywords

Some keywords inside the manifesto become interactive.

Examples:

* Digital Experiences
* Technology

Hovering these words should reveal additional contextual information.

The purpose is not to hide information.

The purpose is to invite curiosity.

This interaction should remain subtle.

Avoid flashy animations.

---

### Hero Behaviour

The hero should feel calm.

Avoid:

* excessive entrance animations
* typing effects
* distracting transitions

A simple, elegant entrance animation is sufficient.

The content itself should remain the focus.

---

## Section 02 — Design Philosophy

Purpose:

Translate the manifesto into three concrete principles.

Each principle should represent one pillar of my design approach.

Current pillars:

* Design as Meaning Maker
* Experiences Beyond Interfaces
* Curiosity as a Design Approach

The structure should support future updates.

---

### Layout

Three independent blocks.

Each block contains:

* title
* short description

The layout should feel editorial.

Avoid cards.

Avoid unnecessary decoration.

---

### Scroll Behaviour

As the user scrolls:

each principle should receive focus individually.

The transition should feel continuous.

Motion should support reading.

Never interrupt it.

---

# Chapter 02 — Demonstration

Purpose:

Show evidence.

The visitor already understands how I think.

Now they need to see what I have built.

---

## Section 03 — Featured Projects

This is the most important project showcase.

Only three featured projects appear.

These projects may change over time.

The layout must therefore be data-driven.

---

### Hierarchy

Project 01

Largest visual emphasis.

Represents my strongest work.

Projects 02 and 03

Secondary importance.

Smaller but still clearly visible.

---

### Card Behaviour

Every project card should communicate:

"You can enter this project."

Hover interaction:

* subtle elevation
* soft shadow
* slight media zoom

Motion should feel premium and restrained.

---

### Project Content

Each card should display:

* visual preview
* title
* project category
* short description

No additional metadata is required.

---

## Section 04 — Playground Preview

Purpose:

Reveal my exploratory side.

This section is intentionally different from Featured Projects.

Projects communicate professionalism.

Playground communicates curiosity.

---

### Visual Hierarchy

Lower than Featured Projects.

Visitors should naturally notice it after the professional work.

---

### Layout

Small experiment previews.

Carousel-based exploration.

Not every experiment needs to be visible immediately.

The user should understand that more content exists beyond the viewport.

---

### CTA

The final card of the carousel becomes the invitation to enter the Playground page.

This CTA should feel like a natural continuation of exploration.

Not a marketing button.

---

# Chapter 03 — Continuation

Purpose:

Provide the next possible paths.

The Home should never simply end.

It should gently invite visitors to continue.

---

## Section 05 — About Preview

Very short introduction.

Do not explain my full story.

Only introduce the person behind the projects.

The full narrative belongs to the About page.

---

### CTA

Simple invitation to learn more.

---

## Section 06 — Contact Preview

The portfolio ends with an invitation.

Not a sales pitch.

Not a call to hire me.

Simply an invitation to start a conversation.

---

# Footer

Shared global footer.

Contains:

* copyright
* last update

No additional navigation.

---

# Motion Guidelines

Animation should only exist when it improves storytelling.

Priority areas:

* Hero
* Design Philosophy
* Section transitions

Avoid animating every component.

The portfolio should feel alive.

Not busy.

---

# React Philosophy

The Home should be composed of reusable sections.

Example structure:

Home

↓

HeroSection

↓

DesignPrinciplesSection

↓

FeaturedProjectsSection

↓

PlaygroundPreviewSection

↓

AboutPreviewSection

↓

ContactPreviewSection

Each section should remain independent.

Future changes to one section should not require modifications to the others.

---

# Data Structure

Featured Projects should never be hardcoded.

The Home should simply receive the list of featured projects and render them.

The same principle applies to Playground previews.

The Home assembles content.

It should not own it.

---

# Future Evolution

The Home is expected to evolve over time.

Possible future additions:

* Journal preview
* Awards
* Talks
* New interactive experiences

The architecture should allow these additions without changing the storytelling structure.

Future content should be inserted as new sections rather than modifying existing ones whenever possible.
