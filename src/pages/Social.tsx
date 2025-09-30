import { useState } from 'react';
import StarsBackground from '../components/StarsBackground';


import Navigation from '../components/Navigation';
import HeroSocial from '../components/HeroSocial';
import FashionGallery from '../components/FashionGallery';
import PackagesSection from '../components/PackagesSection';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Social = () => {
  // const { initScrollSmoother } = useGSAP();

 

  return (
    <>
      <Helmet>
        <title>Fotografía Social y Eventos en Madrid | Drafter Studio</title>
        <meta name="description" content="Eventos, lifestyle y social en Madrid. Ritmo, luz y actitud capturados con estilo y precisión." />
        <link rel="canonical" href="https://drafter.es/social" />
        <meta property="og:title" content="Fotografía Social y Eventos en Madrid | Drafter Studio" />
        <meta property="og:description" content="Eventos, lifestyle y social en Madrid. Ritmo, luz y actitud con estilo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drafter.es/social" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fotografía Social y Eventos en Madrid | Drafter Studio" />
        <meta name="twitter:description" content="Eventos, lifestyle y social en Madrid. Ritmo, luz y actitud con estilo." />
      </Helmet>
      <HeroSocial />
      <StarsBackground color="#f66b30" />
      <Navigation />
      <div className="w-full z-10 relative">
        <FashionGallery 
          images={[
            {
              src: "/Portafolio Drafter 2025 julio/food/Commo/Social.webp", 
              alt: "Fotografía Social - Commo"
            },
            {
              src: "/social/Espit042025_-16.webp", 
              alt: "Fotografía Social - Espit"
            },          
            {
              src: "/social/Enbabia_abril_2025-14.webp", 
              alt: "Fotografía Social - Espit"
            },
            
            {
              src: "/social/Street style.webp",
              alt: "Fotografía Social - Social"
            },
            {
              src: "/social/Enbabia_abril_2025-33.webp", 
              alt: "Fotografía Social - Enbabia abril 2025"
            },
            {
              src: "/social/Party_Tour_-17.webp",
              alt: "Fotografía Social - Enbabia abril 2025"
            }
          ]}
        />
        <div className="relative flex flex-col items-center sm:items-start mt-20 sm:mt-8 md:mt-16 lg:mt-20 group">
          <div className="text-center sm:text-left mt-0 mb-8 md:mb-12 lg:mb-16 px-4 max-w-3xl">
            <h2 className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-6xl uppercase tracking-tight font-black mb-6 bg-gradient-to-r from-white to-[#f66b30] bg-clip-text text-transparent transition-all duration-300 group-hover:bg-none group-hover:text-white cursor-pointer">
            Ritmo, luz y actitud
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-sofia-regular leading-[1.7] tracking-[0.01em]">
            Las noches vibran distinto cuando hay fiesta, cuerpo y emoción. En los clubes, en la pista, entre luces y humo, capturamos ese segundo donde todo se alinea: una risa, un paso, una mirada intensa. Porque hay momentos que no se repiten, y ahí es donde nosotros hacemos click. 
            </p>
            
          </div>
        </div>
        <div className="relative flex flex-col items-center sm:items-end mt-20 sm:mt-8 md:mt-16 lg:mt-20 group">
          <div className="text-center sm:text-right mt-0 mb-8 md:mb-12 lg:mb-16 px-4 max-w-5xl">
          <h2 className="hero-title text-4xl sm:text-5xl md:text-7xl lg:text-6xl uppercase tracking-tight font-black mb-6 bg-gradient-to-r from-white to-[#f66b30] bg-clip-text text-transparent transition-all duration-300 group-hover:bg-none group-hover:text-white cursor-pointer">
            La belleza de lo espontáneo            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-sofia-regular leading-[1.7] tracking-[0.01em]">
            No buscamos la pose perfecta, buscamos lo real, lo que sucede sin esfuerzo. Drafter Social celebra lo auténtico: el calor de un abrazo, el flow de un buen outfit, la frescura de lo imprevisto. Porque hay instantes fugaces que merecen quedarse para siempre.            </p></div>
      </div>
      
        {/* Sección de Paquetes de Social */}
        <PackagesSection 
          category="social" 
          mainColor="#f66b30"
        />
      </div>



    </>
  );
};

export default Social;