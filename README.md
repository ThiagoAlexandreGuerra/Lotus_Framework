# Lotus UI Framework

A lightweight object-oriented JavaScript framework for declarative interface construction.

---

## Overview

**Lotus UI Framework** is an experimental front-end architecture designed to transform DOM manipulation into an object-oriented and declarative development experience.

Instead of manually creating and styling elements through imperative DOM operations, Lotus introduces a structured abstraction layer where each visual component is represented as an autonomous object.

The framework was created as both a practical interface-building solution and an architectural study platform focused on understanding how modern UI systems are designed internally.

---

## Philosophy

Traditional browser interface construction often involves repetitive low-level instructions such as:

```javascript
const element = document.createElement("div");
element.style.width = "200px";
element.style.height = "100px";
element.style.backgroundColor = "#242424";
document.body.appendChild(element);
```

Lotus replaces this imperative workflow with semantic and object-oriented composition:

```javascript
const botao = new BotaoEventoClick(() => executarAcao());

botao.atribuirWidth = "120px";
botao.atribuirBottom = "10px";
```

Each component is instantiated already:

- Rendered
- Styled
- Interactive
- Configurable
- Integrated into the framework lifecycle

The goal is to make interface construction resemble system modeling rather than manual DOM assembly.

---

# Core Principles

---

## 1. Structural Abstraction

Every visual entity is treated as an independent object.

A button is not merely a styled `<div>`.

It is a self-contained component that encapsulates:

- Rendering
- Styling
- Event behavior
- Positioning
- Responsiveness
- State synchronization

---

## 2. Reactive Configuration System

The `ConfiguracaoPadrao` base class provides a centralized reactive styling engine.

Any property update automatically reflects in the DOM.

Example:

```javascript
botao.atribuirWidth = "150px";
botao.atribuirBackgroundColor = "#121212";
botao.atribuirBorderRadius = "12px";
```

Internally, Lotus synchronizes style state changes without requiring direct DOM manipulation.

This eliminates repetitive instructions such as:

```javascript
element.style.width = "150px";
```

---

## 3. Declarative Composition

Complex interfaces are built through object composition.

Example:

```javascript
const formulario = new Formulario(
    "Authentication",
    "email",
    "password"
);
```

The framework internally handles:

- Input instantiation
- Structural hierarchy
- Parent-child composition
- Visual arrangement
- Data serialization

This allows developers to describe *what should exist* rather than *how to build it manually*.

---

## 4. Layout Coordination

Lotus introduces a contextual execution system through:

- `CoordenadorLayout`
- `BlocoExecucao`

These classes enable dynamic layout orchestration based on DOM state.

Example:

```javascript
new CoordenadorLayout(
    blocoShowroom,
    blocoMainView
);
```

This allows:

- Conditional rendering
- View switching
- Context-based execution
- Automatic interface transitions

---

## 5. Programmatic Responsiveness

Responsive behavior is attached directly to components.

Example:

```javascript
botao._adicionarResponsividade();
```

Components dynamically recalculate:

- Width
- Height
- Position
- Scaling

based on viewport dimensions.

Unlike traditional CSS-only responsiveness, Lotus treats responsiveness as executable component logic.

---

## 6. Intelligent Inputs

Input components infer metadata from their type.

Example:

```javascript
const email = new Input("email");
```

Automatically configures:

- Semantic label
- Placeholder
- Input type
- Default validation semantics
- Visual styling

---

## 7. Form Serialization

Forms expose structured JSON output.

Example:

```javascript
formulario.getData
```

Returns:

```json
{
  "email": "example@mail.com",
  "password": "********"
}
```

This allows direct integration with APIs and backend systems.

---

## 8. Semantic Rendering Engine

The internal `renderizarElementos()` utility acts as Lotus’ rendering core.

It centralizes DOM creation and reduces repetitive element construction boilerplate.

---

# Architecture

---

## Base Layer

### ConfiguracaoPadrao

Central reactive styling engine.

Responsibilities:

- Style state management
- Automatic DOM synchronization
- Positional abstraction
- Shared configuration behavior

---

## Structural Components

### CaixaPadrao

Generic visual container.

Features:

- Nested child containers
- Drag support
- Visibility control
- Dynamic rendering

---

### Titulo

Semantic title abstraction.

---

### Input

Smart input component.

---

### Formulario

Composite form container with data aggregation.

---

### Botao

Interactive visual button.

---

### BotaoEventoClick

Event-driven clickable button abstraction.

---

## Layout Layer

### CoordenadorLayout

Coordinates layout execution flow.

---

### BlocoExecucao

Defines execution contexts and triggers.

---

# Example

## Authentication Interface

```javascript
const login = new Formulario(
    "Authentication",
    "email",
    "password"
);

const enviar = new BotaoEventoClick(() => {
    console.log(login.getData);
});
```

---

# Current Features

## Reactive Styling

Automatic DOM synchronization through setters.

---

## Component Composition

Nested object-based interface construction.

---

## Layout Coordination

Conditional rendering based on execution blocks.

---

## Responsive Scaling

Viewport-based dynamic recalculation.

---

## Form Serialization

Automatic structured data retrieval.

---

## Event-driven Components

Encapsulated interaction logic.

---

## Local Persistence Support

Browser storage integration for UI state persistence.

---

# Planned Improvements

The project roadmap includes:

## Rendering

- Virtual rendering layer
- Incremental DOM updates
- Component diffing

---

## Architecture

- Internal event bus
- Global state manager
- Dependency injection system

---

## UI Features

- Theme engine
- Animation system
- Transition manager

---

## Lifecycle

- Lifecycle hooks
- Component mounting phases
- Destruction handlers

---

## Navigation

- Router abstraction
- Declarative route management

---

# Project Goals

Lotus is **not intended to compete directly with production-scale frameworks**.

Its purpose is architectural experimentation and educational exploration.

The project serves as a practical environment for understanding:

- Front-end abstraction
- Framework internals
- Declarative rendering systems
- Object-oriented UI architecture
- Component orchestration

---

# Learning Objectives

This project is designed as a study platform for mastering:

- Advanced JavaScript architecture
- Design patterns
- DOM abstraction systems
- Rendering strategies
- Framework design principles

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Run locally using a static server.

Example:

```bash
npx live-server
```

---

# Why "Lotus"?

The name **Lotus** is inspired by the automotive engineering philosophy behind the :contentReference[oaicite:0]{index=0} brand.

Lotus became known for a fundamental principle:

> Simplify, then add lightness.

This idea reflects the core philosophy of the framework.

Lotus UI was designed around efficiency through structural simplicity.

Instead of adding unnecessary complexity, the framework focuses on creating lightweight abstractions that remain expressive, fast, and architecturally clean.

The name represents the pursuit of:

- Lightweight design
- Structural efficiency
- Elegant abstraction
- High responsiveness
- Minimal overhead

Just as Lotus engineering seeks performance through intelligent reduction, Lotus UI seeks interface power through carefully designed simplicity.
---

# Author

**Thiago Alexandre Guerra**  
Computer Science Student  
Federal University of Juiz de Fora (UFJF)

---

# License

MIT License

---

## Final Note

Lotus is an evolving architectural exploration.

It exists to investigate how far object-oriented abstractions can simplify interface construction while deepening understanding of front-end framework design.
