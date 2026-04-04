import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#features',     label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#for-brokers',  label: 'For Brokers' },
  { href: '#faq',          label: 'FAQ' },
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) {
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' })
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const onOutside = (e) => {
      const nav = document.getElementById('navbar')
      if (nav && !nav.contains(e.target)) setMenuOpen(false)
    }
    document.addEventListener('click', onOutside)
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('click', onOutside)
    }
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    scrollTo(href)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">
        <a href="#" className="logo" onClick={(e) => handleLink(e, '#hero')}>
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12L12 3L21 12" />
            <path d="M5 10V20H9V14H15V20H19V10" />
          </svg>
          Broker<span>Bridge</span>
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="nav-link" onClick={(e) => handleLink(e, href)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a href="#download" className="btn btn-primary nav-cta" onClick={(e) => handleLink(e, '#download')}>
            Download App
          </a>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
