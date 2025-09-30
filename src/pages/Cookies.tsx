import React from 'react';
import { Helmet } from 'react-helmet-async';
import StarsBackground from '../components/StarsBackground';
import Navigation from '../components/Navigation';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cookies = () => {
  return (
    <>
      <Helmet>
        <title>Política de Cookies - Drafter Studio</title>
        <meta name="description" content="Política de cookies de Drafter Studio. Información sobre el uso de cookies y tecnologías de seguimiento." />
        <link rel="canonical" href="https://drafter.es/cookies" />
        <meta property="og:title" content="Política de Cookies - Drafter Studio" />
        <meta property="og:description" content="Política de cookies de Drafter Studio. Información sobre el uso de cookies y tecnologías de seguimiento." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drafter.es/cookies" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Política de Cookies - Drafter Studio" />
        <meta name="twitter:description" content="Política de cookies de Drafter Studio. Información sobre el uso de cookies y tecnologías de seguimiento." />
      </Helmet>
      
      <Navigation />
      <StarsBackground color="#6900C7" />
      
      <div className="min-h-screen bg-black text-white pt-20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-4"
            >
              <ArrowLeft size={20} />
              Volver al inicio
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Política de Cookies
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Última actualización: {new Date().toLocaleDateString('es-ES')}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">1. ¿Qué son las Cookies?</h2>
              <p className="text-gray-300 leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. 
                Nos ayudan a mejorar tu experiencia de navegación y a entender cómo utilizas nuestro sitio.
              </p>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">2. Tipos de Cookies que Utilizamos</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-3">🍪 Cookies Técnicas (Necesarias)</h3>
                  <p className="text-gray-300 mb-2">Estas cookies son esenciales para el funcionamiento del sitio web e incluyen la medición básica:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                    <li><strong>sidebar:state</strong> - Recuerda el estado del menú lateral</li>
                    <li><strong>cookie-consent</strong> - Almacena tu preferencia sobre cookies</li>
                    <li><strong>session-id</strong> - Mantiene tu sesión activa</li>
                    <li><strong>Google Analytics 4 (G-X65CMQRY04)</strong> - Métricas esenciales de uso (_ga, _ga_[ID], _gid)</li>
                    <li><strong>Google Tag Manager (GTM-W9MKFZCB)</strong> - Gestión de carga (_gtm, _gtag)</li>
                  </ul>
                  <p className="text-sm text-gray-400 mt-2">Duración: Sesión a 2 años (según cookie)</p>
                </div>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">3. Google Analytics 4</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Utilizamos Google Analytics 4 (ID: G-X65CMQRY04) para analizar el uso de nuestro sitio web. 
                  Esta herramienta nos proporciona información valiosa sobre:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Número de visitantes y páginas vistas</li>
                  <li>Tiempo de permanencia en el sitio</li>
                  <li>Fuentes de tráfico (búsquedas, redes sociales, etc.)</li>
                  <li>Dispositivos y navegadores utilizados</li>
                  <li>Ubicación geográfica general</li>
                  <li>Eventos de interacción (clics, formularios, etc.)</li>
                </ul>
                <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg mt-4">
                  <p className="text-blue-300">
                    <strong>Importante:</strong> Google Analytics 4 está configurado para respetar la privacidad y 
                    no recopila datos personales identificables. Los datos se almacenan de forma anónima.
                  </p>
                </div>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">4. Google Tag Manager</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Google Tag Manager (GTM) es una herramienta que nos permite gestionar diferentes scripts de seguimiento 
                  de forma centralizada. GTM nos ayuda a:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Implementar Google Analytics de forma eficiente</li>
                  <li>Gestionar eventos de conversión</li>
                  <li>Configurar remarketing y publicidad</li>
                  <li>Optimizar la carga de scripts</li>
                </ul>
                <p>
                  GTM no recopila datos directamente, sino que actúa como intermediario para otros servicios de Google.
                </p>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">5. Gestión de Cookies</h2>
              <div className="space-y-4 text-gray-300">
                <p>Puedes gestionar las cookies de las siguientes maneras:</p>
                
                <div className="space-y-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-white mb-2">🎛️ Panel de Control de Cookies</h3>
                    <p>Utiliza nuestro banner de cookies para:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li>Aceptar todas las cookies</li>
                      <li>Rechazar cookies no esenciales</li>
                      <li>Personalizar tus preferencias</li>
                      <li>Cambiar tu decisión en cualquier momento</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h3 className="text-lg font-medium text-white mb-2">🌐 Configuración del Navegador</h3>
                    <p>También puedes configurar las cookies directamente en tu navegador:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                      <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                      <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                      <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                      <li><strong>Edge:</strong> Configuración → Cookies y permisos de sitio</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">6. Cookies de Terceros</h2>
              <div className="space-y-4 text-gray-300">
                <p>Nuestro sitio web puede contener cookies de terceros:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> Para análisis de tráfico web</li>
                  <li><strong>Google Tag Manager:</strong> Para gestión de scripts</li>
                  <li><strong>Redes sociales:</strong> Si compartes contenido</li>
                </ul>
                <p>
                  Estas cookies están sujetas a las políticas de privacidad de sus respectivos proveedores.
                </p>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">7. Actualizaciones de esta Política</h2>
              <p className="text-gray-300 leading-relaxed">
                Podemos actualizar esta política de cookies ocasionalmente para reflejar cambios en nuestras 
                prácticas o por otros motivos operativos, legales o reglamentarios. Te recomendamos revisar 
                esta página periódicamente para estar informado de cualquier cambio.
              </p>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">8. Contacto</h2>
              <div className="space-y-4 text-gray-300">
                <p>Si tienes preguntas sobre nuestra política de cookies:</p>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p><strong>Email:</strong> <a href="mailto:info@drafter.es" className="text-purple-400 hover:text-purple-300 underline">info@drafter.es</a></p>
                  <p><strong>Teléfono:</strong> (+34) 663 83 87 59</p>
                  <p><strong>Dirección:</strong> Gran Vía 68, 5D, Madrid, España</p>
                </div>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">9. Enlaces Útiles</h2>
              <div className="space-y-4 text-gray-300">
                <p>Para más información sobre cookies:</p>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                      Agencia Española de Protección de Datos (AEPD)
                    </a>
                  </li>
                  <li>
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                      Política de Privacidad de Google
                    </a>
                  </li>
                  <li>
                    <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                      Google Analytics y Privacidad
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cookies;
