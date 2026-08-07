/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const logoUrl = "https://res.cloudinary.com/dbeh0eisn/image/upload/v1777072569/trisha_vanam_brand_identity_cemr1y.png";

// Old broken tags
const oldWhiteLogoTagRegex = /<img src="https:\/\/res\.cloudinary\.com\/dbeh0eisn\/image\/upload\/v1777072569\/trisha_vanam_brand_identity_cemr1y\.png" alt="Trisha Vanam" style={{ height: "18px", width: "auto", objectFit: "contain", filter: "brightness\(0\) invert\(1\)" }} className="hidden md:block" \/>/g;

const oldBlackLogoTagRegex = /<img src="https:\/\/res\.cloudinary\.com\/dbeh0eisn\/image\/upload\/v1777072569\/trisha_vanam_brand_identity_cemr1y\.png" alt="Trisha Vanam" style={{ height: "18px", width: "auto", objectFit: "contain", filter: "brightness\(0\)" }} className="hidden md:block" \/>/g;

// New fixed tags
const newWhiteLogoTag = `<img src="${logoUrl}" alt="Trisha Vanam" style={{ height: "18px", width: "auto", objectFit: "contain", filter: "invert(1)", mixBlendMode: "screen" }} className="hidden md:block" />`;

const newBlackLogoTag = `<img src="${logoUrl}" alt="Trisha Vanam" style={{ height: "18px", width: "auto", objectFit: "contain", mixBlendMode: "multiply" }} className="hidden md:block" />`;

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
  
  content = content.replace(oldWhiteLogoTagRegex, newWhiteLogoTag);
  content = content.replace(oldBlackLogoTagRegex, newBlackLogoTag);
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated', file);
    updatedCount++;
  }
});
console.log('Total files updated:', updatedCount);
