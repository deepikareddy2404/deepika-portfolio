// Projects as listed on the resume. Fields without confirmed details
// (e.g. a public link) are omitted rather than invented.

export const projects = [
  {
    id: 'explainable-ai-stock-prediction',
    title: 'Explainable AI for Stock Market Trend Prediction',
    tagline: 'Investment Decision Support',
    category: 'Machine Learning',
    status: 'Ongoing',
    tech: ['Random Forest', 'LSTM', 'SHAP', 'LIME'],
    coverGradient: 'from-highlight/40 via-primary/30 to-accent/30',
    liveUrl: null,
    overview:
      'An Explainable AI stock trend prediction system built with Random Forest and LSTM. RSI, MACD and moving-average features are engineered from market data, and SHAP and LIME explain individual predictions.',
    features: [
      'Random Forest and LSTM models for stock trend prediction',
      'Engineered RSI, MACD and moving-average features',
      'SHAP and LIME to explain individual predictions',
    ],
    process: {
      label: 'Approach',
      steps: [
        { name: 'Features', detail: 'RSI, MACD and moving-average indicators' },
        { name: 'Modeling', detail: 'Random Forest and LSTM for trend prediction' },
        { name: 'Explainability', detail: 'SHAP and LIME explain individual predictions' },
      ],
    },
  },
  {
    id: 'futureme-ai',
    title: 'FutureMe AI',
    tagline: 'Full Stack AI Personal Growth SaaS',
    category: 'Full Stack · AI',
    status: null,
    featured: true,
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Gemini API', 'JWT'],
    coverGradient: 'from-primary/40 via-accent/30 to-highlight/30',
    liveUrl: 'https://future-me-flax.vercel.app',
    overview:
      "A full-stack AI SaaS built with React, Node.js, Express and PostgreSQL that sends each user's goals, habits and mood history to the Gemini API for personalized responses.",
    features: [
      "Goals, habits and mood history sent to the Gemini API for personalized responses",
      'JWT authentication',
      '13-table PostgreSQL schema',
    ],
    process: {
      label: 'Architecture',
      steps: [
        { name: 'Client', detail: 'React frontend' },
        { name: 'API', detail: 'Node.js + Express with JWT authentication' },
        { name: 'Database', detail: 'PostgreSQL — 13-table schema' },
        { name: 'AI Layer', detail: "Gemini API fed with the user's goals, habits and mood history" },
      ],
    },
  },
  {
    id: 'student-management-system',
    title: 'Student Management System',
    tagline: 'Full Stack Java Application',
    category: 'Full Stack · Java',
    status: null,
    tech: ['Spring Boot', 'Hibernate', 'Oracle', 'Spring Security'],
    coverGradient: 'from-accent/40 via-primary/30 to-highlight/30',
    liveUrl: null,
    overview:
      'A full-stack Java application built with Spring Boot, Hibernate and Oracle, featuring CRUD operations and Spring Security role-based access for Admin and Staff.',
    features: [
      'CRUD operations for student records',
      'Spring Security role-based access (Admin/Staff)',
    ],
    process: {
      label: 'Architecture',
      steps: [
        { name: 'Application', detail: 'Spring Boot' },
        { name: 'Persistence', detail: 'Hibernate ORM with an Oracle database' },
        { name: 'Security', detail: 'Spring Security role-based access (Admin/Staff)' },
      ],
    },
  },
]
