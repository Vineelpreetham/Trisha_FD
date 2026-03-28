"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getCldImageUrl } from "@/lib/cloudinary";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";

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
    <>
      <section ref={containerRef} id="about" className="relative w-full py-32 md:py-64 bg-[#F8F6F2] z-10 overflow-hidden">
        <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0 items-center">
          
          {/* Editorial Image container */}
          <div className="md:col-span-6 md:col-start-2 relative h-[60vh] md:h-[90vh] overflow-hidden drop-shadow-2xl">
            <img 
              ref={imageRef}
              src={getCldImageUrl("https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=100&w=2400&auto=format&fit=crop", { width: 2400 })} 
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

      {/* --- VIEW PROJECTS SECTION with Smoke Background --- */}
      <section className="relative w-full h-[70vh] overflow-hidden flex items-center justify-center">
        {/* Smoke WebGL canvas as background */}
        <SmokeBackground smokeColor="#FFFFFF" backColor="#BE1020" />

        {/* Content on top */}
        <div className="relative z-10 flex flex-col items-center gap-8 text-center px-6">
          <p className="text-white/60 font-mono text-xs uppercase tracking-[0.4em]">
            Explore the work
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-serif font-black text-white leading-none tracking-tight">
            View Projects
          </h2>
          <Link 
            href="/" 
            className="mt-4 border border-white/40 text-white text-xs uppercase tracking-[0.3em] px-10 py-4 hover:bg-white hover:text-black transition-all duration-500 font-sans"
          >
            See All Collections →
          </Link>
        </div>
      </section>
    </>
  );
}
