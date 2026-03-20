import { Link, useLocation } from "react-router-dom";

export default function MainHeader() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-8 shrink-0 h-[72px] sticky top-0 z-50">
      <div className="max-w-[1240px] mx-auto w-full h-full flex items-center justify-between">
        <div className="flex items-center gap-[60px] h-full">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center">
            {/* Inline SVG logo from dashboard-filled.html */}
            <svg width="113" height="28" viewBox="0 0 113 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_31_3001)">
                {/* ...SVG paths omitted for brevity, copy from HTML... */}
              </g>
              <defs>
                <clipPath id="clip0_31_3001">
                  <rect width="1920" height="1672" fill="white" transform="translate(-180.93 -35.5469)"/>
                </clipPath>
              </defs>
            </svg>
          </Link>
          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-[40px] h-full">
            <Link to="/dashboard" className={isActive("/dashboard") ? "flex items-center gap-2 text-[14px] font-bold text-[#448ae6] h-full border-b-[3px] border-[#448ae6]" : "flex items-center gap-2 text-[14px] font-medium text-[#64748b] hover:text-[#0e1726] transition-colors h-full border-b-[3px] border-transparent"}>
              <i className="ph ph-house text-[18px]"></i>
              Dashboard
            </Link>
            <Link to="/briefs" className={isActive("/briefs") ? "flex items-center gap-2 text-[14px] font-bold text-[#448ae6] h-full border-b-[3px] border-[#448ae6]" : "flex items-center gap-2 text-[14px] font-medium text-[#64748b] hover:text-[#0e1726] transition-colors h-full border-b-[3px] border-transparent"}>
              <i className="ph ph-file-text text-[18px]"></i>
              Brief Invitations
            </Link>
            <Link to="/messages" className={isActive("/messages") ? "flex items-center gap-2 text-[14px] font-bold text-[#448ae6] h-full border-b-[3px] border-[#448ae6]" : "flex items-center gap-2 text-[14px] font-medium text-[#64748b] hover:text-[#0e1726] transition-colors h-full border-b-[3px] border-transparent"}>
              <i className="ph ph-chat-dots text-[18px]"></i>
              Messages
            </Link>
          </nav>
        </div>
        {/* Right Actions (notifications, profile, menu) can be added here */}
      </div>
    </header>
  );
}
