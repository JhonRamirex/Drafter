
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { logo: true, src: '/SVG/SVG/Drafter__5.svg', alt: 'Inicio', path: '/' },
    { name: 'Moda', path: '/moda' },
    { name: 'Espacial', path: '/espacial' },
    { name: 'Gastro', path: '/gastro' },
    { name: 'Social', path: '/social' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Quiénes Somos', path: '/quienes-somos' },
    { name: 'Paquetes', path: '/paquetes' },
    { name: 'Noticias', path: '/noticias' }
  ];

  // Eliminamos la lógica de scroll para mantener siempre transparente
  useEffect(() => {
    // No necesitamos detectar scroll para mantener transparente
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Solo animación inicial, sin efectos de scroll
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-black py-3"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo + Nombre a la izquierda */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center">
              <img src="/SVG/SVG/Drafter__5.svg" alt="Inicio" className="h-7 w-auto" />
            </Link>
            <Link to="/" >
            <span className="text-white font-bold text-lg tracking-wide">Drafter Studio</span>
            </Link>
          </div>
          {/* Desktop Menu a la derecha */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.filter(item => !item.logo).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white hover:text-purple-400 transition-colors duration-300 ${
                  location.pathname === item.path ? 'text-purple-400' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button a la derecha */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-purple-400 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu debajo */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black py-3">
            <div className="py-4 space-y-2">
              {menuItems.filter(item => !item.logo).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 text-white hover:text-purple-400 transition-colors duration-300 ${
                    location.pathname === item.path ? 'text-purple-400' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
