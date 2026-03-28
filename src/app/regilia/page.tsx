"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";
import ContactFooter from "@/components/ContactFooter";

const CATALOG_IMAGES = [
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774463609/2_o6af7u.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774463612/3_vupqad.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774463609/4_iyyzln.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774463609/5_bl8h8i.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774463609/6_b46vmp.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774463609/7_keslqd.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774463611/8_beihk6.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774463613/10_qxuj1p.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774463611/9_qxtvwx.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774463611/11_ckajdv.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774463611/13_ntx0zv.png"
];

export default function RegaliaPage() {
  const containerRef = useRef<HTMLElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax hero video
    if (heroVideoRef.current && containerRef.current) {
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
  }, []);

  return (
    <main style={{ backgroundColor: "#0A0A0A", color: "#F2EBE5", fontFamily: "Inter, sans-serif", minHeight: "150vh", overflowX: "hidden" }}>
      
      {/* Absolute Transparent Nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2rem 4rem", mixBlendMode: "difference" }}>
        <Link href="/" style={{ fontFamily: "Georgia, serif", fontSize: "1.2rem", color: "#fff", textDecoration: "none" }}>← Back</Link>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "0.8rem", color: "#fff", letterSpacing: "0.2em" }}>TRISHA VANAM.</div>
      </nav>

      {/* Cinematic Hero - Pure Video Experience */}
      <section ref={containerRef} style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
        <video 
          ref={heroVideoRef}
          autoPlay loop muted playsInline
          src="https://res.cloudinary.com/dbeh0eisn/video/upload/v1774463613/PORTFOLIO_TRISHA_rub7rt.mp4" 
          style={{ position: "absolute", top: "-10%", left: 0, width: "100%", height: "120%", objectFit: "cover", zIndex: 0, opacity: 0.8 }} 
        />
      </section>

      {/* Collection Concept Paragraph - Restored */}
      <section style={{ padding: "10rem 10%", display: "flex", justifyContent: "center", textAlign: "center" }}>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.5, maxWidth: "34ch", fontWeight: 300, fontStyle: "italic", color: "#D4C7BE" }}>
           "Drawing from the colossal interior arches of historical palaces, Regalia is a study in structure, weight, and the uncompromising silhouette."
        </p>
      </section>

      {/* Infinite Auto-Scrolling Gallery */}
      <section style={{ width: "100%", overflow: "hidden", paddingBottom: "10rem" }}>
         <ImageAutoSlider images={CATALOG_IMAGES} />
      </section>
      <ContactFooter />

    </main>
  );
}
