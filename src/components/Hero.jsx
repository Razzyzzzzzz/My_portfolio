import {
  ChevronDown, Github, Linkedin, Mail, FileText, ArrowRight,
  Building2, Globe, CircleCheck,
} from 'lucide-react'

// Floating stat badges beside the photo
const badges = [
  {
    id: 'exp',
    icon: <Building2 size={17} />,
    line1: '600 hours',
    line2: 'Government internship',
    color: 'var(--accent)',
    border: 'rgba(56,245,192,0.25)',
    top: '12%',
    left: '-38%',
    duration: '5s',
    delay: '0s',
  },
  {
    id: 'live',
    icon: <Globe size={17} />,
    line1: '4 systems live',
    line2: 'Deployed & in use',
    color: 'var(--purple)',
    border: 'rgba(139,124,248,0.25)',
    top: '72%',
    left: '-40%',
    duration: '6s',
    delay: '-1.5s',
  },
  {
    id: 'open',
    icon: <CircleCheck size={17} />,
    line1: 'Open to work',
    line2: 'Full-time / freelance',
    color: '#4cc9f0',
    border: 'rgba(76,201,240,0.25)',
    top: '42%',
    left: '98%',
    duration: '7s',
    delay: '-3s',
  },
]

export default function Hero() {
  return (
    <section id="home" className="grid-bg hero-section">
      {/* Ambient orbs */}
      <div className="hero-orb hero-orb--left" />
      <div className="hero-orb hero-orb--right" />

      <div className="container hero-inner">

        {/* ── LEFT: Text ── */}
        <div className="hero-text">

          <div className="hero-status-pill">
            <span className="hero-status-dot" />
            <span>Open to opportunities</span>
          </div>

          <h1 className="hero-name">
            Hi, I&apos;m<br />
            <span className="hero-name-gradient">Joshua Pastor</span>
            {' '}De Regla
          </h1>

          <p className="hero-desc">
            BSIT graduate from <strong>College of Our Lady of Mercy</strong>, with four web
            systems currently deployed and running — a school grading portal, a dental clinic
            management system, and two emergency response tools.
          </p>

          <div className="hero-cta-row">
            <a
              href="#projects"
              className="btn-primary"
              onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              See the work <ArrowRight size={15} />
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

          <div className="hero-social-row">
            {[
              { icon: <Github size={17} />, href: 'https://github.com/Razzyzzzzzz', label: 'GitHub' },
              { icon: <Linkedin size={17} />, href: 'https://www.linkedin.com/in/joshua-deregla-7104093b3', label: 'LinkedIn' },
              { icon: <Mail size={17} />, href: 'mailto:joshuasenpai07@gmail.com', label: 'Email' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="hero-social-btn"
              >
                {s.icon}
              </a>
            ))}
            <div className="hero-social-sep" />
            <span className="hero-social-email">joshuasenpai07@gmail.com</span>
          </div>
        </div>

        {/* ── RIGHT: Photo ── */}
        <div className="hero-photo-wrap">
          <div className="hero-photo-rel">
            <div className="hero-ring" />

            <div className="hero-photo-frame">
              <img
                src="/profile.jpg"
                alt="Joshua P. De Regla"
                className="hero-photo-img"
              />
            </div>

            {badges.map(b => (
              <div
                key={b.id}
                className="hero-badge"
                style={{
                  top: b.top,
                  left: b.left,
                  border: `1px solid ${b.border}`,
                  animationDuration: b.duration,
                  animationDelay: b.delay,
                }}
              >
                <span className="hero-badge-icon" style={{ color: b.color }}>{b.icon}</span>
                <div>
                  <div className="hero-badge-line1" style={{ color: b.color }}>{b.line1}</div>
                  <div className="hero-badge-line2">{b.line2}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="hero-scroll"
        aria-label="Scroll to About"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="hero-scroll-text">scroll</span>
        <ChevronDown size={17} />
      </button>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 70px;
        }

        /* ── Orbs ── */
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-orb--left {
          top: 8%; left: -6%;
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(56,245,192,0.07) 0%, transparent 70%);
          animation: float 8s ease-in-out infinite;
        }
        .hero-orb--right {
          bottom: 4%; right: -10%;
          width: 620px; height: 620px;
          background: radial-gradient(circle, rgba(139,124,248,0.06) 0%, transparent 70%);
          animation: float 11s ease-in-out infinite reverse;
        }

        /* ── Grid ── */
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          width: 100%;
        }

        /* ── Text side ── */
        .hero-text {
          min-width: 0;
          animation: slideInLeft 0.8s ease both;
        }

        .hero-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px;
          background: var(--accent-dim);
          border: 1px solid rgba(56,245,192,0.2);
          border-radius: 50px;
          margin-bottom: 28px;
          font-size: 13px;
          color: var(--accent);
          font-weight: 500;
        }
        .hero-status-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
          animation: pulse-accent 2s ease-in-out infinite;
        }

        .hero-name {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(2.2rem, 4.8vw, 3.5rem);
          line-height: 1.12;
          letter-spacing: -1px;
          margin-bottom: 24px;
          color: var(--text);
        }
        .hero-name-gradient {
          background: linear-gradient(135deg, var(--accent) 0%, #7ee8fa 60%, var(--purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-desc {
          color: var(--text-muted);
          font-size: clamp(0.9rem, 1.5vw, 1rem);
          line-height: 1.88;
          margin-bottom: 34px;
          max-width: 500px;
        }
        .hero-desc strong { color: var(--text); font-weight: 600; }

        .hero-cta-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 32px;
          align-items: center;
        }

        .hero-social-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .hero-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px; height: 40px;
          border-radius: var(--radius-sm);
          background: var(--bg-card);
          border: 1px solid var(--border);
          color: var(--text-muted);
          text-decoration: none;
          transition: color .2s ease, border-color .2s ease, transform .2s ease;
          flex-shrink: 0;
        }
        .hero-social-btn:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-3px);
        }
        .hero-social-sep {
          width: 1px;
          height: 20px;
          background: var(--border);
          margin: 0 4px;
        }
        .hero-social-email {
          font-size: 12.5px;
          color: var(--text-dim);
          letter-spacing: 0.3px;
          white-space: nowrap;
        }

        /* ── Photo side ── */
        .hero-photo-wrap {
          display: flex;
          justify-content: center;
          animation: fadeIn 1s ease 0.3s both;
        }
        .hero-photo-rel {
          position: relative;
          padding: 50px;
        }
        .hero-ring {
          position: absolute;
          inset: 30px;
          border-radius: 50%;
          border: 1.5px dashed rgba(56,245,192,0.16);
          pointer-events: none;
          animation: float 6s ease-in-out infinite;
        }
        .hero-photo-frame {
          width: clamp(240px, 32vw, 340px);
          height: clamp(240px, 32vw, 340px);
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--accent);
          box-shadow: 0 0 60px var(--accent-glow);
          animation: float 7s ease-in-out infinite;
          position: relative;
          z-index: 2;
        }
        .hero-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        /* Floating badges */
        .hero-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: var(--radius);
          background: rgba(8,12,24,0.88);
          backdrop-filter: blur(12px);
          white-space: nowrap;
          z-index: 3;
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
        }
        .hero-badge-icon { display: flex; flex-shrink: 0; }
        .hero-badge-line1 {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 12.5px;
          line-height: 1.2;
        }
        .hero-badge-line2 {
          font-size: 10.5px;
          color: var(--text-muted);
          margin-top: 1px;
        }

        /* Scroll indicator */
        .hero-scroll {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          background: none;
          border: none;
          color: var(--text-dim);
          animation: float 2.5s ease-in-out infinite;
          cursor: pointer;
        }
        .hero-scroll-text {
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .hero-photo-rel { padding: 40px 30px; }
        }
        @media (max-width: 900px) {
          .hero-inner { gap: 36px; }
          .hero-badge { display: none; }
        }
        @media (max-width: 768px) {
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 36px;
          }
          .hero-status-pill { margin-left: auto; margin-right: auto; }
          .hero-desc { margin-left: auto; margin-right: auto; }
          .hero-cta-row { justify-content: center; }
          .hero-social-row { justify-content: center; }
          .hero-social-email { display: none; }
          .hero-photo-wrap { order: -1; }
          .hero-photo-rel { padding: 30px; }
        }
        @media (max-width: 480px) {
          .hero-photo-frame {
            width: 220px;
            height: 220px;
          }
        }
      `}</style>
    </section>
  )
}