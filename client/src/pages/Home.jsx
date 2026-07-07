import Hero from '../components/hero/Hero.jsx'
import About from '../components/about/About.jsx'
import Education from '../components/education/Education.jsx'
import Skills from '../components/skills/Skills.jsx'
import Projects from '../components/projects/Projects.jsx'
import Internships from '../components/internships/Internships.jsx'
import Certifications from '../components/certifications/Certifications.jsx'
import Achievements from '../components/achievements/Achievements.jsx'
import Resume from '../components/resume/Resume.jsx'
import Contact from '../components/contact/Contact.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Internships />
      <Certifications />
      <Achievements />
      <Resume />
      <Contact />
    </>
  )
}
