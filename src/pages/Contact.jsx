import styles from "./Contact.module.css";
import FloatingLights from "../component/FloatingLights";

export default function Contact() {
  return (
    <main className={styles.contactPage}>
      <FloatingLights />
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h1 className={styles.title}>&gt; Kontakt</h1>
          <span className={styles.titleUnderline} />
        </div>

        <section className={styles.grid}>
          <div className={styles.infoPanel}>
            <h2 className={styles.panelTitle}>Info</h2>

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

            <div className={styles.socialRow}>
              <a
                className={styles.socialLink}
                href="https://www.linkedin.com/in/annette-skou-5b2b3b1b4/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/LINK.png" alt="LinkedIn" />
              </a>
              <a
                className={styles.socialLink}
                href="https://github.com/Annetteskou"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/GITHUB.png" alt="GitHub" />
              </a>
              <a
                className={styles.socialLink}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/instagram.png" alt="Instagram" />
              </a>
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

          <div className={styles.formPanel}>
            <h2 className={styles.panelTitle}>Kontakt mig</h2>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <label className={styles.inputWrapper}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Navn"
                />
              </label>
              <label className={styles.inputWrapper}>
                <input
                  className={styles.input}
                  type="tel"
                  placeholder="Nummer"
                />
              </label>
              <label className={styles.inputWrapper}>
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Email"
                />
              </label>
              <label className={styles.inputWrapper}>
                <textarea
                  className={styles.textarea}
                  placeholder="Besked"
                  rows={5}
                />
              </label>
              <div className={styles.actions}>
                <button className={styles.submitBtn} type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
        <img
          className={styles.sideCharacter}
          src="/images/anicross.png"
          alt="Figur"
        />
      </div>
    </main>
  );
}
