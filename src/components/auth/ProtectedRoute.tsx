import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/features/auth/store'
import type { Role } from '@/features/auth/types'

interface ProtectedRouteProps {
  allowedRoles?: Role[]
  redirectTo?: string
}

const ProtectedRoute = ({ allowedRoles, redirectTo = '/login' }: ProtectedRouteProps) => {
  const { isAuthenticated, role } = useAuthStore()

  if (!isAuthenticated) return <Navigate to={redirectTo} replace />
  if (allowedRoles && role && !allowedRoles.includes(role)) return <Navigate to={redirectTo} replace />

  return <Outlet />
}

export default ProtectedRoute
