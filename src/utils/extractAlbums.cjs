// Script para extraer todas las descripciones únicas de imageData.ts
// Ejecutar: node src/utils/extractAlbums.cjs

const fs = require('fs');
const path = require('path');

// Leer el archivo imageData.ts
const imageDataPath = path.join(__dirname, '../data/imageData.ts');
const content = fs.readFileSync(imageDataPath, 'utf8');

// Extraer todas las descripciones usando regex
const descriptionRegex = /description:\s*"([^"]+)"/g;
const descriptions = [];
let match;

while ((match = descriptionRegex.exec(content)) !== null) {
  descriptions.push(match[1]);
}

// Obtener descripciones únicas
const uniqueDescriptions = [...new Set(descriptions)];

console.log('📸 ÁLBUMES DISPONIBLES:');
console.log('========================\n');

console.log('🎯 TODAS LAS DESCRIPCIONES ÚNICAS:');
uniqueDescriptions.forEach((description, index) => {
  const imageCount = (content.match(new RegExp(`description:\\s*"${description.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g')) || []).length;
  console.log(`  ${index + 1}. ${description} (${imageCount} imágenes)`);
});

console.log('\n📊 ESTADÍSTICAS:');
console.log(`Total de álbumes: ${uniqueDescriptions.length}`);
console.log(`Total de imágenes: ${descriptions.length}`);

console.log('\n🔗 URLs de ejemplo:');
uniqueDescriptions.slice(0, 10).forEach(description => {
  const encoded = encodeURIComponent(description);
  console.log(`  • /album/${encoded} → ${description}`);
});

console.log('\n✅ Para probar los álbumes:');
console.log('1. Navega a: http://localhost:8080/albums-list');
console.log('2. Haz clic en "Ver Álbum" para cada álbum');
console.log('3. O navega directamente a: http://localhost:8080/album/[descripción]');
console.log('\n🎯 Para probar directamente:');
uniqueDescriptions.slice(0, 5).forEach(description => {
  const encoded = encodeURIComponent(description);
  console.log(`   http://localhost:8080/album/${encoded}`);
}); 