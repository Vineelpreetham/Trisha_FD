"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PremiumHeroPage() {
  const containerRef = useRef(null);
  const bgImageRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const contentSectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial entrance animation
    const loadTl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    // Scale down image from massive bounds very slowly
    loadTl.fromTo(bgImageRef.current, 
      { scale: 1.3, filter: "blur(20px)" },
      { scale: 1, filter: "blur(0px)", duration: 2.5 }
    );

    // Fade and swoop in the type
    loadTl.fromTo(headlineRef.current, 
      { y: 50, opacity: 0, filter: "blur(10px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.5 },
      "-=1.5"
    );

    loadTl.fromTo(subtextRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, stagger: 0.1 },
      "-=1.0"
    );

    // 1. Zoom-in interaction on scroll! The background zooms aggressively INTO you while the text drifts up.
    gsap.to(bgImageRef.current, {
      scale: 1.5, // The premium Apple-style zoom-in
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
    });

    // 2. Strong Typography Parallax (Headline glides upwards extremely fast relative to scroll)
    gsap.to(headlineRef.current, {
      y: "-50vh",
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // 3. Reveal next section content
    gsap.fromTo(contentSectionRef.current, 
      { y: "20vh", opacity: 0 },
      { 
        y: "0vh", opacity: 1,
        scrollTrigger: {
          trigger: contentSectionRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        }
      }
    );

  }, []);

  return (
    <main className="bg-[#050505] text-[#FAFAFA] min-h-[300vh] selection:bg-[#EBEBEB] selection:text-[#050505] overflow-x-hidden font-sans">
      
      {/* MINIMALIST METALLIC NAV */}
      <nav className="fixed top-0 w-full px-6 py-8 md:px-12 flex justify-between items-center z-50 text-white mix-blend-difference pointer-events-none">
         <Link href="/" className="font-medium tracking-tighter text-xl md:text-2xl hover:opacity-60 transition-opacity pointer-events-auto">
            Design.
         </Link>
         <div className="flex gap-8 items-center pointer-events-auto">
            <span className="hidden md:block text-[10px] tracking-[0.2em] uppercase font-bold text-white/50">Next-Gen Interface</span>
            <Link href="/" className="text-sm font-medium hover:text-white/70 transition-colors">Return</Link>
         </div>
      </nav>

      {/* FULL-SCREEN PREMIUM HERO */}
      <section ref={containerRef} className="relative w-full h-[100svh] flex flex-col justify-center items-center overflow-hidden">
         
         {/* Subtly Grainy WebGL-Style Ambient Space Background */}
         <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
            <img 
              ref={bgImageRef}
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
              alt="Immersive Abstract Landscape" 
              className="w-full h-full object-cover object-center brightness-[0.6] sepia-[0.2] hue-rotate-15"
            />
            {/* A subtle vignette / inner shadow making the edges completely seamless into the black body background */}
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(5,5,5,1)] w-full h-full pointer-events-none" />
         </div>

         {/* High-End Clean Typography Hierarchy */}
         <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full pt-12">
            <h1 ref={headlineRef} className="text-[12vw] md:text-[8vw] font-bold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 drop-shadow-2xl">
              Immersive
            </h1>
            
            <div ref={subtextRef} className="mt-8 flex flex-col items-center justify-center gap-4">
              <p className="text-sm md:text-md tracking-[0.2em] font-medium text-white/80 uppercase">
                 The future of interaction
              </p>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mt-12 opacity-50"
              >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M12 5v14M19 12l-7 7-7-7" />
                 </svg>
              </motion.div>
            </div>
         </div>
      </section>

      {/* DETAILED CONTENT SECTION */}
      <section className="relative w-full py-40 px-6 md:px-20 bg-[#050505] z-20 overflow-hidden flex flex-col items-center">
         
         <div ref={contentSectionRef} className="max-w-4xl flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-12 text-white/90 leading-tight">
               Built for those who demand <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">perfection</span>.
            </h2>
            <p className="text-lg md:text-xl font-light text-white/50 leading-relaxed mb-20 max-w-2xl">
               Every pixel is meticulously crafted to ensure a responsive, fluid experience. The scrolling physics mirror high-end corporate applications, scaling natively across every device parameter.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-white/10 pt-20">
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">Architecture</h4>
                  <p className="font-serif text-2xl italic tracking-tight">Responsive Layout</p>
               </div>
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">Physics</h4>
                  <p className="font-serif text-2xl italic tracking-tight">Smooth Scroll</p>
               </div>
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">Aesthetic</h4>
                  <p className="font-serif text-2xl italic tracking-tight">Minimal Horizon</p>
               </div>
            </div>
         </div>

      </section>

    </main>
  );
}
