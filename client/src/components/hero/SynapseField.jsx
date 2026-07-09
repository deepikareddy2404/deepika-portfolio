import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion.js'

// The hero's signature element: a quiet neural network drifting behind the
// content — nodes connect into synapses when close, and gently bend toward
// the cursor like a field responding to attention. It's a direct visual
// metaphor for "AI Engineer" rather than generic decorative particles.
const COLORS = ['#7C6FD1', '#9B8FE0', '#D3D3FF']

export default function SynapseField() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, dpr
    let nodes = []
    let animationId
    let running = true

    const NODE_COUNT_BASE = 70 // per 1,000,000 px^2 of viewport, scaled below

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const area = width * height
      const targetCount = Math.round((area / 1_000_000) * NODE_COUNT_BASE)
      const count = Math.max(28, Math.min(120, targetCount))

      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    }

    function step() {
      if (!running) return
      ctx.clearRect(0, 0, width, height)

      const linkDist = Math.min(150, Math.max(90, width / 10))

      for (const n of nodes) {
        // gentle drift toward cursor within a radius, else free drift
        const dx = mouseRef.current.x - n.x
        const dy = mouseRef.current.y - n.y
        const dist = Math.hypot(dx, dy)
        if (dist < 220) {
          n.x += dx * 0.0018
          n.y += dy * 0.0018
        }

        n.x += n.vx
        n.y += n.vy

        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < linkDist) {
            const opacity = (1 - dist / linkDist) * 0.35
            ctx.strokeStyle = `rgba(155, 143, 224, ${opacity})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath()
        ctx.fillStyle = n.color
        ctx.globalAlpha = 0.85
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }

      animationId = requestAnimationFrame(step)
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    function handleMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    resize()
    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    if (reducedMotion) {
      // Draw a single static frame instead of animating.
      step()
      running = false
    } else {
      step()
    }

    return () => {
      running = false
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [reducedMotion])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-auto"
      aria-hidden="true"
    />
  )
}
