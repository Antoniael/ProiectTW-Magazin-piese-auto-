import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPiesa } from "../api.js";
import { ETICHETE_TIP } from "../constants.js";
import styles from "./PiesaDetaliuPage.module.css";

export default function PiesaDetaliuPage() {
  const { id } = useParams();
  const [piesa, setPiesa] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await fetchPiesa(id);
        if (!ignore) {
          setPiesa(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă detaliile piesei...
      </p>
    );
  }

  if (error || !piesa) {
    return (
      <div className="error" data-testid="error">
        <p>
          Nu s-au putut încărca detaliile piesei: {error ?? "Piesa nu a fost găsită."}
        </p>
        <Link to="/" className="btn" style={{ marginTop: "12px", display: "inline-block" }}>
          &larr; Înapoi la catalog
        </Link>
      </div>
    );
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <h2 className={styles.detailTitle} data-testid="detail-title">
        {piesa.titlu}
      </h2>

      <dl className={styles.fields}>
        <dt>Identificator piesă</dt>
        <dd>
          <code>#{piesa.id}</code>
        </dd>

        <dt>Categorie / Tip</dt>
        <dd>{ETICHETE_TIP[piesa.tip] ?? piesa.tip}</dd>

        <dt>Stare disponibilitate</dt>
        <dd>
          <span className={`badge ${piesa.inStoc ? "badge-success" : "badge-warning"}`}>
            {piesa.inStoc ? "În stoc (livrare 24-48h)" : "Indisponibil"}
          </span>
        </dd>

        <dt>Compatibilitate</dt>
        <dd>Verificată conform seriei de șasiu (VIN)</dd>
      </dl>

      <div className={styles.actions}>
        <Link to="/" className="btn">
          &larr; Înapoi la catalog
        </Link>
      </div>
    </section>
  );
}
