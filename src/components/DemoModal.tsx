import React, { useState } from 'react'
import { X, CheckCircle2 } from 'lucide-react'

interface DemoModalProps { open: boolean; onClose: () => void }

export const DemoModal: React.FC<DemoModalProps> = ({ open, onClose }) => {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [org, setOrg] = useState('')

  if (!open) return null

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true) }
  const handleResetAndClose = () => { setSubmitted(false); setName(''); setEmail(''); setOrg(''); onClose() }

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="demo-modal-title" style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: 'rgba(0, 0, 0, 0.72)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      <div style={{ width: '100%', maxWidth: '460px', background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border-strong)', borderRadius: 'var(--radius-lg)', padding: '32px', position: 'relative', boxShadow: 'var(--shadow-card), var(--shadow-glow)' }}>
        <button type="button" onClick={handleResetAndClose} aria-label="Close modal" style={{ position: 'absolute', top: '20px', right: '20px', color: 'var(--color-text-secondary)', padding: '6px', borderRadius: 'var(--radius-sm)' }}><X size={20} /></button>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <CheckCircle2 size={44} color="#f59e0b" style={{ margin: '0 auto 16px' }} />
            <h3 id="demo-modal-title" style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '8px' }}>Demo Request Received</h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', marginBottom: '24px' }}>Thank you, {name || 'there'}. Our solutions engineering team will follow up at {email || 'your work email'} within one business day.</p>
            <button type="button" onClick={handleResetAndClose} className="btn btn-primary" style={{ width: '100%' }}>Back to Page</button>
          </div>
        ) : (
          <>
            <h3 id="demo-modal-title" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>Book a Singularity Demo</h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', marginBottom: '24px' }}>Share your details to request a technical walkthrough and deployment scoping session.</p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label htmlFor="demo-name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px' }}>Full Name</label>
                <input id="demo-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Alex Mercer" style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text-primary)', fontSize: '0.9375rem' }} />
              </div>
              <div>
                <label htmlFor="demo-email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px' }}>Work Email</label>
                <input id="demo-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@company.com" style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text-primary)', fontSize: '0.9375rem' }} />
              </div>
              <div>
                <label htmlFor="demo-org" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '6px' }}>Organization / Lab</label>
                <input id="demo-org" type="text" required value={org} onChange={(e) => setOrg(e.target.value)} placeholder="Helios Compute Lab" style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-bg)', color: 'var(--color-text-primary)', fontSize: '0.9375rem' }} />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>Request Demo</button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
