"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactFooter from "@/components/ContactFooter";

export default function RomantiquesPage() {
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
    
    // Reveal animation for all sections
    const items = gsap.utils.toArray('.reveal-section');
    items.forEach((item: any) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: isMobile ? 40 : 80 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.8 : 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            // On mobile: play once to prevent jank. Desktop: reverse on scroll.
            toggleActions: isMobile ? "play none none none" : "play none none reverse",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isMobile]);

  return (
    <main ref={containerRef} className="w-full min-h-screen bg-[#3E3430] text-white font-sans relative overflow-x-hidden selection:bg-[#D4C3B3] selection:text-black">
      
      {/* Home Page Gradient Blends (Top & Bottom) */}
      <div 
        className={isMobile
          ? "absolute top-0 left-0 w-full pointer-events-none z-0"
          : "absolute top-0 left-0 w-full h-[45vh] lg:h-[60vh] pointer-events-none z-0"
        }
        style={{ height: isMobile ? "30vh" : undefined, background: "linear-gradient(to bottom, #FFF0F3 0%, rgba(255,240,243,0) 100%)" }}
      />
      <div 
        className={isMobile
          ? "absolute bottom-0 left-0 w-full pointer-events-none z-0"
          : "absolute bottom-0 left-0 w-full h-[45vh] lg:h-[60vh] pointer-events-none z-0"
        }
        style={{ height: isMobile ? "30vh" : undefined, background: "linear-gradient(to top, #FFF0F3 0%, rgba(255,240,243,0) 100%)" }}
      />

      {/* Background subtle dark blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#2E2722_0%,_transparent_75%)]"></div>
      </div>

      {/* Navigation */}
      <nav
        className={isMobile
          ? "fixed top-0 left-0 w-full z-50 flex justify-between items-center mix-blend-difference text-white"
          : "fixed top-0 left-0 w-full z-50 pt-12 pb-6 px-6 md:p-10 flex justify-between items-center pointer-events-none mix-blend-difference text-white"
        }
        style={isMobile ? { padding: "env(safe-area-inset-top, 0.75rem) 1.25rem 0.75rem", pointerEvents: "auto" } : undefined}
      >
        <Link href="/" className="pointer-events-auto font-sans text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity" style={{ minHeight: "44px", display: "flex", alignItems: "center", padding: "0.5rem" }}>
          ← Back
        </Link>
        <div className="font-serif text-sm tracking-widest hidden md:block">TRISHA VANAM.</div>
      </nav>

      <div className={isMobile ? "relative z-10 w-full mx-auto px-4" : "relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24"}>

        {/* --- SECTION 1: HERO --- */}
        <section className="reveal-section relative w-full min-h-[90vh] flex flex-col items-center justify-start pt-32 pb-16">
          
          {/* Centered Title Top */}
          <div className="w-full flex flex-col items-center z-20 mb-12">
            <h1
              className={isMobile
                ? "leading-[0.9] font-serif font-black text-white uppercase tracking-tighter text-center drop-shadow-sm"
                : "text-[14vw] md:text-[8vw] leading-[0.9] font-serif font-black text-white uppercase tracking-tighter text-center drop-shadow-sm"
              }
              style={{ fontSize: isMobile ? "12vw" : undefined }}
            >
              Romantiques
            </h1>
            <p className={isMobile ? "mt-6 font-serif italic text-gray-400 text-lg text-center max-w-2xl px-4" : "mt-8 font-serif italic text-gray-400 text-xl md:text-3xl text-center max-w-2xl px-4"}>
              "Faded threads speaking in timeless silhouettes."
            </p>
          </div>

          {/* Large Hero Image Center — No rotation on mobile to prevent overflow */}
          <div className="w-full relative z-10 flex justify-center px-4">
            <div
              className={isMobile
                ? "relative w-full max-w-[1400px] aspect-[16/10] shadow-2xl"
                : "relative w-full max-w-[1400px] aspect-[16/10] md:aspect-[16/9] rotate-[1deg] hover:rotate-0 transition-transform duration-700 ease-out shadow-2xl"
              }
            >
              <div className="absolute inset-0 bg-gray-900 shadow-2xl transform translate-x-3 translate-y-3 rounded-sm" />
              <img 
                src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638081/romantiques_1_mtpnit.png" 
                alt="Romantiques Hero" 
                className="relative w-full h-full object-cover border-[8px] md:border-[16px] border-gray-900 shadow-lg z-10 rounded-sm"
              />
            </div>
          </div>
        </section>

        {/* --- SECTION 2: MOOD BOARD --- */}
        <section className={isMobile
          ? "reveal-section relative w-full py-12 mb-8 flex flex-col items-center"
          : "reveal-section relative w-full py-24 md:py-32 mb-16 flex flex-col items-center"
        }>
          <h2 className={isMobile
            ? "text-3xl font-serif font-black text-white tracking-tight mb-8 text-center"
            : "text-4xl md:text-6xl font-serif font-black text-white tracking-tight mb-16 text-center"
          }>
            Mood Board
          </h2>
          
          <div className="relative w-full max-w-[1400px] flex justify-center items-center px-4">
             <div className="w-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-transform duration-700 hover:scale-[1.01]">
               <img 
                 src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638084/romantiques_3_ktmf8x.jpg" 
                 alt="Mood Board" 
                 className="w-full h-auto object-cover rounded-sm"
               />
             </div>
          </div>
        </section>

        {/* --- SECTION 3: COLOUR SWATCH BOARD --- */}
        <section className={isMobile
          ? "reveal-section relative w-full py-12 mb-8 flex flex-col items-center gap-8"
          : "reveal-section relative w-full py-24 md:py-32 mb-16 flex flex-col md:flex-row items-center gap-12"
        }>
          
          <div className={isMobile
            ? "w-full order-1 relative p-2 bg-gray-900 shadow-2xl"
            : "w-full md:w-[70%] order-2 md:order-1 relative p-2 bg-gray-900 shadow-2xl rotate-[1.5deg]"
          }>
            <img 
              src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638083/romantiques_2_pthfbt.jpg" 
              alt="Colour Swatch Board" 
              className="w-full h-auto object-cover"
            />
          </div>

          <div className={isMobile
            ? "w-full flex flex-col items-center order-2"
            : "w-full md:w-[30%] flex flex-col items-center md:items-end order-1 md:order-2"
          }>
            <h2 className={isMobile
              ? "text-3xl font-serif font-black text-white tracking-tight mb-6 text-center leading-[1]"
              : "text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white tracking-tight mb-12 text-right leading-[1]"
            }>
              Colour<br/>Swatch<br/>Board
            </h2>
            
            {/* Custom CSS Pantone Chips */}
            <div className="flex gap-2 sm:gap-4">
               {/* Swatch 1: Sage Green */}
               <div className="w-[28vw] max-w-[6rem] aspect-[3/4] bg-white shadow-lg p-1 sm:p-2 flex flex-col rotate-[-4deg]">
                  <div className="w-full flex-1 bg-[#8A9A86]"></div>
                  <div className="h-6 sm:h-8 flex flex-col justify-end pt-1">
                     <span className="text-[5px] sm:text-[7px] font-bold text-black uppercase leading-none">Pantone®</span>
                     <span className="text-[4px] sm:text-[6px] text-gray-500 leading-tight">16-5804 TCX<br/>Vintage Sage</span>
                  </div>
               </div>
               {/* Swatch 2: Dusty Pink */}
               <div className="w-[28vw] max-w-[6rem] aspect-[3/4] bg-white shadow-lg p-1 sm:p-2 flex flex-col rotate-[2deg] translate-y-4 sm:translate-y-8">
                  <div className="w-full flex-1 bg-[#D4A5A8]"></div>
                  <div className="h-6 sm:h-8 flex flex-col justify-end pt-1">
                     <span className="text-[5px] sm:text-[7px] font-bold text-black uppercase leading-none">Pantone®</span>
                     <span className="text-[4px] sm:text-[6px] text-gray-500 leading-tight">14-1311 TCX<br/>Dusty Rose</span>
                  </div>
               </div>
               {/* Swatch 3: Beige/Gold */}
               <div className="w-[28vw] max-w-[6rem] aspect-[3/4] bg-white shadow-lg p-1 sm:p-2 flex flex-col rotate-[-1deg]">
                  <div className="w-full flex-1 bg-[#CBB69E]"></div>
                  <div className="h-6 sm:h-8 flex flex-col justify-end pt-1">
                     <span className="text-[5px] sm:text-[7px] font-bold text-black uppercase leading-none">Pantone®</span>
                     <span className="text-[4px] sm:text-[6px] text-gray-500 leading-tight">13-1009 TCX<br/>Antique Parchment</span>
                  </div>
               </div>
            </div>
          </div>
          
        </section>

        {/* --- SECTION 4: SILHOUETTE BOARD --- */}
        <section className={isMobile
          ? "reveal-section relative w-full py-12 mb-8 flex flex-col items-start"
          : "reveal-section relative w-full py-24 md:py-32 mb-16 flex flex-col items-start"
        }>
          <h2 className={isMobile
            ? "text-3xl font-serif font-black text-white tracking-tight mb-6"
            : "text-4xl md:text-6xl font-serif font-black text-white tracking-tight mb-12"
          }>
            Silhouette Board
          </h2>
          
          <div className="w-full relative shadow-2xl p-2 bg-gray-900">
            <img 
               src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638083/romantiques_5_upncur.jpg" 
               alt="Silhouette Board" 
               className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* --- SECTION 5: RANGE BOARD & FLAT SKETCHES --- */}
        <section className={isMobile
          ? "reveal-section relative w-full py-12 pb-24 flex flex-col items-end"
          : "reveal-section relative w-full py-24 md:py-32 pb-48 flex flex-col items-end"
        }>
          <h2 className={isMobile
            ? "text-3xl font-serif font-black text-white tracking-tight mb-6 text-right"
            : "text-4xl md:text-6xl font-serif font-black text-white tracking-tight mb-12 text-right"
          }>
            Range Board
          </h2>
          
          <div className={isMobile
            ? "w-full relative shadow-2xl p-2 bg-gray-900"
            : "w-full max-w-[1200px] relative shadow-2xl rotate-[-0.5deg] p-2 bg-gray-900"
          }>
            <img 
               src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638082/romantiques_4_wbjszd.jpg" 
               alt="Range Board & Flat Sketches" 
               className="w-full h-auto object-cover"
            />
            {/* Small text label mimicking sketches */}
            <div className="absolute top-[-2%] left-[5%] font-serif font-black text-[#D4C3B3] text-2xl tracking-wider opacity-90">
               Sketch
            </div>
          </div>
        </section>
        
      </div>
      
      <ContactFooter />

    </main>
  );
}
