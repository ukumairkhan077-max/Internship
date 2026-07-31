import { useState } from "react";
import Reveal from "../components/Reveal";

const infoCards = [
  {
    label: "Location",
    value: "Wah Cantt, Punjab, Pakistan",
    icon: "pin",
  },
  {
    label: "Email",
    value: "umair.khan@example.com",
    icon: "mail",
  },
  {
    label: "Availability",
    value: "Internships & freelance",
    icon: "phone",
  },
];

function CardIcon({ name }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8 };
  if (name === "pin")
    return (
      <svg {...common}>
        <path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" />
        <circle cx="12" cy="10" r="2.6" />
      </svg>
    );
  if (name === "mail")
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M12 3a1 1 0 011 1v4a1 1 0 01-.3.7L11 10.4a13 13 0 006.6 6.6l1.7-1.7a1 1 0 01.7-.3h4a1 1 0 011 1v3.5a1 1 0 01-1 1C11 20.5 3.5 13 3.5 3.5A1 1 0 014.5 3H8" />
    </svg>
  );
}

const initialForm = { name: "", email: "", subject: "General inquiry", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Tell me your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "That doesn't look like a valid email.";
    if (form.message.trim().length < 10) next.message = "A few more words would help (10+ characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    // Bonus: wire this up to EmailJS —
    // emailjs.send('service_id', 'template_id', form, 'public_key')
    window.setTimeout(() => {
      setStatus("sent");
      setForm(initialForm);
    }, 900);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 py-20">
      <Reveal>
        <p className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: "var(--accent)" }}>Contact</p>
        <h1 className="font-display text-3xl md:text-4xl font-semibold max-w-xl leading-tight" style={{ color: "var(--text)" }}>
          Got a project, a role, or just a question about the stack? Say hi.
        </h1>
      </Reveal>

      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 mt-14">
        {/* SIDEBAR INFO CARDS */}
        <Reveal className="space-y-4">
          {infoCards.map((c) => (
            <div
              key={c.label}
              className="rounded-[var(--radius-md)] border p-5 flex items-start gap-4"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <span
                className="w-10 h-10 rounded-lg grid place-items-center flex-shrink-0"
                style={{ background: "var(--surface-2)", color: "var(--accent)" }}
              >
                <CardIcon name={c.icon} />
              </span>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>{c.label}</p>
                <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{c.value}</p>
              </div>
            </div>
          ))}

          <div
            className="rounded-[var(--radius-md)] border p-5"
            style={{ borderColor: "var(--border)", background: "linear-gradient(135deg, var(--violet-soft), var(--surface))" }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              I usually reply within a day or two. For quick things, the
              email above works just as well as the form.
            </p>
          </div>
        </Reveal>

        {/* FORM */}
        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-[var(--radius-lg)] border p-6 md:p-8"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-7 h-7 rounded-full grid place-items-center text-xs font-mono font-semibold" style={{ background: "var(--accent)", color: "var(--accent-ink)" }}>1</span>
              <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>Personal details</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider block mb-2" style={{ color: "var(--text-muted)" }}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full rounded-lg px-4 py-3 text-sm border outline-none transition-colors focus:border-[var(--accent)]"
                  style={{ borderColor: errors.name ? "#ff6b6b" : "var(--border)", background: "var(--bg-soft)", color: "var(--text)" }}
                />
                {errors.name && <p className="text-xs mt-1.5" style={{ color: "#ff6b6b" }}>{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider block mb-2" style={{ color: "var(--text-muted)" }}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-lg px-4 py-3 text-sm border outline-none transition-colors focus:border-[var(--accent)]"
                  style={{ borderColor: errors.email ? "#ff6b6b" : "var(--border)", background: "var(--bg-soft)", color: "var(--text)" }}
                />
                {errors.email && <p className="text-xs mt-1.5" style={{ color: "#ff6b6b" }}>{errors.email}</p>}
              </div>
            </div>

            <div className="flex items-center gap-3 mt-10 mb-8">
              <span className="w-7 h-7 rounded-full grid place-items-center text-xs font-mono font-semibold" style={{ background: "var(--accent)", color: "var(--accent-ink)" }}>2</span>
              <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>Subject</p>
            </div>

            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-3 text-sm border outline-none"
              style={{ borderColor: "var(--border)", background: "var(--bg-soft)", color: "var(--text)" }}
            >
              <option>General inquiry</option>
              <option>Freelance project</option>
              <option>Internship / job opportunity</option>
              <option>Collaboration</option>
            </select>

            <div className="flex items-center gap-3 mt-10 mb-8">
              <span className="w-7 h-7 rounded-full grid place-items-center text-xs font-mono font-semibold" style={{ background: "var(--accent)", color: "var(--accent-ink)" }}>3</span>
              <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>Message</p>
            </div>

            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="What are you building, and how can I help?"
              className="w-full rounded-lg px-4 py-3 text-sm border outline-none resize-none transition-colors focus:border-[var(--accent)]"
              style={{ borderColor: errors.message ? "#ff6b6b" : "var(--border)", background: "var(--bg-soft)", color: "var(--text)" }}
            />
            {errors.message && <p className="text-xs mt-1.5" style={{ color: "#ff6b6b" }}>{errors.message}</p>}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
            >
              {status === "sending" ? "Sending…" : status === "sent" ? "Sent — thank you!" : "Send message"}
            </button>

            {status === "sent" && (
              <p className="text-sm mt-3" style={{ color: "var(--text-muted)" }}>
                Got it. I'll get back to you soon at the email you provided.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </div>
  );
}
