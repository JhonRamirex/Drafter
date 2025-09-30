import React from 'react';
import { Helmet } from 'react-helmet-async';
import StarsBackground from '../components/StarsBackground';
import Navigation from '../components/Navigation';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacidad = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad - Drafter Studio</title>
        <meta name="description" content="Política de privacidad de Drafter Studio. Información sobre el tratamiento de datos personales y cumplimiento del RGPD." />
        <link rel="canonical" href="https://drafter.es/privacidad" />
        <meta property="og:title" content="Política de Privacidad - Drafter Studio" />
        <meta property="og:description" content="Política de privacidad de Drafter Studio. Información sobre el tratamiento de datos personales y cumplimiento del RGPD." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drafter.es/privacidad" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Política de Privacidad - Drafter Studio" />
        <meta name="twitter:description" content="Política de privacidad de Drafter Studio. Información sobre el tratamiento de datos personales y cumplimiento del RGPD." />
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
                Política de Privacidad
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Última actualización: {new Date().toLocaleDateString('es-ES')}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">1. Información del Responsable</h2>
              <p className="text-gray-300 leading-relaxed">
                Drafter Studio, con domicilio en Madrid, España, es el responsable del tratamiento de los datos personales 
                que nos proporciones a través de nuestro sitio web drafter.es.
              </p>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">2. Datos que Recopilamos</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Datos de navegación:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Dirección IP</li>
                    <li>Tipo de navegador y dispositivo</li>
                    <li>Páginas visitadas y tiempo de permanencia</li>
                    <li>Referencia de la página web de origen</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Datos de contacto:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nombre y apellidos</li>
                    <li>Dirección de correo electrónico</li>
                    <li>Número de teléfono</li>
                    <li>Información proporcionada en formularios de contacto</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">3. Finalidad del Tratamiento</h2>
              <div className="space-y-4 text-gray-300">
                <p>Utilizamos tus datos personales para:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Responder a tus consultas y solicitudes de información</li>
                  <li>Proporcionar nuestros servicios de fotografía profesional</li>
                  <li>Mejorar la experiencia de usuario en nuestro sitio web</li>
                  <li>Analizar el tráfico web mediante Google Analytics 4</li>
                  <li>Enviar comunicaciones comerciales (solo con tu consentimiento)</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">4. Google Analytics 4 y Google Tag Manager</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Utilizamos Google Analytics 4 (ID: G-X65CMQRY04) y Google Tag Manager (ID: GTM-W9MKFZCB) 
                  para analizar el uso de nuestro sitio web. Estas herramientas nos ayudan a entender cómo 
                  los visitantes interactúan con nuestro contenido.
                </p>
                <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg mt-4">
                  <p className="text-green-300 text-sm">
                    <strong>✅ Cumplimiento Google:</strong> Implementamos Consent Mode v2 y respetamos 
                    estrictamente las preferencias de privacidad del usuario. Los datos solo se recopilan 
                    con consentimiento explícito.
                  </p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-white mb-2">Información recopilada:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Páginas visitadas y tiempo de permanencia</li>
                    <li>Fuentes de tráfico</li>
                    <li>Dispositivos y navegadores utilizados</li>
                    <li>Ubicación geográfica general (país/región)</li>
                    <li>Eventos de interacción (clics, formularios, etc.)</li>
                  </ul>
                </div>
                <p>
                  Los datos se almacenan en servidores de Google y están sujetos a su 
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                    Política de Privacidad
                  </a>.
                </p>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">5. Base Legal</h2>
              <div className="space-y-4 text-gray-300">
                <p>El tratamiento de tus datos se basa en:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Consentimiento:</strong> Para cookies analíticas y comunicaciones comerciales</li>
                  <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y sitio web</li>
                  <li><strong>Ejecución contractual:</strong> Para proporcionar los servicios solicitados</li>
                  <li><strong>Obligación legal:</strong> Para cumplir con normativas aplicables</li>
                </ul>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">6. Tus Derechos</h2>
              <div className="space-y-4 text-gray-300">
                <p>Según el RGPD, tienes derecho a:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre ti</li>
                  <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
                  <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos</li>
                  <li><strong>Limitación:</strong> Restringir el tratamiento</li>
                  <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
                  <li><strong>Oposición:</strong> Oponerte al tratamiento</li>
                  <li><strong>Retirar consentimiento:</strong> En cualquier momento</li>
                </ul>
                <p className="mt-4">
                  Para ejercer estos derechos, contacta con nosotros en: 
                  <a href="mailto:info@drafter.es" className="text-purple-400 hover:text-purple-300 underline ml-1">
                    info@drafter.es
                  </a>
                </p>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">7. Conservación de Datos</h2>
              <div className="space-y-4 text-gray-300">
                <p>Conservamos tus datos durante:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Datos de contacto:</strong> Hasta que solicites su eliminación</li>
                  <li><strong>Datos analíticos:</strong> Máximo 26 meses (Google Analytics)</li>
                  <li><strong>Datos contractuales:</strong> Según obligaciones legales (mínimo 6 años)</li>
                </ul>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">8. Seguridad</h2>
              <p className="text-gray-300 leading-relaxed">
                Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales 
                contra el acceso no autorizado, alteración, divulgación o destrucción. Utilizamos conexiones 
                seguras (HTTPS) y mantenemos nuestros sistemas actualizados.
              </p>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">9. Contacto</h2>
              <div className="space-y-4 text-gray-300">
                <p>Para cualquier consulta sobre esta política de privacidad:</p>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p><strong>Email:</strong> <a href="mailto:info@drafter.es" className="text-purple-400 hover:text-purple-300 underline">info@drafter.es</a></p>
                  <p><strong>Teléfono:</strong> (+34) 663 83 87 59</p>
                  <p><strong>Dirección:</strong> Gran Vía 68, 5D, Madrid, España</p>
                </div>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">10. Autoridad de Control</h2>
              <p className="text-gray-300 leading-relaxed">
                Tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) 
                si consideras que el tratamiento de tus datos personales no se ajusta a la normativa vigente.
                <br />
                <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline">
                  www.aepd.es
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacidad;
