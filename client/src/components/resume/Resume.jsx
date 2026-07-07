import { motion } from 'framer-motion'
import { FiDownload, FiFileText } from 'react-icons/fi'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import GlassCard from '../ui/GlassCard.jsx'
import Button from '../ui/Button.jsx'
import { usePortfolio } from '../../context/PortfolioContext.jsx'

export default function Resume() {
  const { profile } = usePortfolio()

  return (
    <section id="resume" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Resume"
          title="The one-page version"
          subtitle="Everything above, condensed — view it inline or take a copy with you."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard className="p-4 sm:p-6" hover={false}>
            <div className="flex items-center justify-between gap-4 mb-4 px-2">
              <div className="flex items-center gap-2 text-white/70">
                <FiFileText size={16} />
                <span className="font-mono text-xs uppercase tracking-widest">Deepika_Reddy_Seelam_Resume.pdf</span>
              </div>
              <Button as="a" href={profile.resumeUrl} variant="primary" download className="!px-4 !py-2 !text-xs">
                <FiDownload size={14} /> Download
              </Button>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10 bg-white" style={{ aspectRatio: '8.5 / 11' }}>
              <iframe
                src={`${profile.resumeUrl}#toolbar=0`}
                title="Resume preview"
                className="w-full h-full"
              />
            </div>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  )
}
