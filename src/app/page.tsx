"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Work from "@/components/Work";
import ContactFooter from "@/components/ContactFooter";

const GR = [
  "linear-gradient(to bottom, #FFC4D1 0%, #FFF0F3 15%, rgba(251, 251, 251, 0) 25%)",
  "linear-gradient(to top, #FFC4D1 0%, #FFF0F3 15%, rgba(251, 251, 251, 0) 25%)",
  "#FBFBFB"
].join(", ");

const W = "clamp(340px, 45vw, 820px)";

// ─── Hamburger Menu (rendered only on mobile) ───
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/collections", label: "Design Collections" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div
      className="menu-overlay-enter"
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(10, 4, 6, 0.95)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: "2.5rem",
      }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close menu"
        style={{
          position: "absolute", top: "1.5rem", right: "1.5rem",
          background: "none", border: "none", color: "#fff",
          fontSize: "2rem", cursor: "pointer", padding: "0.5rem",
          fontFamily: "Inter, sans-serif", fontWeight: 300,
        }}
      >
        ✕
      </button>

      {/* Logo */}
      <div style={{ fontFamily: "Georgia, serif", fontSize: "1.2rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", marginBottom: "1rem" }}>
        Trisha Vanam.
      </div>

      {links.map((link, i) => (
        <Link
          key={link.href}
          href={link.href}
          className="menu-link-stagger"
          style={{
            animationDelay: `${0.1 + i * 0.08}s`,
            fontFamily: "Georgia, serif",
            fontSize: "1.8rem",
            color: "#FDF8F7",
            textDecoration: "none",
            letterSpacing: "0.05em",
            fontWeight: 300,
            textTransform: "lowercase" as const,
          }}
          onClick={onClose}
        >
          {link.label}
        </Link>
      ))}

      {/* Bottom decorative text */}
      <p style={{ position: "absolute", bottom: "2.5rem", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.2)", fontFamily: "Inter, sans-serif" }}>
        Fashion Design Portfolio
      </p>
    </div>
  );
}


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <main style={{ fontFamily: "Inter,sans-serif", margin: 0, padding: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .hover-scale:hover { transform: scale(1.02); }
        .hover-scale:hover .view-btn-overlay { background: rgba(0,0,0,0.2) !important; }
        .hover-scale:hover .view-btn-overlay span { opacity: 1 !important; }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-text {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 40s linear infinite;
          font-family: "Georgia", serif;
          font-size: 10vw;
          color: rgba(30, 4, 6, 0.12);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 300;
        }

        /* ── CSS-first responsive nav (no JS flash) ── */
        .nav-desktop-links { display: flex; }
        .nav-mobile-burger { display: none; }
        .home-nav { padding: clamp(0.9rem,2vw,1.6rem) clamp(1.5rem,5vw,4rem); }
        .home-nav .nav-logo { font-size: clamp(1.4rem, 2.8vw, 2.2rem); }

        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-mobile-burger { display: flex !important; }
          .home-nav { padding: 1rem 1.25rem; }
          .home-nav .nav-logo { font-size: 1.2rem; }
        }
      ` }} />

      {/* ═══ MOBILE HAMBURGER MENU ═══ */}
      {isMobile && <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />}

      {/* NAV — Both layouts rendered, CSS media queries handle visibility instantly */}
      <nav className="home-nav" style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 200, display: "flex", justifyContent: "space-between", alignItems: "center", mixBlendMode: "difference", color: "#fff" }}>
        <Link href="/" className="nav-logo" style={{ fontFamily: "Georgia,serif", fontWeight: 400, textDecoration: "none", color: "inherit", letterSpacing: "-0.02em" }}>Trisha Vanam.</Link>

        {/* Desktop: inline links — hidden on mobile via CSS */}
        <div className="nav-desktop-links" style={{ gap: "clamp(1.5rem, 3.5vw, 4rem)", fontSize: "clamp(0.7rem, 0.9vw, 0.9rem)", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 500 }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
          <Link href="/about" style={{ textDecoration: "none", color: "inherit" }}>About</Link>
          <Link href="/collections" style={{ textDecoration: "none", color: "inherit" }}>Design Collections</Link>
          <Link href="/contact" style={{ textDecoration: "none", color: "inherit" }}>Contact</Link>
        </div>

        {/* Mobile: hamburger icon — hidden on desktop via CSS */}
        <button
          className="nav-mobile-burger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          style={{
            background: "none", border: "none", cursor: "pointer", padding: "0.5rem",
            flexDirection: "column", gap: "5px",
          }}
        >
          <span style={{ display: "block", width: "22px", height: "1.5px", background: "#fff", borderRadius: "1px" }} />
          <span style={{ display: "block", width: "16px", height: "1.5px", background: "#fff", borderRadius: "1px" }} />
          <span style={{ display: "block", width: "22px", height: "1.5px", background: "#fff", borderRadius: "1px" }} />
        </button>
      </nav>

      {/* CONTINUOUS GRADIENT WRAPPER — 200vh desktop (parallax two-fold), 100vh mobile (single hero) */}
      <div style={{ position: "sticky", bottom: 0, width: "100%", height: isMobile ? "100vh" : "200vh", background: GR, zIndex: 10 }}>
        
        {/* Editorial grain texture overlay for the rich painted gradient vibe */}
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset:0, width:"100%", height:"100%", opacity:0.35, mixBlendMode:"overlay", pointerEvents:"none", zIndex:1 }}>
          <filter id="hero-grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch"/></filter>
          <rect width="100%" height="100%" filter="url(#hero-grain)"/>
        </svg>

        {/* Cinematic Background Marquee (Animated) */}
        <div style={{ position: "absolute", top: isMobile ? "82vh" : "182vh", left: 0, width: "100%", overflow: "hidden", zIndex: 25, pointerEvents: "none", transform: "translateY(-50%)" }}>
          <div className="marquee-text" style={{ whiteSpace: "nowrap", fontSize: isMobile ? "14vw" : undefined, color: isMobile ? "rgba(30, 4, 6, 0.18)" : undefined }}>
            TRISHA VANAM &nbsp;&nbsp; TRISHA VANAM &nbsp;&nbsp; TRISHA VANAM &nbsp;&nbsp; TRISHA VANAM &nbsp;&nbsp; TRISHA VANAM &nbsp;&nbsp;
          </div>
        </div>

        {/* ── FOLD 1: TOP HALF IMAGE ── */}
        <section style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100vh", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: isMobile ? "auto" : "10%", left: isMobile ? "50%" : "auto", transform: isMobile ? "translateX(-50%)" : "none", width: isMobile ? "85vw" : W, height: "100%", zIndex: 10, display: "flex", justifyContent: "center", pointerEvents: "none", overflow: "visible" }}>
            <img src="/latest-model-cutout.png" alt="model top"
              style={{ 
                height: isMobile ? "100vh" : "200vh", width: "auto", maxWidth: "150%",
                objectFit: "contain",             
                objectPosition: "top center",   
                display: "block", 
                mixBlendMode: "normal",
                filter: "drop-shadow(0 0 25px rgba(234, 224, 221, 0.85)) drop-shadow(0 10px 40px rgba(100,20,30,0.15)) contrast(1.02) saturate(1.05)" 
              }} 
            />
          </div>
        </section>

        {/* ── FOLD 2: BOTTOM HALF IMAGE (Desktop only) ── */}
        {!isMobile && (
          <section style={{ position: "absolute", top: "100vh", left: 0, width: "100%", height: "100vh", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: "10%", width: W, height: "100%", zIndex: 10, display: "flex", justifyContent: "center", pointerEvents: "none", overflow: "visible" }}>
              <img src="/latest-model-cutout.png" alt="model bottom"
                style={{ 
                  height: "200vh", width: "auto", maxWidth: "150%",
                  objectFit: "contain",             
                  objectPosition: "top center",
                  transform: "translateY(-50%)",  
                  display: "block",
                  mixBlendMode: "normal",
                  filter: "drop-shadow(0 0 25px rgba(234, 224, 221, 0.85)) drop-shadow(0 10px 40px rgba(100,20,30,0.15)) contrast(1.02) saturate(1.05)"
                }} 
              />
            </div>
          </section>
        )}

        {/* ── UNIFIED SCROLLING TYPOGRAPHY OVERLAY ── */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: isMobile ? "100vh" : "200vh", zIndex: 20, pointerEvents: "none" }}>
            {/* Top Link Block (Fold 1) */}
            <div style={{ position: "absolute", top: isMobile ? "65vh" : "35vh", left: "6%", pointerEvents: "auto", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <span style={{ fontSize: isMobile ? "1rem" : "clamp(1.2rem, 1.8vw, 1.8rem)", fontFamily: "Caveat, cursive", fontWeight: 500, color: "#6A5A55", letterSpacing: "0.02em" }}>
                    Welcome to my journey as a fashion designer,
                </span>
                <Link href="/about" className="hover-scale" style={{ display: "inline-block", fontSize: isMobile ? "1.8rem" : "clamp(2rem, 4.5vw, 4.5rem)", fontFamily: "Playfair Display, serif", fontStyle: "italic", color: "#1E0406", textDecoration: "none" }}>
                    About me...
                </Link>
            </div>

        </div>
      </div>

      {/* ── SEAMLESS HERO-TO-WORK BLEND ── */}
      <div style={{ position: "relative", zIndex: 40 }}>
        {/* Soft gradient fade from hero tones into Work background */}
        <div style={{ width: "100%", height: isMobile ? "40px" : "clamp(80px, 12vw, 180px)", background: "linear-gradient(to bottom, #FBFBFB 0%, #F8F6F2 100%)", position: "relative" }} />
        
        {/* Work section seamlessly continues */}
        <div style={{ position: "relative", zIndex: 40 }}>
           <Work />
        </div>
      </div>

      {/* Seamless wave curve into Design Philosophy */}
      <div style={{ width: "100%", overflow: "hidden", lineHeight: 0, background: "#F8F6F2", position: "relative", zIndex: 50, marginTop: "-2px" }}>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: isMobile ? "60px" : "clamp(100px, 14vw, 280px)" }}>
           <path d="M0,80 C360,200 1080,-20 1440,80 L1440,200 L0,200 Z" fill="#EB9394" />
        </svg>
      </div>

      {/* ── DESIGN PHILOSOPHY SECTION (Deep Red Gradient) ── */}
      <section style={{ background: "linear-gradient(to bottom, #EB9394 0%, #BE3536 40%, #8B191A 100%)", padding: isMobile ? "3rem 6% 5rem" : "6rem 8% 12rem 8%", color: "#FDF8F7", display: "flex", flexWrap: "wrap", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: "center", gap: isMobile ? "2rem" : "clamp(3rem, 6vw, 6rem)", position: "relative", zIndex: 50, marginTop: "-2px" }}>
         {/* Left Side: Editorial Image */}
         <div style={{ flex: "1 1 450px", position: "relative", maxWidth: isMobile ? "100%" : undefined }}>
             <img src="/home-in-bloom.jpg" alt="Design Philosophy" style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "2px", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))" }} />
         </div>
         {/* Right Side: Typography & Button */}
         <div style={{ flex: "1 1 450px", display: "flex", flexDirection: "column", gap: isMobile ? "1.5rem" : "2.5rem", alignItems: "center", textAlign: "center", paddingTop: isMobile ? "0" : "2rem" }}>
             <h2 style={{ fontFamily: "Georgia, serif", fontSize: isMobile ? "1.8rem" : "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 400, letterSpacing: "0.02em", margin: 0 }}>Design Philosophy</h2>
             <p style={{ fontSize: isMobile ? "0.85rem" : "clamp(0.9rem, 1.2vw, 1rem)", lineHeight: 1.85, opacity: 0.9, maxWidth: "42ch", fontWeight: 300, letterSpacing: "0.02em", margin: 0 }}>
                 I like drawing inspiration from things I'm constantly surrounded by, an amusing story, a landscape, and mostly, emotion. I want my customer to feel empowered, happy, and beautiful in my designs.
             </p>
             <p style={{ fontSize: isMobile ? "0.85rem" : "clamp(0.9rem, 1.2vw, 1rem)", lineHeight: 1.85, opacity: 0.9, maxWidth: "48ch", fontWeight: 300, letterSpacing: "0.02em", margin: 0 }}>
                 Explore my collections/projects to look deeper into my mind and my creations! Let me take you on a rollercoaster ride through my journey in fashion design.
             </p>
             <Link href="/collections" style={{ marginTop: "1rem", padding: isMobile ? "1rem 2.5rem" : "1.2rem 3rem", background: "#FDF8F7", color: "#70000E", fontSize: isMobile ? "0.7rem" : "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 600, borderRadius: "50px", textDecoration: "none", transition: "transform 0.3s ease", display: "inline-block", width: isMobile ? "100%" : "auto", textAlign: "center", boxSizing: "border-box" }}>
                 Explore Recent Collection
             </Link>
         </div>
      </section>

      {/* Identical Smooth Srujana Bottom Wave */}
      <div style={{ width: "100%", overflow: "hidden", lineHeight: 0, background: "#FAFAFA", position: "relative", zIndex: 30 }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: isMobile ? "40px" : "clamp(60px, 8vw, 150px)", transform: "rotate(180deg)" }}>
           <path d="M0,60 C420,160 1020,-40 1440,60 L1440,120 L0,120 Z" fill="#8B191A"></path>
        </svg>
      </div>

      {/* ── CURATED FRAGMENTS SECTION ── */}
      <section style={{ background: "#FAFAFA", padding: isMobile ? "3rem 5% 4rem" : "6rem 8% 12rem 8%", fontFamily: "Inter, sans-serif" }}>
          <h3 style={{ fontSize: isMobile ? "0.9rem" : "1.2rem", letterSpacing: "0.1em", fontWeight: 400, marginBottom: isMobile ? "2rem" : "4rem", color: "#111", textAlign: "left" }}>CURATED FRAGMENTS</h3>
          <div style={{ display: "flex", gap: isMobile ? "1.25rem" : "2%", flexWrap: "wrap", flexDirection: isMobile ? "column" : "row", alignItems: "center", justifyContent: "center" }}>
             {/* Card 1: Romantiques */}
             <Link href="/romantiques" className="hover-scale" style={{ flex: isMobile ? "none" : "1 1 300px", width: isMobile ? "100%" : undefined, position: "relative", aspectRatio: isMobile ? "16/10" : "4/5", borderRadius: "12px", overflow: "hidden", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", transition: "transform 0.4s ease" }}>
                <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1774523650/IMG_4940_wbkaih.jpg" style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="view-btn-overlay" style={{ position: "absolute", inset: 0, background: isMobile ? "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)" : "rgba(0,0,0,0)", display: "flex", alignItems: "flex-end", justifyContent: "center", transition: "background 0.3s ease", padding: isMobile ? "1.25rem" : "0" }}>
                   <span style={{ padding: "0.8rem 1.6rem", border: "1px solid #fff", color: "#fff", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.2em", background: "rgba(0,0,0,0.3)", opacity: isMobile ? 1 : 0, transition: "opacity 0.3s ease" }}>Explore Collection</span>
                </div>
             </Link>
             {/* Card 2: Regalia */}
             <Link href="/regilia" className="hover-scale" style={{ flex: isMobile ? "none" : "1.2 1 350px", width: isMobile ? "100%" : undefined, position: "relative", aspectRatio: "16/10", borderRadius: "12px", overflow: "hidden", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", transition: "transform 0.4s ease" }}>
                <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1774523651/IMG_4938_2_pjueyo.png" style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="view-btn-overlay" style={{ position: "absolute", inset: 0, background: isMobile ? "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)" : "rgba(0,0,0,0)", display: "flex", alignItems: "flex-end", justifyContent: "center", transition: "background 0.3s ease", padding: isMobile ? "1.25rem" : "0" }}>
                   <span style={{ padding: "0.8rem 1.6rem", border: "1px solid #fff", color: "#fff", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.2em", background: "rgba(0,0,0,0.3)", opacity: isMobile ? 1 : 0, transition: "opacity 0.3s ease" }}>View Collection</span>
                </div>
             </Link>
             {/* Card 3: In Bloom */}
             <Link href="/bloom" className="hover-scale" style={{ flex: isMobile ? "none" : "1 1 300px", width: isMobile ? "100%" : undefined, position: "relative", aspectRatio: isMobile ? "16/10" : "4/5", borderRadius: "12px", overflow: "hidden", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", transition: "transform 0.4s ease" }}>
                <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1774523650/IMG_4939_ldibj2.jpg" style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="view-btn-overlay" style={{ position: "absolute", inset: 0, background: isMobile ? "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)" : "rgba(0,0,0,0)", display: "flex", alignItems: "flex-end", justifyContent: "center", transition: "background 0.3s ease", padding: isMobile ? "1.25rem" : "0" }}>
                   <span style={{ padding: "0.8rem 1.6rem", border: "1px solid #fff", color: "#fff", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.2em", background: "rgba(0,0,0,0.3)", opacity: isMobile ? 1 : 0, transition: "opacity 0.3s ease" }}>Explore Collection</span>
                </div>
             </Link>
          </div>
      </section>
      <ContactFooter />

    </main>
  );
}
