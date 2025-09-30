import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const palabras = [
  { texto: "moda", color: "#6900C7" },      // Rosa/rosa para moda
  { texto: "social", color: "#ee8c68" },    // Rosa para social
  { texto: "gastro", color: "#ea7c9f" },     // Naranja para gastro
  { texto: "espacial", color: "#e1dfd2" },  // Turquesa para espacial
  { texto: "es", color: "#fff" }
];

export default function TextMorphing() {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  const currentRef = useRef<HTMLSpanElement>(null);
  const nextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Pone el texto siguiente en el segundo span
      const next = nextRef.current;
      if (next) {
        next.innerText = palabras[nextIndex].texto;
        next.style.color = palabras[nextIndex].color;
      }

      // Animación de morphing
      if (next) {
        gsap.fromTo(
          next,
          { opacity: 0, scale: 0.8, skewY: 10, x: 30 },
          {
            opacity: 1,
            scale: 1,
            skewY: 0,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
          }
        );
      }
      
      if (currentRef.current) {
        gsap.to(currentRef.current, {
          opacity: 0,
          scale: 0.8,
          skewY: -10,
          x: -30,
          duration: 0.1,
          ease: "power2.in",
                      onComplete: () => {
              if (currentRef.current) {
                currentRef.current.innerText = palabras[nextIndex].texto;
                currentRef.current.style.color = palabras[nextIndex].color;
                gsap.set(currentRef.current, { opacity: 1, scale: 1, x: 0, skewY: 0 });
              }
              setIndex(nextIndex);
              setNextIndex((nextIndex + 1) % palabras.length);
            },
        });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [nextIndex]);

  return (
    <h1 className="text-5xl md:text-4xl font-bold flex gap-2 relative">
      <span>Drafter.</span>
      <span className="relative w-40 h-10 inline-block overflow-hidden">
        <span 
          ref={currentRef} 
          className="absolute top-0 left-0"
          style={{ color: palabras[index].color }}
        >
          {palabras[index].texto}
        </span>
        <span ref={nextRef} className="absolute top-0 left-0"></span>
      </span>
    </h1>
  );
} 