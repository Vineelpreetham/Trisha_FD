"use client";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import Work (Three.js/R3F moodboard) — prevents ~200KB of 3D code from blocking initial load
const Work = dynamic(() => import("@/components/Work"), {
  ssr: false,
  loading: () => <section className="w-full h-[100vh] bg-[#F8F6F2]" />
});

import MobileNav from "@/components/MobileNav";

// Dynamically import WebGL smoke — prevents shader code from blocking initial bundle
const SmokeBackground = dynamic(
  () => import("@/components/ui/spooky-smoke-animation").then(mod => ({ default: mod.SmokeBackground })),
  { ssr: false, loading: () => <div className="w-full h-full" style={{ background: "#F8F6F2" }} /> }
);

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

        /* Navigation Responsive Logic */
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-burger-container { display: none !important; }
        }

        /* Mobile Adjustments for Spacing */
        @media (max-width: 768px) {
          .marquee-container {
            top: 118vh !important; /* Moved down below the model's feet */
            z-index: 15 !important;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.0) 100%) !important;
            backdrop-filter: blur(12px) !important;
            -webkit-backdrop-filter: blur(12px) !important;
            border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.01) !important;
            padding: 1.5rem 0 !important;
          }
          .marquee-text {
            font-size: clamp(3.5rem, 8vw, 6rem) !important;
            color: rgba(255, 255, 255, 0.9) !important;
            text-shadow: 0 2px 10px rgba(255, 255, 255, 0.2) !important;
          }
          .hero-to-work-blend {
            margin-top: -76vh !important; /* Snapped perfectly right after the marquee with no gap */
          }
          .about-link-overlay {
            display: none !important;
          }
        }

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
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 300;
        }
      ` }} />
      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 200, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "clamp(0.9rem,2vw,1.6rem) clamp(1.5rem,5vw,4rem)", mixBlendMode: "difference", color: "#fff", transform: "translateZ(0)" }}>
        <Link href="/" style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)", fontWeight: 400, textDecoration: "none", color: "inherit", letterSpacing: "-0.02em" }}>Trisha Vanam.</Link>
        <div className="nav-desktop-links" style={{ display: "flex", gap: "clamp(1.5rem, 3.5vw, 4rem)", fontSize: "clamp(0.7rem, 0.9vw, 0.9rem)", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 500 }}>
          <Link href="/" className="touch-target transition-transform duration-300 ease-out hover:scale-110 active:scale-95 inline-block" style={{ textDecoration: "none", color: "inherit" }}>Home</Link>
          <Link href="/about" className="touch-target transition-transform duration-300 ease-out hover:scale-110 active:scale-95 inline-block" style={{ textDecoration: "none", color: "inherit" }}>About</Link>
          <Link href="/collections" className="touch-target transition-transform duration-300 ease-out hover:scale-110 active:scale-95 inline-block" style={{ textDecoration: "none", color: "inherit" }}>Design Diary</Link>
          <Link href="/contact" className="touch-target transition-transform duration-300 ease-out hover:scale-110 active:scale-95 inline-block" style={{ textDecoration: "none", color: "inherit" }}>Contact</Link>
        </div>
        <div className="nav-mobile-burger-container touch-target">
          <MobileNav />
        </div>
      </nav>

      {/* CONTINUOUS GRADIENT WRAPPER */}
      <div className="hero-200vh-wrapper" style={{ position: "sticky", bottom: 0, width: "100%", height: "200vh", background: "#F8F6F2", zIndex: 10 }}>
        
        {/* Desktop: WebGL smoke | Mobile: static gradient */}
        <div className="smoke-container" style={{ position: "sticky", top: 0, width: "100%", height: "100vh", zIndex: 0, overflow: "hidden" }}>
          <SmokeBackground smokeColor="#e8b4b4" />
        </div>
        <div className="mobile-hero-gradient" style={{ display: "none" }} />
        <div className="noise-overlay" style={{ position: "absolute", inset:0, width:"100%", height:"100%", zIndex:1 }}></div>

                {/* Cinematic Background Marquee (Animated) */}
        <div className="marquee-container" style={{ position: "absolute", top: "176vh", left: 0, width: "100%", overflow: "hidden", zIndex: 5, pointerEvents: "none", transform: "translateY(-50%)" }}>
          <div className="marquee-text" style={{ whiteSpace: "nowrap", fontSize: "clamp(4rem, 10vw, 8rem)" }}>
            TRISHA VANAM &nbsp;&nbsp; TRISHA VANAM &nbsp;&nbsp; TRISHA VANAM &nbsp;&nbsp; TRISHA VANAM &nbsp;&nbsp; TRISHA VANAM &nbsp;&nbsp;
          </div>
        </div>

        {/* ── GIANT TYPOGRAPHY BACKGROUND ── */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", overflow: "hidden", zIndex: 5, pointerEvents: "none" }}>
          <h1 className="giant-trisha-text" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(12rem, 28vw, 60rem)", lineHeight: 0.8, whiteSpace: "nowrap", color: "rgba(255, 255, 255, 0.45)", textTransform: "uppercase", letterSpacing: "0.02em" }}>TRISHA</h1>
        </div>

{/* ── FOLD 1: TOP HALF IMAGE ── */}
        <section className="hero-model-section" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100vh", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, margin: "0 auto", width: W, height: "100%", zIndex: 10, display: "flex", justifyContent: "center", pointerEvents: "none", overflow: "visible" }}>
            <img src="/latest-model-cutout.webp" alt="Trisha Vanam fashion model cutout"
              fetchPriority="high"
              decoding="async"
              width={820}
              height={1640}
              style={{ 
                height: "200vh", width: "auto", maxWidth: "150%",
                objectFit: "contain",             
                objectPosition: "top center",   
                transform: "translateZ(0)",
                display: "block", 
                mixBlendMode: "normal",
                filter: "drop-shadow(0 10px 30px rgba(100,20,30,0.12))"
              }} 
            />
          </div>
        </section>

        {/* ── FOLD 2: BOTTOM HALF IMAGE ── */}
        <section className="hero-model-bottom" style={{ position: "absolute", top: "100vh", left: 0, width: "100%", height: "100vh", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, margin: "0 auto", width: W, height: "100%", zIndex: 10, display: "flex", justifyContent: "center", pointerEvents: "none", overflow: "visible" }}>
            <img src="/latest-model-cutout.webp" alt="Trisha Vanam fashion model"
              loading="eager"
              decoding="async"
              width={820}
              height={1640}
              style={{ 
                height: "200vh", width: "auto", maxWidth: "150%",
                objectFit: "contain",             
                objectPosition: "top center",
                transform: "translateY(-50%) translateZ(0)",  
                display: "block",
                mixBlendMode: "normal",
                filter: "drop-shadow(0 10px 30px rgba(100,20,30,0.12))"
              }} 
            />
          </div>
        </section>

        {/* ── UNIFIED SCROLLING TYPOGRAPHY OVERLAY (200vh) ── */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "200vh", zIndex: 20, pointerEvents: "none" }}>
            {/* Stylish About Me — sits on top of the TR in TRISHA */}
            <div className="about-link-overlay" style={{ position: "absolute", top: "50vh", left: "22%", pointerEvents: "auto", transform: "translate(-50%, -50%)" }}>
                <Link href="/about" className="group" style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", textDecoration: "none", gap: "0.4rem" }}>
                    <span style={{ fontSize: "clamp(0.55rem, 0.7vw, 0.75rem)", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(30, 4, 6, 0.5)", fontFamily: "Inter, sans-serif", fontWeight: 500, transition: "color 0.4s ease" }} className="group-hover:!text-[#1E0406]">
                        Discover
                    </span>
                    <span style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 400, color: "#1E0406", lineHeight: 0.95, letterSpacing: "-0.02em", transition: "transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.4s ease", opacity: 0.85 }} className="group-hover:translate-x-2 group-hover:!opacity-100">
                        About me
                    </span>
                    <div style={{ width: "3rem", height: "1px", background: "rgba(30, 4, 6, 0.25)", marginTop: "0.3rem", transition: "width 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), background 0.4s ease" }} className="group-hover:!w-[6rem] group-hover:!bg-[#1E0406]" />
                </Link>
            </div>

        </div>
      </div>

      {/* ── SEAMLESS CURVED HERO-TO-WORK BLEND ── */}
      <div className="hero-to-work-blend" style={{
        position: "relative", zIndex: 40, marginTop: "-20vh", background: "#FFFFFF",
        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 200' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,80 C360,200 1080,-20 1440,80 L1440,200 L0,200 Z' fill='black'/%3E%3C/svg%3E"), linear-gradient(black, black)`,
        WebkitMaskSize: "100% clamp(100px, 14vw, 240px), 100% calc(100% - clamp(100px, 14vw, 240px) + 2px)",
        WebkitMaskPosition: "top center, bottom center",
        WebkitMaskRepeat: "no-repeat",
        maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 200' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,80 C360,200 1080,-20 1440,80 L1440,200 L0,200 Z' fill='black'/%3E%3C/svg%3E"), linear-gradient(black, black)`,
        maskSize: "100% clamp(100px, 14vw, 240px), 100% calc(100% - clamp(100px, 14vw, 240px) + 2px)",
        maskPosition: "top center, bottom center",
        maskRepeat: "no-repeat"
      }}>
        {/* Work section seamlessly continues */}
        <div style={{ position: "relative", zIndex: 40 }}>
           <Work />
        </div>
      </div>

      {/* Seamless wave curve into Design Philosophy (Pulled up closer to Work) */}
      <div className="md:-mt-24 lg:-mt-32 outline-none" style={{ width: "100%", overflow: "hidden", lineHeight: 0, background: "transparent", position: "relative", zIndex: 50 }}>
        {/* A trick to keep background solid without breaking the Work layout if they overlap */}
        <div className="absolute inset-0 bg-[#F8F6F2] -z-10 -top-[2px] md:mt-32"></div>
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
                src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1775372625/WhatsApp_Image_2026-04-05_at_9.45.11_AM_1_srnwmd.jpg" 
                alt="Trisha Vanam creative vision portrait" 
                loading="lazy"
                decoding="async"
                width={520}
                height={650}
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
      <div style={{ width: "100%", overflow: "hidden", lineHeight: 0, background: "#FAFAFA", position: "relative", zIndex: 30, marginTop: "-2px" }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "clamp(60px, 8vw, 150px)", transform: "rotate(180deg)" }}>
           <path d="M0,60 C420,160 1020,-40 1440,60 L1440,120 L0,120 Z" fill="#3d0a10"></path>
        </svg>
      </div>

      {/* ── TOP PICKS SECTION ── */}
      <section style={{ background: "#FAFAFA", padding: "2rem 0 8rem 0", fontFamily: "Inter, sans-serif" }}>
          <h3 style={{ fontSize: "1.2rem", letterSpacing: "0.1em", fontWeight: 400, marginBottom: "4rem", color: "#111", textAlign: "left", padding: "0 8%" }}>TOP PICKS</h3>
          
          <div className="flex md:flex-wrap md:justify-center items-center gap-6 md:gap-[2%] overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar w-full px-[8%] pb-8 md:pb-0">
             {/* Card 1: Romantiques */}
             <Link href="/romantiques?from=home" className="hover-scale min-w-[84vw] md:min-w-[300px] snap-center" style={{ flex: "1 1 300px", position: "relative", aspectRatio: "4/5", borderRadius: "12px", overflow: "hidden", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", transition: "transform 0.4s ease" }}>
                <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_600/v1774523650/IMG_4940_wbkaih.jpg" alt="Romantiques fashion collection" loading="lazy" decoding="async" width={600} height={750} style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="view-btn-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", transition: "background 0.3s ease" }}>
                   <span style={{ padding: "0.8rem 1.6rem", border: "1px solid #fff", color: "#fff", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.2em", background: "rgba(0,0,0,0.3)", opacity: 0, transition: "opacity 0.3s ease" }}>View Design</span>
                </div>
             </Link>
             {/* Card 2: Regalia */}
             <Link href="/regalia?from=home" className="hover-scale min-w-[84vw] md:min-w-[350px] snap-center" style={{ flex: "1.2 1 350px", position: "relative", aspectRatio: "16/10", borderRadius: "12px", overflow: "hidden", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", transition: "transform 0.4s ease" }}>
                <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_700/v1774523651/IMG_4938_2_pjueyo.png" alt="Regalia couture collection" loading="lazy" decoding="async" width={700} height={438} style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="view-btn-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", transition: "background 0.3s ease" }}>
                   <span style={{ padding: "0.8rem 1.6rem", border: "1px solid #fff", color: "#fff", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.2em", background: "rgba(0,0,0,0.3)", opacity: 0, transition: "opacity 0.3s ease" }}>View Design</span>
                </div>
             </Link>
             {/* Card 3: In Bloom */}
             <Link href="/bloom?from=home" className="hover-scale min-w-[84vw] md:min-w-[300px] snap-center" style={{ flex: "1 1 300px", position: "relative", aspectRatio: "4/5", borderRadius: "12px", overflow: "hidden", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", transition: "transform 0.4s ease" }}>
                <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_600/v1774523650/IMG_4939_ldibj2.jpg" alt="In Bloom floral fashion collection" loading="lazy" decoding="async" width={600} height={750} style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="view-btn-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", transition: "background 0.3s ease" }}>
                   <span style={{ padding: "0.8rem 1.6rem", border: "1px solid #fff", color: "#fff", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.2em", background: "rgba(0,0,0,0.3)", opacity: 0, transition: "opacity 0.3s ease" }}>View Design</span>
                </div>
             </Link>
          </div>
      </section>
      
      {/* ── SEAMLESS CURVE INTO FOOTER ── */}
      <div style={{ width: "100%", overflow: "hidden", lineHeight: 0, background: "#F0EBE1", position: "relative", zIndex: 30, marginTop: "-2px" }}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "clamp(50px, 6vw, 100px)" }}>
           <path d="M0,70 C420,-30 1020,170 1440,70 L1440,0 L0,0 Z" fill="#FAFAFA"></path>
        </svg>
      </div>

    </main>
  );
}
