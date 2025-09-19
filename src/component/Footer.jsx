// ========================================
// FOOTER KOMPONENT - Footer.jsx
// ========================================
// Dette er footer komponenten der vises på de fleste sider
// Den indeholder kontakt information, navigation links og sociale medier

// Importerer CSS styles for footer
import styles from "./Footer.module.css";
// Importerer Link fra React Router til navigation
import { Link } from "react-router";

// Footer komponenten der viser kontakt information og navigation
export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Kontakt mig sektion med knap - hovedkontakt sektion */}
      <section className={styles.contactSection}>
        <h2 className={styles.contactTitle}>&gt; Kontakt mig</h2>
        <div className={styles.contactContainer}>
          {/* Kontakt knap med navigation til kontakt siden */}
          <Link to="/contact" className={styles.contactButton}>
            <span className={styles.contactText}>Kontakt mig her</span>
          </Link>
          {/* Kontakt ikon */}
          <img
            src="/images/footer.webp"
            alt="Contact"
            className={styles.contactIcon}
          />
        </div>
      </section>

      {/* Footer indhold med navigation og sociale medier - hovedfooter sektion */}
      <div className={styles.footerContent}>
        {/* Venstre sektion med navigation links - hovednavigation */}
        <div className={styles.leftSection}>
          <nav className={styles.footerNav}>
            <a href="/" className={styles.navLink}>
              Hjem
            </a>
            <a href="/about" className={styles.navLink}>
              Om mig
            </a>
            <a href="/projects" className={styles.navLink}>
              Projekter
            </a>
            <a href="/contact" className={styles.navLink}>
              Kontakt
            </a>
          </nav>
        </div>

        {/* Midter sektion med navn - portfolie ejer navn */}
        <div className={styles.centerSection}>
          <span className={styles.name}>Annette Skou</span>
        </div>

        {/* Højre sektion med sociale medier ikoner - GitHub, LinkedIn, Instagram, Facebook */}
        <div className={styles.rightSection}>
          <div className={styles.socialIcons}>
            {/* LinkedIn link - til LinkedIn profil */}
            <a
              href="https://www.linkedin.com/in/annette-skou-561a84384/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/LINK.png"
                alt="LinkedIn"
                className={styles.socialIcon}
              />
            </a>
            {/* GitHub link - til GitHub profil */}
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
            {/* Instagram link - til Instagram profil */}
            <a
              href="https://www.instagram.com/annette_skou/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/instagram.png"
                alt="Instagram"
                className={styles.socialIcon}
              />
            </a>
            {/* Facebook link - til Facebook profil */}
            <a
              href="https://www.facebook.com/annette.skou.1/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/facebook.png"
                alt="Facebook"
                className={styles.socialIcon}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
