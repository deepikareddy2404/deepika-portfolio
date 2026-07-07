import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import GlassCard from '../ui/GlassCard.jsx'
import { usePortfolio } from '../../context/PortfolioContext.jsx'

function TimelineItem({ entry, index, isLast }) {
  const [open, setOpen] = useState(entry.status === 'current')

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      className="relative pl-10 sm:pl-14"
    >
      {!isLast && (
        <span className="absolute left-[9px] sm:left-[13px] top-6 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />
      )}
      <span
        className={`absolute left-0 sm:left-1 top-1 h-5 w-5 rounded-full border-2 grid place-items-center ${
          entry.status === 'current'
            ? 'border-highlight bg-highlight/20'
            : 'border-white/20 bg-bg'
        }`}
      >
        <span className={`h-2 w-2 rounded-full ${entry.status === 'current' ? 'bg-highlight' : 'bg-white/30'}`} />
      </span>

      <GlassCard className="mb-6" hover={false}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-highlight mb-1">{entry.duration}</p>
            <h3 className="font-display text-lg sm:text-xl font-semibold text-white">{entry.level}</h3>
            <p className="text-white/50 text-sm mt-0.5">{entry.institution}</p>
          </div>
          <motion.span animate={{ rotate: open ? 180 : 0 }} className="text-white/50 shrink-0">
            <FiChevronDown size={18} />
          </motion.span>
        </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-6 border-t border-white/5 pt-4">
                    <p className="text-highlight font-mono text-sm mb-2">{entry.score}</p>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{entry.affiliation}</p>
                    <div className="flex flex-wrap gap-2">
                      {entry.highlights.map((h) => (
                        <span
                          key={h}
                          className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-white/60"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
      </GlassCard>
    </motion.div>
  )
}

export default function Education() {
  const { education } = usePortfolio()

  return (
    <section id="education" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Academic path"
          subtitle="Academic history from secondary school through the current B.Tech program."
        />
        <div className="max-w-3xl mx-auto">
          {education.map((entry, i) => (
            <TimelineItem key={entry.id} entry={entry} index={i} isLast={i === education.length - 1} />
          ))}
        </div>
      </Container>
    </section>
  )
}
