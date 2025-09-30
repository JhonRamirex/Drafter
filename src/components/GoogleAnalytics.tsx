import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useGoogleAnalytics from '../hooks/useGoogleAnalytics';

const GoogleAnalytics: React.FC = () => {
  const location = useLocation();
  const { trackPageView } = useGoogleAnalytics();

  useEffect(() => {
    // Rastrear cambio de página
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        'event': 'page_view',
        'page_path': location.pathname + location.search,
        'page_title': document.title,
        'page_location': window.location.href
      });
    }
  }, [location]);

  return null; // Este componente no renderiza nada
};

export default GoogleAnalytics;
