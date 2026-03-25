const fs = require('fs');

const accountHtml = fs.readFileSync('settings-account.html', 'utf8');

// The new horizontal scroll container template starts at <!-- Sidebar --> and ends before <!-- Content -->
// Let's explicitly define the exact HTML string for the Manufacturer Info page
const sidebarTemplateMfg = `                    <!-- Sidebar -->
                    <div class="w-full md:w-64 flex flex-row md:flex-col gap-3 md:gap-2 shrink-0 overflow-x-auto scrollbar-hide pb-2 md:pb-0 mb-4 md:mb-0">
                        <a href="settings-account.html"
                            class="flex items-center md:justify-start justify-center gap-2 md:gap-3 px-6 py-2.5 md:px-4 md:py-3 bg-[#f8fafc] md:bg-transparent text-[#64748b] md:text-slate-500 hover:bg-gray-100 md:hover:bg-gray-50 hover:text-slate-900 rounded-lg md:rounded-xl font-medium text-[14px] md:text-sm transition-colors whitespace-nowrap shrink-0">
                            <i class="ph ph-user-circle text-[18px] md:text-lg"></i>
                            Account
                        </a>
                        <a href="settings-manufacturer.html"
                            class="flex items-center md:justify-start justify-center gap-2 md:gap-3 px-6 py-2.5 md:px-4 md:py-3 bg-[#eff6ff] md:bg-blue-50 text-[#3b82f6] md:text-blue-600 rounded-lg md:rounded-xl font-medium text-[14px] md:text-sm transition-colors whitespace-nowrap shrink-0">
                            <i class="ph ph-buildings text-[18px] md:text-lg"></i>
                            Manufacturer Info
                        </a>
                        <a href="settings-security.html"
                            class="flex items-center md:justify-start justify-center gap-2 md:gap-3 px-6 py-2.5 md:px-4 md:py-3 bg-[#f8fafc] md:bg-transparent text-[#64748b] md:text-slate-500 hover:bg-gray-100 md:hover:bg-gray-50 hover:text-slate-900 rounded-lg md:rounded-xl font-medium text-[14px] md:text-sm transition-colors whitespace-nowrap shrink-0">
                            <i class="ph ph-lock-key text-[18px] md:text-lg"></i>
                            Security
                        </a>
                    </div>`;

const mfgFile = 'settings-manufacturer.html';
let mfgContent = fs.readFileSync(mfgFile, 'utf8');
const oldMfgSidebarRegex = /<!-- Sidebar -->[\s\S]*?<\/div>\s*<!-- Content -->/m;
mfgContent = mfgContent.replace(oldMfgSidebarRegex, sidebarTemplateMfg + '\n\n                    <!-- Content -->');
fs.writeFileSync(mfgFile, mfgContent, 'utf8');
console.log("Updated settings-manufacturer.html sidebar");

const sidebarTemplateSec = `                    <!-- Sidebar -->
                    <div class="w-full md:w-64 flex flex-row md:flex-col gap-3 md:gap-2 shrink-0 overflow-x-auto scrollbar-hide pb-2 md:pb-0 mb-4 md:mb-0">
                        <a href="settings-account.html"
                            class="flex items-center md:justify-start justify-center gap-2 md:gap-3 px-6 py-2.5 md:px-4 md:py-3 bg-[#f8fafc] md:bg-transparent text-[#64748b] md:text-slate-500 hover:bg-gray-100 md:hover:bg-gray-50 hover:text-slate-900 rounded-lg md:rounded-xl font-medium text-[14px] md:text-sm transition-colors whitespace-nowrap shrink-0">
                            <i class="ph ph-user-circle text-[18px] md:text-lg"></i>
                            Account
                        </a>
                        <a href="settings-manufacturer.html"
                            class="flex items-center md:justify-start justify-center gap-2 md:gap-3 px-6 py-2.5 md:px-4 md:py-3 bg-[#f8fafc] md:bg-transparent text-[#64748b] md:text-slate-500 hover:bg-gray-100 md:hover:bg-gray-50 hover:text-slate-900 rounded-lg md:rounded-xl font-medium text-[14px] md:text-sm transition-colors whitespace-nowrap shrink-0">
                            <i class="ph ph-buildings text-[18px] md:text-lg"></i>
                            Manufacturer Info
                        </a>
                        <a href="settings-security.html"
                            class="flex items-center md:justify-start justify-center gap-2 md:gap-3 px-6 py-2.5 md:px-4 md:py-3 bg-[#eff6ff] md:bg-blue-50 text-[#3b82f6] md:text-blue-600 rounded-lg md:rounded-xl font-medium text-[14px] md:text-sm transition-colors whitespace-nowrap shrink-0">
                            <i class="ph ph-lock-key text-[18px] md:text-lg"></i>
                            Security
                        </a>
                    </div>`;

const secFile = 'settings-security.html';
let secContent = fs.readFileSync(secFile, 'utf8');
const oldSecSidebarRegex = /<!-- Sidebar -->[\s\S]*?<\/div>\s*<!-- Content -->/m;
secContent = secContent.replace(oldSecSidebarRegex, sidebarTemplateSec + '\n\n                    <!-- Content -->');
fs.writeFileSync(secFile, secContent, 'utf8');
console.log("Updated settings-security.html sidebar");
