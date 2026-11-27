import React from 'react'
import { Quote } from 'lucide-react'
import { useReveal } from './useReveal'

const TESTIMONIALS = [
  { quote: 'Adopting Singularity cut our multimodal training iteration cycle from two weeks to three days while keeping every run reproducible.', author: 'Jordan Vance (Placeholder)', role: 'Principal Infrastructure Architect · Aether Dynamics' },
  { quote: 'It abstracts multi-node scheduling cleanly enough that computational researchers rarely get blocked by driver or interconnect issues.', author: 'Mei-Ling Zhou (Placeholder)', role: 'Head of Computational Biology · Veloce Bio' },
  { quote: 'Even when peak inference traffic doubled, Singularity kept our P99 latency within budget without manual over-provisioning.', author: 'Devon Brooks (Placeholder)', role: 'VP of Engineering · Northstar Compute' },
]

export const Testimonials: React.FC = () => {
  const revealRef = useReveal()
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-header reveal" ref={revealRef}>
          <p className="section-eyebrow">Testimonials</p>
          <h2 className="section-title">Feedback from engineering and research leaders</h2>
          <p className="section-subtitle">Placeholder sample quotes for layout verification—replace with approved customer stories before launch.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {TESTIMONIALS.map((item) => (
            <blockquote key={item.author} className="reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '32px', boxShadow: 'var(--shadow-card)' }}>
              <div>
                <Quote size={24} color="#f59e0b" style={{ opacity: 0.75, marginBottom: '16px' }} />
                <p style={{ fontSize: '1rem', color: 'var(--color-text-primary)', lineHeight: 1.7, marginBottom: '24px' }}>“{item.quote}”</p>
              </div>
              <footer style={{ borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-text-primary)' }}>{item.author}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>{item.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
