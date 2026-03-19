import { Link } from 'react-router-dom'
import BriefArrowStepper from '../../components/BriefArrowStepper'
import BriefDetailTabs from '../../components/BriefDetailTabs'

export default function BriefDetailProposalSubmitted() {
  return (
    <div className="max-w-[1240px] mx-auto mb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
        <div>
          <h1 className="text-xl font-bold text-[#0e1726] mb-2">Premium Vitamin D3 Supplement</h1>
          <div className="flex items-center gap-2 text-[13px] text-slate-400 flex-wrap">
            <span className="text-[#448ae6] font-medium">#BR12345678</span>
            <span>•</span><span>Evergreenapparel.co</span>
            <span>•</span><span>Dietary Supplements</span>
            <span>•</span><span>Created 12/01/2026</span>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="px-5 py-2.5 text-sm font-medium text-slate-600 border border-gray-300 rounded-lg hover:bg-gray-50 bg-white whitespace-nowrap">Not Proceed</button>
          <button className="px-5 py-2.5 text-sm font-medium text-white bg-[#448ae6] rounded-lg hover:bg-blue-700 whitespace-nowrap">Proposal Submitted</button>
        </div>
      </div>

      {/* Stepper — all 3 completed */}
      <BriefArrowStepper activeStep={4} />

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
            Your proposal has been submitted. The brand will review it and get back to you soon.
          </p>
        </div>
        <Link to="/brief-detail-chat" className="text-[#448ae6] font-bold text-[14px] hover:underline whitespace-nowrap">Chat with Brand</Link>
      </div>

      {/* My Proposal Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8">
        <h2 className="text-sm font-bold text-slate-900 mb-1">My Proposal</h2>
        <p className="text-[13px] text-slate-400 mb-6">Track the status of all your submitted proposals.</p>

        <div className="bg-[#f8fafc] rounded-xl border border-gray-100" style={{ padding: '24px' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e0e7ff] text-[#448ae6] flex items-center justify-center text-xs font-bold shrink-0">GM</div>
              <div>
                <h3 className="text-sm font-bold text-[#0e1726] mb-1">GreenThread Manufacturing</h3>
                <div className="flex items-center gap-3 text-[12px] text-slate-400">
                  <span className="flex items-center gap-1"><i className="ph ph-currency-eur text-sm"></i> €4000</span>
                  <span className="flex items-center gap-1"><i className="ph ph-clock text-sm"></i> 2 weeks</span>
                  <span className="flex items-center gap-1"><i className="ph ph-file text-sm"></i> 100 units</span>
                  <span className="flex items-center gap-1"><i className="ph ph-calendar text-sm"></i> Submitted Jan 14, 2025</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-5 py-2 text-sm font-medium text-slate-600 border border-gray-300 rounded-lg hover:bg-white bg-white">Cancel</button>
              <button className="px-5 py-2 text-sm font-medium text-white bg-[#448ae6] rounded-lg hover:bg-blue-700">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
