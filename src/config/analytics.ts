// Configuración de Google Analytics y Google Tag Manager
export const ANALYTICS_CONFIG = {
  // Google Analytics 4 ID
  GA4_ID: 'G-X65CMQRY04',
  
  // Google Tag Manager ID
  GTM_ID: 'GTM-W9MKFZCB',
  
  // Configuración de privacidad
  PRIVACY_SETTINGS: {
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure',
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  }
} as const;

// Función para inicializar Google Analytics a través de GTM
export const initializeGA4 = () => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      'event': 'gtm.init',
      'gtm.uniqueEventId': Date.now(),
      'ga4_id': ANALYTICS_CONFIG.GA4_ID
    });
  }
};

// Función para enviar eventos de consentimiento con Consent Mode v2
export const sendConsentEvent = (analyticsConsent: boolean) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    // Configurar Consent Mode v2 (obligatorio desde marzo 2024)
    window.dataLayer.push({
      'event': 'consent',
      'consent_type': 'analytics_storage',
      'consent_value': analyticsConsent ? 'granted' : 'denied'
    });
    
    window.dataLayer.push({
      'event': 'consent',
      'consent_type': 'ad_storage',
      'consent_value': 'denied' // Siempre denegado por privacidad
    });
    
    window.dataLayer.push({
      'event': 'consent',
      'consent_type': 'ad_user_data',
      'consent_value': 'denied' // Siempre denegado por privacidad
    });
    
    window.dataLayer.push({
      'event': 'consent',
      'consent_type': 'ad_personalization',
      'consent_value': 'denied' // Siempre denegado por privacidad
    });
    
    // Evento personalizado para tracking interno
    window.dataLayer.push({
      'event': 'cookie_consent_update',
      'analytics_consent': analyticsConsent,
      'necessary_consent': true,
      'timestamp': new Date().toISOString()
    });
  }
};

export default ANALYTICS_CONFIG;
