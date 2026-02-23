// Script to split logo SVG into two-color versions
const fs = require('fs');
const path = require('path');

const svg = fs.readFileSync(path.join(__dirname, 'public/logo.svg'), 'utf8');

// Extract path d attribute
const dMatch = svg.match(/d="([^"]+)"/);
const d = dMatch[1];

// TECH sub-path markers (box + T, E, C, H letters)
const techMarkers = [
  'M1721.81 293.236',  // TECH background box
  'M1406.25 305.655',  // T
  'M1477.2 306.2',     // E
  'M1561.5 306.424',   // C
  'M1622.2 306.2',     // H
];

let mainPathD = d;
let techPathD = '';

// Extract each TECH sub-path from the main path
// Process in reverse order of position to avoid index shifting
const subPaths = [];
for (const marker of techMarkers) {
  const startIdx = mainPathD.indexOf(marker);
  if (startIdx === -1) {
    console.log('WARNING: Could not find marker:', marker);
    continue;
  }
  // Find closing Z
  const zIdx = mainPathD.indexOf('Z', startIdx);
  subPaths.push({ start: startIdx, end: zIdx + 1 });
}

// Sort by start position descending (to remove from end first)
subPaths.sort((a, b) => b.start - a.start);

for (const sp of subPaths) {
  const subPath = mainPathD.substring(sp.start, sp.end);
  techPathD = subPath + techPathD; // prepend to maintain order
  mainPathD = mainPathD.substring(0, sp.start) + mainPathD.substring(sp.end);
}

console.log('Main path length:', mainPathD.length);
console.log('TECH path length:', techPathD.length);
console.log('TECH path starts with:', techPathD.substring(0, 50));

function createSvg(techColor, filename) {
  const svgContent = `<svg width="2189" height="558" viewBox="0 0 2189 558" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="${mainPathD}" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="${techPathD}" fill="${techColor}"/>
</svg>`;
  
  fs.writeFileSync(path.join(__dirname, 'public', filename), svgContent, 'utf8');
  console.log(`Created: public/${filename}`);
}

// Green version (lime green matching site's primary)
createSvg('#bef264', 'logo-green.svg');

// Orange version  
createSvg('#f0a050', 'logo-orange.svg');

console.log('Done!');
