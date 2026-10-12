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