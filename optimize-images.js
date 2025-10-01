#!/usr/bin/env node

// ========================================
// BILLED OPTIMERING SCRIPT
// ========================================
// Dette script optimerer alle billeder i public/images mappen
// til at reducere filstørrelse og forbedre loading performance

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Funktion til at få filstørrelse i MB
function getFileSizeInMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

// Funktion til at scanne billeder
function scanImages() {
  const imagesDir = path.join(__dirname, "public", "images");
  const files = fs.readdirSync(imagesDir);

  console.log("🔍 Scanning billeder...\n");

  const largeImages = [];

  files.forEach((file) => {
    const filePath = path.join(imagesDir, file);
    const ext = path.extname(file).toLowerCase();

    // Tjek kun billede filer
    if ([".png", ".jpg", ".jpeg", ".gif", ".webp"].includes(ext)) {
      const size = getFileSizeInMB(filePath);
      const sizeNum = parseFloat(size);

      console.log(`📸 ${file}: ${size} MB`);

      // Flag store billeder (> 500KB)
      if (sizeNum > 0.5) {
        largeImages.push({
          name: file,
          size: size,
          path: filePath,
        });
      }
    }
  });

  console.log("\n📊 SAMMENDRAG:");
  console.log(
    `Total billeder: ${
      files.filter((f) =>
        [".png", ".jpg", ".jpeg", ".gif", ".webp"].includes(
          path.extname(f).toLowerCase()
        )
      ).length
    }`
  );
  console.log(`Store billeder (>500KB): ${largeImages.length}`);

  if (largeImages.length > 0) {
    console.log("\n⚠️  STORE BILLEDER DER BØR OPTIMERES:");
    largeImages.forEach((img) => {
      console.log(`   • ${img.name}: ${img.size} MB`);
    });

    console.log("\n💡 ANBEFALINGER:");
    console.log(
      "1. Brug online tools som TinyPNG eller Squoosh.app til at komprimere billeder"
    );
    console.log("2. Konverter PNG til WebP format for bedre komprimering");
    console.log(
      "3. Overvej at bruge responsive billeder med forskellige størrelser"
    );
    console.log(
      "4. LazyImage komponenten er allerede implementeret for lazy loading!"
    );
  } else {
    console.log("\n✅ Alle billeder er allerede optimerede!");
  }
}

// Kør scanning
scanImages();
