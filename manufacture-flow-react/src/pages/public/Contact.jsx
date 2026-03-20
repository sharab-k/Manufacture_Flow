import { Link } from "react-router-dom";

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

      {/* Footer Section from contact.html */}
      <footer className="bg-white border-t border-gray-200 pt-16 pb-8 mt-16">
        <div className="max-w-350 mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4">
                <img src={require('../../assets/images/donau-logo.png')} alt="Donau AI" className="h-6 w-auto" />
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">AI-powered platform connecting brands with manufacturers</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link to="/home" className="hover:text-blue-600">Home</Link></li>
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
    </main>
  );
}
