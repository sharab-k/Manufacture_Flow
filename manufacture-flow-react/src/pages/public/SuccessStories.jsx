import { Link } from 'react-router-dom'

export default function SuccessStories() {
  return (
    <main className="grow max-w-7xl mx-auto w-full px-4 md:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Success Stories</h1>
        <p className="text-slate-500 leading-relaxed mb-12">
          See how forward-thinking brands are using Donau AI to streamline detailed production and bring products to market faster.
        </p>
        
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 bg-gray-200 rounded-xl h-48">
              {/* Placeholder for story image */}
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                <i className="ph ph-image text-3xl"></i>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-3">Apparel</div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">How UrbanThreads reduced lead time by 40%</h2>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                "Before Donau AI, we spent weeks back-and-forth on email just to clarify technical specs. With the AI Brief Assistant, we got matched with a perfect manufacturer in 3 days."
              </p>
              <Link to="/signup" className="text-blue-600 font-semibold text-sm hover:underline">Read full story</Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 bg-gray-200 rounded-xl h-48">
              {/* Placeholder for story image */}
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                <i className="ph ph-image text-3xl"></i>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full mb-3">Electronics</div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">TechNova's journey to sustainable sourcing</h2>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                "Finding verified eco-friendly manufacturers was a nightmare. Donau AI made it simple to filter by certification and find partners who share our values."
              </p>
              <Link to="/signup" className="text-blue-600 font-semibold text-sm hover:underline">Read full story</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
