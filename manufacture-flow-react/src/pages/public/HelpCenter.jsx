import { Link } from 'react-router-dom'

export default function HelpCenter() {
  return (
    <main className="grow max-w-7xl mx-auto w-full px-4 md:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">How can we help you?</h1>
        <div className="max-w-xl mx-auto relative">
          <input type="text" placeholder="Search for articles..." className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <i className="ph ph-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg"></i>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Link to="/contact" className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-200 hover: transition-all group">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <i className="ph ph-user-circle text-xl"></i>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Account Management</h3>
          <p className="text-slate-500 text-sm">Managing your profile, password, and settings.</p>
        </Link>
        
        <Link to="/contact" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover: transition-all group">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <i className="ph ph-files text-xl"></i>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Creating Briefs</h3>
          <p className="text-slate-500 text-sm">Guides on using the brief editor and AI assistant.</p>
        </Link>

        <Link to="/contact" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover: transition-all group">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <i className="ph ph-handshake text-xl"></i>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Communicating</h3>
          <p className="text-slate-500 text-sm">Best practices for messaging manufacturers.</p>
        </Link>

        <Link to="/contact" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover: transition-all group">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <i className="ph ph-credit-card text-xl"></i>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Billing & Payments</h3>
          <p className="text-slate-500 text-sm">Information about subscriptions and payments.</p>
        </Link>

        <Link to="/contact" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover: transition-all group">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <i className="ph ph-shield-check text-xl"></i>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Verification</h3>
          <p className="text-slate-500 text-sm">How we verify manufacturers and ensure quality.</p>
        </Link>

        <Link to="/contact" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover: transition-all group">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <i className="ph ph-bug text-xl"></i>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Troubleshooting</h3>
          <p className="text-slate-500 text-sm">Solutions to common issues and error messages.</p>
        </Link>
      </div>
    </main>
  )
}
