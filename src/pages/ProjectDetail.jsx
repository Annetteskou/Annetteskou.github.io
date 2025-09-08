import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router"

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

  if (loading) return <p>Indlæser projekt…</p>;
  if (error) return <p style={{ color: "crimson" }}>{error}</p>;
  if (!project)
    return (
      <section>
        <p>Projektet blev ikke fundet.</p>
        <Link to="/projects">Tilbage til Projects</Link>
      </section>
    );

  return (
    <section style={{ display: "grid", gap: 16 }}>
      <Link to="/projects">← Tilbage</Link>
      <h1 style={{ marginBottom: 0 }}>{project.title}</h1>
      <p style={{ color: "#6b7280", marginTop: 0 }}>{project.year}</p>
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            maxHeight: 420,
            objectFit: "cover",
            borderRadius: 16,
          }}
        />
      )}
      <p>{project.description}</p>

      {project.tags?.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                border: "1px solid #e5e7eb",
                padding: ".25rem .6rem",
                borderRadius: 999,
                fontSize: 12,
                background: "#f9fafb",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {project.links?.length > 0 && (
        <ul>
          {project.links.map((l, i) => (
            <li key={i}>
              <a href={l.url} target="_blank" rel="noreferrer">
                {l.text ?? l.url}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
