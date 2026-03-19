import SettingsSidebar from '../../components/SettingsSidebar'
import { usePasswordToggle } from '../../hooks/usePasswordToggle'

export default function SettingsSecurity() {
  const [showOldPass, toggleOldPass] = usePasswordToggle()
  const [showNewPass, toggleNewPass] = usePasswordToggle()
  const [showConfirmPass, toggleConfirmPass] = usePasswordToggle()

  return (
    <div className="max-w-[1240px] mb-12 mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
        <SettingsSidebar />

        {/* Content */}
        <div className="grow max-w-4xl space-y-6 w-full">
          {/* Password */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Password</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Old Password</label>
                <div className="relative">
                  <input type={showOldPass ? "text" : "password"} placeholder="Enter password"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 pr-12" />
                  <button type="button" onClick={toggleOldPass}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-slate-600 h-8 w-8 flex items-center justify-center">
                    <i className={`ph ${showOldPass ? 'ph-eye' : 'ph-eye-slash'} text-xl`}></i>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">New Password</label>
                <div className="relative">
                  <input type={showNewPass ? "text" : "password"} placeholder="Enter password"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 pr-12" />
                  <button type="button" onClick={toggleNewPass}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-slate-600 h-8 w-8 flex items-center justify-center">
                    <i className={`ph ${showNewPass ? 'ph-eye' : 'ph-eye-slash'} text-xl`}></i>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Confirm New Password</label>
                <div className="relative">
                  <input type={showConfirmPass ? "text" : "password"} placeholder="Re-enter password"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 pr-12" />
                  <button type="button" onClick={toggleConfirmPass}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-slate-600 h-8 w-8 flex items-center justify-center">
                    <i className={`ph ${showConfirmPass ? 'ph-eye' : 'ph-eye-slash'} text-xl`}></i>
                  </button>
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
