import 'react';

declare module 'react' {
  interface ImgHTMLAttributes<T> {
    /**
     * HTML fetch priority hint. Lowercase is required so React lo envía como atributo
     * y evita el warning de "prop desconocida".
     */
    fetchpriority?: 'high' | 'low' | 'auto';
  }
}


