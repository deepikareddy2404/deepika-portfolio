import { motion } from 'framer-motion'
import { FiArrowUpRight, FiStar } from 'react-icons/fi'
import GlassCard from '../ui/GlassCard.jsx'

export default function ProjectCard({ project, onOpen, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <GlassCard
        className={`group relative h-full flex flex-col overflow-hidden cursor-pointer ${
          project.featured ? 'ring-1 ring-highlight/25' : ''
        }`}
        onClick={() => onOpen(project)}
      >
        {project.featured && (
          <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-highlight bg-bg/70 border border-highlight/30 px-2.5 py-1 rounded-full">
            <FiStar size={10} /> Featured
          </span>
        )}
        <div className={`h-40 bg-gradient-to-br ${project.coverGradient} flex items-end justify-end p-5 gap-2`}>
          {project.status && (
            <span className="font-mono text-[11px] uppercase tracking-widest text-highlight bg-bg/40 px-2.5 py-1 rounded-full shrink-0">
              {project.status}
            </span>
          )}
        </div>

        <div className="p-6 flex flex-col gap-3 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-1.5">
                {project.category}
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
            </div>
            <FiArrowUpRight className="text-white/30 group-hover:text-highlight group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
          </div>
          <p className="text-white/60 text-sm leading-relaxed flex-1">{project.tagline}</p>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="font-mono text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="font-mono text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
