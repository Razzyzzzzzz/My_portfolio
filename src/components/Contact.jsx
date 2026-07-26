import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

// ─────────────────────────────────────────────────────────────
//  EMAILJS SETUP (replace these 3 values with your own)
//
//  1. Go to https://www.emailjs.com and create a FREE account
//  2. Add a Gmail service → copy the Service ID below
//  3. Create an email template → copy the Template ID below
//     Template variables to use inside EmailJS:
//       {{from_name}}   – sender's name
//       {{from_email}}  – sender's email
//       {{subject}}     – subject
//       {{message}}     – message body
//  4. Go to Account → API Keys → copy your Public Key below
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_33qvndi'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_d35uga2'  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'QVc5F-avEAe5FiXs1'   // e.g. 'aBcDeFgHiJkLmNoP'

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', padding: '13px 16px',
    background: 'var(--bg-primary)', border: '1.5px solid var(--border)',
    borderRadius: '10px', color: 'var(--text)',
    fontFamily: 'var(--font-body)', fontSize: '14px',
    outline: 'none', transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Let's <span style={{ color: 'var(--accent)' }}>Connect</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a project in mind, an opportunity to share, or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 48 }}>
          {/* Left: Info */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>Contact Information</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8, marginBottom: 32 }}>
              Feel free to reach out for collaborations, freelance opportunities, or just a friendly conversation about tech!
            </p>

            {[
              { icon: <Mail size={18} />, label: 'Email', value: 'joshuasenpai07@gmail.com', href: 'mailto:joshuasenpai07@gmail.com' },
              { icon: <Phone size={18} />, label: 'Phone', value: '0918 747 9937', href: 'tel:09187479937' },
              { icon: <MapPin size={18} />, label: 'Location', value: 'Sta. Rita, Guiguinto, Bulacan', href: null },
            ].map(c => (
              <div key={c.label} style={{
                display: 'flex', gap: 16, alignItems: 'flex-start',
                padding: '18px', borderRadius: '12px',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                marginBottom: 14, transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                  background: 'var(--accent-dim)', border: '1px solid rgba(56,245,192,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)',
                }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text-dim)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} style={{ color: 'var(--text)', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}
                      onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                      onMouseLeave={e => e.target.style.color = 'var(--text)'}
                    >{c.value}</a>
                  ) : (
                    <span style={{ color: 'var(--text)', fontSize: 14, fontWeight: 500 }}>{c.value}</span>
                  )}
                </div>
              </div>
            ))}

            <div style={{
              marginTop: 24, padding: '16px 20px',
              background: 'var(--accent-dim)', border: '1px solid rgba(56,245,192,0.2)',
              borderRadius: '12px', display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, animation: 'pulse-accent 2s ease-in-out infinite' }} />
              <span style={{ fontSize: 13.5, color: 'var(--accent)', fontWeight: 500, lineHeight: 1.5 }}>
                Currently available for internship opportunities and freelance projects.
              </span>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: '20px', padding: '32px',
          }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <CheckCircle size={56} style={{ color: 'var(--accent)', marginBottom: 16 }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem', marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.8 }}>
                  Thanks for reaching out! I'll get back to you at<br />
                  <strong style={{ color: 'var(--accent)' }}>joshuasenpai07@gmail.com</strong> as soon as possible.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-outline" style={{ marginTop: 24 }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 12, color: 'var(--text-dim)', letterSpacing: 1, textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Name</label>
                    <input
                      name="from_name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      required placeholder="Your name"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: 'var(--text-dim)', letterSpacing: 1, textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Email</label>
                    <input
                      name="from_email"
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      required placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: 12, color: 'var(--text-dim)', letterSpacing: 1, textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    required placeholder="What's this about?"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <div>
                  <label style={{ fontSize: 12, color: 'var(--text-dim)', letterSpacing: 1, textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required placeholder="Tell me about your project or opportunity..." rows={5}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 130 }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                {/* Error banner */}
                {status === 'error' && (
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '12px 16px', borderRadius: 10,
                    background: 'rgba(255,80,80,0.1)', border: '1px solid rgba(255,80,80,0.3)',
                    color: '#ff8080', fontSize: 13.5,
                  }}>
                    <AlertCircle size={16} />
                    Failed to send. Please check your EmailJS setup or email me directly at joshuasenpai07@gmail.com.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === 'loading'}
                  style={{ justifyContent: 'center', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'wait' : 'pointer' }}
                >
                  {status === 'loading'
                    ? <><span style={{ width: 15, height: 15, border: '2px solid rgba(0,0,0,0.3)', borderTopColor: 'var(--bg-primary)', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} /> Sending...</>
                    : <><Send size={15} /> Send Message</>
                  }
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media(max-width:768px){
          #contact .container>div:nth-child(2){ grid-template-columns:1fr!important; }
          form>div:first-child{ grid-template-columns:1fr!important; }
        }
      `}</style>
    </section>
  )
}
