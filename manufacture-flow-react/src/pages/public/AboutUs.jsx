export default function AboutUs() {
  return (
    <main className="grow max-w-7xl mx-auto w-full px-4 md:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">About Us</h1>
        <p className="text-lg text-slate-500 mb-12 leading-relaxed">
          Donau AI is on a mission to modernize global manufacturing supply chains. We believe that finding the right partner shouldn't be a gamble.
        </p>

        <div className="bg-white rounded-2xl p-8 border border-gray-200 mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Our Story</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Founded in 2024, Donau AI was born from the frustration of finding reliable manufacturers for custom products. Traditional methods—trade shows, cold emails, and fragmented directories—were inefficient and risky. We built Donau AI to bring trust, transparency, and technology to the sourcing process.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Today, we connect thousands of brands with vetted manufacturers worldwide, processing millions of dollars in orders and helping brings innovative products to life.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <i className="ph ph-handshake text-xl"></i>
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Trust First</h3>
            <p className="text-slate-500 text-sm">We verify every manufacturer to ensure safety and quality.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4">
              <i className="ph ph-lightbulb text-xl"></i>
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Innovation</h3>
            <p className="text-slate-500 text-sm">We use AI to solve complex problems in simple ways.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4">
              <i className="ph ph-globe-hemisphere-west text-xl"></i>
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Global Impact</h3>
            <p className="text-slate-500 text-sm">We empower businesses of all sizes to reach global markets.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
