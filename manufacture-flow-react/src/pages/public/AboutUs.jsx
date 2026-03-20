import { Link } from "react-router-dom";

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

      {/* Footer Section from about-us.html */}
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
