export default function Contact() {
  return (
    <main className="grow max-w-7xl mx-auto w-full px-4 md:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Get in touch</h1>
          <p className="text-slate-500">Have questions about Donau AI? We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1.5">First Name</label>
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1.5">Last Name</label>
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Email</label>
                <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Message</label>
                <textarea rows="4" placeholder="How can we help?" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
              </div>
              <button type="button" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">Send Message</button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8 py-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Office</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                123 Innovation Drive,<br />
                Berlin, Germany 10115
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-500 text-sm">support@donau.ai</p>
              <p className="text-slate-500 text-sm">sales@donau.ai</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Social</h3>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><i className="ph ph-facebook-logo text-xl"></i></a>
                <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><i className="ph ph-instagram-logo text-xl"></i></a>
                <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><i className="ph ph-linkedin-logo text-xl"></i></a>
                <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><i className="ph ph-twitter-logo text-xl"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
