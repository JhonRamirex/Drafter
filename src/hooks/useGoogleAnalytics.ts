import { useEffect } from 'react';
import { ANALYTICS_CONFIG } from '../config/analytics';

// Declarar gtag en el objeto window
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const useGoogleAnalytics = () => {
  useEffect(() => {
    // Inicializar dataLayer si no existe
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function() {
        window.dataLayer.push(arguments);
      };
    }
  }, []);

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  const trackPageView = (pagePath: string, pageTitle?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', ANALYTICS_CONFIG.GA4_ID, {
        page_path: pagePath,
        page_title: pageTitle,
        ...ANALYTICS_CONFIG.PRIVACY_SETTINGS
      });
    }
  };

  const trackConversion = (conversionId: string, value?: number, currency?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: currency || 'EUR',
      });
    }
  };

  return {
    trackEvent,
    trackPageView,
    trackConversion,
  };
};

export default useGoogleAnalytics;
