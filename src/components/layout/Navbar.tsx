import { NavLink, Link } from 'react-router-dom'
import { Building2, LogIn, UserPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/features/auth/store'

const Navbar = () => {
  const { isAuthenticated, role, logout } = useAuthStore()

  const dashboardPath = role ? `/dashboard/${role === 'buyer' ? 'buyer' : role}` : '/'

  const navCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'

  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="inline-flex items-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          <span className="font-semibold">Lagos Real Estate</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={navCls} end>
            Home
          </NavLink>
          <NavLink to="/utility-payments" className={navCls}>
            Utilities
          </NavLink>
          {isAuthenticated && role && (
            <NavLink to={dashboardPath} className={navCls}>
              Dashboard
            </NavLink>
          )}
        </div>
        <div className="flex items-center gap-2">
          {!isAuthenticated ? (
            <>
              <Button asChild variant="outline">
                <Link to="/login"><LogIn /> Login</Link>
              </Button>
              <Button asChild variant="default">
                <Link to="/register"><UserPlus /> Register</Link>
              </Button>
            </>
          ) : (
            <Button variant="outline" onClick={logout}>Logout</Button>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
