import { Code2, Server, Wrench, PenTool } from 'lucide-react'

/* `core: true` marks the tools actually used to build the shipped systems —
   they render filled so the eye lands on them first. */
const groups = [
  {
    name: 'Frontend',
    icon: <Code2 size={16} />,
    items: [
      { label: 'HTML', core: true },
      { label: 'CSS', core: true },
      { label: 'JavaScript', core: true },
      { label: 'Vue.js' },
      { label: 'React' },
      { label: 'TypeScript' },
      { label: 'Tailwind CSS' },
      { label: 'Bootstrap' },
      { label: 'jQuery' },
    ],
  },
  {
    name: 'Backend & data',
    icon: <Server size={16} />,
    items: [
      { label: 'PHP', core: true },
      { label: 'MySQL', core: true },
      { label: 'Laravel' },
      { label: 'REST APIs' },
      { label: 'Axios' },
    ],
  },
  {
    name: 'Tools',
    icon: <Wrench size={16} />,
    items: [
      { label: 'Git & GitHub', core: true },
      { label: 'VS Code' },
      { label: 'XAMPP' },
      { label: 'Postman' },
      { label: 'Chrome DevTools' },
      { label: 'cPanel deployment' },
    ],
  },
  {
    name: 'Design & media',
    icon: <PenTool size={16} />,
    items: [
      { label: 'Figma', core: true },
      { label: 'UI/UX fundamentals' },
      { label: 'Canva' },
      { label: 'CapCut' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">

        <div className="section-head">
          <p className="section-label">Toolkit</p>
          <h2 className="section-title">
            What I build <span style={{ color: 'var(--accent)' }}>with</span>
          </h2>
          <p className="section-subtitle">
            Highlighted items are the stack behind the systems in this portfolio.
          </p>
        </div>

        <div className="skills-grid">
          {groups.map(g => (
            <div key={g.name} className="skill-panel">
              <div className="skill-panel-head">
                <span className="skill-panel-icon">{g.icon}</span>
                <h3 className="skill-panel-name">{g.name}</h3>
              </div>
              <div className="skill-tags">
                {g.items.map(i => (
                  <span key={i.label} className={i.core ? 'tag tag--core' : 'tag'}>{i.label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .skill-panel {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 26px;
          transition: border-color .2s ease;
        }
        .skill-panel:hover { border-color: var(--border-light); }

        .skill-panel-head {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 16px;
          margin-bottom: 18px;
          border-bottom: 1px solid var(--border);
        }
        .skill-panel-icon {
          display: flex;
          align-items: center;
          color: var(--accent);
        }
        .skill-panel-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          color: var(--text);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-tags .tag {
          padding: 6px 13px;
          font-size: 13px;
        }
        .tag--core {
          background: var(--accent-dim);
          border-color: rgba(56,245,192,.28);
          color: var(--accent);
          font-weight: 600;
        }

        @media (max-width: 700px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}