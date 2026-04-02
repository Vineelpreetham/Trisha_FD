"use client";
import Link from "next/link";
import Work from "@/components/Work";
import ContactFooter from "@/components/ContactFooter";

const GR = [
  "linear-gradient(to bottom, #FFC4D1 0%, #FFF0F3 15%, rgba(251, 251, 251, 0) 25%)",
  "linear-gradient(to top, #FFC4D1 0%, #FFF0F3 15%, rgba(251, 251, 251, 0) 25%)",
  "#FBFBFB"
].join(", ");

const W = "clamp(340px, 45vw, 820px)";


export default function Home() {
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
      ` }} />
      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 200, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "clamp(0.9rem,2vw,1.6rem) clamp(1.5rem,5vw,4rem)", mixBlendMode: "difference", color: "#fff" }}>
        <Link href="/" style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)", fontWeight: 400, textDecoration: "none", color: "inherit", letterSpacing: "-0.02em" }}>Trisha Vanam.</Link>
                <div style={{ display: "flex", gap: "clamp(1.5rem, 3.5vw, 4rem)", fontSize: "clamp(0.7rem, 0.9vw, 0.9rem)", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 500 }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
          <Link href="/about" style={{ textDecoration: "none", color: "inherit" }}>About</Link>
          <Link href="/collections" style={{ textDecoration: "none", color: "inherit" }}>Collections</Link>
          <Link href="/contact" style={{ textDecoration: "none", color: "inherit" }}>Contact</Link>
        </div>
      </nav>

      {/* CONTINUOUS 200VH GRADIENT WRAPPER to mathematically eliminate any background seam */}
      <div style={{ position: "sticky", bottom: 0, width: "100%", height: "200vh", background: GR, zIndex: 10 }}>
        
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
            {/* Top Link Block (Fold 1) */}
            <div style={{ position: "absolute", top: "42vh", left: "8%", pointerEvents: "auto" }}>
                <Link href="/about" className="hover-scale" style={{ display: "inline-block", fontSize: "clamp(3.5rem, 7vw, 7rem)", fontFamily: "Playfair Display, serif", fontStyle: "italic", color: "#1E0406", textDecoration: "none", fontWeight: 400, letterSpacing: "-0.02em", opacity: 0.9 }}>
                    About me
                </Link>
            </div>
            {/* Giant Center Typography removed per user request */}

        </div>
      </div>

      {/* ── SEAMLESS HERO-TO-WORK BLEND ── */}
      <div style={{ position: "relative", zIndex: 40 }}>
        {/* Soft gradient fade from hero tones into Work background */}
        <div style={{ width: "100%", height: "clamp(80px, 12vw, 180px)", background: "linear-gradient(to bottom, #FBFBFB 0%, #F8F6F2 100%)", position: "relative" }} />
        
        {/* Work section seamlessly continues */}
        <div style={{ position: "relative", zIndex: 40 }}>
           <Work />
        </div>
      </div>

      {/* Seamless wave curve into Design Philosophy */}
      <div style={{ width: "100%", overflow: "hidden", lineHeight: 0, background: "#F8F6F2", position: "relative", zIndex: 50, marginTop: "-2px" }}>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "clamp(100px, 14vw, 280px)" }}>
           <path d="M0,80 C360,200 1080,-20 1440,80 L1440,200 L0,200 Z" fill="#EB9394" />
        </svg>
      </div>

      {/* ── CREATIVE VISION SECTION (Deep Red Gradient) ── */}
      <section style={{ background: "linear-gradient(to bottom, #EB9394 0%, #BE3536 40%, #8B191A 100%)", padding: "6rem 8% 12rem 8%", color: "#FDF8F7", display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(3rem, 6vw, 5rem)", position: "relative", zIndex: 50, marginTop: "-2px" }}>
         {/* Top Side: Landscape Editorial Image */}
         <div style={{ width: "90%", maxWidth: "900px", position: "relative" }}>
             <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1775143980/8_rbkynb.png" alt="Creative Vision" style={{ width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover", borderRadius: "8px", filter: "drop-shadow(0 25px 40px rgba(50,5,10,0.35))" }} />
         </div>
         
         {/* Bottom Side: Typography */}
         <div style={{ width: "100%", maxWidth: "800px", display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center", textAlign: "center" }}>
             <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2.5rem, 4.5vw, 4rem)", fontWeight: 400, letterSpacing: "0.02em", margin: 0 }}>Creative Vision</h2>
             <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)", lineHeight: 1.8, opacity: 0.95, maxWidth: "65ch", fontWeight: 300, letterSpacing: "0.03em", margin: 0 }}>
                 My design process is driven by storytelling and experimentation. I enjoy exploring forms, textures, prints, and silhouettes to create garments that feel expressive and distinctive.
                 <br/><br/>
                 Every piece I design is an opportunity to translate an idea or emotion into something tangible. Through thoughtful details and bold visual elements, I aim to create designs that are memorable, artistic, and deeply personal.
             </p>
         </div>
      </section>

      {/* Identical Smooth Srujana Bottom Wave */}
      <div style={{ width: "100%", overflow: "hidden", lineHeight: 0, background: "#FAFAFA", position: "relative", zIndex: 30 }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "clamp(60px, 8vw, 150px)", transform: "rotate(180deg)" }}>
           <path d="M0,60 C420,160 1020,-40 1440,60 L1440,120 L0,120 Z" fill="#8B191A"></path>
        </svg>
      </div>

      {/* ── CURATED FRAGMENTS SECTION ── */}
      <section style={{ background: "#FAFAFA", padding: "6rem 8% 12rem 8%", fontFamily: "Inter, sans-serif" }}>
          <h3 style={{ fontSize: "1.2rem", letterSpacing: "0.1em", fontWeight: 400, marginBottom: "4rem", color: "#111", textAlign: "left" }}>CURATED FRAGMENTS</h3>
          <div style={{ display: "flex", gap: "2%", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
             {/* Card 1: Romantiques */}
             <Link href="/romantiques" className="hover-scale" style={{ flex: "1 1 300px", position: "relative", aspectRatio: "4/5", borderRadius: "12px", overflow: "hidden", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", transition: "transform 0.4s ease" }}>
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
      <ContactFooter />

    </main>
  );
}
