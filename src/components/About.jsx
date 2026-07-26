import {
  GraduationCap, MapPin, Code2, CircleCheck,
  Briefcase, Layers, UploadCloud, ArrowRight, FileText,
} from 'lucide-react'

const hobbies = ['Anime', 'Photography', 'Gaming', 'Reading', 'Travel', 'Music']

/* One figure leads (live systems); the rest stay quiet. */
const stats = [
  { value: '4',    label: 'systems live',     lead: true },
  { value: '600',  label: 'internship hours' },
  { value: '6',    label: 'projects built' },
  { value: '2026', label: 'BSIT graduate' },
]

/* Evidence, not adjectives — each line names something that happened. */
const facts = [
  {
    icon: <Briefcase size={16} />,
    title: '600-hour internship',
    desc: 'IT support at the Philippine National Internal Affairs Service — hardware and network troubleshooting, ticket documentation, patch coordination.',
  },
  {
    icon: <Layers size={16} />,
    title: 'Full stack, end to end',
    desc: 'Schema and backend routes in PHP MVC or Laravel on MySQL, then the interface on top in React or Vue.',
  },
  {
    icon: <UploadCloud size={16} />,
    title: 'Deployed, not just localhost',
    desc: 'Every system here runs on live shared hosting — domains, cPanel, database migration and all the parts that only break in production.',
  },
]

const details = [
  {
    icon: <GraduationCap size={16} />,
    label: 'Education',
    value: 'BS Information Technology',
    sub: 'College of Our Lady of Mercy',
  },
  {
    icon: <MapPin size={16} />,
    label: 'Based in',
    value: 'Sta. Rita, Guiguinto',
    sub: 'Bulacan, Philippines',
  },
  {
    icon: <Code2 size={16} />,
    label: 'Focus',
    value: 'Full-stack web development',
    sub: 'PHP · Laravel · React · MySQL',
  },
  {
    icon: <CircleCheck size={16} />,
    label: 'Availability',
    value: 'Open to work',
    sub: 'Full-time · freelance · remote',
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">

          {/* ── Media column ── */}
          <div className="about-media">
            <div className="about-image-card">
              <img
                src="/profile.jpg"
                alt="Joshua P. De Regla"
                className="about-img"
                loading="lazy"
              />
            </div>

            <div className="about-stats-row">
              {stats.map(s => (
                <div key={s.label} className={s.lead ? 'stat stat--lead' : 'stat'}>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Text column ── */}
          <div className="about-content">
            <p className="section-label">About</p>
            <h2 className="section-title">
              I build web systems that{' '}
              <span style={{ color: 'var(--accent)' }}>people actually use</span>
            </h2>

            <p className="about-para">
              I&apos;m a BSIT graduate from College of Our Lady of Mercy. Most of what I know came
              from building things end to end — sketching the database, writing the backend, then
              putting an interface on top of it.
            </p>
            <p className="about-para about-para--last">
              The projects below aren&apos;t mockups. They&apos;re deployed on live hosting with
              real logins, real records, and all the small problems that only show up once
              something leaves localhost.
            </p>

            <ul className="about-facts">
              {facts.map(f => (
                <li key={f.title} className="fact">
                  <span className="fact-icon">{f.icon}</span>
                  <div>
                    <p className="fact-title">{f.title}</p>
                    <p className="fact-desc">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="about-details">
              {details.map(d => (
                <div key={d.label} className="detail">
                  <span className="detail-icon">{d.icon}</span>
                  <div>
                    <p className="detail-label">{d.label}</p>
                    <p className="detail-value">{d.value}</p>
                    <p className="detail-sub">{d.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-hobbies">
              <p className="about-hobbies-title">Outside of work</p>
              <div className="about-hobbies-list">
                {hobbies.map(h => <span key={h} className="tag">{h}</span>)}
              </div>
            </div>

            <div className="about-cta-row">
              <a
                href="#contact"
                className="btn-primary"
                onClick={e => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Get in touch <ArrowRight size={15} />
              </a>
              <a
                href="https://drive.google.com/file/d/17sudzXRCd6P6uelEjdG06PL-OynuLrgF/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <FileText size={15} /> Resume
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 64px;
          align-items: start;
        }

        /* ── Media ── */
        .about-media { min-width: 0; }
        .about-image-card {
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .about-img {
          width: 100%;
          height: clamp(320px, 40vw, 440px);
          object-fit: cover;
          object-position: center top;
        }

        .about-stats-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-top: 10px;
        }
        .stat {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 16px 18px;
        }
        .stat--lead { border-color: rgba(56,245,192,0.28); background: var(--accent-dim); }
        .stat-value {
          display: block;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.5rem;
          line-height: 1;
          color: var(--text);
        }
        .stat--lead .stat-value { color: var(--accent); }
        .stat-label {
          display: block;
          margin-top: 6px;
          font-size: 12.5px;
          color: var(--text-muted);
          line-height: 1.4;
        }

        /* ── Text ── */
        .about-content { min-width: 0; }
        .about-para {
          color: var(--text-muted);
          line-height: 1.9;
          font-size: 15px;
          margin-bottom: 16px;
        }
        .about-para--last { margin-bottom: 30px; }

        /* ── Facts ── */
        .about-facts {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-bottom: 30px;
          border-top: 1px solid var(--border);
        }
        .fact {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 18px 0;
          border-bottom: 1px solid var(--border);
        }
        .fact-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px; height: 34px;
          flex-shrink: 0;
          border-radius: var(--radius-sm);
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--accent);
        }
        .fact-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 14px;
          color: var(--text);
          margin-bottom: 4px;
        }
        .fact-desc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.75;
        }

        /* ── Details ── */
        .about-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 30px;
        }
        .detail {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          min-width: 0;
          padding: 14px 16px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: border-color .2s ease;
        }
        .detail:hover { border-color: var(--border-light); }
        .detail-icon {
          display: flex;
          color: var(--accent);
          margin-top: 3px;
          flex-shrink: 0;
        }
        .detail-label {
          font-size: 11.5px;
          color: var(--text-dim);
          margin-bottom: 2px;
        }
        .detail-value {
          font-weight: 600;
          font-size: 13.5px;
          color: var(--text);
          line-height: 1.4;
        }
        .detail-sub {
          font-size: 11.5px;
          color: var(--text-muted);
          margin-top: 2px;
        }

        /* ── Hobbies ── */
        .about-hobbies { margin-bottom: 30px; }
        .about-hobbies-title {
          font-size: 12.5px;
          color: var(--text-dim);
          margin-bottom: 10px;
        }
        .about-hobbies-list {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .about-cta-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 36px; }
          .about-image-card { max-width: 460px; margin: 0 auto; }
          .about-stats-row { max-width: 460px; margin: 10px auto 0; grid-template-columns: repeat(4, 1fr); }
          .stat { padding: 14px 12px; }
        }
        @media (max-width: 560px) {
          .about-stats-row { grid-template-columns: repeat(2, 1fr); }
          .about-details { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}