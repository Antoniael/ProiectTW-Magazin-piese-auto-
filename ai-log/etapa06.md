# Stage 6: AI log

## Tools
- Gemini (AI assistant)

## Conversations
- https://gemini.google.com (Discuție despre mutarea datelor într-un Mock REST API folosind json-server, încărcarea asincronă a datelor cu useEffect și fetch, tratarea celor 3 stări: loading, succes și eroare, precum și curățarea efectului cu ignore pentru a preveni efectele adverse ale dublei montări).

## Key requests
### 1. Instalarea și configurarea json-server
- **Asked:** Cum se configurează `json-server@0.17.4` și fișierul `db.json` adaptat pentru magazinul de piese auto.
- **Got:** Fișierul `db.json` cu resursa `piese` conținând cel puțin 5 elemente variate (`id`, `titlu`, `inStoc`, `tip`) și scriptul `"api": "json-server --watch db.json --port 3001"` adăugat în `package.json`.

### 2. Modulul de rețea `src/api.js` și variabila de mediu
- **Asked:** Unde trebuie plasat apelul `fetch` și cum se configurează adresa URL configurabilă prin variabile de mediu.
- **Got:** Fișierul `src/api.js` cu funcția `fetchPiese()` și fallback la `http://localhost:3001`, plus fișierul de documentare `frontend/.env.example`.

### 3. Tratarea stărilor în `App.jsx` și curățarea efectului
- **Asked:** Cum se inițializează stările pentru `piese` (listă goală), `loading` (true) și `error` (null), și cum se afișează cele 3 stări în UI.
- **Got:** Codul complet pentru `App.jsx` cu `useEffect`, funcția internă `async function load()`, blocul `try/catch/finally` și funcția de curățare `return () => { ignore = true; }`, înlocuind lista directă cu cele 3 ramuri condiționale.
- **Changed or rejected:** Am adaptat denumirile pentru contextul magazinului de piese auto (`fetchPiese`, mesajul „Se încarcă catalogul de piese...”) și am integrat stilurile pentru `.info` și `.error` păstrând compatibilitatea completă cu temele luminoasă și întunecată din `App.css`.

## What I learned / what did not work
- Am învățat cum se simulează un API REST folosind `json-server` din fișierul `db.json`.
- Am înțeles că `fetch` nu aruncă excepții automate pentru erori HTTP 404/500, fiind necesară verificarea explicită a proprietății `res.ok`.
- Am învățat de ce este esențială variabila `ignore` în `useEffect` pentru a ignora actualizările de stare dacă o componentă este demontată înainte de sosirea răspunsului sau în timpul dublei montări din modul de dezvoltare React.

