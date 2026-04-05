"use client";
import Link from "next/link";
import Work from "@/components/Work";


import MobileNav from "@/components/MobileNav";

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
          font-family: "Playfair Display", serif;
          font-size: 10vw;
          color: rgba(30, 4, 6, 0.12);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 300;
        }
      ` }} />
      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 200, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "clamp(0.9rem,2vw,1.6rem) clamp(1.5rem,5vw,4rem)", mixBlendMode: "difference", color: "#fff" }}>
        <Link href="/" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)", fontWeight: 400, textDecoration: "none", color: "inherit", letterSpacing: "-0.02em" }}>Trisha Vanam.</Link>
        <div className="nav-desktop-links" style={{ display: "flex", gap: "clamp(1.5rem, 3.5vw, 4rem)", fontSize: "clamp(0.7rem, 0.9vw, 0.9rem)", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 500 }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
          <Link href="/about" style={{ textDecoration: "none", color: "inherit" }}>About</Link>
          <Link href="/collections" style={{ textDecoration: "none", color: "inherit" }}>Design Diary</Link>
          <Link href="/contact" style={{ textDecoration: "none", color: "inherit" }}>Contact</Link>
        </div>
        <MobileNav />
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
            <img src="/latest-model-cutout.webp" alt="model top"
              fetchPriority="high"
              decoding="async"
              style={{ 
                height: "200vh", width: "auto", maxWidth: "150%",
                objectFit: "contain",             
                objectPosition: "top center",   
                display: "block", 
                mixBlendMode: "normal",
                filter: "drop-shadow(0 10px 30px rgba(100,20,30,0.12))" 
              }} 
            />
          </div>
        </section>

        {/* ── FOLD 2: BOTTOM HALF IMAGE ── */}
        <section style={{ position: "absolute", top: "100vh", left: 0, width: "100%", height: "100vh", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, right: "10%", width: W, height: "100%", zIndex: 10, display: "flex", justifyContent: "center", pointerEvents: "none", overflow: "visible" }}>
            <img src="/latest-model-cutout.webp" alt="model bottom"
              loading="eager"
              decoding="async"
              style={{ 
                height: "200vh", width: "auto", maxWidth: "150%",
                objectFit: "contain",             
                objectPosition: "top center",
                transform: "translateY(-50%)",  
                display: "block",
                mixBlendMode: "normal",
                filter: "drop-shadow(0 10px 30px rgba(100,20,30,0.12))"
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

      {/* Seamless wave curve into Design Philosophy (Pulled up closer to Work) */}
      <div className="md:-mt-24 lg:-mt-32" style={{ width: "100%", overflow: "hidden", lineHeight: 0, background: "transparent", position: "relative", zIndex: 50 }}>
        {/* A trick to keep background solid without breaking the Work layout if they overlap */}
        <div className="absolute inset-0 bg-[#F8F6F2] -z-10 mt-20 md:mt-32"></div>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "clamp(100px, 14vw, 240px)" }}>
           <path d="M0,80 C360,200 1080,-20 1440,80 L1440,200 L0,200 Z" fill="#EB9394" />
        </svg>
      </div>

      {/* ── CREATIVE VISION SECTION (Deep Red Gradient) ── */}
      <section 
        className="flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-24"
        style={{ 
          background: "linear-gradient(180deg, #EB9394 0%, #A2252C 30%, #3d0a10 100%)", 
          padding: "4rem 8% 8rem 8%", 
          color: "#FDF8F7", 
          position: "relative", 
          zIndex: 50, 
          marginTop: "-2px" 
        }}
      >
         {/* Left Side: Curated Portrait Image */}
         <div className="w-full md:w-1/2 flex justify-center md:justify-end relative group px-6 md:px-0">
             {/* Decorative subtle frame offset */}
             <div className="absolute inset-0 bg-white/5 border border-white/20 translate-x-4 translate-y-4 rounded-lg pointer-events-none transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6 hidden md:block max-w-[520px] ml-auto"></div>
             
             <img 
                src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775372625/WhatsApp_Image_2026-04-05_at_9.45.11_AM_1_srnwmd.jpg" 
                alt="Creative Vision" 
                className="relative w-full max-w-[520px] h-auto object-cover rounded-lg shadow-2xl transition-transform duration-1000 group-hover:scale-[1.02]"
                style={{ filter: "drop-shadow(0 30px 50px rgba(20,2,5,0.6))" }} 
             />
         </div>
         
         {/* Right Side: Editorial Typography Workflow */}
         <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left mt-12 md:mt-0 relative px-4 md:px-0">
             
             <div className="relative w-full">
                 <h2 className="font-serif leading-[0.85] tracking-tighter relative z-10" style={{ fontSize: "clamp(4.5rem, 11vw, 8.5rem)", color: "#FFFFFF", textShadow: "0 10px 40px rgba(0,0,0,0.15)" }}>
                     Creative<br/>
                     <span className="italic font-light text-[#FFEFEF] pl-0 md:pl-20 mt-2 md:mt-[-0.1em] inline-block opacity-95">Vision.</span>
                 </h2>
             </div>
             
             {/* Text Paragraph */}
             <div className="relative mt-12 md:mt-16">
                 <p className="font-sans font-light text-[#FFFFFF] opacity-85 leading-[2.1] tracking-[0.03em] text-[15px] md:text-[16px] max-w-[480px]">
                     My design process is driven by storytelling and experimentation. I enjoy exploring forms, textures, prints, and silhouettes to create garments that feel expressive and distinctive.
                     <br/><br/>
                     Every piece I design is an opportunity to translate an idea or emotion into something tangible. Through thoughtful details and bold visual elements, I aim to create designs that are memorable, artistic, and deeply personal.
                 </p>
             </div>
         </div>
      </section>

      {/* Identical Smooth Srujana Bottom Wave */}
      <div style={{ width: "100%", overflow: "hidden", lineHeight: 0, background: "#FAFAFA", position: "relative", zIndex: 30 }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "clamp(60px, 8vw, 150px)", transform: "rotate(180deg)" }}>
           <path d="M0,60 C420,160 1020,-40 1440,60 L1440,120 L0,120 Z" fill="#3d0a10"></path>
        </svg>
      </div>

      {/* ── CURATED FRAGMENTS SECTION ── */}
      <section style={{ background: "#FAFAFA", padding: "2rem 8% 8rem 8%", fontFamily: "Inter, sans-serif" }}>
          <h3 style={{ fontSize: "1.2rem", letterSpacing: "0.1em", fontWeight: 400, marginBottom: "4rem", color: "#111", textAlign: "left" }}>CURATED FRAGMENTS</h3>
          <div style={{ display: "flex", gap: "2%", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
             {/* Card 1: Romantiques */}
             <Link href="/romantiques" className="hover-scale" style={{ flex: "1 1 300px", position: "relative", aspectRatio: "4/5", borderRadius: "12px", overflow: "hidden", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", transition: "transform 0.4s ease" }}>
                <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774523650/IMG_4940_wbkaih.jpg" style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="view-btn-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.3s ease" }}>
                   <span style={{ padding: "0.8rem 1.6rem", border: "1px solid #fff", color: "#fff", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.2em", background: "rgba(0,0,0,0.3)", opacity: 0, transition: "opacity 0.3s ease" }}>View Design</span>
                </div>
             </Link>
             {/* Card 2: Regalia */}
             <Link href="/regilia" className="hover-scale" style={{ flex: "1.2 1 350px", position: "relative", aspectRatio: "16/10", borderRadius: "12px", overflow: "hidden", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", transition: "transform 0.4s ease" }}>
                <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774523651/IMG_4938_2_pjueyo.png" style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="view-btn-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.3s ease" }}>
                   <span style={{ padding: "0.8rem 1.6rem", border: "1px solid #fff", color: "#fff", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.2em", background: "rgba(0,0,0,0.3)", opacity: 0, transition: "opacity 0.3s ease" }}>View Design</span>
                </div>
             </Link>
             {/* Card 3: In Bloom */}
             <Link href="/bloom" className="hover-scale" style={{ flex: "1 1 300px", position: "relative", aspectRatio: "4/5", borderRadius: "12px", overflow: "hidden", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", transition: "transform 0.4s ease" }}>
                <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1774523650/IMG_4939_ldibj2.jpg" style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="view-btn-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.3s ease" }}>
                   <span style={{ padding: "0.8rem 1.6rem", border: "1px solid #fff", color: "#fff", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.2em", background: "rgba(0,0,0,0.3)", opacity: 0, transition: "opacity 0.3s ease" }}>View Design</span>
                </div>
             </Link>
          </div>
      </section>
      

    </main>
  );
}
