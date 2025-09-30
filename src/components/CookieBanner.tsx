import React, { useState, useEffect } from 'react';
import { X, Settings, Check, X as XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sendConsentEvent } from '../config/analytics';

// Declarar gtag en el objeto window
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean; // Considerada esencial (GA4/GTM)
}

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Siempre true, no se puede desactivar
    analytics: false // Se activará al aceptar esenciales o todas
  });

  useEffect(() => {
    // Verificar si ya se ha dado consentimiento
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      loadGoogleAnalytics(savedPreferences.analytics);
    }
  }, []);

  const savePreferences = (newPreferences: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(newPreferences));
    setPreferences(newPreferences);
    loadGoogleAnalytics(newPreferences.analytics);
    setIsVisible(false);
    setShowSettings(false);
  };

  const loadGoogleAnalytics = (analyticsEnabled: boolean) => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Actualizar consentimiento usando gtag directamente
      window.gtag('consent', 'update', {
        'analytics_storage': analyticsEnabled ? 'granted' : 'denied',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
    }
    
    // También enviar al dataLayer para GTM
    sendConsentEvent(analyticsEnabled);
  };

  const handleAcceptEssentials = () => {
    // GA4 y GTM se consideran esenciales => analytics ON
    savePreferences({
      necessary: true,
      analytics: true
    });
  };

  const handleAcceptAll = () => {
    // No tenemos categorías adicionales, equivale a esenciales
    savePreferences({
      necessary: true,
      analytics: true
    });
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const toggleAnalytics = () => {
    setPreferences(prev => ({
      ...prev,
      analytics: !prev.analytics
    }));
  };

  const handleRejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false
    });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Banner principal */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-t border-purple-500/30 p-4 md:p-6">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  🍪 Utilizamos cookies
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  Utilizamos cookies propias y de terceros para mejorar nuestros servicios y analizar el tráfico web. 
                  Puedes configurar tus preferencias o aceptar todas las cookies.
                </p>
                <div className="mt-2">
                  <Link 
                    to="/cookies" 
                    className="text-purple-400 hover:text-purple-300 underline text-sm"
                  >
                    Más información sobre cookies
                  </Link>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 transition-colors rounded-full"
                >
                  <Settings size={16} />
                  Personalizar
                </button>

                <button
                  onClick={handleAcceptEssentials}
                  className="px-4 py-2 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 transition-colors rounded-full"
                >
                  Aceptar esenciales
                </button>

                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white transition-colors rounded-full"
                >
                  Aceptar todas
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Panel de configuración */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-purple-500/30 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Configuración de Cookies
                </span>
              </h2>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Cookies necesarias (incluye GA4 y GTM) */}
              <div className="border border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">🍪 Cookies Necesarias</h3>
                  <div className="flex items-center gap-2 text-green-400">
                    <Check size={16} />
                    <span className="text-sm">Siempre activas</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-2">
                  Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar.
                  Incluyen medición básica mediante Google Analytics 4 (G-X65CMQRY04) y la carga a través de
                  Google Tag Manager (GTM-W9MKFZCB).
                </p>
                <ul className="text-gray-400 text-xs space-y-1 ml-4">
                  <li>• sidebar:state - Estado del menú lateral</li>
                  <li>• cookie-consent - Preferencias de cookies</li>
                  <li>• session-id - Identificador de sesión</li>
                  <li>• _ga / _ga_[ID] / _gid - Métricas esenciales de uso</li>
                  <li>• _gtm - Identificador de GTM</li>
                </ul>
              </div>

              {/* Información adicional */}
              <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">ℹ️ Información importante</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Puedes cambiar tus preferencias en cualquier momento</li>
                  <li>• Las cookies se almacenan en tu navegador</li>
                  <li>• Puedes eliminar las cookies desde la configuración de tu navegador</li>
                  <li>• Más información en nuestra <Link to="/cookies" className="text-purple-400 hover:text-purple-300 underline">Política de Cookies</Link></li>
                </ul>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button
                onClick={handleRejectAll}
                className="flex-1 px-4 py-2 text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 transition-colors rounded-full"
              >
                Rechazar todas
              </button>
              
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white transition-colors rounded-full"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
