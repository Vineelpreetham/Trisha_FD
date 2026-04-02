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
    <main className="w-full relative bg-[#1A0404]" style={{ background: "linear-gradient(to bottom, #FFFFFF 0%, #C41E3A 35%, #5A0000 65%, #1A0404 100%)" }}>
      <section ref={containerRef} id="about" className="relative w-full min-h-screen z-10 flex flex-col items-center pt-24 pb-32 overflow-hidden">
        
        {/* Absolute Top Left Logo */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 z-30">
          <Link href="/" className="font-serif text-xl tracking-widest text-[#1A1A1A] uppercase font-medium">
            TRISHA VANAM.
          </Link>
        </div>

        {/* Absolute Left Vertical Nav (Desktop only) */}
        <div className="hidden md:flex absolute left-4 md:left-[1rem] top-1/2 -translate-y-1/2 origin-center -rotate-90 gap-16 z-30">
          <Link href="/" className="text-[#1A1A1A] text-[10px] tracking-widest font-sans font-medium hover:opacity-50 transition-opacity uppercase">Home</Link>
          <Link href="/collections" className="text-[#1A1A1A] text-[10px] tracking-widest font-sans font-medium hover:opacity-50 transition-opacity uppercase">Collections</Link>
          <Link href="/contact" className="text-[#1A1A1A] text-[10px] tracking-widest font-sans font-medium hover:opacity-50 transition-opacity uppercase">Contact</Link>
        </div>

        {/* Absolute Bottom Left block removed as requested */}

        {/* Central Layout Wrapper */}
        <div className="relative w-full max-w-[800px] flex flex-col items-center mt-16 md:mt-24 px-6 md:px-0">
          
          {/* Central Portrait */}
          <div className="w-full md:w-[450px] lg:w-[500px] h-[55vh] md:h-[65vh] relative z-20 shadow-2xl">
            <img 
              ref={imageRef}
              src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1775119601/IMG_7061_rrz8db.jpg" 
              alt="Portrait" 
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

      {/* SEAMLESS TRANSITION - View Projects Footer Section */}
      <section className="relative w-full min-h-[65vh] flex items-center justify-center">
        {/* Mask the top of the smoke canvas completely so it fades infinitely into the background gradient above */}
        <div 
          className="absolute inset-0 opacity-90" 
          style={{ 
            maskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 25%, black 100%)"
          }}
        >
          <SmokeBackground smokeColor="#F28482" backColor="#1A0404" />
        </div>
        
        {/* Soft vignette to blend edges inward into the darkness */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_#1A0404_100%)] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center gap-10 text-center px-6">
          <p className="text-[#FFB5A7] font-sans text-xs md:text-sm uppercase tracking-[0.5em] opacity-80">Explore the work</p>
          <Link href="/collections" className="group relative block cursor-pointer">
            <h2 className="text-6xl md:text-[7rem] lg:text-[9rem] font-serif font-black text-white leading-none tracking-tighter drop-shadow-2xl transition-transform duration-1000 ease-out group-hover:scale-[1.03]">
              View Projects
            </h2>
            <div className="absolute -bottom-4 md:-bottom-8 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#FFB5A7] transition-all duration-700 ease-out group-hover:w-[45%] opacity-80"></div>
          </Link>
        </div>
      </section>
    </main>
  );
}
