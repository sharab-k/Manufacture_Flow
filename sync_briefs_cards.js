const fs = require('fs');

let html = fs.readFileSync('briefs.html', 'utf8');

// 1. Unify Stats Grid gap with dashboard
html = html.replace(
    '<div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">',
    '<div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">'
);

// 2. Unify Brief Card backgrounds and borders with dashboard
html = html.split('bg-gray-50 rounded-2xl border border-gray-100 md:border-transparent p-4 md:p-6 transition-all brief-card-header').join('bg-[#f8fafc] rounded-[12px] md:rounded-[16px] border border-[#e2e8f0] md:border-transparent p-4 md:p-6 transition-all brief-card-header');

fs.writeFileSync('briefs.html', html, 'utf8');
console.log('Successfully synchronized briefs.html card aesthetics with dashboard.');
