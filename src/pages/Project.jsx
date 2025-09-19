// ========================================
// PROJEKT OVERSIGT SIDE - Project.jsx
// ========================================
// Dette er projekt oversigten hvor alle projekter vises i et grid layout
// med links til detaljer og live demos

// Importerer React hooks til state management og side effekter
import { useEffect, useState } from "react";
// Importerer React Router komponenter til navigation
import { NavLink, Link } from "react-router";
// Importerer CSS styles for projekt siden
import styles from "./Project.module.css";
// Importerer floating lights komponenten til baggrundseffekt
import FloatingLights from "../component/FloatingLights";

// Hovedkomponenten for projekt oversigten
export default function Project() {
  // ========================================
  // STATE MANAGEMENT
  // ========================================

  // State til at holde alle projekter fra JSON filen
  const [projects, setProjects] = useState([]);
  // State til at vise loading status mens data hentes
  const [loading, setLoading] = useState(true);
  // State til at holde fejlbeskeder hvis noget går galt
  const [error, setError] = useState(null);

  // ========================================
  // DATA HENTNING
  // ========================================

  // useEffect hook der kører når komponenten loader første gang
  useEffect(() => {
    // Async funktion til at hente projekter fra JSON fil
    async function load() {
      try {
        // Henter data fra projects.json filen
        const res = await fetch("/projects.json");
        // Tjekker om request var succesfuld
        if (!res.ok) throw new Error("Kunne ikke hente projects.json");
        // Konverterer response til JSON
        const data = await res.json();
        // Opdaterer projects state med hentet data
        setProjects(data);
      } catch (err) {
        // Hvis der opstår en fejl, gemmes fejlbeskeden
        setError(err.message);
      } finally {
        // Loading state sættes til false uanset om det lykkedes eller ej
        setLoading(false);
      }
    }
    // Kalder load funktionen
    load();
  }, []); // Tom dependency array = kører kun ved første render

  // ========================================
  // CONDITIONAL RENDERING
  // ========================================

  // Viser loading besked mens data hentes
  if (loading) return <p>Henter projekter…</p>;
  // Viser fejlbesked hvis der opstod en fejl
  if (error) return <p style={{ color: "crimson" }}>{error}</p>;

  // ========================================
  // RENDER LOGIC
  // ========================================

  return (
    <main className={styles.projectPage}>
      {/* Floating lights baggrundseffekt */}
      <FloatingLights />

      {/* Side titel */}
      <h1 className={styles.title}>&gt; Projekter</h1>

      {/* Grid container for alle projekter */}
      <div className={styles.projectGrid}>
        {/* Mapper over alle projekter og opretter et kort for hver */}
        {projects.map((project) => (
          <article key={project.id} className={styles.projectCard}>
            {/* Projekt billede hvis det eksisterer */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
            )}

            {/* Projekt indhold container */}
            <div className={styles.projectContent}>
              {/* Projekt titel med conditional styling */}
              <h3
                className={`${styles.projectTitle} ${
                  // Tjekker om projekt titlen er i listen over projekter der skal have tæt spacing
                  [
                    "Radar",
                    "Steno Museet",
                    "Banken",
                    "Zero Buzz Brew",
                  ].includes(project.title)
                    ? styles.projectTitleClose // Tilføjer tæt spacing klasse
                    : ""
                }`}
              >
                {project.title}
              </h3>

              {/* Projekt beskrivelse */}
              <p className={styles.projectDescription}>{project.description}</p>

              {/* Projekt links container */}
              <div className={styles.projectLinks}>
                {/* Sorterer links så "Live Demo" kommer først */}
                {project.links
                  ?.sort((a, b) => {
                    if (a.text === "Live Demo") return -1;
                    if (b.text === "Live Demo") return 1;
                    return 0;
                  })
                  .map((link, index) => {
                    // Hvis linket er "Detaljer", opret en React Router Link
                    if (link.text === "Detaljer") {
                      return (
                        <Link
                          key={index}
                          to={`/project/${project.id}`} // Navigerer til projekt detalje side
                          className={styles.detailButton}
                        >
                          {link.text} →
                        </Link>
                      );
                    } else {
                      // For alle andre links, opret en almindelig anchor tag
                      return (
                        <a
                          key={index}
                          href={link.url}
                          className={styles.demoButton}
                          // Åbner i nyt vindue hvis URL ikke er "#"
                          target={link.url !== "#" ? "_blank" : undefined}
                          rel={link.url !== "#" ? "noreferrer" : undefined}
                        >
                          {link.text} ↗
                        </a>
                      );
                    }
                  })}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
