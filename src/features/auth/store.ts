import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Role, User } from './types'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  role: Role | null
  login: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      role: null,
      login: (user) => set({ user, isAuthenticated: true, role: user.role }),
      logout: () => set({ user: null, isAuthenticated: false, role: null }),
    }),
    {
      name: 'auth-store',
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated, role: state.role })
    }
  )
)
