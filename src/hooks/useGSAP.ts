import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';

// Registrar plugins
gsap.registerPlugin(ScrollTrigger, Flip);

// Efectos personalizados reutilizables
gsap.registerEffect({
  name: "fadeInUp",
  effect: (targets: any, config: any) => {
    return gsap.fromTo(targets, 
      { 
        y: 100, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: config.duration || 1,
        ease: "power2.out",
        stagger: config.stagger || 0.1
      }
    );
  },
  defaults: { duration: 1, stagger: 0.1 },
  extendTimeline: true
});

gsap.registerEffect({
  name: "scaleReveal",
  effect: (targets: any, config: any) => {
    return gsap.fromTo(targets,
      {
        scale: 0,
        rotation: 45,
        opacity: 0
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: config.duration || 0.8,
        ease: "back.out(1.7)",
        stagger: config.stagger || 0.2
      }
    );
  },
  defaults: { duration: 0.8, stagger: 0.2 },
  extendTimeline: true
});

export const useGSAP = () => {
  const createFlipAnimation = (trigger: string, targets: string) => {
    const state = Flip.getState(targets);
    
    ScrollTrigger.create({
      trigger: trigger,
      start: "top center",
      onEnter: () => {
        Flip.from(state, {
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.1,
          absolute: true
        });
      }
    });
  };

  return {
    createFlipAnimation,
  };
};
