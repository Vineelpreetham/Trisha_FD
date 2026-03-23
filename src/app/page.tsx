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
    // Initial reveal animation
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      [title1Ref.current, title2Ref.current],
      { y: 100, opacity: 0, rotationX: -20 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1.5, stagger: 0.2 }
    ).fromTo(
      subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=1"
    );

    // Scroll animation for Hero
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: 200,
      opacity: 0,
      scale: 0.9,
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
        
        <div className="z-10 flex flex-col items-center text-center mt-20 pointer-events-none perspective-[1000px]">
          <h1
            ref={title1Ref}
            className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] mix-blend-difference"
          >
            Digital
          </h1>
          <h1
            ref={title2Ref}
            className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-600 mix-blend-difference"
          >
            Couture.
          </h1>
          <p
            ref={subtitleRef}
            className="mt-8 text-lg md:text-xl text-neutral-400 font-light tracking-widest uppercase max-w-md"
          >
            The intersection of high fashion & futuristic digital art.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-neutral-500 uppercase flex flex-col items-center gap-2">
          <span>Scroll to explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent animate-pulse" />
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
