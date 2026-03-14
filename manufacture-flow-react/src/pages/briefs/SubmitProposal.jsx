import { Link } from 'react-router-dom'

export default function SubmitProposal() {
  return (
    <div style={{ maxWidth: '800px', paddingTop: '60px' }} className="mx-auto px-4 md:px-8 pb-10">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-[#0e1726]">Proposal for Premium Vitamin D3 Supplement</h1>
        <button className="flex items-center gap-2 px-5 py-2.5 border border-blue-200 text-blue-600 font-medium rounded-lg text-sm hover:bg-blue-50 transition-colors">
          <i className="ph ph-sparkle text-lg"></i>
          AI Draft
        </button>
      </div>
      <p className="text-sm text-slate-500 mb-8">Evergreenapparel.co</p>

      {/* Form Card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
        {/* Production Feasibility */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-bold text-[#0e1726]">Production Feasibility</label>
            <button className="flex items-center gap-1.5 text-blue-600 text-sm font-medium hover:underline">
              <i className="ph ph-sparkle text-base"></i>
              Improve Clarity
            </button>
          </div>
          <textarea placeholder="Type Here" rows="5"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"></textarea>
        </div>

        {/* Order Quantity */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-[#0e1726] mb-3">Order Quantity</label>
          <input type="text" placeholder="e.g 5.0000"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>

        {/* Total Price */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-[#0e1726] mb-3">Total Price (€)</label>
          <input type="text" placeholder="e.g. 500"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>

        {/* Lead Time */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-[#0e1726] mb-3">Lead Time</label>
          <input type="text" placeholder="e.g. 6-8 weeks"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>

        {/* Material */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-[#0e1726] mb-3">Material</label>
          <div className="relative">
            <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white pr-10">
              <option value="" disabled selected>Select Material</option>
              <option value="plastic">Plastic</option>
              <option value="glass">Glass</option>
              <option value="aluminum">Aluminum</option>
              <option value="cardboard">Cardboard</option>
              <option value="biodegradable">Biodegradable</option>
              <option value="recycled">Recycled Material</option>
              <option value="other">Other</option>
            </select>
            <i className="ph ph-caret-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none"></i>
          </div>
        </div>

        {/* Attachments */}
        <div>
          <label className="block text-sm font-bold text-[#0e1726] mb-3">Attachments</label>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-blue-300 transition-colors cursor-pointer">
            <i className="ph ph-upload-simple text-2xl text-slate-400 mb-2"></i>
            <p className="text-sm font-medium text-blue-600 mb-1">Browse</p>
            <p className="text-xs text-slate-400">or drop your file (PNG, JPG, PDF) here</p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="flex items-center gap-3 mb-8">
        <i className="ph ph-info text-lg text-slate-400"></i>
        <p className="text-sm text-slate-600">Submitting a proposal does not imply exclusivity or final selection.</p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mb-12">
        <Link to="/brief-detail-proposal"
          className="px-6 py-2.5 border border-blue-600 text-blue-600 font-medium rounded-lg text-sm hover:bg-blue-50 transition-colors">
          Cancel
        </Link>
        <div className="flex items-center gap-3">
          <button className="px-6 py-2.5 border border-blue-600 text-blue-600 font-medium rounded-lg text-sm hover:bg-blue-50 transition-colors">
            Save as Draft
          </button>
          <Link to="/brief-detail-proposal-submitted"
            className="px-6 py-2.5 bg-[#448ae6] hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors">
            Submit Proposal
          </Link>
        </div>
      </div>
    </div>
  )
}
