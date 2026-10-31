import { useState, useEffect } from "react";
import PiesaList from "./components/PiesaList.jsx";

// Datele inițiale ale catalogului
const PIESE_INITIALE = [
  { id: 1, titlu: "Plăcuțe frână față", inStoc: true, tip: "franare" },
  { id: 2, titlu: "Filtru ulei motor", inStoc: true, tip: "motor" },
  { id: 3, titlu: "Amortizor spate", inStoc: false, tip: "suspensie" },
];

// Citirea temei sistemului de operare la prima încărcare
function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [piese, setPiese] = useState(PIESE_INITIALE);
  const [tema, setTema] = useState(temaInitiala);
  const [cautare, setCautare] = useState("");
  const [categorieFiltru, setCategorieFiltru] = useState("toate");

  // Sincronizarea temei pe tag-ul html
  useEffect(() => {
    document.documentElement.dataset.theme = tema;
  }, [tema]);

  // Funcție imutabilă pentru comutarea disponibilității (în stoc)
  function handleToggleStoc(id) {
    setPiese((prev) =>
      prev.map((p) => (p.id === id ? { ...p, inStoc: !p.inStoc } : p))
    );
  }

  // Funcție imutabilă pentru ștergerea unei piese
  function handleDelete(id) {
    setPiese((prev) => prev.filter((p) => p.id !== id));
  }

  // Comutarea temei luminoasă/întunecată
  function handleTema() {
    setTema((prev) => (prev === "dark" ? "light" : "dark"));
  }

  // Valoare derivată: numărul de piese aflate în stoc
  const active = piese.filter((p) => p.inStoc).length;

  // Filtrarea pieselor în funcție de căutare și categorie
  const pieseAfisate = piese.filter((p) => {
    const sePotrivesteText = p.titlu.toLowerCase().includes(cautare.toLowerCase());
    const sePotrivesteCategorie =
      categorieFiltru === "toate" || p.tip === categorieFiltru;
    return sePotrivesteText && sePotrivesteCategorie;
  });

  return (
    <div className="site-wrapper">
      {/* 1. Bara superioară: comutator temă */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-actions">
            <button
              className="theme-toggle"
              onClick={handleTema}
              aria-pressed={tema === "dark"}
              title="Schimbă tema între Mod Luminos și Mod Întunecat"
            >
              {tema === "dark" ? "☀️ Mod luminos" : "🌙 Mod întunecat"}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Antetul principal: Logo, Căutare, Coș / Informații */}
      <header className="app-header">
        <div className="header-container">
          <div className="header-brand">
            <div className="brand-logo">
              <span className="brand-icon">⚙️</span>
              <div className="brand-text">
                <h1>VYC PROD</h1>
                <span className="brand-tagline">Magazin Piese Auto & Accesorii</span>
              </div>
            </div>
          </div>

          <div className="header-search">
            <div className="search-input-group">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Caută piesă (ex: plăcuțe frână, filtru)..."
                value={cautare}
                onChange={(e) => setCautare(e.target.value)}
                aria-label="Căutare piese auto"
              />
              {cautare && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setCautare("")}
                  title="Șterge căutarea"
                >
                  ✕
                </button>
              )}
              <button type="button" className="search-submit-btn">
                Caută
              </button>
            </div>
          </div>

          <div className="header-actions">
            <div className="cart-widget">
              <span className="cart-icon">🛒</span>
              <div className="cart-details">
                <span className="cart-label">Coșul meu</span>
                <span className="cart-count"><strong>{active}</strong> în stoc</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Meniu de categorii */}
      <nav className="cat-nav" aria-label="Categorii principale">
        <div className="cat-nav-inner">
          <button
            type="button"
            className={categorieFiltru === "toate" ? "cat-btn active" : "cat-btn"}
            onClick={() => setCategorieFiltru("toate")}
          >
            Toate Categoriile
          </button>
          <button
            type="button"
            className={categorieFiltru === "franare" ? "cat-btn active" : "cat-btn"}
            onClick={() => setCategorieFiltru("franare")}
          >
            🛑 Sistem Frânare
          </button>
          <button
            type="button"
            className={categorieFiltru === "motor" ? "cat-btn active" : "cat-btn"}
            onClick={() => setCategorieFiltru("motor")}
          >
            ⚙️ Piese Motor
          </button>
          <button
            type="button"
            className={categorieFiltru === "suspensie" ? "cat-btn active" : "cat-btn"}
            onClick={() => setCategorieFiltru("suspensie")}
          >
            🛞 Suspensie & Direcție
          </button>
          <button
            type="button"
            className={categorieFiltru === "caroserie" ? "cat-btn active" : "cat-btn"}
            onClick={() => setCategorieFiltru("caroserie")}
          >
            🚗 Caroserie
          </button>
        </div>
      </nav>

      {/* 4. Banner Hero & Configurator căutare vehicul */}
      <section className="hero-banner">
        <div className="hero-container">
          <div className="hero-text">
            <span className="hero-badge">Piese Auto</span>
            <h2>Găsește piesele potrivite pentru mașina ta</h2>
            <p>
              Catalog de piese auto originale și compatibile pentru mașina ta.
            </p>
          </div>

          <div className="vehicle-configurator">
            <div className="configurator-title">
              <span>🚗</span> Configurator Rapid Piese
            </div>
            <div className="configurator-grid">
              <select defaultValue="" aria-label="Alege marca">
                <option value="" disabled>Alege Marca (ex: Dacia, Renault...)</option>
                <option value="dacia">Dacia</option>
                <option value="renault">Renault</option>
                <option value="vw">Volkswagen</option>
                <option value="ford">Ford</option>
                <option value="bmw">BMW</option>
              </select>

              <select defaultValue="" aria-label="Alege modelul">
                <option value="" disabled>Alege Modelul (ex: Logan, Duster...)</option>
                <option value="logan">Logan</option>
                <option value="duster">Duster</option>
                <option value="sandero">Sandero</option>
                <option value="golf">Golf</option>
                <option value="megane">Megane</option>
              </select>

              <select
                value={categorieFiltru}
                onChange={(e) => setCategorieFiltru(e.target.value)}
                aria-label="Alege categoria"
              >
                <option value="toate">Toate categoriile</option>
                <option value="franare">Frânare</option>
                <option value="motor">Motor</option>
                <option value="suspensie">Suspensie</option>
                <option value="caroserie">Caroserie</option>
              </select>

              <button
                type="button"
                className="configurator-btn"
                onClick={() => setCategorieFiltru("toate")}
              >
                Filtrează Catalogul
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Conținutul principal: Catalogul de piese */}
      <main className="container">
        <section className="panel">
          <div className="panel-header">
            <div>
              <h2>Catalog piese</h2>
              <span className="panel-subtitle">
                Produse verificate și pregătite pentru expediere
              </span>
            </div>
            <p className="app-count">
              {piese.length} piese în catalog, dintre care {active} în stoc
            </p>
          </div>

          {cautare && (
            <div className="search-feedback">
              <span>Rezultate pentru căutarea: "<strong>{cautare}</strong>"</span>
              <button
                type="button"
                className="btn-link"
                onClick={() => setCautare("")}
              >
                Resetează căutarea
              </button>
            </div>
          )}

          <PiesaList
            piese={pieseAfisate}
            onToggle={handleToggleStoc}
            onDelete={handleDelete}
          />
        </section>
      </main>

      {/* 6. Subsol curat */}
      <footer className="app-footer">
        <p>Proiect Tehnologii Web &copy; 2026 - Magazin Piese Auto</p>
      </footer>
    </div>
  );
}
