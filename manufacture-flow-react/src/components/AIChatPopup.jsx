import { useState } from 'react'

export default function AIChatPopup() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    if (isOpen) {
      handleClose()
      return
    }
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={handleOpen}
        className="fixed bottom-10 right-10 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200 border-none z-50"
      >
        <i className="ph ph-sparkle text-2xl"></i>
      </button>

      {/* AI Chat Popup */}
      <div
        style={{ width: '380px', bottom: '110px', right: '40px', borderRadius: '16px', zIndex: 100 }}
        className={`fixed bg-white shadow-2xl border border-[#e2e8f0] flex flex-col overflow-hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none hidden'}`}
      >
        {/* Header */}
        <div className="px-5 py-4 flex items-center justify-between border-b border-[#e2e8f0]">
          <div className="flex items-center gap-2">
            <i className="ph ph-sparkle text-xl text-blue-600"></i>
            <h3 className="font-bold text-slate-900 text-sm">Donau AI Assistant</h3>
          </div>
          <button onClick={handleClose} className="text-slate-500 hover:text-slate-900 transition-colors focus:outline-none">
            <i className="ph ph-x text-xl"></i>
          </button>
        </div>

        {/* Chat Area */}
        <div style={{ height: '320px' }} className="p-6 overflow-y-auto bg-white flex flex-col gap-4">
          {/* AI Message */}
          <div className="bg-[#f4f6f9] text-[#334155] text-[13.5px] leading-relaxed p-4 rounded-xl shadow-sm self-start">
            I'm here to support you in reviewing new briefs, preparing competitive proposals, and addressing any
            questions related to active invitations.
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-[#e2e8f0] flex items-center gap-3 bg-white">
          <input
            type="text"
            placeholder="Type your response..."
            className="flex-1 border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
          />
          <button className="w-10 h-10 rounded-lg bg-[#448ae6] hover:bg-[#3476cb] text-white flex items-center justify-center transition-colors shrink-0">
            <i className="ph-bold ph-paper-plane-right text-lg"></i>
          </button>
        </div>
      </div>
    </>
  )
}
