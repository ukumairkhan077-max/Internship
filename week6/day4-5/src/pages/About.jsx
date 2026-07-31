import Reveal from "../components/Reveal";

const education = [
  {
    period: "2023 — 2027",
    title: "BS Software Engineering",
    place: "COMSATS Institute of Information Technology, Wah Campus",
    detail: "Currently in Semester 6 · CGPA 3.2 · Full-stack curriculum covering frontend, backend, databases and ML.",
  },
];

const experience = [
  {
    period: "Present",
    title: "Web Developer",
    place: "Developer Hub Corporation",
    detail: "Building and shipping full-stack features across client projects, from UI components to API integrations.",
  },
];

const skills = [
  { group: "Frontend", items: ["React", "Vite", "Tailwind CSS", "JavaScript (ES6+)"] },
  { group: "Backend", items: ["Node.js", "Express", "Laravel", "REST APIs"] },
  { group: "Data", items: ["MongoDB", "MySQL", "Mongoose"] },
  { group: "Currently learning", items: ["Next.js", "Django", "LangChain", "RAG"] },
];

function TimelineItem({ item, accent }) {
  return (
    <div className="relative pl-8 pb-10 border-l last:pb-0" style={{ borderColor: "var(--border)" }}>
      <span
        className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full border-2"
        style={{ background: "var(--bg)", borderColor: accent }}
      />
      <p className="text-xs font-mono mb-1.5" style={{ color: accent }}>{item.period}</p>
      <h3 className="font-display text-lg font-semibold" style={{ color: "var(--text)" }}>{item.title}</h3>
      <p className="text-sm mt-0.5 font-medium" style={{ color: "var(--text-muted)" }}>{item.place}</p>
      <p className="text-sm mt-2 leading-relaxed max-w-lg" style={{ color: "var(--text-muted)" }}>{item.detail}</p>
    </div>
  );
}

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-20">
      <Reveal>
        <p className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: "var(--accent)" }}>About</p>
        <h1 className="font-display text-3xl md:text-4xl font-semibold max-w-2xl leading-tight" style={{ color: "var(--text)" }}>
          A software engineering student who prefers finishing what he starts.
        </h1>
        <p className="mt-6 text-base leading-relaxed max-w-2xl" style={{ color: "var(--text-muted)" }}>
          I'm Umair — currently in my sixth semester of a Software Engineering
          degree, spending most of my time turning coursework into full
          applications instead of stopping at prototypes: e-commerce
          platforms, real-time collaboration tools, and a few ML side
          projects along the way.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-16 mt-20">
        <Reveal>
          <h2 className="font-display text-xl font-semibold mb-8" style={{ color: "var(--text)" }}>Education</h2>
          {education.map((item) => (
            <TimelineItem key={item.title} item={item} accent="var(--accent)" />
          ))}
        </Reveal>

        <Reveal delay={100}>
          <h2 className="font-display text-xl font-semibold mb-8" style={{ color: "var(--text)" }}>Experience</h2>
          {experience.map((item) => (
            <TimelineItem key={item.title} item={item} accent="var(--violet)" />
          ))}
        </Reveal>
      </div>

      <Reveal className="mt-20">
        <h2 className="font-display text-xl font-semibold mb-8" style={{ color: "var(--text)" }}>Toolbox</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s) => (
            <div
              key={s.group}
              className="rounded-[var(--radius-md)] border p-5"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <p className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: "var(--text-muted)" }}>{s.group}</p>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2 py-1 rounded-md"
                    style={{ background: "var(--surface-2)", color: "var(--text)" }}
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
