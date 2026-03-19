import SettingsSidebar from '../../components/SettingsSidebar'

export default function SettingsAccount() {
  return (
    <div className="max-w-[1240px] mb-12 mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
        <SettingsSidebar />

        {/* Content */}
        <div className="grow max-w-4xl space-y-6 w-full">
          {/* Personal Information */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Personal Information</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Email</label>
                <input type="email" value="michaelthompson@gmail.com" disabled
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-slate-500 cursor-not-allowed" />
                <p className="text-[11px] text-slate-400 mt-1">Email cannot be changed</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">First Name</label>
                <input type="text" defaultValue="Michael"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Last Name</label>
                <input type="text" defaultValue="Thompson"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Job Title</label>
                <input type="text" defaultValue="Product Manufacturer"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Date of Birth</label>
                <div className="relative">
                  <input type="text" defaultValue="28/12/1985"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
                  <i className="ph ph-calendar-blank absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Phone Number</label>
                <input type="text" defaultValue="+1 512 555 0189"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>

              <div className="flex justify-end">
                <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors">Save</button>
              </div>
            </div>
          </div>

          {/* Language & Timezone */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Language & Timezone</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Time Zone</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white">
                    <option>Eastern Time (US & Canada)</option>
                    <option>Central Time (US & Canada)</option>
                    <option>Pacific Time (US & Canada)</option>
                  </select>
                  <i className="ph ph-caret-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Language</label>
                <div className="relative">
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                  <i className="ph ph-caret-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
                </div>
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
