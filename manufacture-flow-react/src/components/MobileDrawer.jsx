import { Link } from 'react-router-dom'
import donauLogo from '../assets/images/donau-logo.png'

export default function MobileDrawer({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-gray-900/50 z-[60] backdrop-blur-sm transition-opacity ${isOpen ? '' : 'hidden'}`}
        onClick={onClose}
      ></div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white z-[70] transform transition-transform duration-300 flex flex-col ${isOpen ? '' : '-translate-x-full'}`}
      >
        <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
          <img src={donauLogo} alt="Donau AI" className="h-6 w-auto" />
        </div>

        {/* User Profile (Mobile Only) */}
        <div className="px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
              MT
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-900">Mark Thompson</p>
              <p className="text-xs text-slate-500 font-medium truncate">mark@donau.ai</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2 flex-1">
          <Link
            to="/dashboard"
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 text-blue-600 font-medium text-sm transition-colors"
          >
            <i className="ph ph-squares-four text-lg"></i>
            Dashboard
          </Link>
          <Link
            to="/briefs"
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-gray-50 hover:text-slate-900 font-medium text-sm transition-colors"
          >
            <i className="ph ph-briefcase text-lg"></i>
            Product Briefs
          </Link>
          <Link
            to="/messages"
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-gray-50 hover:text-slate-900 font-medium text-sm transition-colors"
          >
            <i className="ph ph-chat-circle-dots text-lg"></i>
            Messages
          </Link>
        </nav>

        {/* User Actions (Mobile Only) */}
        <div className="p-4 border-t border-gray-100 space-y-1">
          <Link
            to="/settings/account"
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-gray-50 hover:text-slate-900 font-medium text-sm transition-colors"
          >
            <i className="ph ph-user text-lg"></i>
            My Profile
          </Link>
          <Link
            to="/settings/account"
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-gray-50 hover:text-slate-900 font-medium text-sm transition-colors"
          >
            <i className="ph ph-gear text-lg"></i>
            Settings
          </Link>
          <Link
            to="/help-center"
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-gray-50 hover:text-slate-900 font-medium text-sm transition-colors"
          >
            <i className="ph ph-headset text-lg"></i>
            Support
          </Link>
          <Link
            to="/signin"
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 font-medium text-sm transition-colors"
          >
            <i className="ph ph-sign-out text-lg"></i>
            Logout
          </Link>
        </div>
      </div>
    </>
  )
}
