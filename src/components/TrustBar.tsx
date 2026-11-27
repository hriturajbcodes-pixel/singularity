import React from 'react'

const PARTNERS = ['AETHER DYNAMICS', 'KINETIX LAB', 'VELOCE BIO', 'HELIOS GRID', 'NORTHSTAR COMPUTE', 'SYNTHETIX CORE']

export const TrustBar: React.FC = () => {
  return (
    <section aria-label="Trusted Organizations" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', backgroundColor: 'rgba(20, 18, 16, 0.55)', paddingTop: '40px', paddingBottom: '40px' }}>
      <div className="container">
        <p style={{ textAlign: 'center', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '28px' }}>
          Trusted by research labs and high-velocity engineering teams (placeholder marks)
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '24px', alignItems: 'center', justifyItems: 'center' }}>
          {PARTNERS.map((name) => (
            <div key={name} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'var(--color-text-secondary)', opacity: 0.65, filter: 'grayscale(100%)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.05em', transition: 'opacity 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.95')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.65')}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="10" cy="10" r="3" fill="currentColor" />
              </svg>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
