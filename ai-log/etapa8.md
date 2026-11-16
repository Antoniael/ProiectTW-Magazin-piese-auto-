# Stage 8: AI log

## Tools
- Gemini (AI assistant)

## Conversations
- https://gemini.google.com (Discuție despre configurarea rutării declarative în aplicație SPA cu `react-router-dom`, organizarea componentelor pe pagini în folderul `pages/`, crearea unui Layout partajat cu `<Outlet />`, pagină dedicată de detalii cu `useParams` și `fetchPiesa(id)`, pagină de 404, migrarea stilurilor din fișierul global în CSS Modules pentru fiecare componentă și menținerea atributelor de testare `data-testid`).

## Key requests
### 1. Instalarea și configurarea `react-router-dom`
- **Asked:** Cum se configurează rutarea multi-pagină în React 19 / Vite cu `BrowserRouter`, `Routes`, `Route`, `NavLink` și `Outlet` într-un `Layout` comun.
- **Got:** Structurarea `App.jsx` pentru a include rutele declarative (`/`, `/piese/:id`, `/despre`, `*`), împachetate în `BrowserRouter` în `main.jsx`.

### 2. Pagină de detalii cu citirea parametrului din URL și fetch dedicat
- **Asked:** Cum se creează pagina `/piese/:id`, citind parametrul dinamic prin `useParams()`, preluând piesa cu `fetchPiesa(id)` din `src/api.js` și gestionând stările de încărcare, eroare și 404.
- **Got:** `PiesaDetaliuPage.jsx` cu `useEffect` și anulare request (`ignore = true`), listă de definiții `<dl>`, link înapoi la catalog și atributele `data-testid="detail"` și `data-testid="detail-title"`.

### 3. Migrarea pe CSS Modules și curățarea stilurilor globale
- **Asked:** Cum se împart stilurile pe componente folosind CSS Modules (`*.module.css`), mutând variabilele CSS și stilurile de bază în `index.css`.
- **Got:** Fișiere CSS modulare pentru fiecare componentă (`Layout.module.css`, `PiesePage.module.css`, `PiesaDetaliuPage.module.css`, `PiesaCard.module.css`, `PiesaList.module.css`, `PiesaForm.module.css`) și un `index.css` curat, eliminând fișierul vechi `App.css`.

## What I learned / what did not work
- Am învățat cum se implementează rutarea declarativă într-o aplicație SPA fără reîncărcarea paginii.
- Am înțeles rolul componentei `<Outlet />` în construirea unui Layout partajat (antet, navigație comună și subsol).
- Am înțeles beneficiile CSS Modules: nume de clase cu scop local (scoped styles), prevenirea conflictelor între stiluri și întreținerea mult mai ușoară a componentelor.
- Am învățat cum se gestionează încărcarea asincronă pentru o resursă individuală prin parametrii de rută (`useParams`).
