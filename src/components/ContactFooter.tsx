"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

export default function ContactFooter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const bgColor = isHome ? "bg-[#F0EBE1]" : "bg-[#FCFAF8]";

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    // Footer is now constantly visible. Opacity removed to prevent text from disappearing.
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <section ref={containerRef} className="w-full flex flex-col relative z-50">

      {/* Bottom Half: Solid White Bar */}
      <div
        className={isMobile
          ? `w-full ${bgColor} text-[#1A1A1A] flex flex-col justify-between items-center gap-12`
          : `w-full ${bgColor} text-[#1A1A1A] pt-12 pb-16 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-12`
        }
        style={isMobile ? { padding: "2rem 1.5rem 3.5rem" } : undefined}
      >

        <div
          className={isMobile
            ? "font-serif tracking-wide font-light lowercase"
            : "font-serif text-3xl md:text-4xl lg:text-[2.5rem] text-[#605055] tracking-wide font-light lowercase whitespace-nowrap"
          }
          style={isMobile ? { fontSize: "1.4rem", color: "#605055", textAlign: "center" } : undefined}
        >
          trishavanam.com
        </div>

        {/* Right: Info Grid */}
        <div className={isMobile ? "flex flex-col gap-8 text-center" : "flex flex-col sm:flex-row gap-16 md:gap-32 text-center sm:text-left"}>

          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-xl md:text-[1.35rem] text-[#332A2D]">Location</h3>
            <p className="font-sans font-normal text-[#605055] text-sm md:text-[0.95rem] opacity-80">
              New York, NY
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-xl md:text-[1.35rem] text-[#332A2D]">Contact</h3>
            <a
              href="mailto:trishavanam@gmail.com"
              className="font-sans font-normal text-[#605055] text-sm md:text-[0.95rem] opacity-80 hover:opacity-100 transition-opacity underline underline-offset-[3px] decoration-[0.5px]"
              style={{ minHeight: isMobile ? "44px" : undefined, display: isMobile ? "flex" : undefined, alignItems: isMobile ? "center" : undefined, justifyContent: isMobile ? "center" : undefined }}
            >
              trishavanam@gmail.com
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

