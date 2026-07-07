import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import api from '../utils/api.js'
import { profile as profileSeed } from '../data/profile.js'
import { education as educationSeed } from '../data/education.js'
import { skillCategories as skillsSeed } from '../data/skills.js'
import { projects as projectsSeed } from '../data/projects.js'
import { internships as internshipsSeed } from '../data/internships.js'
import { certifications as certificationsSeed } from '../data/certifications.js'
import { achievements as achievementsSeed } from '../data/achievements.js'

const PortfolioContext = createContext(null)

// Generic helper: try the live API first, silently fall back to seed data.
// This means every section already reads "from the backend" — swapping
// in real Mongo-backed data later requires no component changes.
async function fetchWithFallback(path, seed) {
  try {
    const { data } = await api.get(path)
    return data?.data ?? seed
  } catch {
    return seed
  }
}

export function PortfolioProvider({ children }) {
  const [profile, setProfile] = useState(profileSeed)
  const [education, setEducation] = useState(educationSeed)
  const [skills, setSkills] = useState(skillsSeed)
  const [projects, setProjects] = useState(projectsSeed)
  const [internships, setInternships] = useState(internshipsSeed)
  const [certifications, setCertifications] = useState(certificationsSeed)
  const [achievements, setAchievements] = useState(achievementsSeed)
  const [loading, setLoading] = useState(true)

  const loadAll = useCallback(async () => {
    setLoading(true)
    const [p, e, s, pr, i, c, a] = await Promise.all([
      fetchWithFallback('/profile', profileSeed),
      fetchWithFallback('/education', educationSeed),
      fetchWithFallback('/skills', skillsSeed),
      fetchWithFallback('/projects', projectsSeed),
      fetchWithFallback('/internships', internshipsSeed),
      fetchWithFallback('/certifications', certificationsSeed),
      fetchWithFallback('/achievements', achievementsSeed),
    ])
    setProfile(p)
    setEducation(e)
    setSkills(s)
    setProjects(pr)
    setInternships(i)
    setCertifications(c)
    setAchievements(a)
    setLoading(false)
  }, [])

  useEffect(() => {
    loadAll()
  }, [loadAll])

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        education,
        skills,
        projects,
        internships,
        certifications,
        achievements,
        loading,
        refresh: loadAll,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext)
  if (!ctx) throw new Error('usePortfolio must be used within PortfolioProvider')
  return ctx
}
