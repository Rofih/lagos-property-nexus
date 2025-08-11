import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  withCredentials: true, // important for HTTP-only cookies
})

api.interceptors.response.use(
  (res) => res,
  (error) => {
    // You can centralize toast here if needed
    return Promise.reject(error)
  }
)
