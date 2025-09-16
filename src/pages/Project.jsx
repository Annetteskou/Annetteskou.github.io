// src/pages/Project.jsx
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import styles from "./Project.module.css";

export default function Project() {
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

  if (loading) return <p>Henter projekter…</p>;
  if (error) return <p style={{ color: "crimson" }}>{error}</p>;

  return (
    <main className={styles.projectPage}>
      <h1 className={styles.title}>&gt; Projekter</h1>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <article key={project.id} className={styles.projectCard}>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
            )}
            <div className={styles.projectContent}>
              <h3
                className={`${styles.projectTitle} ${
                  [
                    "Radar",
                    "Steeno Museet",
                    "Banken",
                    "Zero Buzz Brew",
                  ].includes(project.title)
                    ? styles.projectTitleClose
                    : ""
                }`}
              >
                {project.title}
              </h3>
              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.projectLinks}>
                {project.links
                  ?.sort((a, b) => {
                    if (a.text === "Live Demo") return -1;
                    if (b.text === "Live Demo") return 1;
                    return 0;
                  })
                  .map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className={
                        link.text === "Live Demo"
                          ? styles.demoButton
                          : styles.detailButton
                      }
                      target={link.url !== "#" ? "_blank" : undefined}
                      rel={link.url !== "#" ? "noreferrer" : undefined}
                    >
                      {link.text}
                      {link.text === "Live Demo" && " ↗"}
                      {link.text === "Detaljer" && " →"}
                    </a>
                  ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
