/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
let updatedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace the inline style height for the white logo
  content = content.replace(/style=\{\{ height: "18px", width: "auto", objectFit: "contain", filter: "invert\(1\)", mixBlendMode: "screen" \}\}/g, 'style={{ height: "clamp(3.5rem, 6vw, 5rem)", width: "auto", objectFit: "contain", filter: "invert(1)", mixBlendMode: "screen" }}');
  
  // Replace the inline style height for the black logo (About page)
  content = content.replace(/style=\{\{ height: "18px", width: "auto", objectFit: "contain", mixBlendMode: "multiply" \}\}/g, 'style={{ height: "clamp(3.5rem, 6vw, 5rem)", width: "auto", objectFit: "contain", mixBlendMode: "multiply" }}');
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated', file);
    updatedCount++;
  }
});
console.log('Total files updated:', updatedCount);
