import { Link } from "react-router-dom";
import { ETICHETE_TIP } from "../constants.js";
import styles from "./PiesaCard.module.css";

export default function PiesaCard({ piesa, onToggle, onDelete }) {
  return (
    <li
      className={piesa.inStoc ? styles.card : `${styles.card} ${styles.done}`}
      data-testid="item"
      data-id={piesa.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={piesa.inStoc}
          onChange={() => onToggle(piesa.id)}
          aria-label={`Marchează ${piesa.titlu}`}
          data-testid="item-toggle"
        />

        <div className={styles.info}>
          <div className={styles.meta}>
            <span className={`badge badge-${piesa.tip}`}>
              {ETICHETE_TIP[piesa.tip] || piesa.tip}
            </span>
            <span className={styles.partCode}>COD: AP-00{piesa.id}</span>
          </div>

          <Link
            to={`/piese/${piesa.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            {piesa.titlu}
          </Link>

          <span className={`${styles.status} ${piesa.inStoc ? styles.inStock : styles.outOfStock}`}>
            {piesa.inStoc ? "● În stoc" : "○ Indisponibil"}
          </span>
        </div>
      </div>

      <button
        className="btn-danger"
        onClick={() => onDelete(piesa.id)}
        aria-label={`Șterge ${piesa.titlu}`}
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}
