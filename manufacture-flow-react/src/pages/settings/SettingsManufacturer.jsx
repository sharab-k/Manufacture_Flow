import SettingsSidebar from '../../components/SettingsSidebar'

export default function SettingsManufacturer() {
  return (
    <div className="max-w-[1240px] mb-12 mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
        <SettingsSidebar />

        {/* Content */}
        <div className="grow max-w-4xl space-y-6 w-full">
          {/* Manufacturing Information */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Manufacturing Information</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Manufacturer Slug</label>
                <input type="text" value="evergreen-apparel" disabled
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-slate-500 cursor-not-allowed" />
                <p className="text-[11px] text-slate-400 mt-1">Slug cannot be changed</p>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Organization Name</label>
                <input type="text" defaultValue="Evergreen Apparel Co."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Organization Bio</label>
                <textarea rows="4" defaultValue="Consumer Products"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"></textarea>
                <p className="text-[11px] text-slate-400 mt-1">Tell brands about your manufacturing capabilities and what makes you unique.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1.5">Year Established</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white">
                      <option>Select Year</option>
                      <option selected>2010</option>
                    </select>
                    <i className="ph ph-caret-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1.5">Employee Count Range</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white">
                      <option>Select Range</option>
                      <option selected>50-100</option>
                    </select>
                    <i className="ph ph-caret-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors">Save</button>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Capabilities</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Product Categories</label>
                <input type="text" placeholder="Enter items..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Manufacturing Capabilities</label>
                <input type="text" placeholder="Enter items..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Certifications</h2>
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-1.5">Certifications</label>
              <input type="text" placeholder="Enter items..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Phone Number</label>
                <input type="text" defaultValue="+1 512 555 0189"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Primary Contact Email</label>
                <input type="email" defaultValue="ameliaparker@gmail.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                <div className="flex items-start gap-2 mt-2">
                  <input type="checkbox" id="personal_email" defaultChecked
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <label htmlFor="personal_email" className="text-xs text-slate-500">Enter my personal email (ameliaparker@gmail.com)</label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Website</label>
                <input type="text" defaultValue="https://example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>
              <div className="flex justify-end">
                <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors">Save</button>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Address</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Address Line 1</label>
                <input type="text" defaultValue="Test Address 1"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Address Line 2</label>
                <input type="text" defaultValue="Test Address 2"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1.5">City</label>
                  <input type="text" defaultValue="Austin"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1.5">State/Province</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white">
                      <option selected>Texas</option>
                    </select>
                    <i className="ph ph-caret-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1.5">Postal Code</label>
                  <input type="text" defaultValue="73301"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1.5">Country</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white">
                      <option selected>United States</option>
                    </select>
                    <i className="ph ph-caret-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors">Save</button>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Social Media</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Twitter Profile</label>
                <input type="text" defaultValue="https://twitter.com/evergreenapparel"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">LinkedIn Company Page</label>
                <input type="text" defaultValue="https://linkedin.com/company/evergreenapparelco"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>
              <div className="flex justify-end">
                <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors">Save</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
