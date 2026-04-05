"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards";


const cardItems: iCardItem[] = [
  { title: "Look 01", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#1a1a1a", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774638002/in_bloom_1_2_qwqaqp.png" },
  { title: "Look 02", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#111111", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774638002/in_bloom_2png_2_t83lut.png" },
  { title: "Look 03", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#0a0a0a", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774638002/in_bloom_3_y4rjso.png" },
  { title: "Look 04", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#151515", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774638002/in_bloom_4_2_dwrezc.png" },
  { title: "Look 05", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#1c1c1c", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774638003/in_bloom_5_a8xnsz.png" },
  { title: "Look 06", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#0f0f0f", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774638002/in_bloom_6_asc7dq.png" },
  { title: "Look 07", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#1a1a1a", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774638003/in_bloom_7_ji0kbd.png" },
  { title: "Look 08", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#121212", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774638003/in_bloom_8_apiice.png" },
  { title: "Look 09", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#0c0c0c", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774638003/in_bloom_9_kvkh3i.png" },
  { title: "Look 10", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#151515", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774638004/in_bloom_10_wwdffg.png" },
  { title: "Look 11", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#1b1b1b", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774638004/in_bloom_11_x4euq6.png" },
  { title: "Look 12", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#111111", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774638004/in_bloom_12_ne0azp.png" }
];

export default function BloomPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#1A1C1B] text-[#F2EBE5] font-sans relative selection:bg-[#F2EBE5] selection:text-black">
      
      {/* Top Ambient Gradient Blend */}
      <div 
        className={isMobile
          ? "absolute top-0 left-0 w-full h-[30vh] pointer-events-none z-0"
          : "absolute top-0 left-0 w-full h-[45vh] lg:h-[60vh] pointer-events-none z-0"
        }
        style={{ background: "linear-gradient(to bottom, #3E3836 0%, rgba(62,56,54,0) 100%)" }}
      />
      
      {/* Navigation */}
      <nav
        className={isMobile
          ? "fixed top-0 left-0 w-full z-50 flex justify-between items-center mix-blend-difference text-white"
          : "fixed top-0 left-0 w-full z-50 pt-12 pb-6 px-6 md:p-10 flex justify-between items-center pointer-events-none mix-blend-difference text-white"
        }
        style={isMobile ? { padding: "env(safe-area-inset-top, 0.75rem) 1.25rem 0.75rem", pointerEvents: "auto" } : undefined}
      >
        <Link href="/collections" className="pointer-events-auto font-sans text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity" style={{ minHeight: "44px", display: "flex", alignItems: "center", padding: "0.5rem" }}>
          ← Back
        </Link>
        <div className="font-serif text-sm tracking-widest hidden md:block">TRISHA VANAM.</div>
      </nav>

      <div className="relative z-10 w-full bg-transparent">
        <CardsParallax items={cardItems} />
      </div>

      {/* Seamless Scroll Indicator (Fixed at bottom right) */}
      <div className="fixed bottom-6 md:bottom-12 right-6 md:right-10 z-50 flex flex-col items-center gap-4 pointer-events-none mix-blend-difference text-white">
        <span 
          className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.3em] rotate-90 origin-right translate-y-[-30px] md:translate-y-[-40px] opacity-70 whitespace-nowrap"
        >
          Scroll to explore
        </span>
        <div className="w-[1px] h-16 md:h-24 bg-white/20 relative overflow-hidden rounded-full mt-10 md:mt-16">
          <div 
            className="absolute top-0 left-0 w-full h-[50%] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{ animation: "scroll-drop 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite" }}
          />
        </div>
      </div>

      {/* Inline styles for custom scroll animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-drop {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          80% { transform: translateY(250%); opacity: 1; }
          100% { transform: translateY(300%); opacity: 0; }
        }
      `}} />

    </main>
  );
}
