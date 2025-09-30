import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FashionGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const FashionGallery: React.FC<FashionGalleryProps> = ({ images }) => {
  const navigate = useNavigate();
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set());

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-fg-index') || '0');
            setVisibleIndexes(prev => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-fg-index]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Función para mapear alt texts específicos a rutas de galería
  const getGalleryRoute = (alt: string) => {
    const galleryMappings: Record<string, string> = {
      // Moda
      'Fotografía de Moda - Tissa': '/galeria/moda/mrs-tissa',
      'Fotografía de Moda -  Tissa Summer': '/galeria/moda/tissa-bags',
      'Fotografía de Moda - S&X': '/galeria/moda/sergei',
      'Fotografía de Moda - B&W Pina': '/galeria/moda/b-w-pina',
      'Fotografía de Moda - Leo Hanna': '/galeria/moda/leo',
      'Fotografía de Moda - XU': '/galeria/moda/xu',
      'Fotografía de Moda - Robert Grey': '/galeria/moda/robert-grey',
      'Fotografía de Moda - Victor Fisioterapia': '/galeria/moda/victor-fisioterapia',
      'Fotografía de Moda - Make up world': '/galeria/moda/make-up-world',
      'Fotografía de Moda - Buenaventura': '/galeria/moda/buenaventura',
      'Fotografía de Moda - Daniela Tolosa': '/galeria/moda/daniela-tolosa',
      'Fotografía de Moda - TISSA BAGS': '/galeria/moda/tissa-bags',
      'Fotografía de Moda - A FUTURO': '/galeria/moda/a-futuro',
      'Fotografía de Moda - Blond it': '/galeria/moda/blond-it',
      'Fotografía de Moda - Campaña Pride': '/galeria/moda/campana-pride',
      'Fotografía de Moda - Sergio Odontología': '/galeria/moda/sergio-odontologia',
      'Fotografía de Moda - Portrait': '/galeria/moda/portrait',
      
      // Arquitectura
      'Fotografía espacial - San Cayetano': '/galeria/arquitectura/san-cayetano',
      'Fotografía espacial - Hortaleza': '/galeria/arquitectura/hortaleza',
      'Fotografía espacial - Madrid Suite': '/galeria/arquitectura/madrid-suite',
      'Fotografía espacial - Real State': '/galeria/arquitectura/real-state',
      'Fotografía espacial - Downtown Boutique': '/galeria/arquitectura/downtown-boutique',
      'Fotografía espacial - Tirso': '/galeria/arquitectura/tirso-de-molina',
      'Fotografía espacial - Zafra': '/galeria/arquitectura/zafra',
      
      // Food
      'Fotografía Gastronómica - Enbabia Infused Bar': '/galeria/food/enbabia-infused-bar',
      'Fotografía Gastronómica - Enbabia Library': '/galeria/food/enbabia-library',
      'Fotografía Gastronómica - Escom 1': '/galeria/food/escom-1',
      'Fotografía Gastronómica - Tiki Tako': '/galeria/food/tiki-tako',
      'Fotografía Gastronómica - Viu Burger Bar': '/galeria/food/viu-burger-bar',
      'Fotografía Gastronómica - Crepas Con Cosas': '/galeria/food/crepas-con-cosas',
      'Fotografía Gastronómica - El Gran Langostino Tienda Gourmet': '/galeria/food/el-gran-langostino-tienda-gourmet',
      'Fotografía Gastronómica - La fabrica Gourmet': '/galeria/food/la-fabrica-gourmet',
      'Fotografía Gastronómica - Library': '/galeria/food/library',
      'Fotografía Gastronómica - The Food Place': '/galeria/food/the-food-place',
      'Fotografía Gastronómica - Tijuana Taquería': '/galeria/food/tijuana-taqueria',
      'Fotografía Gastronómica - TIKITAKO BEBIDAS': '/galeria/food/tikitako-bebidas',
      'Fotografía Gastronómica - 1975': '/galeria/food/1975',
      'Fotografía Gastronómica - Aperol Spritz': '/galeria/food/aperol-spritz',
      'Fotografía Gastronómica - Asados al carbon': '/galeria/food/asados-al-carbon',
      'Fotografía Gastronómica - Cibó': '/galeria/food/cibo',
      'Fotografía Social - Commo': '/galeria/food/commo',
      'Fotografía Gastronómica - Enbabia 2': '/galeria/food/enbabia-2',
      'Fotografía Gastronómica - Entre Comillas': '/galeria/food/entre-comillas',
      'Fotografía Gastronómica - espit': '/galeria/food/espit',
      'Fotografía Gastronómica - FitCharron': '/galeria/food/fitcharron',
      'Fotografía Gastronómica - Various Artist': '/galeria/food/various-artist',
      
      // Social
      'Fotografía Social - Street style': '/galeria/social/social',
      'Fotografía Social - Party Tour': '/galeria/social/social',
      'Fotografía Social - Espit': '/galeria/social/social',
      'Fotografía Social - Enbabia abril 2025': '/galeria/social/social',
      'Fotografía Social - Social': '/galeria/social/social',
      'Fotografía Social - Espit0525': '/galeria/social/social',
      'Fotografía Social - DSC04997': '/galeria/social/social'
    };

    // Buscar coincidencia exacta
    if (galleryMappings[alt]) {
      console.log('=== GALERÍA ESPECÍFICA ENCONTRADA ===');
      console.log('Alt text:', alt);
      console.log('Ruta de galería:', galleryMappings[alt]);
      return galleryMappings[alt];
    }

    // Si no hay coincidencia específica, mostrar error o usar fallback
    console.log('=== FASHION GALLERY DEBUG ===');
    console.log('Alt text original:', alt);
    console.log('No se encontró mapeo específico para este alt text');
    console.log('Considera agregar un mapeo específico en galleryMappings');
    
    // Por ahora, redirigir a la galería principal
    return '/galeria';
  };

  const handleImageClick = (alt: string) => {
    const route = getGalleryRoute(alt);
    navigate(route);
  };

  return (
    <section className="w-full relative z-10 m-0 p-0 overflow-x-hidden">
      
      
              <div className="w-full grid grid-cols-3 m-0 p-0 overflow-hidden">
          {images.map((image, index) => {
            const isAboveFold = index < 3;
            const isVisible = visibleIndexes.has(index) || isAboveFold;
            return (
              <div 
                key={index} 
                className="relative group overflow-hidden w-full cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handleImageClick(image.alt)}
                data-fg-index={index}
              >
                {isVisible ? (
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-auto object-contain max-w-full" 
                    loading={isAboveFold ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={isAboveFold ? 'high' as any : 'low' as any}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={(e) => {
                      console.error('Error loading image:', image.src);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-40 sm:h-56 bg-gray-800/60 animate-pulse" />
                )}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm md:text-base font-medium bg-black bg-opacity-70 px-3 py-1 rounded">
                    {image.alt}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
    </section>
  );
};

export default FashionGallery; 