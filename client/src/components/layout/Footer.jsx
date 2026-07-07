import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import Container from '../ui/Container.jsx'
import { usePortfolio } from '../../context/PortfolioContext.jsx'

export default function Footer() {
  const { profile } = usePortfolio()
  const year = new Date().getFullYear()
  const firstName = profile.name.split(' ')[0]

  return (
    <footer className="mt-24">
      <Container>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-10">
          <div className="flex flex-col items-center sm:items-start gap-1.5">
            <p className="font-mono text-xs text-white/40 tracking-wide">
              © {year} {profile.name}
            </p>
            <p className="font-mono text-[11px] text-white/25 tracking-wide">
              Designed &amp; built by {firstName} — React, Node.js &amp; Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-5 text-white/60">
            <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-highlight transition-colors">
              <FiGithub size={18} />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-highlight transition-colors">
              <FiLinkedin size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-highlight transition-colors">
              <FiMail size={18} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
