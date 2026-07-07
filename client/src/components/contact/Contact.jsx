import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import GlassCard from '../ui/GlassCard.jsx'
import Button from '../ui/Button.jsx'
import { usePortfolio } from '../../context/PortfolioContext.jsx'

const CONTACT_ITEMS = (profile) => [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { icon: FiMapPin, label: 'Location', value: profile.location, href: null },
  { icon: FiGithub, label: 'GitHub', value: 'View profile', href: profile.social.github },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'View profile', href: profile.social.linkedin },
]

// Web3Forms delivers submissions straight to your inbox — no backend
// needed. Get a free access key at https://web3forms.com (just enter your
// email, the key arrives instantly) and set it as VITE_WEB3FORMS_ACCESS_KEY
// in client/.env — see .env.example.
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export default function Contact() {
  const { profile } = usePortfolio()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('error')
      setErrorMessage('Contact form isn\'t configured yet — missing Web3Forms access key.')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio message from ${form.name}`,
          from_name: profile.name,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error — please try again or email me directly.')
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something meaningful"
          subtitle="Interested in collaborating? Open to internships, full-time roles, and interesting projects — I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-4"
          >
            {CONTACT_ITEMS(profile).map((item) => {
              const Icon = item.icon
              const content = (
                <GlassCard className="p-5 flex items-center gap-4" hover={!!item.href}>
                  <span className="h-11 w-11 rounded-lg bg-gradient-to-br from-primary/30 to-highlight/30 grid place-items-center text-highlight shrink-0">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">{item.label}</p>
                    <p className="text-white/85 text-sm mt-0.5">{item.value}</p>
                  </div>
                </GlassCard>
              )
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <GlassCard className="p-6 sm:p-8" hover={false}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-white/50 mb-2 block">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full glass rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 border border-white/10 focus:border-highlight/50 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-white/50 mb-2 block">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full glass rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 border border-white/10 focus:border-highlight/50 outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-white/50 mb-2 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full glass rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 border border-white/10 focus:border-highlight/50 outline-none transition-colors resize-none"
                    placeholder="What are you working on?"
                  />
                </div>

                <Button type="submit" variant="primary" disabled={status === 'sending'} className="justify-center">
                  {status === 'sending' ? 'Sending...' : (
                    <>
                      Send Message <FiSend size={14} />
                    </>
                  )}
                </Button>

                {status === 'sent' && (
                  <p className="flex items-center gap-2 text-sm text-highlight">
                    <FiCheck size={15} /> Message sent — I'll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="flex items-center gap-2 text-sm text-red-400">
                    <FiAlertCircle size={15} /> {errorMessage}
                  </p>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
