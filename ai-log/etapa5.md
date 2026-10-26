# Stage 5: AI log

## Tools
- Gemini (AI assistant)

## Conversations
- https://gemini.google.com (Discussion about implementing React state using `useState`, handling user events like `onChange` and `onClick`, creating controlled inputs, building a light/dark mode theme toggler, and restructuring the visual layout into an authentic automotive e-commerce platform inspired by pieseautoarges.ro while preserving custom color schemes and component contracts).

## Key requests
### 1. State and Event Handlers in `App.jsx`
- **Asked:** How to move the static list into a React state and implement immutable functions to toggle stock status and delete items.
- **Got:** Code for `App.jsx` using `useState` for the `piese` array and the `tema` string. Created immutable `handleToggleStoc` (using `.map()`) and `handleDelete` (using `.filter()`) functions, along with derived values for the header count.
- **Changed or rejected:** Adjusted the function names to match the automotive context (`handleToggleStoc`).

### 2. Controlled Components and Styling
- **Asked:** How to connect the state to the `PiesaCard` and `PiesaList` components and apply styling.
- **Got:** Code for `PiesaCard.jsx` to make the checkbox a controlled component (`checked={piesa.inStoc}`) and bind `onClick` for deletion. Updated `App.css` to include styles for the new buttons and a robust logic for `data-theme="dark"` and `data-theme="light"` overrides.

### 3. Layout Restructuring Inspired by Auto Parts Stores (pieseautoarges.ro)
- **Asked:** How to reorganize the layout with a professional top utility bar, main search header with live filtering, horizontal category navigation ribbon, hero section with VIN search configurator, 4 trust badges, technical consultation banner, and multi-column footer while maintaining the lilac palette and all rubric requirements.
- **Got:** Modular CSS and JSX structure maintaining strict backward compatibility with `props`, `useState`, derived counts, and accessibility outlines.

## What I learned / what did not work
- Learned how to manage local state in React using `useState` and how to pass handler functions down as `props`.
- Understood the importance of keeping state immutable using `.map()` and `.filter()` rather than direct mutation.
- Discovered how to create a controlled input and use derived state for counters without needing a separate `useState`.
- Understood how to blend realistic automotive e-commerce architecture (trust pillars, VIN search, category tabs) with React component state.
