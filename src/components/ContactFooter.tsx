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
        
        {/* Huge Typography */}
        <div className="footer-reveal w-full flex justify-center mb-6 overflow-hidden pt-4">
          <h1 
            className="font-serif leading-none tracking-tighter text-[#E8CE73]/90"
            style={{ fontSize: "clamp(2.5rem, 5vw, 6rem)", margin: 0, whiteSpace: "nowrap" }}
          >
            TRISHA <span className="italic font-light">VANAM</span>
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="footer-reveal flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-white/10 font-sans text-[0.65rem] tracking-[0.15em] uppercase text-white/30">
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

