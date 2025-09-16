import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Kontakt mig section */}
      <section className={styles.contactSection}>
        <h2 className={styles.contactTitle}>&gt; Kontakt mig</h2>
        <div className={styles.contactContainer}>
          <div className={styles.contactButton}>
            <span className={styles.contactText}>Kontakt mig her</span>
          </div>
          <img src="/images/footer.webp" alt="Contact" className={styles.contactIcon} />
        </div>
      </section>
      
      <div className={styles.footerContent}>
        <div className={styles.leftSection}>
          <nav className={styles.footerNav}>
            <a href="/" className={styles.navLink}>Hjem</a>
            <a href="/about" className={styles.navLink}>Om mig</a>
            <a href="/projects" className={styles.navLink}>Projekter</a>
            <a href="/contact" className={styles.navLink}>Kontakt</a>
          </nav>
        </div>
        
        <div className={styles.centerSection}>
          <span className={styles.name}>Annette Skou</span>
        </div>
        
        <div className={styles.rightSection}>
          <div className={styles.socialIcons}>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <img src="/images/LINK.png" alt="LinkedIn" className={styles.socialIcon} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <img src="/images/GITHUB.png" alt="GitHub" className={styles.githubIcon} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <img src="/images/instagram.png" alt="Instagram" className={styles.socialIcon} />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <img src="/images/facebook.png" alt="Facebook" className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
