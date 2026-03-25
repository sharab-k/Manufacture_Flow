const fs = require('fs');
let html = fs.readFileSync('dashboard-filled.html', 'utf8');

// 1. Title Typo
html = html.replace('Manufacture Dashboard', 'Manufacturer Dashboard');

// 2. Alert Banner mobile padding
html = html.replace(
    'class="bg-[#f0f9ff] border border-[#bae6fd] rounded-[10px] p-4 flex items-center justify-between mb-8"',
    'class="hidden md:flex bg-[#f0f9ff] border border-[#bae6fd] rounded-[10px] p-2 pr-4 flex-col md:flex-row items-center justify-between mb-8"'
).replace(
    '<button class="text-[#448ae6] text-[14px] font-bold underline hover:text-blue-700 whitespace-nowrap">Review Brief</button>',
    '<button class="text-[#448ae6] text-[14px] font-bold underline hover:text-blue-700 whitespace-nowrap mt-3 md:mt-0 p-2 md:p-0">Review Brief</button>'
);

// 3. Stats row Grid
html = html.replace(
    '<div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">',
    '<div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">'
);

// Stats Cards replacements
html = html.replace(/class="p-\[20px\] pb-\[16px\] border border-\[#e2e8f0\] bg-white rounded-\[16px\] flex items-center justify-between shadow-\[0_1px_2px_rgba\(0,0,0,0\.02\)\]"/g, 'class="p-3 md:p-[20px] pb-2 md:pb-[16px] border border-[#e2e8f0] bg-white rounded-[12px] md:rounded-[16px] flex items-center justify-between shadow-[0_1px_2px_rgba(0,0,0,0.02)]"');
html = html.replace(/<span class="block text-\[13px\] text-\[#64748b\] mb-\[6px\]">([^<]+)<\/span>/g, '<span class="block text-[11px] md:text-[13px] text-[#64748b] mb-0.5 md:mb-[6px]">$1</span>');
html = html.replace(/<span class="block text-\[24px\] font-bold text-\[#0e1726\] leading-none">([^<]+)<\/span>/g, '<span class="block text-[20px] md:text-[24px] font-bold text-[#0e1726] leading-none">$1</span>');
html = html.replace(/<div\s+class="w-12 h-12 rounded-\[12px\] bg-\[#f8fafc\] flex items-center justify-center border border-gray-100">\s*<i class="ph ph-[^"]+ text-\[20px\] text-\[#334155\]"><\/i>\s*<\/div>/g, match => match.replace('class="w-12', 'class="hidden md:flex w-12'));


// 4. Recent Briefs Layout
html = html.replace(
    'class="col-span-1 xl:col-span-2 bg-white border border-[#e2e8f0] rounded-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col overflow-hidden h-fit"',
    'class="col-span-1 xl:col-span-2 bg-white border border-[#e2e8f0] rounded-[12px] md:rounded-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col overflow-hidden h-fit mb-6 md:mb-0"'
);
html = html.replace(
    'class="flex justify-between items-center p-6 border-b border-[#e2e8f0]"',
    'class="flex justify-between items-center p-4 md:p-6 border-b border-[#e2e8f0]"'
);
html = html.replace(
    '<h3 class="font-bold text-[#0e1726] text-[16px]">Recent Briefs</h3>',
    '<h3 class="font-bold text-[#0e1726] text-[15px] md:text-[16px]">Recent Briefs</h3>'
);
html = html.replace(
    '<a href="#" class="text-[14px] text-[#448ae6] font-medium hover:underline">View All</a>',
    '<a href="#" class="text-[13px] md:text-[14px] text-[#448ae6] font-medium hover:underline">View All</a>'
);
html = html.replace(
    'class="flex flex-col gap-5 p-6"',
    'class="flex flex-col gap-4 md:gap-5 p-4 md:p-6"'
);

// 5. Brief Card details (including new light grey bg for mobile!)
html = html.replace(/class="p-6 relative bg-\[#f4f6f9\] rounded-\[16px\]"/g, 'class="p-4 md:p-6 relative bg-[#f8fafc] md:bg-[#f4f6f9] border border-transparent rounded-[12px] md:rounded-[16px]"');
html = html.replace(/class="absolute top-6 right-6 flex items-center gap-1 text-\[#448ae6\] text-\[14px\] font-medium hover:underline hover:opacity-80"/g, 'class="hidden md:flex absolute top-6 right-6 items-center gap-1 text-[#448ae6] text-[14px] font-medium hover:underline hover:opacity-80"');

// Fix Brief card titles block
html = html.replace(/<h4 class="font-bold text-\[#0e1726\] text-\[16px\]">([^<]+)\s*<\/h4>\s*<span/g, '<h4 class="hidden md:block font-bold text-[#0e1726] text-[16px]">$1</h4>\n<span');
// Wait, I will just rewrite the entire inner structure of the 3 "flex items-center gap-3 mb-2" blocks because they need the mobile right-aligned "View Details" etc.
const oldBrief1 = `                                    <div class="flex items-center gap-3 mb-2">
                                        <h4 class="font-bold text-[#0e1726] text-[16px]">Premium Vitamin D3 Supplement
                                        </h4>
                                        <span
                                            class="px-3 py-1 rounded-full bg-[#e0e7ff] text-[#6366f1] text-[13px] font-medium">Invited</span>
                                        <i class="ph ph-info text-[#94a3b8] text-[18px]"></i>
                                    </div>
                                    <p class="text-[#64748b] text-[14px] mb-5">Evergreenapparel.co</p>`;
const newBrief1 = `                                    <div class="flex items-center justify-between md:justify-start mb-2 md:mb-2 w-full">
                                        <div class="flex items-center gap-2 md:gap-3">
                                            <span class="hidden md:inline-flex px-3 py-1 rounded-full bg-[#e0e7ff] text-[#6366f1] text-[13px] font-medium">Invited</span>
                                            <span class="inline-flex md:hidden px-2.5 py-0.5 rounded-full bg-[#cffafe] text-[#0ea5e9] text-[11px] font-medium">In Discussion</span>
                                            <i class="ph ph-info text-[#94a3b8] text-[16px] md:text-[18px]"></i>
                                        </div>
                                        <a href="brief-detail.html" class="flex md:hidden items-center gap-[2px] text-[#448ae6] text-[12px] font-medium hover:underline">
                                            View Details <i class="ph ph-arrow-up-right text-[14px]"></i>
                                        </a>
                                    </div>
                                    <h4 class="font-bold text-[#0e1726] text-[14px] md:text-[16px] mb-0.5 md:mb-2 mt-1 md:mt-0">Premium Vitamin D3 Supplement</h4>
                                    <p class="text-[#64748b] text-[12px] md:text-[14px] mb-4 md:mb-5">Evergreenapparel.co</p>`;
html = html.replace(oldBrief1, newBrief1);

const oldBrief2 = `                                    <div class="flex items-center gap-3 mb-2">
                                        <h4 class="font-bold text-[#0e1726] text-[16px]">Premium Vitamin D3 Supplement
                                        </h4>
                                        <span
                                            class="px-3 py-1 rounded-full bg-[#e0f2fe] text-[#0284c7] text-[13px] font-medium">Proposal Submitted</span>
                                        <i class="ph ph-info text-[#94a3b8] text-[18px]"></i>
                                    </div>
                                    <p class="text-[#64748b] text-[14px] mb-5">Evergreenapparel.co</p>`;
const newBrief2 = `                                    <div class="flex items-center justify-between md:justify-start mb-2 md:mb-2 w-full">
                                        <div class="flex items-center gap-2 md:gap-3">
                                            <span class="hidden md:inline-flex px-3 py-1 rounded-full bg-[#e0f2fe] text-[#0284c7] text-[13px] font-medium">Proposal Submitted</span>
                                            <span class="inline-flex md:hidden px-2.5 py-0.5 rounded-full bg-[#cffafe] text-[#0ea5e9] text-[11px] font-medium">In Discussion</span>
                                            <i class="ph ph-info text-[#94a3b8] text-[16px] md:text-[18px]"></i>
                                        </div>
                                        <a href="brief-detail.html" class="flex md:hidden items-center gap-[2px] text-[#448ae6] text-[12px] font-medium hover:underline">
                                            View Details <i class="ph ph-arrow-up-right text-[14px]"></i>
                                        </a>
                                    </div>
                                    <h4 class="font-bold text-[#0e1726] text-[14px] md:text-[16px] mb-0.5 md:mb-2 mt-1 md:mt-0">Premium Vitamin D3 Supplement</h4>
                                    <p class="text-[#64748b] text-[12px] md:text-[14px] mb-4 md:mb-5">Evergreenapparel.co</p>`;
html = html.replace(oldBrief2, newBrief2);                                    

const oldBrief3 = `                                    <div class="flex items-center gap-3 mb-2">
                                        <h4 class="font-bold text-[#0e1726] text-[16px]">Premium Vitamin D3 Supplement
                                        </h4>
                                        <span
                                            class="px-3 py-1 rounded-full bg-[#fef3c7] text-[#f59e0b] text-[13px] font-medium">Matched</span>
                                        <i class="ph ph-info text-[#94a3b8] text-[18px]"></i>
                                    </div>
                                    <p class="text-[#64748b] text-[14px] mb-5">Evergreenapparel.co</p>`;
const newBrief3 = `                                    <div class="flex items-center justify-between md:justify-start mb-2 md:mb-2 w-full">
                                        <div class="flex items-center gap-2 md:gap-3">
                                            <span class="hidden md:inline-flex px-3 py-1 rounded-full bg-[#fef3c7] text-[#f59e0b] text-[13px] font-medium">Matched</span>
                                            <span class="inline-flex md:hidden px-2.5 py-0.5 rounded-full bg-[#cffafe] text-[#0ea5e9] text-[11px] font-medium">In Discussion</span>
                                            <i class="ph ph-info text-[#94a3b8] text-[16px] md:text-[18px]"></i>
                                        </div>
                                        <a href="brief-detail.html" class="flex md:hidden items-center gap-[2px] text-[#448ae6] text-[12px] font-medium hover:underline">
                                            View Details <i class="ph ph-arrow-up-right text-[14px]"></i>
                                        </a>
                                    </div>
                                    <h4 class="font-bold text-[#0e1726] text-[14px] md:text-[16px] mb-0.5 md:mb-2 mt-1 md:mt-0">Premium Vitamin D3 Supplement</h4>
                                    <p class="text-[#64748b] text-[12px] md:text-[14px] mb-4 md:mb-5">Evergreenapparel.co</p>`;
html = html.replace(oldBrief3, newBrief3);

// Hide units and calendar tags on mobile
html = html.replace(/<div\s+class="flex items-center gap-2 text-\[#334155\] px-4 py-1\.5 rounded-full border border-gray-200 bg-white">\s*<i class="ph ph-package/g, '<div class="hidden md:flex items-center gap-2 text-[#334155] px-4 py-1.5 rounded-full border border-gray-200 bg-white">\t\t\t\t\t\t\t<i class="ph ph-package');
html = html.replace(/<div\s+class="flex items-center gap-2 text-\[#334155\] px-4 py-1\.5 rounded-full border border-gray-200 bg-white">\s*<i class="ph ph-calendar-blank/g, '<div class="hidden md:flex items-center gap-2 text-[#334155] px-4 py-1.5 rounded-full border border-gray-200 bg-white">\t\t\t\t\t\t\t<i class="ph ph-calendar-blank');

html = html.replace(/<div\s+class="flex items-center gap-2 text-\[#334155\] px-4 py-1\.5 rounded-full border border-gray-200 bg-white">/g, '<div class="flex items-center gap-1.5 md:gap-2 text-[#334155] px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-gray-200 bg-white">');
html = html.replace(/<i class="ph ph-file-text text-\[16px\]/g, '<i class="ph ph-file-text text-[14px] md:text-[16px]');
html = html.replace(/<i class="ph ph-wallet text-\[16px\]/g, '<i class="ph ph-wallet text-[14px] md:text-[16px]');


// 6. Recent Activity List
const oldNotificationsWrapper = `                    <!-- Notifications (Span 1) -->
                    <div
                        class="col-span-1 bg-white border border-[#e2e8f0] rounded-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col overflow-hidden h-fit">
                        <div class="flex justify-between items-center p-6 border-b border-[#e2e8f0]">
                            <h3 class="font-bold text-[#0e1726] text-[16px]">Notifications</h3>
                            <a href="#" class="text-[14px] text-[#448ae6] font-medium hover:underline">View All</a>
                        </div>

                        <div class="flex flex-col gap-6 p-6">
                            <!-- Notification Item 1 -->
                            <div>
                                <div class="flex justify-between items-start mb-2">
                                    <p class="text-[14px] font-bold text-[#0e1726]">New manufacturer match <span
                                            class="inline-flex px-2.5 py-1 rounded-full bg-[#e0f2fe] text-[#0284c7] text-[12px] font-medium ml-2">New</span>
                                    </p>
                                    <span class="text-[12px] text-[#64748b]">2h ago</span>
                                </div>
                                <p class="text-[14px] text-[#64748b] leading-relaxed">3 new manufacturers have been
                                    matched to your vitamin supplement brief.</p>
                            </div>

                            <!-- Notification Item 2 -->
                            <div class="pt-6 border-t border-[#e2e8f0]">
                                <div class="flex justify-between items-start mb-2">
                                    <p class="text-[14px] font-bold text-[#0e1726]">Brief published</p>
                                    <span class="text-[12px] text-[#64748b]">5h ago</span>
                                </div>
                                <p class="text-[14px] text-[#64748b] leading-relaxed">Your 'Premium Vitamin D3
                                    Supplement' brief has been successfully published</p>
                            </div>

                            <!-- Notification Item 3 -->
                            <div class="pt-6 border-t border-[#e2e8f0]">
                                <div class="flex justify-between items-start mb-2">
                                    <p class="text-[14px] font-bold text-[#0e1726]">Draft reminder</p>
                                    <span class="text-[12px] text-[#64748b]">1d ago</span>
                                </div>
                                <p class="text-[14px] text-[#64748b] leading-relaxed">You have 2 drafts that haven't
                                    been updated in over a week</p>
                            </div>

                            <!-- Notification Item 4 -->
                            <div class="pt-6 border-t border-[#e2e8f0]">
                                <div class="flex justify-between items-start mb-2">
                                    <p class="text-[14px] font-bold text-[#0e1726]">Brief published</p>
                                    <span class="text-[12px] text-[#64748b]">2d ago</span>
                                </div>
                                <p class="text-[14px] text-[#64748b] leading-relaxed">Your 'Premium Vitamin D3
                                    Supplement' brief has been successfully published</p>
                            </div>

                            <!-- Notification Item 5 -->
                            <div class="pt-6 border-t border-[#e2e8f0]">
                                <div class="flex justify-between items-start mb-2">
                                    <p class="text-[14px] font-bold text-[#0e1726]">Draft reminder</p>
                                    <span class="text-[12px] text-[#64748b]">1w ago</span>
                                </div>
                                <p class="text-[14px] text-[#64748b] leading-relaxed">You have 2 drafts that haven't
                                    been updated in over a week</p>
                            </div>
                        </div>
                    </div>`;

const newNotificationsWrapper = `                    <!-- Notifications (Span 1) -->
                    <div class="col-span-1 bg-white border border-[#e2e8f0] md:border-transparent md:bg-transparent rounded-[12px] md:rounded-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.02)] md:shadow-none flex flex-col overflow-hidden h-fit">
                        <div class="flex justify-between items-center p-4 md:p-6 border-b border-[#e2e8f0] md:border-none md:pb-3">
                            <h3 class="font-bold text-[#0e1726] text-[15px] md:hidden">Recent Activity</h3>
                            <h3 class="font-bold text-[#0e1726] text-[16px] hidden md:block">Notifications</h3>
                            <a href="#" class="text-[13px] md:hidden text-[#448ae6] font-medium hover:underline">Mark all as read</a>
                            <a href="#" class="text-[14px] hidden md:block text-[#448ae6] font-medium hover:underline">View All</a>
                        </div>

                        <div class="flex flex-col bg-white md:bg-transparent md:border md:border-[#e2e8f0] md:rounded-[16px] divide-y divide-[#e2e8f0]">
                            <!-- Notification Item 1 -->
                            <div class="p-4 md:p-6">
                                <div class="flex justify-between items-center mb-1 md:mb-2 text-left">
                                    <p class="text-[13px] md:text-[14px] font-bold text-[#0e1726]">New manufacturer match</p>
                                    <span class="inline-flex px-3 py-0.5 rounded-full bg-[#cffafe] text-[#0ea5e9] text-[11px] font-medium md:bg-[#e0f2fe] md:text-[#0284c7] md:px-2.5 md:py-1 md:text-[12px]">New</span>
                                    <span class="hidden text-[12px] text-[#64748b]">2h ago</span>
                                </div>
                                <p class="text-[13px] md:text-[14px] text-[#64748b] leading-relaxed">3 new manufacturers have been matched to your vitamin supplement brief.</p>
                            </div>

                            <!-- Notification Item 2 -->
                            <div class="p-4 md:p-6">
                                <div class="flex justify-between items-center mb-1 md:mb-2 text-left">
                                    <p class="text-[13px] md:text-[14px] font-bold text-[#0e1726]">Brief Published</p>
                                    <span class="hidden md:inline text-[12px] text-[#64748b]">5h ago</span>
                                </div>
                                <p class="text-[13px] md:text-[14px] text-[#64748b] leading-relaxed">3 new manufacturers have been matched to your vitamin supplement brief</p>
                            </div>

                            <!-- Notification Item 3 -->
                            <div class="p-4 md:p-6">
                                <div class="flex justify-between items-center mb-1 md:mb-2 text-left">
                                    <p class="text-[13px] md:text-[14px] font-bold text-[#0e1726]">Draft Published</p>
                                    <span class="hidden md:inline text-[12px] text-[#64748b]">1d ago</span>
                                </div>
                                <p class="text-[13px] md:text-[14px] text-[#64748b] leading-relaxed">3 new manufacturers have been matched to your vitamin supplement brief</p>
                            </div>

                            <!-- Notification Item 4 -->
                            <div class="p-4 md:p-6">
                                <div class="flex justify-between items-center mb-1 md:mb-2 text-left">
                                    <p class="text-[13px] md:text-[14px] font-bold text-[#0e1726]">Brief Published</p>
                                    <span class="hidden md:inline text-[12px] text-[#64748b]">2d ago</span>
                                </div>
                                <p class="text-[13px] md:text-[14px] text-[#64748b] leading-relaxed">3 new manufacturers have been matched to your vitamin supplement brief</p>
                            </div>

                            <!-- Notification Item 5 -->
                            <div class="p-4 md:p-6">
                                <div class="flex justify-between items-center mb-1 md:mb-2 text-left">
                                    <p class="text-[13px] md:text-[14px] font-bold text-[#0e1726]">Draft Published</p>
                                    <span class="hidden md:inline text-[12px] text-[#64748b]">1w ago</span>
                                </div>
                                <p class="text-[13px] md:text-[14px] text-[#64748b] leading-relaxed">3 new manufacturers have been matched to your vitamin supplement brief</p>
                            </div>
                        </div>
                    </div>`;

html = html.replace(oldNotificationsWrapper, newNotificationsWrapper);

fs.writeFileSync('dashboard-filled.html', html, 'utf8');
console.log('Successfully completed non-destructive UI updates on dashboard-filled.html!');
