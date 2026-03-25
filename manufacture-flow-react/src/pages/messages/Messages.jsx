import { useState, useRef, useEffect } from 'react'

export default function Messages() {
  const [activeChat, setActiveChat] = useState('chat_1')
  const [messageInput, setMessageInput] = useState('')
  const messagesEndRef = useRef(null)

  const [chatMessages, setChatMessages] = useState({
    chat_1: [
      { id: 1, sender: 'EA', isUser: false, text: "Hi! I'm here to help you create a detailed product brief. Let's start with the basics. What type of product are you looking to manufacture?", time: "20:32" },
      { id: 2, sender: 'You', isUser: true, text: "I am looking for dietary supplements, specifically a high-quality Vitamin D3 formula.", time: "20:35" }
    ],
    chat_2: [
      { id: 1, sender: 'NA', isUser: false, text: "Yes, customization is available with a 20-day lead time.", time: "18:40", date: "18/01/2024" }
    ],
    chat_3: [
      { id: 1, sender: 'BG', isUser: false, text: "We've reviewed your brief and sent a quote.", time: "14:20", date: "12/01/2024" }
    ]
  })

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages, activeChat])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!messageInput.trim()) return

    const newMessage = {
      id: Date.now(),
      sender: 'You',
      isUser: true,
      text: messageInput.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setChatMessages(prev => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), newMessage]
    }))
    
    setMessageInput('')
  }
  
  return (
    <div className="h-[calc(100vh-72px)] md:h-[calc(100vh-140px)] w-full max-w-[1400px] mx-auto flex flex-col">
      <div className="h-full flex flex-col md:flex-row gap-0 md:gap-6 min-h-0">
        
        {/* Chat Listing Sidebar */}
        <div className={`w-full md:w-[320px] lg:w-[380px] h-full md:h-auto bg-white rounded-none md:rounded-2xl border-0 md:border border-gray-200 flex flex-col overflow-hidden shrink-0 ${activeChat ? 'hidden md:flex' : 'flex'}`}>
          <div className="p-4 border-b border-gray-100 shrink-0">
            <h2 className="font-bold text-slate-900 mb-4">Messages</h2>
            <div className="relative">
              <i className="ph ph-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
              <input type="text" placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
            <div className="flex gap-6 mt-4">
              <button className="text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-2 -mb-px">All (10)</button>
              <button className="text-sm font-medium text-slate-500 pb-2 hover:text-slate-800">Unread (3)</button>
            </div>
          </div>

          <div className="grow overflow-y-auto divide-y divide-gray-50 p-4 space-y-2">
            {/* Active Item */}
            <div onClick={() => setActiveChat('chat_1')}
              className={`p-4 rounded-xl cursor-pointer transition-colors ${activeChat === 'chat_1' ? 'bg-blue-50 ring-1 ring-blue-100' : 'hover:bg-gray-50'}`}>
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] bg-blue-100 text-blue-600 font-medium px-1.5 rounded">#BR12345678</span>
                <span className="text-xs text-slate-400">22/01/2024</span>
              </div>
              <div className="flex items-start gap-3 mt-1">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">EA</div>
                <div className="overflow-hidden">
                  <h4 className="font-bold text-slate-900 text-sm truncate">Evergreen Apparel Co.</h4>
                  <p className="text-xs text-slate-500 truncate mt-0.5">Hi! I'm here to help you create a detaile...</p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div onClick={() => setActiveChat('chat_2')}
              className={`p-4 rounded-xl cursor-pointer transition-colors ${activeChat === 'chat_2' ? 'bg-blue-50 ring-1 ring-blue-100' : 'hover:bg-gray-50'}`}>
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] bg-blue-100 text-blue-600 font-medium px-1.5 rounded">#BR12345678</span>
                <span className="text-xs text-slate-400">18/01/2024</span>
              </div>
              <div className="flex items-start gap-3 mt-1">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">NA</div>
                <div className="overflow-hidden">
                  <h4 className="font-bold text-slate-900 text-sm truncate">Nova Apparel Industries</h4>
                  <p className="text-xs text-slate-500 truncate mt-0.5">Yes, customization is available with a 20-day...</p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div onClick={() => setActiveChat('chat_3')}
              className={`p-4 rounded-xl cursor-pointer transition-colors ${activeChat === 'chat_3' ? 'bg-blue-50 ring-1 ring-blue-100' : 'hover:bg-gray-50'}`}>
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] bg-blue-100 text-blue-600 font-medium px-1.5 rounded">#BR12345678</span>
                <span className="text-xs text-slate-400">12/01/2024</span>
              </div>
              <div className="flex items-start gap-3 mt-1">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">BG</div>
                <div className="overflow-hidden">
                  <h4 className="font-bold text-slate-900 text-sm truncate">BlueWeave Garments</h4>
                  <p className="text-xs text-slate-500 truncate mt-0.5">We've reviewed your brief and sent a quo...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className={`grow bg-white rounded-2xl border border-gray-200 flex-col overflow-hidden ${activeChat ? 'flex' : 'hidden md:flex'}`}>
          {activeChat ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-100 flex justify-between items-center shrink-0">
                <div className="flex items-center gap-3">
                  <button onClick={() => setActiveChat(null)} className="md:hidden mr-1 text-slate-500 hover:text-slate-700">
                    <i className="ph ph-arrow-left text-xl"></i>
                  </button>
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">EA</div>
                  <div>
                    <h3 className="font-bold text-slate-900">Evergreen Apparel Co.</h3>
                    <p className="text-xs text-slate-500">Brand</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 text-xs font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50">View Brief</button>
                  <button className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-600 rounded-lg hover:bg-gray-100">
                    <i className="ph ph-dots-three-vertical text-xl"></i>
                  </button>
                </div>
              </div>

              {/* Messages List */}
              <div className="grow overflow-y-auto p-6 bg-white space-y-6 flex flex-col">
                {(chatMessages[activeChat] || []).map((msg) => (
                  <div key={msg.id} className={`flex gap-4 max-w-[80%] ${msg.isUser ? 'self-end flex-row-reverse' : ''}`}>
                    {!msg.isUser && (
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0 mt-1">
                        {msg.sender}
                      </div>
                    )}
                    <div className={msg.isUser ? 'flex flex-col items-end' : ''}>
                      <div className={`${msg.isUser ? 'bg-blue-600 text-white rounded-br-sm' : 'bg-gray-50 text-slate-700 rounded-tl-sm'} rounded-2xl p-4 text-sm leading-relaxed`}>
                        <p>{msg.text}</p>
                      </div>
                      <span className={`text-[10px] text-slate-400 mt-1 block ${msg.isUser ? 'text-right' : ''}`}>
                        {msg.time} {msg.date && `• ${msg.date}`}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-gray-100 shrink-0">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <button type="button" className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-600 bg-gray-50 rounded-lg hover:bg-gray-100 border border-gray-200 shrink-0">
                    <i className="ph ph-paperclip text-xl"></i>
                  </button>
                  <input 
                    type="text" 
                    placeholder="Type your response..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="grow px-4 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" 
                  />
                  <button type="submit" className="w-10 h-10 flex items-center justify-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 shrink-0">
                    <i className="ph ph-paper-plane-right text-xl"></i>
                  </button>
                </form>
              </div>
            </>
          ) : (
             <div className="grow hidden md:flex flex-col items-center justify-center text-center p-8 text-slate-400">
               Select a conversation to start messaging
             </div>
          )}
        </div>
      </div>
    </div>
  )
}
