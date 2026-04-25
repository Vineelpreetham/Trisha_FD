"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

export default function ContactFooter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Subtle parallax or reveal effect could be added here
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.querySelectorAll('.footer-reveal'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  return (
    <footer ref={containerRef} className="w-full bg-[#1A1818] text-[#FDF8F7] relative z-50 overflow-hidden pt-12 pb-8">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Top Section: CTA & Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-12 lg:mb-16">
          
          {/* Left: Email CTA */}
          <div className="footer-reveal flex flex-col max-w-md w-full">
            <h3 className="font-serif text-2xl md:text-3xl text-[#E8CE73] mb-4 tracking-wide">
              Contact
            </h3>
            <p className="font-sans font-light text-sm md:text-base text-white/60 leading-relaxed mb-8">
              For collaborations, editorial features, or private commissions.
            </p>
            <a 
              href="mailto:trishavanam@gmail.com" 
              className="font-serif text-xl md:text-3xl hover:text-[#E8CE73] hover:italic transition-all duration-300 flex items-center gap-4 w-fit"
            >
              trishavanam@gmail.com
              <ArrowUpRight size={24} strokeWidth={1.5} className="text-[#E8CE73]" />
            </a>
          </div>

          {/* Right: Grid of Links */}
          <div className="footer-reveal flex flex-wrap md:flex-nowrap gap-12 md:gap-24 lg:gap-32 w-full lg:w-auto">
            {/* Social */}
            <div className="flex flex-col gap-6 min-w-[120px]">
              <h4 className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-white/40">Social</h4>
              <div className="flex flex-col gap-3 font-serif text-lg tracking-wide">
                <a href="#" className="hover:text-[#E8CE73] hover:italic transition-all duration-300">
                  Instagram
                </a>
                <a href="#" className="hover:text-[#E8CE73] hover:italic transition-all duration-300">
                  Pinterest
                </a>
                <a href="#" className="hover:text-[#E8CE73] hover:italic transition-all duration-300">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-6 min-w-[120px]">
              <h4 className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-white/40">Based In</h4>
              <div className="flex flex-col gap-3 font-serif text-lg tracking-wide text-white/80">
                <span>New York, NY</span>
                <span className="text-white/40 text-sm mt-1">Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Huge Typography */}
        <div className="footer-reveal w-full flex justify-center mb-8 overflow-hidden py-2">
          <h1 
            className="font-serif leading-none tracking-tighter text-[#E8CE73]/90"
            style={{ fontSize: "clamp(2.5rem, 7vw, 8rem)", margin: 0, whiteSpace: "nowrap" }}
          >
            TRISHA <span className="italic font-light">VANAM</span>
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="footer-reveal flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10 font-sans text-[0.65rem] tracking-[0.15em] uppercase text-white/30">
          <p>© {new Date().getFullYear()} Trisha Vanam. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/80 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[30vh] bg-[#71171d] blur-[100px] opacity-20 pointer-events-none rounded-full" />
    </footer>
  );
}

