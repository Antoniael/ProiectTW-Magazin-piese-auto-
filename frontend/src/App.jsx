const piese = [
    { id: 1, titlu: "Plăcuțe frână față", inStoc: true, tip: "franare" },
    { id: 2, titlu: "Filtru ulei motor", inStoc: true, tip: "motor" },
    { id: 3, titlu: "Amortizor spate", inStoc: false, tip: "suspensie" }
];
export default function App() {
  // 8.3. Valoarea calculată: numărul de piese active (în stoc)
  const active = piese.filter((p) => p.inStoc).length;

  return (
    <>
      {/* 8.4. Antetul paginii (class devine className, iar numerele sunt între acolade) */}
      <header className="app-header">
        <h1>Magazin Piese Auto</h1>
        <p>Găsește rapid piese auto originale și compatibile pentru mașina ta.</p>
        <p className="app-count">
          {piese.length} piese în catalog, dintre care {active} în stoc
        </p>
      </header>

      {/* Conținutul principal */}
      <main className="container">
        <section className="panel">
          <h2>Piesele mele</h2>
          
          {/* 8.5. Afișarea temporară a datelor ca text brut (JSON) */}
          <pre>{JSON.stringify(piese, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}