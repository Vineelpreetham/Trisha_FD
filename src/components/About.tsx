"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getCldImageUrl } from "@/lib/cloudinary";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Subtle parallax for image
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: 100,
      ease: "none",
    });

    // Fade and slide text
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} id="about" className="relative w-full py-32 md:py-64 bg-[#F8F6F2] z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0 items-center">
        
        {/* Editorial Image container */}
        <div className="md:col-span-6 md:col-start-2 relative h-[60vh] md:h-[90vh] overflow-hidden drop-shadow-2xl">
          <img 
            ref={imageRef}
            src={getCldImageUrl("https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1200&auto=format&fit=crop", { width: 1200 })} 
            alt="Editorial Detail" 
            className="w-full h-[120%] -mt-[10%] object-cover scale-105"
          />
        </div>

        {/* Floating Text Block overlapping the image */}
        <div 
          ref={textRef} 
          className="md:col-span-5 md:col-start-7 bg-[#F8F6F2] p-8 md:p-16 md:-ml-20 relative z-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] leading-tight mb-8">
            The Art of <br/> Unseen Details.
          </h2>
          <div className="w-12 h-[1px] bg-[#8C7B75] mb-8" />
          <p className="text-base text-[#1A1A1A]/80 font-sans font-light leading-relaxed mb-6">
            We approach design not as decoration, but as a deliberate interplay between form and void. Every seam, every texture, every moment of whitespace is curated to elevate the subject.
          </p>
          <p className="text-base text-[#1A1A1A]/80 font-sans font-light leading-relaxed mb-12">
            Inspired by the golden age of haute couture editorials, our digital garments merge physical craftsmanship with algorithmic precision.
          </p>

          <button className="group relative flex items-center gap-4 text-xs font-sans uppercase tracking-[0.3em] text-[#1A1A1A] overflow-hidden" data-cursor="hover">
            <span>Read the Story</span>
            <div className="w-8 h-[1px] bg-[#1A1A1A] group-hover:w-16 transition-all duration-500" />
          </button>
        </div>
        
      </div>
    </section>
  );
}
