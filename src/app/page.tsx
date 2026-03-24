"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function FashionHero() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Entrance
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(bgRef.current,
        { scale: 1.12, filter: "brightness(0.4) blur(14px)" },
        { scale: 1,    filter: "brightness(1) blur(0px)", duration: 2.2 }
      )
      .fromTo(modelRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.6 }, "-=1.6")
      .fromTo(textRef.current,  { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 1.4 }, "-=1.1");

    // Scroll: background ZOOMS IN (scale 1 -> 1.15) — exoape style
    gsap.to(bgRef.current, {
      scale: 1.15,
      ease: "none",
      scrollTrigger: { trigger: containerRef.current, start: "top top", end: "bottom top", scrub: 1.5 },
    });

    // Scroll: model drifts up slightly for depth
    gsap.to(modelRef.current, {
      yPercent: -4,
      ease: "none",
      scrollTrigger: { trigger: containerRef.current, start: "top top", end: "bottom top", scrub: 1.5 },
    });

    // Scroll: text exits fast
    gsap.to(textRef.current, {
      yPercent: -60, opacity: 0, ease: "none",
      scrollTrigger: { trigger: containerRef.current, start: "top top", end: "60% top", scrub: 1 },
    });
  }, []);

  return (
    <main style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif", overflowX: "hidden", background: "#f7f5f3", minHeight: "200vh" }}>

      {/* Transparent NAV */}
      <nav style={{
        position: "absolute", top: 0, left: 0, width: "100%",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "clamp(1.2rem,3vw,2.2rem) clamp(1.5rem,5vw,4rem)",
        zIndex: 100, mixBlendMode: "difference", color: "#fff", pointerEvents: "auto",
      }}>
        <Link href="/" style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1rem,2vw,1.4rem)", fontWeight: 400, letterSpacing: "-0.01em" }}
              className="hover:opacity-60 transition-opacity">
          Trisha.
        </Link>
        <div style={{ display: "flex", gap: "clamp(1rem,3vw,2.5rem)", fontSize: "clamp(0.6rem,1vw,0.72rem)", letterSpacing: "0.18em", fontWeight: 500, textTransform: "uppercase" }}>
          <Link href="/"            className="hover:opacity-60 transition-opacity">Home</Link>
          <Link href="/collections" className="hover:opacity-60 transition-opacity">Collection</Link>
          <Link href="/about"       className="hover:opacity-60 transition-opacity">About</Link>
          <Link href="/contact"     className="hover:opacity-60 transition-opacity">Contact</Link>
        </div>
      </nav>

      {/* HERO */}
      <section ref={containerRef} style={{ position: "relative", width: "100%", height: "100svh", overflow: "hidden", background: "#1a0305" }}>

        {/* Layer 1: Gradient background — oversized so parallax never shows edges */}
        <img
          ref={bgRef}
          src="/vertical-gradient.jpg"
          alt="Red gradient"
          style={{
            position: "absolute", top: "-6%", left: "-6%",
            width: "112%", height: "112%",
            objectFit: "cover", objectPosition: "center center",
            zIndex: 0, transformOrigin: "center center", willChange: "transform",
          }}
        />

        {/* Editorial grain texture */}
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset:0, width:"100%", height:"100%", opacity:0.18, mixBlendMode:"overlay", pointerEvents:"none", zIndex:1 }}>
          <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch"/></filter>
          <rect width="100%" height="100%" filter="url(#grain)"/>
        </svg>

        {/* Layer 2: Left-side editorial text */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 10,
          display: "flex", alignItems: "center",
          paddingLeft: "clamp(2rem,6vw,6rem)", paddingBottom: "4vh",
          pointerEvents: "none",
        }}>
          <h1 ref={textRef} style={{
            fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif",
            fontWeight: 300,
            fontSize: "clamp(1.1rem,2.4vw,2.6rem)",
            lineHeight: 1.35,
            letterSpacing: "0.02em",
            color: "#fff",
            maxWidth: "15ch",
            margin: 0,
            textShadow: "0 2px 40px rgba(0,0,0,0.55)",
          }}>
            Welcome to my journey as a fashion designer
          </h1>
        </div>

        {/* Layer 3: Model cutout — EXACTLY centered with left:50% + translateX(-50%) */}
        <div ref={modelRef} style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(260px, 55vw, 760px)",
          height: "100%",
          zIndex: 20,
          pointerEvents: "none",
          willChange: "transform",
        }}>
          <img
            src="/home-hero-dress.png"
            alt="Model in red gown"
            style={{
              width: "100%", height: "100%",
              objectFit: "contain", objectPosition: "bottom center",
              filter: "drop-shadow(0 0 50px rgba(0,0,0,0.22))",
              display: "block",
            }}
          />
        </div>
      </section>

      {/* Below fold */}
      <section style={{ width:"100%", padding:"10rem 2rem", display:"flex", flexDirection:"column", alignItems:"center", background:"#f7f5f3" }}>
        <p style={{ fontSize:"0.7rem", letterSpacing:"0.3em", textTransform:"uppercase", opacity:0.4, marginBottom:"2rem" }}>
          Scroll Down
        </p>
        <h2 style={{ fontFamily:"Georgia,serif", fontSize:"clamp(1.6rem,3vw,2.8rem)", maxWidth:"32rem", textAlign:"center", lineHeight:1.5, fontWeight:400 }}>
          Explore the intersection of editorial aesthetics and luxury precision.
        </h2>
      </section>
    </main>
  );
}
