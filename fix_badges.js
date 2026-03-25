const fs = require('fs');

let html = fs.readFileSync('briefs.html', 'utf8');

// The mobile mockup shows specific states for the first 5 cards:
// Card 1: Invited (already correct)
// Card 2: In Discussion (currently Proposal Submitted)
// Card 3: Completed (currently Not Proceed)
// Card 4: Proposal Submitted (currently Matching)
// Card 5: Invited (currently Completed)

// Map to cleanly search and replace the badge containers for the first 5 instances.
// We'll target the text of the badge and its background classes.

const oldBadges = [
    // Card 2
    `<span class="bg-[#e0f2fe] text-[#0284c7] text-[11px] px-2.5 py-0.5 rounded-full font-medium">Proposal Submitted</span>`,
    `<span class="hidden md:inline-flex bg-[#e0f2fe] text-[#0284c7] text-sm px-2.5 py-0.5 rounded-full font-medium">Proposal Submitted</span>`,
    
    // Card 3
    `<span class="bg-[#ffe4e6] text-[#e11d48] text-[11px] px-2.5 py-0.5 rounded-full font-medium">Not Proceed</span>`,
    `<span class="hidden md:inline-flex bg-[#ffe4e6] text-[#e11d48] text-sm px-2.5 py-0.5 rounded-full font-medium">Not Proceed</span>`,
    
    // Card 4
    `<span class="bg-[#f3e8ff] text-[#9333ea] text-[11px] px-2.5 py-0.5 rounded-full font-medium">Matching</span>`,
    `<span class="hidden md:inline-flex bg-[#f3e8ff] text-[#9333ea] text-sm px-2.5 py-0.5 rounded-full font-medium">Matching</span>`,

    // Card 5
    `<span class="bg-[#d1fae5] text-[#10b981] text-[11px] px-2.5 py-0.5 rounded-full font-medium">Completed</span>`,
    `<span class="hidden md:inline-flex bg-[#d1fae5] text-[#10b981] text-sm px-2.5 py-0.5 rounded-full font-medium">Completed</span>`
];

const newBadges = [
    // Card 2 -> In Discussion
    `<span class="bg-[#cffafe] text-[#0ea5e9] text-[11px] px-2.5 py-0.5 rounded-full font-medium">In Discussion</span>`,
    `<span class="hidden md:inline-flex bg-[#cffafe] text-[#0ea5e9] text-sm px-2.5 py-0.5 rounded-full font-medium">In Discussion</span>`,
    
    // Card 3 -> Completed
    `<span class="bg-[#d1fae5] text-[#10b981] text-[11px] px-2.5 py-0.5 rounded-full font-medium">Completed</span>`,
    `<span class="hidden md:inline-flex bg-[#d1fae5] text-[#10b981] text-sm px-2.5 py-0.5 rounded-full font-medium">Completed</span>`,
    
    // Card 4 -> Proposal Submitted
    `<span class="bg-[#e0f2fe] text-[#0284c7] text-[11px] px-2.5 py-0.5 rounded-full font-medium">Proposal Submitted</span>`,
    `<span class="hidden md:inline-flex bg-[#e0f2fe] text-[#0284c7] text-sm px-2.5 py-0.5 rounded-full font-medium">Proposal Submitted</span>`,

    // Card 5 -> Invited
    `<span class="bg-[#e0e7ff] text-[#6366f1] text-[11px] px-2.5 py-0.5 rounded-full font-medium">Invited</span>`,
    `<span class="hidden md:inline-flex bg-[#e0e7ff] text-[#6366f1] text-sm px-2.5 py-0.5 rounded-full font-medium">Invited</span>`
];

for (let i = 0; i < oldBadges.length; i++) {
    html = html.replace(oldBadges[i], newBadges[i]);
}

fs.writeFileSync('briefs.html', html, 'utf8');
console.log('Successfully aligned placeholder status badges with mockup layout.');
