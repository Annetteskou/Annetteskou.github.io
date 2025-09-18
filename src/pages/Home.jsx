// Importerer React Router til navigation
import { NavLink } from "react-router";
// Importerer CSS styles for denne side
import styles from "./Home.module.css";
// Importerer floating lights komponenten til baggrundseffekt
import FloatingLights from "../component/FloatingLights";

// Hovedkomponenten for forsiden
export default function Home() {
  return (
    <main className={styles.home}>
      <FloatingLights />

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
          <span className={styles.chev}>&gt;</span> Multimediedesigner
          Studerende
          <br />
          <span className={styles.chev}>&gt;</span>{" "}
          <span className={styles.subRole}>
            & Frontend developer studerende
          </span>
        </p>

        {/* Række 2: Midterlinje på tværs */}
        <div className={`${styles.rule} ${styles.ruleMid}`} />

        {/* Række 3: Intro + socials (venstre) + Monitor (højre) */}
        <div className={styles.leftBottom}>
          {/* Intro sektion med navn og kode symbol */}
          <div className={styles.introSection}>
            <div className={styles.helloRow}>
              <span className={styles.muted}>...Hej jeg er</span>
              <span className={styles.dash} />
              <span className={styles.name}>
                Annette
                <br />
                <span className={styles.lastName}>Skou</span>
              </span>
            </div>
            {/* HTML kode symbol */}
            <div className={styles.codeSymbol}>&lt;/&gt;</div>
          </div>

          {/* Sociale medier links */}
          <div className={styles.socials}>
            {/* GitHub link */}
            <a
              href="https://github.com/Annetteskou"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/GITHUB.png"
                alt="GitHub"
                className={styles.githubIcon}
              />
            </a>
            {/* LinkedIn link */}
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <img
                src="/images/LINK.png"
                alt="LinkedIn"
                className={styles.linkedinIcon}
              />
            </a>
            {/* Instagram link */}
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <img
                src="/images/instagram.png"
                alt="Instagram"
                className={styles.instagramIcon}
              />
            </a>
            {/* Facebook link */}
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <img
                src="/images/facebook.png"
                alt="Facebook"
                className={styles.facebookIcon}
              />
            </a>
          </div>
        </div>

        {/* Monitor sektion med coding animation */}
        <div className={styles.monitorWrap}>
          <div className={styles.monitorFrame}>
            <img
              src="/images/Computer Coding Sticker by Rijn IJssel.gif"
              alt="Coding monitor"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
