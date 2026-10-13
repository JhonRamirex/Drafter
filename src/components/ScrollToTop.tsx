import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Restaurar scroll del documento (evita body overflow residual de otras páginas)
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';

    const reset = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Instantáneo: smooth + delays rompía el scroll en móvil con height:100% residual
    reset();
    requestAnimationFrame(reset);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
