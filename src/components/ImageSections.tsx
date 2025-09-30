import React from 'react';

interface ImageSectionsProps {
  onImageClick: (image: {src: string, alt: string, category: string}) => void;
  category: string;
  mainColor: string;
}

const ImageSections: React.FC<ImageSectionsProps> = ({
  onImageClick,
  category,
  mainColor
}) => {
  // Este componente parece ser un placeholder o wrapper
  // La funcionalidad real probablemente esté en FashionGallery
  return (
    <div className="image-sections">
      {/* El contenido real se maneja en FashionGallery */}
    </div>
  );
};

export default ImageSections;
