const fs = require('fs');
const path = require('path');

// Simple pixel comparison without external dependencies
const compareImages = (img1Path, img2Path) => {
  try {
    const img1 = fs.readFileSync(img1Path);
    const img2 = fs.readFileSync(img2Path);
    
    // Basic file size comparison as a simple check
    if (img1.length !== img2.length) {
      return { different: true, reason: 'File size mismatch' };
    }
    
    // Byte-by-byte comparison
    for (let i = 0; i < img1.length; i++) {
      if (img1[i] !== img2[i]) {
        return { different: true, reason: `Byte mismatch at position ${i}` };
      }
    }
    
    return { different: false };
  } catch (error) {
    return { different: true, reason: error.message };
  }
};

const baseDir = '__baseline__';
const curDir = '__screenshots__';
const diffDir = '__diff__';

// Ensure diff directory exists
if (!fs.existsSync(diffDir)) {
  fs.mkdirSync(diffDir, { recursive: true });
}

let failures = 0;
let total = 0;

console.log('🔍 Starting visual comparison...');

// Get all screenshot files
const screenshotFiles = fs.readdirSync(curDir).filter(f => f.endsWith('.png'));

for (const file of screenshotFiles) {
  total++;
  const baselinePath = path.join(baseDir, file);
  const currentPath = path.join(curDir, file);
  
  if (!fs.existsSync(baselinePath)) {
    console.log(`⚠️  No baseline found for ${file} - treating as new`);
    failures++;
    continue;
  }
  
  const comparison = compareImages(baselinePath, currentPath);
  
  if (comparison.different) {
    failures++;
    console.log(`❌ ${file}: ${comparison.reason}`);
    
    // Copy current image to diff directory for review
    fs.copyFileSync(currentPath, path.join(diffDir, file));
  } else {
    console.log(`✅ ${file}: No differences detected`);
  }
}

console.log(`\n📊 Comparison complete:`);
console.log(`   Total files: ${total}`);
console.log(`   Differences: ${failures}`);
console.log(`   Match rate: ${((total - failures) / total * 100).toFixed(1)}%`);

if (failures > 0) {
  console.log(`\n🚫 Visual regression detected!`);
  console.log(`   ${failures} screenshots differ from baseline.`);
  console.log(`   Review differences in __diff__/ directory.`);
  console.log(`   Add "visual-approval" label to proceed.`);
  process.exit(1);
} else {
  console.log(`\n✅ All screenshots match baseline!`);
  process.exit(0);
}
