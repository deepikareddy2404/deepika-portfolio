// Real projects, descriptions, and tech stacks. Where a detail isn't
// confirmed (e.g. a public repo link), that field is simply omitted
// rather than invented.

export const projects = [
  {
    id: 'futureme-ai',
    title: 'FutureMe AI',
    tagline: 'Full-Stack AI Personal Growth SaaS',
    category: 'Full Stack · AI',
    status: null,
    featured: true,
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Google Gemini API'],
    coverGradient: 'from-primary/40 via-accent/30 to-highlight/30',
    liveUrl: 'https://future-me-flax.vercel.app',
    overview:
      'A full-stack AI-powered personal growth SaaS built with React, Node.js, Express, PostgreSQL, and the Google Gemini API — deployed on Vercel and Render with performance-optimized, lazy-loaded routes.',
    features: [
      '20+ features including AI future letters, goal roadmaps, habit tracking, and mood analysis',
      'An AI career coach built on the Gemini API',
      'JWT authentication across the application',
      'A 13-table PostgreSQL schema',
      'An AI memory system that personalizes every response using real user data',
    ],
    process: {
      label: 'Architecture',
      steps: [
        { name: 'Client', detail: 'React frontend, deployed on Vercel with lazy-loaded routes' },
        { name: 'API', detail: 'Node.js + Express, with JWT authentication' },
        { name: 'Database', detail: 'PostgreSQL — 13-table schema, hosted on Render' },
        { name: 'AI Layer', detail: 'Google Gemini API + a memory system personalizing responses from real user data' },
      ],
    },
  },
  {
    id: 'thinkboard',
    title: 'ThinkBoard',
    tagline: 'MERN Stack Application',
    category: 'Full Stack',
    status: null,
    tech: ['React (Hooks)', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    coverGradient: 'from-accent/40 via-primary/30 to-highlight/30',
    liveUrl: null,
    overview:
      'A full-stack MERN application for managing and organizing content, with RESTful APIs and a dynamic React UI built on hooks. Deployed on Render with production-ready configuration.',
    features: [
      'RESTful API design for content management',
      'Dynamic, hook-driven React UI',
      'MongoDB for persistent data storage',
      'Production-ready deployment configuration on Render',
    ],
    process: {
      label: 'Architecture',
      steps: [
        { name: 'Client', detail: 'React UI built with hooks' },
        { name: 'API', detail: 'Express REST APIs for content management' },
        { name: 'Database', detail: 'MongoDB' },
        { name: 'Hosting', detail: 'Render, production-ready configuration' },
      ],
    },
  },
  {
    id: 'explainable-ai-stock-prediction',
    title: 'Explainable AI for Stock Market Trend Prediction',
    tagline: 'Investment Decision Support System',
    category: 'Machine Learning',
    status: 'Ongoing',
    tech: ['Random Forest', 'LSTM', 'SHAP', 'LIME'],
    coverGradient: 'from-highlight/40 via-primary/30 to-accent/30',
    liveUrl: null,
    overview:
      'An Explainable AI-based stock market trend prediction system using Random Forest and LSTM models, with SHAP and LIME integrated to keep every prediction transparent and interpretable for investment decisions.',
    features: [
      'Random Forest and LSTM models for market trend forecasting',
      'SHAP and LIME integration for interpretable predictions',
      'Feature engineering using technical indicators — RSI, MACD, and Moving Average',
      'Model evaluation using Accuracy, Precision, Recall, and F1-Score',
    ],
    process: {
      label: 'Approach',
      steps: [
        { name: 'Data Prep', detail: 'Feature engineering with RSI, MACD, and Moving Average indicators' },
        { name: 'Modeling', detail: 'Random Forest & LSTM for trend forecasting' },
        { name: 'Explainability', detail: 'SHAP & LIME for transparent, interpretable predictions' },
        { name: 'Evaluation', detail: 'Accuracy, Precision, Recall, F1-Score' },
      ],
    },
  },
  {
    id: 'driver-behaviour-monitoring',
    title: 'Real-Time Driver Behavior & Safety Monitoring',
    tagline: 'System and Method for Driver Safety Monitoring',
    category: 'Machine Learning · Sensor Fusion',
    status: null,
    tech: ['Facial Tracking', 'OBD-II Telematics', 'Accelerometer & Gyroscope Sensors', 'Machine Learning'],
    coverGradient: 'from-primary/40 via-highlight/30 to-accent/30',
    liveUrl: null,
    overview:
      'An AI-based system for monitoring driver behavior and enhancing road safety using facial tracking, OBD-II telematics, and accelerometer/gyroscope sensor data.',
    features: [
      'Multi-sensor data fusion (facial tracking, OBD-II, accelerometer, gyroscope)',
      'Detection of driver fatigue, distraction, and unsafe driving behaviors',
      'Machine learning-based behavioral analysis',
      'Reduced false positives across varying road conditions',
    ],
    process: {
      label: 'Approach',
      steps: [
        { name: 'Sensor Input', detail: 'Facial tracking + OBD-II telematics + accelerometer & gyroscope' },
        { name: 'Data Fusion', detail: 'Multi-sensor data integrated into a single behavioral signal' },
        { name: 'ML Analysis', detail: 'Machine learning algorithms for behavioral analysis' },
        { name: 'Output', detail: 'Fatigue, distraction, and unsafe-driving detection with reduced false positives' },
      ],
    },
  },
]
