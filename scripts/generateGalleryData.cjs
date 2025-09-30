const fs = require('fs');
const path = require('path');

// Configuración
const PORTFOLIO_PATH = './public/Portafolio Drafter 2025 julio';
const OUTPUT_PATH = './src/data/galleryData.json';
const CATEGORIES = ['arquitectura', 'food', 'moda', 'social'];

// Función para normalizar nombres (crear URLs amigables)
function normalizeName(name) {
  return name
    .toLowerCase()
    .replace(/[áäà]/g, 'a')
    .replace(/[éëè]/g, 'e')
    .replace(/[íïì]/g, 'i')
    .replace(/[óöò]/g, 'o')
    .replace(/[úüù]/g, 'u')
    .replace(/[ñ]/g, 'n')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Función para obtener extensiones de imagen válidas
function isValidImageFile(filename) {
  const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.bmp', '.tiff'];
  const ext = path.extname(filename).toLowerCase();
  return validExtensions.includes(ext);
}

// Función para verificar si una imagen es horizontal basada en el nombre del archivo
function isHorizontalImage(imageName) {
  // Patrones comunes en nombres de archivos que indican imágenes horizontales
  const horizontalPatterns = [
    'landscape', 'horizontal', 'wide', 'panorama', 'banner',
    'portada', 'cover', 'header', 'hero', 'banner'
  ];
  
  const lowerName = imageName.toLowerCase();
  
  // Verificar patrones en el nombre
  for (const pattern of horizontalPatterns) {
    if (lowerName.includes(pattern)) {
      return true;
    }
  }
  
  // Por defecto, asumir que no es horizontal
  return false;
}

// Función para ordenar imágenes (horizontales al final)
function sortImages(images) {
  return images.sort((a, b) => {
    const aIsHorizontal = isHorizontalImage(a);
    const bIsHorizontal = isHorizontalImage(b);
    
    if (aIsHorizontal && !bIsHorizontal) return 1;
    if (!aIsHorizontal && bIsHorizontal) return -1;
    return 0;
  });
}

// Función para escanear una carpeta y obtener álbumes
function scanCategory(categoryPath, categoryName) {
  const albums = [];
  
  if (!fs.existsSync(categoryPath)) {
    console.log(`⚠️  Carpeta no encontrada: ${categoryPath}`);
    return albums;
  }

  const items = fs.readdirSync(categoryPath);
  const subdirectories = [];
  const imageFiles = [];
  
  // Separar archivos de imágenes y subdirectorios
  items.forEach(item => {
    const itemPath = path.join(categoryPath, item);
    const stats = fs.statSync(itemPath);
    
    if (stats.isDirectory()) {
      subdirectories.push(item);
    } else if (isValidImageFile(item)) {
      imageFiles.push(item);
    }
  });
  
  // Si hay subdirectorios, procesarlos como álbumes individuales
  if (subdirectories.length > 0) {
    subdirectories.forEach(item => {
      const albumName = item;
      const normalizedAlbumName = normalizeName(albumName);
      const albumPath = path.join(categoryPath, item);
      
      // Escanear imágenes en el álbum
      const images = [];
      try {
        const albumItems = fs.readdirSync(albumPath);
        albumItems.forEach(imageFile => {
          if (isValidImageFile(imageFile)) {
            images.push(imageFile);
          }
        });
      } catch (error) {
        console.log(`⚠️  Error leyendo álbum ${albumName}:`, error.message);
      }
      
      if (images.length > 0) {
        // Ordenar imágenes: horizontales al final
        const sortedImages = sortImages(images);
        
        const album = {
          categoria: categoryName,
          album: albumName,
          albumNormalizado: normalizedAlbumName,
          ruta: `/galeria/${normalizeName(categoryName)}/${normalizedAlbumName}`,
          rutaFisica: `/Portafolio Drafter 2025 julio/${categoryName}/${albumName}`,
          imagenes: sortedImages,
          totalImagenes: sortedImages.length,
          fechaCreacion: new Date().toISOString()
        };
        
        albums.push(album);
        console.log(`✅ Álbum encontrado: ${categoryName}/${albumName} (${sortedImages.length} imágenes)`);
      } else {
        console.log(`⚠️  Álbum sin imágenes: ${categoryName}/${albumName}`);
      }
    });
  }
  
  // Si no hay subdirectorios pero hay archivos de imagen, crear un álbum con el nombre de la categoría
  if (subdirectories.length === 0 && imageFiles.length > 0) {
    const albumName = categoryName;
    const normalizedAlbumName = normalizeName(albumName);
    
    // Ordenar imágenes: horizontales al final
    const sortedImages = sortImages(imageFiles);
    
    const album = {
      categoria: categoryName,
      album: albumName,
      albumNormalizado: normalizedAlbumName,
      ruta: `/galeria/${normalizeName(categoryName)}/${normalizedAlbumName}`,
      rutaFisica: `/Portafolio Drafter 2025 julio/${categoryName}`,
      imagenes: sortedImages,
      totalImagenes: sortedImages.length,
      fechaCreacion: new Date().toISOString()
    };
    
    albums.push(album);
    console.log(`✅ Álbum encontrado: ${categoryName}/${albumName} (${sortedImages.length} imágenes)`);
  }
  
  return albums;
}

// Función principal
function generateGalleryData() {
  console.log('🚀 Iniciando generación de datos de galería...\n');
  
  const allAlbums = [];
  const stats = {
    totalAlbums: 0,
    totalImages: 0,
    categories: {}
  };
  
  CATEGORIES.forEach(category => {
    console.log(`📁 Escaneando categoría: ${category}`);
    const categoryPath = path.join(PORTFOLIO_PATH, category);
    const albums = scanCategory(categoryPath, category);
    
    allAlbums.push(...albums);
    stats.categories[category] = albums.length;
    stats.totalAlbums += albums.length;
    stats.totalImages += albums.reduce((sum, album) => sum + album.totalImagenes, 0);
    
    console.log(`   └─ ${albums.length} álbumes encontrados\n`);
  });
  
  // Crear estructura de datos final
  const galleryData = {
    metadata: {
      generadoEl: new Date().toISOString(),
      version: '1.0.0',
      estadisticas: stats
    },
    categorias: {},
    albumes: allAlbums
  };
  
  // Organizar por categorías
  allAlbums.forEach(album => {
    if (!galleryData.categorias[album.categoria]) {
      galleryData.categorias[album.categoria] = [];
    }
    galleryData.categorias[album.categoria].push(album);
  });
  
  // Guardar archivo JSON
  try {
    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(galleryData, null, 2), 'utf8');
    console.log(`✅ Datos guardados en: ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('❌ Error guardando archivo:', error.message);
    return;
  }
  
  // Mostrar resumen
  console.log('\n📊 RESUMEN:');
  console.log('==========');
  Object.entries(stats.categories).forEach(([category, count]) => {
    console.log(`   ${category}: ${count} álbumes`);
  });
  console.log(`\n   Total álbumes: ${stats.totalAlbums}`);
  console.log(`   Total imágenes: ${stats.totalImages}`);
  
  // Mostrar URLs de ejemplo
  console.log('\n🔗 URLs de ejemplo:');
  allAlbums.slice(0, 5).forEach(album => {
    console.log(`   ${album.ruta} → ${album.album} (${album.totalImagenes} imágenes)`);
  });
  
  console.log('\n🎯 Para usar en React:');
  console.log('1. Importa: import galleryData from "./src/data/galleryData.json"');
  console.log('2. Accede a álbumes: galleryData.albumes');
  console.log('3. Accede por categoría: galleryData.categorias["Moda"]');
  
  return galleryData;
}

// Ejecutar si se llama directamente
if (require.main === module) {
  generateGalleryData();
}

module.exports = { generateGalleryData, normalizeName }; 