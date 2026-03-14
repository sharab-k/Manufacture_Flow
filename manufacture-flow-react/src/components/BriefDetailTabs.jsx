import { Link, useLocation } from 'react-router-dom'

const tabs = [
  { label: 'Overview', icon: 'ph-file-magnifying-glass', path: '/brief-detail' },
  { label: 'Proposal', icon: 'ph-file', path: '/brief-detail-proposal' },
  { label: 'Messages', icon: 'ph-chat-circle', path: '/brief-detail-chat' },
]

export default function BriefDetailTabs() {
  const location = useLocation()

  return (
    <div className="border-b border-gray-100 mb-8">
      <div className="flex" style={{ gap: '40px' }}>
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`pb-4 border-b-2 font-bold text-[14px] flex items-center gap-2 transition-all ${
                isActive
                  ? 'border-[#448ae6] text-[#448ae6]'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              <i className={`ph ${tab.icon} text-lg`}></i>
              {tab.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
