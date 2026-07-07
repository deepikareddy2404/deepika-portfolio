import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiBriefcase } from 'react-icons/fi'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import GlassCard from '../ui/GlassCard.jsx'
import { usePortfolio } from '../../context/PortfolioContext.jsx'

function InternshipCard({ role, index }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <GlassCard hover={false}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-start justify-between gap-4 p-6 text-left"
        >
          <div className="flex items-start gap-4">
            <span className="mt-1 h-10 w-10 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 grid place-items-center text-highlight shrink-0">
              <FiBriefcase size={17} />
            </span>
            <div>
              {role.duration && (
                <p className="font-mono text-xs uppercase tracking-widest text-highlight mb-1">{role.duration}</p>
              )}
              <h3 className="font-display text-lg font-semibold text-white">{role.role}</h3>
              <p className="text-white/50 text-sm mt-0.5">{role.company}</p>
            </div>
          </div>
          <motion.span animate={{ rotate: open ? 180 : 0 }} className="text-white/50 shrink-0 mt-2">
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
              <div className="px-6 pb-6 pl-[4.25rem] border-t border-white/5 pt-4">
                <ul className="flex flex-col gap-2 mb-4">
                  {role.responsibilities.map((r) => (
                    <li key={r} className="text-white/70 text-sm flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-highlight mt-1.5 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
                {role.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {role.technologies.map((t) => (
                      <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-white/60">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </motion.div>
  )
}

export default function Internships() {
  const { internships } = usePortfolio()

  return (
    <section id="internships" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Internships"
          title="Where I've worked"
          subtitle="Where I've taken what I've learned and applied it with real teams."
        />
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          {internships.map((role, i) => (
            <InternshipCard key={role.id} role={role} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
