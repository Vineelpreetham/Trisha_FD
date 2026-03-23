"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial reveal animation - Slow, soft, elegant
    const tl = gsap.timeline();

    tl.fromTo(
      heroImageRef.current,
      { scale: 1.1, opacity: 0, filter: "brightness(0.5)" },
      { scale: 1, opacity: 1, filter: "brightness(1)", duration: 2.5, ease: "power2.out" }
    ).fromTo(
      title1Ref.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
      "-=1.5"
    ).fromTo(
      title2Ref.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 2, ease: "power3.out" },
      "-=1.2"
    );

    // Subtle parallax on scroll
    gsap.to(heroImageRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: 100,
      scale: 1.05,
      ease: "none",
    });

    // Fade in philosophy
    gsap.fromTo(
      philosophyRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        duration: 1.5, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: philosophyRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <main className="w-full relative bg-background text-foreground">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative w-full h-screen overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img 
            ref={heroImageRef}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop" 
            alt="Editorial Cover" 
            className="w-full h-full object-cover origin-center opacity-90"
          />
          {/* Soft overlay gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-20 pb-20 md:pb-32 flex flex-col items-start text-white mix-blend-difference">
          <h1 
            ref={title1Ref}
            className="text-6xl md:text-[8vw] font-serif tracking-tight leading-[0.9] -ml-2"
          >
            L'Éternel
          </h1>
          <h1 
            ref={title2Ref}
            className="text-6xl md:text-[8vw] font-serif tracking-tight leading-[0.9] md:ml-[15vw]"
          >
            Printemps.
          </h1>
          <p className="mt-8 text-sm md:text-base font-sans tracking-[0.2em] font-light max-w-sm uppercase opacity-80">
            A visual anthology of impermanence and soft luxury.
          </p>
        </div>
      </section>

      {/* 2. DESIGN PHILOSOPHY */}
      <section className="relative w-full py-40 px-6 md:px-20 bg-background flex justify-center items-center">
        <div ref={philosophyRef} className="max-w-4xl text-center">
          <p className="text-3xl md:text-6xl font-serif italic text-[#1A1A1A] leading-tight">
            "True luxury is not loud. It is the quiet intersection of perfect tension and absolute release."
          </p>
          <div className="mt-12 flex items-center justify-center gap-4 text-xs font-sans uppercase tracking-[0.3em] text-[#8C7B75]">
             <div className="w-12 h-[1px] bg-[#8C7B75]" />
             <span>The Manifesto</span>
             <div className="w-12 h-[1px] bg-[#8C7B75]" />
          </div>
        </div>
      </section>

      {/* 3. FEATURED VISUALS (About/Work Replacements) */}
      <About />
      <Work />

      {/* 4. INSTAGRAM SNAPSHOT / COLLAGE */}
      <section className="relative w-full py-40 px-6 md:px-20 bg-[#D6CFC7]/20 border-t border-[#D6CFC7]/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div>
             <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A]">Curated Fragments</h2>
             <p className="font-sans text-sm tracking-[0.2em] uppercase text-[#8C7B75] mt-4">@studio.eternite</p>
           </div>
           <button className="text-sm border-b border-[#1A1A1A] pb-1 uppercase tracking-widest hover:text-[#8C7B75] hover:border-[#8C7B75] transition-colors" data-cursor="hover">
             Discover More
           </button>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550614000-4b95f463cb4e?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop"
          ].map((src, i) => (
             <motion.a 
               href="#"
               key={i}
               className={`relative overflow-hidden group block ${i === 1 || i === 3 ? 'mt-12 md:mt-24' : ''}`}
               whileHover={{ scale: 0.98 }}
               transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
             >
               <img src={src} alt="Instagram Snapshot" className="w-full h-[40vh] md:h-[60vh] object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:blur-[2px]" />
               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                 <span className="text-white font-sans text-xs tracking-[0.3em] uppercase mix-blend-overlay">View</span>
               </div>
             </motion.a>
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}
