import { useState } from 'react';
import StarsBackground from '../components/StarsBackground';
import Navigation from '../components/Navigation';

import { Camera, Video, Users, Building, Utensils } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Paquetes = () => {
  const [selectedCategory, setSelectedCategory] = useState('moda');

  // Definir color principal para cada categoría
  const categories = [
    { id: 'moda', name: 'Moda', icon: Users, color: '#6900C7' },
    { id: 'espacial', name: 'Espacial', icon: Building, color: '#878787' },
    { id: 'gastro', name: 'Gastro', icon: Utensils, color: '#FB739F' },
    { id: 'social', name: 'Social', icon: Users, color: '#f66b30' }
  ];

  // Obtener el color principal de la categoría seleccionada
  const mainColor = categories.find(c => c.id === selectedCategory)?.color || '#B721FF';

  const packagesByCategory = {
    moda: [
      { name: "Paquete Integral 15", photos: 15, reel: "1 Reel (20 segundos)", price: "540€", description: "Ideal para proyectos más pequeños o presupuestos ajustados", popular: false },
      { name: "Paquete Integral 30", photos: 30, reel: "1 Reel (20 segundos)", price: "660€", description: "Obtén el doble de fotos por solo 120€ más y maximiza tu inversión", popular: true },
      { name: "Paquete Integral 50", photos: 50, reel: "1 Reel (20 segundos)", price: "876€", description: "Mayor cantidad de contenido a un costo por foto más bajo", popular: false },
      { name: "Paquete Integral 3 meses", photos: "30 Fotos al mes", reel: "1 Reel (20 segundos) al mes", price: "1.620€", description: "Ahorra al contratar este paquete combinado a mediano plazo", popular: false }
    ],
    espacial: [
      { name: "Paquete Integral 15", photos: 15, reel: "1 Reel (20 segundos)", price: "360€", description: "Ideal para proyectos más pequeños o presupuestos ajustados", popular: false },
      { name: "Paquete Integral 30", photos: 30, reel: "1 Reel (20 segundos)", price: "440€", description: "Obtén el doble de fotos por solo 80€ más y maximiza tu inversión", popular: true },
      { name: "Paquete Integral 50", photos: 50, reel: "1 Reel (20 segundos)", price: "584€", description: "Mayor cantidad de contenido a un costo por foto más bajo", popular: false },
      { name: "Paquete Integral 3 meses", photos: "30 Fotos al mes", reel: "1 Reel (20 segundos) al mes", price: "1.080€", description: "Ahorra al contratar este paquete combinado a mediano plazo", popular: false }
    ],
    gastro: [
      { name: "Paquete Integral 15", photos: 15, reel: "1 Reel (20 segundos)", price: "450€", description: "Ideal para proyectos más pequeños o presupuestos ajustados", popular: false },
      { name: "Paquete Integral 30", photos: 30, reel: "1 Reel (20 segundos)", price: "550€", description: "Obtén el doble de fotos por solo 100€ más y maximiza tu inversión", popular: true },
      { name: "Paquete Integral 50", photos: 50, reel: "1 Reel (20 segundos)", price: "730€", description: "Mayor cantidad de contenido a un costo por foto más bajo", popular: false },
      { name: "Paquete Integral 3 meses", photos: "30 Fotos al mes", reel: "1 Reel (20 segundos) al mes", price: "1.385€", description: "Ahorra al contratar este paquete combinado a mediano plazo", popular: false }
    ],
    social: [
      { name: "Paquete Integral 15", photos: 15, reel: "1 Reel (20 segundos)", price: "540€", description: "Ideal para proyectos más pequeños o presupuestos ajustados", popular: false },
      { name: "Paquete Integral 30", photos: 30, reel: "1 Reel (20 segundos)", price: "660€", description: "Obtén el doble de fotos por solo 120€ más y maximiza tu inversión", popular: true },
      { name: "Paquete Integral 50", photos: 50, reel: "1 Reel (20 segundos)", price: "876€", description: "Mayor cantidad de contenido a un costo por foto más bajo", popular: false },
      { name: "Paquete Integral 3 meses", photos: "30 Fotos al mes", reel: "1 Reel (20 segundos) al mes", price: "1.620€", description: "Ahorra al contratar este paquete combinado a mediano plazo", popular: false }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Paquetes de Fotografía y Video | Drafter Studio</title>
        <meta name="description" content="Paquetes de fotografía y video en Madrid para moda, gastro, arquitectura y social. Elige el tuyo." />
        <link rel="canonical" href="https://drafter.es/paquetes" />
        <meta property="og:title" content="Paquetes de Fotografía y Video | Drafter Studio" />
        <meta property="og:description" content="Paquetes de fotografía y video en Madrid para moda, gastro, arquitectura y social." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drafter.es/paquetes" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paquetes de Fotografía y Video | Drafter Studio" />
        <meta name="twitter:description" content="Paquetes de fotografía y video en Madrid para moda, gastro, arquitectura y social." />
      </Helmet>
      <StarsBackground />
      <Navigation />
      <div id="smooth-wrapper" className="overflow-hidden">
        <div id="smooth-content">
          <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
            <span className="text-[16vw] md:text-[10vw] font-extrabold text-white/10 tracking-tight uppercase whitespace-nowrap">
              Paquetes
            </span>
          </div>
          <main className="relative">
            <section className="relative min-h-screen">
              <div className="max-w-7xl mx-auto px-4 pt-[20vh] pb-20">
                <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-5xl  uppercase font-bold text-white mb-6">
                    Paquetes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400  via-pink-400 to-orange-500">Fotografía</span>
                  </h1>
                  <p className="text-xl  text-gray-400 max-w-2xl mx-auto">
                    Elige la categoría y el paquete que mejor se adapte a tus necesidades
                  </p>
                </div>

                {/* Selector de categorías */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                          selectedCategory === category.id
                            ? 'shadow-lg' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                        style={selectedCategory === category.id ? { background: category.color, color: '#fff' } : {}}
                      >
                        <IconComponent size={20} />
                        <span className="font-medium">{category.name}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Paquetes de la categoría seleccionada */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                  {packagesByCategory[selectedCategory as keyof typeof packagesByCategory].map((pkg, index) => (
                    <div
                      key={index}
                      className={`relative backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105`}
                      style={{
                        borderColor: mainColor,
                        boxShadow: pkg.popular ? `0 0 0 4px ${mainColor}33` : undefined
                      }}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span style={{ background: mainColor, color: '#fff' }} className="px-4 py-1 rounded-full text-sm font-medium">
                            Más Popular
                          </span>
                        </div>
                      )}

                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                        <div className="text-3xl font-bold" style={{ color: mainColor }}>{pkg.price}</div>
                        <div className="text-xs uppercase tracking-wide text-gray-400 mt-2">IVA no incluido</div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center text-gray-300">
                          <Camera style={{ color: mainColor }} className="mr-3" size={20} />
                          <span>{pkg.photos} Fotos</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Video style={{ color: mainColor }} className="mr-3" size={20} />
                          <span>{pkg.reel}</span>
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm mb-6 italic">
                        *{pkg.description}
                      </p>

                      {/* Botón de acción personalizado para gastro 15, 30, 50 y 3 meses, espacial 3 meses, 50, 30 y 15, social/moda 3 meses, 50, 30 y 15 */}
                      {selectedCategory === 'gastro' && pkg.name === 'Paquete Integral 15' ? (
                        <a
                          href="https://calendly.com/drafterstudio/retrato-15-clon-6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                          style={{ background: mainColor, color: '#fff' }}
                        >
                          Contratar
                        </a>
                      ) : selectedCategory === 'gastro' && pkg.name === 'Paquete Integral 30' ? (
                        <a
                          href="https://calendly.com/drafterstudio/retrato-15-clon-7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                          style={{ background: mainColor, color: '#fff' }}
                        >
                          Contratar
                        </a>
                      ) : selectedCategory === 'gastro' && pkg.name === 'Paquete Integral 50' ? (
                        <a
                          href="https://calendly.com/drafterstudio/retrato-15-clon-8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                          style={{ background: mainColor, color: '#fff' }}
                        >
                          Contratar
                        </a>
                      ) : selectedCategory === 'gastro' && pkg.name === 'Paquete Integral 3 meses' ? (
                        <a
                          href="https://calendly.com/drafterstudio/arquitectura-3-meses-clon"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                          style={{ background: mainColor, color: '#fff' }}
                        >
                          Contratar
                        </a>
                      ) : selectedCategory === 'espacial' && pkg.name === 'Paquete Integral 3 meses' ? (
                        <a
                          href="https://calendly.com/drafterstudio/retrato-3-meses-clon"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                          style={{ background: mainColor, color: '#fff' }}
                        >
                          Contratar
                        </a>
                      ) : selectedCategory === 'espacial' && pkg.name === 'Paquete Integral 50' ? (
                        <a
                          href="https://calendly.com/drafterstudio/retrato-15-clon-5"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                          style={{ background: mainColor, color: '#fff' }}
                        >
                          Contratar
                        </a>
                      ) : selectedCategory === 'espacial' && pkg.name === 'Paquete Integral 30' ? (
                        <a
                          href="https://calendly.com/drafterstudio/retrato-15-clon-4"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                          style={{ background: mainColor, color: '#fff' }}
                        >
                          Contratar
                        </a>
                      ) : selectedCategory === 'espacial' && pkg.name === 'Paquete Integral 15' ? (
                        <a
                          href="https://calendly.com/drafterstudio/retrato-15-clon-3"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                          style={{ background: mainColor, color: '#fff' }}
                        >
                          Contratar
                        </a>
                      ) : (selectedCategory === 'social' || selectedCategory === 'moda') && pkg.name === 'Paquete Integral 3 meses' ? (
                        <a
                          href="https://calendly.com/drafterstudio/retrato-15-clon-2"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                          style={{ background: mainColor, color: '#fff' }}
                        >
                          Contratar
                        </a>
                      ) : (selectedCategory === 'social' || selectedCategory === 'moda') && pkg.name === 'Paquete Integral 50' ? (
                        <a
                          href="https://calendly.com/drafterstudio/retrato-15-clon-1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                          style={{ background: mainColor, color: '#fff' }}
                        >
                          Contratar
                        </a>
                      ) : (selectedCategory === 'social' || selectedCategory === 'moda') && pkg.name === 'Paquete Integral 30' ? (
                        <a
                          href="https://calendly.com/drafterstudio/retrato-15-clon"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                          style={{ background: mainColor, color: '#fff' }}
                        >
                          Contratar
                        </a>
                      ) : (selectedCategory === 'social' || selectedCategory === 'moda') && pkg.name === 'Paquete Integral 15' ? (
                        <a
                          href="https://calendly.com/drafterstudio/sesion-fotografica"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                          style={{ background: mainColor, color: '#fff' }}
                        >
                          Contratar
                        </a>
                      ) : (
                        <a
                          href="https://calendly.com/drafterstudio/nueva-reunion"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                          style={{ background: mainColor, color: '#fff' }}
                        >
                          Contratar
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {/* Sección de Presupuestos a Medida */}
                <div className="backdrop-blur-sm border rounded-2xl p-8 md:p-12" style={{ borderColor: mainColor }}>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl uppercase md:text-4xl font-bold text-white mb-4">
                      Presupuestos a <span className=" bg-white" style={{ background: mainColor }}>Medida</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                      En DRAFTER STUDIO te ofrecemos servicios combinados de fotografía y video de alta calidad para potenciar la imagen de tu marca y atraer a tu audiencia. Contacta con nosotros y cuéntanos tu proyecto para poder ofrecerte un presupuesto personalizado que se adapte a tus necesidades y presupuesto.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href="https://calendly.com/drafterstudio/retrato-15-clon-9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 font-medium rounded-lg transition-all duration-300 text-lg text-center"
                      style={{ background: mainColor, color: '#fff' }}
                    >
                      Pedir Cita
                    </a>
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

export default Paquetes;
