import { Link } from "react-router-dom";

export default function ProjectCard({ project, index = 0 }) {
  const cover = project.images?.[0];

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative flex flex-col rounded-[var(--radius-lg)] overflow-hidden border transition-transform duration-300 hover:-translate-y-1.5"
      style={{ borderColor: "var(--border)", background: "var(--surface)", boxShadow: "var(--shadow-lift)" }}
    >
      <div
        className="relative h-48 md:h-52 overflow-hidden"
        style={{
          background: cover
            ? "var(--surface-2)"
            : `linear-gradient(135deg, ${project.accent}22, var(--surface-2))`,
        }}
      >
        {cover ? (
          <img
            src={cover}
            alt={`${project.name} preview`}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full grid place-items-center">
            <span className="font-mono text-4xl font-semibold" style={{ color: project.accent }}>
              {project.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
        <div
          className="absolute top-3 left-3 text-[11px] font-mono px-2.5 py-1 rounded-full backdrop-blur"
          style={{ background: "rgba(10,10,16,0.55)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}
        >
          0{index + 1} · {project.category}
        </div>
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold" style={{ color: "var(--text)" }}>
            {project.name}
          </h3>
          <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{project.year}</span>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="text-[11px] font-mono px-2 py-1 rounded-md"
              style={{ background: "var(--surface-2)", color: "var(--text-muted)" }}
            >
              {s}
            </span>
          ))}
        </div>

        <span
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold"
          style={{ color: project.accent }}
        >
          View case study
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
