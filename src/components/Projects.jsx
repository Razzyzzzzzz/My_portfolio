import { useEffect, useRef, useState } from 'react'
import {
  ExternalLink, Github, GraduationCap, Siren, Phone,
  Stethoscope, Wallet, ArrowUpRight, Lock,
} from 'lucide-react'

/* ─────────────────────────────────────────────────────────────
   PROJECT DATA — edit here only.
   `live`   → deployed URL (renders the primary "Open site" action)
   `code`   → repo URL     (renders the secondary "Code" action)
   `note`   → small honest caveat shown next to the actions
   ───────────────────────────────────────────────────────────── */

const featured = {
  title: 'BCHS Senior High Portal',
  kicker: 'Baject Castillo High School',
  icon: <GraduationCap size={26} />,
  description:
    'Grade encoding and release system for Grade 11. Admins plot subjects per student, ' +
    'teachers encode by quarter, and students only see a grade once it has been released.',
  stack: ['PHP (MVC)', 'React', 'TypeScript', 'Tailwind', 'MySQL'],
  live: 'https://bchs-shs.site.je/login',
  code: 'https://github.com/Razzyzzzzzz',
  note: 'Login required',
  features: [
    'Three roles: admin, adviser, student',
    'Irregular students graded only in plotted subjects',
    'Grades hidden until a teacher releases them',
    'Quarter scoping across Q1–Q3',
  ],
}

const projects = [
  {
    title: 'ResQDir',
    kicker: 'Emergency response directory',
    icon: <Siren size={20} />,
    description:
      'Searchable directory of emergency contacts — police, fire, medical and rescue units — ' +
      'grouped by service so a number is one tap away.',
    stack: ['PHP', 'JavaScript', 'MySQL'],
    live: 'https://resqdir.ct.ws/',
    code: 'https://github.com/Razzyzzzzzz',
  },
  {
    title: 'Emergency Directory',
    kicker: 'Incident reporting',
    icon: <Phone size={20} />,
    description:
      'Public reporting form that captures incident type, location and details, then routes ' +
      'the report to the responding office for follow-up.',
    stack: ['PHP', 'JavaScript', 'MySQL'],
    live: 'https://emergencydirectory.ct.ws/report',
    code: 'https://github.com/Razzyzzzzzz',
  },
  {
    title: 'Pingol-Ramos DCMS',
    kicker: 'Dental clinic management',
    icon: <Stethoscope size={20} />,
    description:
      'Clinic management system covering patient records, appointment scheduling and ' +
      'treatment history for a private dental practice.',
    stack: ['PHP', 'MySQL', 'Bootstrap'],
    live: 'https://pingol-ramos-dcms.ct.ws/',
    code: 'https://github.com/Razzyzzzzzz',
  },
  {
    title: 'SpendLens',
    kicker: 'Personal finance tracker',
    icon: <Wallet size={20} />,
    description:
      'Expense tracker with categorised records, budget limits, overspend alerts and ' +
      'monthly spending charts.',
    stack: ['PHP', 'JavaScript', 'MySQL', 'Chart.js'],
    code: 'https://github.com/Razzyzzzzzz',
  },
]

/* Reveal on scroll — respects prefers-reduced-motion via CSS. */
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setShown(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal${shown ? ' is-in' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function Actions({ live, code, note, size = 'sm' }) {
  return (
    <div className="proj-actions">
      {live && (
        <a href={live} target="_blank" rel="noopener noreferrer" className={size === 'lg' ? 'btn-primary' : 'proj-action proj-action--primary'}>
          Open site <ArrowUpRight size={size === 'lg' ? 16 : 14} />
        </a>
      )}
      {code && (
        <a href={code} target="_blank" rel="noopener noreferrer" className={size === 'lg' ? 'btn-outline' : 'proj-action'}>
          <Github size={size === 'lg' ? 16 : 14} /> Code
        </a>
      )}
      {note && (
        <span className="proj-note"><Lock size={11} /> {note}</span>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">

        <div className="section-head">
          <p className="section-label">Selected work</p>
          <h2 className="section-title">
            Systems I&apos;ve <span style={{ color: 'var(--accent)' }}>shipped</span>
          </h2>
          <p className="section-subtitle">
            Four of these are deployed and reachable right now — open any of them.
          </p>
        </div>

        {/* ── Featured ── */}
        <Reveal>
          <article className="proj-feature">
            <div className="proj-feature-main">
              <div className="proj-head">
                <div className="proj-icon proj-icon--lg">{featured.icon}</div>
                <span className="chip chip--live">Live</span>
              </div>

              <p className="proj-kicker">{featured.kicker}</p>
              <h3 className="proj-title proj-title--lg">{featured.title}</h3>
              <p className="proj-desc">{featured.description}</p>

              <ul className="proj-features">
                {featured.features.map(f => (
                  <li key={f}><span className="proj-bullet" />{f}</li>
                ))}
              </ul>

              <div className="proj-stack">
                {featured.stack.map(s => <span key={s} className="tag">{s}</span>)}
              </div>

              <Actions live={featured.live} code={featured.code} note={featured.note} size="lg" />
            </div>

            <aside className="proj-feature-side" aria-hidden="true">
              <div className="proj-window">
                <div className="proj-window-bar">
                  <span /><span /><span />
                  <code>bchs-shs.site.je</code>
                </div>
                <div className="proj-window-body">
                  <div className="pw-row"><span className="pw-key">Student</span><span className="pw-val">Grade 11 — STEM A</span></div>
                  <div className="pw-row"><span className="pw-key">General Mathematics</span><span className="pw-num">89</span></div>
                  <div className="pw-row"><span className="pw-key">Oral Communication</span><span className="pw-num">92</span></div>
                  <div className="pw-row"><span className="pw-key">Earth &amp; Life Science</span><span className="pw-num">87</span></div>
                  <div className="pw-row pw-row--muted"><span className="pw-key">Statistics &amp; Probability</span><span className="pw-pending">Not released</span></div>
                </div>
              </div>
            </aside>
          </article>
        </Reveal>

        {/* ── Grid ── */}
        <div className="proj-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <article className="proj-card">
                <div className="proj-head">
                  <div className="proj-icon">{p.icon}</div>
                  {p.live
                    ? <span className="chip chip--live">Live</span>
                    : <span className="chip">Case study</span>}
                </div>

                <p className="proj-kicker">{p.kicker}</p>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.description}</p>

                <div className="proj-stack">
                  {p.stack.map(s => <span key={s} className="tag">{s}</span>)}
                </div>

                <Actions live={p.live} code={p.code} />
              </article>
            </Reveal>
          ))}
        </div>

        <div className="proj-footer">
          <a href="https://github.com/Razzyzzzzzz" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <Github size={16} /> All repositories
          </a>
        </div>
      </div>

      <style>{`
        /* ── Featured ── */
        .proj-feature {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 40px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 34px;
          margin-bottom: 20px;
          position: relative;
          overflow: hidden;
        }
        .proj-feature::before {
          content: '';
          position: absolute;
          inset: 0 0 auto 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), var(--purple));
        }
        .proj-feature-main { display: flex; flex-direction: column; }
        .proj-feature-side { display: flex; align-items: center; }

        /* ── Card ── */
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .proj-grid > .reveal { display: flex; }
        .proj-card {
          display: flex;
          flex-direction: column;
          width: 100%;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 26px;
          transition: border-color .2s ease, transform .2s ease;
        }
        .proj-card:hover {
          border-color: var(--border-light);
          transform: translateY(-3px);
        }

        /* ── Shared card parts ── */
        .proj-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .proj-icon {
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          border-radius: var(--radius);
          background: var(--bg-surface);
          border: 1px solid var(--border);
          color: var(--accent);
        }
        .proj-icon--lg { width: 56px; height: 56px; border-radius: 16px; }

        .proj-kicker {
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 3px;
        }
        .proj-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.15rem;
          line-height: 1.25;
          color: var(--text);
          margin-bottom: 10px;
        }
        .proj-title--lg { font-size: 1.55rem; margin-bottom: 14px; }

        .proj-desc {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.75;
          margin-bottom: 18px;
        }
        .proj-card .proj-desc { flex: 1; }

        .proj-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-bottom: 22px;
        }
        .proj-features li {
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 13.5px;
          color: var(--text-muted);
        }
        .proj-bullet {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }

        .proj-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }

        .proj-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: auto;
        }
        .proj-action {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
          background: transparent;
          color: var(--text-muted);
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          transition: color .18s ease, border-color .18s ease, background .18s ease;
        }
        .proj-action:hover { color: var(--text); border-color: var(--text-dim); }
        .proj-action--primary {
          border-color: rgba(56,245,192,.35);
          background: var(--accent-dim);
          color: var(--accent);
          font-weight: 600;
        }
        .proj-action--primary:hover {
          color: var(--bg-primary);
          background: var(--accent);
          border-color: var(--accent);
        }
        .proj-note {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          color: var(--text-dim);
        }

        /* ── Mock window (featured) ── */
        .proj-window {
          width: 100%;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
        }
        .proj-window-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 11px 14px;
          border-bottom: 1px solid var(--border);
          background: var(--bg-surface);
        }
        .proj-window-bar span {
          width: 9px; height: 9px;
          border-radius: 50%;
          background: var(--border-light);
        }
        .proj-window-bar code {
          margin-left: 10px;
          font-size: 11.5px;
          color: var(--text-dim);
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        }
        .proj-window-body { padding: 8px 16px 16px; }
        .pw-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 11px 0;
          border-bottom: 1px solid var(--border);
        }
        .pw-row:last-child { border-bottom: 0; }
        .pw-key { font-size: 13px; color: var(--text-muted); }
        .pw-val { font-size: 12px; color: var(--text-dim); }
        .pw-num {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 15px;
          color: var(--accent);
        }
        .pw-pending {
          font-size: 11px;
          color: var(--text-dim);
          border: 1px solid var(--border);
          border-radius: 50px;
          padding: 2px 9px;
        }
        .pw-row--muted .pw-key { color: var(--text-dim); }

        .proj-footer { text-align: center; margin-top: 40px; }

        /* ── Responsive ── */
        @media (max-width: 980px) {
          .proj-feature { grid-template-columns: 1fr; gap: 28px; padding: 28px; }
          .proj-feature-side { order: -1; }
        }
        @media (max-width: 700px) {
          .proj-grid { grid-template-columns: 1fr; }
          .proj-feature { padding: 24px; }
          .proj-title--lg { font-size: 1.3rem; }
        }
      `}</style>
    </section>
  )
}