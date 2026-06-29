import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

const SUPPORT_EMAIL = 'brokerloopapp@gmail.com'

const IN_APP_STEPS = [
  'Open the BrokerLoop app and sign in to your account.',
  'Go to the Profile tab.',
  'Tap Settings, then select "Delete Account".',
  'Review the warning, then confirm by following the on-screen confirmation steps.',
  'Your account and associated data are permanently deleted once confirmed.',
]

const DELETED_DATA = [
  'Profile information (name, email address, phone number)',
  'All your property listings',
  'Saved favourites and search preferences',
  'Notifications and in-app activity history',
  'Registered devices and push notification tokens',
]

const RETAINED_DATA = [
  'Minimal transaction or audit records that we are legally required to keep are retained for up to 90 days, after which they are permanently deleted.',
  'Anonymised, aggregated analytics that cannot identify you may be retained for product improvement.',
]

export default function DeleteAccount() {
  useEffect(() => {
    document.title = 'Delete Account — BrokerLoop'
    return () => {
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
            <span className="section-badge">Account</span>
            <h1>Delete Your BrokerLoop Account</h1>
            <p>
              This page explains how to request deletion of your BrokerLoop account and the
              data associated with it, and what happens to your data afterwards.
            </p>
          </div>

          <div className="legal-sections">
            <article className="legal-section">
              <h2>How to delete your account in the app</h2>
              <ol className="legal-list">
                {IN_APP_STEPS.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>

            <article className="legal-section">
              <h2>Request deletion without the app</h2>
              <p>
                If you can no longer access the BrokerLoop app, you can request account deletion
                by emailing us from your registered email address at{' '}
                <a href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('BrokerLoop Account Deletion Request')}`}>
                  {SUPPORT_EMAIL}
                </a>
                . Please include the name and phone number on your account so we can verify your
                identity. We will process verified requests within 30 days.
              </p>
            </article>

            <article className="legal-section">
              <h2>Data that is deleted</h2>
              <p>When your account is deleted, we permanently remove:</p>
              <ul className="legal-list">
                {DELETED_DATA.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="legal-section">
              <h2>Data that may be retained</h2>
              <ul className="legal-list">
                {RETAINED_DATA.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="legal-section">
              <h2>Important</h2>
              <p>
                Account deletion is permanent and cannot be undone. Once deleted, your listings
                and data cannot be recovered, and you will need to create a new account to use
                BrokerLoop again.
              </p>
            </article>
          </div>

          <p className="legal-updated">
            Questions? Visit our <Link to="/#faq">FAQ</Link> or contact{' '}
            <a href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('BrokerLoop Support')}`}>
              {SUPPORT_EMAIL}
            </a>
            .
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
