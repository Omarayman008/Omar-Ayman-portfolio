const fs = require('fs');
const path = require('path');

const files = [
  'AboutSection.tsx',
  'SkillsSection.tsx',
  'ContactSection.tsx',
  'ProjectsSection.tsx',
  'GlitchName.tsx'
];

const basePath = path.join(__dirname, 'components');
const globalsCssPath = path.join(__dirname, 'app', 'globals.css');

let globalCssAdditions = '\n/* Extracted from components for Server Components optimization */\n';

for (const file of files) {
  const filePath = path.join(basePath, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Extract style jsx
  const styleMatch = content.match(/<style jsx>\{`([\s\S]*?)`\}<\/style>/);
  if (styleMatch) {
    let css = styleMatch[1];
    
    // Scope generic tags
    if (file === 'AboutSection.tsx') {
      css = css.replace(/^(\s*)p\s*\{/gm, '$1.about-content p {');
    } else if (file === 'SkillsSection.tsx') {
      css = css.replace(/^(\s*)ul\s*\{/gm, '$1#skills ul {');
      css = css.replace(/^(\s*)li\s*\{/gm, '$1#skills li {');
      css = css.replace(/^(\s*)h3\s*\{/gm, '$1#skills h3 {');
    }
    
    globalCssAdditions += `\n/* ${file} styles */\n${css}\n`;
    
    // Remove style jsx from content
    content = content.replace(/<style jsx>\{`[\s\S]*?`\}<\/style>/, '');
  }

  // Remove 'use client'
  content = content.replace(/'use client';\r?\n/, '');

  fs.writeFileSync(filePath, content);
}

fs.appendFileSync(globalsCssPath, globalCssAdditions);
console.log('Styles extracted and components converted successfully.');
