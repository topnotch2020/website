import { useEffect, useRef, useState } from 'react'

function StatItem({ target, label, delay = 0 }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.unobserve(el)
        const duration = 1800
        const start = performance.now()
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(ease * target))
          if (progress < 1) requestAnimationFrame(step)
          else setCount(target)
        }
        requestAnimationFrame(step)
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div className="stat-item reveal" data-anim="fade-up" style={{ '--delay': `${delay}s` }}>
      <span ref={ref} className="stat-number">{count.toLocaleString('en-IN')}</span>
      <span className="stat-plus">+</span>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <StatItem target={500}   label="Active Brokers"        delay={0}   />
          <StatItem target={2400}  label="Properties Listed"     delay={0.1} />
          <StatItem target={20}    label="Cities Covered"        delay={0.2} />
          <StatItem target={10000} label="Successful Connections" delay={0.3} />
        </div>
      </div>
    </section>
  )
}
