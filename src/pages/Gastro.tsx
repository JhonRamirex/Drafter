import { useState } from 'react';
import StarsBackground from '../components/StarsBackground';


import Navigation from '../components/Navigation';
import HeroGastro from '../components/HeroGastro';
import FashionGallery from '../components/FashionGallery';
import PackagesSection from '../components/PackagesSection';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Gastro = () => {
  // const { initScrollSmoother } = useGSAP();


  return (
    <>
      <Helmet>
        <title>Fotografía Gastronómica en Madrid | Drafter Studio</title>
        <meta name="description" content="Fotógrafo de comida en Madrid. Contenido gastronómico para marcas y restaurantes: menús, redes y campañas." />
        <link rel="canonical" href="https://drafter.es/gastro" />
        <meta property="og:title" content="Fotografía Gastronómica en Madrid | Drafter Studio" />
        <meta property="og:description" content="Fotógrafo de comida en Madrid. Contenido gastronómico para marcas y restaurantes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drafter.es/gastro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fotografía Gastronómica en Madrid | Drafter Studio" />
        <meta name="twitter:description" content="Fotógrafo de comida en Madrid. Contenido gastronómico para marcas y restaurantes." />
      </Helmet>
      <HeroGastro />
      <StarsBackground color="#FB739F" />
      <Navigation />
      <div className="w-full z-10 relative">
        <FashionGallery 
          images={[
            {
              src: "/gastronomia/1.webp", 
              alt: "Fotografía Gastronómica - Aperol Spritz"
            },
            {
              src: "/gastronomia/2.webp", 
              alt: "Fotografía Gastronómica - Entre Comillas"
            },          
            {
              src: "/Portafolio Drafter 2025 julio/food/Enbabia Infused Bar/spit-071.webp", 
              alt: "Fotografía Gastronómica - Enbabia Infused Bar"
            },
            
            {
              src: "/gastronomia/4.webp",
              alt: "Fotografía Gastronómica - Enbabia Infused Bar"
            },
            {
              src: "/gastronomia/5.webp", 
              alt: "Fotografía Gastronómica - Viu Burger Bar"
            },
            {
              src: "/gastronomia/6.webp",
              alt: "Fotografía Gastronómica - TIKITAKO BEBIDAS"
            }
          ]}
        />
         <div className="relative flex flex-col items-center sm:items-start mt-20 sm:mt-8 md:mt-16 lg:mt-20 group">
          <div className="text-center ml-10 sm:text-left mt-0 mb-8 md:mb-12 lg:mb-16 px-4 max-w-5xl">
            <h2 className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-6xl uppercase tracking-tight font-black mb-6 bg-gradient-to-r from-white to-[#FB739F]  bg-clip-text text-transparent transition-all duration-300 group-hover:bg-none group-hover:text-white cursor-pointer">
            Fotógrafo de comida en Madrid para marcas y restaurantes.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-sofia-regular leading-[1.7] tracking-[0.01em]">
            Creamos contenido visual que resalta texturas, colores y presentación con enfoque comercial. Ideal para menús, redes sociales, campañas de marketing y delivery. Tu cocina nunca se vio tan provocativa.
            </p>
          </div>
        </div>
        <FashionGallery 
          images={[
            {
              src: "/gastronomia/PORTADA (1).webp",
              alt: "Fotografía Gastronómica - Viu Burger Bar"
            },
            {
              src: "/gastronomia/PORTADA (2).webp",
              alt: "Fotografía Gastronómica - espit"
            },
            {
              src: "/gastronomia/PORTADA (3).webp",
              alt: "Fotografía Gastronómica - Various Artist"
            },
            {
              src: "/gastronomia/PORTADA (6).webp",
              alt: "Fotografía Gastronómica - Entre Comillas"
            },
            {
              src: "/gastronomia/PORTADA (5).webp",
              alt: "Fotografía Gastronómica - El Gran Langostino Tienda Gourmet"
            },
            {
              src: "/gastronomia/22.webp",
              alt: "Fotografía Gastronómica - Enbabia 2"
            }
            
          ]}
        />
        <div className="relative flex flex-col items-center sm:items-end mt-20 sm:mt-8 md:mt-16 lg:mt-20 group">
          <div className="text-center mr-10 sm:text-right mt-0 mb-8 md:mb-12 lg:mb-16 px-4 max-w-5xl">
            <h2 className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-6xl uppercase tracking-tight font-black mb-6 bg-gradient-to-r from-white to-[#FB739F] bg-clip-text text-transparent transition-all duration-300 group-hover:bg-none group-hover:text-white cursor-pointer">
            Imágenes de platos que venden y enamoran.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-sofia-regular leading-[1.7] tracking-[0.01em]">
            Especialistas en fotografía gastronómica para hostelería, food styling y producto gourmet. Usamos iluminación profesional, composición cuidada y edición precisa para que tus platos luzcan irresistibles en cualquier formato.
            </p>
          </div>
        </div>
        <FashionGallery 
          images={[
            {
              src: "/Portafolio Drafter 2025 julio/food/FitCharron/portada.webp",
              alt: "Fotografía Gastronómica - FitCharron"
            },
            {
              src: "/Portafolio Drafter 2025 julio/food/Escom 1/portada.webp",
              alt: "Fotografía Gastronómica - Escom 1"
            },
            {
              src: "/Portafolio Drafter 2025 julio/food/Tijuana Taquería/portada.webp",
              alt: "Fotografía Gastronómica - Tijuana Taquería"
            },
            {
              src: "/Portafolio Drafter 2025 julio/food/Enbabia Library/DRAFTER-109.webp",
              alt: "Fotografía Gastronómica - Enbabia Library"
            },
            {
              src: "/Portafolio Drafter 2025 julio/food/1975/portada.webp",
              alt: "Fotografía Gastronómica - 1975"
            },
            {
              src: "/Portafolio Drafter 2025 julio/food/Crepas Con Cosas/portada.webp",
              alt: "Fotografía Gastronómica - Crepas Con Cosas"
            }
          ]}
        />
        
        {/* Sección de Paquetes de Gastro */}
        <PackagesSection 
          category="gastro" 
          mainColor="#FB739F"
        />
      </div>


    </>
  );
};

export default Gastro;