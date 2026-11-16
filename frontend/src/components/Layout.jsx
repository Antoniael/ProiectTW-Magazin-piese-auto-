import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

// NavLink marchează singur pagina curentă
function navClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Layout() {
  const [tema, setTema] = useState(temaInitiala);

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
  }, [tema]);

  function handleTema() {
    setTema((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <div className="site-wrapper">
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <span>⚙️</span>
            <span>VYC PROD</span>
          </div>

          <nav className={styles.nav} data-testid="nav">
            <NavLink to="/" end className={navClass}>
              Catalog piese
            </NavLink>
            <NavLink to="/despre" className={navClass}>
              Despre
            </NavLink>
          </nav>

          <div className={styles.actions}>
            <button
              className="theme-toggle"
              onClick={handleTema}
              aria-pressed={tema === "dark"}
              title="Schimbă tema între Mod Luminos și Mod Întunecat"
            >
              {tema === "dark" ? "☀️ Luminos" : "🌙 Întunecat"}
            </button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        Proiect Tehnologii Web &copy; 2026 - Magazin Piese Auto
      </footer>
    </div>
  );
}
