import { Link } from 'react-router-dom'

const statsData = [
  { label: 'New Invites', value: '15', icon: 'ph-tray' },
  { label: 'Under Discussion', value: '2', icon: 'ph-envelope-simple' },
  { label: 'Active Proposals', value: '3', icon: 'ph-file-text' },
  { label: 'Matched Briefs', value: '5', icon: 'ph-check-circle' },
]

const briefsData = [
  {
    title: 'Premium Vitamin D3 Supplement',
    company: 'Evergreenapparel.co',
    status: 'Invited',
    statusColor: 'bg-[#e0e7ff] text-[#6366f1]',
    category: 'Dietry Supplements',
    budget: '€1000 - €100000',
    units: '400 units',
    date: '2026-04-15',
  },
  {
    title: 'Premium Vitamin D3 Supplement',
    company: 'Evergreenapparel.co',
    status: 'Proposal Submitted',
    statusColor: 'bg-[#cffafe] text-[#0ea5e9]',
    category: 'Dietry Supplements',
    budget: '€1000 - €100000',
    units: '400 units',
    date: '2026-04-15',
  },
  {
    title: 'Premium Vitamin D3 Supplement',
    company: 'Evergreenapparel.co',
    status: 'Matched',
    statusColor: 'bg-[#fef3c7] text-[#f59e0b]',
    category: 'Dietry Supplements',
    budget: '€1000 - €100000',
    units: '400 units',
    date: '2026-04-15',
  },
]

const notificationsData = [
  {
    title: 'New manufacturer match',
    text: '3 new manufacturers have been matched to your vitamin supplement brief.',
    badge: 'New',
  },
  {
    title: 'Brief published',
    text: "Your 'Premium Vitamin D3 Supplement' brief has been successfully published",
    badge: null,
  },
  {
    title: 'Draft reminder',
    text: "You have 2 drafts that haven't been updated in over a week",
    badge: null,
  },
  {
    title: 'Brief published',
    text: "Your 'Premium Vitamin D3 Supplement' brief has been successfully published",
    badge: null,
  },
  {
    title: 'Draft reminder',
    text: "You have 2 drafts that haven't been updated in over a week",
    badge: null,
  },
]

export default function DashboardFilled() {
  return (
    <div className="max-w-[1240px] mx-auto mb-10">
      {/* Page Header */}
      <div className="mb-6 mt-4">
        <h1 className="text-[24px] font-bold text-[#0e1726] mb-1">Manufacture Dashboard</h1>
        <p className="text-[#64748b] text-[14px]">Review invitations and manage your proposals</p>
      </div>

      {/* Alert Banner */}
      <div className="bg-[#f0f9ff] border border-[#bae6fd] rounded-[10px] p-2 pr-4 flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-[8px] bg-[#448ae6] flex items-center justify-center text-white shrink-0">
            <i className="ph ph-sparkle text-[20px]"></i>
          </div>
          <p className="text-[#0e1726] text-[14px]">
            A brand has invited you to review this brief. Take a look to see if it matches your capabilities.
          </p>
        </div>
        <button className="text-[#448ae6] text-[14px] font-bold underline hover:text-blue-700 whitespace-nowrap mt-3 md:mt-0 p-2 md:p-0">
          Review Brief
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {statsData.map((stat, i) => (
          <div key={i} className="p-[20px] pb-[16px] border border-[#e2e8f0] bg-white rounded-[16px] flex items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <div>
              <span className="block text-[13px] text-[#64748b] mb-[6px]">{stat.label}</span>
              <span className="block text-[24px] font-bold text-[#0e1726] leading-none">{stat.value}</span>
            </div>
            <div className="w-12 h-12 rounded-[12px] bg-[#f8fafc] flex items-center justify-center border border-gray-100">
              <i className={`ph ${stat.icon} text-[20px] text-[#334155]`}></i>
            </div>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Briefs (Span 2) */}
        <div className="col-span-1 xl:col-span-2 bg-white border border-[#e2e8f0] rounded-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col overflow-hidden h-fit">
          <div className="flex justify-between items-center p-6 border-b border-[#e2e8f0]">
            <h3 className="font-bold text-[#0e1726] text-[16px]">Recent Briefs</h3>
            <Link to="/briefs" className="text-[14px] text-[#448ae6] font-medium hover:underline">View All</Link>
          </div>

          <div className="flex flex-col gap-5 p-6">
            {briefsData.map((brief, i) => (
              <div key={i} className="p-6 relative bg-[#f4f6f9] rounded-[16px]">
                <Link
                  to="/brief-detail"
                  className="absolute top-6 right-6 flex items-center gap-1 text-[#448ae6] text-[14px] font-medium hover:underline hover:opacity-80"
                >
                  View Details <i className="ph ph-arrow-up-right text-[16px]"></i>
                </Link>
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-bold text-[#0e1726] text-[16px]">{brief.title}</h4>
                    <span className={`px-3 py-1 rounded-full ${brief.statusColor} text-[13px] font-medium`}>{brief.status}</span>
                    <i className="ph ph-info text-[#94a3b8] text-[18px]"></i>
                  </div>
                  <p className="text-[#64748b] text-[14px] mb-5">{brief.company}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-[#334155] px-4 py-1.5 rounded-full border border-gray-200 bg-white">
                      <i className="ph ph-file-text text-[16px] text-[#64748b]"></i>
                      <span className="text-[13px] font-medium">{brief.category}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#334155] px-4 py-1.5 rounded-full border border-gray-200 bg-white">
                      <i className="ph ph-wallet text-[16px] text-[#64748b]"></i>
                      <span className="text-[13px] font-medium">{brief.budget}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#334155] px-4 py-1.5 rounded-full border border-gray-200 bg-white">
                      <i className="ph ph-package text-[16px] text-[#64748b]"></i>
                      <span className="text-[13px] font-medium">{brief.units}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#334155] px-4 py-1.5 rounded-full border border-gray-200 bg-white">
                      <i className="ph ph-calendar-blank text-[16px] text-[#64748b]"></i>
                      <span className="text-[13px] font-medium">{brief.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications (Span 1) */}
        <div className="col-span-1 bg-white border border-[#e2e8f0] rounded-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col overflow-hidden h-fit">
          <div className="flex justify-between items-center p-6 border-b border-[#e2e8f0]">
            <h3 className="font-bold text-[#0e1726] text-[16px]">Notifications</h3>
            <a href="#" className="text-[14px] text-[#448ae6] font-medium hover:underline">View All</a>
          </div>

          <div className="flex flex-col divide-y divide-[#e2e8f0]">
            {notificationsData.map((notif, i) => (
              <div key={i} className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-[14px] font-bold text-[#0e1726]">{notif.title}</p>
                  {notif.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-[#e0f2fe] text-[#0284c7] text-[12px] font-medium">{notif.badge}</span>
                  )}
                </div>
                <p className="text-[14px] text-[#64748b] leading-relaxed">{notif.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
