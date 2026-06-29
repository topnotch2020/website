import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchAppContent } from '../api/appContent.js'
import { buildSupportUrl, DEFAULT_APP_CONTENT } from '../constants/defaultAppContent.js'
import Logo from './Logo'

const scrollTo = (e, href) => {
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' })
}

export default function Footer() {
  const [supportChannels, setSupportChannels] = useState(
    DEFAULT_APP_CONTENT.helpSupport.channels.filter((c) => c.enabled)
  )

  useEffect(() => {
    let cancelled = false
    fetchAppContent().then((content) => {
      if (!cancelled) {
        setSupportChannels(content.helpSupport.channels.filter((c) => c.enabled))
      }
    })
    return () => { cancelled = true }
  }, [])

  const emailChannel = supportChannels.find((c) => c.type === 'email')
  const phoneChannel = supportChannels.find((c) => c.type === 'phone')

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="legal-logo-link" onClick={(e) => scrollTo(e, '#hero')}>
              <Logo white />
            </a>
            <p>India's dedicated real estate platform connecting verified brokers with property seekers across major cities.</p>
          </div>

          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              {[
                { href: '#features',     label: 'Features' },
                { href: '#how-it-works', label: 'How It Works' },
                { href: '#for-brokers',  label: 'For Brokers' },
                { href: '#download',     label: 'Download App' },
              ].map(({ href, label }) => (
                <li key={href}><a href={href} onClick={(e) => scrollTo(e, href)}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#faq" onClick={(e) => scrollTo(e, '#faq')}>FAQ</a></li>
              <li><Link to="/forgot-password">Forgot Password</Link></li>
              {emailChannel && (
                <li>
                  <a href={buildSupportUrl(emailChannel)}>
                    {emailChannel.title}
                  </a>
                </li>
              )}
              {phoneChannel && (
                <li>
                  <a href={buildSupportUrl(phoneChannel)}>
                    {phoneChannel.title}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/delete-account">Delete Account</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} BrokerLoop. All rights reserved. Built with ❤️ in India.</p>
          <p>BrokerLoop — Real Estate Simplified</p>
        </div>
      </div>
    </footer>
  )
}
