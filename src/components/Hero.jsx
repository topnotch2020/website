export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="container hero-inner">
        {/* Left content */}
        <div className="hero-content reveal" data-anim="fade-up">
          <div className="hero-badge">
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            India's Premier Real Estate Broker Platform
          </div>

          <h1 className="hero-title">
            Connect Brokers.<br />
            <span className="gradient-text">Close Deals Faster.</span>
          </h1>

          <p className="hero-subtitle">
            Broker Bridge is India's dedicated marketplace for real estate brokers and property seekers.
            List verified properties, discover premium listings, and transact with confidence.
          </p>

          <div className="hero-actions">
            <a href="#download" className="btn btn-accent btn-lg" onClick={(e) => scrollTo(e, '#download')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download App
            </a>
            <a href="#how-it-works" className="btn btn-ghost-white btn-lg" onClick={(e) => scrollTo(e, '#how-it-works')}>
              How It Works
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>

          <div className="hero-trust">
            {['Free to download', 'Verified brokers', 'Secure platform'].map((t) => (
              <div className="trust-item" key={t}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14"><polyline points="20 6 9 17 4 12" /></svg>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Phone Mockup */}
        <div className="hero-visual reveal" data-anim="fade-left">
          <div className="phone-wrap">
            <div className="phone-body">
              <div className="phone-island" />
              <div className="phone-screen">
                <div className="app-statusbar" />
                <div className="app-topbar">
                  <div className="app-greeting">
                    <div className="app-greeting-sub">Good Morning 👋</div>
                    <div className="app-greeting-name">Rajesh Kumar</div>
                  </div>
                  <div className="app-avatar">RK</div>
                </div>
                <div className="app-search">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" width="12" height="12"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                  Search city, locality…
                </div>
                <div className="app-section-label">Featured Listings</div>
                <div className="app-cards">
                  <div className="app-prop-card">
                    <div className="app-prop-img" style={{ background: 'linear-gradient(135deg,#667eea,#764ba2)' }}>
                      <span className="app-prop-tag rent">RENT</span>
                    </div>
                    <div className="app-prop-body">
                      <div className="app-prop-title">2 BHK Flat</div>
                      <div className="app-prop-price">₹25,000/mo</div>
                      <div className="app-prop-loc">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="9" height="9"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        Bandra West, Mumbai
                      </div>
                    </div>
                  </div>
                  <div className="app-prop-card">
                    <div className="app-prop-img" style={{ background: 'linear-gradient(135deg,#f093fb,#f5576c)' }}>
                      <span className="app-prop-tag sale">SALE</span>
                    </div>
                    <div className="app-prop-body">
                      <div className="app-prop-title">3 BHK Row House</div>
                      <div className="app-prop-price">₹85 Lakh</div>
                      <div className="app-prop-loc">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="9" height="9"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        Koregaon Park, Pune
                      </div>
                    </div>
                  </div>
                </div>
                <div className="app-tabbar">
                  <div className="app-tab active"><svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M3 12L12 3 21 12M5 10v10h4V14h6v6h4V10" /></svg></div>
                  <div className="app-tab"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" /></svg></div>
                  <div className="app-tab"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></div>
                  <div className="app-tab"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" /></svg></div>
                  <div className="app-tab app-tab-post"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg></div>
                </div>
              </div>
            </div>
            <div className="float-card float-top">
              <div className="float-icon">🔔</div>
              <div>
                <div className="float-title">New Inquiry!</div>
                <div className="float-sub">Someone is interested in your 3BHK</div>
              </div>
            </div>
            <div className="float-card float-bottom">
              <div className="float-icon">🏠</div>
              <div>
                <div className="float-title">2,400+ Listings</div>
                <div className="float-sub">Across 20+ cities in India</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 35C360 70 1080 0 1440 35V70H0V35Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
