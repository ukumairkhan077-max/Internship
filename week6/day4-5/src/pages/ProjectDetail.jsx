import { Link, useParams, Navigate } from "react-router-dom";
import projects from "../data/projects";
import Reveal from "../components/Reveal";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-16">
      <Reveal>
        <Link to="/projects" className="text-sm font-medium inline-flex items-center gap-1.5 mb-8" style={{ color: "var(--text-muted)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
          All projects
        </Link>

        <div className="flex flex-wrap items-start justify-between gap-6 mb-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: project.accent }}>
              {project.category} · {project.year}
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "var(--text)" }}>
              {project.name}
            </h1>
            <p className="mt-3 text-base max-w-xl" style={{ color: "var(--text-muted)" }}>{project.tagline}</p>
          </div>

          <div className="flex gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} className="text-sm font-semibold rounded-full px-5 py-2.5" style={{ background: "var(--accent)", color: "var(--accent-ink)" }}>
                Live demo
              </a>
            )}
            {project.codeUrl && (
              <a href={project.codeUrl} className="text-sm font-semibold rounded-full px-5 py-2.5 border" style={{ borderColor: "var(--border)", color: "var(--text)" }}>
                Source
              </a>
            )}
          </div>
        </div>
      </Reveal>

      {project.images.length > 0 && (
        <Reveal className="grid sm:grid-cols-2 gap-4 mt-10">
          {project.images.map((img) => (
            <div key={img} className="rounded-[var(--radius-md)] overflow-hidden border" style={{ borderColor: "var(--border)" }}>
              <img src={img} alt={project.name} className="w-full h-auto" loading="lazy" />
            </div>
          ))}
        </Reveal>
      )}

      <Reveal className="grid md:grid-cols-3 gap-10 mt-14">
        <div className="md:col-span-2">
          <h2 className="font-display text-xl font-semibold mb-4" style={{ color: "var(--text)" }}>Overview</h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{project.description}</p>

          <h2 className="font-display text-xl font-semibold mt-10 mb-4" style={{ color: "var(--text)" }}>Highlights</h2>
          <ul className="space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.accent }} />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--text-muted)" }}>Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="text-xs font-mono px-2.5 py-1.5 rounded-md" style={{ background: "var(--surface)", color: "var(--text)", border: "1px solid var(--border)" }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
