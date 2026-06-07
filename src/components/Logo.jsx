export default function Logo({ white = false, className = '' }) {
  return (
    <span className={`logo${white ? ' logo-white' : ''}${className ? ` ${className}` : ''}`}>
      <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12L12 3L21 12" />
        <path d="M5 10V20H9V14H15V20H19V10" />
      </svg>
      Broker<span>Loop</span>
    </span>
  )
}
