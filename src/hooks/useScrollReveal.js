import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to all .reveal elements inside `containerRef`.
 * Re-runs whenever `deps` change (e.g. when a tab switches and new elements mount).
 */
export function useScrollReveal(containerRef, deps = []) {
  useEffect(() => {
    const root = containerRef?.current ?? document
    const els = root.querySelectorAll('.reveal:not(.in-view)')
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
