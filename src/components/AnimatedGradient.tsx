import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AnimatedGradient() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gradientRef.current) return;

    const colors = [
      'radial-gradient(circle at 20% 50%, rgba(105, 0, 199, 0.3) 0%, transparent 50%)',
      'radial-gradient(circle at 80% 20%, rgba(225, 223, 210, 0.3) 0%, transparent 50%)',
      'radial-gradient(circle at 40% 80%, rgba(234, 124, 159, 0.3) 0%, transparent 50%)',
      'radial-gradient(circle at 60% 40%, rgba(238, 140, 104, 0.3) 0%, transparent 50%)'
    ];

    let currentIndex = 0;

    const animateGradient = () => {
      gsap.to(gradientRef.current, {
        background: colors[currentIndex],
        duration: 8,
        ease: "power2.inOut",
        onComplete: () => {
          currentIndex = (currentIndex + 1) % colors.length;
          animateGradient();
        }
      });
    };

    animateGradient();
  }, []);

  return (
    <div 
      ref={gradientRef}
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(circle at 20% 50%, rgba(105, 0, 199, 0.3) 0%, transparent 50%)'
      }}
    />
  );
} 