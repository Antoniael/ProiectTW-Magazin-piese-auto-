const TIPURI_PIESE = ["motor", "franare", "suspensie", "caroserie"];

const piese = [
    { id: 1, titlu: "Plăcuțe frână față", inStoc: true, tip: "franare" },
    { id: 2, titlu: "Filtru ulei motor", inStoc: true, tip: "motor" },
    { id: 3, titlu: "Amortizor spate", inStoc: false, tip: "suspensie" }
];

function listeazaTitluri(lista) {
    return lista.map((p) => p.titlu);
}

function numaraDisponibile(lista) {
    return lista.filter((p) => p.inStoc).length;
}

function cautaDupaTitlu(lista, text) {
    const textCautat = text.toLowerCase();
    return lista.filter((p) => p.titlu.toLowerCase().includes(textCautat));
}

function nextId(lista) {
    return lista.reduce((max, p) => Math.max(max, p.id), 0) + 1;
}

function adaugaPiesa(lista, titlu, tip = "motor") {
    const titluCurat = titlu.trim();
    
    if (titluCurat === "") {
        console.log("Eroare: Titlul nu poate fi gol.");
        return lista;
    }
    
    if (!TIPURI_PIESE.includes(tip)) {
        console.log(`Eroare: Tip invalid: ${tip}`);
        return lista;
    }
    
    const piesaNoua = {
        id: nextId(lista),
        titlu: titluCurat,
        inStoc: true,
        tip: tip
    };
    
    return [...lista, piesaNoua];
}

function comutaDisponibilitate(lista, id) {
    return lista.map((p) => 
        p.id === id ? { ...p, inStoc: !p.inStoc } : p
    );
}

function stergePiesa(lista, id) {
    return lista.filter((p) => p.id !== id);
}


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