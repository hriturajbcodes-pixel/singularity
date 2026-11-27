import React from 'react'

const FOOTER_COLUMNS = [
  { title: 'Product', links: [{ label: 'Compute Scheduler', href: '#features' }, { label: 'Reproducible Runs', href: '#features' }, { label: 'Inference Gateway', href: '#metrics' }, { label: 'Release Notes', href: '#workflow' }] },
  { title: 'Solutions', links: [{ label: 'Foundation Model Training', href: '#workflow' }, { label: 'Scientific Simulation', href: '#workflow' }, { label: 'Private VPC Deployment', href: '#features' }] },
  { title: 'Resources', links: [{ label: 'Documentation (Placeholder)', href: '#placeholder-docs' }, { label: 'Architecture Brief (Placeholder)', href: '#placeholder-brief' }, { label: 'System Status (Placeholder)', href: '#placeholder-status' }] },
  { title: 'Company & Legal', links: [{ label: 'About Singularity', href: '#placeholder-about' }, { label: 'Security & Trust', href: '#placeholder-security' }, { label: 'Privacy Policy (Placeholder)', href: '#placeholder-privacy' }, { label: 'Terms of Service (Placeholder)', href: '#placeholder-terms' }] },
]

export const Footer: React.FC = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-elevated)', paddingTop: '64px', paddingBottom: '40px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px', marginBottom: '56px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', letterSpacing: '0.04em', marginBottom: '12px' }}>
              <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true"><circle cx="14" cy="14" r="12" stroke="#f59e0b" strokeWidth="1.5" opacity="0.9" /><circle cx="14" cy="14" r="5" fill="#f59e0b" /><circle cx="14" cy="14" r="2" fill="#0b0a09" /></svg>
              SINGULARITY
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>Reliable compute orchestration infrastructure for research laboratories and modern engineering organizations.</p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '16px' }}>{col.title}</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', transition: 'color 0.2s ease' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent-hover)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                    >{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
          <span>© 2026 Singularity Technologies Inc. (Placeholder Entity). All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#placeholder-github">GitHub</a>
            <a href="#placeholder-x">X / Twitter</a>
            <a href="#placeholder-linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
