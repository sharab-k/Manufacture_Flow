import { Link } from 'react-router-dom'
import BriefArrowStepper from '../../components/BriefArrowStepper'
import BriefDetailTabs from '../../components/BriefDetailTabs'

export default function BriefDetail() {
  return (
    <div className="max-w-[1240px] mx-auto mb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-xl md:text-2xl font-bold text-slate-900">Premium Vitamin D3 Supplement</h1>
            <div className="flex items-center gap-2">
              <span className="bg-blue-50 text-blue-600 text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap border border-blue-100">Under Discussion</span>
              <i className="ph ph-info text-slate-400 text-lg"></i>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-slate-500 font-medium">
            <span className="text-blue-600">#BR12345678</span>
            <span className="text-slate-300">&bull;</span>
            <span>Evergreenapparel.co</span>
            <span className="text-slate-300">&bull;</span>
            <span>Dietary Supplements</span>
            <span className="text-slate-300">&bull;</span>
            <span>Created 12/01/2026</span>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-6 py-2.5 bg-white hover:bg-gray-50 text-[#448ae6] font-bold rounded-xl text-sm transition-colors whitespace-nowrap border border-[#448ae6]">Not Proceed</button>
          <Link to="/brief-detail-submit-proposals" className="flex-1 md:flex-none px-6 py-2.5 bg-[#448ae6] hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-colors whitespace-nowrap text-center">Submit Proposal</Link>
        </div>
      </div>

      {/* Alert and Stepper */}
      <div className="space-y-6 mb-8">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white shrink-0">
              <i className="ph ph-sparkle text-xl"></i>
            </div>
            <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
              The timeline is not specified. Consider asking the brand for clarification before submitting your proposal.
              "MOQ is not mentioned. Confirming this ensures your proposal matches expectations.
            </p>
          </div>
          <Link to="/brief-detail-chat" className="text-[#448ae6] font-bold text-[14px] hover:underline whitespace-nowrap">Chat with Brand</Link>
        </div>

        <BriefArrowStepper activeStep={2} />

        <BriefDetailTabs />
      </div>

      {/* Project Requirements */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
        <h2 className="text-sm font-bold text-slate-900 mb-4">Project Requirements</h2>
        <p className="text-sm text-slate-500 leading-relaxed">
          We are looking for eco-friendly packaging solutions for our new organic skincare line. The
          packaging must be 100% recyclable, aesthetically pleasing, and cost-effective. We need samples
          within 2 weeks and full production capability.
        </p>
      </div>

      {/* Technical Specifications */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
        <h2 className="text-sm font-bold text-slate-900 mb-6">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            ['Material', 'Recyclable cardboard or biodegradable plastic'],
            ['Dimensions', '15cm x 10cm x 5cm'],
            ['Printing', 'Full color CMYK with matte finish'],
            ['MOQ', '10,000 units minimum'],
          ].map(([label, value], i) => (
            <div key={i} className="flex items-center justify-between p-4 md:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors gap-4">
              <span className="text-sm font-medium text-slate-500">{label}</span>
              <span className="text-sm font-bold text-slate-900 text-right">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Brief Details */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
        <h2 className="text-sm font-bold text-slate-900 mb-8">Brief Details</h2>
        <div className="space-y-6">
          {[
            { icon: 'ph-clock', label: 'Quantity', value: '5,000 units' },
            { icon: 'ph-clock', label: 'Timeline', value: '8-12 weeks' },
            { icon: 'ph-wallet', label: 'Budget Range', value: '€30,000 - €45,000' },
            { icon: 'ph-file', label: 'Category', value: 'Dietry Supplements' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-slate-400 shrink-0">
                <i className={`ph ${item.icon} text-xl`}></i>
              </div>
              <div>
                <span className="block text-[10px] text-slate-400 font-medium uppercase mb-0.5">{item.label}</span>
                <span className="block text-sm font-bold text-slate-900">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Attachments */}
      <div className="bg-white rounded-xl border border-gray-200 p-8 mb-20">
        <h2 className="text-sm font-bold text-slate-900 mb-6">Attachments</h2>
        <div className="space-y-3">
          {[
            { icon: 'ph-file-pdf', name: 'Specs.pdf', meta: 'PDF Document • 2.4 MB' },
            { icon: 'ph-file-image', name: 'Design-mockup.png', meta: 'PDF Document • 2.4 MB' },
          ].map((file, i) => (
            <div key={i} className="flex items-center p-4 bg-gray-50 rounded-lg border border-transparent hover:border-gray-200 transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-slate-400 shrink-0 transition-all border border-gray-200/50">
                <i className={`ph ${file.icon} text-xl`}></i>
              </div>
              <div className="ml-4 grow">
                <span className="block text-sm font-bold text-slate-900">{file.name}</span>
                <span className="block text-xs text-slate-400 mt-0.5">{file.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
