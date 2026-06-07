import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function AuthPageLayout({ title, subtitle, children, footer }) {
  return (
    <div className="auth-page">
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

      <main className="auth-main">
        <div className="container auth-container">
          <div className="auth-card">
            <div className="auth-card-header">
              <span className="section-badge">Account</span>
              <h1>{title}</h1>
              {subtitle ? <p className="auth-subtitle">{subtitle}</p> : null}
            </div>
            {children}
          </div>
          {footer}
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
