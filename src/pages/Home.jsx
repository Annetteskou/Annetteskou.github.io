import { NavLink } from "react-router";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      {/* PILL-NAV i toppen */}
      <nav className={styles.pillNav}>
        <span className={`${styles.pill} ${styles.pillCode}`}>&lt;/&gt;</span>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${styles.pill} ${styles.active}` : styles.pill
          }
        >
          Hjem
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive ? `${styles.pill} ${styles.active}` : styles.pill
          }
        >
          Projekt
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.pill} ${styles.active}` : styles.pill
          }
        >
          Om mig
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? `${styles.pill} ${styles.active}` : styles.pill
          }
        >
          Kontakt
        </NavLink>
      </nav>

      {/* Øverste linje (tyk) */}
      <div className={`${styles.rule} ${styles.ruleTop}`} />

      {/* HERO */}
      <section className={styles.hero}>
        {/* Venstre: stor titel + intro + socials */}
        <div className={styles.left}>
          <h1 className={styles.title}>
            Velkommen
            <br />
            til mit
            <br />
            portfolie
          </h1>

          <div className={styles.helloRow}>
            <span className={styles.muted}>...Hej jeg er</span>
            <span className={styles.dash} />
            <span className={styles.name}>
              Annette
              <br />
              Skou
            </span>
          </div>

          <div className={styles.socials}>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <img src="/GITHUB.png" alt="GitHub" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <img src="/LINK.png" alt="LinkedIn" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <img src="/instagram.png" alt="Instagram" />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <img src="/facebook.png" alt="Facebook" />
            </a>
          </div>
        </div>

        {/* Højre: rolle + monitor i dobbeltram */}
        <div className={styles.right}>
          <p className={styles.role}>
            <span className={styles.chev}>&gt;</span>
            Multimediedesigner Studterne
            <br />
            <span className={styles.chev}>&gt;</span>
            <span className={styles.subRole}>
              {" "}
              Frontend developer studeterne
            </span>
          </p>

          <div className={styles.monitorWrap}>
            <div className={styles.monitorFrame}>
              <img
                src="/Computer Coding Sticker by Rijn IJssel.gif"
                alt="Coding monitor"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Midter-linje (tyk) */}
      <div className={`${styles.rule} ${styles.ruleMid}`} />
    </main>
  );
}
