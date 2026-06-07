import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthPageLayout from '../components/AuthPageLayout'
import { forgotPassword } from '../api/auth.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [info, setInfo] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [resendSeconds, setResendSeconds] = useState(0)

  useEffect(() => {
    document.title = 'Forgot Password — BrokerLoop'
    return () => {
      document.title = 'BrokerLoop — Connect Brokers. Close Deals Faster.'
    }
  }, [])

  useEffect(() => {
    if (resendSeconds <= 0) return undefined
    const timer = setInterval(() => {
      setResendSeconds((current) => Math.max(current - 1, 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [resendSeconds])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setInfo('')

    if (!email.trim()) {
      setError('Please enter your registered email address.')
      return
    }
    if (!EMAIL_RE.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }

    try {
      setIsSubmitting(true)
      const result = await forgotPassword(email)
      setInfo(result.message || 'If an account exists for this email, a password reset link has been sent.')
      setResendSeconds(30)
    } catch (err) {
      setError(err.message || 'Unable to send reset link. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AuthPageLayout
      title="Forgot password"
      subtitle="Enter your email and we'll send a secure link to reset your password."
      footer={
        <p className="auth-footer-note">
          Remember your password? Open the <Link to="/#download">BrokerLoop app</Link> to sign in.
        </p>
      }
    >
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        {error ? (
          <div className="auth-alert auth-alert-error" role="alert">
            {error}
          </div>
        ) : null}
        {info ? (
          <div className="auth-alert auth-alert-success" role="status">
            {info}
          </div>
        ) : null}

        <div className="auth-field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary auth-submit"
          disabled={isSubmitting || resendSeconds > 0}
        >
          {isSubmitting
            ? 'Sending…'
            : resendSeconds > 0
              ? `Resend in ${resendSeconds}s`
              : 'Send reset link'}
        </button>
      </form>
    </AuthPageLayout>
  )
}
