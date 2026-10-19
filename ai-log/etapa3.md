# Stage 3: AI log

## Tools
- Gemini (AI assistant)

## Conversations
- https://gemini.google.com (Discussion about initializing the Vite + React project, cleaning up template files, structuring `App.jsx` with test data and JSON stringify output, and wiring up the CSS styles for the Car Parts Store application).

## Key requests
### 1. Vite & React Project Setup
- **Asked:** How to initialize the React project using Vite and structure the `src/` folder.
- **Got:** Step-by-step instructions for running `npm create vite@latest frontend --template react`, cleaning default files, updating `main.jsx`, and configuring `App.css` with a single-column layout.
- **Changed or rejected:** Kept all original color schemes and layout rules adapted from previous stages.

### 2. Implementing `App.jsx` and README Update
- **Asked:** How to write the initial `App.jsx` component displaying raw JSON data and how to update the documentation.
- **Got:** The code structure for test data (`piese`) placed above the `App` function, computed header values, and the Stage 3 verification table for the README.

## What I learned / what did not work
- Learned how Vite bundles assets and injects CSS directly via JavaScript imports (`main.jsx`).
- Understood how to transition from static HTML/JS markup to a modern component-based React framework while keeping the custom visual design intact.