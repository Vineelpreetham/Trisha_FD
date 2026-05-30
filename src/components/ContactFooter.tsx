"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
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

  const pathname = usePathname();

  // No footer on contact page — contact info is already on the page
  if (pathname === "/contact") return null;

  // Dynamic colors based on page
  let bgStyle = "#F8F6F2"; // Default to light cream for all pages
  let isLight = true;

  if (pathname === "/") {
    bgStyle = "linear-gradient(180deg, #904336 0%, #4A1B1C 100%)"; // Home gradient
    isLight = false;
  }

  const textColor = isLight ? "text-[#1A1A1A]/80" : "text-white/80";
  const linkColor = isLight ? "text-[#1A1A1A]/60" : "text-white/50";
  const hoverColor = isLight ? "hover:text-[#8C7B75]" : "hover:text-[#E8CE73]";
  const bottomColor = isLight ? "text-[#1A1A1A]/40" : "text-white/30";
  const borderColor = isLight ? "border-[#1A1A1A]/10" : "border-white/10";
  const glowColor = isLight ? "bg-[#D6CFC7]" : "bg-[#71171d]";

  return (
    <footer ref={containerRef} className={`w-full relative z-50 overflow-hidden pt-8 pb-6 ${isLight ? 'text-[#1A1A1A]' : 'text-[#FDF8F7]'}`} style={{ background: bgStyle }}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Statement */}
        <div className="footer-reveal w-full flex justify-center mb-6 text-center">
           <p className={`font-serif italic text-xl md:text-2xl max-w-lg leading-snug ${textColor}`}>
             "Design grows through connection — let’s connect"
           </p>
        </div>

        {/* Minimal Contact Info */}
        <div className="footer-reveal w-full flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-0">
           <a href="mailto:trishavanam@gmail.com" className={`font-sans text-[0.65rem] md:text-xs tracking-[0.2em] uppercase transition-colors relative z-10 ${linkColor} ${hoverColor}`}>
             trishavanam@gmail.com
           </a>
           <a href="tel:+18575066139" className={`font-sans text-[0.65rem] md:text-xs tracking-[0.2em] uppercase transition-colors relative z-10 ${linkColor} ${hoverColor}`}>
             +1 (857) 506-6139
           </a>
           <span className={`font-sans text-[0.65rem] md:text-xs tracking-[0.2em] uppercase relative z-10 ${linkColor}`}>
             New York, NY
           </span>
           <a href="https://www.linkedin.com/in/trisha-vanam-827088324" target="_blank" rel="noopener noreferrer" className={`font-sans text-[0.65rem] md:text-xs tracking-[0.2em] uppercase transition-colors relative z-10 ${linkColor} ${hoverColor}`}>
             LinkedIn
           </a>
        </div>

      </div>
      
      {/* Ambient background glow */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[30vh] blur-[100px] opacity-20 pointer-events-none rounded-full ${glowColor}`} />
    </footer>
  );
}

