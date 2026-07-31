import { useMemo, useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], []);
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 py-20">
      <Reveal>
        <p className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: "var(--accent)" }}>Work</p>
        <h1 className="font-display text-3xl md:text-4xl font-semibold max-w-2xl leading-tight" style={{ color: "var(--text)" }}>
          Projects built to learn something on purpose.
        </h1>
        <p className="mt-5 text-base leading-relaxed max-w-2xl" style={{ color: "var(--text-muted)" }}>
          Each one started as a way to practice a specific skill — a payment
          flow, real-time sockets, a classifier — and ended up as a full
          product. Filter by category or open a case study for the details.
        </p>
      </Reveal>

      <Reveal className="flex flex-wrap gap-2.5 mt-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className="text-xs font-mono px-3.5 py-2 rounded-full border transition-colors"
            style={{
              borderColor: filter === c ? "var(--accent)" : "var(--border)",
              background: filter === c ? "var(--accent)" : "transparent",
              color: filter === c ? "var(--accent-ink)" : "var(--text-muted)",
            }}
          >
            {c}
          </button>
        ))}
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
        {filtered.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 100}>
            <ProjectCard project={p} index={projects.indexOf(p)} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
