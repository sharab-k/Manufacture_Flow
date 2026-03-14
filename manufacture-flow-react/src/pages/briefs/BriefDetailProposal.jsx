import { Link } from 'react-router-dom'
import BriefArrowStepper from '../../components/BriefArrowStepper'
import BriefDetailTabs from '../../components/BriefDetailTabs'

export default function BriefDetailProposal() {
  return (
    <div className="max-w-[1200px] mx-auto mb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
        <div className="relative">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-slate-900">Premium Vitamin D3 Supplement</h1>
            <span className="bg-blue-100 text-blue-600 text-xs px-2.5 py-0.5 rounded-full font-bold whitespace-nowrap">Under Discussion</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <i className="ph ph-buildings text-sm"></i>
            <span>Evergreenapparel.co</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-slate-400">
            <span className="font-mono text-blue-500 font-medium">#BR12345678</span>
            <span>•</span><span>Dietary Supplements</span>
            <span>•</span><span>Created 12/01/2026</span>
            <span>•</span><span>Last Updated 18/01/2026</span>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-6 py-2.5 bg-white hover:bg-gray-50 text-slate-500 font-bold rounded-xl text-sm transition-colors whitespace-nowrap border border-gray-200">Not Proceed</button>
          <button className="flex-1 md:flex-none px-6 py-2.5 bg-[#448ae6] text-white font-bold rounded-xl text-sm transition-colors whitespace-nowrap text-center opacity-90 cursor-default">Proposal Submitted</button>
        </div>
      </div>

      <BriefArrowStepper activeStep={3} />

      <div className="mt-8">
        <BriefDetailTabs />
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shrink-0">
            <i className="ph ph-sparkle text-xl"></i>
          </div>
          <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
            Brands may review and discuss proposals from multiple manufacturers before making a final decision.
          </p>
        </div>
        <Link to="/brief-detail-chat" className="text-[#448ae6] font-bold text-[14px] hover:underline whitespace-nowrap">Chat with Brand</Link>
      </div>

      {/* My Proposal Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
        <div className="mb-8">
          <h2 className="text-[15px] font-bold text-slate-900 mb-1">My Proposal</h2>
          <p className="text-[13px] text-slate-500 font-medium">Track the status of all your submitted proposals.</p>
        </div>

        <div className="bg-[#f8fafc] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">GM</div>
            <div>
              <h3 className="text-[14px] font-bold text-slate-900 mb-2">GreenThread Manufacturing</h3>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-[12px] text-slate-500 font-medium">
                <div className="flex items-center gap-2"><i className="ph ph-currency-eur text-base text-slate-400"></i><span>€4000</span></div>
                <div className="flex items-center gap-2"><i className="ph ph-clock text-base text-slate-400"></i><span>2 weeks</span></div>
                <div className="flex items-center gap-2"><i className="ph ph-package text-base text-slate-400"></i><span>100 units</span></div>
                <div className="flex items-center gap-2"><i className="ph ph-calendar-blank text-base text-slate-400"></i><span>Submitted Jan 14, 2025</span></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-8 py-2.5 bg-white border border-gray-200 text-slate-600 font-bold rounded-xl text-sm hover:bg-gray-50 transition-colors">Cancel</button>
            <button className="flex-1 md:flex-none px-8 py-2.5 bg-[#448ae6] text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-colors">Edit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
