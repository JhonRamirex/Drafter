import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './CosmicSection.css';
import AnimatedGradient from './AnimatedGradient';

import TwinklingStars from './TwinklingStars';

gsap.registerPlugin(ScrollTrigger);

const CosmicSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const cubeRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Configuración de la escena
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Crear el cubo con shader personalizado
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;
        void main() {
          vec2 uv = vUv;
          float color = 0.0;
          color += sin(uv.x * 10.0 + time) * 0.5 + 0.5;
          color += sin(uv.y * 10.0 + time * 1.5) * 0.5 + 0.5;
          gl_FragColor = vec4(color * 0.5, color * 0.8, color, 0.5);
        }
      `,
      transparent: true
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cubeRef.current = cube;

    // Crear sistema de partículas
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
      transparent: true,
      opacity: 0.5
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Animación
    const animate = () => {
      requestAnimationFrame(animate);

      if (cubeRef.current) {
        cubeRef.current.rotation.x += 0.001;
        cubeRef.current.rotation.y += 0.002;
        material.uniforms.time.value += 0.01;
      }

      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0005;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Configurar ScrollTrigger para las animaciones de texto
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
      const title = section.querySelector('.title');
      const description = section.querySelector('.description');

      // Asegurar que los elementos sean visibles por defecto
      if (title) {
        gsap.set(title, { opacity: 1, y: 0 });
      }
      if (description) {
        gsap.set(description, { opacity: 1, y: 0 });
      }

      // Animación más simple y confiable
      gsap.fromTo(
        title,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(
        description,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Manejar redimensionamiento
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Limpieza
    return () => {
      window.removeEventListener('resize', handleResize);
      scene.remove(cube);
      scene.remove(particles);
      geometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    // Fallback para asegurar que los textos sean visibles
    const timeout = setTimeout(() => {
      const titles = document.querySelectorAll('.title');
      const descriptions = document.querySelectorAll('.description');
      
      titles.forEach(title => {
        if (title instanceof HTMLElement) {
          title.style.opacity = '1';
          title.style.transform = 'translateY(0)';
        }
      });
      
      descriptions.forEach(desc => {
        if (desc instanceof HTMLElement) {
          desc.style.opacity = '1';
          desc.style.transform = 'translateY(0)';
        }
      });
    }, 2000); // 2 segundos de fallback

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="cosmic-section" ref={containerRef}>
      
        <section className="relative py-20">
             
            </section>

            <canvas ref={canvasRef} className="cosmic-canvas" />
            <div className="content">
              
              
              <section className="section">
                <div className="section-inner">
                  <h2 className="title font-sofia-black">Precisión de otro planeta</h2>
                  <p className="description font-sofia-regular">
                    Capturamos luz, forma y emoción con técnica impecable. Cada imagen es un fragmento suspendido en el tiempo, listo para comunicar con fuerza y belleza.
                  </p>
                </div>
              </section>
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="hero-title text-center text-5xl md:text-6xl lg:text-6xl uppercase tracking-tight font-black mb-6 bg-gradient-to-r from-white via-purple-600 to-orange-600  bg-clip-text text-transparent transition-all duration-300 group-hover:bg-none group-hover:text-white cursor-pointer">
                  Nuestros Servicios
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Fotografía de moda */}
                  <Link to="/moda" className="bg-black/50  border border-white/10 rounded-2xl p-6 hover:border-purple-400/40 transition-all duration-300 group cursor-pointer">
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-800/20 mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                      <img 
                        src="/Moda/PORTADA 6.webp" 
                        alt="Fotografía de Moda" 
                        className="w-full h-full object-cover "
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Fotografía de Moda</h3>
                    <p className="text-gray-400 text-sm">Capturamos la esencia y personalidad única de cada persona</p>
                  </Link>

                  {/* Fotografía Arquitectónica */}
                  <Link to="/espacial" className="bg-black/50  border border-white/10 rounded-2xl p-6 hover:border-pink-400/40 transition-all duration-300 group cursor-pointer">
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-gray-600/20 to-pink-800/20 mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                      <img 
                        src="/arquitectura/portada.webp" 
                        alt="Fotografía Espacial" 
                        className="w-full h-full object-cover "
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Fotografía Espacial</h3>
                    <p className="text-gray-400 text-sm">Inmortalizamos la belleza de espacios y estructuras arquitectónicas</p>
                  </Link>

                  {/* Fotografía Gastronómica */}
                  <Link to="/gastro" className="bg-black/50  border border-white/10 rounded-2xl p-6 hover:border-red-400/40 transition-all duration-300 group cursor-pointer">
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-red-600/20 to-red-800/20 mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                      <img 
                        src="/gastronomia/12.webp" 
                        alt="Fotografía Gastronómica" 
                        className="w-full h-full object-cover "
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">Fotografía Gastronomica</h3>
                    <p className="text-gray-400 text-sm">Despertamos los sentidos a través de la fotografía culinaria</p>
                  </Link>

                  {/* Fotografía Urbana */}
                  <Link to="/social" className="bg-black/50  border border-white/10 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300 group cursor-pointer">
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-800/20 mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                      <img 
                        src="/social/Enbabia_abril_2025-14.webp" 
                        alt="Fotografía Social" 
                        className="w-full h-full object-cover "
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">fotografía Social</h3>
                    <p className="text-gray-400 text-sm">Documentamos la vida urbana y la cultura callejera de Madrid y el mundo</p>
                  </Link>
                </div>
              </div>
              <section className="section section-right">
                <div className="section-inner">
                <TwinklingStars/>
                  <h2 className="title font-sofia-black">Imágenes que trascienden</h2>
                  <p className="description font-sofia-regular">
                    Fotografía y video profesional para marcas que quieren destacar. Creamos piezas visuales con impacto emocional, como si fueran mensajes enviados desde otra dimensión.
                  </p>
                </div>
              </section>

              <section className="section">
                <div className="section-inner">
                  <TwinklingStars/>
                  <h2 className="title font-sofia-black">Luz que revela mundos</h2>
                  <p className="description font-sofia-regular">
                    Iluminamos con intención: flashes y leds que actúan como pequeñas supernovas, revelando el alma de cada escena con claridad y potencia.
                  </p>
                </div>
              </section>

              <section className="section">
                <div className="section-inner">
                <TwinklingStars/>
                  <h2 className="title font-sofia-black">Composición con órbita propia</h2>
                  <p className="description font-sofia-regular">
                    Desde retratos hasta espacios comerciales, diseñamos imágenes con estilo y narrativa. Cada pixel vibra con la identidad de tu marca y un toque de elegancia interestelar.
                  </p>
                </div>
              </section>
            </div>
          </div>
        );
      };

      export default CosmicSection; 