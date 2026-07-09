import { motion } from 'framer-motion'
import { FiTarget, FiHeart } from 'react-icons/fi'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import GlassCard from '../ui/GlassCard.jsx'
import AnimatedCounter from './AnimatedCounter.jsx'
import { usePortfolio } from '../../context/PortfolioContext.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  const { profile } = usePortfolio()

  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Who I Am"
          title="More than the code I write"
          subtitle="A closer look at how I think, what drives me, and where I'm headed."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <GlassCard className="p-7 sm:p-9">
              <div className="flex items-center gap-3 mb-4 text-highlight">
                <FiHeart size={18} />
                <span className="font-mono text-xs uppercase tracking-widest">My Story</span>
              </div>
              <div className="text-white/75 leading-relaxed space-y-4">
                {profile.story.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-7 sm:p-9">
              <div className="flex items-center gap-3 mb-4 text-highlight">
                <FiTarget size={18} />
                <span className="font-mono text-xs uppercase tracking-widest">Strengths</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/70 bg-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-6"
          >
            <GlassCard className="p-7 flex flex-col gap-1">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40">Education</span>
              <p className="font-display text-lg font-semibold text-white mt-1">{profile.education.degree}</p>
              <p className="text-white/60 text-sm">{profile.education.status}</p>
              <p className="text-highlight font-mono text-sm mt-2">CGPA: {profile.education.cgpa}</p>
            </GlassCard>

            <div className="grid grid-cols-2 gap-4">
              {profile.stats.map((stat) => (
                <GlassCard key={stat.label} className="p-5 flex flex-col items-center text-center gap-1" hover={false}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white/50">{stat.label}</span>
                </GlassCard>
              ))}
            </div>

            <GlassCard className="p-7">
              <span className="font-mono text-xs uppercase tracking-widest text-white/40">Current Interests</span>
              <ul className="mt-3 flex flex-col gap-2">
                {profile.interests.map((interest) => (
                  <li key={interest} className="text-white/75 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
                    {interest}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
