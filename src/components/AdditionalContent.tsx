
import { useState } from 'react';
import { Camera, Video, Users, Building, Utensils, MapPin, Phone, Mail, Globe, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

import AnimatedGradient from './AnimatedGradient';

const AdditionalContent = () => {
  const [selectedCategory, setSelectedCategory] = useState('moda');

  // Definir color principal para cada categoría (igual que Paquetes)
  const categories = [
    { id: 'moda', name: 'Moda', icon: Users, color: '#6900C7' },
    { id: 'espacial', name: 'Espacial', icon: Building, color: '#878787' },
    { id: 'gastro', name: 'Gastro', icon: Utensils, color: '#FB739F' },
    { id: 'social', name: 'Social', icon: Users, color: '#f66b30' }
  ];

  // Obtener el color principal de la categoría seleccionada
  const mainColor = categories.find(c => c.id === selectedCategory)?.color || '#B721FF';

  const servicesByCategory = {
    moda: [
      { 
        title: "Fotografía de Moda", 
        description: "Capturamos la esencia y personalidad de cada look con técnicas innovadoras y composiciones únicas que destacan la creatividad y el estilo.",
        icon: Camera,
        features: ["Sesiones en estudio", "Fotografía editorial", "Retratos de moda"]
      },
      { 
        title: "Video de Moda", 
        description: "Creamos contenido audiovisual dinámico que cuenta historias a través del movimiento y la estética de la moda.",
        icon: Video,
        features: ["Reels comerciales", "Videos editoriales", "Contenido para redes"]
      }
    ],
    espacial: [
      { 
        title: "Fotografía Arquitectónica", 
        description: "Destacamos la estética y funcionalidad de los espacios con técnicas especializadas que resaltan la arquitectura.",
        icon: Building,
        features: ["Interiores y exteriores", "Perspectivas únicas", "Iluminación natural"]
      },
      { 
        title: "Video Arquitectónico", 
        description: "Recorridos virtuales y videos que muestran la belleza y funcionalidad de los espacios arquitectónicos.",
        icon: Video,
        features: ["Recorridos 360°", "Videos promocionales", "Tours virtuales"]
      }
    ],
    gastro: [
      { 
        title: "Fotografía Gastronómica", 
        description: "Resaltamos la textura, color y sabor de cada plato con composiciones que despiertan los sentidos.",
        icon: Utensils,
        features: ["Fotografía de platos", "Composiciones creativas", "Iluminación especializada"]
      },
      { 
        title: "Video Gastronómico", 
        description: "Contenido audiovisual que captura el proceso culinario y la presentación de los platos.",
        icon: Video,
        features: ["Videos de cocina", "Reels gastronómicos", "Contenido para restaurantes"]
      }
    ],
    social: [
      { 
        title: "Fotografía Social", 
        description: "Capturamos momentos especiales y eventos sociales con un enfoque artístico y emotivo.",
        icon: Camera,
        features: ["Eventos sociales", "Retratos emotivos", "Fotografía documental"]
      },
      { 
        title: "Video Social", 
        description: "Contenido audiovisual que narra historias personales y momentos significativos.",
        icon: Video,
        features: ["Videos de eventos", "Documentales", "Contenido personal"]
      }
    ]
  };

  const contactInfo = [
    { icon: MapPin, text: "Gran Vía 68, 5D, Madrid, España", color: mainColor, href: "https://share.google/0nAx3zQvocoZoEy4W" },
    { icon: Phone, text: "(+34) 663 83 87 59", color: mainColor, href: "tel:+34663838759" },
    { icon: Mail, text: "info@drafter.es", color: mainColor, href: "mailto:info@drafter.es" },
    { icon: Instagram, text: "instagram.com/drafter.studio", color: mainColor, href: "https://www.instagram.com/drafterstudio.es/" }
  ];

  return (
    <div className="relative min-h-screen bg-black py-20 overflow-hidden flex flex-col">
      {/* Fondo con texto grande (estilo Paquetes) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[16vw] md:text-[10vw] font-extrabold text-white/10 tracking-tight uppercase whitespace-nowrap">
          Servicios
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex-1">
        {/* Sección de Servicios */}
        <section className="mb-20 pt-[10vh]">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              NUESTROS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-pink-200">SERVICIOS</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Servicios especializados para cada categoría con equipos de última generación
            </p>
          </div>

          {/* Selector de categorías (igual que Paquetes) */}
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

          {/* Servicios de la categoría seleccionada */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {servicesByCategory[selectedCategory as keyof typeof servicesByCategory].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="relative backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 h-full"
                  style={{
                    borderColor: mainColor,
                    boxShadow: `0 0 0 2px ${mainColor}33`
                  }}
                >
                  <div className="text-center mb-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: mainColor }}
                    >
                      <IconComponent size={24} color="#fff" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  </div>

                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <div 
                          className="w-2 h-2 rounded-full mr-3"
                          style={{ background: mainColor }}
                        ></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="@https://calendly.com/drafterstudio/retrato-15-clon-9 "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${mainColor}, ${mainColor}dd)`,
                      color: '#fff'
                    }}
                  >
                    Agendar cita
                  </a>
            </div>
              );
            })}
            </div>
          <AnimatedGradient />
          {/* Sección de Servicios Personalizados (estilo Paquetes) */}
          <div className="backdrop-blur-sm border rounded-2xl p-8 md:p-12" style={{ borderColor: mainColor }}>
          
            <div className="text-center mb-8">
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                SERVICIOS <span style={{ color: mainColor }}>PERSONALIZADOS</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                En DRAFTER STUDIO creamos servicios completamente adaptados a tus necesidades específicas. Cada proyecto es único y merece una atención personalizada.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="@https://calendly.com/drafterstudio/retrato-15-clon-9 "
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-3 px-8 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${mainColor}, ${mainColor}dd)`,
                  color: '#fff'
                }}
              >
                Agendar cita
              </a>
            </div>
          </div>
        </section>

        {/* Sección de Contacto */}
        <section className="text-center pt-[10vh]">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">CONTACTO</span>
          </h2>
          
          <div className="backdrop-blur-sm border rounded-2xl p-8 md:p-12 max-w-2xl mx-auto" style={{ borderColor: mainColor }}>
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index} className="flex items-center justify-right gap-4 text-lg text-gray-300">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: mainColor }}
                    >
                      <IconComponent size={20} color="#fff" />
                    </div>
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('mailto:') ? undefined : "_blank"}
                      rel={contact.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                      className="hover:underline hover:text-purple-400 transition-colors duration-200"
                    >
                      {contact.text}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>


      <footer className="footer font-sofia-regular">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-300">
                Drafter Studio.es © {new Date().getFullYear()}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link 
                to="/privacidad" 
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                Política de Privacidad
              </Link>
              <Link 
                to="/cookies" 
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                Política de Cookies
              </Link>
              <Link 
                to="/aviso-legal" 
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
              >
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
    
  );
};

export default AdditionalContent;
