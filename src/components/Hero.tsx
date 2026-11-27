import React from 'react'
import { ArrowRight, Sparkles, Terminal } from 'lucide-react'

interface HeroProps { onOpenDemo: () => void }

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 'clamp(72px, 12vw, 136px)', paddingBottom: 'clamp(64px, 10vw, 112px)' }}>
      <div aria-hidden="true" className="warm-orb" style={{ position: 'absolute', top: '-18%', left: '50%', transform: 'translateX(-50%)', width: 'min(920px, 130vw)', height: '560px', background: 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.24) 0%, rgba(234, 88, 12, 0.12) 42%, transparent 72%)', filter: 'blur(48px)', pointerEvents: 'none', zIndex: 0 }} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(to right, rgba(250, 246, 241, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(250, 246, 241, 0.03) 1px, transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse at center, black 35%, transparent 78%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 35%, transparent 78%)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '880px' }}>
        <div className="section-eyebrow"><Sparkles size={14} /><span>Singularity Engine 2.4 Released</span></div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.375rem, 6vw, 4.25rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)' }}>
          Deterministic Compute Orchestration for
          <span style={{ display: 'block', background: 'linear-gradient(90deg, #fde68a 0%, #f59e0b 50%, #f97316 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Frontier Research & Enterprise AI</span>
        </h1>
        <p style={{ fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)', color: 'var(--color-text-secondary)', maxWidth: '640px', margin: '0 auto var(--space-5)', lineHeight: 1.65 }}>
          From early model experimentation to low-latency production inference, Singularity unifies heterogeneous cluster scheduling, reproducible pipelines, and live telemetry in one control plane.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: 'var(--space-8)' }}>
          <button type="button" onClick={onOpenDemo} className="btn btn-primary btn-lg">Book an Architecture Demo <ArrowRight size={18} /></button>
          <a href="#workflow" className="btn btn-secondary btn-lg">How It Works</a>
        </div>
        <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '24px', textAlign: 'left', boxShadow: 'var(--shadow-card), var(--shadow-glow)', backdropFilter: 'blur(12px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', marginBottom: '16px', borderBottom: '1px solid var(--color-border)', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Terminal size={15} color="#f59e0b" /><span>singularity-cli — cluster-prod-01</span></div>
            <span style={{ padding: '2px 10px', borderRadius: 'var(--radius-pill)', background: 'rgba(245, 158, 11, 0.14)', color: '#fbbf24', fontWeight: 500 }}>Healthy · Nodes Ready</span>
          </div>
          <pre style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--color-text-secondary)', overflowX: 'auto', margin: 0 }}>
            <code>
              <span style={{ color: '#f59e0b' }}>$</span> singularity deploy --pipeline inference-core-v2 --deterministic{'\n'}
              <span style={{ color: '#7d746b' }}>[01/03]</span> Validating topology and tensor shard plan... <span style={{ color: '#fbbf24' }}>Done (12ms)</span>{'\n'}
              <span style={{ color: '#7d746b' }}>[02/03]</span> Mounting zero-copy feature cache pool... <span style={{ color: '#fbbf24' }}>98.4% warm hit</span>{'\n'}
              <span style={{ color: '#7d746b' }}>[03/03]</span> Endpoint active at <span style={{ color: '#faf6f1' }}>https://api.singularity.internal/v2/infer</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
