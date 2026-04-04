import { useState, Fragment } from 'react'

const BROKER_STEPS = [
  {
    num: '01',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>,
    title: 'Register as a Broker',
    desc: 'Sign up with your email, complete your profile with contact details, and get instant access to the broker dashboard.',
  },
  {
    num: '02',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    title: 'Create Your Listing',
    desc: 'Add property details, BHK type, price, amenities, and upload photos. Submit for admin verification with one tap.',
  },
  {
    num: '03',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    title: 'Connect with Seekers',
    desc: 'Once verified, your listing goes live. Get push notifications when seekers show interest and close deals faster.',
  },
]

const SEEKER_STEPS = [
  {
    num: '01',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    title: 'Browse Verified Properties',
    desc: 'Explore admin-verified properties in your city. Filter by BHK type, furnishing, price range, and listing type.',
  },
  {
    num: '02',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    title: 'Save to Favorites',
    desc: 'Bookmark properties you love and revisit your favorites list anytime. Never lose track of a promising property.',
  },
  {
    num: '03',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    title: 'Contact the Broker',
    desc: 'Every verified listing shows broker contact info. Reach out directly to schedule a visit or start negotiations.',
  },
]

function Steps({ steps }) {
  return (
    <div className="hiw-steps">
      {steps.map((step, i) => (
        <Fragment key={step.num}>
          <div className="hiw-step" style={{ '--delay': `${i * 0.15}s` }}>
            <div className="step-num">{step.num}</div>
            <div className="step-icon-wrap">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
          {i < steps.length - 1 && <div className="hiw-connector" />}
        </Fragment>
      ))}
    </div>
  )
}

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('brokers')

  return (
    <section className="section hiw-section" id="how-it-works">
      <div className="container">
        <div className="section-header reveal" data-anim="fade-up">
          <span className="section-badge">Process</span>
          <h2>How Does It <span className="text-primary">Work?</span></h2>
          <p>Whether you're listing a property or searching for your next home, the process is simple and seamless.</p>
        </div>

        <div className="hiw-tabs reveal" data-anim="fade-up">
          <button className={`tab-btn${activeTab === 'brokers' ? ' active' : ''}`} onClick={() => setActiveTab('brokers')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            For Brokers
          </button>
          <button className={`tab-btn${activeTab === 'seekers' ? ' active' : ''}`} onClick={() => setActiveTab('seekers')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            For Property Seekers
          </button>
        </div>

        <div key={activeTab} className="hiw-panel active">
          <Steps steps={activeTab === 'brokers' ? BROKER_STEPS : SEEKER_STEPS} />
        </div>
      </div>
    </section>
  )
}
