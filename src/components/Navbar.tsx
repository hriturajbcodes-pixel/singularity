import React, { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

interface NavbarProps { onOpenDemo: () => void }

const NAV_LINKS = [
  { label: 'Capabilities', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Benchmarks', href: '#metrics' },
  { label: 'Testimonials', href: '#testimonials' },
]

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, height: 'var(--nav-height)', backgroundColor: 'rgba(11, 10, 9, 0.82)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" aria-label="Singularity Home" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '0.04em' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <circle cx="14" cy="14" r="12" stroke="#f59e0b" strokeWidth="1.5" opacity="0.9" />
            <circle cx="14" cy="14" r="5" fill="#f59e0b" />
            <circle cx="14" cy="14" r="2" fill="#0b0a09" />
          </svg>
          SINGULARITY
        </a>
        <nav aria-label="Primary Navigation" className="desktop-nav" style={{ display: 'none', alignItems: 'center', gap: '32px' }}>
          {NAV_LINKS.map((item) => (
            <a key={item.href} href={item.href} style={{ fontSize: '0.9375rem', fontWeight: 500, color: 'var(--color-text-secondary)', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
            >{item.label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button type="button" onClick={onOpenDemo} className="btn btn-primary desktop-cta" style={{ display: 'none', padding: '10px 20px', fontSize: '0.875rem' }}>
            Book a Demo <ArrowUpRight size={16} />
          </button>
          <button type="button" className="mobile-menu-btn" aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            style={{ color: 'var(--color-text-primary)', padding: '8px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}
          >{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
      {mobileOpen && (
        <div style={{ backgroundColor: 'var(--color-bg-elevated)', borderBottom: '1px solid var(--color-border)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {NAV_LINKS.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-text-primary)', padding: '8px 0' }}>{item.label}</a>
          ))}
          <button type="button" onClick={() => { setMobileOpen(false); onOpenDemo() }} className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>Book a Demo</button>
        </div>
      )}
      <style>{`@media (min-width: 768px) { .desktop-nav { display: flex !important; } .desktop-cta { display: inline-flex !important; } .mobile-menu-btn { display: none !important; } }`}</style>
    </header>
  )
}
