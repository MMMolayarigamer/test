import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';

const images = [
  {
    src: "https://1drv.ms/i/c/dcda3a3b5e9bb46d/EXWZYo8aF3hBkbkv17bzyIkBPNtCWPKDeOHOOkUN_zDwCw?e=XH1KWX",
    alt: "Game screenshot 1"
  },
  {
    src: "https://images.pexels.com/photos/7915575/pexels-photo-7915575.jpeg",
    alt: "Game screenshot 2"
  },
  {
    src: "https://images.pexels.com/photos/7915509/pexels-photo-7915509.jpeg",
    alt: "Game screenshot 3"
  },
  {
    src: "https://images.pexels.com/photos/7915565/pexels-photo-7915565.jpeg",
    alt: "Game screenshot 4"
  },
  {
    src: "https://images.pexels.com/photos/7915253/pexels-photo-7915253.jpeg",
    alt: "Game screenshot 5"
  },
  {
    src: "https://images.pexels.com/photos/7915255/pexels-photo-7915255.jpeg",
    alt: "Game screenshot 6"
  }
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="gallery" className="section bg-dark">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="relative inline-block">
            <span className="inline-block text-primary uppercase font-bold text-sm tracking-wider mb-2">نمایش</span>
            <span className="block">گالری رسانه</span>
            <div className="h-1 w-24 bg-primary mt-4 mx-auto"></div>
          </h2>
          <p className="text-light-dark mt-6">
           اینجا همه چیز رو به چشم ببینید!
          </p>
        </div>

        {/* Video Trailer */}
        <div className="mb-12 relative rounded-lg overflow-hidden aspect-video cursor-pointer group">
          <div className="absolute inset-0 bg-dark-darker/60 flex items-center justify-center group-hover:bg-dark-darker/40 transition-all duration-300">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center animate-pulse-slow">
              <Play className="h-10 w-10 text-dark-darker" fill="currentColor" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-dark-darker to-transparent">
              <h3 className="text-xl md:text-2xl mb-2">Official Game Trailer</h3>
              <p className="text-light-dark">Watch the epic cinematic trailer for Active legends</p>
            </div>
          </div>
          <img 
            src="https://images.pexels.com/photos/7915535/pexels-photo-7915535.jpeg" 
            alt="Game trailer thumbnail" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="aspect-video rounded-lg overflow-hidden cursor-pointer relative group"
              onClick={() => openModal(index)}
            >
              <div className="absolute inset-0 bg-dark-darker/20 group-hover:bg-dark-darker/10 transition-all duration-300"></div>
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-dark-darker/95 flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-light hover:text-primary"
              onClick={closeModal}
            >
              <X size={32} />
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-dark-lighter p-2 rounded-full text-light hover:text-primary"
              onClick={prevImage}
            >
              <ChevronLeft size={32} />
            </button>
            
            <div className="max-w-5xl max-h-[80vh]">
              <img 
                src={images[currentIndex].src} 
                alt={images[currentIndex].alt} 
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark-lighter p-2 rounded-full text-light hover:text-primary"
              onClick={nextImage}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;