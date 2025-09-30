
import { useState } from 'react';
import { Camera, Video, Users, Building, Utensils } from 'lucide-react';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('moda');

  // Definir color principal para cada categoría (igual que Paquetes)
  const categories = [
    { id: 'moda', name: 'Moda', icon: Users, color: '#6900C7' },
    { id: 'espacial', name: 'Espacial', icon: Building, color: '#878787' },
    { id: 'gastro', name: 'Gastro', icon: Utensils, color: '#ee8c68' },
    { id: 'social', name: 'Social', icon: Users, color: '#FB739F' }
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
      },
      { 
        title: "Producción Completa", 
        description: "Servicio integral que incluye dirección artística, maquillaje, estilismo y post-producción profesional.",
        icon: Users,
        features: ["Dirección artística", "Equipo completo", "Post-producción"]
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
      },
      { 
        title: "Documentación Técnica", 
        description: "Fotografía técnica especializada para proyectos arquitectónicos y de construcción.",
        icon: Camera,
        features: ["Documentación de obra", "Fotografía técnica", "Reportajes"]
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
      },
      { 
        title: "Branding Gastronómico", 
        description: "Desarrollo de identidad visual completa para restaurantes y marcas gastronómicas.",
        icon: Users,
        features: ["Identidad visual", "Contenido para redes", "Estrategia de marca"]
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
      },
      { 
        title: "Storytelling Visual", 
        description: "Narración visual que conecta emocionalmente con la audiencia a través de imágenes y video.",
        icon: Users,
        features: ["Narración visual", "Contenido emotivo", "Historias personales"]
      }
    ]
  };

  return (
    <section className="relative min-h-screen py-24">
      {/* Fondo con texto grande (estilo Paquetes) */}
      

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-[20vh] pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Servicios</span>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

                <button
                  className="w-full py-3 font-medium rounded-lg transition-all duration-300"
                  style={{ background: mainColor, color: '#fff' }}
                >
                  Más Información
                </button>
              </div>
            );
          })}
        </div>

        {/* Sección de Servicios Personalizados (estilo Paquetes) */}
        <div className="backdrop-blur-sm border rounded-2xl p-8 md:p-12" style={{ borderColor: mainColor }}>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Servicios <span style={{ color: mainColor }}>Personalizados</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              En DRAFTER STUDIO creamos servicios completamente adaptados a tus necesidades específicas. Cada proyecto es único y merece una atención personalizada. Contacta con nosotros para discutir tu visión y crear un servicio que se ajuste perfectamente a tus objetivos.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="px-8 py-4 font-medium rounded-lg transition-all duration-300 text-lg"
              style={{ background: mainColor, color: '#fff' }}
            >
              Consultar Servicio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
