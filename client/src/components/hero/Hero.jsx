import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi'
import SynapseField from './SynapseField.jsx'
import TypingEffect from './TypingEffect.jsx'
import ProfileVisual from './ProfileVisual.jsx'
import Button from '../ui/Button.jsx'
import Container from '../ui/Container.jsx'
import { usePortfolio } from '../../context/PortfolioContext.jsx'
import { useMousePosition } from '../../hooks/useMousePosition.js'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  const { profile } = usePortfolio()
  const { x, y } = useMousePosition()

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      {/* Signature background */}
      <div className="absolute inset-0">
        <SynapseField />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg" />
        <div
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-[120px]"
          style={{ transform: `translate(${x * 20}px, ${y * 20}px)` }}
        />
        <div
          className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-accent/20 blur-[120px]"
          style={{ transform: `translate(${x * -20}px, ${y * -20}px)` }}
        />
      </div>

      <Container className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-6">
          <motion.span variants={item} className="font-mono text-sm uppercase tracking-[0.35em] text-highlight">
            Hello,
          </motion.span>

          <motion.h1 variants={item} className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] text-white">
            I&apos;m <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.p variants={item} className="font-display text-xl sm:text-2xl font-semibold text-white/90">
            {profile.tagline}
          </motion.p>

          <motion.p variants={item} className="text-lg text-white/70 max-w-xl leading-relaxed">
            Building scalable full-stack applications with modern web technologies,
            exploring AI-powered solutions, and caring about clean, intuitive user
            experiences along the way.
          </motion.p>

          <motion.div variants={item} className="font-display text-lg sm:text-xl h-8 text-white/50">
            <TypingEffect phrases={profile.typingPhrases} />
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-4 mt-2">
            <Button as="a" href="#projects" variant="primary">
              Explore Portfolio <FiArrowRight />
            </Button>
            <Button as="a" href={profile.resumeUrl} variant="ghost" download>
              Download Resume <FiDownload />
            </Button>
            <Button as="a" href="#contact" variant="outline">
              Contact Me <FiMail />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <ProfileVisual />
        </motion.div>
      </Container>
    </section>
  )
}
