import { Outlet, Link } from 'react-router-dom'
import donauLogo from '../../assets/images/donau-logo.png'

export default function AuthLayout() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="w-full px-4 md:px-8 py-6 flex justify-between items-center border-b border-gray-100 bg-white">
        <Link to="/home" className="flex items-center gap-2">
          <img src={donauLogo} alt="Donau AI" className="h-8 md:h-10 w-auto" />
        </Link>

        <div className="flex items-center gap-2 text-slate-600 cursor-pointer hover:text-slate-900">
          <img
            src="https://flagcdn.com/w20/gb.png"
            srcSet="https://flagcdn.com/w40/gb.png 2x"
            width="20"
            alt="English"
          />
          <span className="font-medium text-sm">English</span>
          <i className="ph ph-caret-down text-xs"></i>
        </div>
      </header>

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <footer className="w-full pb-14 flex flex-col items-center gap-6 text-[14px] text-[#334155]">
        <div className="flex items-center gap-3">
          <Link to="/privacy-policy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
          <span className="text-slate-300 font-light">|</span>
          <Link to="/terms-of-service" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
        </div>
        <div className="flex items-center gap-2 text-[#64748b]">
          <span>&copy; 2026 DonauAI</span>
        </div>
      </footer>
    </div>
  )
}
