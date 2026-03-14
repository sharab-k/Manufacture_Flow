import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="grow max-w-7xl mx-auto w-full px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Connecting Brands with World-Class Manufacturers</h1>
        <p className="text-lg text-slate-500 mb-8 leading-relaxed">Divestreamline your production process with our
          AI-powered platform. Find the perfect partner, manage briefs, and launch products faster.</p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/signup"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">Start
            for Free</Link>
          <Link to="/for-brands"
            className="px-6 py-3 bg-white border border-gray-200 hover:border-blue-600 hover:text-blue-600 text-slate-700 font-bold rounded-lg transition-colors">Learn
            More</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="ph ph-rocket-launch text-2xl"></i>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Matching</h3>
          <p className="text-slate-500">Get matched with verified manufacturers in days, not months.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center">
          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="ph ph-chat-circle-text text-2xl"></i>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Seamless Communication</h3>
          <p className="text-slate-500">Manage all your conversations and files in one secure place.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-gray-100 text-center">
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <i className="ph ph-shield-check text-2xl"></i>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Verified Partners</h3>
          <p className="text-slate-500">Work with manufacturers that have been vetted for quality and reliability.</p>
        </div>
      </div>
    </main>
  )
}
