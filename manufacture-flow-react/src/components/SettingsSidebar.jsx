import { Link, useLocation } from 'react-router-dom'

export default function SettingsSidebar() {
  const location = useLocation()
  const path = location.pathname

  const isAccount = path === '/settings/account'
  const isManufacturer = path === '/settings/manufacturer'
  const isSecurity = path === '/settings/security'

  return (
    <div className="w-full md:w-64 flex flex-col gap-2 shrink-0 overflow-x-auto">
      <Link to="/settings/account"
        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors whitespace-nowrap ${
          isAccount ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-gray-50 hover:text-slate-900'
        }`}>
        <i className="ph ph-user-circle text-lg"></i>
        Account
      </Link>
      <Link to="/settings/manufacturer"
        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors whitespace-nowrap ${
          isManufacturer ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-gray-50 hover:text-slate-900'
        }`}>
        <i className="ph ph-buildings text-lg"></i>
        Manufacturer Info
      </Link>
      <Link to="/settings/security"
        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors whitespace-nowrap ${
          isSecurity ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-gray-50 hover:text-slate-900'
        }`}>
        <i className="ph ph-lock-key text-lg"></i>
        Security
      </Link>
    </div>
  )
}
