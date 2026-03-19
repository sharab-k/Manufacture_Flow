import os
import glob
import re

def main():
    html_files = glob.glob('*.html')
    updated_count = 0
    
    for filepath in html_files:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            if '<footer' in content:
                start = content.find('<footer')
                end = content.find('</footer>', start)
                if end != -1:
                    footer = content[start:end]
                    
                    # Regex to replace the donau-logo.png with the SVG file
                    new_footer = re.sub(
                        r'<img[^>]*src=["\'](?:\.\/)?src\/images\/donau-logo\.png["\'][^>]*>', 
                        '<img src="Group 1597890314 (1).svg" alt="Donau AI" class="h-6 w-auto">', 
                        footer
                    )
                    
                    # Also sometimes the logo is just stored in another hierarchy
                    new_footer = re.sub(
                        r'<img[^>]*src=["\']\.\.\/src\/images\/donau-logo\.png["\'][^>]*>', 
                        '<img src="../Group 1597890314 (1).svg" alt="Donau AI" class="h-6 w-auto">', 
                        new_footer
                    )
                    
                    if new_footer != footer:
                        content = content[:start] + new_footer + content[end:]
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(content)
                        updated_count += 1
                        print(f"Updated footer in {filepath}")
        
        except Exception as e:
            print(f"Error processing {filepath}: {e}")

    print(f"Successfully updated {updated_count} files.")

if __name__ == '__main__':
    main()
