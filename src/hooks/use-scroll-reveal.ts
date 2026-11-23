import { useEffect, type RefObject } from 'react'

/** Independent translate animation preserves layout transforms and image hover. */
export function useScrollReveal(root: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const host = root.current
    if (!host) return
    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    const seen = new WeakSet<Element>()
    const watched = new Set<Element>()
    const running = new Set<Animation>()
    const selector = '.section-heading, .service-card, .project, .about-grid, .value, .process-list li, .contact-copy, .quote-form'
    const observer = new IntersectionObserver(entries => {
      const entering = entries.filter(entry => entry.isIntersecting)
      entering.forEach((entry, index) => {
        const element = entry.target
        observer.unobserve(element)
        watched.delete(element)
        if (seen.has(element)) return
        seen.add(element)
        // Do not fade out content already being read or navigated to by keyboard.
        if (reduced.matches || element.contains(document.activeElement)) return
        const animation = element.animate(
          [{ opacity: 0, translate: '0 20px' }, { opacity: 1, translate: '0 0' }],
          { duration: 650, delay: Math.min(index, 3) * 50, easing: 'cubic-bezier(.23,1,.32,1)', fill: 'backwards' },
        )
        running.add(animation)
        animation.onfinish = animation.oncancel = () => running.delete(animation)
      })
    }, { threshold: 0, rootMargin: '0px 0px 40px 0px' })
    const scan = () => {
      for (const element of watched) if (!host.contains(element)) { observer.unobserve(element); watched.delete(element) }
      host.querySelectorAll(selector).forEach(element => {
        if (seen.has(element) || watched.has(element)) return
        const bounds = element.getBoundingClientRect()
        if (reduced.matches || (bounds.top < innerHeight && bounds.bottom > 0)) { seen.add(element); return }
        watched.add(element)
        observer.observe(element)
      })
    }
    const stop = () => { if (reduced.matches) { running.forEach(animation => animation.cancel()); scan() } }
    const mutation = new MutationObserver(scan)
    scan()
    mutation.observe(host, { childList: true, subtree: true })
    reduced.addEventListener('change', stop)
    return () => {
      observer.disconnect()
      mutation.disconnect()
      reduced.removeEventListener('change', stop)
      running.forEach(animation => animation.cancel())
      watched.clear()
    }
  }, [root])
}
