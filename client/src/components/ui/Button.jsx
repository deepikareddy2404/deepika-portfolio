import { motion } from 'framer-motion'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2'

const variants = {
  primary:
    'bg-gradient-to-r from-primary to-highlight text-[#090909] shadow-[0_0_20px_-6px_rgba(199,90,90,0.55)] hover:shadow-[0_0_30px_-4px_rgba(217,122,108,0.65)]',
  ghost:
    'glass text-white hover:border-highlight/50 border border-white/10',
  outline:
    'border border-accent/50 text-white hover:bg-accent/10 hover:border-accent/80',
}

export default function Button({ as = 'button', variant = 'primary', className = '', children, ...props }) {
  const Comp = motion[as] || motion.button
  return (
    <Comp
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  )
}
