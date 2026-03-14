import '../../styles/briefs.css'
import { Link } from 'react-router-dom'

const statsData = [
  { label: 'New Invites', value: '15', icon: 'ph-tray' },
  { label: 'Under Discussion', value: '2', icon: 'ph-envelope-simple' },
  { label: 'Active Proposals', value: '3', icon: 'ph-file-text' },
  { label: 'Matched Briefs', value: '5', icon: 'ph-check-circle' },
]

const briefsData = [
  { status: 'Invited', statusClass: 'bg-indigo-100 text-indigo-600', tooltip: "You've been invited to submit a proposal. Brands may consider multiple manufacturers before making a decision." },
  { status: 'Proposal Submitted', statusClass: 'bg-sky-100 text-sky-600', tooltip: 'Your proposal is under review. Brands may discuss proposals from multiple manufacturers before focusing on one.' },
  { status: 'Under Discussion', statusClass: 'bg-blue-100 text-blue-600', tooltip: 'The brand is currently reviewing and discussing proposals with multiple manufacturers.' },
  { status: 'Not Proceeding', statusClass: 'bg-red-100 text-red-600', tooltip: 'The brand is currently proceeding with another manufacturer for this brief. You can still review this proposal or submit proposals to other briefs.' },
  { status: 'Matched', statusClass: 'bg-amber-100 text-amber-600', tooltip: 'The brand has chosen to focus discussions with you for now. This does not imply exclusivity or final selection.' },
]

export default function Briefs() {
  return (
    <div className="max-w-[1200px] mx-auto mb-12">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Available My Briefs</h1>
        <p className="text-slate-500 text-sm mt-1">Browse and review product briefs from potential clients</p>
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

      {/* Main Content Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative grow">
            <i className="ph ph-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          {['Filter by date', 'Filter by category', 'Filter by status'].map((label, i) => (
            <div key={i} className="relative w-full md:w-48">
              <select className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-white">
                <option>{label}</option>
              </select>
              <i className="ph ph-caret-down absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
            </div>
          ))}
        </div>

        {/* Briefs List */}
        <div className="space-y-4">
          {briefsData.map((brief, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl border border-transparent p-6 transition-all brief-card-header">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-blue-500 font-medium font-mono">#BR12345678</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Link to="/brief-detail" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">Premium Vitamin D3 Supplement</Link>
                    <span className={`${brief.statusClass} text-sm px-2.5 py-0.5 rounded-full font-medium`}>{brief.status}</span>
                    <div className="relative group">
                      <i className="ph ph-info text-slate-400 text-lg cursor-help"></i>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none z-10 text-center leading-relaxed">
                        {brief.tooltip}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-500 max-w-3xl">This brief is being created with AI assistance. The AI will help you fill in the details.</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                  {[
                    { icon: 'ph-buildings', text: 'Evergreenapparel.co' },
                    { icon: 'ph-files', text: 'Dietry Supplements' },
                    { icon: 'ph-calendar-blank', text: '2026-04-15' },
                    { icon: 'ph-wallet', text: '€1000 - €100000' },
                  ].map((tag, j) => (
                    <div key={j} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                      <i className={`ph ${tag.icon} text-lg text-slate-400`}></i>
                      <span>{tag.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <button className="btn-micro text-[#448ae6] border border-[#448ae6] transition-colors bg-transparent">Not Proceed</button>
                <Link to="/brief-detail" className="btn-micro text-white bg-[#448ae6] hover:bg-blue-600 transition-colors">View Brief</Link>
                <button className="btn-dots hover:bg-gray-50 transition-colors">
                  <i className="ph-bold ph-dots-three-outline-vertical text-[20px]"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-slate-500">Showing 1 to 5 of 15 results</p>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-slate-400 hover:text-slate-600 hover:bg-gray-50">
              <i className="ph ph-caret-left text-sm"></i>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white font-medium text-sm">1</button>
            {[2, 3, 4, 5].map(n => (
              <button key={n} className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 hover:bg-gray-50 font-medium text-sm">{n}</button>
            ))}
            <span className="text-slate-400 text-sm px-1">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 hover:bg-gray-50 font-medium text-sm">12</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-slate-400 hover:text-slate-600 hover:bg-gray-50">
              <i className="ph ph-caret-right text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
