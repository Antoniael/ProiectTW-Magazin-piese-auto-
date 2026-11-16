import { useState, useEffect } from "react";
import PiesaList from "../components/PiesaList.jsx";
import PiesaForm from "../components/PiesaForm.jsx";
import { createPiesa, deletePiesa, fetchPiese, updatePiesa } from "../api.js";
import { TIPURI } from "../constants.js";
import styles from "./PiesePage.module.css";

export default function PiesePage() {
  const [piese, setPiese] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cautare, setCautare] = useState("");
  const [categorieFiltru, setCategorieFiltru] = useState("toate");

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await fetchPiese();
        if (!ignore) setPiese(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

  async function handleAdd(piesa) {
    const creat = await createPiesa(piesa);
    setPiese((prev) => [...prev, creat]);
  }

  async function handleToggleStoc(id) {
    const piesa = piese.find((p) => p.id === id);
    if (!piesa) return;
    try {
      const actualizat = await updatePiesa(id, { inStoc: !piesa.inStoc });
      setPiese((prev) => prev.map((p) => (p.id === id ? actualizat : p)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deletePiesa(id);
      setPiese((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleReset() {
    setLoading(true);
    setError(null);
    setCautare("");
    setCategorieFiltru("toate");
    try {
      const data = await fetchPiese();
      setPiese(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const active = piese.filter((p) => p.inStoc).length;

  const pieseAfisate = piese.filter((p) => {
    const sePotrivesteText = p.titlu.toLowerCase().includes(cautare.toLowerCase());
    const sePotrivesteCategorie =
      categorieFiltru === "toate" || p.tip === categorieFiltru;
    return sePotrivesteText && sePotrivesteCategorie;
  });

  return (
    <div className={styles.grid}>
      {/* Coloana stângă: Formular de adăugare */}
      <section className="panel">
        <h2>Adaugă piesă</h2>
        <PiesaForm onAdd={handleAdd} />
      </section>

      {/* Coloana dreaptă: Catalog piese */}
      <section className="panel">
        <div className={styles.panelHeader}>
          <div>
            <h2>Catalog piese</h2>
            <span className={styles.panelSubtitle}>
              Produse verificate și pregătite pentru expediere
            </span>
          </div>
          <div className={styles.headerActions}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleReset}
              title="Resetează filtrele și reîncarcă datele din server"
            >
              🔄 Resetare
            </button>
            <p className={styles.appCount}>
              {piese.length} piese în catalog ({active} în stoc)
            </p>
          </div>
        </div>

        {/* Filtre și căutare */}
        <div className={styles.filterBar}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Caută piesă (ex: filtru, plăcuțe)..."
            value={cautare}
            onChange={(e) => setCautare(e.target.value)}
            aria-label="Căutare piese auto"
          />
          <select
            className={styles.selectCategory}
            value={categorieFiltru}
            onChange={(e) => setCategorieFiltru(e.target.value)}
            aria-label="Filtrare după categorie"
          >
            <option value="toate">Toate categoriile</option>
            {TIPURI.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        {cautare && (
          <div className={styles.searchFeedback}>
            <span>
              Rezultate pentru: &quot;<strong>{cautare}</strong>&quot;
            </span>
            <button
              type="button"
              className={styles.btnLink}
              onClick={() => setCautare("")}
            >
              Șterge căutarea
            </button>
          </div>
        )}

        {loading && (
          <p className="info" data-testid="loading">
            Se încarcă catalogul de piese...
          </p>
        )}

        {error && (
          <div className="error" data-testid="error">
            <p>Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?</p>
            <button
              type="button"
              className="btn"
              onClick={handleReset}
              style={{ marginTop: "10px" }}
            >
              🔄 Reîncearcă
            </button>
          </div>
        )}

        {!loading && (
          <PiesaList
            piese={pieseAfisate}
            onToggle={handleToggleStoc}
            onDelete={handleDelete}
          />
        )}
      </section>
    </div>
  );
}
