/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const logoUrl = "https://res.cloudinary.com/dbeh0eisn/image/upload/v1777072569/trisha_vanam_brand_identity_cemr1y.png";

const whiteLogoTag = `<img src="${logoUrl}" alt="Trisha Vanam" style={{ height: "18px", width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }} className="hidden md:block" />`;

const blackLogoTag = `<img src="${logoUrl}" alt="Trisha Vanam" style={{ height: "18px", width: "auto", objectFit: "contain", filter: "brightness(0)" }} className="hidden md:block" />`;

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

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace the Contact and other pages' text logo
  content = content.replace(/<div className="font-serif text-sm tracking-widest hidden md:block">\s*TRISHA VANAM\.\s*<\/div>/g, whiteLogoTag);
  
  // Replace the regalia and similar pages' text logo
  content = content.replace(/<div style={{ fontFamily: "Georgia, serif", fontSize: "0\.8rem", color: "#fff", letterSpacing: "0\.2em" }}>\s*TRISHA VANAM\.\s*<\/div>/g, whiteLogoTag);
  
  // Replace the About page text logo (needs black logo)
  content = content.replace(/<span className="font-serif text-xl tracking-wide text-\[#1A1A1A\] font-medium hidden md:block">\s*Trisha Vanam\.\s*<\/span>/g, blackLogoTag);
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated', file);
  }
});
