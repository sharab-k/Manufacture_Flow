import { Outlet, Link, useLocation } from 'react-router-dom'

export default function PublicLayout() {
  const location = useLocation()
  const isHome = location.pathname === '/home' || location.pathname === '/'

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header (Public) */}
      <header className="bg-white border-b border-gray-200 px-4 md:px-8 h-18 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src="/src/images/donau-logo.png" alt="Donau AI" className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/signin" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Sign In</Link>
          <Link to="/signup" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors">Get Started</Link>
        </div>
      </header>

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      {isHome ? (
        <footer className="w-full px-4 md:px-8 py-6 text-sm text-slate-500 flex flex-col md:flex-row justify-center md:items-center gap-2 md:gap-4 text-center md:text-left bg-white border-t border-gray-100">
          <span>&copy; 2026 DonauAI</span>
          <span className="hidden md:block w-px h-3 bg-slate-300"></span>
          <div className="flex items-center justify-center gap-4">
            <Link to="/privacy-policy" className="hover:text-slate-900">Privacy Policy</Link>
            <span className="w-px h-3 bg-slate-300"></span>
            <Link to="/terms-of-service" className="hover:text-slate-900">Terms of Service</Link>
          </div>
        </footer>
      ) : (
        <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
              <div className="col-span-1 md:col-span-2">
                <div className="mb-4">
                  <img src="/src/images/donau-logo.png" alt="Donau AI" className="h-8 w-auto" />
                </div>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">AI-powered platform connecting brands with manufacturers</p>
              </div>
              
              <div>
                <h4 className="font-bold text-slate-900 mb-4">Platform</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                  <li><Link to="/for-brands" className="hover:text-blue-600">For Brands</Link></li>
                  <li><Link to="/for-manufacturers" className="hover:text-blue-600">For Manufacturers</Link></li>
                  <li><Link to="/ai-brief-assistant" className="hover:text-blue-600">AI Brief Assistant</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li><Link to="/api-documentation" className="hover:text-blue-600">API Documentation</Link></li>
                  <li><Link to="/help-center" className="hover:text-blue-600">Help Center</Link></li>
                  <li><Link to="/product-categories" className="hover:text-blue-600">Product Categories</Link></li>
                  <li><Link to="/success-stories" className="hover:text-blue-600">Success Stories</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li><Link to="/about-us" className="hover:text-blue-600">About Us</Link></li>
                  <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
                  <li><Link to="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link></li>
                  <li><Link to="/terms-of-service" className="hover:text-blue-600">Terms of Service</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <p>&copy; 2026 DonauApp</p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 cursor-pointer hover:text-slate-600">
                  <i className="ph ph-globe"></i>
                  <span>English</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:text-slate-600">
                  <i className="ph ph-currency-eur"></i>
                  <span>EUR</span>
                </div>
                <div className="flex gap-4">
                  <a href="https://facebook.com" className="hover:text-blue-600"><i className="ph ph-facebook-logo text-lg"></i></a>
                  <a href="https://instagram.com" className="hover:text-blue-600"><i className="ph ph-instagram-logo text-lg"></i></a>
                  <a href="https://linkedin.com" className="hover:text-blue-600"><i className="ph ph-linkedin-logo text-lg"></i></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}
