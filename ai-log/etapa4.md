# Stage 4: AI log

## Tools
- Gemini (AI assistant)

## Conversations
- https://gemini.google.com (Discussion about splitting the UI into React components and rendering lists dynamically from data using props and map for the Car Parts Store application).

## Key requests
### 1. Creating `PiesaCard` and `PiesaList` Components
- **Asked:** How to implement Stage 4 requirements for the custom theme ("Magazin de piese auto").
- **Got:** Code for `PiesaCard.jsx` (receiving a single item via destructured props, mapping category tags via `ETICHETE_TIP`, and applying conditional classes based on `inStoc`) and `PiesaList.jsx` (handling empty list conditional rendering and mapping items with `key={piesa.id}`).
- **Changed or rejected:** Adjusted class names (`item-card`, `item-list`) to match the existing lilac-themed CSS from previous stages.

### 2. Updating `App.jsx` and Documentation
- **Asked:** How to replace the temporary JSON output in `App.jsx` and update the README and AI log.
- **Got:** Updated `App.jsx` importing `PiesaList` and passing the `piese` array as props, along with the Stage 4 verification table and status update for `README.md`.

## What I learned / what did not work
- Learned how to pass data from parent to child components using `props` and object destructuring.
- Understood why React requires a unique and stable `key` prop (`piesa.id` instead of array index) directly on the component returned by `.map()`.
- Practiced conditional rendering both with early `return` statements (for the empty list message) and the ternary operator `? :` (for dynamic CSS classes and status labels).