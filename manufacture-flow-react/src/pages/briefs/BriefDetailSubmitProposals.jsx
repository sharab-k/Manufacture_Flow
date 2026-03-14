import { Link } from 'react-router-dom'

export default function BriefDetailSubmitProposals() {
  return (
    <div className="max-w-[1240px] mx-auto mb-12 md:px-[152px]">
      {/* Proposal Form Title and AI Draft */}
      <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">Proposal for Premium Vitamin D3 Supplement</h1>
          <p className="text-slate-500 text-sm font-medium">Evergreenapparel.co</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 border border-blue-100 text-[#448ae6] font-bold rounded-xl text-sm hover:bg-blue-50 transition-colors bg-white shadow-sm">
          <i className="ph ph-sparkle text-lg"></i>
          AI Draft
        </button>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
        <form className="space-y-6">
          {/* Production Feasibility */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-[14px] font-bold text-slate-900 uppercase tracking-wide">Production Feasibility</label>
              <button type="button" className="flex items-center gap-2 text-[#448ae6] text-[13px] font-bold hover:underline">
                <i className="ph ph-sparkle text-lg"></i>
                Improve Clarity
              </button>
            </div>
            <textarea placeholder="Type here" rows="4"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[14px] text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none font-medium"></textarea>
          </div>

          {/* Order Quantity */}
          <div>
            <label className="block text-[14px] font-bold text-slate-900 mb-3 uppercase tracking-wide">Order Quantity</label>
            <input type="text" placeholder="e.g. 5,000"
              className="w-full h-12 px-4 border border-gray-200 rounded-xl text-[14px] text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-medium" />
          </div>

          {/* Total Price */}
          <div>
            <label className="block text-[14px] font-bold text-slate-900 mb-3 uppercase tracking-wide">Total Price (€)</label>
            <input type="text" placeholder="e.g. 50,000"
              className="w-full h-12 px-4 border border-gray-200 rounded-xl text-[14px] text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-medium" />
          </div>

          {/* Lead Time */}
          <div>
            <label className="block text-[14px] font-bold text-slate-900 mb-3 uppercase tracking-wide">Lead Time</label>
            <input type="text" placeholder="e.g. 6-8 weeks"
              className="w-full h-12 px-4 border border-gray-200 rounded-xl text-[14px] text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-medium" />
          </div>

          {/* Material */}
          <div>
            <label className="block text-[14px] font-bold text-slate-900 mb-3 uppercase tracking-wide">Material</label>
            <div className="relative">
              <select className="w-full h-12 px-4 border border-gray-200 rounded-xl text-[14px] text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white font-medium">
                <option value="" disabled selected>Select Material</option>
                <option value="recycled-cardboard">Recyclable Cardboard</option>
                <option value="biodegradable-plastic">Biodegradable Plastic</option>
                <option value="glass">Glass</option>
                <option value="other">Other</option>
              </select>
              <i className="ph ph-caret-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
            </div>
          </div>

          {/* Attachments */}
          <div>
            <label className="block text-[14px] font-bold text-slate-900 mb-3 uppercase tracking-wide">Attachments</label>
            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50/50 hover:border-blue-200 transition-all cursor-pointer group bg-gray-50/30">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <i className="ph ph-upload-simple text-xl"></i>
              </div>
              <span className="text-[14px] font-bold text-[#448ae6] mb-1">Browse</span>
              <span className="text-[11px] text-slate-400 font-medium">or drop your file (PNG, JPG, PDF) here</span>
            </div>
          </div>
        </form>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shrink-0">
            <i className="ph ph-info text-xl"></i>
          </div>
          <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
            Submitting a proposal does not imply exclusivity or final selection.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mb-20">
        <Link to="/brief-detail"
          className="px-8 py-3 text-sm font-bold text-[#448ae6] border border-[#448ae6] rounded-xl hover:bg-blue-50 transition-colors">
          Cancel
        </Link>
        <div className="flex items-center gap-4">
          <button type="button"
            className="px-8 py-3 text-sm font-bold text-[#448ae6] border border-[#448ae6] rounded-xl hover:bg-blue-50 transition-colors">
            Save as Draft
          </button>
          <Link to="/brief-detail-proposal-submitted"
            className="px-8 py-3 text-sm font-bold text-white bg-[#448ae6] border border-[#448ae6] rounded-xl hover:bg-blue-700 transition-colors">
            Submit Proposal
          </Link>
        </div>
      </div>
    </div>
  )
}
