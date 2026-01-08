import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group cursor-pointer overflow-hidden rounded-xl aspect-square"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deep-blue-dark/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-primary-foreground/70 hover:text-primary-foreground p-2"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-4 text-primary-foreground/70 hover:text-primary-foreground p-2"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 text-primary-foreground/70 hover:text-primary-foreground p-2"
            >
              <ChevronRight size={40} />
            </button>

            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
