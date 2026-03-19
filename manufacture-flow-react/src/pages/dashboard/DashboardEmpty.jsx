import { Link } from 'react-router-dom'

const statsData = [
  { label: 'Total Brief', value: '-', icon: 'ph-file-text' },
  { label: 'New Brief', value: '-', icon: 'ph-file-plus' },
  { label: 'Active Brief', value: '-', icon: 'ph-check-circle' },
]

export default function DashboardEmpty() {
  return (
    <div className="max-w-[1240px] mb-12">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Manufacture Dashboard</h1>
        <p className="text-slate-500 text-sm mt-1">Review invitations and manage your proposals</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {statsData.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 flex items-center gap-6">
            <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-slate-500">
              <i className={`ph ${stat.icon} text-2xl`}></i>
            </div>
            <div>
              <span className="block text-sm font-medium text-slate-500">{stat.label}</span>
              <span className="block text-xl font-bold text-slate-900 mt-1">{stat.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Briefs (Span 2) */}
        <div className="col-span-1 lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-900">Recent Briefs</h3>
            <Link to="/briefs" className="text-sm text-blue-600 font-medium hover:underline">View All</Link>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 h-80 flex flex-col items-center justify-center text-center p-8">
            <div className="mb-4">
              <i className="ph ph-file-search text-4xl text-slate-300"></i>
            </div>
            <h4 className="font-bold text-slate-900 mb-1">No Invites Yet</h4>
            <p className="text-slate-500 text-sm max-w-xs mx-auto">
              No briefs have been shared to you yet. When a brand invites you, you'll see their brief here.
            </p>
          </div>
        </div>

        {/* Notifications (Span 1) */}
        <div className="col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-900">Notifications</h3>
            <a href="javascript:void(0)" className="text-sm text-blue-600 font-medium hover:underline">View All</a>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 h-48 flex flex-col items-center justify-center text-center p-6">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-slate-400 mb-3">
              <i className="ph ph-clock text-xl"></i>
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">No Notifications Yet</h4>
            <p className="text-xs text-slate-500">New updates will appear here when available.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
