const fs = require('fs');

let html = fs.readFileSync('dashboard-filled.html', 'utf8');

// 1. Title typo
html = html.replace('Manufacture Dashboard', 'Manufacturer Dashboard');

// 2. Recent Brief Cards mobile background & borders
const oldCardWrapper = 'bg-white md:bg-[#f4f6f9] border border-[#e2e8f0] md:border-transparent';
const newCardWrapper = 'bg-[#f8fafc] md:bg-[#f4f6f9] border border-transparent';
html = html.split(oldCardWrapper).join(newCardWrapper);

// 3. Activity List Item 1 "New" badge separation
const oldBadgeHTML = `New manufacturer match <span class="inline-flex md:hidden ml-1.5 px-1.5 py-0.5 rounded-[4px] text-[10px] font-bold bg-[#0e1726] text-white align-middle">New</span></p>
                                    <span
                                        class="hidden md:inline-flex px-2.5 py-1 rounded-full bg-[#e0f2fe] text-[#0284c7] text-[12px] font-medium">New</span>`;
const newBadgeHTML = `New manufacturer match</p>
                                    <span class="inline-flex px-3 py-0.5 rounded-full bg-[#cffafe] text-[#0ea5e9] text-[11px] font-medium md:bg-[#e0f2fe] md:text-[#0284c7] md:px-2.5 md:py-1 md:text-[12px]">New</span>`;
html = html.replace(oldBadgeHTML, newBadgeHTML);

// 4. Activity List Timestamps (hide on mobile)
// Currently they use `md:hidden text-[12px] text-[#64748b]`
html = html.split('md:hidden text-[12px] text-[#64748b]').join('hidden text-[12px] text-[#64748b]');

// 5. Activity List descriptions to match placeholder mockup
const desc1 = `Your 'Premium Vitamin D3
                                    Supplement' brief has been successfully published`;
const desc2 = `You have 2 drafts that haven't
                                    been updated in over a week`;
const placeholderText = `3 new manufacturers have been matched to your vitamin supplement brief`;

html = html.split(desc1).join(placeholderText);
html = html.split(desc2).join(placeholderText);

fs.writeFileSync('dashboard-filled.html', html, 'utf8');
console.log('Successfully completed non-destructive UI updates on dashboard-filled.html!');
