// ==========================================
// ETAPA 2: Logica pe date (JavaScript)
// Magazin de piese auto
// ==========================================

// 1. Valorile permise pentru etichetă (tipul piesei)
const TIPURI_PIESE = ["motor", "franare", "suspensie", "caroserie"];

// 2. Array-ul de obiecte cu cel puțin trei elemente de test
const piese = [
    { id: 1, titlu: "Plăcuțe frână față", inStoc: true, tip: "franare" },
    { id: 2, titlu: "Filtru ulei motor", inStoc: true, tip: "motor" },
    { id: 3, titlu: "Amortizor spate", inStoc: false, tip: "suspensie" }
];

// 3. Listarea titlurilor (folosind map)
function listeazaTitluri(lista) {
    return lista.map((p) => p.titlu);
}

// 4. Numărarea elementelor active/disponibile (în stoc)
function numaraDisponibile(lista) {
    return lista.filter((p) => p.inStoc).length;
}

// 5. Căutarea după titlu (indiferent de litere mari/mici, folosind toLowerCase și includes)
function cautaDupaTitlu(lista, text) {
    const textCautat = text.toLowerCase();
    return lista.filter((p) => p.titlu.toLowerCase().includes(textCautat));
}

// 6. Calculul următorului ID unic (folosind reduce pentru a găsi maximul existent + 1)
function nextId(lista) {
    return lista.reduce((max, p) => Math.max(max, p.id), 0) + 1;
}

// 7. Adăugarea unei piese cu validare (fără modificarea array-ului original)
function adaugaPiesa(lista, titlu, tip = "motor") {
    const titluCurat = titlu.trim();
    
    // Validare 1: Titlul nu poate fi gol
    if (titluCurat === "") {
        console.log("Eroare: Titlul nu poate fi gol.");
        return lista;
    }
    
    // Validare 2: Eticheta/Tipul trebuie să existe în lista permisă
    if (!TIPURI_PIESE.includes(tip)) {
        console.log(`Eroare: Tip invalid: ${tip}`);
        return lista;
    }
    
    // Construirea noului obiect și întoarcerea unui array nou (imutabilitate prin spread)
    const piesaNoua = {
        id: nextId(lista),
        titlu: titluCurat,
        inStoc: true,
        tip: tip
    };
    
    return [...lista, piesaNoua];
}

// 8. Comutarea stării (în stoc / indisponibil) folosind map și imutabilitate
function comutaDisponibilitate(lista, id) {
    return lista.map((p) => 
        p.id === id ? { ...p, inStoc: !p.inStoc } : p
    );
}

// 9. Ștergerea unei piese după id (folosind filter)
function stergePiesa(lista, id) {
    return lista.filter((p) => p.id !== id);
}

// ==========================================
// TESTELE DIN CONSOLĂ (grupate pe secțiuni)
// ==========================================
console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(piese).join(", "));
console.log("Disponibile (în stoc):", numaraDisponibile(piese));
console.log("Căutare 'filtru':", listeazaTitluri(cautaDupaTitlu(piese, "filtru")).join(", "));

console.log("--- Adăugare ---");
let listaNoua = adaugaPiesa(piese, "Bujii ircanice", "motor");
console.log("Lista nouă:", listaNoua.length, "piese");
console.log("Originalul a rămas cu:", piese.length, "piese");

console.log("--- Modificare și ștergere ---");
listaNoua = comutaDisponibilitate(listaNoua, 1);
console.log("După schimbarea stării id 1, disponibile:", numaraDisponibile(listaNoua));

listaNoua = stergePiesa(listaNoua, 3);
console.log("După ștergerea id 3:", listeazaTitluri(listaNoua).join(", "));

console.log("--- Validare ---");
adaugaTestInvalid1 = adaugaPiesa(listaNoua, "   ", "motor");
adaugaTestInvalid2 = adaugaPiesa(listaNoua, "Ulei cutie", "necunoscut");