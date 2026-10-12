# Stage 2: AI log

## Tools
- Gemini (AI assistant)

## Conversations
- https://gemini.google.com (Discussion about implementing Stage 2 JavaScript logic, data models, and setting up the README file for a car parts store application).

## Key requests
### 1. Adaptation of Data Models and JavaScript Logic
- **Asked:** How to adapt the TaskFlow example from the guidelines into a custom theme ("Magazin de piese auto" / Car Parts Store) for Stage 2.
- **Got:** A complete `piese.js` script containing immutable array methods (`map`, `filter`, `find`, `reduce`), custom fixed categories (`TIPURI_PIESE`), validation logic for empty titles and invalid tags, unique ID generation via `nextId`, and grouped console tests.
- **Changed or rejected:** Kept the core functional structure required by the project guidelines while renaming variables and labels to fit automotive inventory management.

### 2. README.md Structure for Stages 1 and 2
- **Asked:** To generate a comprehensive README.md file covering both Stage 1 and Stage 2 requirements in Romanian, without permalinks.
- **Got:** A fully translated and structured README markdown containing the app description, data model, test items, run instructions, AI usage notes, and the checklists/verification tables for both stages.

## What I learned / what did not work
- Understood how to structure immutable JavaScript functions using the spread operator (`...`) instead of mutating arrays directly (e.g., using `push`).
- Learned how to properly validate user inputs (rejecting empty strings and invalid tags) and compute unique IDs using `reduce` to prevent duplicate keys after item deletion.
- Clarified how to link the JavaScript file before the closing `</body>` tag and verify outputs via the browser console (F12) without altering the visual HTML mockup.