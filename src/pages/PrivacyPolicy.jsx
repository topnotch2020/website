import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { fetchAppContent } from '../api/appContent.js'
import { DEFAULT_APP_CONTENT } from '../constants/defaultAppContent.js'

export default function PrivacyPolicy() {
  const [sections, setSections] = useState(DEFAULT_APP_CONTENT.privacyPolicy.sections)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    document.title = 'Privacy Policy — BrokerLoop'

    fetchAppContent(true).then((content) => {
      if (!cancelled) {
        setSections(content.privacyPolicy.sections)
        setLoading(false)
      }
    })

    return () => {
      cancelled = true
      document.title = 'BrokerLoop — Connect Brokers. Close Deals Faster.'
    }
  }, [])

  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="container legal-header-inner">
          <Link to="/" className="legal-logo-link">
            <Logo />
          </Link>
          <Link to="/" className="btn btn-ghost legal-back">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="legal-main">
        <div className="container legal-container">
          <div className="legal-hero">
            <span className="section-badge">Legal</span>
            <h1>Privacy Policy</h1>
            <p>
              This policy explains how BrokerLoop collects, uses, and protects your information.
              Content is managed centrally and kept in sync with our mobile app.
            </p>
          </div>

          {loading ? (
            <div className="legal-loading" role="status" aria-live="polite">
              Loading privacy policy…
            </div>
          ) : (
            <div className="legal-sections">
              {sections.map((section) => (
                <article key={section.title} className="legal-section">
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </article>
              ))}
            </div>
          )}

          <p className="legal-updated">
            Questions? Visit our <Link to="/#faq">FAQ</Link> or contact support from the app.
          </p>
        </div>
      </main>

      <footer className="legal-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} BrokerLoop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
