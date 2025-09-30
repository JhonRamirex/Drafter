import React, { useState } from 'react';
import { Camera, Video } from 'lucide-react';

interface Package {
  name: string;
  photos: string | number;
  reel: string;
  price: string;
  description: string;
  popular: boolean;
}

interface PackagesSectionProps {
  category: 'moda' | 'espacial' | 'gastro' | 'social';
  mainColor: string;
}

const PackagesSection: React.FC<PackagesSectionProps> = ({ category, mainColor }) => {
  const packagesByCategory: Record<string, Package[]> = {
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

  const packages = packagesByCategory[category] || [];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Paquetes de <span style={{ color: mainColor }}>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Elige el paquete que mejor se adapte a tus necesidades y presupuesto
          </p>
        </div>

        {/* Grid de paquetes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 h-full`}
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
                <div className="text-3xl font-bold mb-4" style={{ color: mainColor }}>{pkg.price}</div>
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

              {/* Botones de acción con enlaces específicos */}
              {category === 'gastro' && pkg.name === 'Paquete Integral 15' ? (
                <a
                  href="https://calendly.com/drafterstudio/retrato-15-clon-6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                  style={{ background: mainColor, color: '#fff' }}
                >
                  Contratar
                </a>
              ) : category === 'gastro' && pkg.name === 'Paquete Integral 30' ? (
                <a
                  href="https://calendly.com/drafterstudio/retrato-15-clon-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                  style={{ background: mainColor, color: '#fff' }}
                >
                  Contratar
                </a>
              ) : category === 'gastro' && pkg.name === 'Paquete Integral 50' ? (
                <a
                  href="https://calendly.com/drafterstudio/retrato-15-clon-8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                  style={{ background: mainColor, color: '#fff' }}
                >
                  Contratar
                </a>
              ) : category === 'gastro' && pkg.name === 'Paquete Integral 3 meses' ? (
                <a
                  href="https://calendly.com/drafterstudio/arquitectura-3-meses-clon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                  style={{ background: mainColor, color: '#fff' }}
                >
                  Contratar
                </a>
              ) : category === 'espacial' && pkg.name === 'Paquete Integral 3 meses' ? (
                <a
                  href="https://calendly.com/drafterstudio/arquitectura-3-meses-clon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                  style={{ background: mainColor, color: '#fff' }}
                >
                  Contratar
                </a>
              ) : category === 'espacial' && pkg.name === 'Paquete Integral 50' ? (
                <a
                  href="https://calendly.com/drafterstudio/retrato-15-clon-5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                  style={{ background: mainColor, color: '#fff' }}
                >
                  Contratar
                </a>
              ) : category === 'espacial' && pkg.name === 'Paquete Integral 30' ? (
                <a
                  href="https://calendly.com/drafterstudio/retrato-15-clon-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                  style={{ background: mainColor, color: '#fff' }}
                >
                  Contratar
                </a>
              ) : category === 'espacial' && pkg.name === 'Paquete Integral 15' ? (
                <a
                  href="https://calendly.com/drafterstudio/retrato-15-clon-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                  style={{ background: mainColor, color: '#fff' }}
                >
                  Contratar
                </a>
              ) : category === 'espacial' && pkg.name === 'Paquete Integral 50' ? (
                <a
                  href="https://calendly.com/drafterstudio/retrato-15-clon-5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                  style={{ background: mainColor, color: '#fff' }}
                >
                  Contratar
                </a>
              ) : (category === 'social' || category === 'moda') && pkg.name === 'Paquete Integral 30' ? (
                <a
                  href="https://calendly.com/drafterstudio/retrato-15-clon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                  style={{ background: mainColor, color: '#fff' }}
                >
                  Contratar
                </a>
              ) : (category === 'social' || category === 'moda') && pkg.name === 'Paquete Integral 15' ? (
                <a
                  href="https://calendly.com/drafterstudio/sesion-fotografica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                  style={{ background: mainColor, color: '#fff' }}
                >
                  Contratar
                </a>
              ) : (category === 'social' || category === 'moda') && pkg.name === 'Paquete Integral 50' ? (
                <a
                  href="https://calendly.com/drafterstudio/retrato-15-clon-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                  style={{ background: mainColor, color: '#fff' }}
                >
                  Contratar
                </a>
              ) : (category === 'social' || category === 'moda') && pkg.name === 'Paquete Integral 3 meses' ? (
                <a
                  href="https://calendly.com/drafterstudio/retrato-15-clon-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-3 font-medium rounded-lg transition-all duration-300"
                  style={{ background: mainColor, color: '#fff' }}
                >
                  Contratar
                </a>
              ) : (
                <a
                  href="@https://calendly.com/drafterstudio/retrato-15-clon-9 "
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Presupuestos a <span style={{ color: mainColor }}>Medida</span>
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
  );
};

export default PackagesSection; 