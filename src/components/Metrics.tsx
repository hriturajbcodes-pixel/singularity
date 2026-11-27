import React from 'react'
import { useReveal } from './useReveal'

const METRICS = [
  { value: '99.98%', label: 'Inference Cluster Uptime SLA', detail: 'Multi-zone automated failover coverage' },
  { value: '< 14ms', label: 'P99 Scheduling & Routing Overhead', detail: 'Zero-copy control plane path' },
  { value: '3.8x', label: 'Higher Accelerator Utilization', detail: 'Compared to static container pools' },
  { value: '240+', label: 'Concurrent Daily Research Pipelines', detail: 'Automated lineage and diff tracking' },
]

export const Metrics: React.FC = () => {
  const revealRef = useReveal()
  return (
    <section id="metrics" className="section" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.08) 0%, transparent 70%)' }}>
      <div className="container">
        <div ref={revealRef} className="reveal" style={{ background: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'clamp(32px, 5vw, 56px)', boxShadow: 'var(--shadow-card)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '32px' }}>
            {METRICS.map((metric) => (
              <div key={metric.label} style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem, 4vw, 3rem)', fontWeight: 700, lineHeight: 1.1, background: 'linear-gradient(135deg, #faf6f1 20%, #f59e0b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '8px' }}>{metric.value}</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '4px' }}>{metric.label}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{metric.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
