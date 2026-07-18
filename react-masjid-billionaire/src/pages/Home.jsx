import { useEffect } from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Stats from '../components/Stats'
import CallToAction from '../components/CallToAction'

export default function Home() {
  useEffect(() => {
    const observerOptions = { threshold: 0.5 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in', 'fade-in', 'duration-1000')
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('section')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <CallToAction />
    </main>
  )
}
