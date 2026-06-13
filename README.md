# Lotus

A lightweight object-oriented JavaScript framework for building modular, declarative and highly extensible user interfaces.

---

# Overview

**Lotus** is an experimental front-end framework and architectural research project focused on transforming interface construction into a component-oriented and declarative experience.

Instead of relying exclusively on low-level DOM operations, Lotus introduces an abstraction layer where visual entities become autonomous objects capable of managing their own structure, styling, behavior and rendering lifecycle.

The framework is currently in **Alpha**, and although several core systems are already implemented, the architecture is continuously evolving and will undergo numerous refinements and extensions before reaching production maturity.

Lotus is both a practical framework and a long-term study of how modern UI systems, rendering engines and component architectures can be designed from the ground up.

---

# Philosophy

Lotus aims to make interface development resemble system modeling rather than DOM manipulation.

Traditional development often requires repetitive instructions:

```javascript
const div = document.createElement("div");
div.style.width = "200px";
div.style.backgroundColor = "#242424";
document.body.appendChild(div);
```

Lotus promotes object composition instead:

```javascript
const title = new Title("Welcome");

title
    .setFontSize("32px")
    .setColor("#ffffff")
    .setTextAlign("center");
```

Components are designed to be:

* Self-contained
* Reactive
* Reusable
* Extensible
* Renderable
* Composable

The framework encourages describing **what should exist**, rather than manually describing every step required to build it.

---

# Core Principles

## Object-Oriented Components

Every interface element is represented as an object.

Components encapsulate:

* Structure
* Style
* Behavior
* Rendering
* Event handling
* Layout participation

---

## Declarative Composition

Complex interfaces are created by combining components.

```javascript
const container = new StandardBox();

container
        ._addChild(new Title("Lotus")
        ._addChild(new Paragraph({title: "Experimental framework" })

```

---

## Rendering Abstraction

Lotus provides its own rendering layer.

Current capabilities include:

* Virtual DOM representation
* Object tree generation
* Differential rendering
* Incremental updates
* DOM serialization
* Tree traversal utilities

The rendering system aims to minimize unnecessary DOM operations while preserving component independence.

---

## Reactive Styling

Components synchronize their internal state with the DOM automatically.

```javascript
button
    .setWidth("150px")
    .setBackgroundColor("#121212")
    .setBorderRadius("12px");
```

No direct DOM manipulation is required.

---

## Layout Coordination

Layout execution is coordinated through:

* LayoutCoordinator
* ExecutionBlock

These systems allow:

* Contextual rendering
* Dynamic interface transitions
* Conditional execution
* Modular page organization

---

## Component Library

Lotus currently provides reusable components including:

* Boxes
* Buttons
* Titles
* Text
* Paragraphs
* Spans
* Sidebars
* Grid layouts
* Circles
* Anchors
* Custom containers

All components inherit common capabilities and follow the same lifecycle philosophy.

---

## Behavior System

Components can dynamically acquire behaviors such as:

* Dragging
* Visibility control
* Event listeners
* Hover interactions
* Standard component actions

This allows behavior composition without tightly coupling functionality.

---

## PWA Support

Lotus includes native Progressive Web App capabilities:

* Web Manifest
* Service Workers
* Installation routines
* Offline support foundations

Enabling applications built with Lotus to progressively behave like installable software.

---

## Animation System

The framework provides animation utilities such as:

* Rotations
* Sliding transitions
* Depth effects
* 3D transformations

Animations are treated as reusable behaviors rather than isolated CSS fragments.

---

## Development Utilities

Lotus includes utilities for:

* DOM cleanup
* DOM-to-object conversion
* Path discovery
* Function serialization
* Registry systems
* Node replacement
* Tree search operations

These tools support internal framework mechanisms and future extensibility.

---

# Architecture

## Core

Responsible for:

* Rendering
* Navigation
* Layout coordination
* Virtual DOM
* Component system
* State synchronization
* PWA integration

---

## System Components

Contains:

* StandardComponent
* StyleController
* Component wrappers
* Behaviors
* Utility modules
* Internal component functions

---

## Virtual DOM Engine

Current features:

* Virtual node creation
* Object tree representation
* Tree diffing
* Node search
* Replacement algorithms
* Function reference handling

The Virtual DOM system remains under active development and will continue receiving major improvements.

---

## Pages

Application structure is divided into:

* Intro
* Showroom
* Laboratory
* Explanations
* Developer tools

These areas serve both as documentation and experimental environments.

---

# Current Status

**Lotus is currently in Alpha.**

This means:

* APIs are subject to change.
* Internal structures are continuously being refactored.
* New modules will be introduced.
* Existing systems may evolve significantly.
* Stability and performance improvements are ongoing.

Backward compatibility is not guaranteed between alpha versions.

---

# Roadmap

## Rendering

* Optimized reconciliation engine
* Batched updates
* Smarter diff algorithms
* Fine-grained reactivity

---

## Architecture

* Global state manager
* Dependency injection
* Event bus
* Middleware support

---

## Components

* Inputs
* Forms
* Modals
* Menus
* Tables
* Lists
* Notifications

---

## Navigation

* Router
* Route guards
* Dynamic page loading

---

## Lifecycle

* Mount hooks
* Update hooks
* Destroy hooks

---

## Styling

* Theme engine
* Dark mode
* Variables system
* Responsive abstractions

---

## Developer Experience

* DevTools integration
* Debug mode
* Component inspector
* Performance profiling

---

# Long-Term Vision

Lotus is intended to evolve into a professional-grade framework while remaining an architectural exploration platform.

Its goals include:

* Understanding framework internals.
* Building independent abstractions.
* Studying rendering systems.
* Exploring object-oriented UI architectures.
* Creating highly modular applications.
* Providing a foundation for future projects.

The framework prioritizes clarity, extensibility and architectural experimentation over premature complexity.

---

# Why "Lotus"?

The name is inspired by the engineering philosophy associated with Lotus automobiles:

> Simplify, then add lightness.

This principle reflects the framework's objective:

Creating powerful abstractions through structural simplicity.

Lotus pursues:

* Lightweight design
* Modular architecture
* High flexibility
* Minimal overhead
* Elegant abstractions

---

# Author

**Thiago Alexandre Guerra**

Computer Science Student
Federal University of Juiz de Fora (UFJF)

---

# License

MIT License

---

# Final Note

Lotus is an evolving ecosystem.

Its current Alpha stage represents only the beginning of a broader vision. New subsystems, rendering improvements, developer tools and architectural refinements will continue to shape the framework over time.

The project is being developed with long-term ambitions and a commitment to understanding how modern interface frameworks can be designed from first principles.
