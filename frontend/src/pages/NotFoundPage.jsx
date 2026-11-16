import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section
      className="panel"
      data-testid="not-found"
      style={{ maxWidth: "600px", margin: "40px auto", textAlign: "center" }}
    >
      <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🔍</div>
      <h2>Pagina nu a fost găsită (404)</h2>
      <p style={{ margin: "16px 0 24px", color: "var(--muted)" }}>
        Adresa accesată nu există sau piesa căutată a fost eliminată din sistem.
      </p>
      <Link to="/" className="btn">
        &larr; Înapoi la catalog
      </Link>
    </section>
  );
}
