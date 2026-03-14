import { Link } from 'react-router-dom'

export default function AIBriefAssistant() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
          <i className="ph ph-robot text-2xl"></i>
        </div>
        <h1 className="text-3xl font-bold text-slate-900">AI Brief Assistant</h1>
      </div>

      <p className="text-slate-500 leading-relaxed mb-8">
        Create comprehensive and technical product briefs in minutes, not hours. Our AI assistant guides you
        through the process, ensuring no detail is overlooked.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Smart Suggestions</h3>
          <p className="text-slate-500 text-sm">Automatically suggests materials, certifications, and technical specifications based on your product category.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Instant Refinement</h3>
          <p className="text-slate-500 text-sm">Refines your language to be clearer and more professional for manufacturers.</p>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Ready to try it?</h2>
        <p className="text-slate-600 mb-6">Sign up today and create your first AI-enhanced brief.</p>
        <Link to="/signup"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors inline-block">
          Start Creating
        </Link>
      </div>
    </div>
  )
}
