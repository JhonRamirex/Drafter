import React from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { X } from 'lucide-react';

interface ImageModalProps {
  src: string;
  alt: string;
  category: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  src,
  alt,
  category,
  isOpen,
  onClose
}) => {
  if (!isOpen || !src) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] p-0 bg-black/95 border-none">
        <div className="relative w-full h-full">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white p-2 transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="flex items-center justify-center w-full h-full p-4">
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain"
              style={{ maxHeight: 'calc(90vh - 2rem)' }}
            />
          </div>
          
          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 text-sm">
            {category.toUpperCase()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
