import { motion } from 'framer-motion'
import { FiAward, FiCode, FiUsers } from 'react-icons/fi'
import { FaTrophy } from 'react-icons/fa'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import GlassCard from '../ui/GlassCard.jsx'
import { usePortfolio } from '../../context/PortfolioContext.jsx'

const ICONS = {
  award: FiAward,
  trophy: FaTrophy,
  code: FiCode,
  users: FiUsers,
}

export default function Achievements() {
  const { achievements } = usePortfolio()

  return (
    <section id="achievements" className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Achievements" title="Milestones along the way" subtitle="A few moments outside the classroom that I'm proud of." />
        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a, i) => {
            const Icon = ICONS[a.icon] || FiAward
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              >
                <GlassCard className="p-6 flex gap-4 h-full">
                  <span className="h-11 w-11 rounded-lg bg-gradient-to-br from-primary/30 to-highlight/30 grid place-items-center text-highlight shrink-0">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-white mb-1">{a.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{a.description}</p>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
