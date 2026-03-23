"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
});
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Initial reveal animation - Staggered, imperfect, off-balance
    const tl = gsap.timeline();

    tl.fromTo(
      title1Ref.current,
      { x: -100, opacity: 0, rotate: -5 },
      { x: 0, opacity: 1, rotate: 0, duration: 1.8, ease: "power4.out" }
    ).fromTo(
      title2Ref.current,
      { x: 100, opacity: 0, y: 50 },
      { x: 0, opacity: 1, y: 0, duration: 2.2, ease: "expo.out" },
      "-=1.4"
    ).fromTo(
      subtitleRef.current,
      { opacity: 0, filter: "blur(10px)" },
      { opacity: 1, filter: "blur(0px)", duration: 2 },
      "-=1.5"
    );

    // Scroll animation for Hero - Camera movement feel
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
      y: 150,
      scale: 1.05,
      opacity: 0.2,
      filter: "blur(5px)",
      transformOrigin: "center center",
    });
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <HeroScene />
        
        <div className="z-10 w-full h-full flex flex-col justify-between pt-40 pb-20 px-6 md:px-20 pointer-events-none">
          <div className="flex justify-start w-full">
            <h1
              ref={title1Ref}
              className="text-6xl md:text-[10vw] font-black tracking-tighter uppercase leading-[0.8] mix-blend-difference"
            >
              Exuvia
            </h1>
          </div>
          
          <div className="flex justify-end w-full relative -mt-32 md:-mt-64">
             <div className="absolute right-[20vw] top-0 w-64 h-[1px] bg-white/30 hidden md:block" />
             <h1
              ref={title2Ref}
              className="text-6xl md:text-[8vw] font-black tracking-tighter uppercase leading-[0.85] text-transparent bg-clip-text bg-gradient-to-br from-neutral-100 to-neutral-700 mix-blend-plus-lighter"
            >
              Collection.
            </h1>
          </div>

          <div className="flex justify-between items-end w-full">
             <p
              ref={subtitleRef}
              className="text-sm md:text-base text-neutral-400 font-light tracking-[0.3em] uppercase max-w-xs md:max-w-md mix-blend-difference leading-relaxed text-left"
            >
              Fragmented identities woven into digital garments.
            </p>

            <div className="hidden md:flex flex-col items-end gap-2 text-[10px] tracking-[0.4em] text-neutral-600 uppercase">
               <span>Fall / Winter</span>
               <span>2026</span>
               <div className="w-[1px] h-20 bg-gradient-to-b from-neutral-600 to-transparent mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Work Section */}
      <Work />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
