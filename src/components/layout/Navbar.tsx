
import { NavLink, Link } from 'react-router-dom'
import { Building2, LogIn, UserPlus, Menu, X, Shield, FileText, Phone, Info } from 'lucide-react'
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 border-b border-gray-200 shadow-sm">
      {/* Government Header */}
      <div className="bg-green-800 text-white py-2">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Lagos State Government - Ministry of Physical Planning and Urban Development</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Emergency: +234-1-234-5678</span>
            <span>|</span>
            <span>info@lagosstate.gov.ng</span>
          </div>
        </div>
      </div>
      
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-800 text-white shadow-lg transition-transform group-hover:scale-105">
            <Building2 className="h-6 w-6" />
          </div>
          <div className="hidden sm:block">
            <div className="text-xl font-bold text-gray-900">Lagos State Property Portal</div>
            <div className="text-sm text-gray-600">Official Property Registration & Regulation Platform</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navCls} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navCls}>
            About Us
          </NavLink>
          <NavLink to="/services" className={navCls}>
            Services
          </NavLink>
          <NavLink to="/regulations" className={navCls}>
            Regulations
          </NavLink>
          <NavLink to="/contact" className={navCls}>
            Contact
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
              <Button asChild variant="outline" size="sm" className="border-green-800 text-green-800 hover:bg-green-50">
                <Link to="/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </Button>
              <Button asChild variant="default" size="sm" className="bg-green-800 hover:bg-green-700">
                <Link to="/register">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Register
                </Link>
              </Button>
            </>
          ) : (
            <Button variant="outline" size="sm" className="border-green-800 text-green-800 hover:bg-green-50" onClick={logout}>
              Logout
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-900 transition-colors hover:bg-gray-50 md:hidden"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur-md md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex flex-col gap-4">
              <NavLink 
                to="/" 
                className="block py-2 text-gray-900 hover:text-green-800 transition-colors" 
                end
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className="block py-2 text-gray-900 hover:text-green-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink 
                to="/services" 
                className="block py-2 text-gray-900 hover:text-green-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink 
                to="/regulations" 
                className="block py-2 text-gray-900 hover:text-green-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Regulations
              </NavLink>
              <NavLink 
                to="/contact" 
                className="block py-2 text-gray-900 hover:text-green-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
              {isAuthenticated && role && (
                <NavLink 
                  to={dashboardPath} 
                  className="block py-2 text-gray-900 hover:text-green-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </NavLink>
              )}
              
              <div className="mt-4 flex flex-col gap-2 border-t border-gray-200 pt-4">
                {!isAuthenticated ? (
                  <>
                    <Button asChild variant="outline" size="sm" className="justify-start border-green-800 text-green-800 hover:bg-green-50">
                      <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                        <LogIn className="mr-2 h-4 w-4" />
                        Login
                      </Link>
                    </Button>
                    <Button asChild variant="default" size="sm" className="justify-start bg-green-800 hover:bg-green-700">
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
                    className="justify-start border-green-800 text-green-800 hover:bg-green-50"
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
