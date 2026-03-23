"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    // Parallax text
    tl.fromTo(
      textRef.current,
      { y: 150, opacity: 0 },
      { y: -50, opacity: 1, duration: 2 }
    );

    // Parallax Image scaling + moving
    gsap.fromTo(
      imageRef.current,
      { y: 100, scale: 1.15 },
      {
        y: -100,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} id="about" className="relative w-full py-40 flex items-center justify-center z-10 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        <div ref={textRef} className="md:col-span-5 md:col-start-2 flex flex-col gap-8 z-20">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[1.1]">
            Redefining <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">
              The Digital
            </span> <br className="hidden md:block" />
            Experience.
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-md">
            We exist at the intersection of high fashion and futuristic digital art. Stripping away the excess to reveal the core essence of design, movement, and interaction.
          </p>
          <div className="mt-4">
            <button className="group relative px-8 py-4 overflow-hidden rounded-full border border-white/20 glassmorphism uppercase tracking-[0.2em] text-xs font-semibold" data-cursor="hover">
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Discover More</span>
              <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </button>
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-8 relative h-[60vh] md:h-[80vh] w-full overflow-hidden rounded-sm pointer-events-none">
          <div ref={imageRef} className="absolute inset-[-20%] w-[140%] h-[140%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" 
              alt="Abstract Digital Art" 
              className="w-full h-full object-cover grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
        
      </div>
    </section>
  );
}
