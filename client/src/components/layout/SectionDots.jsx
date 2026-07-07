import { motion } from 'framer-motion'
import { useActiveSection } from '../../hooks/useActiveSection.js'

const SECTIONS = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'internships', label: 'Internships' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export default function SectionDots() {
  const active = useActiveSection(SECTIONS.map((s) => s.id))

  return (
    <nav
      aria-label="Section navigation"
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4"
    >
      {SECTIONS.map((section) => {
        const isActive = active === section.id
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group relative flex items-center justify-end"
            aria-label={`Go to ${section.label}`}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className="absolute right-6 whitespace-nowrap font-mono text-[11px] uppercase tracking-widest text-white/0 group-hover:text-white/70 transition-colors duration-200 pointer-events-none">
              {section.label}
            </span>
            <span className="relative grid place-items-center h-4 w-4">
              {isActive && (
                <motion.span
                  layoutId="section-dot-ring"
                  className="absolute inset-0 rounded-full border border-highlight"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              <span
                className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                  isActive ? 'bg-highlight scale-100' : 'bg-white/30 scale-75 group-hover:bg-white/60 group-hover:scale-100'
                }`}
              />
            </span>
          </a>
        )
      })}
    </nav>
  )
}
