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
    <main className="w-full relative" style={{ background: "linear-gradient(to bottom, #FFFFFF 0%, #C41E3A 55%, #8B0000 100%)" }}>
      <section ref={containerRef} id="about" className="relative w-full min-h-screen z-10 flex flex-col items-center pt-24 pb-32 overflow-hidden">
        
        {/* Absolute Top Left Logo */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 z-30">
          <Link href="/" className="font-serif text-xl tracking-widest text-[#1A1A1A] uppercase font-medium">
            TRISHA VANAM.
          </Link>
        </div>

        {/* Absolute Left Vertical Nav (Desktop only) */}
        <div className="hidden md:flex absolute left-4 md:left-[1rem] top-1/2 -translate-y-1/2 origin-center -rotate-90 gap-16 z-30">
          <span className="text-[#1A1A1A] text-[10px] tracking-widest font-sans font-medium">Shop</span>
          <span className="text-[#1A1A1A] text-[10px] tracking-widest font-sans font-medium">Collections</span>
          <span className="text-[#1A1A1A] text-[10px] tracking-widest font-sans font-medium">About</span>
        </div>

        {/* Absolute Bottom Left Language text */}
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-30">
          <span className="text-[#F2EBE5] text-[11px] tracking-wider font-sans font-medium">Language</span>
        </div>

        {/* Central Layout Wrapper */}
        <div className="relative w-full max-w-[800px] flex flex-col items-center mt-16 md:mt-24 px-6 md:px-0">
          
          {/* Central Portrait */}
          <div className="w-full md:w-[450px] lg:w-[500px] h-[55vh] md:h-[65vh] relative z-20 shadow-2xl">
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=1974&auto=format&fit=crop" 
              alt="Dear Friends Portrait" 
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Top Right Overlapping Text ("Dear Friends,") */}
          <div 
            ref={textRef}
            className="absolute top-[-5%] md:top-[-2%] right-[5%] md:right-[-10%] lg:right-[-15%] z-30 flex flex-col items-end text-[#1A1A1A] drop-shadow-sm"
          >
            <p className="text-[10px] md:text-xs font-bold font-sans tracking-wide mb-2 md:mb-4">
              To the Eshop
            </p>
            <h1 className="text-6xl md:text-[7rem] lg:text-[8rem] font-serif leading-[0.95] tracking-tight text-right drop-shadow-none">
              Dear<br/>Friends,
            </h1>
          </div>

          {/* Bottom Left Paragraph (aligned to left of the image) */}
          <div className="w-full md:w-[450px] lg:w-[500px] mt-6 z-20 flex justify-start">
            <p className="text-[#F2EBE5] font-sans text-xs md:text-sm font-light leading-relaxed max-w-[280px]">
              Our brand was founded and has<br/>grown in Milan. In our small way, we<br/>would like to support our beautiful<br/>hometown overcome this<br/>emergency. From now until the end<br/>of April, 20% of proceeds from full-<br/>price sales will be donated to the<br/>"Policlinico di Milano".
            </p>
          </div>
          
        </div>
      </section>

      {/* VIEW PROJECTS - About Page Only */}
      <section className="relative w-full h-[55vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 mix-blend-screen opacity-80">
          <SmokeBackground smokeColor="#F0BABA" backColor="#C41830" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_#C41830_90%)] pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center gap-6 text-center px-6">
          <p className="text-white/60 font-mono text-xs uppercase tracking-[0.4em]">Explore the work</p>
          <h2 className="text-5xl md:text-7xl font-serif font-black text-white leading-none tracking-tight">View Projects</h2>
        </div>
      </section>
    </main>
  );
}
