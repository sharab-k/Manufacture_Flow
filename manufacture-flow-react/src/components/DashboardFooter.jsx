import { Link } from 'react-router-dom'
import donauLogo from '../assets/images/donau-logo.png'

export default function DashboardFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 shrink-0 relative mt-10 w-full">
      <div className="max-w-[1240px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-10">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img src={donauLogo} alt="Donau AI" className="h-6 w-auto" />
            </div>
            <p className="text-[#475569] text-[13px] leading-relaxed max-w-[280px]">
              AI-powered platform connecting brands<br />with manufacturers
            </p>
          </div>
          <div className="col-span-1 md:col-span-1"></div> {/* Spacer */}

          <div className="col-span-1">
            <h4 className="font-bold text-[#0e1726] text-[14px] mb-4">Platform</h4>
            <ul className="space-y-[12px] text-[#475569] text-[13px]">
              <li><a href="#" className="hover:text-[#448ae6] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#448ae6] transition-colors">Brands</a></li>
              <li><a href="#" className="hover:text-[#448ae6] transition-colors">Manufacturers</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold text-[#0e1726] text-[14px] mb-4">Company</h4>
            <ul className="space-y-[12px] text-[#475569] text-[13px]">
              <li><a href="#" className="hover:text-[#448ae6] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#448ae6] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#448ae6] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold text-[#0e1726] text-[15px] mb-5">Contact</h4>
            <ul className="text-[#0e1726] text-[15px] mb-6">
              <li><a href="mailto:info@donauai.com" className="hover:text-[#448ae6] transition-colors">info@donauai.com</a></li>
            </ul>
            <div className="flex items-center gap-[16px]">
              <a href="#" className="w-[42px] h-[42px] rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#0e1726] hover:bg-[#e2e8f0] transition-colors">
                <i className="fa-brands fa-facebook-f text-[19px]"></i>
              </a>
              <a href="#" className="w-[42px] h-[42px] rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#0e1726] hover:bg-[#e2e8f0] transition-colors">
                <i className="fa-brands fa-instagram text-[23px]"></i>
              </a>
              <a href="#" className="w-[42px] h-[42px] rounded-full bg-[#f1f5f9] flex items-center justify-center text-[#0e1726] hover:bg-[#e2e8f0] transition-colors">
                <i className="fa-brands fa-linkedin-in text-[19px]"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-[#64748b]">
          <p>&copy; 2026 DonauApp</p>
          <div className="flex items-center gap-[6px] cursor-pointer hover:text-[#0e1726]">
            <i className="ph ph-globe text-[16px]"></i>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
