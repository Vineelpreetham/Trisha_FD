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

    // Removed subtle parallax for image as it caused layout breaking during scroll

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
    <main className="w-full relative bg-[#2E040A]" style={{ background: "linear-gradient(to bottom, #FFFFFF 0%, #FFE4E8 25%, #DE6B7A 50%, #B32435 75%, #590B13 90%, #2E040A 100%)" }}>
      <section ref={containerRef} id="about" className="relative w-full min-h-screen z-10 flex flex-col items-center pt-24 pb-32 overflow-hidden">
        
        {/* Absolute Top Left Logo */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 z-30">
          <Link href="/" className="font-serif text-xl tracking-widest text-[#1A1A1A] uppercase font-medium">
            TRISHA VANAM.
          </Link>
        </div>

        {/* Top Right Horizontal Nav */}
        <div className="hidden md:flex absolute top-8 right-8 md:top-12 md:right-12 gap-10 lg:gap-16 z-30">
          <Link href="/" className="text-[#1A1A1A] text-[10px] md:text-[11px] tracking-[0.25em] font-sans font-medium hover:opacity-50 transition-opacity uppercase">Home</Link>
          <Link href="/collections" className="text-[#1A1A1A] text-[10px] md:text-[11px] tracking-[0.25em] font-sans font-medium hover:opacity-50 transition-opacity uppercase">Design Diary</Link>
          <Link href="/contact" className="text-[#1A1A1A] text-[10px] md:text-[11px] tracking-[0.25em] font-sans font-medium hover:opacity-50 transition-opacity uppercase">Contact</Link>
        </div>

        {/* Flex Row Layout Wrapper (Text Left, Image Right) */}
        <div className="relative w-full max-w-[1250px] flex flex-col md:flex-row items-start justify-center gap-12 md:gap-16 mt-24 md:mt-32 px-8 lg:px-0 mx-auto">
          
          {/* Left Side: Meet the designer Text */}
          <div ref={textRef} className="w-full md:w-1/2 flex flex-col items-start text-left z-30 pt-0 md:pt-4">
            <h1 className="text-3xl md:text-[2.8rem] lg:text-[3.2rem] font-sans font-medium leading-[1] tracking-tight text-[#1A1A1A] mb-4 whitespace-nowrap">
              Meet the designer
            </h1>
            <p 
              className="text-[#1A1A1A] font-sans text-[11px] md:text-[12px] lg:text-[13px] font-medium leading-[1.8] tracking-[0.01em] w-full max-w-[620px] selection:bg-[#DE6B7A] selection:text-white"
            >
              I’m a fashion designer, and my expertise is in the domain of luxury couture, bridal, and contemporary casual wear. Having been born and brought up in the culturally rich country of India, my life has been a blend of rich cultural experiences, traditions, and artful craftsmanship, which influences my design perspective. 
              <br/><br/>
              My passion is to design clothing that makes people feel beautiful, confident, and empowered. I enjoy creating one-of-a-kind, artful pieces that reflect the essence of individuality, elegance, and beauty. My design inspirations are nature’s poetry, where florals, oversized motifs, and narratives of print art inspire my designs. My clothing is a blend of such natural inspirations, which is then combined with contemporary silhouettes, creating artful, expressive, and timeless pieces.
            </p>
          </div>

          {/* Right Side: Portrait Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative z-20">
            <div className="w-[85vw] md:w-[480px] lg:w-[560px] relative shadow-[0_20px_40px_rgba(46,4,10,0.1)] overflow-hidden rounded-[5px]" style={{ aspectRatio: "4/5" }}>
              <img 
                ref={imageRef}
                src="https://res.cloudinary.com/dbeh0eisn/image/upload/t_cropped/IMG_6764.JPG_pc0cvw.jpg" 
                alt="Portrait" 
                className="w-full h-full object-cover object-center"
              />
            </div>
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
          <SmokeBackground smokeColor="#F28482" backColor="#2E040A" />
        </div>
        
        {/* Soft vignette to blend edges inward into the darkness */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_#2E040A_100%)] pointer-events-none" />
        
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
