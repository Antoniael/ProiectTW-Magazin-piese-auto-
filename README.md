# ProiectTW-Magazin-piese-auto-
# Magazin de piese auto

O aplicație web pentru gestionarea inventarului de piese auto, destinată clienților și administratorilor de service-uri.

## Modelul de date

| Câmp | Tip | Note |
| :--- | :--- | :--- |
| id | număr | unic, generat automat (începând cu Etapa 2) |
| titlu | text | obligatoriu, max 100 caractere (denumirea piesei) |
| inStoc | boolean | starea piesei (în stoc / indisponibil), valoare implicită true |
| tip | valori fixe | `motor`, `franare`, `suspensie`, `caroserie` |
| utilizator | relație | proprietarul sau gestionarul piesei (din Etapa 11) |

### Date de test (folosite în toate etapele):
1. Plăcuțe frână față, în stoc, franare
2. Filtru ulei motor, în stoc, motor
3. Amortizor spate, indisponibil (gata), suspensie

---

## Cum se rulează
- **Etapa 1 (Mockup HTML & CSS):** Deschide fișierul `index.html` într-un browser modern. Nu este necesar un server local.
- **Etapa 2 (Logica JavaScript):** Deschide fișierul `index.html` în browser și apasă tasta `F12` (sau `Ctrl + Shift + J`) pentru a vizualiza rezultatele testelor în consola browserului.

---

## Utilizarea instrumentelor AI
- **Instrumente folosite:** ChatGPT / Gemini / Copilot
- **Detalii per etapă:**
  - *Etapa 1:* Utilizat pentru structurarea semantică a paginii HTML și crearea regulilor de layout cu CSS Grid, Flexbox și temă întunecată (`prefers-color-scheme: dark`).
  - *Etapa 2:* Utilizat pentru implementarea funcțiilor imutabile în JavaScript (`map`, `filter`, `find`, `reduce`) și gestionarea validărilor pentru adăugarea pieselor.

---

## Stadiul proiectului
- [x] Etapa 1: Mockup static în HTML și CSS
- [x] Etapa 2: Logica pe date în JavaScript
- [ ] Etapa 3: Inițializarea proiectului React (Vite)

---

## Tabele de verificare

### Tabel de verificare - Etapa 1
| ID | Cerință | Unde se verifică | Cum se verifică |
| :--- | :--- | :--- | :--- |
| S1-R1 | README: descriere, câmpuri, date de test, mod de rulare | README.md | citire |
| S1-R2 | Secțiunea privind utilizarea AI | README.md | citire |
| S1-R3 | Jurnalul AI pentru etapa 1 | ai-log/etapa-01.md | citire |
| S1-R4 | Antet, formular (text + select), 3 carduri cu datele proprii | index.html | deschiderea paginii |
| S1-R5 | Cardul finalizat arată diferit (.done) | style.css | vizualizarea cardului |
| S1-R6 | 2 coloane pe desktop, 1 coloană sub 700px (@media) | style.css | redimensionare fereastră < 700px |
| S1-R7 | Focus vizibil, temă întunecată lizibilă | style.css | tasta Tab; mod întunecat |
| S1-R8 | Commit-ul „Stage 1” publicat pe GitHub | Istoricul de commit-uri | istoricul git |

### Tabel de verificare - Etapa 2
| ID | Cerință | Unde se verifică | Cum se verifică |
| :--- | :--- | :--- | :--- |
| S2-R1 | Fișierul JS este legat de pagină și scrie în consolă | index.html / piese.js | deschidere pagină, F12 |
| S2-R2 | 3+ elemente cu id, nume, stare și etichetă fixă | piese.js | citire cod |
| S2-R3 | Listare, numărare, căutare, adăugare, comutare, ștergere | piese.js | ieșirea în consolă |
| S2-R4 | Adăugarea respinge numele gol și eticheta invalidă | piese.js | ultimele rânduri din consolă |
| S2-R5 | Array-ul original rămâne neschimbat după adăugare | piese.js | rândul corespunzător din consolă |
| S2-R6 | Secțiunea Etapa 2 în README + Jurnalul AI | README.md & ai-log/etapa-02.md | citire |
| S2-R7 | Commit-ul „Stage 2” publicat pe GitHub | Istoricul de commit-uri | istoricul git |

## Modelul de date

| Câmp | Tip | Note |
| :--- | :--- | :--- |
| id | număr | unic, generat automat |
| titlu | text | obligatoriu, max 100 caractere (denumirea piesei) |
| inStoc | boolean | starea piesei (în stoc / indisponibil), valoare implicită true |
| tip | valori fixe | `motor`, `franare`, `suspensie`, `caroserie` |
| utilizator | relație | proprietarul sau gestionarul piesei (din Etapa 11) |

### Date de test (folosite în aplicație):
1. Plăcuțe frână față, în stoc, franare
2. Filtru ulei motor, în stoc, motor
3. Amortizor spate, indisponibil, suspensie

---

## Cum se rulează
1. Deschide un terminal în folderul `frontend/`.
2. Instalează dependențele (dacă nu ai făcut-o deja):
   ```bash
   npm install
   ```

## Etapa 4: Componente construite din date
Lista este desenată integral din date, prin două componente React:
- `PiesaList` primește întregul array de piese și randează câte un card pentru fiecare element (sau un mesaj explicit dacă lista este goală)
- `PiesaCard` primește un singur obiect prin `props` și îi afișează titlul, categoria și starea stocului

## Stadiul proiectului
- [x] Etapa 1: Mockup static în HTML și CSS
- [x] Etapa 2: Logica pe date în JavaScript
- [x] Etapa 3: Inițializarea proiectului React (Vite)
- [x] Etapa 4: Componente construite din date
- [x] Etapa 5: Stare locală și evenimente
- [x] Etapa 6: Încărcarea datelor de la un mock API
- [x] Etapa 7: Formular și validare
- [x] Etapa 8: Rutare și pagină de detaliu

### Tabel de verificare - Etapa 4
| ID | Cerință | Unde se verifică | Cum se verifică |
| :--- | :--- | :--- | :--- |
| S4-R1 | 2+ componente în src/components/ | frontend/src/components/ | deschidere folder |
| S4-R2 | Cardul primește datele prin props | PiesaCard.jsx | citire cod |
| S4-R3 | map + key={id}, fără avertismente în consolă | PiesaList.jsx | F12, Console |
| S4-R4 | Mesaj pentru lista goală | PiesaList.jsx | setare array la `[]` |
| S4-R5 | Starea modifică aspectul cardului | PiesaCard.jsx | modificare flag `inStoc` |
| S4-R6 | Secțiunea Etapa 4 în README + Jurnalul AI | README.md, ai-log/etapa-04.md | citire |
| S4-R7 | Commit-ul „Stage 4” publicat pe GitHub | Istoricul de commit-uri | istoricul git |

## Etapa 5: State local și evenimente
Lista trăiește acum în `state`-ul componentei React. Piesele pot fi bifate și șterse direct din pagină, iar contorul din antet se actualizează automat. Un buton în antet permite comutarea între tema luminoasă și cea întunecată. La reîncărcarea paginii, datele revin la valorile inițiale (lucru ce va fi rezolvat în etapele următoare).

### Tabel de verificare - Etapa 5
| ID | Cerință | Unde se verifică | Cum se verifică |
| :--- | :--- | :--- | :--- |
| S5-R1 | Lista este păstrată în useState, în App | App.jsx | citire |
| S5-R2 | Bifarea schimbă starea și aspectul cardului | App.jsx, PiesaCard.jsx | clic pe checkbox |
| S5-R3 | Ștergerea elimină elementul | App.jsx, PiesaCard.jsx | clic pe Șterge |
| S5-R4 | Contorul din antet este o valoare derivată | App.jsx | bifează, observă antetul |
| S5-R5 | Actualizări imutabile (fără push/splice) | App.jsx | citire funcții handle |
| S5-R6 | Comutare temă luminos/întunecat | App.jsx, App.css | clic buton temă |
| S5-R7 | Fără avertismente; README + AI log actualizate | README.md, ai-log/etapa-05.md | F12, Consolă |
| S5-R8 | Commit "Stage 5" publicat pe GitHub | Istoric commit-uri | istoric git |

---

## Stage 6: data from a mock API
Lista de piese este servită de `json-server` din fișierul `frontend/db.json`. Aplicația preia datele la deschiderea paginii prin `useEffect` și gestionează starea de încărcare, starea de succes și starea de eroare.

```bash
# Terminal 1 - Mock API (port 3001)
cd frontend
npm run api

# Terminal 2 - Frontend React Vite (port 5173)
cd frontend
npm run dev
```

### Tabel de verificare - Etapa 6
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S6-R1 | npm run api starts, route shows JSON | frontend/package.json, frontend/db.json | open localhost:3001/piese |
| S6-R2 | data no longer in React code | frontend/src/App.jsx (useState([])) | read |
| S6-R3 | loading message while waiting | frontend/src/App.jsx | --delay 4000 |
| S6-R4 | error message when API is down | frontend/src/App.jsx | stop npm run api, refresh |
| S6-R5 | fetch only in api.js, URL from env | frontend/src/api.js, frontend/.env.example | search for fetch |
| S6-R6 | README Stage 6 section + AI log | README.md, ai-log/etapa6.md | read |
| S6-R7 | commit "Stage 6" pushed | link to the commit | commit history |

---

## Stage 7: form and validation
Piesele pot fi adăugate direct din pagină folosind formularul controlat și validat (`PiesaForm`). Fiecare modificare (adăugare prin POST, bifare disponibilitate prin PATCH, ștergere prin DELETE) se trimite mai întâi la API înainte de a actualiza starea pe ecran, astfel încât modificările persistă la reîncărcarea paginii.

### Tabel de verificare - Etapa 7
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S7-R1 | controlled form: value + onChange on every field | frontend/src/components/PiesaForm.jsx | read |
| S7-R2 | empty title shows an error, nothing is sent | frontend/src/components/PiesaForm.jsx (valideaza) | submit empty, watch Network |
| S7-R3 | added item shows in the list and survives refresh | frontend/src/App.jsx (handleAdd), frontend/src/api.js | add, refresh |
| S7-R4 | toggle and delete survive refresh | frontend/src/App.jsx, frontend/src/api.js | toggle/delete, refresh |
| S7-R5 | button disabled while sending, form cleared only on success | frontend/src/components/PiesaForm.jsx | --delay 3000; stop API and submit |
| S7-R6 | tw.json and the data-testid attributes from table 7.3 | tw.json, frontend/src/components/PiesaCard.jsx, frontend/src/components/PiesaForm.jsx, frontend/src/App.jsx | querySelectorAll in the console |
| S7-R7 | README Stage 7 section + AI log | README.md, ai-log/etapa7.md | read |
| S7-R8 | commit "Stage 7" pushed | link to the commit | commit history |

---

## Stage 8: routing and detail page
Aplicația este organizată acum pe pagini folosind `react-router-dom`:
- `/`: Pagina principală de catalog (`PiesePage`), conținând formularul de adăugare și lista de piese, cu filtre, căutare și resetare.
- `/piese/:id`: Pagina de detaliu a piesei (`PiesaDetaliuPage`), care citește ID-ul dinamic prin `useParams()`, încarcă piesa prin `fetchPiesa(id)` și tratează erorile sau ID-urile inexistente.
- `/despre`: Pagina de prezentare (`DesprePage`) cu detalii despre proiect și stiva tehnologică.
- `*`: Pagină 404 (`NotFoundPage`) cu link de întoarcere la catalog.

Navigația și antetul sunt incluse într-un `Layout` comun partajat folosind `<Outlet />` și `<NavLink>`.
Stilizarea globală a fost refactorizată în fișiere CSS Modules per componentă (`*.module.css`), iar valorile fixe sunt centralizate în `src/constants.js`.

### Tabel de verificare - Etapa 8
| ID | Requirement | Where (permalink) | How to check |
| :--- | :--- | :--- | :--- |
| S8-R1 | react-router-dom installed, BrowserRouter wraps App | frontend/package.json, frontend/src/main.jsx | read |
| S8-R2 | 4 routes functional: /, /piese/:id, /despre, * | frontend/src/App.jsx | navigate to each |
| S8-R3 | shared layout with Outlet and NavLink (marks active, end on root) | frontend/src/components/Layout.jsx | navigate, check active style |
| S8-R4 | detail page reads :id via useParams, fetches item via fetchPiesa | frontend/src/pages/PiesaDetaliuPage.jsx, frontend/src/api.js | open /piese/1, check network |
| S8-R5 | detail page handles nonexistent ID and has back link | frontend/src/pages/PiesaDetaliuPage.jsx | open /piese/9999, click back link |
| S8-R6 | clicking an item title in the list opens its detail page | frontend/src/components/PiesaCard.jsx | click on item title |
| S8-R7 | fixed options and labels stored in constants.js | frontend/src/constants.js | read |
| S8-R8 | scoped styles via CSS Modules, App.css cleaned up | frontend/src/components/*.module.css, frontend/src/pages/*.module.css, frontend/src/index.css | inspect elements |
| S8-R9 | all data-testid attributes from table 8.2 present | frontend/src/ | querySelectorAll in console |
| S8-R10 | README Stage 8 section + AI log | README.md, ai-log/etapa8.md | read |
| S8-R11 | commit "Stage 8" pushed | link to the commit | commit history |

