import { useRef } from 'react';
import { motion } from 'framer-motion';

const FeaturedSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-20 px-4 flex items-center w-full">
      <motion.div 
        className="container mx-auto max-w-6xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contenido de texto */}
          <div className="space-y-6 text-white">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nuestro Enfoque
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              En DrafterStudio, cada proyecto es una oportunidad para crear algo extraordinario. 
              Nuestro enfoque único combina técnica fotográfica con visión artística.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📸</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Fotografía Creativa</h3>
                  <p className="text-gray-400">
                    Transformamos momentos ordinarios en imágenes extraordinarias a través de nuestra visión única.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎨</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Diseño Visual</h3>
                  <p className="text-gray-400">
                    Cada imagen es cuidadosamente compuesta y editada para transmitir la historia perfecta.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Innovación Constante</h3>
                  <p className="text-gray-400">
                    Exploramos nuevas técnicas y perspectivas para mantenernos a la vanguardia de la fotografía.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen destacada */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/4.jpg"
                alt="Fotografía destacada"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { number: "500+", label: "Proyectos Completados" },
            { number: "100+", label: "Clientes Satisfechos" },
            { number: "5+", label: "Años de Experiencia" },
            { number: "20+", label: "Premios Ganados" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedSection; 