import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const [active,   setActive]   = useState('#home')

  /* Highlight the section currently under the navbar, not just the last one clicked. */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)

      const atBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 2
      if (atBottom) {
        setActive(links[links.length - 1].href)
        return
      }

      let current = links[0].href
      for (const l of links) {
        const el = document.querySelector(l.href)
        if (!el) continue
        if (el.getBoundingClientRect().top + y - 90 <= y) current = l.href
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      transition: 'background 0.3s ease, border-color 0.3s ease',
      background: scrolled ? 'rgba(6,9,18,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'rgba(30,45,69,0.7)' : 'transparent'}`,
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 70,
      }}>
        {/* Logo */}
        <a
          href="#home"
          onClick={e => { e.preventDefault(); handleNav('#home') }}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.25rem',
            textDecoration: 'none',
            color: 'var(--text)',
            letterSpacing: '-0.5px',
          }}
        >
          J<span style={{ color: 'var(--accent)' }}>.</span>Deregla
        </a>

        {/* Desktop links */}
        <ul className="desktop-nav nav-list">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href ? 'true' : undefined}
                onClick={e => { e.preventDefault(); handleNav(l.href) }}
                className={`nav-link${active === l.href ? ' is-active' : ''}`}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Primary CTA */}
        <a
          href="#contact"
          onClick={e => { e.preventDefault(); handleNav('#contact') }}
          className="btn-primary desktop-nav"
          style={{ padding: '10px 22px', fontSize: 13 }}
        >
          Hire me
        </a>

        {/* Mobile toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="nav-drawer">
          <ul className="nav-list nav-list--stack">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={active === l.href ? 'true' : undefined}
                  onClick={e => { e.preventDefault(); handleNav(l.href) }}
                  className={`nav-link nav-link--block${active === l.href ? ' is-active' : ''}`}
                >{l.label}</a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); handleNav('#contact') }}
            className="btn-primary"
            style={{ marginTop: 16, width: '100%', justifyContent: 'center', fontSize: 14 }}
          >Hire me</a>
        </div>
      )}

      <style>{`
        .nav-list {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
        }
        .nav-list--stack {
          flex-direction: column;
          align-items: stretch;
          gap: 2px;
        }
        .nav-link {
          display: inline-block;
          text-decoration: none;
          font-family: var(--font-body);
          font-size: 13.5px;
          font-weight: 400;
          color: var(--text-muted);
          padding: 7px 14px;
          border-radius: var(--radius-sm);
          transition: color .2s ease, background .2s ease;
        }
        .nav-link:hover { color: var(--text); background: rgba(255,255,255,0.04); }
        .nav-link.is-active {
          color: var(--accent);
          font-weight: 600;
          background: var(--accent-dim);
        }
        .nav-link--block {
          display: block;
          font-size: 15px;
          padding: 11px 16px;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text);
          cursor: pointer;
          padding: 4px;
        }

        .nav-drawer {
          background: rgba(6,9,18,0.98);
          backdrop-filter: blur(20px);
          border-top: 1px solid var(--border);
          padding: 20px 24px 28px;
          animation: fadeIn 0.2s ease;
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block; }
        }
      `}</style>
    </nav>
  )
}