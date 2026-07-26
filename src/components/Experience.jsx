import { Briefcase, Calendar, MapPin, CheckCircle, Code2 } from 'lucide-react'

const experiences = [
  {
    role: 'IT Support Intern',
    company: 'Philippine National Internal Affairs Service',
    duration: '2026',
    location: 'Philippines',
    hours: '600 Hours',
    type: 'Internship',
    color: 'var(--accent)',
    highlights: [
      'Provided technical support and troubleshooting for hardware and software issues',
      'Assisted in network setup, configuration, and maintenance tasks',
      'Managed and maintained IT equipment and peripherals across departments',
      'Documented IT incidents and resolutions in the support ticketing system',
      'Coordinated with senior IT staff for system updates and patch management',
      'Gained hands-on experience in a government IT environment',
    ],
  },
]

const freelance = [
  {
    role: 'Grading System',
    type: 'Freelance',
    description: 'Developed a web-based grading system to streamline grade encoding, computation, and reporting for academic use.',
    highlights: [
      'Built grade encoding and automated computation features',
      'Designed role-based access for teachers and administrators',
      'Generated printable grade reports and transcripts',
    ],
  },
  {
    role: 'Retirement System',
    type: 'Freelance',
    description: 'Built a retirement management system to track employee benefits, contributions, and retirement eligibility.',
    highlights: [
      'Implemented contribution tracking and benefit calculation logic',
      'Created employee records management with retirement status monitoring',
      'Produced summary reports for HR and administration',
    ],
  },
  {
    role: 'SpendLens — Expense Tracking App',
    type: 'Freelance',
    description: 'Developed a personal finance tracking application to help users monitor spending habits and budgets.',
    highlights: [
      'Designed an intuitive dashboard with categorized expense views',
      'Implemented budget-setting and overspend alert features',
      'Integrated visual analytics with charts for spending insights',
    ],
  },
]

const education = [
  {
    level: 'College',
    degree: 'Bachelor of Science in Information Technology',
    school: 'College of Our Lady of Mercy',
    period: '2022 – 2026',
    status: 'Graduated',
    honor: null,
    gradient: 'linear-gradient(90deg, var(--purple), #c77dff)',
    statusColor: 'var(--accent)',
    statusBg: 'var(--accent-dim)',
    schoolColor: 'var(--purple)',
  },
  {
    level: 'Senior High School',
    degree: 'Senior High School',
    school: 'Felizardo C. Lipana National High School',
    period: '2020 – 2022',
    status: 'With Honor',
    honor: true,
    gradient: 'linear-gradient(90deg, #f4a261, #e76f51)',
    statusColor: '#f4a261',
    statusBg: 'rgba(244,162,97,0.12)',
    schoolColor: '#f4a261',
  },
  {
    level: 'Junior High School',
    degree: 'Junior High School',
    school: 'Felizardo C. Lipana National High School',
    period: '2016 – 2020',
    status: 'Completed',
    honor: null,
    gradient: 'linear-gradient(90deg, #4cc9f0, #4895ef)',
    statusColor: '#4cc9f0',
    statusBg: 'rgba(76,201,240,0.12)',
    schoolColor: '#4cc9f0',
  },
  {
    level: 'Elementary',
    degree: 'Elementary School',
    school: 'Sta. Rita Elementary School',
    period: '2010 – 2016',
    status: 'Completed',
    honor: null,
    gradient: 'linear-gradient(90deg, #38f5c0, #06d6a0)',
    statusColor: 'var(--accent)',
    statusBg: 'var(--accent-dim)',
    schoolColor: 'var(--accent)',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Career & Education</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            My <span style={{ color: 'var(--accent)' }}>Experience</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Real-world experience and academic background that shaped my technical foundation.
          </p>
        </div>

        <div className="exp-grid">
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>

            {/* Work Experience */}
            <div>
              <div className="exp-section-label">
                <Briefcase size={13} style={{ color: 'var(--accent)' }} /> Work Experience
              </div>
              {experiences.map(exp => (
                <div key={exp.role} className="exp-card"
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <div className="exp-card-topbar" style={{ background: 'linear-gradient(90deg, var(--accent), var(--purple))' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <p style={{ color: 'var(--accent)', fontWeight: 500, fontSize: 14 }}>{exp.company}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                      <span className="badge badge-accent">{exp.type}</span>
                      <span className="badge badge-purple">{exp.hours}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 20, marginBottom: 20, flexWrap: 'wrap' }}>
                    <div className="exp-meta"><Calendar size={13} style={{ color: 'var(--accent)' }} /> {exp.duration}</div>
                    <div className="exp-meta"><MapPin size={13} style={{ color: 'var(--accent)' }} /> {exp.location}</div>
                  </div>
                  <ul className="exp-highlights">
                    {exp.highlights.map(h => (
                      <li key={h}>
                        <CheckCircle size={15} style={{ color: 'var(--accent)', marginTop: 3, flexShrink: 0 }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Freelance Projects */}
            <div>
              <div className="exp-section-label">
                <Code2 size={13} style={{ color: '#4cc9f0' }} />
                <span style={{ color: '#4cc9f0' }}>Freelance Projects</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {freelance.map(proj => (
                  <div key={proj.role} className="exp-card freelance-card"
                    onMouseEnter={e => e.currentTarget.style.borderColor = '#4cc9f0'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                  >
                    <div className="exp-card-topbar" style={{ background: 'linear-gradient(90deg, #4cc9f0, var(--purple))' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, flexWrap: 'wrap', gap: 10 }}>
                      <h3 className="exp-role" style={{ fontSize: '1rem' }}>{proj.role}</h3>
                      <span className="badge" style={{ background: 'rgba(76,201,240,0.12)', border: '1px solid rgba(76,201,240,0.25)', color: '#4cc9f0' }}>{proj.type}</span>
                    </div>
                    <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 14 }}>{proj.description}</p>
                    <ul className="exp-highlights">
                      {proj.highlights.map(h => (
                        <li key={h}>
                          <CheckCircle size={14} style={{ color: '#4cc9f0', marginTop: 3, flexShrink: 0 }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column — Education + Stats */}
          <div>
            <div className="exp-section-label">
              <span style={{ fontSize: 13, color: 'var(--purple)' }}>🎓</span> Education
            </div>

            {/* Education Timeline */}
            <div className="edu-timeline">
              {education.map((ed, i) => (
                <div key={ed.level} className="edu-item">
                  {/* Timeline dot + line */}
                  <div className="edu-timeline-track">
                    <div className="edu-dot" style={{ background: ed.gradient }} />
                    {i < education.length - 1 && <div className="edu-line" />}
                  </div>

                  {/* Card */}
                  <div className="edu-card"
                    onMouseEnter={e => e.currentTarget.style.borderColor = ed.schoolColor}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                  >
                    <div className="exp-card-topbar" style={{ background: ed.gradient }} />

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                      <div>
                        <div style={{ fontSize: 10, color: 'var(--text-dim)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>{ed.level}</div>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, lineHeight: 1.4, marginBottom: 4 }}>{ed.degree}</h3>
                      </div>
                      <span className="badge" style={{
                        background: ed.statusBg,
                        border: `1px solid ${ed.statusColor}40`,
                        color: ed.statusColor,
                        flexShrink: 0,
                        marginTop: 18,
                      }}>
                        {ed.honor ? '🏅 ' : ''}{ed.status}
                      </span>
                    </div>

                    <p style={{ color: ed.schoolColor, fontSize: 12.5, fontWeight: 500, marginBottom: 10 }}>{ed.school}</p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-dim)' }}>
                      <Calendar size={11} style={{ color: ed.schoolColor }} />
                      {ed.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="exp-card" style={{ marginTop: 8 }}>
              <p style={{ fontSize: 12, color: 'var(--text-dim)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Quick Stats</p>
              {[
                { label: 'Internship Hours',  value: '600+', color: 'var(--accent)' },
                { label: 'Freelance Projects', value: '3',   color: '#4cc9f0' },
                { label: 'Projects Built',     value: '5+',  color: 'var(--purple)' },
                { label: 'Years Studying',     value: '4',   color: '#f4a261' },
                { label: 'Technologies',       value: '10+', color: '#4cc9f0' },
              ].map(s => (
                <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{s.label}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: s.color }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .exp-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 32px;
          align-items: start;
        }
        .exp-section-label {
          font-size: 12px;
          color: var(--text-dim);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .exp-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 28px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .freelance-card { padding: 22px 24px; }
        .exp-card-topbar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 16px 16px 0 0;
        }
        .exp-role {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.15rem;
          margin-bottom: 4px;
        }
        .exp-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--text-muted);
        }
        .exp-highlights {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .exp-highlights li {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }
        .exp-highlights span {
          font-size: 13.5px;
          color: var(--text-muted);
          line-height: 1.7;
        }
        .badge {
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
        }
        .badge-accent {
          background: var(--accent-dim);
          border: 1px solid rgba(56,245,192,0.25);
          color: var(--accent);
        }
        .badge-purple {
          background: var(--purple-dim);
          border: 1px solid rgba(139,124,248,0.25);
          color: var(--purple);
        }

        /* Education Timeline */
        .edu-timeline {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
        }
        .edu-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }
        .edu-timeline-track {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          padding-top: 22px;
        }
        .edu-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
          box-shadow: 0 0 8px rgba(255,255,255,0.2);
        }
        .edu-line {
          width: 2px;
          flex: 1;
          min-height: 20px;
          background: var(--border);
          margin: 6px 0;
        }
        .edu-card {
          flex: 1;
          min-width: 0;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 18px 18px 14px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.2s;
          margin-bottom: 4px;
        }

        @media (max-width: 900px) {
          .exp-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}