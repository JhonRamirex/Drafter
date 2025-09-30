import { useState } from 'react';
import StarsBackground from '../components/StarsBackground';
import ImageSections from '../components/ImageSections';
import ImageModal from '../components/ImageModal';
import Navigation from '../components/Navigation';
import HeroModa from '../components/HeroModa';
import FashionGallery from '../components/FashionGallery';
import PackagesSection from '../components/PackagesSection';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Moda = () => {
  // const { initScrollSmoother } = useGSAP();
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string, category: string} | null>(null);
 
  return (
    <>
      <Helmet>
        <title>Fotografía de Moda en Madrid | Drafter Studio</title>
        <meta name="description" content="Fotografía y video de moda en Madrid. Editorial, campañas y contenido para marcas. Estilo, técnica y dirección creativa." />
        <link rel="canonical" href="https://drafter.es/moda" />
        <meta property="og:title" content="Fotografía de Moda en Madrid | Drafter Studio" />
        <meta property="og:description" content="Fotografía y video de moda en Madrid. Editorial, campañas y contenido para marcas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drafter.es/moda" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fotografía de Moda en Madrid | Drafter Studio" />
        <meta name="twitter:description" content="Fotografía y video de moda en Madrid. Editorial, campañas y contenido para marcas." />
      </Helmet>
      <HeroModa />
      <StarsBackground color="#6900C7" />
      <Navigation />
      <div className="w-full z-10 relative">
        <FashionGallery 
          images={[
            {
              src: "/Moda/PORTADA 3.webp", 
              alt: "Fotografía de Moda - Tissa"
            },
            {
              src: "/Moda/PORTADA 6.webp",
              alt: "Fotografía de Moda -  Tissa Summer"
            },          
            {
              src: "/Moda/S&X-4.webp",
              alt: "Fotografía de Moda - S&X"
            },
            {
              src: "/Moda/Tissa_Summer-3.webp",
              alt: "Fotografía de Moda -  Tissa Summer"
            },
            {
              src: "/Moda/B&W Pina-5.webp",
              alt: "Fotografía de Moda - B&W Pina"
            },
            {
              src: "/Moda/LeoHanna-20.webp",
              alt: "Fotografía de Moda - Leo Hanna"
            }
          ]}
        />
         <div className="relative flex flex-col items-center sm:items-start mt-20 sm:mt-8 md:mt-16 lg:mt-20 group">
          <div className="text-center sm:text-left mt-0 mb-8 md:mb-12 lg:mb-16 px-4 max-w-5xl">
            <h2 className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-6xl uppercase tracking-tight font-black mb-6 bg-gradient-to-r from-white to-[#6900C7] bg-clip-text text-transparent transition-all duration-300 group-hover:bg-none group-hover:text-white cursor-pointer">
            Fotografía de Moda.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-sofia-regular leading-[1.7] tracking-[0.01em]">
            Elevamos cada look a su máximo nivel visual. Capturamos la identidad de tu marca con imágenes que combinan técnica precisa, dirección creativa y estilo editorial. Cada disparo es una pieza de arte que comunica actitud, elegancia y autenticidad.
          </p>
          <br />
          <p className="text-2xl sm:text-xl md:text-2xl text-white/80 font-sofia-regular leading-[1.7] tracking-[0.01em]">Transformá tu colección en una narración visual inolvidable.</p>
          </div>
        </div>
        <FashionGallery 
          images={[
            {
              src: "/Moda/portada9.webp",
              alt: "Fotografía de Moda - XU"
            },
            {
              src: "/Moda/PORTADA 4.webp",
              alt: "Fotografía de Moda - Robert Grey"
            },
            {
              src: "/Moda/PORTADA 7.webp",
              alt: "Fotografía de Moda - Victor Fisioterapia"
            },
            {
              src: "/Moda/PORTADA 2.webp",
              alt: "Fotografía de Moda - Make up world"
            },
            {
              src: "/Moda/S&X-10.webp", 
              alt: "Fotografía de Moda - XU"
            },
            {
              src: "/Moda/DSC07894.webp",
              alt: "Fotografía de Moda - Robert Grey"
            }
          ]}
        />
         <div className="relative flex flex-col items-center sm:items-end mt-20 sm:mt-8 md:mt-16 lg:mt-20 group">
          <div className="text-center mr-10 sm:text-right mt-0 mb-8 md:mb-12 lg:mb-16 px-4 max-w-5xl">
            <h2 className="hero-title text-5xl md:text-7xl lg:text-6xl uppercase tracking-tight font-black mb-6 bg-gradient-to-r from-white to-[#6900C7] bg-clip-text text-transparent transition-all duration-300 group-hover:bg-none group-hover:text-white cursor-pointer">
            Video de Moda.
            </h2>
            <p className="text-2xl sm:text-xl md:text-2xl text-white/80 font-sofia-regular leading-[1.7] tracking-[0.01em]">
            El video es moda en acción. Dirigimos y producimos piezas audiovisuales que dan vida a tus diseños con elegancia, ritmo y fuerza visual. Desde pasarelas hasta campañas digitales, creamos impacto real.
            <br />
            <br />
            Llevá tu marca a otro plano con video de alto impacto.
            </p>
          </div>
        </div>
        <FashionGallery 
          images={[
            {
              src: "/Moda/portada.webp",
              alt: "Fotografía de Moda - Buenaventura"
            },
            {
              src: "/Moda/her.webp",
              alt: "Fotografía de Moda - Make up world"
            },
            {
              src: "/Moda/DRAFTER.webp", 
              alt: "Fotografía de Moda - Buenaventura"
            },
           
            {
              src: "/Moda/Alvin closed.webp",
              alt: "Fotografía de Moda - Make up world"
            },
            {
              src: "/Moda/Tissa_Summer25-15.webp",
              alt: "Fotografía de Moda - Tissa Summer"
            },
            {
              src: "/Moda/DSC06272.webp",
              alt: "Fotografía de Moda - Daniela Tolosa"
            }
          ]}
        />
        
        {/* Sección de Paquetes de Moda */}
        <PackagesSection 
          category="moda" 
          mainColor="#6900C7"
        />
      </div>
      
      <ImageModal
        src={selectedImage?.src || ''}
        alt={selectedImage?.alt || ''}
        category={selectedImage?.category || ''}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
    
  );
};

export default Moda;
