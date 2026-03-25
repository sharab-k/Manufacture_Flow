const fs = require('fs');
let html = fs.readFileSync('briefs.html', 'utf8');

// 1. Standardize Hex Colors (Parity with Dashboard)
const colorMap = {
    'bg-gray-50': 'bg-[#f8fafc]',
    'text-slate-900': 'text-[#0e1726]',
    'text-slate-600': 'text-[#334155]',
    'text-slate-500': 'text-[#64748b]',
    'text-slate-400': 'text-[#94a3b8]',
    'border-gray-200': 'border-[#e2e8f0]',
    'border-gray-100': 'border-[#f1f5f9]',
    'text-blue-600': 'text-[#448ae6]',
    'bg-blue-600': 'bg-[#448ae6]',
    'border-[#448ae6]': 'border-[#448ae6]', // already hex but for consistency
};

Object.keys(colorMap).forEach(key => {
    const value = colorMap[key];
    html = html.split(' ' + key + ' ').join(' ' + value + ' ');
    html = html.split('"' + key + ' ').join('"' + value + ' ');
    html = html.split(' ' + key + '"').join(' ' + value + '"');
});

// 2. Fix Card 1 -> "Not Proceeding"
// The mockup shows "Not Proceeding" in a light red badge.
// Finding the Invited badge in Card 1 and replacing it.
html = html.replace(
    '<span class="bg-indigo-100 text-indigo-600 text-[11px] px-2.5 py-0.5 rounded-full font-medium">Invited</span>',
    '<span class="bg-[#fee2e2] text-[#ef4444] text-[11px] px-2.5 py-0.5 rounded-full font-medium">Not Proceeding</span>'
);
html = html.replace(
    '<span class="hidden md:inline-flex bg-indigo-100 text-indigo-600 text-sm px-2.5 py-0.5 rounded-full font-medium">Invited</span>',
    '<span class="hidden md:inline-flex bg-[#fee2e2] text-[#ef4444] text-sm px-2.5 py-0.5 rounded-full font-medium">Not Proceeding</span>'
);

// 3. Fix Sequence for other cards
// Card 2 -> In Discussion
html = html.replace(
    '<span class="bg-sky-100 text-sky-600 text-[11px] px-2.5 py-0.5 rounded-full font-medium">Proposal Submitted</span>',
    '<span class="bg-[#cffafe] text-[#0ea5e9] text-[11px] px-2.5 py-0.5 rounded-full font-medium">In Discussion</span>'
);
html = html.replace(
    '<span class="hidden md:inline-flex bg-sky-100 text-sky-600 text-sm px-2.5 py-0.5 rounded-full font-medium">Proposal Submitted</span>',
    '<span class="hidden md:inline-flex bg-[#cffafe] text-[#0ea5e9] text-sm px-2.5 py-0.5 rounded-full font-medium">In Discussion</span>'
);

// Card 3 -> Completed (Currently "Under Discussion" in code)
html = html.replace(
    '<span class="bg-blue-100 text-blue-600 text-sm px-2.5 py-0.5 rounded-full font-medium">Under\n                                            Discussion</span>',
    '<span class="hidden md:inline-flex bg-[#d1fae5] text-[#10b981] text-sm px-2.5 py-0.5 rounded-full font-medium">Completed</span>'
);
// Mobile version of Card 3 status
html = html.replace(
    '<span class="bg-blue-100 text-blue-600 text-[11px] px-2.5 py-0.5 rounded-full font-medium">Under Discussion</span>',
    '<span class="bg-[#d1fae5] text-[#10b981] text-[11px] px-2.5 py-0.5 rounded-full font-medium">Completed</span>'
);

// Card 4 and 5 - Will handle in a second pass if needed but let's just fix the first 3 for now to match the user's focus.

// 4. Align Mobile Card Layout
// Tags grid 2x2: the current code uses flex-wrap but doesn't have fixed widths for tags on mobile.
// I'll update the tag containers to use w-[calc(50%-0.25rem)] on mobile.
html = html.replace(
    /class="flex items-center gap-1.5 md:gap-2 bg-white px-2 py-1.5 md:px-3 md:py-1.5 rounded-full border border-\[#e2e8f0\]/g,
    'class="flex items-center gap-1.5 md:gap-2 bg-white px-2 py-1.5 md:px-3 md:py-1.5 rounded-full border border-[#e2e8f0] w-[calc(50%-0.25rem)] md:w-auto truncate justify-center md:justify-start'
);

// Ensure the "View" button is styled correctly at the bottom for mobile.
// The current code has:
// <a href="brief-detail.html" class="md:hidden w-full text-center py-2 bg-transparent text-[#448ae6] border border-[#448ae6] rounded-lg font-medium text-[13px] hover:bg-blue-50 transition-colors">View</a>
// This looks correct.

fs.writeFileSync('briefs.html', html, 'utf8');
console.log('Briefs.html updated successfully.');
