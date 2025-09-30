import { useState } from 'react';
import StarsBackground from '../components/StarsBackground';


import Navigation from '../components/Navigation';
import HeroEspacial from '../components/HeroEspacial';
import FashionGallery from '../components/FashionGallery';
import PackagesSection from '../components/PackagesSection';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Espacial = () => {
  // const { initScrollSmoother } = useGSAP();


  return (
    <>
      <Helmet>
        <title>Fotografía Arquitectónica e Interiorismo en Madrid | Drafter Studio</title>
        <meta name="description" content="Fotografía para arquitectura e interiorismo en Madrid. Imágenes que muestran el alma del espacio con técnica y sensibilidad." />
        <link rel="canonical" href="https://drafter.es/espacial" />
        <meta property="og:title" content="Fotografía Arquitectónica e Interiorismo en Madrid | Drafter Studio" />
        <meta property="og:description" content="Fotografía para arquitectura e interiorismo en Madrid. Imágenes que muestran el alma del espacio." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drafter.es/espacial" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fotografía Arquitectónica e Interiorismo en Madrid | Drafter Studio" />
        <meta name="twitter:description" content="Fotografía para arquitectura e interiorismo en Madrid." />
      </Helmet>
      <HeroEspacial />
      <StarsBackground color="#878787" />
      <Navigation />
      <div className="w-full z-10 relative">
        <FashionGallery 
          images={[
            {
              src: "/arquitectura/Conde B-34.webp", 
              alt: "Fotografía espacial - Tirso"
            },
            {
              src: "/arquitectura/Conde B-18.webp", 
              alt: "Fotografía espacial - Tirso"
            },          
            {
              src: "/arquitectura/Cisneros 2-29.webp", 
              alt: "Fotografía espacial - Downtown Boutique"
            },
            
            {
              src: "/arquitectura/HORTALEZA-6.webp",
              alt: "Fotografía espacial - Hortaleza"
            },
            {
              src: "/arquitectura/Joaquin-28.webp", 
              alt: "Fotografía espacial - Real State"
            },
            {
              src: "/arquitectura/portada (2).webp",
              alt: "Fotografía espacial - Madrid Suite"
            }
          ]}
        />
        <div className="relative flex flex-col items-center sm:items-start mt-20 sm:mt-8 md:mt-16 lg:mt-20 group">
          <div className="text-center sm:text-left mt-0 mb-8 md:mb-12 lg:mb-16 px-4 max-w-5xl">
            <h2 className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-6xl uppercase tracking-tight font-black mb-6 bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent transition-all duration-300 group-hover:bg-none group-hover:text-white cursor-pointer">
            Imágenes que muestran el alma del espacio.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-sofia-regular leading-[1.7] tracking-[0.01em]">
            Creamos contenido visual de alta calidad para estudios de arquitectura, interioristas, hoteles y marcas de mobiliario. Cada composición revela la intención detrás del diseño, con una estética pulida y coherente con tu identidad.
            </p>
          </div>
        </div>
        <FashionGallery 
          images={[
            {
              src: "/arquitectura/DSC06059.webp",
              alt: "Fotografía espacial - Madrid Suite"
            },
            {
              src: "/arquitectura/DSC06069.webp",
              alt: "Fotografía espacial - Madrid Suite"
            },
            {
              src: "/arquitectura/Cisneros 2-25.webp",
              alt: "Fotografía espacial - Downtown Boutique"
            },
            {
              src: "/arquitectura/DSC05601.webp",
              alt: "Fotografía espacial - Zafra"
            },
            {
              src: "/arquitectura/DSC05941.webp",
              alt: "Fotografía espacial - Madrid Suite"
            },
            {
              src: "/arquitectura/DSC05946-HDR.webp",
              alt: "Fotografía espacial - Madrid Suite"
            }
            
          ]}
        />
        <div className="relative flex flex-col items-center sm:items-end mt-20 sm:mt-8 md:mt-16 lg:mt-20 group">
          <div className="text-center sm:text-right mt-0 mb-8 md:mb-12 lg:mb-16 px-4 max-w-5xl">
            <h2 className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-6xl uppercase tracking-tight font-black mb-6 bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent transition-all duration-300 group-hover:bg-none group-hover:text-white cursor-pointer">
            Fotografía para arquitectura e interiorismo en Madrid.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-sofia-regular leading-[1.7] tracking-[0.01em]">
            El equilibrio entre técnica y sensibilidad nos permite ofrecer imágenes que potencian proyectos residenciales, comerciales y editoriales. Trabajamos cada escena con precisión y dirección visual, logrando resultados elegantes y funcionales.
            </p>
          </div>
        </div>
        <FashionGallery 
          images={[
            {
              src: "/arquitectura/portada.webp",
              alt: "Fotografía espacial - Downtown Boutique"
            },
            {
              src: "/arquitectura/portada (3).webp",
              alt: "Fotografía espacial - Real State"
            },
            {
              src: "/arquitectura/portada (5).webp", 
              alt: "Fotografía espacial - Tirso"
            },
           
            {
              src: "/arquitectura/PORTADA (4).webp",
              alt: "Fotografía espacial - Hortaleza"
            },
            {
              src: "/arquitectura/portada (6).webp",
              alt: "Fotografía espacial - Zafra"
            },
            {
              src: "/arquitectura/San_cayetano-53.webp",
              alt: "Fotografía espacial - San Cayetano"
            }
          ]}
        />
        
        {/* Sección de Paquetes de Espacial */}
        <PackagesSection 
          category="espacial" 
          mainColor="#878787"
        />
      </div>

    </>
  );
};

export default Espacial;