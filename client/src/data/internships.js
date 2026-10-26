// Internship experience as listed on the resume. Where an exact date
// range isn't given, duration is left null rather than guessed.

export const internships = [
  {
    id: 'intern-wiser',
    company: 'WISER — The Washington Institute for STEM, Entrepreneurship and Research',
    role: 'Intern',
    duration: 'Ongoing',
    responsibilities: [
      'Built an AI email ticketing system that auto-replies using a pre-trained model',
      "Administered QISE's LMS (TrainerCentral/Zoho) with SAML/SSO integration for APSSDC",
      'Cleaned and managed large student enrollment and progress datasets for reporting',
    ],
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'pgvector', 'OpenAI API', 'Gmail API'],
  },
  {
    id: 'intern-infosys',
    company: 'Infosys Springboard',
    role: 'Project Intern',
    duration: null,
    responsibilities: [
      'Completed the Intelligent Cognitive Alarm Platform project',
      'Worked on the recommendation engine, ML/analytics and frontend',
      'Handled Docker deployment on Render and Vercel',
    ],
    technologies: ['FastAPI', 'React', 'Vite', 'PostgreSQL', 'Docker'],
  },
]
