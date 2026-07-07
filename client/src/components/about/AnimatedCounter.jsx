import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', duration = 1.4 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)
  const isDecimal = !Number.isInteger(value)

  useEffect(() => {
    if (!inView) return
    let start = null
    const from = 0
    const to = value

    function tick(ts) {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(from + (to - from) * eased)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value, duration])

  return (
    <motion.span ref={ref} className="font-display text-4xl sm:text-5xl font-bold text-gradient">
      {isDecimal ? display.toFixed(1) : Math.round(display)}
      {suffix}
    </motion.span>
  )
}
