from bs4 import BeautifulSoup
import os

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

dropdown_html = """
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
"""

dropdown_soup = BeautifulSoup(dropdown_html, 'html.parser')

for filename in html_files:
    if not os.path.exists(filename):
        continue
        
    with open(filename, 'r', encoding='utf-8') as f:
        file_content = f.read()
        
    soup = BeautifulSoup(file_content, 'html.parser')
    dropdown = soup.find(id="notification-dropdown")
    
    if dropdown:
        # We need to preserve formatting, so BS4 string replacement might ruin the overall HTML indentation. 
        # Instead, let's just use string replacement on the exact outer HTML of the dropdown
        old_html = str(dropdown)
        
        # However, BeautifulSoup might have changed formatting when printing str(dropdown). 
        # A safer method is to just replace the element in bs4 and write it back
        dropdown.replace_with(dropdown_soup)
        
        # Format with html tag
        with open(filename, 'w', encoding='utf-8') as f:
            # formatter=None prevents bs4 from messing with existing HTML entities, 
            # but it will reformat the entire document
            f.write(str(soup))
            
        print(f"Updated {filename}")
    else:
        print(f"No notification dropdown found in {filename}")
