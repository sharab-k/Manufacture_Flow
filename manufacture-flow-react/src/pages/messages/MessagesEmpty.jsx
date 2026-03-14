import { Link } from 'react-router-dom'

export default function MessagesEmpty() {
  return (
    <div className="h-[calc(100vh-72px)] md:h-[calc(100vh-140px)] w-full max-w-[1400px] mx-auto flex flex-col">
      <div className="mb-4 shrink-0 hidden md:block">
        <h1 className="text-2xl font-bold text-slate-900">Messages</h1>
      </div>
      <div className="h-full flex flex-col md:flex-row gap-0 md:gap-6 min-h-0">
        
        {/* Sidebar */}
        <div className="w-full md:w-[320px] lg:w-[380px] h-full md:h-auto bg-white rounded-none md:rounded-xl border-0 md:border border-gray-200 flex flex-col overflow-hidden shrink-0">
          <div className="p-4 border-b border-gray-100 shrink-0">
            <h2 className="font-bold text-slate-900 mb-4">Messages</h2>
            <div className="relative">
              <i className="ph ph-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
              <input type="text" placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
            <div className="flex gap-6 mt-4 border-b border-gray-100 pb-0">
              <button className="text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-2 -mb-px">All (0)</button>
              <button className="text-sm font-medium text-slate-500 pb-2 hover:text-slate-800">Unread (0)</button>
            </div>
          </div>
          
          <div className="grow overflow-y-auto p-4 flex flex-col items-center justify-center text-center">
            <p className="text-sm text-slate-400">No conversations found</p>
          </div>
        </div>

        {/* Chat Area (Empty) */}
        <div className="grow bg-white rounded-xl border border-gray-200 hidden md:flex flex-col items-center justify-center text-center p-8">
          <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-slate-300 mb-4">
            <i className="ph ph-chat-circle-slash text-3xl"></i>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">No Messages Yet</h3>
          <p className="text-slate-500 text-sm max-w-sm mb-4">
            No conversation has started yet. You can use this chat to ask the brand questions about their brief before submitting your proposal.
          </p>
          <Link to="/briefs" className="text-sm font-medium text-blue-600 hover:underline">Find Briefs to Apply</Link>
        </div>
      </div>
    </div>
  )
}
