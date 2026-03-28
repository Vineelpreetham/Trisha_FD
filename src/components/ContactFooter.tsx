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
    <section ref={containerRef} className="w-full flex flex-col relative z-20">

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
