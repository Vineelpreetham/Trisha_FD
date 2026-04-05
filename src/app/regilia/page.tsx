"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";


const CATALOG_IMAGES = [
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774463609/2_o6af7u.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774463612/3_vupqad.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774463609/4_iyyzln.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774463609/5_bl8h8i.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774463609/6_b46vmp.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774463609/7_keslqd.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774463611/8_beihk6.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774463613/10_qxuj1p.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774463611/9_qxtvwx.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774463611/11_ckajdv.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774463611/13_ntx0zv.png"
];

// ── Mobile Swipeable Gallery ──
// Horizontal snap-scroll with swipe, page indicators, and scale animations
function MobileGallery({ images }: { images: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const itemWidth = el.offsetWidth * 0.82; // ~82vw per card + gap
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(Math.min(index, images.length - 1));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [images.length]);

  return (
    <div style={{ width: "100%", position: "relative" }}>
      {/* Counter */}
      <div style={{
        textAlign: "center", marginBottom: "1.5rem",
        fontFamily: "Georgia, serif", fontSize: "0.75rem",
        letterSpacing: "0.3em", color: "rgba(212, 199, 190, 0.5)",
        textTransform: "uppercase",
      }}>
        <span style={{ color: "#D4C7BE", fontWeight: 500 }}>{String(activeIndex + 1).padStart(2, "0")}</span>
        <span> / {String(images.length).padStart(2, "0")}</span>
      </div>

      {/* Horizontal snap-scroll container */}
      <div
        ref={scrollRef}
        style={{
          display: "flex", gap: "1rem", overflowX: "auto", overflowY: "hidden",
          scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch",
          paddingLeft: "5vw", paddingRight: "5vw", paddingBottom: "1.5rem",
          scrollbarWidth: "none", msOverflowStyle: "none",
        }}
      >
        {images.map((url, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 82vw", scrollSnapAlign: "center",
              borderRadius: "12px", overflow: "hidden",
              background: "rgba(255,255,255,0.03)",
              boxShadow: i === activeIndex
                ? "0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)"
                : "0 8px 24px rgba(0,0,0,0.2)",
              transform: i === activeIndex ? "scale(1)" : "scale(0.92)",
              opacity: i === activeIndex ? 1 : 0.5,
              transition: "transform 0.4s ease, opacity 0.4s ease, box-shadow 0.4s ease",
            }}
          >
            <img
              src={url}
              alt={`Look ${i + 1}`}
              style={{
                width: "100%", height: "auto", display: "block",
                objectFit: "contain",
              }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "0.5rem" }}>
        {images.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === activeIndex ? "20px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: i === activeIndex ? "#D4C7BE" : "rgba(212, 199, 190, 0.2)",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Hide scrollbar via CSS */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}


export default function RegaliaPage() {
  const containerRef = useRef<HTMLElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax hero video — skip on mobile for smoother performance
    if (!isMobile && heroVideoRef.current && containerRef.current) {
      gsap.to(heroVideoRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: { 
          trigger: containerRef.current, 
          start: "top top", 
          end: "bottom top", 
          scrub: true 
        },
      });
    }
  }, [isMobile]);

  return (
    <main style={{ backgroundColor: "#0A0A0A", color: "#F2EBE5", fontFamily: "Inter, sans-serif", minHeight: "100vh", overflowX: "hidden" }}>
      
      {/* Minimal Navigation */}
      <nav
        className={isMobile
          ? "fixed top-0 left-0 w-full z-50 flex justify-between items-center mix-blend-difference text-white"
          : "fixed top-0 left-0 w-full z-50 p-10 flex justify-between items-center pointer-events-none mix-blend-difference text-white"
        }
        style={isMobile ? { padding: "env(safe-area-inset-top, 0.75rem) 1.25rem 0.75rem", pointerEvents: "auto" } : undefined}
      >
        <Link
          href="/collections"
          className="pointer-events-auto font-sans text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
          style={{ minHeight: "44px", minWidth: "44px", display: "flex", alignItems: "center", padding: "0.5rem" }}
        >
          ← Back
        </Link>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "0.8rem", color: "#fff", letterSpacing: "0.2em" }}>TRISHA VANAM.</div>
      </nav>

      {/* Cinematic Hero - Video */}
      <section ref={containerRef} style={{ position: "relative", width: "100%", height: isMobile ? "60vh" : "100vh", overflow: "hidden" }}>
        <video 
          ref={heroVideoRef}
          autoPlay loop muted playsInline
          src="https://res.cloudinary.com/dbeh0eisn/video/upload/v1774463613/PORTFOLIO_TRISHA_rub7rt.mp4" 
          style={{ position: "absolute", top: isMobile ? "0" : "-10%", left: 0, width: "100%", height: isMobile ? "100%" : "120%", objectFit: "cover", zIndex: 0, opacity: 0.8 }} 
        />
        
        {/* Mobile: Title overlay on video */}
        {isMobile && (
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10,
            background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 100%)",
            padding: "3rem 1.5rem 2rem",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
          }}>
            <h1 style={{
              fontFamily: "Georgia, serif", fontSize: "2rem", fontWeight: 300,
              letterSpacing: "0.15em", textTransform: "uppercase", color: "#F2EBE5",
              margin: 0,
            }}>
              Regalia
            </h1>
            <div style={{ width: "40px", height: "1px", background: "rgba(212,199,190,0.3)" }} />
          </div>
        )}
      </section>

      {/* Collection Quote */}
      <section style={{ padding: isMobile ? "2.5rem 8% 2rem" : "10rem 10%", display: "flex", justifyContent: "center", textAlign: "center" }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: isMobile ? "1.05rem" : "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.6, maxWidth: "34ch", fontWeight: 300, fontStyle: "italic", color: "#D4C7BE" }}>
           "baroque grandeur and opera glamour reborn. A modern tribute to the timeless power and poise of royal femininity."
        </p>
      </section>

      {/* Gallery — Desktop: infinite auto-scroll | Mobile: swipeable snap-scroll */}
      <section style={{ width: "100%", overflow: "hidden", paddingBottom: isMobile ? "3rem" : "10rem" }}>
        {isMobile ? (
          <MobileGallery images={CATALOG_IMAGES} />
        ) : (
          <ImageAutoSlider images={CATALOG_IMAGES} />
        )}
      </section>

      
    </main>
  );
}
