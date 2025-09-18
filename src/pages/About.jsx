// Importerer React hooks til state management
import { useState } from "react";
// Importerer React Router til navigation
import { useNavigate } from "react-router";
// Importerer CSS styles for denne side
import styles from "./About.module.css";
// Importerer floating lights komponenten til baggrundseffekt
import FloatingLights from "../component/FloatingLights";

// Hovedkomponenten for "Om mig" siden
export default function About() {
  // State til at holde styr på hvilket billede der er zoomed
  const [zoomedImg, setZoomedImg] = useState(null);
  // Hook til navigation mellem sider
  const navigate = useNavigate();

  // Funktion til at håndtere klik på billeder (zoom effekt)
  const handleImageClick = (imgId) => {
    // Hvis man klikker på samme billede der allerede er zoomed, gør ingenting
    if (zoomedImg === imgId) return;

    // Sæt det nye zoomed billede
    setZoomedImg(imgId);

    // Auto-reset efter 2 sekunder
    setTimeout(() => {
      setZoomedImg(null);
    }, 2000);
  };

  // Funktion til at downloade CV
  const handleDownloadCV = () => {
    // Opret et link element til at trigge download
    const link = document.createElement("a");
    link.href = "/CV- Annette Skou.pdf"; // Sti til CV filen
    link.download = "CV- Annette Skou.pdf"; // Navn på den downloadede fil
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className={styles.aboutPage}>
      <FloatingLights />

      <div className={styles.gridContainer}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <section className={styles.aboutSection}>
            <h2 className={styles.title}>&gt; Om mig</h2>
            <p>
              &gt; Mit navn er Annette Skou, jeg er 25 år og studerer
              multimediedesign på Erhvervsakademi Aarhus i Viby, hvor jeg har
              specialiseret mig som frontend developer.
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
              <button className={styles.button} onClick={handleDownloadCV}>
                Download CV
              </button>
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
              className={`${styles.imageWindow} ${styles.img1} ${styles.floatingImage}`}
              style={{
                animationDelay: "0s",
                transform: `rotate(-3deg) translateY(${
                  Math.sin(Date.now() / 1000) * 8
                }px)`,
              }}
            />
            <img
              src="/images/miggg.png"
              alt="Annette Skou"
              className={`${styles.imageWindow} ${styles.img2} ${styles.floatingImage}`}
              style={{
                animationDelay: "0.3s",
                transform: `rotate(2deg) translateY(${
                  Math.sin(Date.now() / 1000 + 0.3) * 8
                }px)`,
                zIndex: 9999,
                position: "relative",
              }}
            />
            <img
              src="/images/mig1.png"
              alt="Annette Skou"
              className={`${styles.imageWindow} ${styles.img3} ${styles.floatingImage}`}
              style={{
                animationDelay: "0.6s",
                transform: `rotate(-1deg) translateY(${
                  Math.sin(Date.now() / 1000 + 0.6) * 8
                }px)`,
              }}
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
        {/* Maleri Images */}
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
          src="/images/pilates.png"
          alt="Pilates"
          className={`${styles.imageWindow} ${styles.img8}`}
        />
        <img
          src="/images/gameboy.png"
          alt="Game Boy"
          className={`${styles.imageWindow} ${styles.img7}`}
        />
        <img
          src="/images/elden.png"
          alt="Elden Ring"
          className={`${styles.imageWindow} ${styles.img9}`}
        />
      </div>
    </main>
  );
}
