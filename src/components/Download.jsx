import { useState } from 'react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Download() {
  const [email, setEmail]     = useState('')
  const [msg, setMsg]         = useState({ text: '', type: '' })
  const [loading, setLoading] = useState(false)

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg({ text: '', type: '' });

    if (!email.trim()) {
      setMsg({ text: 'Please enter your email address.', type: 'error' });
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setMsg({ text: 'Please enter a valid email address.', type: 'error' });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/marketing/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim(), source: 'website' }),
      });

      const result = await response.json();
      if (!response.ok) {
        setMsg({ text: result?.message || 'Unable to submit your email. Please try again later.', type: 'error' });
      } else {
        setMsg({ text: result?.message || "You're on the list! We'll notify you when we launch in your city.", type: 'success' });
        setEmail('');
      }
    } catch (error) {
      setMsg({ text: 'Network error. Please try again later.', type: 'error' });
      console.error('Waitlist submit failed:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section download-section" id="download">
      <div className="container">
        <div className="download-inner reveal" data-anim="fade-up">
          <span className="section-badge section-badge-blue">Get the App</span>
          <h2>Download Broker Bridge<br /><span className="text-accent">Today — It's Free</span></h2>
          <p>Available on Android and iOS. Join thousands of brokers and property seekers already using Broker Bridge across India.</p>

          <div className="store-buttons">
            <a href="#" className="store-btn">
              <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
                <path d="M18.2 9.6L26 4.8c.5-.3 1.1-.1 1.4.4l2.3 4c.3.5.1 1.1-.4 1.4l-7.8 4.5L18.2 9.6zM5 4.8l7.8 4.8-3.3 5.5L1.7 10.6c-.5-.3-.7-.9-.4-1.4l2.3-4C3.9 4.7 4.5 4.5 5 4.8zm-3.3 8.4l7.8 4.5v9.1c0 .6-.5 1.1-1.1 1.1H5.1c-.6 0-1.1-.5-1.1-1.1V14.6l-2.3-1.4zm25.3 13.1c0 .6-.5 1.1-1.1 1.1h-3.4c-.6 0-1.1-.5-1.1-1.1v-9.1l7.8-4.5-2.2 13.6z"/>
              </svg>
              <div className="store-btn-text">
                <span>Get it on</span>
                <strong>Google Play</strong>
              </div>
            </a>
            <a href="#" className="store-btn">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="store-btn-text">
                <span>Download on the</span>
                <strong>App Store</strong>
              </div>
            </a>
          </div>

          <div className="waitlist-wrap">
            <p className="waitlist-label">Get notified when we launch in your city:</p>
            <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                className="waitlist-input"
                placeholder="Enter your email address"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Submitting…' : 'Notify Me'}
              </button>
            </form>
            {msg.text && (
              <div className={`form-msg ${msg.type}`} role="alert" aria-live="polite">
                {msg.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
