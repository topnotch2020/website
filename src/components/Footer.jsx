const scrollTo = (e, href) => {
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo logo-white" onClick={(e) => scrollTo(e, '#hero')}>
              <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12L12 3L21 12" /><path d="M5 10V20H9V14H15V20H19V10" />
              </svg>
              Broker<span>Bridge</span>
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
              <li><a href="#">Help &amp; Support</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 TopNotch. All rights reserved. Built with ❤️ in India.</p>
          <p>Broker Bridge — Real Estate Simplified</p>
        </div>
      </div>
    </footer>
  )
}
