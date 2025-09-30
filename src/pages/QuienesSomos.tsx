import { useEffect } from 'react';
import StarsBackground from '../components/StarsBackground';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import ImageSections from '../components/ImageSections';

const QuienesSomos = () => {
  // const { initScrollSmoother } = useGSAP();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     initScrollSmoother();
  //   }, 100);

  //   return () => clearTimeout(timer);
  // }, [initScrollSmoother]);

  return (
    <>
      <Helmet>
        <title>Quiénes Somos | Drafter Studio</title>
        <meta name="description" content="Drafter Studio en Madrid: creatividad, técnica y dirección visual. Conoce nuestra historia y filosofía." />
        <link rel="canonical" href="https://drafter.es/quienes-somos" />
        <meta property="og:title" content="Quiénes Somos | Drafter Studio" />
        <meta property="og:description" content="Drafter Studio en Madrid: creatividad, técnica y dirección visual." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drafter.es/quienes-somos" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quiénes Somos | Drafter Studio" />
        <meta name="twitter:description" content="Drafter Studio en Madrid: creatividad, técnica y dirección visual." />
      </Helmet>
      <StarsBackground />
      <Navigation />
      <div id="smooth-wrapper" className="overflow-hidden">
        <div id="smooth-content">
          <main className="relative">
            <div className="fixed-title">
              
              
              
            </div>
            
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center">
              <div className="max-w-6xl mx-auto px-4 pt-20">
                <div className="text-center mb-16">
                
                  <div className="mb-8">
                    <img 
                      src="/SVG/SVG/Drafter__5.svg" 
                      alt="Drafter Studio Logo" 
                      className="h-24 mx-auto mb-6 filter brightness-0 invert"
                    />
                  </div>
                  
                  <h1 className="hero-title text-5xl md:text-7xl lg:text-6xl uppercase tracking-tight font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-500 bg-clip-text text-transparent transition-all duration-300 group-hover:bg-none group-hover:text-white cursor-pointer">
                  
                  Quiénes Somos
                  </h1>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    El puente entre la imaginación y la realidad. Transformamos ideas en imágenes que inspiran y cuentan historias únicas.
                  </p>
                </div>
              </div>
            </section>

            {/* Servicios */}
            

            {/* Historia Section */}
            <section className="relative py-20">
              <div className="max-w-6xl mx-auto px-4">
                <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
                  <h2 className="hero-title text-center text-4xl md:text-4xl lg:text-4xl uppercase tracking-tight font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-500 bg-clip-text text-transparent transition-all duration-300 group-hover:bg-none group-hover:text-white cursor-pointer">
                    Nuestra Historia
                  </h2>
                  
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed text-gray-300">
                        En <span className="text-white font-semibold">DRAFTER STUDIO</span>, con sede en el corazón de Madrid, somos el puente entre la imaginación y la realidad. Nuestro equipo apasionado y dedicado transforma ideas en imágenes que inspiran y cuentan historias únicas.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-300">
                        Nacidos en Madrid, una ciudad que fusiona historia y modernidad, nos inspiramos en su energía vibrante para crear producciones audiovisuales de alta calidad. La riqueza cultural y artística de nuestra ciudad se refleja en cada proyecto que emprendemos, aportando un toque único y auténtico.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-300">
                        Combinamos creatividad artística con visión estratégica para abordar proyectos de cualquier magnitud, siempre comprometidos con la excelencia. Nuestra experiencia en fotografía y emprendimiento nos permite ofrecer soluciones integrales que superan las expectativas de nuestros clientes.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-white/10 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">Madrid</h3>
                          <p className="text-gray-400">Corazón de nuestra creatividad</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 p-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/20">
                    <p className="text-lg leading-relaxed text-gray-300 text-center">
                      El nombre <span className="text-white font-bold">«Drafter»</span> refleja nuestra esencia: materializar ideas y convertir conceptos en realidades tangibles. Somos artesanos de la imagen, dedicados a dar vida a las visiones de nuestros clientes sin límites ni restricciones.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Misión, Visión y Valores */}
            <section className="relative py-20">
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl uppercase font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Nuestra Filosofía
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Misión */}
                  <div className="bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center hover:border-purple-400/40 transition-all duration-300">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-purple-400">Misión</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Transformar ideas en imágenes que inspiran y cuentan historias únicas, siendo el puente entre la imaginación y la realidad a través de producciones audiovisuales de alta calidad.
                    </p>
                  </div>

                  {/* Visión */}
                  <div className="bg-black/50 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-8 text-center hover:border-pink-400/40 transition-all duration-300">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-pink-400">Visión</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Ser reconocidos como el estudio audiovisual más innovador de Madrid, referente en creatividad y excelencia, convirtiendo sueños en experiencias visuales que perduran.
                    </p>
                  </div>

                  {/* Valores */}
                  <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 text-center hover:border-red-400/40 transition-all duration-300">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-red-400">Valores</h3>
                    <div className="text-gray-300 leading-relaxed space-y-2">
                      <p>• <span className="text-white">Creatividad</span> sin límites</p>
                      <p>• <span className="text-white">Excelencia</span> en cada proyecto</p>
                      <p>• <span className="text-white">Pasión</span> por la imagen</p>
                      <p>• <span className="text-white">Autenticidad</span> madrileña</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            

            {/* Compromiso y Redes Sociales */}
            <section className="relative py-20">
              <div className="max-w-4xl mx-auto px-4">
                <div className="bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-red-900/30 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center">
                  <h2 className="text-3xl uppercase font-bold mb-6 text-white">
                    Listos para cualquier desafío
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    En DRAFTER STUDIO, estamos listos para aceptar cualquier desafío. Creemos que la imaginación no tiene fronteras y, desde Madrid, trabajamos para convertir tus sueños en experiencias visuales que perduran.
                  </p>
                  
                  {/* Redes Sociales */}
                  <div className="flex justify-center space-x-6 mb-8">
                    <a href="https://www.instagram.com/drafterstudio.es/" target="_blank" rel="noopener noreferrer" 
                       className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    
                    <a href="https://facebook.com/drafterstudio" target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    
                    <a href="https://www.linkedin.com/company/drafter-studio/about/?" target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    
                    
                    
                  </div>
                  
                  <div className="pt-8 border-t border-white/10">
                    <p className="text-gray-400">
                      <span className="text-white font-semibold">DRAFTER STUDIO</span> • Madrid, España • 
                      <a href="mailto:info@drafterstudio.com" className="text-purple-400 hover:text-purple-300 ml-1">
                        info@drafterstudio.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default QuienesSomos;
