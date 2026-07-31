import { NavLink } from "react-router-dom";

const socials = [
  { label: "GitHub", href: "https://github.com/", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
  { label: "X", href: "https://x.com/", icon: "x" },
];

function Icon({ name }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8 };
  if (name === "github")
    return (
      <svg {...common}>
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.6 3 5.5 3.3 5.5 3.3a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.7c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
      </svg>
    );
  if (name === "linkedin")
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4M11 17v-7" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t mt-24" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-8 h-8 rounded-lg grid place-items-center font-mono text-xs font-semibold"
              style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
            >
              UK
            </span>
            <span className="font-display font-semibold" style={{ color: "var(--text)" }}>Umair Khan</span>
          </div>
          <p className="text-sm max-w-xs" style={{ color: "var(--text-muted)" }}>
            Full-stack developer building interfaces, APIs and the occasional
            model in between semesters at COMSATS.
          </p>
        </div>

        <div className="flex gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>
              Navigate
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <NavLink to="/" style={{ color: "var(--text-muted)" }}>Home</NavLink>
              <NavLink to="/about" style={{ color: "var(--text-muted)" }}>About</NavLink>
              <NavLink to="/projects" style={{ color: "var(--text-muted)" }}>Projects</NavLink>
              <NavLink to="/contact" style={{ color: "var(--text-muted)" }}>Contact</NavLink>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>
              Elsewhere
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full grid place-items-center border transition-colors hover:border-[var(--accent)]"
                  style={{ borderColor: "var(--border)", color: "var(--text)" }}
                >
                  <Icon name={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-5 text-center text-xs" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
        © {new Date().getFullYear()} Umair Khan. Built with React &amp; a lot of coffee.
      </div>
    </footer>
  );
}
