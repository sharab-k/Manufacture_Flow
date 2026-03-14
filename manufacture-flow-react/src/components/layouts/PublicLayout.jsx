import { Link } from 'react-router-dom'
import donauLogo from '../../assets/images/donau-logo.png'

export default function PublicLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header (Public) */}
      <header className="bg-white border-b border-gray-200 px-8 h-18 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Link to="/home">
            <img src={donauLogo} alt="Donau AI" className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/signin" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Sign In</Link>
          <Link to="/signup" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors">Get Started</Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="grow max-w-7xl mx-auto w-full px-8 py-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full px-4 md:px-8 py-6 text-sm text-slate-500 flex flex-col md:flex-row justify-center md:items-center gap-2 md:gap-4 text-center md:text-left bg-white border-t border-gray-100">
        <span>&copy; 2026 DonauAI</span>
        <span className="hidden md:block w-px h-3 bg-slate-300"></span>
        <div className="flex items-center justify-center gap-4">
          <Link to="/privacy-policy" className="hover:text-slate-900">Privacy Policy</Link>
          <span className="w-px h-3 bg-slate-300"></span>
          <Link to="/terms-of-service" className="hover:text-slate-900">Terms of Service</Link>
        </div>
      </footer>
    </div>
  )
}
