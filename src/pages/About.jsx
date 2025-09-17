import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./About.module.css";

export default function About() {
  const [zoomedImg, setZoomedImg] = useState(null);
  const navigate = useNavigate();

  const maleriImages = [
    { src: "/images/maleri1.png", alt: "Maleri 1" },
    { src: "/images/maleri2.png", alt: "Maleri 2" },
    { src: "/images/maleri3.png", alt: "Maleri 3" },
  ];

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
      {/* Floating Background Lights */}
      <div className={styles.floatingLights}>
        <div
          className={styles.lightOrb}
          style={{
            "--delay": "0s",
            "--duration": "8s",
            "--x": "10%",
            "--y": "20%",
            "--color": "rgba(102, 126, 234, 0.08)",
            "--color2": "rgba(102, 126, 234, 0.03)",
            "--color3": "rgba(102, 126, 234, 0.12)",
            "--color4": "rgba(102, 126, 234, 0.06)",
            "--color5": "rgba(102, 126, 234, 0.2)",
            "--color6": "rgba(102, 126, 234, 0.08)",
          }}
        ></div>
        <div
          className={styles.lightOrb}
          style={{
            "--delay": "2s",
            "--duration": "12s",
            "--x": "80%",
            "--y": "15%",
            "--color": "rgba(59, 130, 246, 0.08)",
            "--color2": "rgba(59, 130, 246, 0.03)",
            "--color3": "rgba(59, 130, 246, 0.12)",
            "--color4": "rgba(59, 130, 246, 0.06)",
            "--color5": "rgba(59, 130, 246, 0.2)",
            "--color6": "rgba(59, 130, 246, 0.08)",
          }}
        ></div>
        <div
          className={styles.lightOrb}
          style={{
            "--delay": "4s",
            "--duration": "10s",
            "--x": "20%",
            "--y": "70%",
            "--color": "rgba(37, 99, 235, 0.08)",
            "--color2": "rgba(37, 99, 235, 0.03)",
            "--color3": "rgba(37, 99, 235, 0.12)",
            "--color4": "rgba(37, 99, 235, 0.06)",
            "--color5": "rgba(37, 99, 235, 0.2)",
            "--color6": "rgba(37, 99, 235, 0.08)",
          }}
        ></div>
        <div
          className={styles.lightOrb}
          style={{
            "--delay": "1s",
            "--duration": "14s",
            "--x": "70%",
            "--y": "60%",
            "--color": "rgba(29, 78, 216, 0.08)",
            "--color2": "rgba(29, 78, 216, 0.03)",
            "--color3": "rgba(29, 78, 216, 0.12)",
            "--color4": "rgba(29, 78, 216, 0.06)",
            "--color5": "rgba(29, 78, 216, 0.2)",
            "--color6": "rgba(29, 78, 216, 0.08)",
          }}
        ></div>
        <div
          className={styles.lightOrb}
          style={{
            "--delay": "3s",
            "--duration": "9s",
            "--x": "50%",
            "--y": "40%",
            "--color": "rgba(147, 197, 253, 0.08)",
            "--color2": "rgba(147, 197, 253, 0.03)",
            "--color3": "rgba(147, 197, 253, 0.12)",
            "--color4": "rgba(147, 197, 253, 0.06)",
            "--color5": "rgba(147, 197, 253, 0.2)",
            "--color6": "rgba(147, 197, 253, 0.08)",
          }}
        ></div>
        <div
          className={styles.lightOrb}
          style={{
            "--delay": "5s",
            "--duration": "11s",
            "--x": "90%",
            "--y": "80%",
            "--color": "rgba(96, 165, 250, 0.08)",
            "--color2": "rgba(96, 165, 250, 0.03)",
            "--color3": "rgba(96, 165, 250, 0.12)",
            "--color4": "rgba(96, 165, 250, 0.06)",
            "--color5": "rgba(96, 165, 250, 0.2)",
            "--color6": "rgba(96, 165, 250, 0.08)",
          }}
        ></div>
        <div
          className={styles.lightOrb}
          style={{
            "--delay": "1.5s",
            "--duration": "13s",
            "--x": "5%",
            "--y": "50%",
            "--color": "rgba(59, 130, 246, 0.08)",
            "--color2": "rgba(59, 130, 246, 0.03)",
            "--color3": "rgba(59, 130, 246, 0.12)",
            "--color4": "rgba(59, 130, 246, 0.06)",
            "--color5": "rgba(59, 130, 246, 0.2)",
            "--color6": "rgba(59, 130, 246, 0.08)",
          }}
        ></div>
        <div
          className={styles.lightOrb}
          style={{
            "--delay": "3.5s",
            "--duration": "7s",
            "--x": "60%",
            "--y": "10%",
            "--color": "rgba(37, 99, 235, 0.08)",
            "--color2": "rgba(37, 99, 235, 0.03)",
            "--color3": "rgba(37, 99, 235, 0.12)",
            "--color4": "rgba(37, 99, 235, 0.06)",
            "--color5": "rgba(37, 99, 235, 0.2)",
            "--color6": "rgba(37, 99, 235, 0.08)",
          }}
        ></div>
      </div>

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
              } ${styles.floatingImage}`}
              onClick={() => handleImageClick("img1")}
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
              className={`${styles.imageWindow} ${styles.img2} ${
                zoomedImg === "img2" ? styles.zoomed : ""
              } ${styles.floatingImage}`}
              onClick={() => handleImageClick("img2")}
              style={{
                animationDelay: "0.3s",
                transform: `rotate(2deg) translateY(${
                  Math.sin(Date.now() / 1000 + 0.3) * 8
                }px)`,
              }}
            />
            <img
              src="/images/mig1.png"
              alt="Annette Skou"
              className={`${styles.imageWindow} ${styles.img3} ${
                zoomedImg === "img3" ? styles.zoomed : ""
              } ${styles.floatingImage}`}
              onClick={() => handleImageClick("img3")}
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
        {/* Floating Maleri Gallery */}
        {maleriImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`${styles.imageWindow} ${styles[`img${index + 4}`]} ${
              zoomedImg === `img${index + 4}` ? styles.zoomed : ""
            } ${styles.floatingMaleri}`}
            onClick={() => handleImageClick(`img${index + 4}`)}
            style={{
              animationDelay: `${index * 0.5}s`,
              transform: `rotate(${index * 5 - 5}deg) translateY(${
                Math.sin(Date.now() / 1000 + index) * 10
              }px)`,
            }}
          />
        ))}
        <img
          src="/images/pilates.png"
          alt="Pilates"
          className={`${styles.imageWindow} ${styles.img8} ${
            zoomedImg === "img8" ? styles.zoomed : ""
          } ${styles.floatingImage}`}
          onClick={() => handleImageClick("img8")}
          style={{
            animationDelay: "1.5s",
            transform: `rotate(4deg) translateY(${
              Math.sin(Date.now() / 1000 + 1.5) * 8
            }px)`,
          }}
        />
        <img
          src="/images/gameboy.png"
          alt="Game Boy"
          className={`${styles.imageWindow} ${styles.img7} ${
            zoomedImg === "img7" ? styles.zoomed : ""
          } ${styles.floatingImage}`}
          onClick={() => handleImageClick("img7")}
          style={{
            animationDelay: "1.8s",
            transform: `rotate(-2deg) translateY(${
              Math.sin(Date.now() / 1000 + 1.8) * 8
            }px)`,
          }}
        />
        <img
          src="/images/elden.png"
          alt="Elden Ring"
          className={`${styles.imageWindow} ${styles.img9} ${
            zoomedImg === "img9" ? styles.zoomed : ""
          } ${styles.floatingImage}`}
          onClick={() => handleImageClick("img9")}
          style={{
            animationDelay: "2.1s",
            transform: `rotate(3deg) translateY(${
              Math.sin(Date.now() / 1000 + 2.1) * 8
            }px)`,
          }}
        />
      </div>
    </main>
  );
}
