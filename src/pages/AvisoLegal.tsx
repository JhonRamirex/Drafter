import React from 'react';
import { Helmet } from 'react-helmet-async';
import StarsBackground from '../components/StarsBackground';
import Navigation from '../components/Navigation';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AvisoLegal = () => {
  return (
    <>
      <Helmet>
        <title>Aviso Legal - Drafter Studio</title>
        <meta name="description" content="Aviso legal de Drafter Studio. Información legal sobre la empresa y condiciones de uso del sitio web." />
        <link rel="canonical" href="https://drafter.es/aviso-legal" />
        <meta property="og:title" content="Aviso Legal - Drafter Studio" />
        <meta property="og:description" content="Aviso legal de Drafter Studio. Información legal sobre la empresa y condiciones de uso del sitio web." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drafter.es/aviso-legal" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aviso Legal - Drafter Studio" />
        <meta name="twitter:description" content="Aviso legal de Drafter Studio. Información legal sobre la empresa y condiciones de uso del sitio web." />
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
                Aviso Legal
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Última actualización: {new Date().toLocaleDateString('es-ES')}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">1. Datos Identificativos</h2>
              <div className="space-y-4 text-gray-300">
                <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa de los siguientes datos:</p>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p><strong>Denominación social:</strong> Drafter Studio</p>
                  <p><strong>Domicilio:</strong> Gran Vía 68, 5D, Madrid, España</p>
                  <p><strong>Teléfono:</strong> (+34) 663 83 87 59</p>
                  <p><strong>Email:</strong> <a href="mailto:info@drafter.es" className="text-purple-400 hover:text-purple-300 underline">info@drafter.es</a></p>
                  <p><strong>Sitio web:</strong> <a href="https://drafter.es" className="text-purple-400 hover:text-purple-300 underline">drafter.es</a></p>
                  <p><strong>Actividad:</strong> Servicios de fotografía profesional y producción audiovisual</p>
                </div>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">2. Objeto y Condiciones de Uso</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  El presente aviso legal regula el uso del sitio web drafter.es (en adelante, el "Sitio Web") 
                  que Drafter Studio pone a disposición de los usuarios.
                </p>
                <p>
                  El acceso y uso del Sitio Web atribuye la condición de usuario del mismo (en adelante, el "Usuario") 
                  e implica la aceptación de todas las condiciones incluidas en este Aviso Legal.
                </p>
                <div className="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-lg">
                  <p className="text-yellow-300">
                    <strong>Importante:</strong> Si no estás de acuerdo con estas condiciones, 
                    no debes utilizar el Sitio Web.
                  </p>
                </div>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">3. Servicios Ofrecidos</h2>
              <div className="space-y-4 text-gray-300">
                <p>Drafter Studio ofrece los siguientes servicios:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fotografía profesional de moda</li>
                  <li>Fotografía gastronómica</li>
                  <li>Fotografía arquitectónica</li>
                  <li>Fotografía social y eventos</li>
                  <li>Producción audiovisual</li>
                  <li>Servicios de postproducción</li>
                  <li>Consultoría en imagen y branding</li>
                </ul>
                <p>
                  La información sobre estos servicios se encuentra disponible en el Sitio Web y puede ser 
                  modificada sin previo aviso.
                </p>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">4. Propiedad Intelectual e Industrial</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Todos los contenidos del Sitio Web, incluyendo textos, fotografías, gráficos, imágenes, 
                  iconos, tecnología, software, links y demás contenidos audiovisuales o sonoros, así como 
                  su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a 
                  Drafter Studio.
                </p>
                <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
                  <p className="text-red-300">
                    <strong>Prohibido:</strong> Queda expresamente prohibida la reproducción, distribución, 
                    comunicación pública, transformación o cualquier otra forma de explotación de los 
                    contenidos sin autorización expresa de Drafter Studio.
                  </p>
                </div>
                <p>
                  Las marcas, nombres comerciales o signos distintivos son titularidad de Drafter Studio 
                  o de terceros, sin que pueda entenderse que el acceso al Sitio Web atribuya derecho 
                  alguno sobre los mismos.
                </p>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">5. Responsabilidad del Usuario</h2>
              <div className="space-y-4 text-gray-300">
                <p>El Usuario se compromete a:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Hacer un uso adecuado y lícito del Sitio Web</li>
                  <li>No utilizar el Sitio Web para fines ilícitos o prohibidos</li>
                  <li>No introducir virus, programas maliciosos o cualquier elemento que pueda dañar el sistema</li>
                  <li>No realizar actividades que puedan dañar, inutilizar, sobrecargar o deteriorar el Sitio Web</li>
                  <li>No intentar acceder a áreas restringidas del Sitio Web</li>
                  <li>Respetar los derechos de propiedad intelectual e industrial</li>
                </ul>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">6. Exclusión de Garantías y Responsabilidad</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Drafter Studio no se hace responsable de los daños y perjuicios de toda naturaleza que 
                  puedan deberse a:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>La falta de disponibilidad, continuidad o calidad del funcionamiento del Sitio Web</li>
                  <li>La falta de utilidad del Sitio Web para los fines del Usuario</li>
                  <li>La existencia de virus, programas maliciosos o elementos dañinos</li>
                  <li>El uso ilícito, negligente, fraudulento o contrario a este Aviso Legal</li>
                  <li>La falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de los servicios</li>
                  <li>Los daños que puedan causar terceros mediante intromisiones ilegítimas fuera del control de Drafter Studio</li>
                </ul>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">7. Enlaces Externos</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  El Sitio Web puede contener enlaces a otros sitios web. Drafter Studio no ejerce ningún 
                  control sobre dichos sitios y contenidos, por lo que no se hace responsable de los 
                  contenidos de dichos enlaces ni de las medidas de protección de datos que puedan adoptar.
                </p>
                <p>
                  La inclusión de cualquier enlace no implica la aprobación por parte de Drafter Studio 
                  del sitio web enlazado.
                </p>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">8. Protección de Datos</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  El tratamiento de datos personales se rige por nuestra 
                  <Link to="/privacidad" className="text-purple-400 hover:text-purple-300 underline ml-1">
                    Política de Privacidad
                  </Link>
                  , que forma parte integrante de este Aviso Legal.
                </p>
                <p>
                  Drafter Studio cumple con la normativa vigente en materia de protección de datos personales, 
                  especialmente el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de 
                  Protección de Datos Personales y garantía de los derechos digitales.
                </p>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">9. Modificaciones</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Drafter Studio se reserva el derecho de realizar modificaciones en el Sitio Web sin previo aviso, 
                  con el fin de mantener su información actualizada, añadir, modificar, corregir o eliminar 
                  contenidos publicados o la configuración del Sitio Web.
                </p>
                <p>
                  Asimismo, Drafter Studio se reserva el derecho de modificar este Aviso Legal cuando sea necesario 
                  para adaptarlo a cambios legislativos, jurisprudenciales o en las prácticas comerciales.
                </p>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">10. Legislación Aplicable y Jurisdicción</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Este Aviso Legal se rige por la legislación española. Para la resolución de cualquier 
                  controversia o conflicto, las partes se someten a los Juzgados y Tribunales de Madrid, 
                  renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
                </p>
                <p>
                  En caso de que alguna disposición del presente Aviso Legal sea declarada nula o ineficaz, 
                  el resto de las disposiciones mantendrán su validez y eficacia.
                </p>
              </div>
            </section>

            <section className="backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">11. Contacto</h2>
              <div className="space-y-4 text-gray-300">
                <p>Para cualquier consulta sobre este Aviso Legal:</p>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p><strong>Email:</strong> <a href="mailto:info@drafter.es" className="text-purple-400 hover:text-purple-300 underline">info@drafter.es</a></p>
                  <p><strong>Teléfono:</strong> (+34) 663 83 87 59</p>
                  <p><strong>Dirección:</strong> Gran Vía 68, 5D, Madrid, España</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvisoLegal;
