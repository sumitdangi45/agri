import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Demo from './components/Demo'
import Weather from './components/Weather'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Particles from './components/Particles'
import { useIntersectionObserver } from './hooks/useIntersectionObserver'

export default function App() {
  useIntersectionObserver()

  return (
    <div className="h-full">
      <div className="bg-mesh"></div>
      <Particles />
      
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto' }}>
        <Navbar />
        <Hero />
        <Features />
        <Demo />
        <Weather />
        <Gallery />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}
