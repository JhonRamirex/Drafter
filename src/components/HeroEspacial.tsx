import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Navigation from './Navigation';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const HeroEspacial = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#878787] via-transparent to-black">
      <Navigation />
      {/* Header con Logo y Título */}
      <div className="relative z-20 flex flex-col items-center pt-16 sm:pt-20">
        <div className="logo-container flex items-center gap-3 sm:gap-4">
          <img 
            src="/SVG/SVG/logoespacial.webp" 
            alt="Espacial Hero" 
            className="w-20 h-auto sm:w-28 shadow-lg"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
          <span className="text-2xl sm:text-4xl font-semibold text-[#878787]">Drafter Espacial</span>
        </div>
        
        <div className="text-center mt-6 sm:mt-9 group px-4">
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-tight font-black mb-4 sm:mb-6 bg-gradient-to-r from-white to-[#d3bfe4] to-gray-400 bg-clip-text text-transparent transition-all duration-300 group-hover:bg-none group-hover:text-white cursor-pointer">
            Fotografía de interiores 
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-4xl sm:max-w-6xl mx-auto [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">
            Luz, forma y materiales se convierten en escenas visuales pensadas para comunicar el carácter de cada espacio. Nuestra fotografía está orientada a proyectos de interiorismo, arquitectura y diseño que buscan destacar con estilo propio.
          </p>
          <div className="flex justify-center mt-6 sm:mt-8">
            <a 
              href="https://calendly.com/drafterstudio/retrato-15-clon-9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 rounded-full bg-gray-600 text-white font-semibold shadow hover:bg-[#949495] transition-all duration-300 cursor-pointer text-sm sm:text-base"
            >
              Agendar cita
            </a>
          </div>
        </div>
      </div>

      {/* Flecha flotante para scroll - ajustada para ser visible en iPad Pro e iPhone */}
      <div className="absolute bottom-12 sm:bottom-6 inset-x-0 flex justify-center z-30 animate-bounce">
        <div className="flex flex-col items-center cursor-pointer group" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <img 
            src="/SVG/SVG/flecha.svg" 
            alt="Scroll hacia abajo" 
            className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroEspacial; 