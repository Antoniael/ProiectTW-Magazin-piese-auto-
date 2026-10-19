import PiesaCard from "./PiesaCard.jsx";

export default function PiesaList({ piese }) {
  // 1. Dacă lista este goală, afișăm un mesaj explicit (return timpuriu)
  if (piese.length === 0) {
    return <p className="empty">Nu există nicio piesă în catalog.</p>;
  }

  // 2. Altfel, randăm lista de carduri folosind map și key={piesa.id}
  return (
    <ul className="item-list">
      {piese.map((piesa) => (
        <PiesaCard key={piesa.id} piesa={piesa} />
      ))}
    </ul>
  );
}