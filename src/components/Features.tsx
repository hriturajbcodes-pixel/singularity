import React from 'react'
import { Cpu, GitBranch, ShieldCheck, Activity, Layers, Zap } from 'lucide-react'
import { useReveal } from './useReveal'

const FEATURES = [
  { icon: Cpu, title: 'Heterogeneous Cluster Scheduling', description: 'Automatically accounts for interconnect topology and memory bandwidth to balance workloads across accelerator generations without idle fragmentation.' },
  { icon: GitBranch, title: 'Bit-Level Reproducible Runs', description: 'Locks seeds, environment snapshots, and dataset shard hashes on every execution so experiments remain auditable months later.' },
  { icon: Zap, title: 'Low-Latency Inference Routing', description: 'Combines dynamic batching and prefix caching to keep tail latency predictable during traffic spikes.' },
  { icon: Activity, title: 'End-to-End Telemetry', description: 'Inspect kernel execution profiles alongside token throughput with live flame graphs and automated anomaly alerts.' },
  { icon: ShieldCheck, title: 'Zero-Trust Isolation', description: 'Enforces tenant-level hardware isolation, encryption in transit and at rest, and granular access policies for sensitive IP.' },
  { icon: Layers, title: 'Declarative Pipeline Graphs', description: 'Define multi-stage training, evaluation, and deployment workflows in clean Python or YAML without fragile glue scripts.' },
]

export const Features: React.FC = () => {
  const revealRef = useReveal()
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-header reveal" ref={revealRef}>
          <p className="section-eyebrow">Core Capabilities</p>
          <h2 className="section-title">Laboratory-grade infrastructure for high-density teams</h2>
          <p className="section-subtitle">Eliminate cluster maintenance overhead and focus engineering time on model quality and product velocity.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {FEATURES.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="reveal" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '32px', boxShadow: 'var(--shadow-card)', transition: 'border-color 0.25s ease, transform 0.25s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-border-strong)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent-hover)', marginBottom: '20px' }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px', color: 'var(--color-text-primary)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
