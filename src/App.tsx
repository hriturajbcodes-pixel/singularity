import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { Features } from './components/Features'
import { Metrics } from './components/Metrics'
import { Workflow } from './components/Workflow'
import { Testimonials } from './components/Testimonials'
import { BottomCta } from './components/BottomCta'
import { Footer } from './components/Footer'
import { DemoModal } from './components/DemoModal'

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false)

  return (
    <>
      <Navbar onOpenDemo={() => setDemoModalOpen(true)} />
      <main>
        <Hero onOpenDemo={() => setDemoModalOpen(true)} />
        <TrustBar />
        <Features />
        <Metrics />
        <Workflow />
        <Testimonials />
        <BottomCta onOpenDemo={() => setDemoModalOpen(true)} />
      </main>
      <Footer />
      <DemoModal open={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </>
  )
}
