const ETICHETE_TIP = {
  franare: "Frânare",
  motor: "Motor",
  suspensie: "Suspensie",
  caroserie: "Caroserie",
};

export default function PiesaCard({ piesa }) {
  return (
    <li className={!piesa.inStoc ? "item-card done" : "item-card"}>
      <div>
        <h3>{piesa.titlu}</h3>
        <span className={`badge badge-${piesa.tip}`}>
          Categorie: {ETICHETE_TIP[piesa.tip]}
        </span>
      </div>
      <span className="status">
        {piesa.inStoc ? "În stoc" : "Indisponibil"}
      </span>
    </li>
  );
}