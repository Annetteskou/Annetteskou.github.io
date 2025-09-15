import styles from "./About.module.css";

export default function About() {
  return (
    <main className={styles.aboutPage}>
      <div className={styles.gridContainer}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <section className={styles.aboutSection}>
            <h2 className={styles.title}>&gt; Om mig</h2>
            <p>
              Mit navn er Annette Skou, jeg er 25 år og studere multimediedesign
              på Erhvervsakademi Aarhus i Viby, hvor jeg har specialiseret mig
              som frontend developer.
            </p>
            <p>
              Jeg interesserer mig for at skabe digitale løsninger, der
              kombinerer funktionalitet med et stærkt visuelt udtryk, og jeg
              elsker at se idéer blive til virkelighed gennem design og kode.
              Jeg er nysgerrig, detaljeorienteret og ambitiøs, og jeg giver
              altid 100 % i de projekter, jeg arbejder med.
            </p>
            <p>
              Jeg arbejder både selvstændigt og i teams, alt efter hvad
              projektet kræver, og jeg trives i begge roller. Uanset om det
              handler om at udvikle brugervenlige websites, eksperimentere med
              nye teknologier eller optimere eksisterende løsninger, går jeg
              altid all in.
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.button}>Download CV</button>
              <button className={styles.button}>Projekter</button>
            </div>
          </section>

          <section className={styles.hobbiesSection}>
            <h2 className={styles.title}>&gt; Hobbier</h2>
            <p>
              Når jeg ikke studerer, bruger jeg min fritid på reformertræning.
              Jeg elsker at male og dekorere min lejlighed med mine egne værker,
              og derudover gamer jeg, hvor jeg finder inspiration i digitale
              universer.
            </p>
          </section>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <div className={styles.imageWindows}>
            <img
              src="/images/mig2.png"
              alt="Annette Skou"
              className={`${styles.imageWindow} ${styles.img1}`}
            />
            <img
              src="/images/miggg.png"
              alt="Annette Skou"
              className={`${styles.imageWindow} ${styles.img2}`}
            />
            <img
              src="/images/mig1.png"
              alt="Annette Skou"
              className={`${styles.imageWindow} ${styles.img3}`}
            />
          </div>

          <div className={styles.skillsContainer}>
            <h3 className={styles.skillsTitle}>&gt; Programmer jeg bruger:</h3>
            <div className={styles.skillsGrid}>
              <div className={styles.skillItem}>
                <img
                  src="/images/js.png"
                  alt="JavaScript"
                  className={styles.jsIcon}
                />
                <span>JAVASKIFT</span>
              </div>
              <div className={styles.skillItem}>
                <img
                  src="/images/react1.png"
                  alt="React"
                  className={styles.reactIcon}
                />
                <span>REACT</span>
              </div>
              <div className={styles.skillItem}>
                <img
                  src="/images/html1.png"
                  alt="HTML"
                  className={styles.htmlIcon}
                />
                <span>HTML</span>
              </div>
              <div className={styles.skillItem}>
                <img
                  src="/images/css1.png"
                  alt="CSS"
                  className={styles.cssIcon}
                />
                <span>CSS</span>
              </div>
              <div className={styles.skillItem}>
                <img
                  src="/images/vite1.png"
                  alt="Vite"
                  className={styles.viteIcon}
                />
                <span>VITE</span>
              </div>
              <div className={styles.skillItem}>
                <img
                  src="/images/figma2.png"
                  alt="Figma"
                  className={styles.figmaIcon}
                />
                <span>FIGMA</span>
              </div>
              <div className={styles.skillItem}>
                <img
                  src="/images/ps.png"
                  alt="Photoshop"
                  className={styles.psIcon}
                />
                <span>Photoshop</span>
              </div>
              <div className={styles.skillItem}>
                <img
                  src="/images/ai.png"
                  alt="Illustrator"
                  className={styles.aiIcon}
                />
                <span>Illustrator</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomImages}>
        <img
          src="/images/maleri.png"
          alt="Hobby"
          className={`${styles.imageWindow} ${styles.img4}`}
        />
        <img
          src="/images/kamara.png"
          alt="Hobby"
          className={`${styles.imageWindow} ${styles.img5}`}
        />
        <img
          src="/images/elden.png"
          alt="Elden Ring"
          className={`${styles.imageWindow} ${styles.img6}`}
        />
        <img
          src="/images/phone.png"
          alt="Phone"
          className={`${styles.imageWindow} ${styles.img7}`}
        />
      </div>

      <section className={styles.contactSection}>
        <h2 className={styles.title}>&gt; Kontakt mig</h2>
        <button className={styles.button}>Kontakt mig her</button>
      </section>
    </main>
  );
}
