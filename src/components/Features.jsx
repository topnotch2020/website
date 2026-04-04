const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/>
      </svg>
    ),
    color: 'fi-blue',
    title: 'Smart Property Listings',
    desc: 'Create detailed listings for rent or sale with BHK type, furnishing, floor info, amenities, pricing, and rich media.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
    color: 'fi-amber',
    title: 'Instant Push Notifications',
    desc: 'Get real-time alerts when seekers contact you, view your listing, or when your property is verified by our admin team.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    color: 'fi-green',
    title: 'Admin-Verified Listings',
    desc: 'Every listing is reviewed before going live, ensuring quality, accuracy, and trust for all platform users.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
    ),
    color: 'fi-purple',
    title: 'Rich Media Uploads',
    desc: 'Upload high-quality photos — interiors, exteriors, and floor plans — stored securely in the cloud via Cloudinary.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    color: 'fi-blue',
    title: 'Advanced Search & Filters',
    desc: 'Find properties by city, locality, BHK type, furnishing, listing type, and price range — quickly and precisely.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    color: 'fi-amber',
    title: 'Fair Listing Quota',
    desc: 'Transparent quota-based listing management gives every broker equal access with clear usage tracking and limits.',
  },
]

export default function Features() {
  return (
    <section className="section features-section bg-surface" id="features">
      <div className="container">
        <div className="section-header reveal" data-anim="fade-up">
          <span className="section-badge">Features</span>
          <h2>Everything a <span className="text-primary">Real Estate</span> Broker Needs</h2>
          <p>Broker Bridge equips brokers and seekers with all the tools to list, discover, and connect — in one powerful mobile app.</p>
        </div>
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="feature-card reveal" data-anim="fade-up" style={{ '--delay': `${(i % 3) * 0.1}s` }}>
              <div className={`feature-icon ${f.color}`}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
