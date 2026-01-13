import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import blogs, { type Blog } from '../data/blogs';
import Navigation from '../components/Navigation';
import StarsBackground from '../components/StarsBackground';
import BlogImageGallery from '../components/BlogImageGallery';

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return (
      <>
        <Navigation />
        <StarsBackground color="#fff" />
        <main className="relative min-h-screen bg-black pt-28 pb-16 px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Blog no encontrado</h1>
            <p className="text-white/80 mb-8">El artículo que buscas no existe o ha sido movido.</p>
            <Link 
              to="/noticias" 
              className="inline-block px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all duration-300"
            >
              Volver al blog
            </Link>
          </div>
        </main>
      </>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      fotografia: 'bg-blue-500',
      moda: 'bg-pink-500',
      eventos: 'bg-purple-500',
      consejos: 'bg-green-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  // Usar el array de imágenes si existe, sino usar la imagen principal
  const images = blog.images || [blog.image];

  return (
    <>
      <Helmet>
        <title>{blog.title} | Drafter Studio</title>
        <meta name="description" content={blog.summary} />
        <link rel="canonical" href={`https://drafter.es/noticias/${blog.slug}`} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://drafter.es/noticias/${blog.slug}`} />
        {blog.image && <meta property="og:image" content={blog.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.summary} />
        {blog.image && <meta name="twitter:image" content={blog.image} />}
        <meta property="article:published_time" content={blog.date} />
        <meta property="article:author" content={blog.author} />
      </Helmet>
      
      <Navigation />
      <StarsBackground color="#fff" />
      
      <main className="relative min-h-screen bg-black pt-28 pb-16 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Botón volver */}
          <div className="mb-8">
            <Link 
              to="/noticias" 
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span>Volver al blog</span>
            </Link>
          </div>
          
          {/* Header del artículo */}
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-8">
            {/* Categoría */}
            <div className="mb-4">
              <span className={`${getCategoryColor(blog.category)} text-white text-xs px-3 py-1 rounded-full font-medium`}>
                {blog.category}
          </span>
            </div>

            {/* Título */}
            <h1 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Subtítulo (opcional) */}
            {blog.subtitle && (
              <h2 className="text-xl md:text-2xl text-white/90 font-semibold mb-4">
                {blog.subtitle}
              </h2>
            )}

            {/* Metadatos */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{formatDate(blog.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{blog.readTime} min de lectura</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{blog.author}</span>
              </div>
            </div>

            {/* Resumen */}
            <p className="text-lg text-gray-300 leading-relaxed">
              {blog.summary}
            </p>
          </div>

          {/* Galería de imágenes */}
          <BlogImageGallery images={images} title={blog.title} />

          {/* Contenido del artículo */}
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <div className="prose prose-invert max-w-none">
              {blog.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
              {blog.externalUrl && (
                (() => {
                  let domain = '';
                  try {
                    domain = new URL(blog.externalUrl as string).hostname.replace(/^www\./, '');
                  } catch {
                    domain = '';
                  }
                  const ctaText = domain.includes('forbes.com')
                    ? 'Lee el artículo completo en:'
                    : domain.includes('tissafontaneda.com')
                      ? 'Visita la tienda oficial de Tissa Fontaneda:'
                      : 'Lee más en:';
                  return (
                    <p className="text-gray-300 leading-relaxed mt-6 text-lg">
                      {ctaText}{' '}
                      <a
                        href={blog.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer external"
                        className="text-purple-300 underline hover:text-purple-200"
                      >
                        {blog.externalUrlLabel || domain || 'enlace externo'}
                      </a>
                      .
                    </p>
                  );
                })()
              )}
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-12 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-orange-900/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              ¿Te gustó este artículo?
            </h2>
            <p className="text-gray-300 mb-6">
              Descubre más contenido sobre fotografía, creatividad y tendencias en nuestro blog.
            </p>
            <Link 
              to="/noticias" 
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Explorar más artículos
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogDetail; 