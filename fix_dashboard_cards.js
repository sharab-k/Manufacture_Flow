const fs = require('fs');

let html = fs.readFileSync('dashboard-filled.html', 'utf8');

const regex = /<div class="flex flex-col gap-4 md:gap-5 p-4 md:p-6">[\s\S]*?<!-- Notifications \(Span 1\) -->/;

const replacement = `<div class="flex flex-col gap-4 md:gap-5 p-4 md:p-6">
                            <!-- Brief Card 1 -->
                            <div class="p-4 md:p-6 relative bg-[#f8fafc] md:bg-[#f4f6f9] border border-transparent rounded-[12px] md:rounded-[16px]">
                                <a href="brief-detail.html"
                                    class="hidden md:flex absolute top-6 right-6 items-center gap-1 text-[#448ae6] text-[14px] font-medium hover:underline hover:opacity-80">
                                    View Details <i class="ph ph-arrow-up-right text-[16px]"></i>
                                </a>
                                <div class="flex flex-col">
                                    <div class="flex items-center justify-between md:justify-start mb-2 md:mb-2 w-full">
                                        <div class="flex items-center gap-2 md:gap-3">
                                            <span class="hidden md:inline-flex px-3 py-1 rounded-full bg-[#e0e7ff] text-[#6366f1] text-[13px] font-medium">Invited</span>
                                            <span class="inline-flex md:hidden px-2.5 py-0.5 rounded-full bg-[#cffafe] text-[#0ea5e9] text-[11px] font-medium">In Discussion</span>
                                            <i class="ph ph-info text-[#94a3b8] text-[16px] md:text-[18px]"></i>
                                        </div>
                                        <a href="brief-detail.html"
                                            class="flex md:hidden items-center gap-[2px] text-[#448ae6] text-[12px] font-medium hover:underline">
                                            View Details <i class="ph ph-arrow-up-right text-[14px]"></i>
                                        </a>
                                    </div>
                                    <h4 class="font-bold text-[#0e1726] text-[14px] md:text-[16px] mb-0.5 md:mb-2 mt-1 md:mt-0">Premium Vitamin D3 Supplement</h4>
                                    <p class="text-[#64748b] text-[12px] md:text-[14px] mb-4 md:mb-5">Evergreenapparel.co</p>
                                    <div class="flex flex-wrap items-center gap-2 md:gap-4">
                                        <div
                                            class="flex items-center gap-1.5 md:gap-2 text-[#334155] px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-gray-200 bg-white">
                                            <i class="ph ph-file-text text-[14px] md:text-[16px] text-[#64748b]"></i>
                                            <span class="text-[11px] md:text-[13px] font-medium">Dietary Supplements</span>
                                        </div>
                                        <div
                                            class="flex items-center gap-1.5 md:gap-2 text-[#334155] px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-gray-200 bg-white">
                                            <i class="ph ph-wallet text-[14px] md:text-[16px] text-[#64748b]"></i>
                                            <span class="text-[11px] md:text-[13px] font-medium">€1000 - €100000</span>
                                        </div>
                                        <div
                                            class="hidden md:flex items-center gap-2 text-[#334155] px-4 py-1.5 rounded-full border border-gray-200 bg-white">
                                            <i class="ph ph-package text-[16px] text-[#64748b]"></i>
                                            <span class="text-[13px] font-medium">400 units</span>
                                        </div>
                                        <div
                                            class="hidden md:flex items-center gap-2 text-[#334155] px-4 py-1.5 rounded-full border border-gray-200 bg-white">
                                            <i class="ph ph-calendar-blank text-[16px] text-[#64748b]"></i>
                                            <span class="text-[13px] font-medium">2026-04-15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Brief Card 2 -->
                            <div class="p-4 md:p-6 relative bg-[#f8fafc] md:bg-[#f4f6f9] border border-transparent rounded-[12px] md:rounded-[16px]">
                                <a href="brief-detail.html"
                                    class="hidden md:flex absolute top-6 right-6 items-center gap-1 text-[#448ae6] text-[14px] font-medium hover:underline hover:opacity-80">
                                    View Details <i class="ph ph-arrow-up-right text-[16px]"></i>
                                </a>
                                <div class="flex flex-col">
                                    <div class="flex items-center justify-between md:justify-start mb-2 md:mb-2 w-full">
                                        <div class="flex items-center gap-2 md:gap-3">
                                            <span class="hidden md:inline-flex px-3 py-1 rounded-full bg-[#e0f2fe] text-[#0284c7] text-[13px] font-medium">Proposal Submitted</span>
                                            <span class="inline-flex md:hidden px-2.5 py-0.5 rounded-full bg-[#cffafe] text-[#0ea5e9] text-[11px] font-medium">In Discussion</span>
                                            <i class="ph ph-info text-[#94a3b8] text-[16px] md:text-[18px]"></i>
                                        </div>
                                        <a href="brief-detail.html"
                                            class="flex md:hidden items-center gap-[2px] text-[#448ae6] text-[12px] font-medium hover:underline">
                                            View Details <i class="ph ph-arrow-up-right text-[14px]"></i>
                                        </a>
                                    </div>
                                    <h4 class="font-bold text-[#0e1726] text-[14px] md:text-[16px] mb-0.5 md:mb-2 mt-1 md:mt-0">Premium Vitamin D3 Supplement</h4>
                                    <p class="text-[#64748b] text-[12px] md:text-[14px] mb-4 md:mb-5">Evergreenapparel.co</p>
                                    <div class="flex flex-wrap items-center gap-2 md:gap-4">
                                        <div
                                            class="flex items-center gap-1.5 md:gap-2 text-[#334155] px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-gray-200 bg-white">
                                            <i class="ph ph-file-text text-[14px] md:text-[16px] text-[#64748b]"></i>
                                            <span class="text-[11px] md:text-[13px] font-medium">Dietary Supplements</span>
                                        </div>
                                        <div
                                            class="flex items-center gap-1.5 md:gap-2 text-[#334155] px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-gray-200 bg-white">
                                            <i class="ph ph-wallet text-[14px] md:text-[16px] text-[#64748b]"></i>
                                            <span class="text-[11px] md:text-[13px] font-medium">€1000 - €100000</span>
                                        </div>
                                        <div
                                            class="hidden md:flex items-center gap-2 text-[#334155] px-4 py-1.5 rounded-full border border-gray-200 bg-white">
                                            <i class="ph ph-package text-[16px] text-[#64748b]"></i>
                                            <span class="text-[13px] font-medium">400 units</span>
                                        </div>
                                        <div
                                            class="hidden md:flex items-center gap-2 text-[#334155] px-4 py-1.5 rounded-full border border-gray-200 bg-white">
                                            <i class="ph ph-calendar-blank text-[16px] text-[#64748b]"></i>
                                            <span class="text-[13px] font-medium">2026-04-15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Brief Card 3 -->
                            <div class="p-4 md:p-6 relative bg-[#f8fafc] md:bg-[#f4f6f9] border border-transparent rounded-[12px] md:rounded-[16px]">
                                <a href="brief-detail.html"
                                    class="hidden md:flex absolute top-6 right-6 items-center gap-1 text-[#448ae6] text-[14px] font-medium hover:underline hover:opacity-80">
                                    View Details <i class="ph ph-arrow-up-right text-[16px]"></i>
                                </a>
                                <div class="flex flex-col">
                                    <div class="flex items-center justify-between md:justify-start mb-2 md:mb-2 w-full">
                                        <div class="flex items-center gap-2 md:gap-3">
                                            <span class="hidden md:inline-flex px-3 py-1 rounded-full bg-[#fef3c7] text-[#f59e0b] text-[13px] font-medium">Matched</span>
                                            <span class="inline-flex md:hidden px-2.5 py-0.5 rounded-full bg-[#cffafe] text-[#0ea5e9] text-[11px] font-medium">In Discussion</span>
                                            <i class="ph ph-info text-[#94a3b8] text-[16px] md:text-[18px]"></i>
                                        </div>
                                        <a href="brief-detail.html"
                                            class="flex md:hidden items-center gap-[2px] text-[#448ae6] text-[12px] font-medium hover:underline">
                                            View Details <i class="ph ph-arrow-up-right text-[14px]"></i>
                                        </a>
                                    </div>
                                    <h4 class="font-bold text-[#0e1726] text-[14px] md:text-[16px] mb-0.5 md:mb-2 mt-1 md:mt-0">Premium Vitamin D3 Supplement</h4>
                                    <p class="text-[#64748b] text-[12px] md:text-[14px] mb-4 md:mb-5">Evergreenapparel.co</p>
                                    <div class="flex flex-wrap items-center gap-2 md:gap-4">
                                        <div
                                            class="flex items-center gap-1.5 md:gap-2 text-[#334155] px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-gray-200 bg-white">
                                            <i class="ph ph-file-text text-[14px] md:text-[16px] text-[#64748b]"></i>
                                            <span class="text-[11px] md:text-[13px] font-medium">Dietary Supplements</span>
                                        </div>
                                        <div
                                            class="flex items-center gap-1.5 md:gap-2 text-[#334155] px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-gray-200 bg-white">
                                            <i class="ph ph-wallet text-[14px] md:text-[16px] text-[#64748b]"></i>
                                            <span class="text-[11px] md:text-[13px] font-medium">€1000 - €100000</span>
                                        </div>
                                        <div
                                            class="hidden md:flex items-center gap-2 text-[#334155] px-4 py-1.5 rounded-full border border-gray-200 bg-white">
                                            <i class="ph ph-package text-[16px] text-[#64748b]"></i>
                                            <span class="text-[13px] font-medium">400 units</span>
                                        </div>
                                        <div
                                            class="hidden md:flex items-center gap-2 text-[#334155] px-4 py-1.5 rounded-full border border-gray-200 bg-white">
                                            <i class="ph ph-calendar-blank text-[16px] text-[#64748b]"></i>
                                            <span class="text-[13px] font-medium">2026-04-15</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Notifications (Span 1) -->`;

if (html.match(regex)) {
    html = html.replace(regex, replacement);
    fs.writeFileSync('dashboard-filled.html', html, 'utf8');
    console.log('Successfully replaced brief cards via regex.');
} else {
    console.error('Failed to match brief cards region!');
}
