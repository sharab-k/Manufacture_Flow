const fs = require('fs');
const path = require('path');
const dir = path.resolve(__dirname);
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

let count = 0;
for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const updated = content.replace(/id="mobile-menu-btn"/g, ''); // Removes the ID attribute
    if (updated !== content) {
        fs.writeFileSync(file, updated, 'utf8');
        console.log("Removed from " + file);
        count++;
    }
}
console.log("Successfully removed mobile-menu-btn ID from " + count + " files.");
