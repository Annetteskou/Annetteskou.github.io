// ========================================
// KONTAKT SIDE KOMPONENT - Contact.jsx
// ========================================
// Dette er kontakt siden hvor brugeren kan se kontakt information
// og udfylde et kontakt formular

// Importerer CSS styles for kontakt siden
import styles from "./Contact.module.css";
// Importerer floating lights komponenten til baggrundseffekt
import FloatingLights from "../component/FloatingLights";

// Hovedkomponenten for kontakt siden
export default function Contact() {
  return (
    <main className={styles.contactPage}>
      {/* Floating lights baggrundseffekt */}
      <FloatingLights />

      {/* Hovedcontainer for hele siden */}
      <div className={styles.container}>
        {/* Header sektion med titel og understregning */}
        <div className={styles.headerRow}>
          <h1 className={styles.title}>&gt; Kontakt</h1>
          <span className={styles.titleUnderline} />
        </div>

        {/* Grid layout med to kolonner */}
        <section className={styles.grid}>
          {/* ========================================
               VENSTRE KOLONNE - KONTAKT INFORMATION
               ======================================== */}
          <div className={styles.infoPanel}>
            <h2 className={styles.panelTitle}>Info</h2>

            {/* Navn information med profil ikon */}
            <div className={styles.infoItem}>
              <img
                className={styles.infoImgIcon}
                src="/images/profil.webp"
                alt="Profil"
              />
              <div className={styles.infoText}>
                <div className={styles.infoLabel}>Navn</div>
                <div className={styles.infoValue}>Annette Skou</div>
              </div>
            </div>

            {/* Email information med email ikon */}
            <div className={styles.infoItem}>
              <img
                className={styles.infoImgIcon}
                src="/images/email.png"
                alt="Email"
              />
              <div className={styles.infoText}>
                <div className={styles.infoLabel}>Email</div>
                <div className={styles.infoValue}>Annette-skou@hotmail.com</div>
              </div>
            </div>

            {/* Telefon information med telefon ikon */}
            <div className={styles.infoItem}>
              <img
                className={styles.infoImgIcon}
                src="/images/Phone-Icon-PNG-Picture.png"
                alt="Telefon"
              />
              <div className={styles.infoText}>
                <div className={styles.infoLabel}>Nummer</div>
                <div className={styles.infoValue}>+45 40 23 49 19</div>
              </div>
            </div>

            {/* Sociale medier links sektion */}
            <div className={styles.socialRow}>
              {/* LinkedIn link */}
              <a
                className={styles.socialLink}
                href="https://www.linkedin.com/in/annette-skou-5b2b3b1b4/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/LINK.png" alt="LinkedIn" />
              </a>
              {/* GitHub link */}
              <a
                className={styles.socialLink}
                href="https://github.com/Annetteskou"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/GITHUB.png" alt="GitHub" />
              </a>
              {/* Instagram link */}
              <a
                className={styles.socialLink}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/instagram.png" alt="Instagram" />
              </a>
              {/* Facebook link */}
              <a
                className={styles.socialLink}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/facebook.png" alt="Facebook" />
              </a>
            </div>
          </div>

          {/* ========================================
               HØJRE KOLONNE - KONTAKT FORMULAR
               ======================================== */}
          <div className={styles.formPanel}>
            <h2 className={styles.panelTitle}>Kontakt mig</h2>

            {/* Kontakt formular */}
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              {/* Navn input felt */}
              <label className={styles.inputWrapper}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Navn"
                />
              </label>

              {/* Telefon input felt */}
              <label className={styles.inputWrapper}>
                <input
                  className={styles.input}
                  type="tel"
                  placeholder="Nummer"
                />
              </label>

              {/* Email input felt */}
              <label className={styles.inputWrapper}>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Email"
                />
              </label>

              {/* Besked textarea felt */}
              <label className={styles.inputWrapper}>
                <textarea
                  className={styles.textarea}
                  placeholder="Besked"
                  rows={5}
                />
              </label>

              {/* Submit knap container */}
              <div className={styles.actions}>
                <button className={styles.submitBtn} type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Dekorativ side figur (mobil) */}
        <img
          className={styles.sideCharacter}
          src="/images/mobil.png"
          alt="Figur"
        />
      </div>
    </main>
  );
}
