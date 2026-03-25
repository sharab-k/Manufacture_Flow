import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import donauLogo from '../../assets/images/donau-logo.png'
import NotificationDropdown from '../NotificationDropdown'
import HamburgerDropdown from '../HamburgerDropdown'
import MobileDrawer from '../MobileDrawer'
import DashboardFooter from '../DashboardFooter'
import AIChatPopup from '../AIChatPopup'

export default function DashboardLayout({ children, showAIChat = true }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const currentPath = location.pathname

  const isActive = (path) => {
    if (path === '/dashboard') {
      return currentPath === '/dashboard' || currentPath === '/dashboard-empty'
    }
    return currentPath.startsWith(path)
  }

  const navLinkClass = (path) => {
    if (isActive(path)) {
      return 'flex items-center gap-2 text-[14px] font-bold text-[#448ae6] h-full border-b-[3px] border-[#448ae6]'
    }
    return 'flex items-center gap-2 text-[14px] font-medium text-[#64748b] hover:text-[#0e1726] transition-colors h-full border-b-[3px] border-transparent'
  }

  const handleMobileMenuToggle = (e) => {
    e.stopPropagation()
    if (window.innerWidth < 768) {
      setMobileMenuOpen(true)
    }
  }

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false)
  }

  // Apply slide-up animation to main content on page load
  useEffect(() => {
    const main = document.querySelector('main')
    if (main) {
      main.classList.add('animate-slide-up')
    }
  }, [currentPath])

  return (
    <div className="bg-white flex flex-col overflow-y-auto min-h-screen">
      {/* Mobile Drawer */}
      <MobileDrawer isOpen={mobileMenuOpen} onClose={handleMobileMenuClose} />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 md:px-8 shrink-0 h-[72px] sticky top-0 z-50">
          <div className="max-w-[1240px] mx-auto w-full h-full flex items-center justify-between">
            <div className="flex items-center gap-[60px] h-full">
              {/* Logo */}
              <Link to="/home" className="flex items-center">
                <img src={donauLogo} alt="Donau AI" className="h-6 w-auto" />
              </Link>

              {/* Nav Links */}
              <nav className="hidden md:flex items-center gap-[40px] h-full">
                <Link to="/dashboard" className={navLinkClass('/dashboard')}>
                  <i className="ph ph-house text-[18px]"></i>
                  Dashboard
                </Link>
                <Link to="/briefs" className={navLinkClass('/briefs')}>
                  <i className="ph ph-file-text text-[18px]"></i>
                  Brief Invitations
                </Link>
                <Link to="/messages" className={navLinkClass('/messages')}>
                  <i className="ph ph-chat-circle-dots text-[18px]"></i>
                  Messages
                </Link>
              </nav>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Notifications */}
              <NotificationDropdown />

              {/* User Profile Desktop */}
              <div className="hidden md:flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#448ae6] text-white text-[14px] font-bold cursor-pointer">
                M
              </div>

              {/* Menu */}
              <HamburgerDropdown />
            </div>
          </div>
        </header>

        {/* Main Scrollable Area */}
        <main className="flex-1 w-full max-w-[1400px] mx-auto p-4 md:p-8">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <DashboardFooter />

      {/* AI Chat Popup */}
      {showAIChat && <AIChatPopup />}
    </div>
  )
}
