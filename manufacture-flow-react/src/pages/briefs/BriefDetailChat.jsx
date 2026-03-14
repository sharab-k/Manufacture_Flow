import { Link } from 'react-router-dom'
import BriefArrowStepper from '../../components/BriefArrowStepper'
import BriefDetailTabs from '../../components/BriefDetailTabs'

export default function BriefDetailChat() {
  return (
    <div className="max-w-[1200px] mx-auto w-full flex flex-col grow">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-6 shrink-0 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-slate-900">Premium Vitamin D3 Supplement</h1>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <i className="ph ph-buildings text-sm"></i>
            <span>Evergreenapparel.co</span>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <span className="bg-blue-50 text-blue-600 text-xs px-2.5 py-0.5 rounded-full font-medium whitespace-nowrap">Under Discussion</span>
          <button className="flex-1 md:flex-none px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors whitespace-nowrap">Submit Proposal</button>
          <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-600 border border-gray-200 rounded-lg hover:bg-gray-50">
            <i className="ph ph-dots-three-vertical text-xl"></i>
          </button>
        </div>
      </div>

      <BriefArrowStepper activeStep={2} />

      <div className="mt-8">
        <BriefDetailTabs />
      </div>

      {/* Chat Area */}
      <div className="w-full bg-white rounded-2xl border border-gray-200 flex flex-col overflow-hidden h-[600px] shadow-sm">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">GT</div>
            <div>
              <span className="block text-sm font-bold text-slate-900">GreenThread Manufacturing</span>
              <span className="block text-xs text-slate-500">Manufacturer</span>
            </div>
          </div>
        </div>

        {/* Messages List */}
        <div className="grow overflow-y-auto p-6 space-y-6 flex flex-col">
          {/* Sent Message */}
          <div className="flex flex-col items-end self-end max-w-[80%]">
            <div className="bg-blue-600 rounded-2xl rounded-br-none px-6 py-3 text-white text-sm">Hello</div>
          </div>

          {/* Received Message */}
          <div className="bg-gray-50 rounded-2xl p-6 max-w-[90%] md:max-w-[70%] text-sm text-slate-700 leading-relaxed">
            <p className="mb-4">Hi! I'm here to help you create a detailed product brief. Let's start with the basics. What type of product are you looking to manufacture?</p>
            <span className="text-xs text-slate-400">20:32</span>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-100 bg-white shrink-0">
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shrink-0 shadow-sm">
              <i className="ph ph-paperclip text-lg"></i>
            </button>
            <input type="text" placeholder="Type your response..."
              className="grow h-10 px-4 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all text-slate-600" />
            <button className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shrink-0 shadow-[0_2px_10px_rgba(37,99,235,0.2)]">
              <i className="ph ph-paper-plane-right text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
