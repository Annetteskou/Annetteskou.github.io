import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import styles from "./ProjectDetail.module.css";
import FloatingLights from "../component/FloatingLights";

export default function ProjectDetail() {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/projects.json");
        if (!res.ok) throw new Error("Kunne ikke hente projects.json");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const project = projects.find((p) => String(p.id) === String(id));

  // Get project-specific content
  const getProjectContent = (projectId) => {
    switch (projectId) {
      case "1": // Zero Buzz Brew
        return {
          description: [
            "Zero Buzz Brew er en moderne e-commerce platform for alkoholfri øl, designet med fokus på brugervenlighed og moderne design. Projektet kombinerer React frontend med en robust backend arkitektur.",
            "Platformen tilbyder en omfattende katalog af alkoholfri øl fra forskellige bryggerier, med avancerede filtrerings- og søgefunktioner. Brugerne kan nemt finde deres favorit øl baseret på smag, type og ingredienser.",
            "Projektet implementerer moderne web teknologier og best practices for at sikre optimal performance og brugeroplevelse.",
          ],
          technologies: [
            { name: "React", icon: "/images/react1.png" },
            { name: "JavaScript", icon: "/images/js.png" },
            { name: "CSS3", icon: "/images/css1.png" },
            { name: "HTML5", icon: "/images/html1.png" },
          ],
          features: [
            "Responsivt design der fungerer på alle enheder",
            "Avancerede filtrerings- og søgefunktioner",
            "Shopping cart og checkout funktionalitet",
            "Brugerkonto og ordrehistorik",
            "SEO optimeret for bedre synlighed",
          ],
          screenshots: ["/images/zerobuzz.png"],
        };
      case "2": // Radar
        return {
          description: [
            "Radar Eksamensprojekt - Udvikling af en alternativ hjemmeside for spillestedet Radar i Aarhus. Projektet fokuserer på at skabe et moderne og brugervenligt supplement til den eksisterende platform.",
            "Processen involverede omfattende research, design og kodning i HTML og CSS for at skabe en responsiv og funktionel hjemmeside. Målet var at fremhæve Radars støtte, frivillighed og workshops på en enkel og engagerende måde.",
            "Projektet demonstrerer kompetencer inden for webudvikling, UX/UI design og implementering af moderne web teknologier for at skabe en optimal brugeroplevelse.",
          ],
          technologies: [
            { name: "HTML", icon: "/images/html1.png" },
            { name: "CSS", icon: "/images/css1.png" },
            { name: "Photoshop", icon: "/images/ps.png" },
          ],
          features: [
            "Responsivt design til desktop, tablet og mobil",
            "Brugervenlig navigation med burger menu og klare call-to-actions",
            "SEO optimering, sitemap og performance forbedringer for bedre synlighed",
            "Fokus på at fremhæve støtte, frivillighed og workshops på en enkel og engagerende måde",
          ],
          screenshots: [
            "/images/radar1.png",
            "/images/radar2.png",
            "/images/radar3.png",
          ],
        };
      case "3": // Banken
        return {
          description: [
            "Banken er en moderne restaurant website der kombinerer elegant design med funktionalitet. Projektet fokuserer på at præsentere restaurantens menu og atmosfære på en tiltalende måde.",
            "Website'en tilbyder en omfattende oversigt over restaurantens tilbud, inklusive menu, åbningstider, lokation og booking funktionalitet. Designet er inspireret af moderne restaurant branding med fokus på visuel appel.",
            "Projektet implementerer moderne web design trends og sikrer en optimal brugeroplevelse på tværs af alle enheder.",
          ],
          technologies: [
            { name: "React", icon: "/images/react1.png" },
            { name: "JavaScript", icon: "/images/js.png" },
            { name: "CSS3", icon: "/images/css1.png" },
            { name: "HTML5", icon: "/images/html1.png" },
          ],
          features: [
            "Elegant restaurant design",
            "Menu præsentation med billeder",
            "Booking og reservation system",
            "Responsivt design",
            "SEO optimeret indhold",
          ],
          screenshots: ["/images/banken.png"],
        };
      case "4": // Steeno Museet
        return {
          description: [
            "Steeno Museet er et interaktivt museum website der kombinerer uddannelse med underholdning. Projektet fokuserer på at skabe en engagerende oplevelse for besøgende gennem interaktive elementer og quiz funktionalitet.",
            "Website'en tilbyder en omfattende oversigt over museets udstillinger, events og interaktive features. Besøgende kan deltage i quizzer, udforske virtuelle udstillinger og lære om museets historie og samlinger.",
            "Projektet implementerer moderne web teknologier for at skabe en smooth og lærerig brugeroplevelse der appellerer til alle aldre.",
          ],
          technologies: [
            { name: "React", icon: "/images/react1.png" },
            { name: "JavaScript", icon: "/images/js.png" },
            { name: "CSS3", icon: "/images/css1.png" },
            { name: "HTML5", icon: "/images/html1.png" },
          ],
          features: [
            "Interaktive quiz funktioner",
            "Virtuelle udstillinger",
            "Event kalender og booking",
            "Responsivt design",
            "Accessibility features",
          ],
          screenshots: ["/images/stenomuseet.png"],
        };
      default:
        return {
          description: ["Projekt beskrivelse ikke tilgængelig."],
          technologies: [],
          features: [],
          screenshots: [],
        };
    }
  };

  if (loading) return <p>Indlæser projekt…</p>;
  if (error) return <p style={{ color: "crimson" }}>{error}</p>;
  if (!project) return <p>Projektet blev ikke fundet.</p>;

  const content = getProjectContent(id);

  return (
    <main className={styles.detailPage}>
      <FloatingLights />
      <Link to="/project" className={styles.backLink}>
        ← Tilbage til Projekter
      </Link>

      <div className={styles.container}>
        <div className={styles.rightColumn}>
          <div className={styles.projectHeader}>
            <h2 className={styles.pageTitle}>Projekt - Detailer</h2>
            <h1 className={styles.projectTitle}>
              {project.title === "Radar"
                ? "Radar Eksemensprojekt"
                : project.title}
            </h1>
          </div>

          <div>
            {content.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.actionButtons}>
            <a
              href={
                project.links?.find((link) => link.text === "Live Demo")?.url ||
                "#"
              }
              className={`${styles.actionButton} ${styles.liveDemoButton}`}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
              <img
                src="/images/Go-to-file_icon.png"
                alt="Go to"
                className={styles.goToIcon}
              />
            </a>
            <a
              href="https://github.com/annetteskou"
              className={styles.actionButton}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/githubcat.png"
                alt="GitHub"
                className={styles.githubIcon}
              />
              GitHub
            </a>
          </div>

          <div className={styles.technologiesSection}>
            <div className={styles.sectionTitle}>Programmer anvendt</div>
            <div className={styles.technologiesGrid}>
              {content.technologies.map((tech, index) => (
                <div key={index} className={styles.techItem}>
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className={styles.techIcon}
                  />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.keyFeaturesSection}>
            <div className={styles.sectionTitle}>★ Key Features</div>
            <ul className={styles.featuresList}>
              {content.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.leftColumn}>
          <div className={styles.screenshotContainer}>
            {content.screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`${project.title} screenshot ${index + 1}`}
                className={styles.screenshot}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
