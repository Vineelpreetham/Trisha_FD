"use client";
import React from 'react';

interface ImageAutoSliderProps {
  images?: string[];
}

// Fallback images if none provided
const defaultImages = [
  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2152&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2126&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1965&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524799526615-766a9833dec0?q=80&w=1935&auto=format&fit=crop"
];

export const ImageAutoSlider: React.FC<ImageAutoSliderProps> = ({ images = defaultImages }) => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 40s linear infinite;
        }
        
        .infinite-scroll:hover {
          animation-play-state: paused;
        }

        .scroll-container-mask {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), z-index 0s;
          position: relative;
          z-index: 10;
        }

        .image-item:hover {
          transform: scale(1.15);
          z-index: 50;
        }
      `}</style>
      
      <div className="w-full relative overflow-hidden flex items-center justify-center py-12 md:py-24">
        
        {/* Scrolling images container */}
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="scroll-container-mask w-full max-w-[100vw]">
            <div className="infinite-scroll flex items-center gap-8 md:gap-12 w-max px-8">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 rounded-xl overflow-hidden shadow-2xl bg-black/20"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${(index % images.length) + 1}`}
                    className="h-64 md:h-[400px] lg:h-[500px] w-auto max-w-none object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
