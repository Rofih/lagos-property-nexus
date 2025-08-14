
import { NavLink, Link } from 'react-router-dom'
import { Building2, LogIn, UserPlus, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/features/auth/store'
import { useState } from 'react'

const Navbar = () => {
  const { isAuthenticated, role, logout } = useAuthStore()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const dashboardPath = role ? `/dashboard/${role === 'buyer' ? 'buyer' : role}` : '/'

  const navCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? 'text-primary font-medium border-b-2 border-primary pb-1' 
      : 'text-muted-foreground hover:text-foreground transition-colors duration-200'

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg transition-transform group-hover:scale-105">
            <Building2 className="h-5 w-5" />
          </div>
          <div className="hidden sm:block">
            <div className="text-lg font-bold text-foreground">Lagos Real Estate</div>
            <div className="text-xs text-muted-foreground">Find Your Dream Home</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
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

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          {!isAuthenticated ? (
            <>
              <Button asChild variant="outline" size="sm">
                <Link to="/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </Button>
              <Button asChild variant="default" size="sm">
                <Link to="/register">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Register
                </Link>
              </Button>
            </>
          ) : (
            <Button variant="outline" size="sm" onClick={logout}>
              Logout
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted md:hidden"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex flex-col gap-4">
              <NavLink 
                to="/" 
                className="block py-2 text-foreground hover:text-primary transition-colors" 
                end
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/utility-payments" 
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Utilities
              </NavLink>
              {isAuthenticated && role && (
                <NavLink 
                  to={dashboardPath} 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </NavLink>
              )}
              
              <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                {!isAuthenticated ? (
                  <>
                    <Button asChild variant="outline" size="sm" className="justify-start">
                      <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                        <LogIn className="mr-2 h-4 w-4" />
                        Login
                      </Link>
                    </Button>
                    <Button asChild variant="default" size="sm" className="justify-start">
                      <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                        <UserPlus className="mr-2 h-4 w-4" />
                        Register
                      </Link>
                    </Button>
                  </>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="justify-start"
                    onClick={() => {
                      logout()
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Logout
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
