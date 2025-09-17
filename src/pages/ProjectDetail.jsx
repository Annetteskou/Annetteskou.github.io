import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router";
import styles from "./ProjectDetail.module.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        const res = await fetch("/projects.json");
        if (!res.ok) throw new Error("Kunne ikke hente projects.json");
        const data = await res.json();
        if (isMounted) setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const project = useMemo(() => {
    return projects.find((p) => String(p.id) === String(id));
  }, [projects, id]);

  if (loading)
    return (
      <div className={styles.detailPage}>
        <p className={styles.loadingText}>Indlæser projekt…</p>
      </div>
    );
  if (error)
    return (
      <div className={styles.detailPage}>
        <p className={styles.errorText}>{error}</p>
      </div>
    );
  if (!project)
    return (
      <div className={styles.detailPage}>
        <div className={styles.notFoundContainer}>
          <p className={styles.notFoundText}>Projektet blev ikke fundet.</p>
          <Link to="/project" className={styles.backLink}>
            Tilbage til Projects
          </Link>
        </div>
      </div>
    );

  return (
    <div className={styles.detailPage}>
      <div className={styles.container}>
        <Link to="/project" className={styles.backLink}>
          ← Tilbage
        </Link>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.year}>{project.year}</p>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className={styles.projectImage}
          />
        )}

        <p className={styles.description}>{project.description}</p>

        {project.tags?.length > 0 && (
          <div className={styles.tagsContainer}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {project.links?.length > 0 && (
          <div className={styles.linksContainer}>
            <h3 className={styles.linksTitle}>Links</h3>
            <ul className={styles.linksList}>
              {project.links.map((l, i) => (
                <li key={i} className={styles.linkItem}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.projectLink}
                  >
                    {l.text ?? l.url}
                    {l.text === "Live Demo" && " ↗"}
                    {l.text === "Detaljer" && " →"}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
