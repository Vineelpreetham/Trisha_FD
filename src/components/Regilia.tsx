"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Regilia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax effect for the video
    if (containerRef.current && videoRef.current) {
      gsap.to(videoRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Fade out text on scroll
    if (textRef.current) {
      gsap.to(textRef.current, {
        opacity: 0,
        y: -30,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "50% top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-black font-sans">
      {/* Hero Section */}
      <section 
        ref={containerRef} 
        className="relative w-full h-[100svh] flex flex-col items-center justify-end overflow-hidden pb-12 md:pb-16"
      >
        {/* Background Video (from Cloudinary) */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/dbeh0eisn/video/upload/v1774463613/PORTFOLIO_TRISHA_rub7rt.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[120%] object-cover object-center absolute top-[-10%]"
          />
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* TextOverlay */}
        <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 pointer-events-none">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-wide text-white drop-shadow-lg" style={{ fontFamily: "Georgia, serif" }}>
            The Regilia Collection
          </h1>
        </div>
        
        {/* Scroll Indicator - Bottom Positioned */}
        <div className="absolute bottom-8 md:bottom-12 flex flex-col items-center gap-2 z-10">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-white/90 drop-shadow-md">
            Scroll down to view photo
          </span>
          {/* Simple CSS animated line */}
          <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden mt-2">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[scrollLine_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* Content Space (for later addition of gallery) */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-12 py-24 md:py-32 min-h-screen">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
          {/* Information / Description Area */}
          <div className="md:w-1/3 flex flex-col gap-8 md:sticky md:top-32 h-fit">
            <div className="space-y-1">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase">regilia.com</h3>
            </div>
            
            <div className="space-y-1 mt-4">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500">Location</h3>
              <p className="text-sm tracking-wide">New York, NY</p>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500">Contact</h3>
              <a href="mailto:trisha.portfolio@gmail.com" className="text-sm tracking-wide underline decoration-1 underline-offset-4 hover:opacity-60 transition-opacity">
                trisha.portfolio@gmail.com
              </a>
            </div>
          </div>

          {/* Blank space for future images (e.g. Gallery) */}
          <div className="md:w-2/3 grid grid-cols-1 gap-12 md:gap-24">
             <div className="aspect-[4/5] bg-stone-100 w-full flex items-center justify-center hover:bg-stone-200 transition-colors duration-500 cursor-crosshair">
                 <span className="text-xs uppercase tracking-[0.2em] text-stone-400">Image Space 1</span>
             </div>
             <div className="aspect-[3/4] bg-stone-100 w-full md:w-[85%] ml-auto flex items-center justify-center hover:bg-stone-200 transition-colors duration-500 cursor-crosshair">
                 <span className="text-xs uppercase tracking-[0.2em] text-stone-400">Image Space 2</span>
             </div>
          </div>
        </div>
      </section>

      {/* Global CSS for the scroll line animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollLine {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
      `}} />
    </div>
  );
}
