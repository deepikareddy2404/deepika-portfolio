import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiGithub, FiExternalLink, FiCheck, FiStar } from 'react-icons/fi'
import ArchitectureDiagram from './ArchitectureDiagram.jsx'
import { usePortfolio } from '../../context/PortfolioContext.jsx'

export default function ProjectModal({ project, onClose }) {
  const { profile } = usePortfolio()
  const [tab, setTab] = useState('overview')

  useEffect(() => {
    if (project) setTab('overview')
  }, [project])

  if (!project) return null

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'process', label: project.process.label },
  ]

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
        >
          <motion.div onClick={onClose} className="absolute inset-0 bg-bg/85 backdrop-blur-sm" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="relative w-full sm:max-w-2xl glass rounded-none sm:rounded-2xl border border-white/10 my-0 sm:my-10 max-h-[100vh] sm:max-h-[85vh] flex flex-col"
          >
            <div className={`relative px-6 sm:px-8 pt-8 pb-6 bg-gradient-to-br ${project.coverGradient}`}>
              <button
                type="button"
                onClick={onClose}
                className="absolute top-5 right-5 h-9 w-9 grid place-items-center rounded-full bg-bg/50 text-white hover:bg-bg/80 transition-colors"
                aria-label="Close project details"
              >
                <FiX size={18} />
              </button>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs uppercase tracking-widest text-white/70">{project.category}</span>
                {project.featured && (
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-bg/50 text-highlight border border-highlight/30 flex items-center gap-1">
                    <FiStar size={9} /> Featured
                  </span>
                )}
                {project.status && (
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-bg/50 text-highlight border border-highlight/30">
                    {project.status}
                  </span>
                )}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">{project.title}</h3>
              <p className="text-white/80 mt-1">{project.tagline}</p>

              <div className="flex flex-wrap gap-3 mt-5">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-bg/60 border border-white/10 text-white hover:border-highlight/40 hover:bg-bg/90 transition-all duration-300"
                >
                  <FiGithub size={15} /> GitHub Profile
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-primary to-highlight text-[#090909] shadow-[0_0_18px_-6px_rgba(199,90,90,0.5)] hover:shadow-[0_0_26px_-4px_rgba(217,122,108,0.6)] transition-all duration-300"
                  >
                    <FiExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="flex overflow-x-auto border-b border-white/10 px-4 sm:px-8 shrink-0">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`shrink-0 px-4 py-3 font-mono text-xs uppercase tracking-wider border-b-2 transition-colors ${
                    tab === t.id ? 'border-highlight text-highlight' : 'border-transparent text-white/40 hover:text-white/70'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="px-6 sm:px-8 py-7 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {tab === 'overview' && (
                    <div className="flex flex-col gap-6">
                      <p className="text-white/75 leading-relaxed">{project.overview}</p>
                      <div>
                        <h4 className="font-mono text-xs uppercase tracking-widest text-highlight mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span key={t} className="font-mono text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {tab === 'features' && (
                    <ul className="flex flex-col gap-3">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-white/75">
                          <FiCheck className="text-highlight mt-1 shrink-0" size={16} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {tab === 'process' && <ArchitectureDiagram steps={project.process.steps} />}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
