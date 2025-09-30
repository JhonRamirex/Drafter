import { useEffect, useState } from 'react';

const WHATSAPP_NUMBER = '34613399559';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const WhatsappFloatingButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`fixed z-50 bottom-6 right-6 sm:bottom-8 sm:right-8 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}
    >
      <span className="sr-only">Contactar por WhatsApp</span>
      <div className="rounded-full p-0.5 bg-gradient-to-tr from-white via-purple-600 to-orange-600 animate-gradient-move">
        <div className="bg-black rounded-full p-3 flex items-center justify-center">
          {/* SVG WhatsApp */}
          <svg
            width="42"
            height="42"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="wa-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fff" />
                <stop offset="0.5" stopColor="#9333ea" />
                <stop offset="1" stopColor="#f59e42" />
              </linearGradient>
            </defs>
            <circle cx="16" cy="16" r="16" fill="url(#wa-gradient)" />
            <path d="M23.5 19.5c-.3-.2-1.7-.8-2-1s-.5-.1-.7.1c-.2.2-.7 1-.9 1.2-.2.2-.3.2-.6.1-1.6-.6-2.8-2-3.5-3.5-.1-.3 0-.4.1-.6.1-.1.2-.3.3-.5.1-.2.1-.3 0-.5s-.7-1.7-1-2.3c-.2-.5-.4-.4-.7-.4h-.6c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.4 3.8.6.2 1.1.4 1.5.5.6.2 1.1.2 1.5.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4z" fill="#25D366" />
            <path d="M16 6.5c-5.2 0-9.5 4.2-9.5 9.5 0 1.7.5 3.3 1.3 4.7L6.5 25.5l4.9-1.3c1.3.7 2.8 1.1 4.3 1.1 5.2 0 9.5-4.2 9.5-9.5S21.2 6.5 16 6.5zm0 17.3c-1.4 0-2.7-.4-3.9-1.1l-.3-.2-2.9.8.8-2.8-.2-.3c-.8-1.3-1.2-2.7-1.2-4.2 0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z" fill="#fff" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default WhatsappFloatingButton;

/*
Animación opcional para el gradiente:
@keyframes gradient-move {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
.animated-gradient-move {
  background-size: 200% 200%;
  animation: gradient-move 3s linear infinite;
}
*/ 