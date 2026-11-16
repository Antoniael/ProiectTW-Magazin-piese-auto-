# Stage 7: AI log

## Tools
- Gemini (AI assistant)

## Conversations
- https://gemini.google.com (Discuție despre crearea unui formular controlat cu validare locală, extinderea funcției generice request în api.js pentru toate metodele CRUD: POST, PATCH, DELETE, persistarea modificărilor în json-server, configurarea atributelor data-testid și a fișierului tw.json pentru verificarea automată).

## Key requests
### 1. Extinderea `src/api.js` pentru toate metodele HTTP
- **Asked:** Cum se structurează funcția comună `request` pentru operațiile POST, PATCH și DELETE, și cum se tratează răspunsurile 204 No Content.
- **Got:** Funcția comună `request` cu anteturi JSON, verificare `res.ok`, tratare `204`, plus funcțiile `fetchPiese`, `createPiesa`, `updatePiesa` și `deletePiesa`.

### 2. Crearea componentei `PiesaForm.jsx`
- **Asked:** Cum se realizează un formular controlat cu `value`, `onChange`, dezactivarea butonului în timpul trimiterii și validare pentru titlu (obligatoriu, max 100 de caractere).
- **Got:** Componenta `PiesaForm` cu stările locale `titlu`, `tip`, `eroare`, `trimite`, `e.preventDefault()`, afișarea inline a erorii și atributele `data-testid` cerute.

### 3. Actualizarea `App.jsx`, layout pe 2 coloane și `data-testid`
- **Asked:** Cum se leagă formularul și operațiile de toggle și delete asincrone la API în `App.jsx`, cum se revine la layout-ul cu 2 coloane (formular în stânga, catalog în dreapta) și cum se configurează `tw.json`.
- **Got:** Funcțiile `handleAdd` (fără try, pentru ca eroarea să fie afișată în formular), `handleToggleStoc` (PATCH) și `handleDelete` (DELETE), marcarea elementelor cu `data-testid` (`item`, `item-title`, `item-toggle`, `item-delete`, `empty`, `form`, `form-title`, `form-tip`, `form-submit`, `form-error`, `loading`, `error`) și fișierul `tw.json` în rădăcina proiectului.

## What I learned / what did not work
- Am învățat cum funcționează un formular controlat în React, unde starea componentei este sursa unică de adevăr pentru input-uri.
- Am înțeles de ce este esențial ca starea locală să fie actualizată doar după confirmarea cu succes de la server (întâi serverul, apoi state-ul), preluând ID-ul generat de server.
- Am învățat cum se configurează atributele `data-testid` și `tw.json` pentru testarea automată end-to-end.
