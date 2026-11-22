import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

/** Wheel smoothing only; touch gestures, keyboard and reduced motion stay native. */
export function useSmoothScroll() {
  const instance = useRef<Lenis | null>(null)
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    const start = () => {
      instance.current?.destroy()
      instance.current = reduced.matches ? null : new Lenis({
        autoRaf: true,
        autoToggle: true,
        stopInertiaOnNavigate: true,
        smoothWheel: true,
        syncTouch: false,
        lerp: 0.1,
        anchors: true,
        prevent: element => Boolean(element.closest('dialog, textarea, select, [data-native-scroll]')),
      })
    }
    start()
    reduced.addEventListener('change', start)
    return () => { reduced.removeEventListener('change', start); instance.current?.destroy(); instance.current = null }
  }, [])
  return (target: string) => {
    if (instance.current) instance.current.scrollTo(target)
    else document.querySelector(target)?.scrollIntoView({ behavior: 'instant' })
  }
}
