import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-6 py-32 text-center">
      <p className="font-mono text-sm" style={{ color: "var(--accent)" }}>404</p>
      <h1 className="font-display text-3xl font-semibold mt-3" style={{ color: "var(--text)" }}>
        This route doesn't exist.
      </h1>
      <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
        Probably a typo, or a page I haven't built yet.
      </p>
      <NavLink
        to="/"
        className="inline-flex mt-8 rounded-full px-6 py-3 text-sm font-semibold"
        style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
      >
        Back home
      </NavLink>
    </div>
  );
}
