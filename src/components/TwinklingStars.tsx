import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function TwinklingStars() {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsRef.current) return;

    const stars = starsRef.current.children;
    
    Array.from(stars).forEach((star, index) => {
      const duration = 1 + Math.random() * 2;
      const delay = Math.random() * 3;
      
      gsap.set(star, {
        opacity: 0,
        scale: 0.5 + Math.random() * 1
      });

      gsap.to(star, {
        opacity: 0.8,
        scale: 1,
        duration: duration / 2,
        delay,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        repeatDelay: Math.random() * 2
      });
    });
  }, []);

  return (
    <div ref={starsRef} className="absolute inset-0 pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 6px rgba(255,255,255,0.8)'
          }}
        />
      ))}
    </div>
  );
} 