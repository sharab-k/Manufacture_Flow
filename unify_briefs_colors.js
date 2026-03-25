const fs = require('fs');
let html = fs.readFileSync('briefs.html', 'utf8');

// The dashboard standard hex equivalent for Tailwind generic colors
const colorMap = {
    // Brand Blue
    'text-blue-500': 'text-[#448ae6]',
    'text-blue-600': 'text-[#448ae6]',
    'bg-blue-600': 'bg-[#448ae6]',
    'hover:text-blue-600': 'hover:text-[#448ae6]',
    'hover:bg-blue-600': 'hover:bg-[#3476cb]',
    'hover:bg-blue-50': 'hover:bg-[#f0f9ff]',
    'bg-blue-50': 'bg-[#f0f9ff]',
    
    // Grays / Slates
    'text-slate-900': 'text-[#0e1726]',
    'text-slate-600': 'text-[#334155]',
    'text-slate-500': 'text-[#64748b]',
    'text-slate-400': 'text-[#94a3b8]',
    'text-gray-900': 'text-[#0e1726]',
    'text-gray-600': 'text-[#334155]',
    'text-gray-500': 'text-[#64748b]',
    'text-gray-400': 'text-[#94a3b8]',
    
    'bg-slate-900': 'bg-[#0e1726]',
    'bg-slate-50': 'bg-[#f8fafc]',
    'bg-gray-900': 'bg-[#0e1726]',
    'bg-gray-50': 'bg-[#f8fafc]',

    'border-gray-200': 'border-[#e2e8f0]',
    'border-slate-200': 'border-[#e2e8f0]',
    'border-gray-100': 'border-[#f1f5f9]',
    
    // Badges specific
    // Invited
    'bg-indigo-100': 'bg-[#e0e7ff]',
    'text-indigo-600': 'text-[#6366f1]',
    // Proposal Submitted
    'bg-sky-100': 'bg-[#e0f2fe]',
    'text-sky-600': 'text-[#0284c7]',
    // Not Proceeded
    'bg-rose-100': 'bg-[#ffe4e6]',
    'text-rose-600': 'text-[#e11d48]',
    // Matching
    'bg-purple-100': 'bg-[#f3e8ff]',
    'text-purple-600': 'text-[#9333ea]',
    // Completed
    'bg-emerald-100': 'bg-[#d1fae5]',
    'text-emerald-600': 'text-[#10b981]',
    // In Discussion
    'bg-cyan-100': 'bg-[#cffafe]',
    'text-cyan-600': 'text-[#0ea5e9]',
    // Draft
    'bg-amber-100': 'bg-[#fef3c7]',
    'text-amber-600': 'text-[#d97706]',
    // Closed
    'bg-slate-100': 'bg-[#f1f5f9]',
    // text-slate-600 -> '#334155' (already covered but applies here)
};

// Sort by length to avoid partial replacements (e.g. text-blue-50 vs text-blue-500)
const keys = Object.keys(colorMap).sort((a, b) => b.length - a.length);

keys.forEach(key => {
    const value = colorMap[key];
    // Use word boundaries if possible, but class names have hyphens. 
    // We can split by space/quote to guarantee class mapping.
    html = html.split(' ' + key + ' ').join(' ' + value + ' ');
    html = html.split('"' + key + ' ').join('"' + value + ' ');
    html = html.split(' ' + key + '"').join(' ' + value + '"');
});

// Fix specific layout classes that we missed like tag icon color text-slate-400 which should ideally match dashboard's tag icons text-[#64748b]
html = html.split('text-[#94a3b8] shrink-0').join('text-[#64748b] shrink-0');

fs.writeFileSync('briefs.html', html, 'utf8');
console.log('Hex color standardization complete.');
