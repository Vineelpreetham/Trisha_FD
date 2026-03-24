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

    tl.to(videoRef.current, { scale: 0.6, borderRadius: "24px", ease: "power2.inOut" })
      .to(headlineRef.current, { opacity: 0, y: -100, scale: 0.8 }, 0)
      .fromTo(infoRef.current, { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1 }, 0.5);

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
    <main className="bg-black text-white min-h-[300vh] selection:bg-white selection:text-black font-sans overflow-x-hidden">
      
      {/* 1. HERO PINNED SCALE DOWN */}
      <div ref={containerRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
        
        <div ref={videoRef} className="absolute inset-0 w-full h-full overflow-hidden origin-center z-10">
          <img 
            src="/home-gradient.jpg" 
            alt="Gradient Background" 
            className="absolute inset-0 w-full h-full object-cover scale-[1.2]"
          />
          <img 
            src="/home-hero-dress.png" 
            alt="Hero Dress" 
            className="relative z-10 w-full h-full object-contain object-bottom scale-[1.1] translate-y-12"
          />
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#2B0000]/80 via-[#3B0000]/30 mix-blend-multiply" />
        </div>

        <div className="relative z-20 text-center w-full flex flex-col items-center pointer-events-none px-4 mix-blend-difference">
          <div ref={headlineRef} className="flex flex-col items-center">
            <h1 className="text-[14vw] leading-[0.85] font-bold tracking-tighter uppercase whitespace-nowrap text-white">
              Digital Studio
            </h1>
            <h1 className="text-[14vw] leading-[0.85] font-bold tracking-tighter uppercase whitespace-nowrap text-white">
              Exo Ape
            </h1>
          </div>
          <p className="mt-8 text-sm md:text-md tracking-[0.4em] uppercase opacity-70 border-b border-white/30 pb-2">
            A New Perspective
          </p>
        </div>

        <div ref={infoRef} className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none opacity-0">
          <div className="max-w-3xl text-center px-6 mix-blend-difference text-white">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-8 tracking-tight">We craft digital experiences that defy convention and redefine boundaries.</h2>
            <p className="text-sm tracking-widest uppercase opacity-50">Exo Ape Insp</p>
          </div>
        </div>

      </div>

      {/* 2. HUGE STATIC MARQUEE */}
      <section className="marquee-section relative w-full h-[60vh] flex items-center justify-center overflow-hidden border-t border-b border-white/10 bg-[#0a0a0a]">
        <div className="marquee-text whitespace-nowrap flex justify-center leading-none text-[15vw] font-bold tracking-tighter uppercase mt-4">
          <span className="px-8 text-transparent style-stroke" style={{ WebkitTextStroke: "2px white", color: "transparent" }}>Ashwitha</span>
          <span className="px-8">Guduru</span>
          <span className="px-8 text-transparent style-stroke" style={{ WebkitTextStroke: "2px white", color: "transparent" }}>Ashwitha</span>
          <span className="px-8">Guduru</span>
        </div>
      </section>

      {/* 3. BRAND MANIFESTO */}
      <section className="parallax-section relative w-full py-40 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center border-b border-white/10">
        <div className="flex flex-col justify-center">
          <h3 className="text-[10vw] md:text-6xl font-serif leading-[0.9] tracking-tight mb-8">Pioneering<br/>the Unknown.</h3>
          <p className="text-lg opacity-80 leading-relaxed max-w-md font-light">
            By shifting paradigms and pushing the limits of the digital medium, we create immersive, award-winning websites and branding experiences for courageous brands.
          </p>
          <div className="mt-12 uppercase tracking-widest text-sm border-b border-white/30 inline-block pb-2 w-max cursor-pointer hover:border-white transition-colors">
            Discover Our Work
          </div>
        </div>
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center p-8">
           <img src="/autumn-moodboard.png" className="parallax-img w-[90%] h-[90%] object-contain" />
        </div>
      </section>
      
      {/* 4. MASSIVE FOOTER */}
      <footer className="relative w-full h-screen bg-white text-black flex flex-col items-center justify-center">
         <h1 className="text-[16vw] font-bold tracking-tighter leading-[0.8] uppercase text-center group cursor-pointer hover:scale-105 transition-transform duration-700">
           Let's<br/>Talk.
         </h1>
         <div className="mt-20 group cursor-pointer border-b-2 border-black pb-2 flex items-center gap-4 hover:opacity-50 transition-opacity">
            <span className="text-2xl uppercase tracking-widest font-bold">Start a Project</span>
            <span className="text-3xl transform group-hover:translate-x-4 transition-transform duration-300">↗</span>
         </div>
      </footer>
    </main>
  );
}
