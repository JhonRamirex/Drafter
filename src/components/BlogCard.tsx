import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import type { Blog } from '../data/blogs';

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
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

  return (
    <Link to={`/noticias/${blog.slug}`} className="group">
      <article className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-105">
        {/* Imagen del blog */}
        <div className="relative h-48 overflow-hidden">
            <img 
              src={blog.image} 
              alt={blog.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
                target.alt = 'Imagen no disponible';
              }}
            />
          {/* Overlay con categoría */}
          <div className="absolute top-3 left-3">
            <span className={`${getCategoryColor(blog.category)} text-white text-xs px-2 py-1 rounded-full font-medium`}>
              {blog.category}
            </span>
          </div>
        </div>

        {/* Contenido del blog */}
        <div className="p-6">
          {/* Metadatos */}
          <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{formatDate(blog.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>{blog.readTime} min</span>
      </div>
            <div className="flex items-center gap-1">
              <User size={12} />
              <span>{blog.author}</span>
    </div>
  </div>

          {/* Título */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
            {blog.title}
          </h3>

          {/* Resumen */}
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
            {blog.summary}
          </p>

          {/* Botón leer más */}
          <div className="flex justify-between items-center">
            <span className="text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
              Leer más
            </span>
            {blog.images && blog.images.length > 0 && (
              <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                {blog.images.length} fotos
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
);
};

export default BlogCard;
 