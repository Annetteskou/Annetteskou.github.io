// src/pages/Project.jsx
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

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
    <section>
      <h1>Projects</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {projects.map((project) => (
          <article
            key={project.id}
            style={{
              border: "1px solid #eee",
              borderRadius: 16,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              background: "#fff",
            }}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: 160,
                  objectFit: "cover",
                }}
              />
            )}
            <div style={{ padding: "1rem" }}>
              <h3>{project.title}</h3>
              <p style={{ color: "#6b7280" }}>{project.year}</p>
              <p>{project.description}</p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginBottom: ".75rem",
                }}
              >
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      border: "1px solid #e5e7eb",
                      padding: ".2rem .5rem",
                      borderRadius: 999,
                      fontSize: 12,
                      background: "#f9fafb",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <NavLink to={`/projects/${project.id}`}>Se detaljer</NavLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
