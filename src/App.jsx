import { useRef } from 'react'
import { useScrollReveal } from './hooks/useScrollReveal.js'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import PropertyTypes from './components/PropertyTypes'
import ForBrokers from './components/ForBrokers'
import Download from './components/Download'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  const rootRef = useRef(null)
  useScrollReveal(rootRef, [])

  return (
    <div ref={rootRef}>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <PropertyTypes />
        <ForBrokers />
        <Download />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
