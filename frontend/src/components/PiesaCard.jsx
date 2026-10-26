const ETICHETE_TIP = {
  franare: "Frânare",
  motor: "Motor",
  suspensie: "Suspensie",
  caroserie: "Caroserie",
};

const ICONS_TIP = {
  franare: "🛑",
  motor: "⚙️",
  suspensie: "🛞",
  caroserie: "🚗",
};

export default function PiesaCard({ piesa, onToggle, onDelete }) {
  return (
    <li className={!piesa.inStoc ? "item-card done" : "item-card"}>
      <div className="card-thumb">
        <span className="part-icon">{ICONS_TIP[piesa.tip] || "🔧"}</span>
      </div>

      <div className="card-main">
        <div className="card-header-row">
          <span className={`badge badge-${piesa.tip}`}>
            {ETICHETE_TIP[piesa.tip] || piesa.tip}
          </span>
          <span className="part-code">COD: AP-00{piesa.id}</span>
        </div>
        
        <h3 className="part-title">{piesa.titlu}</h3>
        
        <div className="card-status-row">
          <span className={piesa.inStoc ? "stock-tag in-stock" : "stock-tag out-of-stock"}>
            {piesa.inStoc ? "● În stoc (Livrare 24-48h)" : "○ Indisponibil momentan"}
          </span>
        </div>
      </div>

      <div className="card-actions">
        <label className="card-left" title="Comută disponibilitatea în stoc">
          <input
            type="checkbox"
            checked={piesa.inStoc}
            onChange={() => onToggle(piesa.id)}
          />
          <span className="stock-label">În stoc</span>
        </label>
        
        <button
          className="btn-danger"
          onClick={() => onDelete(piesa.id)}
          aria-label={`Șterge ${piesa.titlu}`}
          title="Șterge piesa din catalog"
        >
          🗑️ Șterge
        </button>
      </div>
    </li>
  );
}

