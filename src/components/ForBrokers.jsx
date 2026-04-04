const BENEFITS = [
  {
    strong: 'Quota-managed listings',
    text: '— Fair access for every broker with transparent usage tracking',
  },
  {
    strong: 'Admin-verified badges',
    text: '— Drive trust and credibility with seekers through verified status',
  },
  {
    strong: 'Smart expiry & renewal',
    text: '— Rental listings auto-expire at 30 days with easy one-tap renewal',
  },
  {
    strong: 'Instant push notifications',
    text: '— Never miss a lead with real-time seeker activity alerts',
  },
  {
    strong: 'Cloud media library',
    text: '— Upload and showcase unlimited property photos securely',
  },
]

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function ForBrokers() {
  return (
    <section className="section for-brokers-section" id="for-brokers">
      <div className="container">
        <div className="for-brokers-inner">
          {/* Content left */}
          <div className="fb-content reveal" data-anim="fade-right">
            <span className="section-badge section-badge-light">For Brokers</span>
            <h2>Grow Your Real Estate<br /><span className="text-accent-light">Business Digitally</span></h2>
            <p>Broker Bridge gives you a powerful dedicated platform to manage your listings, reach more seekers, and close deals faster than ever before.</p>
            <ul className="broker-benefits">
              {BENEFITS.map((b) => (
                <li key={b.strong}>
                  <div className="bb-icon"><CheckIcon /></div>
                  <div><strong>{b.strong}</strong>{b.text}</div>
                </li>
              ))}
            </ul>
            <a href="#download" className="btn btn-accent btn-lg" style={{ marginTop: '2rem' }}
              onClick={(e) => {
                e.preventDefault()
                const el = document.querySelector('#download')
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' })
              }}>
              Start Listing Today
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><polyline points="9 18 15 12 9 6" /></svg>
            </a>
          </div>

          {/* Card right */}
          <div className="fb-visual reveal" data-anim="fade-left">
            <div className="broker-card">
              <div className="bc-header">
                <div className="bc-avatar">SK</div>
                <div className="bc-info">
                  <div className="bc-name">Suresh Kumar</div>
                  <div className="bc-role">Verified Broker · Mumbai</div>
                </div>
                <div className="bc-verified">✓ Verified</div>
              </div>
              <div className="bc-divider" />
              <div className="bc-stats">
                <div className="bc-stat"><span className="bc-stat-num">12</span><span className="bc-stat-label">Active Listings</span></div>
                <div className="bc-stat"><span className="bc-stat-num">3/15</span><span className="bc-stat-label">Quota Used</span></div>
                <div className="bc-stat"><span className="bc-stat-num">47</span><span className="bc-stat-label">Inquiries</span></div>
              </div>
              <div className="bc-divider" />
              <div className="bc-listings">
                {[
                  { dot: 'dot-green', name: '3 BHK Flat · Andheri West', cls: 'status-verified', label: '✓ Verified' },
                  { dot: 'dot-green', name: '2 BHK Studio · Bandra',    cls: 'status-verified', label: '✓ Verified' },
                  { dot: 'dot-amber', name: '4 BHK Penthouse · Worli',  cls: 'status-pending',  label: '⏳ Under Review' },
                ].map((item) => (
                  <div className="bc-listing-item" key={item.name}>
                    <span className={`bc-dot ${item.dot}`} />
                    <span className="bc-listing-name">{item.name}</span>
                    <span className={`bc-status ${item.cls}`}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
