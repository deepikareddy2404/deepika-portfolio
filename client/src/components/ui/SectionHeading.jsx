import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-4 ${alignClass} mb-16 sm:mb-20`}
    >
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-[0.35em] text-highlight">{eyebrow}</span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15]">
        {title}
      </h2>
      {subtitle && <p className="max-w-2xl text-white/60 text-base sm:text-lg leading-relaxed">{subtitle}</p>}
    </motion.div>
  )
}
