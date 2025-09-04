// src/pages/Home.jsx
import { useMemo, useState, useEffect, useRef } from "react";
import styles from "./Home.module.css";

const DATA = {
  title: "Multimediedesigner — Frontend Developer",
  subtitle:
    "Jeg bygger hurtige, tilgængelige og æstetiske weboplevelser med fokus på interaktion og detaljer.",
  email: "din.mail@eksempel.dk",
  links: { github: "#", linkedin: "#", website: "#" },
  projects: [
    {
      title: "Interaktiv Portfolio Skabelon",
      year: 2025,
      tags: ["React", "UI/UX", "Animation"],
      blurb: "Single-file portfolio med mørk/glass-stil og mikrointeraktioner.",
      links: { live: "#", repo: "#" },
    },
    {
      title: "Brandsite til kreativt studie",
      year: 2024,
      tags: ["Designsystem", "Performance", "SSR"],
      blurb: "Komponentdrevet brandsite med høj Lighthouse-score.",
      links: { live: "#", repo: "#" },
    },
    {
      title: "E-commerce microfrontend",
      year: 2024,
      tags: ["TypeScript", "State", "Integration"],
      blurb: "Isoleret checkout-flow som microfrontend.",
      links: { live: "#", repo: "#" },
    },
    {
      title: "UI animationsbibliotek",
      year: 2023,
      tags: ["Motion", "GSAP", "Tokens"],
      blurb: "Små, genbrugelige bevægelsesmønstre.",
      links: { live: "#", repo: "#" },
    },
    {
      title: "Interaktiv data-visualisering",
      year: 2023,
      tags: ["D3", "Accessibility"],
      blurb: "Datadrevet visualisering med tastaturfokus.",
      links: { live: "#", repo: "#" },
    },
    {
      title: "Prototype: 3D produktviewer",
      year: 2022,
      tags: ["WebGL", "Three.js"],
      blurb: "Drej, zoom og skift farver før køb.",
      links: { live: "#", repo: "#" },
    },
  ],
};

const ALL_TAGS = Array.from(
  new Set(DATA.projects.flatMap((p) => p.tags))
).sort();

export default function Home() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState([]); // <-- ren JS, ingen <string[]>

  // --- Parallax: sæt CSS-var --ty via data-speed ---
  const scopeRef = useRef(null); // <-- ren JS, ingen <HTMLElement | null>
  useEffect(() => {
    const root = scopeRef.current ?? document;
    const layers = root.querySelectorAll("[data-speed]");
    function onScroll() {
      const y = window.scrollY || window.pageYOffset;
      layers.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-speed") || "0");
        el.style.setProperty("--ty", `${y * speed}px`);
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = useMemo(() => {
    let list = DATA.projects;
    if (active.length)
      list = list.filter((p) => active.every((t) => p.tags.includes(t)));
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.blurb.toLowerCase().includes(q) ||
          p.tags.join(" ").toLowerCase().includes(q)
      );
    }
    return list;
  }, [query, active]);

  const toggleTag = (t) =>
    setActive((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );

  return (
    <main className={styles.wrapper} ref={scopeRef}>
      {/* dekorative glows med parallax */}
      <span
        className={`${styles.glow} ${styles.glowA}`}
        data-speed="0.15"
        aria-hidden
      />
      <span
        className={`${styles.glow} ${styles.glowB}`}
        data-speed="0.25"
        aria-hidden
      />

      {/* hero */}
      <header className={`${styles.hero} ${styles.parallax}`} data-speed="0.08">
        <h1 className={styles.title}>{DATA.title}</h1>
        <p className={styles.subtitle}>{DATA.subtitle}</p>
        <div className={styles.actions}>
          <a className={styles.btn} href={`mailto:${DATA.email}`}>
            Kontakt mig
          </a>
          <a
            className={styles.btnGhost}
            href={DATA.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className={styles.btnGhost}
            href={DATA.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className={styles.btnGhost}
            href={DATA.links.website}
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>
        </div>
      </header>

      {/* projekter */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Projekter</h2>
          <span className={styles.sectionHint}>
            {filtered.length} / {DATA.projects.length}
          </span>
        </div>
        <div className={styles.rule} />

        <div className={styles.controls}>
          <input
            className={styles.search}
            type="text"
            placeholder="Søg i projekter…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className={styles.chips}>
            {ALL_TAGS.map((t) => (
              <button
                key={t}
                onClick={() => toggleTag(t)}
                className={`${styles.chip} ${
                  active.includes(t) ? styles.chipActive : ""
                }`}
              >
                {t}
              </button>
            ))}
            {active.length > 0 && (
              <button
                className={styles.chipClear}
                onClick={() => setActive([])}
              >
                Nulstil
              </button>
            )}
          </div>
        </div>

        <div className={`${styles.grid} ${styles.parallax}`} data-speed="0.04">
          {filtered.map((p) => (
            <article
              key={p.title}
              className={`${styles.card} ${styles.cardParallax}`}
              data-speed="0.02"
            >
              <div className={styles.cardInner}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <span className={styles.year}>{p.year}</span>
                </div>
                <p className={styles.blurb}>{p.blurb}</p>
                <div className={styles.tagrow}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  {p.links.live !== "#" && (
                    <a href={p.links.live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  )}
                  {p.links.repo !== "#" && (
                    <a href={p.links.repo} target="_blank" rel="noreferrer">
                      Repo
                    </a>
                  )}
                </div>
              </div>
              <span className={styles.cardGlow} aria-hidden />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
