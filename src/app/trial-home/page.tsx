"use client";
import Link from "next/link";
import Work from "@/components/Work";

const GR = [
  "radial-gradient(ellipse 70% 60% at 20% 10%, #E8D3CD 0%, transparent 60%)",
  "radial-gradient(ellipse 60% 50% at 80% 90%, #F5EAE8 0%, transparent 60%)",
  "linear-gradient(150deg, #EAE0DD 0%, #FAEFED 50%, #FFFFFF 100%)",
].join(", ");

const W = "clamp(340px, 45vw, 820px)";

export default function TrialHomePage() {
  return (
    <main style={{ fontFamily: "Inter,sans-serif", overflowX: "hidden", margin: 0, padding: 0 }}>
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
      ` }} />\n      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 200, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "clamp(0.9rem,2vw,1.6rem) clamp(1.5rem,5vw,4rem)", mixBlendMode: "difference", color: "#fff" }}>
        <Link href="/trial-home" style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)", fontWeight: 400, textDecoration: "none", color: "inherit", letterSpacing: "-0.02em" }}>Trisha.</Link>
                <div style={{ display: "flex", gap: "clamp(1.5rem, 3.5vw, 4rem)", fontSize: "clamp(0.7rem, 0.9vw, 0.9rem)", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 500 }}>
          <Link href="/trial-home" style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
          <Link href="/about" style={{ textDecoration: "none", color: "inherit" }}>About</Link>
          <Link href="/collections" style={{ textDecoration: "none", color: "inherit" }}>Design Collections</Link>
          <Link href="/contact" style={{ textDecoration: "none", color: "inherit" }}>Contact</Link>
        </div>
      </nav>

      {/* CONTINUOUS 200VH GRADIENT WRAPPER to mathematically eliminate any background seam */}
      <div style={{ position: "relative", width: "100%", height: "200vh", background: GR }}>
        
        {/* Editorial grain texture overlay for the rich painted gradient vibe */}
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset:0, width:"100%", height:"100%", opacity:0.35, mixBlendMode:"overlay", pointerEvents:"none", zIndex:1 }}>
          <filter id="hero-grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch"/></filter>
          <rect width="100%" height="100%" filter="url(#hero-grain)"/>
        </svg>

                {/* Cinematic Background Marquee (Animated) */}
        <div style={{ position: "absolute", top: "182vh", left: 0, width: "100%", overflow: "hidden", zIndex: 5, pointerEvents: "none", transform: "translateY(-50%)" }}>
          <div className="marquee-text" style={{ whiteSpace: "nowrap" }}>
            TRISHA VANAM &nbsp;&nbsp; TRISHA VANAM &nbsp;&nbsp; TRISHA VANAM &nbsp;&nbsp; TRISHA VANAM &nbsp;&nbsp; TRISHA VANAM &nbsp;&nbsp;
          </div>
        </div>
{/* ── FOLD 1: TOP HALF IMAGE ── */}
        <section style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100vh", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: "10%", width: W, height: "100%", zIndex: 10, display: "flex", justifyContent: "center", pointerEvents: "none", overflow: "visible" }}>
            <img src="/latest-model-cutout.png" alt="model top"
              style={{ 
                height: "200vh", width: "auto", maxWidth: "150%",
                objectFit: "contain",             
                objectPosition: "top center",   
                display: "block", 
                mixBlendMode: "normal",
                filter: "drop-shadow(0 0 25px rgba(234, 224, 221, 0.85)) drop-shadow(0 10px 40px rgba(100,20,30,0.15)) contrast(1.02) saturate(1.05)" 
              }} 
            />
          </div>
        </section>

        {/* ── FOLD 2: BOTTOM HALF IMAGE ── */}
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

        {/* ── UNIFIED SCROLLING TYPOGRAPHY OVERLAY (200vh) ── */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "200vh", zIndex: 20, pointerEvents: "none" }}>
            {/* Top Text Block (Fold 1) */}
            <div style={{ position: "absolute", top: "35vh", left: "6%", width: "clamp(300px, 35vw, 600px)" }}>
                <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.8rem)", color: "#1E0406", lineHeight: 1.4, fontWeight: 300, margin: 0 }}>
                    Global digital design studio partnering with brands and businesses that create exceptional experiences where people live, work, and unwind.
                </p>
            </div>
            {/* Giant Center Typography */}
            <div style={{ position: "absolute", top: "75vh", left: "0", width: "100%", paddingLeft: "4%" }}>
                <h1 style={{ fontSize: "19vw", fontWeight: 800, lineHeight: 0.85, letterSpacing: "-0.04em", color: "#1E0406", margin: 0, textTransform: "uppercase" }}>
                    Digital<br/>Design<br/>Experience
                </h1>
            </div>
            {/* Bottom Left Label */}
            <div style={{ position: "absolute", top: "185vh", left: "6%", color: "#1E0406", fontSize: "1rem", fontWeight: 600 }}>The Studio</div>
            {/* Bottom Right Links */}
            <div style={{ position: "absolute", top: "175vh", right: "6%", display: "flex", gap: "4rem", color: "#1E0406" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "1rem", opacity: 0.9 }}>
                    <span style={{ cursor: "pointer", pointerEvents: "auto" }}>Work</span>
                    <span style={{ cursor: "pointer", pointerEvents: "auto" }}>Studio</span>
                    <span style={{ cursor: "pointer", pointerEvents: "auto" }}>News</span>
                    <span style={{ cursor: "pointer", pointerEvents: "auto" }}>Contact</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "1rem", opacity: 0.9 }}>
                    <span>hello@exoape.com</span>
                    <span>+31 772 086 200</span>
                </div>
            </div>
        </div>
      </div>

      <Work />

      {/* Identical Smooth Srujana Top Wave - Blended Seam */}
      <div style={{ width: "100%", overflow: "hidden", lineHeight: 0, background: "transparent", marginTop: "-80px", position: "relative", zIndex: 30 }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "clamp(120px, 12vw, 240px)" }}>
           <path d="M0,60 C420,160 1020,-40 1440,60 L1440,120 L0,120 Z" fill="#70000e"></path>
        </svg>
      </div>

      {/* ── DESIGN PHILOSOPHY SECTION (Dark Ruby) ── */}
      <section style={{ background: "#70000E", padding: "6rem 8% 12rem 8%", color: "#FDF8F7", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "clamp(3rem, 6vw, 6rem)" }}>
         {/* Left Side: Editorial Image */}
         <div style={{ flex: "1 1 450px", position: "relative" }}>
             <img src="/home-in-bloom.jpg" alt="Design Philosophy" style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "2px", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3))" }} />
         </div>
         {/* Right Side: Typography & Button */}
         <div style={{ flex: "1 1 450px", display: "flex", flexDirection: "column", gap: "2.5rem", alignItems: "center", textAlign: "center", paddingTop: "2rem" }}>
             <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 400, letterSpacing: "0.02em", margin: 0 }}>Design Philosophy</h2>
             <p style={{ fontSize: "clamp(0.9rem, 1.2vw, 1rem)", lineHeight: 1.85, opacity: 0.9, maxWidth: "42ch", fontWeight: 300, letterSpacing: "0.02em", margin: 0 }}>
                 I like drawing inspiration from things I'm constantly surrounded by, an amusing story, a landscape, and mostly, emotion. I want my customer to feel empowered, happy, and beautiful in my designs.
             </p>
             <p style={{ fontSize: "clamp(0.9rem, 1.2vw, 1rem)", lineHeight: 1.85, opacity: 0.9, maxWidth: "48ch", fontWeight: 300, letterSpacing: "0.02em", margin: 0 }}>
                 Explore my collections/projects to look deeper into my mind and my creations! Let me take you on a rollercoaster ride through my journey in fashion design.
             </p>
             <Link href="/collections" style={{ marginTop: "1rem", padding: "1.2rem 3rem", background: "#FDF8F7", color: "#70000E", fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 600, borderRadius: "50px", textDecoration: "none", transition: "transform 0.3s ease", display: "inline-block" }}>
                 Explore Recent Collection
             </Link>
         </div>
      </section>

      {/* Identical Smooth Srujana Bottom Wave */}
      <div style={{ width: "100%", overflow: "hidden", lineHeight: 0, background: "#FAFAFA", marginTop: "-1px" }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "clamp(60px, 8vw, 150px)", transform: "rotate(180deg)" }}>
           <path d="M0,60 C420,160 1020,-40 1440,60 L1440,120 L0,120 Z" fill="#70000e"></path>
        </svg>
      </div>

      {/* ── CURATED FRAGMENTS SECTION ── */}
      <section style={{ background: "#FAFAFA", padding: "6rem 8% 12rem 8%", fontFamily: "Inter, sans-serif" }}>
          <h3 style={{ fontSize: "1.2rem", letterSpacing: "0.1em", fontWeight: 400, marginBottom: "4rem", color: "#111", textAlign: "left" }}>CURATED FRAGMENTS</h3>
          <div style={{ display: "flex", gap: "2%", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
             {/* Card 1: Romantiques */}
             <Link href="/romantique" className="hover-scale" style={{ flex: "1 1 300px", position: "relative", aspectRatio: "4/5", borderRadius: "12px", overflow: "hidden", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", transition: "transform 0.4s ease" }}>
                <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1774523650/IMG_4940_wbkaih.jpg" style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="view-btn-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.3s ease" }}>
                   <span style={{ padding: "0.8rem 1.6rem", border: "1px solid #fff", color: "#fff", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.2em", background: "rgba(0,0,0,0.3)", opacity: 0, transition: "opacity 0.3s ease" }}>Explore Collection</span>
                </div>
             </Link>
             {/* Card 2: Regalia */}
             <Link href="/regilia" className="hover-scale" style={{ flex: "1.2 1 350px", position: "relative", aspectRatio: "16/10", borderRadius: "12px", overflow: "hidden", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", transition: "transform 0.4s ease" }}>
                <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1774523651/IMG_4938_2_pjueyo.png" style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="view-btn-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.3s ease" }}>
                   <span style={{ padding: "0.8rem 1.6rem", border: "1px solid #fff", color: "#fff", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.2em", background: "rgba(0,0,0,0.3)", opacity: 0, transition: "opacity 0.3s ease" }}>View Collection</span>
                </div>
             </Link>
             {/* Card 3: In Bloom */}
             <Link href="/bloom" className="hover-scale" style={{ flex: "1 1 300px", position: "relative", aspectRatio: "4/5", borderRadius: "12px", overflow: "hidden", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", transition: "transform 0.4s ease" }}>
                <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1774523650/IMG_4939_ldibj2.jpg" style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="view-btn-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.3s ease" }}>
                   <span style={{ padding: "0.8rem 1.6rem", border: "1px solid #fff", color: "#fff", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.2em", background: "rgba(0,0,0,0.3)", opacity: 0, transition: "opacity 0.3s ease" }}>Explore Collection</span>
                </div>
             </Link>
          </div>
      </section>

    </main>
  );
}
