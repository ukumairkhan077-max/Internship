import { NavLink } from "react-router-dom";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import CodeWindow from "../components/CodeWindow";
import Reveal from "../components/Reveal";

const stack = [
  "React", "Node.js", "Express", "MongoDB", "Laravel", "MySQL",
  "Python", "TensorFlow", "Vite", "Tailwind", "Socket.IO", "Redux",
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative overflow-hidden rounded-b-[36px] md:rounded-b-[48px]"
        style={{
          background: "radial-gradient(circle at 15% 0%, #241c46 0%, transparent 45%), radial-gradient(circle at 85% 10%, #1b2a52 0%, transparent 50%), var(--bg)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 pt-16 pb-24 md:pt-20 md:pb-28 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border mb-6"
              style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
              open to internships &amp; freelance work
            </span>

            <h1 className="font-display font-semibold text-4xl md:text-[3.4rem] leading-[1.08] tracking-tight" style={{ color: "var(--text)" }}>
              I am a web developer,
              <br />
              MERN builder, and{" "}
              <span style={{ color: "var(--accent)" }}>problem&nbsp;solver</span>{" "}
              living in the terminal.
            </h1>

            <p className="mt-6 text-base leading-relaxed max-w-md" style={{ color: "var(--text-muted)" }}>
              Hi, I'm Umair Khan — a Software Engineering student building
              full-stack apps, from e-commerce platforms to real-time
              collaboration tools and the occasional ML model.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <NavLink
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
              >
                View Projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </NavLink>
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border transition-colors"
                style={{ borderColor: "var(--border)", color: "var(--text)" }}
              >
                Get in touch
              </NavLink>
            </div>
          </div>

          <CodeWindow />
        </div>
      </section>

      {/* STACK MARQUEE */}
      <section className="py-10 border-y overflow-hidden" style={{ borderColor: "var(--border)" }}>
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {[...stack, ...stack].map((s, i) => (
            <span
              key={i}
              className="font-mono text-sm mx-6"
              style={{ color: "var(--text-muted)" }}
            >
              {s} <span style={{ color: "var(--accent)" }}>·</span>
            </span>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-24">
        <Reveal className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: "var(--accent)" }}>
              Selected work
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold" style={{ color: "var(--text)" }}>
              Two builds I'd want you to see first
            </h2>
          </div>
          <NavLink to="/projects" className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>
            All projects →
          </NavLink>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 pb-24">
        <Reveal
          className="rounded-[var(--radius-lg)] px-8 py-14 md:py-16 text-center flex flex-col items-center gap-5 border"
          style={{ borderColor: "var(--border)", background: "linear-gradient(135deg, var(--violet-soft), var(--surface))" }}
        >
          <h3 className="font-display text-2xl md:text-3xl font-semibold max-w-lg" style={{ color: "var(--text)" }}>
            Have a project in mind, or just want to talk stack decisions?
          </h3>
          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold mt-2 transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
          >
            Send a message
          </NavLink>
        </Reveal>
      </section>
    </div>
  );
}
