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
            "Zero Buzz er et projekt med fokus på at skabe alkoholfri fællesskaber og events. Opgaven gik ud på at udvikle et digitalt koncept, der giver unge et inspirerende alternativ til den traditionelle festkultur.",
            "Vi arbejdede med brugerundersøgelser, idéudvikling og prototyping for at finde frem til et design, som formidler Zero Buzz' værdier på en moderne og inkluderende måde. Resultatet blev en responsiv prototype med friske farver, klare budskaber og en intuitiv brugeroplevelse, der understøtter budskabet om, at fællesskab og sjov ikke behøver at afhænge af alkohol.",
          ],
          technologies: [
            { name: "Photoshop", icon: "/images/ps.png" },
            { name: "Illustrator", icon: "/images/ai.png" },
            { name: "Figma", icon: "/images/figma2.png" },
            { name: "HTML5", icon: "/images/html1.png" },
            { name: "CSS3", icon: "/images/css1.png" },
            { name: "JavaScript", icon: "/images/js.png" },
          ],
          features: [
            "Responsivt design der fungerer på alle enheder",
            "Avancerede filtrerings- og søgefunktioner",
            "Shopping cart og checkout funktionalitet",
            "Brugerkonto og ordrehistorik",
            "SEO optimeret for bedre synlighed",
          ],
          screenshots: [
            "/images/zerobuzz1.png",
            "/images/zerobuzz3.png",
            "/images/zerobuzz4.png",
          ],
          liveDemoUrl: "https://zerobuzzbrew.axelriis.dk",
        };
      case "2": // Radar
        return {
          description: [
            "I dette projekt udviklede jeg en alternativ hjemmeside til spillestedet Radar i Aarhus som et moderne og brugervenligt supplement til deres eksisterende platform.",
            "Arbejdet omfattede både research, design og kodning i HTML og CSS med fokus på at skabe en responsiv og funktionel løsning. Hjemmesiden er designet til at understøtte Radars profil og værdier, særligt deres engagement i støtte, frivillighed og workshops, præsenteret på en enkel og overskuelig måde.",
            "Projektet viser mine færdigheder inden for webudvikling, UX/UI-design og anvendelsen af moderne webteknologier med henblik på at levere en stærk og optimal brugeroplevelse.",
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
          liveDemoUrl:
            "https://radar.where-music-matters.annetteskou.dk/donation.html",
        };
      case "3": // Banken
        return {
          description: [
            "Dette projekt har haft fokus på at udvikle et website, der udforsker Responsive Web Design-strategien.",
            "Som case valgte vi en dansk virksomhed, og vores mål var at skabe en digital løsning, der tilpasser sig forskellige skærmstørrelser og brugssituationer.",
            "I processen arbejdede vi med brugerundersøgelser, analyse af virksomhedens visuelle identitet og udvikling af content til målgruppen. På baggrund af vores research udviklede vi moodboards, mockups og prototyper, inden vi implementerede den endelige løsning i HTML, CSS og JavaScript.",
            "Resultatet blev et responsivt og brugervenligt website, der giver en ensartet og professionel oplevelse på mobil, tablet og desktop ved banken.",
          ],
          technologies: [
            { name: "Photoshop", icon: "/images/ps.png" },
            { name: "Illustrator", icon: "/images/ai.png" },
            { name: "Figma", icon: "/images/figma2.png" },
            { name: "CSS", icon: "/images/css1.png" },
            { name: "HTML", icon: "/images/html1.png" },
          ],
          features: [
            "Responsivt design til mobil, tablet og desktop med min. tre breakpoints",
            "Semantisk HTML og valideret CSS",
            "Responsiv menu og optimeret performance (page load / Lighthouse)",
            "Samarbejdsbaseret kodeudvikling (Git/Github)",
          ],
          screenshots: [
            "/images/banken1.png",
            "/images/banken2.png",
            "/images/banken3.png",
          ],
          liveDemoUrl: "https://responsiv.cilletalbot.dk/index.html",
        };
      case "4": // Steno Museet
        return {
          description: [
            "Steno Museet – Den Oversete Krop er en interaktiv digital løsning til Steno Museets udstilling om angst for børn (6-13 år) og deres forældre. Projektet kombinerer storytelling, quizzer, illustrationer og en angst-boks prototype.",
            "Løsningen er udviklet gennem UX-metoder som tests, personas, wireframes og Figma design, og implementeret i HTML, CSS og JavaScript for at skabe en engagerende og lærerig oplevelse.",
          ],
          technologies: [
            { name: "HTML", icon: "/images/html1.png" },
            { name: "CSS", icon: "/images/css1.png" },
            { name: "Photoshop", icon: "/images/ps.png" },
            { name: "Illustrator", icon: "/images/ai.png" },
            { name: "JavaScript", icon: "/images/js.png" },
            { name: "Figma", icon: "/images/figma2.png" },
          ],
          features: [
            "Interaktiv storytelling med fokus på mental sundhed (angst)",
            "Målrettet børn og forældre gennem leg, quizzer og sanselige oplevelser",
            "Visuel identitet med farvepalette, illustrationer og ikoner udviklet i Figma",
            "Tegneværktøj og quiz implementeret i HTML, CSS og JavaScript",
          ],
          screenshots: [
            "/images/steno1.png",
            "/images/steeno2.png",
            "/images/steeno3.png",
          ],
          errorImage: "/images/error.png",
          liveDemoUrl: "https://angst-steno-eksamen.axelriis.dk/index.html",
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
      <div className={styles.breadcrumbContainer}>
        <Link to="/project" className={styles.backButton}>
          ← Tilbage
        </Link>
        <span className={styles.breadcrumb}>Projekt &gt; {project.title}</span>
      </div>

      <div className={styles.container}>
        <div className={styles.rightColumn}>
          <div className={styles.projectHeader}>
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
                content.liveDemoUrl ||
                project.links?.find((link) => link.text === "Live Demo")?.url ||
                "#"
              }
              className={`${styles.actionButton} ${styles.liveDemoButton}`}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
              <span className={styles.arrowIcon}>↗</span>
            </a>
            <a
              href={
                project.id === 1
                  ? "https://github.com/Annetteskou/Zerobuzzbrew"
                  : project.id === 2
                  ? "https://github.com/Annetteskou/Eksamen-Radar"
                  : project.id === 3
                  ? "https://github.com/Annetteskou/Responsivweb"
                  : project.id === 4
                  ? "https://github.com/Annetteskou/Steno_angst"
                  : "https://github.com/Annetteskou"
              }
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

          {content.errorImage && (
            <div className={styles.errorImageContainer}>
              <img
                src={content.errorImage}
                alt="Error message"
                className={styles.errorImage}
              />
            </div>
          )}

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
            <div className={styles.sectionTitle}>
              <span className={styles.starIcon}>★</span> Key Features
            </div>
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
