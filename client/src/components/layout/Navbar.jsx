import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'
import Container from '../ui/Container.jsx'
import { usePortfolio } from '../../context/PortfolioContext.jsx'
import { useActiveSection } from '../../hooks/useActiveSection.js'

const NAV_LINKS = [
  { href: '#about', id: 'about', label: 'About' },
  { href: '#education', id: 'education', label: 'Education' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#internships', id: 'internships', label: 'Internships' },
  { href: '#certifications', id: 'certifications', label: 'Certifications' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const { profile } = usePortfolio()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(['top', ...NAV_LINKS.map((l) => l.id)])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/5 py-2.5' : 'py-4'
      }`}
    >
      <Container className="flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="h-8 w-8 rounded-full overflow-hidden border border-white/15 group-hover:border-highlight/60 transition-colors shrink-0">
            <img src={profile.profileImage} alt="" className="h-full w-full object-cover" style={{ objectPosition: 'center 20%' }} />
          </span>
          <span className="font-display text-base font-bold text-white hidden sm:inline">
            {profile.name.split(' ')[0]}<span className="text-highlight">.</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-white/60">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 rounded-full transition-colors ${
                  isActive ? 'text-white' : 'hover:text-white/90'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-white/8 border border-highlight/30"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest px-4 py-2 rounded-full border border-white/10 text-white/80 hover:border-highlight/50 hover:text-highlight transition-colors"
          >
            <FiDownload size={13} /> Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="lg:hidden text-white p-2"
          aria-label="Open menu"
        >
          <FiMenu size={22} />
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-2.5">
                <span className="h-8 w-8 rounded-full overflow-hidden border border-white/15">
                  <img src={profile.profileImage} alt="" className="h-full w-full object-cover" style={{ objectPosition: 'center 20%' }} />
                </span>
                <span className="font-display text-base font-bold text-white">{profile.name.split(' ')[0]}.</span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <FiX size={26} />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-7 mt-6 font-display text-2xl text-white">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`hover:text-highlight transition-colors ${active === link.id ? 'text-highlight' : ''}`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={profile.resumeUrl}
                download
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest px-5 py-2.5 rounded-full border border-white/15 text-white/80"
              >
                <FiDownload size={14} /> Download Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
