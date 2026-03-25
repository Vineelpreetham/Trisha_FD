"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Regilia() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.opacity = "1";
      containerRef.current.style.transform = "translateY(0)";
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-screen px-4 md:px-12 py-24 flex flex-col items-center justify-center opacity-0 translate-y-8 transition-all duration-1000 ease-out z-10 relative"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Typography */}
        <div className="flex flex-col space-y-8 order-2 md:order-1 relative z-20">
          <h1 className="text-5xl md:text-8xl font-serif tracking-tighter uppercase leading-[0.9]">
            The <br/> Regilia <br/> Collection
          </h1>
          
          <div className="w-16 h-[1px] bg-white/50" />
          
          <p className="text-lg md:text-xl font-light tracking-wide leading-relaxed text-white/80 max-w-md">
            A testament to modern opulence. Inspired by the sharp silhouettes 
            of the 1980s, reimagined for the contemporary avant-garde. Every 
            stitch speaks of rebellion; every cut, a declaration of intent.
          </p>
          
          <button className="w-fit mt-8 border-b border-white pb-1 tracking-widest text-sm uppercase hover:text-white/70 hover:border-white/70 transition-colors">
            Explore the line
          </button>
        </div>

        {/* Right Column: Image Area */}
        <div className="relative aspect-[3/4] w-full overflow-hidden order-1 md:order-2 group">
          <div className="absolute inset-0 bg-[#1a1a1a] z-0 flex items-center justify-center">
            <span className="text-sm tracking-widest text-white/30 uppercase">Editorial Image</span>
          </div>
          {/* Note: Insert actual image here later */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="fixed top-1/2 left-0 -translate-y-1/2 w-16 md:w-32 h-[1px] bg-white/20 -z-10" />
      <div className="fixed top-1/2 right-0 -translate-y-1/2 w-16 md:w-32 h-[1px] bg-white/20 -z-10" />
    </div>
  );
}
