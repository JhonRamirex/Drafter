import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface Image {
  filename: string;
  category: string;
  description: string;
}

interface ImageSectionProps {
  images: Image[];
}

const ImageSection = ({ images }: ImageSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const imageElements = imagesRef.current.filter((ref): ref is HTMLDivElement => ref !== null);

    // Configuración inicial de posiciones
    imageElements.forEach((img, index) => {
      const row = Math.floor(index / 2);
      const col = index % 2;
      const columnOffset = col === 0 ? -20 : 20; // Ajuste entre columnas
      const baseX = col * 400 + columnOffset; // Ajuste de posición base
      const baseY = row * 300; // Ajuste de posición base
      const rotation = (Math.random() - 0.5) * 10; // Rotación aleatoria entre -5 y 5 grados
      const scale = 0.8 + (Math.random() * 0.4); // Escala aleatoria entre 0.8 y 1.2

      gsap.set(img, {
        x: baseX,
        y: baseY,
        rotation: rotation,
        scale: scale,
        opacity: 0
      });

      // Animación de entrada
      gsap.to(img, {
        opacity: 1,
        duration: 1,
        delay: index * 0.2,
        ease: "power2.out"
      });
    });

    // Efecto parallax al mover el mouse
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      imageElements.forEach((img, index) => {
        const row = Math.floor(index / 2);
        const col = index % 2;
        const columnOffset = col === 0 ? -20 : 20;
        const baseX = col * 400 + columnOffset;
        const baseY = row * 300;
        const parallaxX = x * 30;
        const parallaxY = y * 30;

        gsap.to(img, {
          x: baseX + parallaxX,
          y: baseY + parallaxY,
          duration: 1,
          ease: "power2.out"
        });
      });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="images-container relative w-full h-[150vh]">
      {images.map((img, index) => (
        <div
          key={index}
          ref={el => { if (el) imagesRef.current[index] = el; }}
          className="image-wrapper absolute overflow-hidden rounded-lg shadow-lg"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            width: 'clamp(200px, 20vw, 300px)', // Tamaño adaptable
            height: 'clamp(200px, 20vw, 300px)',
            zIndex: hoveredIndex === index ? 10 : 1 // Elevar en hover
          }}
        >
          <img
            src={`/${img.filename}`}
            alt={img.description}
            className="w-full h-full object-cover"
          />
          {hoveredIndex === index && (
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white p-4 opacity-0 animate-fadeIn">
              <p className="text-sm font-semibold mb-1">{img.category}</p>
              <p className="text-xs text-center">{img.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSection; 