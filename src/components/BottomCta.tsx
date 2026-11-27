import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useReveal } from './useReveal'

interface BottomCtaProps { onOpenDemo: () => void }

export const BottomCta: React.FC<BottomCtaProps> = ({ onOpenDemo }) => {
  const revealRef = useReveal()
  return (
    <section className="section">
      <div className="container">
        <div ref={revealRef} className="reveal" style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-strong)', background: 'linear-gradient(135deg, rgba(38, 28, 18, 0.92) 0%, rgba(20, 18, 16, 0.96) 100%)', padding: 'clamp(40px, 7vw, 72px) 32px', textAlign: 'center', boxShadow: 'var(--shadow-glow)' }}>
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.25), transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '620px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.875rem, 4vw, 2.625rem)', fontWeight: 700, lineHeight: 1.18, marginBottom: '16px', color: 'var(--color-text-primary)' }}>Ready to accelerate your next-generation compute systems?</h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-secondary)', marginBottom: '32px' }}>Schedule a walkthrough with a Singularity solutions architect to scope a deployment tailored to your cluster footprint.</p>
            <button type="button" onClick={onOpenDemo} className="btn btn-primary btn-lg">Book a Demo Now <ArrowRight size={18} /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
