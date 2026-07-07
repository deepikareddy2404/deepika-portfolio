import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import GlassCard from '../ui/GlassCard.jsx'
import { usePortfolio } from '../../context/PortfolioContext.jsx'

export default function Certifications() {
  const { certifications } = usePortfolio()

  return (
    <section id="certifications" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning"
          subtitle="Structured learning I've picked up alongside hands-on project work."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <GlassCard className="p-6 h-full flex flex-col gap-4" hover={false}>
                <span className="h-11 w-11 rounded-lg bg-gradient-to-br from-accent/30 to-highlight/30 grid place-items-center text-highlight">
                  <FiAward size={19} />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-base font-semibold text-white leading-snug">{cert.title}</h3>
                  <p className="text-white/50 text-sm mt-1">{cert.issuer}</p>
                </div>
                <p className="text-white/60 text-xs leading-relaxed pt-3 border-t border-white/5">{cert.note}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
