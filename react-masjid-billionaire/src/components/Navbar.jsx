import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Donasi', to: '/donasi' },
  { label: 'Directory', to: '/directory' },
  { label: 'Zakat', to: '/zakat' },
  { label: 'About', to: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300 ${
        scrolled ? 'shadow-md h-16' : 'h-20'
      }`}
    >
      <div className="flex justify-between items-center h-full px-gutter max-w-max-width mx-auto">
        <NavLink to="/" className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-emerald-accent text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            mosque
          </span>
          <span className="font-headline-md text-headline-md font-bold text-primary">
            Masjid Muslim Billionaire
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <NavLink
              key={`${link.label}-${index}`}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `font-label-md text-label-md uppercase tracking-wider transition-colors ${
                  isActive && link.to !== '/'
                    ? 'text-emerald-accent font-bold border-b-2 border-emerald-accent pb-1'
                    : 'text-on-surface hover:text-emerald-accent'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <NavLink
            to="/join"
            className="hidden lg:block px-6 py-2 border border-secondary text-secondary font-label-md text-label-md uppercase tracking-wider rounded-lg hover:bg-secondary hover:text-white transition-all"
          >
            Join Community
          </NavLink>
          <NavLink
            to="/donasi"
            className="px-6 py-2 bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            Donasi Sekarang
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
