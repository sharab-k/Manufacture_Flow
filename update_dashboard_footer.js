const fs = require('fs');

const accountHtml = fs.readFileSync('settings-account.html', 'utf8');

// The footers start at <!-- Footer --> and end at <!-- Floating Action Button --> 
const startMarker = '<!-- Footer -->';
const endMarker = '<!-- Floating Action Button -->';

const startIndex = accountHtml.indexOf(startMarker);
const endIndex = accountHtml.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
    const footerTemplate = accountHtml.substring(startIndex, endIndex);
    
    const file = 'dashboard-filled.html';
    let content = fs.readFileSync(file, 'utf8');
    
    const fStart = content.indexOf(startMarker);
    const fEnd = content.indexOf(endMarker);
    
    if (fStart !== -1 && fEnd !== -1) {
        const before = content.substring(0, fStart);
        const after = content.substring(fEnd);
        
        fs.writeFileSync(file, before + footerTemplate + after, 'utf8');
        console.log("Updated footer in " + file);
    } else {
        console.log("Could not find boundaries in " + file);
    }
} else {
    console.error("Could not find footer template boundaries in settings-account.html");
}
