import React from 'react'
import { useReveal } from './useReveal'

const STEPS = [
  { step: '01', title: 'Connect Compute & Storage', description: 'Attach on-premise or cloud GPU nodes via a lightweight agent without restructuring existing buckets or repositories.' },
  { step: '02', title: 'Declare Experiment Graphs', description: 'Annotate preprocessing, fine-tuning, and evaluation stages with Python decorators to build dependency DAGs automatically.' },
  { step: '03', title: 'Execute & Validate at Scale', description: 'Schedule jobs by priority and memory profile with automatic checkpointing and real-time metric drift detection.' },
  { step: '04', title: 'Promote to Production', description: 'Publish validated weights to low-latency endpoints with progressive traffic rollouts and instant rollback.' },
]

export const Workflow: React.FC = () => {
  const revealRef = useReveal()
  return (
    <section id="workflow" className="section">
      <div className="container">
        <div className="section-header reveal" ref={revealRef}>
          <p className="section-eyebrow">Workflow</p>
          <h2 className="section-title">A four-step loop from hypothesis to production</h2>
          <p className="section-subtitle">Standardized execution stages that bridge early research prototypes and reliable live services.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {STEPS.map((item) => (
            <div key={item.step} className="reveal" style={{ position: 'relative', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '28px' }}>
              <span style={{ display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-accent)', background: 'rgba(245, 158, 11, 0.12)', padding: '4px 12px', borderRadius: 'var(--radius-pill)', marginBottom: '20px' }}>STEP {item.step}</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1875rem', fontWeight: 600, marginBottom: '12px', color: 'var(--color-text-primary)' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
