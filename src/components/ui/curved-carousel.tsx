"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface CurvedCarouselProps {
  images: string[];
}

const CarouselItem = ({ src, index, containerRef }: { src: string; index: number; containerRef: React.RefObject<HTMLDivElement | null> }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);

  // We'll track the scroll position of the parent container
  const { scrollX } = useScroll({ container: containerRef });
  
  // Smooth the scroll
  const smoothScrollX = useSpring(scrollX, { damping: 20, stiffness: 100, mass: 0.2 });

  const [layout, setLayout] = useState({ left: 0, width: 0, containerWidth: 0 });

  useEffect(() => {
    const updateLayout = () => {
      if (itemRef.current && containerRef.current) {
        setLayout({
          left: itemRef.current.offsetLeft,
          width: itemRef.current.offsetWidth,
          containerWidth: containerRef.current.offsetWidth,
        });
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [containerRef]);

  // Calculate the item's position relative to the center of the container
  // Center is 0, left edge is -1, right edge is 1
  const xOffset = useTransform(smoothScrollX, (latestScrollX) => {
    if (!layout.containerWidth) return 0;
    const centerOfContainer = latestScrollX + layout.containerWidth / 2;
    const centerOfItem = layout.left + layout.width / 2;
    const distanceFromCenter = centerOfItem - centerOfContainer;
    
    // Normalize to roughly -1 to 1 based on half container width
    return distanceFromCenter / (layout.containerWidth / 2);
  });

  // Calculate rotation (concave: left items rotate right, right items rotate left)
  const rotateY = useTransform(xOffset, [-1, 0, 1], [35, 0, -35]);
  
  // Calculate Z translation (closer to camera at edges, further in center)
  const translateZ = useTransform(xOffset, [-1, 0, 1], [150, 0, 150]);
  
  // Calculate scale (slightly larger at edges)
  const scale = useTransform(xOffset, [-1, 0, 1], [1.1, 1, 1.1]);
  
  // Opacity slightly dims at edges
  const opacity = useTransform(xOffset, [-1.5, -1, 0, 1, 1.5], [0, 0.6, 1, 0.6, 0]);

  return (
    <motion.div
      ref={itemRef}
      className="flex-shrink-0 relative overflow-hidden rounded-xl shadow-2xl"
      style={{
        width: "clamp(250px, 35vw, 400px)",
        aspectRatio: "3/4",
        perspective: "1000px",
        transformStyle: "preserve-3d",
        rotateY,
        translateZ,
        scale,
        opacity,
        margin: "0 2vw"
      }}
    >
      <img
        src={src}
        alt={`Tech Flat ${index + 1}`}
        className="w-full h-full object-cover"
        style={{ transform: "translateZ(0)" }} // Force hardware acceleration
      />
    </motion.div>
  );
};

export function CurvedCarousel({ images }: CurvedCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create an array that loops the images multiple times for endless feel
  // Using 3 sets of images
  const extendedImages = [...images, ...images, ...images];

  useEffect(() => {
    // Start at the middle set
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      const clientWidth = containerRef.current.clientWidth;
      containerRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  return (
    <div className="w-full relative h-[600px] flex items-center overflow-hidden" style={{ perspective: "1500px" }}>
      {/* 
        Container acts as the 3D scene and scroll area.
      */}
      <div 
        ref={containerRef}
        className="w-full h-full flex items-center overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory px-[30vw]"
        style={{ 
          transformStyle: "preserve-3d",
          WebkitOverflowScrolling: "touch"
        }}
      >
        <div className="flex items-center w-max pb-10 pt-10" style={{ transformStyle: "preserve-3d" }}>
          {extendedImages.map((src, i) => (
            <div key={i} className="snap-center" style={{ transformStyle: "preserve-3d" }}>
              <CarouselItem src={src} index={i} containerRef={containerRef} />
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
