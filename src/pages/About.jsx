import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./About.module.css";

export default function About() {
  const [zoomedImg, setZoomedImg] = useState(null);
  const navigate = useNavigate();

  const handleImageClick = (imgId) => {
    // If clicking the same image that's already zoomed, do nothing (it will auto-reset)
    if (zoomedImg === imgId) return;

    // Set the new zoomed image
    setZoomedImg(imgId);

    // Auto-reset after 2 seconds
    setTimeout(() => {
      setZoomedImg(null);
    }, 2000);
  };
  return (
    <main className={styles.aboutPage}>
      <div className={styles.gridContainer}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <section className={styles.aboutSection}>
            <h2 className={styles.title}>&gt; Om mig</h2>
            <p>
              &gt; Mit navn er Annette Skou, jeg er 25 år og studere
              multimediedesign på Erhvervsakademi Aarhus i Viby, hvor jeg har
              specialiseret mig som frontend developer.
            </p>
            <p>
              &gt; Jeg interesserer mig for at skabe digitale løsninger, der
              kombinerer funktionalitet med et stærkt visuelt udtryk, og jeg
              elsker at se idéer blive til virkelighed gennem design og kode.
              Jeg er nysgerrig, detaljeorienteret og ambitiøs, og jeg giver
              altid 100 % i de projekter, jeg arbejder med.
            </p>
            <p>
              &gt; Jeg arbejder både selvstændigt og i teams, alt efter hvad
              projektet kræver, og jeg trives i begge roller. Uanset om det
              handler om at udvikle brugervenlige websites, eksperimentere med
              nye teknologier eller optimere eksisterende løsninger, går jeg
              altid all in.
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.button}>Download CV</button>
              <button
                className={styles.button}
                onClick={() => navigate("/project")}
              >
                Projekter
              </button>
            </div>
          </section>

          <section className={styles.hobbiesSection}>
            <h2 className={styles.title}>&gt; Hobbier</h2>
            <p>
              &gt; Når jeg ikke studerer, bruger jeg min fritid på
              reformertræning. Jeg elsker at male og dekorere min lejlighed med
              mine egne værker, og derudover gamer jeg, hvor jeg finder
              inspiration i digitale universer.
            </p>
          </section>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <div className={styles.imageWindows}>
            <img
              src="/images/mig2.png"
              alt="Annette Skou"
              className={`${styles.imageWindow} ${styles.img1} ${
                zoomedImg === "img1" ? styles.zoomed : ""
              }`}
              onClick={() => handleImageClick("img1")}
            />
            <img
              src="/images/miggg.png"
              alt="Annette Skou"
              className={`${styles.imageWindow} ${styles.img2} ${
                zoomedImg === "img2" ? styles.zoomed : ""
              }`}
              onClick={() => handleImageClick("img2")}
            />
            <img
              src="/images/mig1.png"
              alt="Annette Skou"
              className={`${styles.imageWindow} ${styles.img3} ${
                zoomedImg === "img3" ? styles.zoomed : ""
              }`}
              onClick={() => handleImageClick("img3")}
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
          src="/images/maleri1.png"
          alt="Maleri 1"
          className={`${styles.imageWindow} ${styles.img4} ${
            zoomedImg === "img4" ? styles.zoomed : ""
          }`}
          onClick={() => handleImageClick("img4")}
        />
        <img
          src="/images/maleri2.png"
          alt="Maleri 2"
          className={`${styles.imageWindow} ${styles.img5} ${
            zoomedImg === "img5" ? styles.zoomed : ""
          }`}
          onClick={() => handleImageClick("img5")}
        />
        <img
          src="/images/maleri3.png"
          alt="Maleri 3"
          className={`${styles.imageWindow} ${styles.img6} ${
            zoomedImg === "img6" ? styles.zoomed : ""
          }`}
          onClick={() => handleImageClick("img6")}
        />
        <img
          src="/images/kamara.png"
          alt="Kamera"
          className={`${styles.imageWindow} ${styles.img8} ${
            zoomedImg === "img8" ? styles.zoomed : ""
          }`}
          onClick={() => handleImageClick("img8")}
        />
        <img
          src="/images/gameboy.png"
          alt="Game Boy"
          className={`${styles.imageWindow} ${styles.img7} ${
            zoomedImg === "img7" ? styles.zoomed : ""
          }`}
          onClick={() => handleImageClick("img7")}
        />
        <img
          src="/images/elden.png"
          alt="Elden Ring"
          className={`${styles.imageWindow} ${styles.img9} ${
            zoomedImg === "img9" ? styles.zoomed : ""
          }`}
          onClick={() => handleImageClick("img9")}
        />
      </div>
    </main>
  );
}
