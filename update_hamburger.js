const fs = require('fs');
const path = require('path');
const dir = path.resolve(__dirname);
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const newDropdown = `<div id="hamburger-dropdown" data-dropdown-content
                            class="hidden absolute right-0 mt-3 w-[240px] bg-white rounded-[16px] border border-[#e2e8f0] shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-50 animate-fade-in text-left">
                            <div class="px-5 pt-5 pb-3">
                                <p class="text-[15px] font-bold text-[#0e1726]">Mark Thompson</p>
                                <p class="text-[13px] text-[#64748b] mt-0.5">mark@donau.ai</p>
                            </div>
                            <div class="flex flex-col pb-3">
                                <a href="dashboard-filled.html"
                                    class="flex items-center gap-3 px-5 py-2.5 hover:bg-[#f8fafc] text-[#475569] hover:text-[#448ae6] transition-colors">
                                    <i class="ph ph-house text-[18px]"></i>
                                    <span class="text-[14px] font-medium">Dashboard</span>
                                </a>
                                <a href="briefs.html"
                                    class="flex items-center gap-3 px-5 py-2.5 hover:bg-[#f8fafc] text-[#475569] hover:text-[#448ae6] transition-colors">
                                    <i class="ph ph-briefcase text-[18px]"></i>
                                    <span class="text-[14px] font-medium">Brief Invitations</span>
                                </a>
                                <a href="messages.html"
                                    class="flex items-center gap-3 px-5 py-2.5 hover:bg-[#f8fafc] text-[#475569] hover:text-[#448ae6] transition-colors">
                                    <i class="ph ph-chat-dots text-[18px]"></i>
                                    <span class="text-[14px] font-medium">Messages</span>
                                </a>
                                
                                <div class="h-2"></div>

                                <a href="settings-account.html"
                                    class="flex items-center gap-3 px-5 py-2.5 hover:bg-[#f8fafc] text-[#475569] hover:text-[#448ae6] transition-colors">
                                    <i class="ph ph-gear text-[18px]"></i>
                                    <span class="text-[14px] font-medium">Settings</span>
                                </a>
                                <a href="#"
                                    class="flex items-center gap-3 px-5 py-2.5 hover:bg-[#f8fafc] text-[#475569] hover:text-[#448ae6] transition-colors">
                                    <i class="ph ph-globe text-[18px]"></i>
                                    <span class="text-[14px] font-medium">Language</span>
                                </a>

                                <div class="h-2"></div>

                                <a href="signin.html"
                                    class="flex items-center gap-3 px-5 py-2.5 hover:bg-red-50 text-[#ef4444] transition-colors">
                                    <i class="ph ph-sign-out text-[18px]"></i>
                                    <span class="text-[14px] font-medium">Sign Out</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Scrollable Area -->`;

const regex = /<div id="hamburger-dropdown"[\s\S]*?<!-- Main Scrollable Area -->/;

let count = 0;
for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    if (regex.test(content)) {
        const updated = content.replace(regex, newDropdown);
        if (updated !== content) {
            fs.writeFileSync(file, updated, 'utf8');
            console.log("Updated " + file);
            count++;
        }
    }
}

console.log("Successfully updated " + count + " files.");
