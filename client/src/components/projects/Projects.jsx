import { useMemo, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import { usePortfolio } from '../../context/PortfolioContext.jsx'

export default function Projects() {
  const { projects } = usePortfolio()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [active, setActive] = useState(null)

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((p) => p.category))],
    [projects]
  )

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category
      const q = query.trim().toLowerCase()
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [projects, query, category])

  return (
    <section id="projects" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="Full-stack applications and applied ML systems I've designed and built."
        />

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={16} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or technologies..."
              className="w-full glass rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/30 border border-white/10 focus:border-highlight/50 outline-none transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-colors whitespace-nowrap ${
                  category === c
                    ? 'border-highlight text-highlight bg-highlight/10'
                    : 'border-white/10 text-white/50 hover:border-white/30'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-white/50 text-center py-16 font-mono text-sm">
            No projects match that search — try a different term or category.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onOpen={setActive} />
            ))}
          </div>
        )}
      </Container>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
