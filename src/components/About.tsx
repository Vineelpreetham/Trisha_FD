"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getCldImageUrl } from "@/lib/cloudinary";
import MobileNav from "@/components/MobileNav";

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
    <main className="w-full relative min-h-screen text-[#1A1A1A] overflow-hidden" style={{ background: "linear-gradient(to bottom, #FFFFFF 0%, #F5ECEC 30%, #E8C4C4 65%, #C98484 100%)" }}>
      
      {/* Top Navbar */}
      <nav className="w-full pt-10 pb-4 px-6 md:px-16 lg:px-24 flex justify-between items-center z-30 relative">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="font-sans text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity text-[#1A1A1A] flex items-center">
            ← Back
          </Link>
          <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1777072569/trisha_vanam_brand_identity_cemr1y.png" alt="Trisha Vanam" style={{ height: "clamp(3.5rem, 6vw, 5rem)", width: "auto", objectFit: "contain", mixBlendMode: "multiply" }} className="hidden md:block" />
        </div>
        <div className="hidden md:flex gap-16 font-sans text-xs tracking-[0.25em] uppercase font-medium text-[#555] translate-y-1">
          <Link href="/" className="transition-transform duration-300 ease-out hover:scale-110 active:scale-95 inline-block hover:text-black">Home</Link>
          <Link href="/collections" className="transition-transform duration-300 ease-out hover:scale-110 active:scale-95 inline-block hover:text-black">Design Diary</Link>
          <Link href="/contact" className="transition-transform duration-300 ease-out hover:scale-110 active:scale-95 inline-block hover:text-black">Contact</Link>
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </nav>

      <section ref={containerRef} id="about" className="relative w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-12 md:py-20 gap-16">
        
        {/* Left Side: The Designer's Story Text */}
        <div ref={textRef} className="w-full md:w-[55%] flex flex-col items-start text-left z-30">
          <h1 className="text-[3.8rem] md:text-[4.8rem] lg:text-[5.5rem] font-serif font-medium leading-[1.05] tracking-wide text-[#111] mb-12">
            The<br/>
            <span className="italic font-light text-[#7C3034] pr-4">Designer&apos;s</span><br/>
            Story.
          </h1>
          
          <p className="text-[#333] font-serif text-[18px] md:text-[20px] leading-[1.8] font-light max-w-[620px] selection:bg-[#7C3034] selection:text-white">
            Fashion, for me, has always been a language — and that foundation lives in every piece I design. Born and raised in the culturally rich landscape of India, my design perspective is shaped by a lifelong immersion in tradition, craftsmanship, and artful living. My work spans luxury couture, bridal, and contemporary casual wear — each piece a meeting point between heritage and the modern silhouette.
            <br/><br/>
            I design for the feeling. Clothing that makes people feel beautiful, confident, and entirely themselves. Every piece is drawn from a deep well of inspiration, translated into designs that are expressive, artful, and built to be timeless. One-of-a-kind, always.
          </p>

          <Link href="/collections" className="group flex items-center gap-6 mt-16 cursor-pointer overflow-hidden pb-4">
            <div className="w-12 h-[1px] bg-[#7C3034] group-hover:w-20 transition-all duration-500 ease-out"></div>
            <span className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-sans font-medium text-[#7C3034] group-hover:tracking-[0.3em] transition-all duration-500 ease-out">Discover the work</span>
          </Link>
        </div>

        {/* Right Side: Portrait Image inside bounding box */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-end relative z-20">
          <div className="w-[90vw] md:w-[420px] lg:w-[480px] relative shadow-2xl overflow-hidden rounded-[2px]" style={{ aspectRatio: "4/5" }}>
            <img 
              ref={imageRef}
              src="https://res.cloudinary.com/dbeh0eisn/image/upload/t_cropped/IMG_6764.JPG_pc0cvw.jpg" 
              alt="Portrait" 
              className="w-full h-full object-cover object-center transition-transform duration-[2s] ease-out hover:scale-105"
            />
            {/* Minimalist dot indicator seen in the screenshot */}
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-black/10 bg-white/20 backdrop-blur-md flex items-center justify-center pointer-events-none">
               <div className="w-1.5 h-1.5 rounded-full bg-[#7C3034]"></div>
            </div>
          </div>
        </div>
        
      </section>

    </main>
  );
}
