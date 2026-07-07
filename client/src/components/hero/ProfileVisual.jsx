import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { usePortfolio } from '../../context/PortfolioContext.jsx'

export default function ProfileVisual() {
  const { profile } = usePortfolio()
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ rx: py * -8, ry: px * 8 })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
      transition={{
        opacity: { duration: 0.7, delay: 0.3 },
        scale: { duration: 0.7, delay: 0.3 },
        y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
      }}
      className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80"
    >
      {/* Rotating gradient ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="absolute -inset-2 rounded-full opacity-90"
        style={{
          background:
            'conic-gradient(from 0deg, #C75A5A, #D97A6C, #E8A87C, #C75A5A)',
          filter: 'blur(2px)',
        }}
      />
      {/* Soft glow behind everything */}
      <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-highlight/30 blur-3xl" />

      {/* Photo, masked into the ring, with hover tilt */}
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
        className="absolute inset-[6px] rounded-full overflow-hidden border-4 border-bg"
        style={{ perspective: '600px' }}
      >
        <motion.img
          src={profile.profileImage}
          alt={profile.name}
          animate={{ rotateX: tilt.rx, rotateY: tilt.ry, scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="w-full h-full object-cover"
          style={{ transformStyle: 'preserve-3d' }}
        />
      </div>
    </motion.div>
  )
}
