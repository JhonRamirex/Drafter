import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log('🔄 ScrollToTop: Cambio de ruta detectado:', pathname);
    
    // Múltiples métodos para asegurar que funcione
    const scrollToTop = () => {
      // Método 1: window.scrollTo
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      
      // Método 2: document.documentElement.scrollTop
      document.documentElement.scrollTop = 0;
      
      // Método 3: document.body.scrollTop
      document.body.scrollTop = 0;
      
      // Método 4: scrollIntoView
      document.body.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    };
    
    // Ejecutar con un pequeño delay para asegurar que el DOM esté listo
    setTimeout(scrollToTop, 100);
    
    console.log('✅ ScrollToTop: Scroll ejecutado');
  }, [pathname]);

  return null; // Este componente no renderiza nada
};

export default ScrollToTop; 