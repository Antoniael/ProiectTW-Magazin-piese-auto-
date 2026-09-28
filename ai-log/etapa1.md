Prompt dat pe ChatGPT:

<!DOCTYPE html>
<html lang="ro">
<head>
 <meta charset="UTF-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1" />
 <title>NumeAplicatie - mockup</title>
 <link rel="stylesheet" href="style.css" />
</head>
<body>
 <header class="app-header">
 <h1>NumeAplicatie</h1>
 <p>Descriere scurtă.</p>
 <p class="app-count">3 elemente, dintre care 2 active</p>
 </header>
 <main class="container">
 <section class="panel">
 <h2>Adaugă ...</h2>
 <form class="item-form">
 <label>Titlu <input type="text" name="titlu" placeholder="Ex: ..." /></label>
 <label>Etichetă
 <select name="eticheta">
 <option value="v1">Valoare 1</option>
 </select>
 </label>
 <button type="submit">Adaugă</button>
 </form>
 </section>
 <section class="panel">
 <h2>Lista mea</h2>
 <!-- Când lista e goală: <p class="empty">Nu există niciun element.</p> -->
 <ul class="item-list">
 <li class="item-card">
 <div>
 <h3>Element 1</h3>
 <span class="badge badge-v1">Valoare 1</span>
 </div>
 <span class="status">Activ</span>
 </li>
 <li class="item-card done"> ... </li>
 <li class="item-card"> ... </li>
 </ul>
 </section>
 </main>
 <footer class="app-footer">Proiect Tehnologii Web</footer>
</body>
</html>

# ProiectTW-Magazin-piese-auto-
<Two-line description: what the app manages and for whom.>
## Data model
| Field            |     Type     | Notes |
| -----------      | ------------ | ------------------------------------ |
| <name>           | text         | required, max 100 chars |
| <existenta stoc> | boolean      | toggled from the list, default false |
| <fixed tag>      | fixed values | <OEM>, <OE>, <SH> |
| <category>       | relation     | <caroserie>, <motor>, <directie> |
| user             | relation     | the owner of the item (from week 11) |
Sample data used across all stages:
1. <brat>, active, <tag>
2. <bujie>, done, <tag>
3. <aripa>, active, <tag>
