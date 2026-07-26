import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  const navTo = id => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border)',
      padding: '48px 0 28px',
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', marginBottom: 10 }}>
              J<span style={{ color: 'var(--accent)' }}>.</span>Deregla
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: 13.5, lineHeight: 1.8, maxWidth: 260 }}>
              BSIT Graduate & Aspiring Web Developer<br />
              based in Bulacan, Philippines.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontSize: 12, color: 'var(--text-dim)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Navigation</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['#home','Home'],['#about','About'],['#skills','Skills'],['#experience','Experience'],['#projects','Projects'],['#contact','Contact']].map(([id,label]) => (
                <li key={id}>
                  <a href={id} onClick={e => { e.preventDefault(); navTo(id) }}
                    style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13.5, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p style={{ fontSize: 12, color: 'var(--text-dim)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Connect</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: <Github size={16} />, label: 'GitHub', href: 'https://github.com/Razzyzzzzzz' },
                { icon: <Linkedin size={16} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/joshua-deregla-7104093b3?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
                { icon: <Mail size={16} />, label: 'joshuasenpai07@gmail.com', href: 'mailto:joshuasenpai07@gmail.com' },
              ].map(s => (
                <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13.5, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: 'var(--border)', marginBottom: 24 }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'var(--text-dim)', fontSize: 13 }}>
            © {year} Joshua P. Deregla. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  )
}
