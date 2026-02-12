# Script to apply notification fixes to all authenticated pages

$files = @(
    'messages-empty.html',
    'briefs.html',
    'dashboard-empty.html',
    'settings-account.html',
    'settings-manufacturer.html',
    'settings-security.html',
    'brief-detail.html',
    'brief-detail-chat.html',
    'brief-detail-proposal.html'
)

foreach ($file in $files) {
    Write-Host "Processing $file..."
    
    $content = Get-Content $file -Raw -Encoding UTF8
    
    # 1. Change gap-2 to gap-0 in the Right Actions div
    $content = $content -replace '(<div class="flex items-center )gap-2(">\s*\r?\n\s*\r?\n\s*<!-- Help -->)', '$1gap-0$2'
    
    # 2. Remove ml-2 from hamburger button if it exists
    $content = $content -replace '(class="md:hidden text-slate-500 hover:text-slate-700 p-2) ml-2( transition-transform duration-300">)', '$1$2'
    
    # 3. Update notification button to include red dot with proper structure
    $content = $content -replace '(<button id="notification-bell"[^>]*class="[^"]*)(relative )([^"]*">\s*\r?\n\s*)<i class="ph ph-bell text-xl"></i>(\s*\r?\n\s*</button>)', '$1$3<span class="relative inline-block">$4<i class="ph ph-bell text-xl"></i>$4<span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>$4</span>$5'
    
    # 4. Update notification dropdown width and positioning
    $content = $content -replace '(<div id="notification-dropdown"[^>]*class="[^"]*absolute )(right-0)([^"]*)(w-80|w-\[calc\(100vw-2rem\)\])( md:w-\[400px\]"[^>]*>)', '$1-right-2 md:right-0$3w-[85vw] max-w-[340px]$5'
    
    # 5. Update notification dropdown header padding and font sizes
    $content = $content -replace '(<div class=")px-6 py-\[22px\]( border-b border-gray-100 flex justify-between items-center">\s*\r?\n\s*)<h4 class="font-bold text-slate-900 text-lg">Notifications</h4>(\s*\r?\n\s*)<a href="[^"]*" class="text-sm text-blue-600', '$1px-4 py-3 md:px-6 md:py-[22px]$2<h4 class="font-bold text-slate-900 text-base md:text-lg">Notifications</h4>$3<a href="javascript:void(0)" class="text-xs md:text-sm text-blue-600'
    
    # 6. Update "No new notifications" padding and font size
    $content = $content -replace '(<div class=")p-8( text-center">\s*\r?\n\s*)<p class="text-slate-500 text-sm">No new notifications</p>', '$1p-4 md:p-8$2<p class="text-slate-500 text-xs md:text-sm">No new notifications</p>'
    
    Set-Content -Path $file -Value $content -Encoding UTF8 -NoNewline
    Write-Host "Updated $file"
}

Write-Host "All files updated successfully!"
