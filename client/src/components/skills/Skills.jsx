import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import SkillCard from './SkillCard.jsx'
import { usePortfolio } from '../../context/PortfolioContext.jsx'

export default function Skills() {
  const { skills } = usePortfolio()
  const [activeId, setActiveId] = useState('all')

  const visibleCategories =
    activeId === 'all' ? skills : skills.filter((c) => c.id === activeId)

  return (
    <section id="skills" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools I reach for"
          subtitle="The tools and technologies I reach for when building something new."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveId('all')}
            className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-colors ${
              activeId === 'all'
                ? 'border-highlight text-highlight bg-highlight/10'
                : 'border-white/10 text-white/50 hover:border-white/30'
            }`}
          >
            All
          </button>
          {skills.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-colors ${
                activeId === cat.id
                  ? 'border-highlight text-highlight bg-highlight/10'
                  : 'border-white/10 text-white/50 hover:border-white/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-12">
          {visibleCategories.map((cat) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-display text-lg font-semibold text-white mb-5 flex items-center gap-3">
                {cat.label}
                <span className="h-px flex-1 bg-white/10" />
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" style={{ perspective: '800px' }}>
                {cat.skills.map((skill) => (
                  <SkillCard key={skill} name={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
