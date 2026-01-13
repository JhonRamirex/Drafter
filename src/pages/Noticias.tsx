import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import StarsBackground from '../components/StarsBackground';
import blogs from '../data/blogs';
import BlogCard from '../components/BlogCard';

const Noticias = () => {
  return (
    <>
      <Helmet>
        <title>Blog & Noticias | Drafter Studio</title>
        <meta name="description" content="Explora artículos, tendencias y consejos sobre fotografía, moda, creatividad y producción visual. Inspiración y recursos para potenciar tu imagen y tu marca." />
        <link rel="canonical" href="https://drafter.es/noticias" />
        <meta property="og:title" content="Blog & Noticias | Drafter Studio" />
        <meta property="og:description" content="Explora artículos, tendencias y consejos sobre fotografía, moda, creatividad y producción visual." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drafter.es/noticias" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog & Noticias | Drafter Studio" />
        <meta name="twitter:description" content="Explora artículos, tendencias y consejos sobre fotografía, moda, creatividad y producción visual." />
      </Helmet>
      
      <Navigation />
      <StarsBackground color="#fff" />
      
      <main className="relative min-h-screen bg-black pt-28 pb-16 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-orange-500 bg-clip-text text-transparent mb-6">
              Blog & Noticias
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explora artículos, tendencias y consejos sobre fotografía, moda, creatividad y producción visual. 
              Inspiración y recursos para potenciar tu imagen y tu marca.
            </p>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{blogs.length}</div>
              <div className="text-gray-300 text-sm">Artículos</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">4</div>
              <div className="text-gray-300 text-sm">Categorías</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">{new Date().getFullYear()}</div>
              <div className="text-gray-300 text-sm">Año Actual</div>
            </div>
          </div>

          {/* Grid de blogs */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* Call to action */}
          
        </div>
      </main>
    </>
  );
};

export default Noticias; 
 