import os
import re

html_files = [
    'briefs.html',
    'brief-detail.html',
    'brief-detail-proposal.html',
    'brief-detail-chat.html',
    'messages.html',
    'dashboard-filled.html',
    'dashboard-empty.html',
    'messages-empty.html',
    'settings-account.html',
    'settings-manufacturer.html',
    'settings-security.html',
    'ai-brief-assistant.html'
]

dropdown_content = """<!-- Notifications -->
                <div class="relative flex items-center">
                    <button id="notification-bell" data-dropdown-trigger data-dropdown-target="notification-dropdown"
                        class="text-[#64748b] hover:text-[#0e1726] transition-colors relative h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-50">
                        <i class="ph ph-bell text-[20px]"></i>
                    </button>
                    <!-- Notification Dropdown -->
                    <div id="notification-dropdown" data-dropdown-content
                        class="hidden absolute right-0 mt-3 top-full w-[85vw] max-w-[340px] md:w-[380px] animate-fade-in rounded-[12px] border border-[#e2e8f0] bg-white shadow-lg overflow-hidden text-left z-50">
                        <div class="flex items-center justify-between border-b border-[#e2e8f0] px-5 py-4">
                            <h4 class="text-[16px] font-bold text-[#0e1726]">Notifications</h4>
                            <a href="javascript:void(0)" class="text-[14px] font-medium text-[#448ae6] hover:underline">Mark all as read</a>
                        </div>
                        <div class="max-h-[400px] overflow-y-auto w-full">
                            <!-- Item 1 -->
                            <div class="p-4 border-b border-[#e2e8f0] bg-[#f8fafc] hover:bg-gray-50 transition-colors cursor-pointer w-full">
                                <div class="flex items-start justify-between mb-1.5 gap-3">
                                    <h5 class="text-[14px] font-bold text-[#0e1726] flex-1 leading-tight">New Proposal Received</h5>
                                    <span class="text-[12px] text-[#64748b] whitespace-nowrap">Today</span>
                                </div>
                                <p class="text-[13px] text-[#64748b] leading-relaxed text-left w-full break-words">Ecopack solutions submitted a proposal for "sustainable packaging fororganic skincare line"</p>
                            </div>

                            <!-- Item 2 -->
                            <div class="p-4 border-b border-[#e2e8f0] hover:bg-gray-50 transition-colors cursor-pointer w-full">
                                <div class="flex items-start justify-between mb-1.5 gap-3">
                                    <h5 class="text-[14px] font-bold text-[#0e1726] flex-1 leading-tight">Proposal Accepted</h5>
                                    <span class="text-[12px] text-[#64748b] whitespace-nowrap">Yesterday</span>
                                </div>
                                <p class="text-[13px] text-[#64748b] leading-relaxed text-left w-full break-words">Your proposal for "industrial metal components" has been accepted by TechMatch industries</p>
                            </div>

                            <!-- Item 3 -->
                            <div class="p-4 border-b border-[#e2e8f0] hover:bg-gray-50 transition-colors cursor-pointer w-full">
                                <div class="flex items-start justify-between mb-1.5 gap-3">
                                    <h5 class="text-[14px] font-bold text-[#0e1726] flex-1 leading-tight">New Brief Invitation</h5>
                                    <span class="text-[12px] text-[#64748b] whitespace-nowrap">14/01/2026</span>
                                </div>
                                <p class="text-[13px] text-[#64748b] leading-relaxed text-left w-full break-words">You have bee invited to submit a proposal for " Custom Furniture for Hotel Chain"</p>
                            </div>

                            <!-- Item 4 -->
                            <div class="p-4 border-b border-[#e2e8f0] hover:bg-gray-50 transition-colors cursor-pointer w-full">
                                <div class="flex items-start justify-between mb-1.5 gap-3">
                                    <h5 class="text-[14px] font-bold text-[#0e1726] flex-1 leading-tight">New Brief Invitation</h5>
                                    <span class="text-[12px] text-[#64748b] whitespace-nowrap">12/01/2026</span>
                                </div>
                                <p class="text-[13px] text-[#64748b] leading-relaxed text-left w-full break-words">You have bee invited to submit a proposal for " Custom Furniture for Hotel Chain"</p>
                            </div>

                            <!-- Item 5 -->
                            <div class="p-4 hover:bg-gray-50 transition-colors cursor-pointer w-full">
                                <div class="flex items-start justify-between mb-1.5 gap-3">
                                    <h5 class="text-[14px] font-bold text-[#0e1726] flex-1 leading-tight">New Brief Invitation</h5>
                                    <span class="text-[12px] text-[#64748b] whitespace-nowrap">1 month ago</span>
                                </div>
                                <p class="text-[13px] text-[#64748b] leading-relaxed text-left w-full break-words">You have bee invited to submit a proposal for " Custom Furniture for Hotel Chain"</p>
                            </div>
                        </div>
                    </div>
                </div>"""

# Safely target only the button for replacement
for filename in html_files:
    if not os.path.exists(filename) or filename == 'dashboard-filled.html':
        continue # skip dashboard-filled since we already updated it manually
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # The original notification button across all files
    # The exact indentation might vary slightly but this regex is safe because it only replaces from '<!-- Notifications -->' to the end of its button
    pattern = r'<!-- Notifications -->\s*<button[^>]*>\s*<i class="ph ph-bell[^>]*></i>\s*</button>'
    
    # Check if a match is found
    if re.search(pattern, content):
        new_content = re.sub(pattern, dropdown_content, content, count=1)
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filename}")
    else:
        print(f"No match found for original button in {filename}. Check formatting.")
