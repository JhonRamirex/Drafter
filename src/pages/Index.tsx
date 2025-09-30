import React, { useRef, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import StarsBackground from '../components/StarsBackground';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ImageSections from '../components/ImageSections';
import FeaturedSection from '../components/FeaturedSection';
import CosmicSection from '../components/CosmicSection';
import AdditionalContent from '../components/AdditionalContent';
import gsap from 'gsap';

const Index: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<'cosmic' | 'featured'>('cosmic');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cosmicRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const animating = useRef(false);

  // Bloquea/desbloquea el scroll del body
  const setBodyScroll = (enabled: boolean) => {
    document.body.style.overflow = enabled ? '' : 'hidden';
  };

  // Detecta scroll al final/inicio de cada sección
  useEffect(() => {
    const handleScroll = () => {
      if (animating.current) return;
      if (currentSection === 'cosmic' && cosmicRef.current && featuredRef.current) {
        const { bottom } = cosmicRef.current.getBoundingClientRect();
        if (bottom <= window.innerHeight + 2) {
          // Slide a FeaturedSection
          animating.current = true;
          setIsTransitioning(true);
          setBodyScroll(false);
          // Ambas secciones en el DOM y absolutas
          cosmicRef.current.style.position = 'absolute';
          featuredRef.current.style.position = 'absolute';
          gsap.set(cosmicRef.current, { x: 0 });
          gsap.set(featuredRef.current, { x: window.innerWidth });
          featuredRef.current.style.display = 'block';
          const tl = gsap.timeline({
            onComplete: () => {
              setCurrentSection('featured');
              setIsTransitioning(false);
              setBodyScroll(true);
              // Reset styles
              if (cosmicRef.current) {
                gsap.set(cosmicRef.current, { x: 0 });
                cosmicRef.current.style.position = 'absolute';
                cosmicRef.current.style.display = 'none';
              }
              if (featuredRef.current) {
                gsap.set(featuredRef.current, { x: 0 });
                featuredRef.current.style.position = 'relative';
                featuredRef.current.style.display = 'block';
              }
              animating.current = false;
            }
          });
          tl.to(cosmicRef.current, { x: -window.innerWidth, duration: 1.5, ease: 'power2.inOut' }, 0)
            .to(featuredRef.current, { x: 0, duration: 1.5, ease: 'power2.inOut' }, 0);
        }
      } else if (currentSection === 'featured' && featuredRef.current && cosmicRef.current) {
        if (window.scrollY === 0) {
          // Slide de vuelta a CosmicSection
          animating.current = true;
          setIsTransitioning(true);
          setBodyScroll(false);
          featuredRef.current.style.position = 'absolute';
          cosmicRef.current.style.position = 'absolute';
          gsap.set(featuredRef.current, { x: 0 });
          gsap.set(cosmicRef.current, { x: -window.innerWidth });
          cosmicRef.current.style.display = 'block';
          const tl = gsap.timeline({
            onComplete: () => {
              setCurrentSection('cosmic');
              setIsTransitioning(false);
              setBodyScroll(true);
              // Reset styles
              if (featuredRef.current) {
                gsap.set(featuredRef.current, { x: 0 });
                featuredRef.current.style.position = 'absolute';
                featuredRef.current.style.display = 'none';
              }
              if (cosmicRef.current) {
                gsap.set(cosmicRef.current, { x: 0 });
                cosmicRef.current.style.position = 'relative';
                cosmicRef.current.style.display = 'block';
              }
              animating.current = false;
            }
          });
          tl.to(featuredRef.current, { x: window.innerWidth, duration: 1.5, ease: 'power2.inOut' }, 0)
            .to(cosmicRef.current, { x: 0, duration: 1.5, ease: 'power2.inOut' }, 0);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  // Inicializa el estado de visibilidad y posición
  useEffect(() => {
    if (currentSection === 'cosmic' && cosmicRef.current) {
      gsap.set(cosmicRef.current, { x: 0 });
      cosmicRef.current.style.position = 'relative';
      cosmicRef.current.style.display = 'block';
      if (featuredRef.current) {
        gsap.set(featuredRef.current, { x: 0 });
        featuredRef.current.style.position = 'absolute';
        featuredRef.current.style.display = 'none';
      }
    } else if (currentSection === 'featured' && featuredRef.current) {
      gsap.set(featuredRef.current, { x: 0 });
      featuredRef.current.style.position = 'relative';
      featuredRef.current.style.display = 'block';
      if (cosmicRef.current) {
        gsap.set(cosmicRef.current, { x: 0 });
        cosmicRef.current.style.position = 'absolute';
        cosmicRef.current.style.display = 'none';
      }
    }
  }, [currentSection]);

  return (
    <main style={{ background: '#000' }}>
      <Helmet>
        <title>Drafter Studio - Producción Audiovisual en Madrid</title>
        <meta name="description" content="Estudio de fotografía y producción de video en Madrid. Fusionamos arte y técnica para crear experiencias visuales impactantes." />
        <link rel="canonical" href="https://drafter.es/" />
        <meta property="og:title" content="Drafter Studio - Producción Audiovisual en Madrid" />
        <meta property="og:description" content="Estudio de fotografía y producción de video en Madrid. Fusionamos arte y técnica para crear experiencias visuales impactantes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drafter.es/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Drafter Studio - Producción Audiovisual en Madrid" />
        <meta name="twitter:description" content="Estudio de fotografía y producción de video en Madrid. Fusionamos arte y técnica para crear experiencias visuales impactantes." />
      </Helmet>
      <StarsBackground />
      <Navigation />
      <Hero />
      {/* Solo una sección visible a la vez, con slide lateral */}
      <div style={{ position: 'relative', width: '100vw', minHeight: '100vh', overflow: 'hidden', background: '#000' }}>
        <div
          ref={cosmicRef}
          style={{
            width: '100vw',
            minHeight: '100vh',
            position: currentSection === 'cosmic' || isTransitioning ? 'relative' : 'absolute',
            top: 0,
            left: 0,
            zIndex: 2,
            background: '#000',
            display: currentSection === 'featured' && !isTransitioning ? 'none' : 'block',
            transition: 'none',
          }}
        >
          <CosmicSection />
          
        </div>
        <div
          
        ><AdditionalContent />
          {/* El resto de la página sigue con scroll normal */}
          
        </div>
      </div>
    </main>
  );
};

export default Index;
