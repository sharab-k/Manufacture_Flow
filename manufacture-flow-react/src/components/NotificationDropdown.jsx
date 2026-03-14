import { useDropdown } from '../hooks/useDropdown'

export default function NotificationDropdown() {
  const { isOpen, toggle, ref } = useDropdown()

  return (
    <div className="relative flex items-center" ref={ref}>
      <button
        onClick={toggle}
        className="text-[#64748b] hover:text-[#0e1726] transition-colors relative h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-50"
      >
        <i className="ph ph-bell text-[20px]"></i>
      </button>

      {/* Notification Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-3 top-full w-[85vw] max-w-[280px] md:w-[300px] animate-fade-in rounded-[10px] border border-[#e2e8f0] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden text-left z-50">
          <div className="flex items-center justify-between border-b border-[#e2e8f0] px-4 py-3">
            <h4 className="text-[14px] font-bold text-[#0e1726]">Notifications</h4>
            <a href="#" onClick={e => e.preventDefault()} className="text-[12px] font-medium text-[#448ae6] hover:underline">Mark all as read</a>
          </div>
          <div className="max-h-[340px] overflow-y-auto w-full">
            {/* Item 1 */}
            <div className="p-3 border-b border-[#e2e8f0] bg-[#f8fafc] hover:bg-gray-50 transition-colors cursor-pointer w-full">
              <div className="flex items-start justify-between mb-1 gap-2">
                <h5 className="text-[13px] font-bold text-[#0e1726] flex-1 leading-tight">New Proposal Received</h5>
                <span className="text-[11px] text-[#64748b] whitespace-nowrap">Today</span>
              </div>
              <p className="text-[12px] text-[#64748b] leading-relaxed text-left w-full break-words">
                Ecopack solutions submitted a proposal for "sustainable packaging fororganic skincare line"
              </p>
            </div>

            {/* Item 2 */}
            <div className="p-3 border-b border-[#e2e8f0] hover:bg-gray-50 transition-colors cursor-pointer w-full">
              <div className="flex items-start justify-between mb-1 gap-2">
                <h5 className="text-[13px] font-bold text-[#0e1726] flex-1 leading-tight">Proposal Accepted</h5>
                <span className="text-[11px] text-[#64748b] whitespace-nowrap">Yesterday</span>
              </div>
              <p className="text-[12px] text-[#64748b] leading-relaxed text-left w-full break-words">
                Your proposal for "industrial metal components" has been accepted by TechMatch industries
              </p>
            </div>

            {/* Item 3 */}
            <div className="p-3 border-b border-[#e2e8f0] hover:bg-gray-50 transition-colors cursor-pointer w-full">
              <div className="flex items-start justify-between mb-1 gap-2">
                <h5 className="text-[13px] font-bold text-[#0e1726] flex-1 leading-tight">New Brief Invitation</h5>
                <span className="text-[11px] text-[#64748b] whitespace-nowrap">14/01/2026</span>
              </div>
              <p className="text-[12px] text-[#64748b] leading-relaxed text-left w-full break-words">
                You have bee invited to submit a proposal for " Custom Furniture for Hotel Chain"
              </p>
            </div>

            {/* Item 4 */}
            <div className="p-3 border-b border-[#e2e8f0] hover:bg-gray-50 transition-colors cursor-pointer w-full">
              <div className="flex items-start justify-between mb-1 gap-2">
                <h5 className="text-[13px] font-bold text-[#0e1726] flex-1 leading-tight">New Brief Invitation</h5>
                <span className="text-[11px] text-[#64748b] whitespace-nowrap">12/01/2026</span>
              </div>
              <p className="text-[12px] text-[#64748b] leading-relaxed text-left w-full break-words">
                You have bee invited to submit a proposal for " Custom Furniture for Hotel Chain"
              </p>
            </div>

            {/* Item 5 */}
            <div className="p-3 hover:bg-gray-50 transition-colors cursor-pointer w-full">
              <div className="flex items-start justify-between mb-1 gap-2">
                <h5 className="text-[13px] font-bold text-[#0e1726] flex-1 leading-tight">New Brief Invitation</h5>
                <span className="text-[11px] text-[#64748b] whitespace-nowrap">1 month ago</span>
              </div>
              <p className="text-[12px] text-[#64748b] leading-relaxed text-left w-full break-words">
                You have bee invited to submit a proposal for " Custom Furniture for Hotel Chain"
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
