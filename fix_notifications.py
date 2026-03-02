import re

files = [
    'brief-detail.html',
    'brief-detail-chat.html',
    'brief-detail-proposal.html',
    'messages-empty.html',
    'dashboard-empty.html',
    'settings-account.html',
    'settings-manufacturer.html',
    'settings-security.html'
]

# Read the correct structure from messages.html
with open('messages.html', 'r', encoding='utf-8') as f:
    messages_content = f.read()

# Extract the correct notification section from messages.html (from "<!-- User Avatar -->" to hamburger button)
pattern = r'(<!-- User Avatar -->.*?</div>\s+</div>\s+\r?\n\s+<!-- Notifications -->.*?</div>\s+\r?\n\s+<button id="mobile-menu-toggle")'
match = re.search(pattern, messages_content, re.DOTALL)

if match:
    correct_structure = match.group(1)
    
    for file in files:
        print(f"Processing {file}...")
        
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace the old structure with the correct one
        # Pattern: from "<!-- Help -->" closing tag to hamburger button
        old_pattern = r'(</a>\s+<!-- Notifications -->.*?</div>\s+<!-- User Avatar -->.*?</div>\s+</div>\s+\r?\n\s+<button id="mobile-menu-toggle")'
        
        if re.search(old_pattern, content, re.DOTALL):
            # Replace with correct structure
            content = re.sub(
                old_pattern,
                r'</a>\r\n                ' + correct_structure,
                content,
                flags=re.DOTALL
            )
            
            with open(file, 'w', encoding='utf-8', newline='') as f:
                f.write(content)
            
            print(f"✓ Updated {file}")
        else:
            print(f"✗ Pattern not found in {file}")

print("Done!")
