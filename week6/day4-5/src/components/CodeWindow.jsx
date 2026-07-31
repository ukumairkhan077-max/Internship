export default function CodeWindow() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div
        className="absolute -inset-6 rounded-[32px] blur-3xl opacity-60 animate-aurora"
        style={{ background: "radial-gradient(circle at 30% 30%, var(--violet), transparent 60%), radial-gradient(circle at 70% 70%, var(--accent), transparent 55%)" }}
      />
      <div
        className="relative rounded-2xl overflow-hidden border animate-floaty"
        style={{ borderColor: "var(--border)", background: "#0d0c14", boxShadow: "0 30px 80px -20px rgba(0,0,0,0.65)" }}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
          <span className="ml-3 text-[11px] font-mono" style={{ color: "#8b889c" }}>developer.js</span>
        </div>
        <pre className="font-mono text-[12.5px] leading-relaxed p-5 overflow-x-auto" style={{ color: "#c9c6d8" }}>
<code>{`const developer = {
  name: "Umair Khan",
  role: "Full-Stack Developer",
  stack: ["React", "Node.js", "MongoDB"],
  learning: ["Next.js", "LangChain", "RAG"],
  status: "`}<span style={{ color: "#c8ff4d" }}>available for work</span>{`",
};

`}<span style={{ color: "#7c5cff" }}>export default</span>{` developer;`}<span className="animate-caret">▍</span></code>
        </pre>
      </div>

      <div
        className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-2 rounded-xl px-4 py-3 border animate-floaty"
        style={{ background: "var(--surface)", borderColor: "var(--border)", animationDelay: "1.2s", boxShadow: "var(--shadow-lift)" }}
      >
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--accent)" }} />
        <span className="text-xs font-mono" style={{ color: "var(--text)" }}>6th semester · COMSATS</span>
      </div>
    </div>
  );
}
