export default function DesprePage() {
  return (
    <section className="panel" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h2>Despre VYC PROD - Magazin Piese Auto</h2>
      <p style={{ marginTop: "16px", lineHeight: "1.7" }}>
        <strong>VYC PROD</strong> este o aplicație web modernă dedicată gestionării și
        comercializării pieselor auto, oferind un catalog complet de componente
        pentru motor, sisteme de frânare, suspensie și caroserie.
      </p>

      <h3 style={{ marginTop: "24px", marginBottom: "12px" }}>Arhitectură și Tehnologii</h3>
      <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
        <li>
          <strong>Frontend:</strong> React 19, Vite, React Router v7 (Single-Page Application cu rutare declarativă).
        </li>
        <li>
          <strong>Stilizare:</strong> CSS Modules pentru stiluri izolate la nivel de componentă și variabile CSS pentru temă luminoasă/întunecată.
        </li>
        <li>
          <strong>Backend simulativ:</strong> REST API prin <code>json-server</code> cu operațiuni complete CRUD (GET, POST, PATCH, DELETE).
        </li>
        <li>
          <strong>Standarde Web:</strong> HTML semantic, formulare accesibile și atribute de testare automată conform specificației <code>tw.json</code>.
        </li>
      </ul>

      <p style={{ marginTop: "20px", color: "var(--muted)", fontSize: "0.9rem" }}>
        Proiect dezvoltat în cadrul disciplinei <em>Tehnologii Web</em> &copy; 2026.
      </p>
    </section>
  );
}
