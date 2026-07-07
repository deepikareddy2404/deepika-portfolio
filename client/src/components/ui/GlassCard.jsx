import { motion } from 'framer-motion'

export default function GlassCard({
  children,
  className = '',
  glow = true,
  hover = true,
  as = 'div',
  ...props
}) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      whileHover={
        hover
          ? { y: -5, boxShadow: '0 20px 40px -18px rgba(0,0,0,0.65)' }
          : undefined
      }
      transition={{ type: 'spring', stiffness: 240, damping: 24 }}
      className={`glass ${glow ? 'glass-border-glow' : ''} rounded-2xl transition-colors duration-300 ${
        hover ? 'hover:border-white/[0.14]' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Comp>
  )
}
