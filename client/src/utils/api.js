import axios from 'axios'

// In dev, Vite proxies /api to the Express server (see vite.config.js).
// In production, set VITE_API_URL to the deployed backend URL.
const baseURL = import.meta.env.VITE_API_URL || '/api'

export const api = axios.create({
  baseURL,
  timeout: 8000,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
