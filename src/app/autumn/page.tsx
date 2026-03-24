"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ExoApePage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const headlineRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        scrub: 1,
        pin: true,
      }
    });

    // Huge scale down and fade
    tl.to(videoRef.current, { scale: 0.6, borderRadius: "24px", ease: "power2.inOut" })
      .to(headlineRef.current, { opacity: 0, y: -100, scale: 0.8 }, 0)
      .fromTo(infoRef.current, { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1 }, 0.5);

    // Sub-image parallax
    gsap.to(".parallax-img", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

  }, []);

  return (
    <main className="bg-[#3B010B] text-[#F2E5C6] min-h-[300vh] selection:bg-[#F2D9A0] selection:text-[#3B010B] font-sans overflow-x-hidden">
      
      {/* 1. HERO PINNED SCALE DOWN */}
      <div ref={containerRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#3B010B]">
        
        <div ref={videoRef} className="absolute inset-0 w-full h-full overflow-hidden origin-center z-10 bg-gradient-to-br from-[#75162D] via-[#560B18] to-[#3B010B]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#3B010B]/90 via-[#560B18]/40" />
        </div>

        <div className="relative z-20 text-center w-full flex flex-col items-center pointer-events-none px-4 mix-blend-difference">
          <div ref={headlineRef} className="flex flex-col items-center text-[#F2E5C6]">
            <h1 className="text-[14vw] leading-[0.85] font-bold tracking-tighter uppercase whitespace-nowrap">
              Digital Studio
            </h1>
            <h1 className="text-[14vw] leading-[0.85] font-bold tracking-tighter uppercase whitespace-nowrap">
              Exo Ape
            </h1>
          </div>
          <p className="mt-8 text-sm md:text-md tracking-[0.4em] uppercase opacity-90 border-b border-[#F2D9A0]/40 pb-2 text-[#F2D9A0]">
            A New Perspective
          </p>
        </div>

        <div ref={infoRef} className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none opacity-0">
          <div className="max-w-3xl text-center px-6 text-[#F2E5C6]">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-8 tracking-tight drop-shadow-lg">We craft digital experiences that defy convention and redefine boundaries.</h2>
            <p className="text-sm tracking-widest uppercase opacity-70 text-[#F2D9A0]">Exo Ape Insp</p>
          </div>
        </div>

      </div>

      
      {/* 2. HUGE STATIC MARQUEE */}
      <section className="marquee-section relative w-full h-[60vh] flex items-center justify-center overflow-hidden border-t border-b border-[#F2D9A0]/20 bg-[#560B18]">
        <div className="marquee-text whitespace-nowrap flex justify-center leading-none text-[15vw] font-bold tracking-tighter uppercase mt-4">
          <span className="px-8 text-transparent style-stroke" style={{ WebkitTextStroke: "2px #F2E5C6", color: "transparent" }}>Ashwitha</span>
          <span className="px-8 text-[#F2E5C6]">Guduru</span>
          <span className="px-8 text-transparent style-stroke" style={{ WebkitTextStroke: "2px #F2E5C6", color: "transparent" }}>Ashwitha</span>
          <span className="px-8 text-[#F2E5C6]">Guduru</span>
        </div>
      </section>

      {/* 3. BRAND MANIFESTO */}
      <section className="parallax-section relative w-full py-40 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center border-b border-[#75162D]/10 bg-[#F2E5C6] text-[#3B010B]">
        <div className="flex flex-col justify-center">
          <h3 className="text-[10vw] md:text-6xl font-serif leading-[0.9] tracking-tight mb-8 text-[#75162D]">Pioneering<br/>the Unknown.</h3>
          <p className="text-lg opacity-90 leading-relaxed max-w-md font-light text-[#560B18]">
            By shifting paradigms and pushing the limits of the digital medium, we create immersive, award-winning websites and branding experiences for courageous brands.
          </p>
          <div className="mt-12 uppercase tracking-widest text-sm border-b border-[#75162D]/40 inline-block pb-2 w-max cursor-pointer hover:border-[#75162D] transition-colors text-[#3B010B] font-semibold">
            Discover Our Work
          </div>
        </div>
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-[#F2D9A0] border border-[#75162D]/20 flex items-center justify-center p-8 shadow-2xl">
           <img src="/autumn-moodboard.png" className="parallax-img w-[110%] h-[110%] object-contain mix-blend-multiply" />
        </div>
      </section>
      
      {/* 4. MASSIVE FOOTER */}
      <footer className="relative w-full h-screen bg-[#3B010B] text-[#F2E5C6] flex flex-col items-center justify-center">
         <h1 className="text-[16vw] font-bold tracking-tighter leading-[0.8] uppercase text-center group cursor-pointer hover:scale-105 transition-transform duration-700 text-[#F2D9A0]">
           Let's<br/>Talk.
         </h1>
         <div className="mt-20 group cursor-pointer border-b-2 border-[#F2D9A0] pb-2 flex items-center gap-4 hover:opacity-70 transition-opacity text-[#F2E5C6]">
            <span className="text-2xl uppercase tracking-widest font-bold">Start a Project</span>
            <span className="text-3xl transform group-hover:translate-x-4 transition-transform duration-300">↗</span>
         </div>
      </footer>
    </main>
  );
}
