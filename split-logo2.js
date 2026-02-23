// Script to split TECH box and letters into separate paths
const fs = require('fs');
const path = require('path');

// Read orange svg to get the tech path
const orangeSvg = fs.readFileSync(path.join(__dirname, 'public/logo-orange.svg'), 'utf8');

// Extract the two paths
const pathMatches = [...orangeSvg.matchAll(/d="([^"]+)"/g)];
const mainPathD = pathMatches[0][1]; // BBM + icon (white)
const techFullD = pathMatches[1][1]; // TECH box + letters combined

// The TECH section has these sub-paths:
// 1. Box: M1721.81 293.236 ... Z (outer rectangle)
// 2. T letter: M1406.25 305.655 ... Z  
// 3. E letter: M1477.2 306.2 ... Z
// 4. C letter: M1561.5 306.424 ... Z
// 5. H letter: M1622.2 306.2 ... Z

// Split by finding each M...Z sub-path
const subPaths = [];
const regex = /M[\d.]+\s[\d.]+[^M]*/g;
let match;
while ((match = regex.exec(techFullD)) !== null) {
  subPaths.push(match[0].trim());
}

console.log(`Found ${subPaths.length} sub-paths in TECH section`);
for (let i = 0; i < subPaths.length; i++) {
  console.log(`  Path ${i}: starts with ${subPaths[i].substring(0, 30)}...`);
}

// First path is the box, rest are letters
const boxPath = subPaths[0];
const letterPaths = subPaths.slice(1).join('');

console.log('\nBox path length:', boxPath.length);
console.log('Letter paths length:', letterPaths.length);

function createSvg(techColor, filename) {
  const svgContent = `<svg width="2189" height="558" viewBox="0 0 2189 558" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="${mainPathD}" fill="white"/>
<path d="${boxPath}" fill="${techColor}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="${letterPaths}" fill="white"/>
</svg>`;
  
  fs.writeFileSync(path.join(__dirname, 'public', filename), svgContent, 'utf8');
  console.log(`Created: public/${filename}`);
}

// Green version (lime green matching site's primary)
createSvg('#bef264', 'logo-green.svg');

// Orange version  
createSvg('#f0a050', 'logo-orange.svg');

console.log('Done!');
