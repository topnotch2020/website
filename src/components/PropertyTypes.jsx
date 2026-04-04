const TYPES = [
  {
    emoji: '🏢',
    gradient: 'linear-gradient(135deg,#667eea,#764ba2)',
    title: 'Flat / Apartment',
    desc: '1RK to 4+BHK apartments in residential complexes across major cities',
  },
  {
    emoji: '🏡',
    gradient: 'linear-gradient(135deg,#f093fb,#f5576c)',
    title: 'Row House / Bungalow',
    desc: 'Independent homes with private entrance, garden, and personal space',
  },
  {
    emoji: '🏠',
    gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)',
    title: 'Studio Apartment',
    desc: 'Compact, efficient living spaces perfect for singles or young couples',
  },
  {
    emoji: '🏙️',
    gradient: 'linear-gradient(135deg,#43e97b,#38f9d7)',
    title: 'Penthouse / Duplex',
    desc: 'Premium luxury residences with panoramic views and premium finishes',
  },
]

export default function PropertyTypes() {
  return (
    <section className="section prop-types-section bg-surface">
      <div className="container">
        <div className="section-header reveal" data-anim="fade-up">
          <span className="section-badge">Listings</span>
          <h2>All Property Types, <span className="text-primary">One Platform</span></h2>
          <p>From studio apartments to luxury penthouses — Broker Bridge supports all residential property types for rent and sale.</p>
        </div>
        <div className="prop-types-grid">
          {TYPES.map((t, i) => (
            <div key={t.title} className="prop-type-card reveal" data-anim="fade-up" style={{ '--delay': `${i * 0.1}s` }}>
              <div className="pt-icon" style={{ background: t.gradient }}>{t.emoji}</div>
              <div className="pt-info">
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
              <div className="pt-tags"><span>Rent</span><span>Sale</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
