import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Navigation from './Navigation';
import TextMorphing from './TextMorphing.tsx';
import TextMorphingMobile from './TextMorphingMobile.tsx';
import AnimatedGradient from './AnimatedGradient.tsx';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-black via-transparent to-black">
      <Navigation />
      
      {/* Hero específico para móvil */}
      <div className="block md:hidden">
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 -mt-[100px]">
          {/* Logo y texto animado - versión móvil */}
          <div className="flex flex-col items-center gap-6 mb-12">
            <AnimatedGradient />
            <div className="flex items-center gap-4">
              <img
                src="/SVG/SVG/Drafter__5.svg"
                alt="Drafter."
                className="h-10 w-auto object-contain"
                style={{ borderRadius: 0, boxShadow: 'none' }}
              />
              <div>
                <TextMorphingMobile />
              </div>
            </div>
          </div>

          {/* Contenido principal - versión móvil */}
          <div className="text-center max-w-sm mx-auto">
            <h1 className="hero-title text-3xl sm:text-4xl uppercase tracking-tight font-black bg-gradient-to-r from-white via-purple-600 to-orange-600 bg-clip-text text-transparent transition-all duration-300 mb-6">
              Fusionamos Arte y Técnica para contar historias Visuales.
            </h1>
            
            <p className="text-lg text-white/80 font-sofia-regular leading-relaxed tracking-wide mb-8">
              Estudio de fotografía y producción de video en Madrid. Convertimos tu visión en una constelación visual que perdura.
            </p>
            
            {/* Botones de acción - versión móvil */}
            <div className="flex flex-col gap-4">
              <a 
                href="https://calendly.com/drafterstudio/retrato-15-clon-9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-400 hover:scale-105 transition-all duration-300 cursor-pointer text-center"
              >
                Hablemos de tu proyecto
              </a>
              <Link to="/galeria" className="px-8 py-4 text-white rounded-full border-2 border-gray-600 hover:text-white font-semibold bg-transparent hover:bg-[#8391ae71] transition-all duration-300 text-center">
                Explora nuestro trabajo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero para desktop - versión original */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          {/* Layout principal */}
          <div className="w-full flex flex-col items-center justify-center sm:flex-row sm:justify-start p-0 m-0 mt-22 sm:mt-22 md:mt-20 lg:mt-22" style={{ paddingLeft: '0px' }}>
            <div className="flex flex-row items-center gap- sm:gap-4 md:gap-6 mt-0 sm:mt-0">
              <AnimatedGradient />
              <img
                src="/SVG/SVG/Drafter__5.svg"
                alt="Drafter."
                className="h-12 w-auto object-contain sm:h-16 md:h-816lg:h-16 xl:h-16"
                style={{ borderRadius: 0, boxShadow: 'none', marginRight: 0 }}
              />
              <div className="scale-75 sm:scale-100">
                <TextMorphing />
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="relative flex flex-col items-center justify-center sm:items-start mt-20 sm:mt-8 md:mt-16 lg:mt-20">
            <div className="text-justify sm:text-left text-center mt-0 mb-8 md:mb-12 lg:mb-16 max-w-7xl sm:max-w-7xl group" style={{ paddingLeft: '0px' }}>
              <h1 className="hero-title text-5xl md:text-7xl lg:text-6xl uppercase tracking-tight font-black  bg-gradient-to-r from-white via-purple-600 to-orange-600 bg-clip-text text-transparent transition-all duration-300 hover:bg-none hover:text-white cursor-pointer">
                Fusionamos Arte y Técnica para contar historias Visuales.
              </h1>
              <br />
              <p className="text-justify sm:text-left text-2xl sm:text-xl max-w-5xl md:text-2xl text-white/80 font-sofia-regular leading-[1.7] tracking-[0.01em]">
                Estudio de fotografía y producción de video en Madrid. Convertimos tu visión en una constelación visual que perdura.
              </p>
              <br/>
              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start mt-6">
                <a 
                  href="https://calendly.com/drafterstudio/retrato-15-clon-9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow hover:bg-purple-400 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  Hablemos de tu proyecto
                </a>
                <Link to="/galeria" className="px-6 py-3 text-white rounded-full border-2 border-gray-600 hover:text-white font-semibold bg-transparent hover:bg-[#8391ae71] transition-all duration-300">
                  Explora nuestro trabajo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flecha flotante para scroll */}
      <div className="absolute bottom-[100px] sm:bottom-4 md:bottom-[100px] inset-x-0 flex justify-center z-30 animate-bounce sm:mb-0 block sm:hidden md:block">
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

export default Hero;