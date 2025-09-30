import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { Helmet } from 'react-helmet-async';
import StarsBackground from '../components/StarsBackground';
import PackagesSection from '../components/PackagesSection';
import galleryData from '../data/galleryData.json';

const Galeria: React.FC = () => {
  const [loadedAlbums, setLoadedAlbums] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

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

  // Cargar álbumes de forma progresiva
  useEffect(() => {
    const loadInitialAlbums = () => {
      const initialSet = new Set();
      let count = 0;
      
      Object.entries(galleryData.categorias).forEach(([categoria, albumes]) => {
        albumes.forEach((album, index) => {
          if (count < 6) { // Cargar solo los primeros 6 álbumes inicialmente
            initialSet.add(`${categoria}-${album.ruta}`);
            count++;
          }
        });
      });
      
      setLoadedAlbums(initialSet as Set<string>);
    };

    loadInitialAlbums();
  }, []);

  // Intersection Observer para lazy loading de álbumes
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const albumKey = entry.target.getAttribute('data-album-key');
            if (albumKey) {
              setLoadedAlbums(prev => new Set([...prev, albumKey as string]));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const albumElements = document.querySelectorAll('[data-album-key]');
    albumElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Helmet>
        <title>Galería | Drafter Studio</title>
        <meta name="description" content="Galerías de fotografía y video de nuestro portfolio: gastro, moda, arquitectura y social." />
        <link rel="canonical" href="https://drafter.es/galeria" />
        <meta property="og:title" content="Galería | Drafter Studio" />
        <meta property="og:description" content="Galerías de fotografía y video del portfolio: gastro, moda, arquitectura y social." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drafter.es/galeria" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Galería | Drafter Studio" />
        <meta name="twitter:description" content="Galerías de fotografía y video del portfolio: gastro, moda, arquitectura y social." />
      </Helmet>
      <Navigation />
      <StarsBackground color="#ffffff" />
      
      

      {/* Contenido principal */}
      <div className="relative z-20 pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight bg-gradient-to-r from-white via-purple-600 to-orange-600 bg-clip-text text-transparent mb-6">
              Galería
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Galerías de fotografía y video de secciones del portfolio
            </p>
          </div>

          {/* Botones de navegación por categorías */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'food', name: 'Gastro', color: '#FB739F' },
              { id: 'moda', name: 'Moda', color: '#6900C7' },
              { id: 'arquitectura', name: 'Espacial', color: '#878787' },
              { id: 'social', name: 'Social', color: '#f66b30' }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  const element = document.getElementById(`categoria-${category.id}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`,
                  color: '#fff'
                }}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Categorías */}
          {Object.entries(galleryData.categorias)
            .sort(([a], [b]) => {
              const order = { 'food': 1, 'moda': 2, 'arquitectura': 3, 'social': 4 };
              return (order[a as keyof typeof order] || 999) - (order[b as keyof typeof order] || 999);
            })
            .map(([categoria, albumes]) => {
              // Definir colores y nombres para cada categoría
              const categoryColors = {
                'food': '#FB739F',
                'moda': '#6900C7', 
                'arquitectura': '#878787',
                'social': '#f66b30'
              };
              
              const categoryNames = {
                'food': 'Gastro',
                'moda': 'Moda',
                'arquitectura': 'Espacial',
                'social': 'Social'
              };
              
              const mainColor = categoryColors[categoria as keyof typeof categoryColors] || '#B721FF';
              const categoryName = categoryNames[categoria as keyof typeof categoryNames] || categoria;
              
                              return (
                <div key={categoria} id={`categoria-${categoria}`} className="mb-16">
                  <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <h2 className="text-3xl font-bold text-white mb-6 capitalize">
                      {categoryName} ({albumes.length} álbumes)
                    </h2>
                    
                    <div className="w-full grid grid-cols-3 m-0 p-0 overflow-hidden gap-0">
                      {albumes.map((album) => {
                        const albumKey = `${categoria}-${album.ruta}`;
                        const isLoaded = loadedAlbums.has(albumKey);
                        
                        return (
                          <div 
                            key={album.ruta} 
                            data-album-key={albumKey}
                            className="relative group overflow-hidden w-full cursor-pointer hover:scale-105 transition-transform duration-300"
                            onClick={() => navigate(album.ruta)}
                          >
                            {isLoaded ? (
                              <img 
                                src={`${album.rutaFisica}/${album.imagenes[0]}`}
                                alt={album.album}
                                className="w-full h-auto object-contain max-w-full" 
                                loading="lazy"
                                decoding="async"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                            ) : (
                              <div className="w-full h-64 bg-gray-800 animate-pulse flex items-center justify-center">
                                <div className="text-gray-400 text-sm">Cargando...</div>
                              </div>
                            )}
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-black bg-opacity-70 px-3 py-2 rounded">
                                <p className="text-white text-sm md:text-base font-medium">
                                  {album.album}
                                </p>
                                <p className="text-white/80 text-xs">
                                  {album.totalImagenes} imágenes
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Sección de paquetes para cada categoría */}
                  
                </div>
              );
            })}

          {/* Información adicional */}
          <div className="text-center mt-16">
            <p className="text-white/60 text-sm">
              Total de álbumes: {galleryData.metadata.estadisticas.totalAlbums} | 
              Total de imágenes: {galleryData.metadata.estadisticas.totalImages}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeria; 