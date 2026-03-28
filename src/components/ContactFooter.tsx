"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";

export default function ContactFooter() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax or simple reveal
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power2.out", scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
    );
  }, []);

  return (
    <section ref={containerRef} className="w-full flex flex-col relative bg-[#1a0305] z-20">
      
      {/* Top Half: Smoke Effect & View Projects */}
      <div className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#2a0c13]">

        {/* WebGL Spooky Smoke Effect */}
        <div className="absolute inset-0 mix-blend-screen opacity-90">
          <SmokeBackground smokeColor="#FFFFFF" />
        </div>

        {/* Gradient Overlay to fade the smoke naturally into the background edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#2a0c13_80%)] pointer-events-none" />

        {/* Foreground Text */}
        <Link 
          href="/collections"
          className="relative z-10 text-[var(--text-navy)] hover:text-[#1a0305] transition-colors duration-500 font-serif tracking-[0.4em] uppercase text-sm md:text-lg mix-blend-color-burn hover:mix-blend-normal font-medium px-12 py-6 cursor-pointer"
        >
          View Projects
        </Link>
      </div>

      {/* Bottom Half: Solid White Bar */}
      <div className="w-full bg-[#FCFAF8] text-[#1A1A1A] py-16 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        
        {/* Left: Website Name */}
        <div className="font-serif text-3xl md:text-4xl lg:text-[2.5rem] text-[#4A4045] tracking-wide font-light lowercase">
          srujanachyutuni.com
        </div>

        {/* Right: Info Grid */}
        <div className="flex flex-col sm:flex-row gap-12 md:gap-24 text-center sm:text-left">
          
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-lg md:text-xl tracking-wider text-[#3d0a10]">Location</h3>
            <p className="font-sans font-light text-[0.95rem] opacity-70">
              New York, NY
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-lg md:text-xl tracking-wider text-[#3d0a10]">Contact</h3>
            <a 
              href="mailto:srujanachyutuni@gmail.com" 
              className="font-sans font-light text-[0.95rem] opacity-70 hover:opacity-100 transition-opacity underline-offset-4 hover:underline"
            >
              srujanachyutuni@gmail.com
            </a>
          </div>

        </div>

      </div>
      
    </section>
  );
}
