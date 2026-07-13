# 07_Playground_Specification.md

# Playground Specification

## Purpose

The Playground is the experimental space of the portfolio.

Unlike the Projects page, which showcases complete professional case studies, the Playground collects explorations, prototypes and experiments developed out of curiosity.

Its purpose is to communicate one of the core principles of my design philosophy:

> Curiosity drives learning.

The Playground is not a portfolio of unfinished work.

It is a collection of intentional explorations.

---

# Experience Goal

Visitors should immediately understand that they have entered a different environment.

Projects communicate professional experience.

The Playground communicates experimentation.

The experience should feel more playful, more open and more exploratory while remaining clear and usable.

---

# Content Strategy

Experiments are intentionally smaller than professional projects.

Each experiment explores a specific idea.

Examples include:

* interaction concepts
* interface explorations
* creative coding
* Three.js experiments
* micro interactions
* generative design
* industrial design concepts
* game mechanics
* XR explorations

The focus is on learning, not on delivering a finished product.

---

# Exploration Philosophy

Unlike the Projects page, the Playground should not encourage linear browsing.

Visitors should feel free to wander.

The page should resemble a digital workspace rather than a structured archive.

Exploration itself becomes part of the experience.

---

# Page Structure

```text
Navbar

↓

Page Title

↓

Short Introduction

↓

Interactive Exploration Canvas

↓

Footer
```

The page intentionally contains very few traditional sections.

Most of the experience happens inside the exploration canvas.

---

# Introduction

The introduction should briefly explain the purpose of the Playground.

It should communicate that these experiments are:

* prototypes
* ideas
* explorations
* technical studies
* interaction exercises

Keep the copy concise.

The interface should quickly transition into exploration.

---

# Exploration Canvas

The canvas is the core interaction of the page.

Instead of displaying experiments in a traditional grid, experiments exist inside a freely explorable two-dimensional space.

Users can:

* pan
* zoom
* freely discover experiments

The experience should feel closer to exploring a map than browsing a gallery.

---

# Spatial Organization

Experiments should not be placed randomly.

Their position should communicate subtle relationships.

Possible grouping criteria:

* interaction
* technology
* medium
* concept
* experimentation theme

The layout should suggest invisible connections without explicitly categorizing them.

---

# Experiment Nodes

Each experiment appears as an independent node.

Nodes may differ slightly in size depending on importance.

Every node contains:

* preview image
* title
* short description

Nodes should remain lightweight.

---

# Hover Behaviour

Hovering a node should:

* slightly increase emphasis
* reveal metadata
* invite exploration

The interaction should feel lightweight and responsive.

Avoid large pop-ups.

---

# Click Behaviour

Clicking an experiment opens the dedicated experiment page.

Navigation should remain immediate.

The canvas itself should preserve its position whenever possible.

---

# Navigation Mode

The Playground intentionally avoids traditional filtering.

Discovery should happen through exploration rather than categorization.

Visitors should encounter unexpected experiments.

Serendipity is part of the experience.

---

# Optional View Modes

The architecture should support future visualization modes.

Possible examples:

Canvas View

(default)

List View

Grid View

Timeline View

The current version only requires the Canvas View.

Future modes should not require rewriting the architecture.

---

# Motion Guidelines

Motion should reinforce exploration.

Examples:

* smooth canvas movement
* subtle node transitions
* gentle hover feedback
* animated focus changes

Avoid overwhelming motion.

The experience should remain calm and deliberate.

---

# React Philosophy

The Playground should be entirely data-driven.

The canvas should render nodes based on structured experiment data.

The page itself should never hardcode experiment positions or content.

Instead:

Experiments Data

↓

Canvas Engine

↓

Experiment Node

↓

Experiment Page

This keeps the experience scalable as new experiments are added.

---

# Data Structure

Each experiment should expose structured information such as:

* title
* slug
* description
* thumbnail
* position
* tags
* medium
* status

Additional properties may be introduced later without affecting the canvas architecture.

---

# Future Evolution

Possible future additions include:

* experiment connections
* visual relationship lines
* search
* node clustering
* favorites
* interactive previews
* live code embeds

The architecture should allow these features without requiring structural redesign.

---

# Overall Experience

A visitor leaving the Playground should feel:

"I've discovered how this designer learns."

The Playground should communicate curiosity, experimentation and continuous growth.

It is not a gallery.

It is a laboratory.
