import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import AuthPageLayout from '../components/AuthPageLayout'
import { setPassword } from '../api/auth.js'
import {
  buildAndroidIntentLink,
  buildAppDeepLink,
  PASSWORD_REGEX,
} from '../constants/appLinks.js'

export default function ResetPassword() {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')?.trim() || ''

  const [activeTab, setActiveTab] = useState('form')
  const [password, setPasswordValue] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const appDeepLink = useMemo(
    () => (token ? buildAppDeepLink('set-password', { token }) : ''),
    [token]
  )
  const androidIntentLink = useMemo(
    () => (token ? buildAndroidIntentLink('set-password', { token }) : ''),
    [token]
  )

  useEffect(() => {
    document.title = 'Reset Password — BrokerLoop'
    return () => {
      document.title = 'BrokerLoop — Connect Brokers. Close Deals Faster.'
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!token) {
      setError('This password reset link is missing a token.')
      return
    }
    if (!PASSWORD_REGEX.test(password)) {
      setError('Password must be 8+ characters with uppercase, lowercase, and a number.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    try {
      setIsSubmitting(true)
      await setPassword(token, password)
      setSuccess(true)
    } catch (err) {
      setError(err.message || 'Unable to set your password. The link may have expired.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!token) {
    return (
      <AuthPageLayout
        title="Link expired"
        subtitle="This password reset link is invalid or missing."
        footer={
          <p className="auth-footer-note">
            Need a new link? <Link to="/forgot-password">Request password reset</Link>
          </p>
        }
      >
        <div className="auth-alert auth-alert-error" role="alert">
          Invalid or expired password reset link. Please request a new one.
        </div>
        <Link to="/forgot-password" className="btn btn-primary auth-submit">
          Request new link
        </Link>
      </AuthPageLayout>
    )
  }

  if (success) {
    return (
      <AuthPageLayout
        title="Password updated"
        subtitle="Your BrokerLoop password has been set successfully."
      >
        <div className="auth-alert auth-alert-success" role="status">
          You can now sign in with your email and new password in the app.
        </div>
        <div className="auth-actions-stack">
          <a href={appDeepLink} className="btn btn-primary auth-submit">
            Open BrokerLoop App
          </a>
          <a href={androidIntentLink} className="btn btn-secondary auth-submit">
            Open in App (Android)
          </a>
          <Link to="/#download" className="btn btn-ghost auth-submit">
            Download the app
          </Link>
        </div>
      </AuthPageLayout>
    )
  }

  return (
    <AuthPageLayout
      title="Reset password"
      subtitle="Set a new password for your BrokerLoop account."
      footer={
        <p className="auth-footer-note">
          Didn&apos;t request this? <Link to="/">Return home</Link> or ignore this email.
        </p>
      }
    >
      <div className="auth-tabs" role="tablist" aria-label="Password reset options">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'form'}
          className={`auth-tab${activeTab === 'form' ? ' active' : ''}`}
          onClick={() => setActiveTab('form')}
        >
          Web form
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'app'}
          className={`auth-tab${activeTab === 'app' ? ' active' : ''}`}
          onClick={() => setActiveTab('app')}
        >
          Open app
        </button>
      </div>

      {activeTab === 'form' ? (
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          {error ? (
            <div className="auth-alert auth-alert-error" role="alert">
              {error}
            </div>
          ) : null}

          <div className="auth-field">
            <label htmlFor="password">New password</label>
            <div className="auth-input-wrap">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPasswordValue(e.target.value)}
                placeholder="At least 8 characters"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                className="auth-toggle-password"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <p className="auth-hint">Must include uppercase, lowercase, and a number.</p>
          </div>

          <div className="auth-field">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              id="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              autoComplete="new-password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary auth-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Saving…' : 'Set password'}
          </button>
        </form>
      ) : (
        <div className="auth-app-panel">
          <p>If you have BrokerLoop installed, open the app to finish resetting your password.</p>
          <div className="auth-actions-stack">
            <a href={appDeepLink} className="btn btn-primary auth-submit">
              Open BrokerLoop App
            </a>
            <a href={androidIntentLink} className="btn btn-secondary auth-submit">
              Open in App (Android)
            </a>
          </div>
          <p className="auth-hint">
            No app installed? Switch to the <button type="button" className="auth-inline-link" onClick={() => setActiveTab('form')}>Web form</button> tab above.
          </p>
        </div>
      )}
    </AuthPageLayout>
  )
}
