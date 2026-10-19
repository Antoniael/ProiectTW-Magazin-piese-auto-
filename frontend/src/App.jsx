import PiesaList from "./components/PiesaList.jsx";

// Datele de test
const piese = [
  { id: 1, titlu: "Plăcuțe frână față", inStoc: true, tip: "franare" },
  { id: 2, titlu: "Filtru ulei motor", inStoc: true, tip: "motor" },
  { id: 3, titlu: "Amortizor spate", inStoc: false, tip: "suspensie" },
];

export default function App() {
  // Numărul de piese disponibile (în stoc)
  const active = piese.filter((p) => p.inStoc).length;

  return (
    <>
      <header className="app-header">
        <h1>AutoPiese Pro</h1>
        <p>Găsește rapid piese auto originale și compatibile pentru mașina ta.</p>
        <p className="app-count">
          {piese.length} piese în catalog, dintre care {active} în stoc
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Catalog piese</h2>
          <PiesaList piese={piese} />
        </section>
      </main>
    </>
  );
}