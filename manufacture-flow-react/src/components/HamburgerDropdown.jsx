import { Link } from 'react-router-dom'
import { useDropdown } from '../hooks/useDropdown'

export default function HamburgerDropdown() {
  const { isOpen, toggle, ref } = useDropdown()

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={toggle}
        className="w-[34px] h-[34px] rounded-full bg-gray-100 flex items-center justify-center text-[#64748b] hover:bg-gray-200 transition-colors"
      >
        <i className="ph ph-list text-[18px] font-bold"></i>
      </button>

      {/* Hamburger Menu Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl border border-[#e2e8f0] shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-50 animate-fade-in text-left">
          <div className="px-6 pt-6 pb-5 border-b border-gray-50">
            <p className="text-[15px] font-bold text-[#0e1726]">Mark Thompson</p>
            <p className="text-[13px] text-[#64748b] mt-0.5">mark@donau.ai</p>
          </div>
          <div className="p-2">
            <Link to="/dashboard" onClick={toggle} className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-[#64748b] hover:bg-[#f8fafc] hover:text-[#448ae6] transition-colors">
              <i className="ph ph-house text-[18px]"></i>
              Dashboard
            </Link>
            <Link to="/briefs" onClick={toggle} className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-[#64748b] hover:bg-[#f8fafc] hover:text-[#448ae6] transition-colors">
              <i className="ph ph-briefcase text-[18px]"></i>
              My Briefs
            </Link>
            <Link to="/messages" onClick={toggle} className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-[#64748b] hover:bg-[#f8fafc] hover:text-[#448ae6] transition-colors">
              <i className="ph ph-chat-circle-dots text-[18px]"></i>
              Messages
            </Link>
          </div>
          <div className="p-2 border-t border-gray-50">
            <Link to="/settings/account" onClick={toggle} className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-[#64748b] hover:bg-[#f8fafc] hover:text-[#448ae6] transition-colors">
              <i className="ph ph-gear text-[18px]"></i>
              Settings
            </Link>
            <a href="#" onClick={e => e.preventDefault()} className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-[#64748b] hover:bg-[#f8fafc] hover:text-[#448ae6] transition-colors">
              <i className="ph ph-globe text-[18px]"></i>
              Language
            </a>
          </div>
          <div className="p-2 border-t border-gray-50">
            <Link to="/signin" onClick={toggle} className="flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium text-[#ef4444] hover:bg-red-50 transition-colors">
              <i className="ph ph-sign-out text-[18px]"></i>
              Sign Out
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
