import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Simple tilt + glow interaction on a plain skill name — no proficiency
// ratings shown, since those aren't meaningfully self-rated.
export default function SkillCard({ name }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const [hovered, setHovered] = useState(false)

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ rx: py * -10, ry: px * 10 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false)
        setTilt({ rx: 0, ry: 0 })
      }}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry, scale: hovered ? 1.05 : 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      style={{ transformStyle: 'preserve-3d' }}
      className="glass rounded-xl p-5 relative overflow-hidden cursor-default flex items-center justify-center text-center"
    >
      <div
        className={`absolute -inset-1 opacity-0 transition-opacity duration-300 ${hovered ? 'opacity-100' : ''}`}
        style={{
          background: 'radial-gradient(120px circle at center, rgba(232,168,124,0.16), transparent 70%)',
        }}
      />
      <h4 className="relative font-display text-sm sm:text-base font-semibold text-white">{name}</h4>
    </motion.div>
  )
}
