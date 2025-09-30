import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Navigation from './Navigation';
import StarsBackground from './StarsBackground';
import galleryData from '../data/galleryData.json';
import { Helmet } from 'react-helmet-async';

interface GalleryData {
  metadata: {
    generadoEl: string;
    version: string;
    estadisticas: {
      totalAlbums: number;
      totalImages: number;
      categories: Record<string, number>;
    };
  };
  categorias: Record<string, any[]>;
  albumes: any[];
}

const DynamicGallery: React.FC = () => {
  const { categoria, album } = useParams<{ categoria: string; album: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Encontrar el álbum específico
  const currentAlbum = galleryData.albumes.find(
    a => a.albumNormalizado === album && a.categoria.toLowerCase() === categoria?.toLowerCase()
  );

  // Cargar imágenes de forma progresiva
  useEffect(() => {
    const loadInitialImages = () => {
      const initialSet = new Set();
      // Cargar solo las primeras 8 imágenes inicialmente
      for (let i = 0; i < Math.min(8, currentAlbum?.imagenes.length || 0); i++) {
        initialSet.add(i);
      }
      setLoadedImages(initialSet);
    };

    if (currentAlbum) {
      loadInitialImages();
    }
  }, [currentAlbum]);

  // Intersection Observer para lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setLoadedImages(prev => new Set([...prev, index as number]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const imageElements = document.querySelectorAll('[data-index]');
    imageElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [currentAlbum]);

  if (!currentAlbum) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-4">Álbum no encontrado</h1>
          <p>No se encontró el álbum solicitado.</p>
          <p className="mt-4 text-sm text-gray-400">
            Categoría: {categoria}, Álbum: {album}
          </p>
          <Link 
            to="/galeria"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Volver a Galería
          </Link>
        </div>
      </div>
    );
  }

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? currentAlbum.imagenes.length - 1 : selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === currentAlbum.imagenes.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  const buildSrcSet = (path: string): string => {
    const lastDot = path.lastIndexOf('.');
    if (lastDot === -1) return '';
    const base = path.slice(0, lastDot);
    const ext = path.slice(lastDot);
    return `${base}-800${ext} 800w, ${base}-1200${ext} 1200w, ${base}-1600${ext} 1600w`;
  };

  const buildFormatSrcSet = (path: string, format: 'webp' | 'avif'): string => {
    const lastDot = path.lastIndexOf('.');
    if (lastDot === -1) return '';
    const base = path.slice(0, lastDot);
    return `${base}-800.${format} 800w, ${base}-1200.${format} 1200w, ${base}-1600.${format} 1600w`;
  };

  // Manejar navegación con teclado
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        if (e.key === 'Escape') {
          closeModal();
        } else if (e.key === 'ArrowLeft') {
          goToPrevious();
        } else if (e.key === 'ArrowRight') {
          goToNext();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Helmet>
        <title>{`${currentAlbum.album} | Galería ${currentAlbum.categoria} | Drafter Studio`}</title>
        <meta name="description" content={`Álbum ${currentAlbum.album} de la categoría ${currentAlbum.categoria}. Explora la galería completa.`} />
        <link rel="canonical" href={`https://drafter.es${currentAlbum.ruta}`} />
        <meta property="og:title" content={`${currentAlbum.album} | Galería ${currentAlbum.categoria} | Drafter Studio`} />
        <meta property="og:description" content={`Álbum ${currentAlbum.album} de la categoría ${currentAlbum.categoria}. Explora la galería completa.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://drafter.es${currentAlbum.ruta}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${currentAlbum.album} | Galería ${currentAlbum.categoria} | Drafter Studio`} />
        <meta name="twitter:description" content={`Álbum ${currentAlbum.album} de la categoría ${currentAlbum.categoria}. Explora la galería completa.`} />
      </Helmet>
      {/* Navbar */}
      <Navigation />
      
      {/* Fondo con StarsBackground */}
      <div className="absolute inset-0 z-0">
        <div className="stars-bg"></div>
      </div>

      

      {/* Contenido principal */}
      <div className="relative z-20 pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header del álbum */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent mb-4">
              {currentAlbum.album}
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-6">
              Disfruta de las imágenes de este álbum
            </p>
          </div>

          {/* Grid de imágenes optimizado */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentAlbum.imagenes.map((image, index) => (
              <div 
                key={index}
                data-index={index}
                className="relative group cursor-pointer overflow-hidden bg-black/20 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                onClick={() => handleImageClick(index)}
              >
                {loadedImages.has(index) ? (
                  <img
                    src={`${currentAlbum.rutaFisica}/${image}`}
                    alt={`${currentAlbum.album} - ${image}`}
                    className="w-full h-80 object-cover transition-all duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    onError={(e) => {
                      console.error('Error loading image:', image);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-80 bg-gray-800 animate-pulse flex items-center justify-center">
                    <div className="text-gray-400">Cargando...</div>
                  </div>
                )}
                
                {/* Número de imagen */}
                <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Navegación entre álbumes */}
          <div className="mt-12 text-center">
            <Link 
              to="/galeria"
              className="inline-block bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              Volver a Galería
            </Link>
          </div>
        </div>
      </div>

      {/* Modal para visualización de imágenes */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm animate-in fade-in duration-300">
          {/* Overlay para cerrar */}
          <div 
            className="absolute inset-0 z-10 cursor-pointer"
            onClick={closeModal}
          />
          
          {/* Contenedor del modal */}
          <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
            <div className="relative max-w-[95vw] max-h-[95vh]">
              {/* Imagen principal */}
              <img
                src={`${currentAlbum.rutaFisica}/${currentAlbum.imagenes[selectedImageIndex]}`}
                alt={`${currentAlbum.album} - ${currentAlbum.imagenes[selectedImageIndex]}`}
                className="w-auto h-auto object-contain rounded-lg shadow-2xl"
                style={{
                  maxWidth: '100%',
                  maxHeight: 'calc(95vh - 120px)',
                  width: 'auto',
                  height: 'auto'
                }}
                onError={(e) => {
                  console.error('Error loading image:', currentAlbum.imagenes[selectedImageIndex]);
                  e.currentTarget.style.display = 'none';
                }}
              />
              
              {/* Botón cerrar */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 w-12 h-12 bg-black/80 hover:bg-black/90 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-30"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              {/* Botón anterior */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Botón siguiente */}
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronRight size={24} />
              </button>

              {/* Indicador de posición */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                {selectedImageIndex + 1} / {currentAlbum.imagenes.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicGallery; 