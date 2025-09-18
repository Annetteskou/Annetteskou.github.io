import { NavLink } from "react-router";
import styles from "./Home.module.css";
import FloatingLights from "../component/FloatingLights";

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
                <span className={styles.lastName}>Skou</span>
              </span>
            </div>
            <div className={styles.codeSymbol}>&lt;/&gt;</div>
          </div>

          <div className={styles.socials}>
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
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <img
                src="/images/LINK.png"
                alt="LinkedIn"
                className={styles.linkedinIcon}
              />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <img
                src="/images/instagram.png"
                alt="Instagram"
                className={styles.instagramIcon}
              />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <img
                src="/images/facebook.png"
                alt="Facebook"
                className={styles.facebookIcon}
              />
            </a>
          </div>
        </div>

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
