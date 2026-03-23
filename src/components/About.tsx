"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tlText = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1.5,
      },
    });

    // Parallax text - moving up faster
    tlText.fromTo(
      textRef.current,
      { y: 250, opacity: 0, scale: 0.95 },
      { y: -100, opacity: 1, scale: 1, ease: "power2.out" }
    );

    // Parallax primary image - moving slowly and slightly rotating
    gsap.fromTo(
      image1Ref.current,
      { y: 150, rotationZ: -2 },
      {
        y: -50,
        rotationZ: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      }
    );

    // Parallax secondary image - overlapping and moving much faster
    gsap.fromTo(
      image2Ref.current,
      { y: 300, x: -50, rotationZ: 5 },
      {
        y: -150,
        x: 20,
        rotationZ: -2,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} id="about" className="relative w-full min-h-[150vh] py-40 flex items-center bg-background z-10 overflow-hidden">
      <div className="container mx-auto px-6 relative w-full h-full flex flex-col md:flex-row items-center justify-center">
        
        {/* Main Image - Pushed off screen right */}
        <div className="absolute right-[-10vw] md:right-[-5vw] top-[10%] w-[90vw] md:w-[50vw] h-[70vh] md:h-[110vh] overflow-hidden rounded-none z-0">
          <div ref={image1Ref} className="absolute w-full h-[120%] -top-[10%] origin-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop" 
              alt="Editorial Portrait" 
              className="w-full h-full object-cover grayscale opacity-90 contrast-125"
            />
            <div className="absolute inset-0 bg-background/20 mix-blend-multiply" />
          </div>
        </div>

        {/* Secondary Overlapping Image */}
        <div className="absolute left-[5vw] md:left-[35%] top-[40%] md:top-[60%] w-[60vw] md:w-[25vw] h-[40vh] md:h-[50vh] overflow-hidden z-20 shadow-2xl shadow-black/50">
           <div ref={image2Ref} className="absolute w-full h-[130%] -top-[15%] origin-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800&auto=format&fit=crop" 
              alt="Texture Detail" 
              className="w-full h-full object-cover grayscale opacity-100"
            />
          </div>
        </div>

        {/* Asymmetrical Text Block */}
        <div ref={textRef} className="relative z-30 w-full mt-[60vh] md:mt-[30vh] md:w-[50%] mr-auto pl-4 md:pl-20 mix-blend-difference">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white">
            Raw <br />
            <span className="text-neutral-500 italic font-serif lowercase tracking-normal pl-12 md:pl-32">form</span> <br />
            Unbound.
          </h2>
          <p className="mt-12 text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-sm md:ml-12">
            Deconstructing the archetype. We treat physical material and digital pixels as the same raw substance. The body is the canvas; the void is the gallery.
          </p>
          <div className="mt-16 md:ml-24">
            <button className="group relative flex items-center gap-4 text-xs font-mono uppercase tracking-[0.3em] overflow-hidden" data-cursor="hover">
              <span className="relative z-10 text-white transition-transform duration-500 group-hover:-translate-y-[150%]">Explore the Manifesto</span>
              <span className="absolute inset-0 z-10 text-neutral-500 transition-transform duration-500 translate-y-[150%] group-hover:translate-y-0">Explore the Manifesto</span>
              <div className="w-12 h-[1px] bg-white group-hover:w-24 transition-all duration-500" />
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
