const TESTIMONIALS = [
  {
    initials: 'RK',
    text: '"BrokerLoop completely transformed how I manage my listings. I get notified instantly when someone shows interest — it\'s like having a 24/7 assistant."',
    name: 'Rajesh Kumar',
    role: 'Senior Broker · Mumbai',
  },
  {
    initials: 'PS',
    text: '"Found my dream apartment in 3 days using BrokerLoop. The verified listings gave me confidence and the search filters saved so much time."',
    name: 'Priya Sharma',
    role: 'Property Seeker · Pune',
  },
  {
    initials: 'AM',
    text: '"The quota system is fair and transparent. I always know exactly how many listings I have left, and the renewal process is absolutely seamless."',
    name: 'Anil Mehta',
    role: 'Independent Broker · Bangalore',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials-section bg-surface">
      <div className="container">
        <div className="section-header reveal" data-anim="fade-up">
          <span className="section-badge">Testimonials</span>
          <h2>Trusted by <span className="text-primary">Real Brokers</span></h2>
          <p>Hear from the brokers and property seekers who use BrokerLoop every day across India.</p>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="testimonial-card reveal" data-anim="fade-up" style={{ '--delay': `${i * 0.15}s` }}>
              <div className="t-stars">★★★★★</div>
              <p className="t-text">{t.text}</p>
              <div className="t-author">
                <div className="t-avatar">{t.initials}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
