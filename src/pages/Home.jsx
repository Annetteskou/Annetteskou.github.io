import { NavLink } from "react-router";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      {/* Top pill-nav */}
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

      {/* Øverste linje (kant-til-kant) */}
      <div className={`${styles.rule} ${styles.ruleTop}`} />

      {/* HERO GRID */}
      <section className={styles.hero}>
        {/* Række 1: Titel (venstre) + Rolle-tekst (højre) */}
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>
            Velkommen
            <br />
            til mit
            <br />
            portfolio
          </h1>
        </div>

        <p className={styles.role}>
          <span className={styles.chev}>&gt;</span> Multimediedesigner Studterne
          <br />
          <span className={styles.chev}>&gt;</span>{" "}
          <span className={styles.subRole}>& Fronted developer studterne</span>
        </p>

        {/* Række 2: Midterlinje på tværs */}
        <div className={`${styles.rule} ${styles.ruleMid}`} />

        {/* Række 3: Intro + socials (venstre) + Monitor (højre) */}
        <div className={styles.leftBottom}>
          <div className={styles.introSection}>
            <div className={styles.helloRow}>
              <span className={styles.muted}>...Hej jeg er</span>
              <span className={styles.dash} />
              <span className={styles.name}>
                Annette
                <br />
                Skou
              </span>
            </div>
            <div className={styles.codeSymbol}>
              &lt;/&gt;
            </div>
          </div>

          <div className={styles.socials}>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <img
                src="/GITHUB.png"
                alt="GitHub"
                className={styles.githubIcon}
              />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <img
                src="/LINK.png"
                alt="LinkedIn"
                className={styles.linkedinIcon}
              />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <img
                src="/instagram.png"
                alt="Instagram"
                className={styles.instagramIcon}
              />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <img
                src="/facebook.png"
                alt="Facebook"
                className={styles.facebookIcon}
              />
            </a>
          </div>
        </div>

        <div className={styles.monitorWrap}>
          <div className={styles.monitorFrame}>
            <img
              src="/Computer Coding Sticker by Rijn IJssel.gif"
              alt="Coding monitor"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
