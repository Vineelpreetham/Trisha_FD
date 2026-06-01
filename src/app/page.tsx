"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import CinematicHero from "@/components/CinematicHero";
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from "@/components/ui/carousel";

const roundGalleryImages = [
  { id: "1", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/e_make_transparent:10,f_auto,q_auto,w_2400/v1780076844/1_sqqlsc.png", alt: "Garment 1", rotation: -12 },
  { id: "2", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/e_make_transparent:10,f_auto,q_auto,w_2400/v1780076844/2_qvcc0d.png", alt: "Garment 2", rotation: 8 },
  { id: "3", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/e_make_transparent:10,f_auto,q_auto,w_2400/v1780076845/3_f7aqcm.png", alt: "Garment 3", rotation: -5 },
  { id: "4", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/e_make_transparent:10,f_auto,q_auto,w_2400/v1780076846/4_dtxfyc.png", alt: "Garment 4", rotation: 15 },
  { id: "5", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/e_make_transparent:10,f_auto,q_auto,w_2400/v1780076847/5_efgsjs.png", alt: "Garment 5", rotation: -10 },
  { id: "6", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/e_make_transparent:10,f_auto,q_auto,w_2400/v1780076848/6_u9yn37.png", alt: "Garment 6", rotation: 5 },
  { id: "7", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/e_make_transparent:10,f_auto,q_auto,w_2400/v1780076849/7_nysfn3.png", alt: "Garment 7", rotation: -15 },
  { id: "8", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/e_make_transparent:10,f_auto,q_auto,w_2400/v1780076852/9_o2m6nf.png", alt: "Garment 8", rotation: 10 },
  { id: "9", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/e_make_transparent:10,f_auto,q_auto,w_2400/v1780076853/10_yga3lk.png", alt: "Garment 9", rotation: -8 },
  { id: "10", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/e_make_transparent:10,f_auto,q_auto,w_2400/v1780076856/11_jdq9ji.png", alt: "Garment 10", rotation: 12 },
  { id: "11", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/e_make_transparent:10,f_auto,q_auto,w_2400/v1780076856/12_c0wm7l.png", alt: "Garment 11", rotation: -5 },
  { id: "12", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/e_make_transparent:10,f_auto,q_auto,w_2400/v1780076857/13_p1zpd8.png", alt: "Garment 12", rotation: 14 },
  { id: "13", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/e_make_transparent:10,f_auto,q_auto,w_2400/v1780076858/14_vie4lz.png", alt: "Garment 13", rotation: -12 },
  { id: "14", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/e_make_transparent:10,f_auto,q_auto,w_2400/v1780076860/15_gimiat.png", alt: "Garment 14", rotation: 7 },
];

// Dynamically import Work (Three.js/R3F moodboard) — prevents ~200KB of 3D code from blocking initial load
const Work = dynamic(() => import("@/components/Work"), {
  ssr: false,
  loading: () => <section className="w-full h-[100vh] bg-[#F8F6F2]" />
});


export default function Home() {
  const LOOP_COUNT = 8; 
  const INITIAL_START_SET = 4; 
  const infiniteGalleryImages = Array.from({ length: LOOP_COUNT }).flatMap((_, loopIdx) =>
    roundGalleryImages.map((img) => ({ ...img, uniqueId: `${img.id}-${loopIdx}` }))
  );
  const initialCarouselIndex = INITIAL_START_SET * roundGalleryImages.length;

  const [cloIndex, setCloIndex] = useState(initialCarouselIndex);
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
        
        /* Collection Cards Responsive Logic */
        .collection-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          transition: transform 0.4s ease;
          flex: 0 0 84vw;
        }
        .collection-card img {
          display: block;
          width: 100%;
          height: auto;
        }
        @media (min-width: 768px) {
          .collection-card {
            flex: 1 1 300px;
          }
          .collection-card.card-regalia {
            flex: 1.2 1 350px;
          }
          .collection-card.aspect-4-5 { aspect-ratio: 4/5; }
          .collection-card.aspect-16-10 { aspect-ratio: 16/10; }
          .collection-card img {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            object-fit: cover;
          }
        }
      ` }} />

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 200, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "clamp(0.9rem,2vw,1.6rem) clamp(1.5rem,5vw,4rem)", mixBlendMode: "difference", color: "#fff", transform: "translateZ(0)" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img 
            src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1777072569/trisha_vanam_brand_identity_cemr1y.png" 
            alt="Trisha Vanam" 
            style={{ 
              height: "clamp(3.5rem, 6vw, 5rem)", 
              width: "auto",
              filter: "invert(1)" /* Inverts white bg to black, which difference mode treats as transparent */
            }} 
          />
        </Link>
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

      {/* ── CINEMATIC HERO ── */}
      <CinematicHero />

      {/* ── SEAMLESS BLEND TO WORK ── */}
      <div className="work-wrapper" style={{
        position: "relative", 
        zIndex: 40, 
        marginTop: "-15vh", 
        background: "#FFFFFF", 
      }}>
        <Work />
      </div>

      {/* Seamless arch curve into Design Philosophy (Pulled up closer to Work) */}
      <div className="md:-mt-24 lg:-mt-32 outline-none" style={{ width: "100%", overflow: "visible", lineHeight: 0, background: "#FFFFFF", position: "relative", zIndex: 50 }}>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "clamp(120px, 18vw, 280px)" }}>
           <path d="M0,320 Q720,-50 1440,320 L1440,320 L0,320 Z" fill="#904336" />
        </svg>
        {/* Anti-alias gap filler to prevent background bleeding */}
        <div style={{ position: "absolute", bottom: "-1px", left: 0, width: "100%", height: "3px", background: "#904336", zIndex: 10 }}></div>
      </div>

      {/* ── CREATIVE VISION SECTION (Dark Theme) ── */}
      <section 
        className="flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-24"
        style={{ 
          background: "linear-gradient(180deg, #904336 0%, #4A1B1C 100%)",
          padding: "2rem 8% 4rem 8%", 
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
                src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1775372625/WhatsApp_Image_2026-04-05_at_9.45.11_AM_1_srnwmd.jpg" 
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
                 <h2 className="font-serif leading-[0.85] tracking-tighter relative z-10" style={{ fontSize: "clamp(4.5rem, 11vw, 8.5rem)", color: "#E8CE73", textShadow: "0 10px 40px rgba(0,0,0,0.15)" }}>
                     Creative<br/>
                     <span className="italic font-light text-[#E8CE73] pl-0 md:pl-20 mt-2 md:mt-[-0.1em] inline-block opacity-95">Vision.</span>
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

      {/* Arch into Clo Library */}
      <div style={{
        width: "100%",
        overflow: "visible",
        lineHeight: 0,
        background: "#4A1B1C",
        position: "relative",
        zIndex: 32,
        marginTop: "-2px",
        marginBottom: "-2px",
      }}>
        <svg
          viewBox="0 0 1440 322"
          preserveAspectRatio="none"
          style={{
            display: "block",
            width: "100%",
            height: "clamp(100px, 15vw, 220px)",
          }}
        >
           <path d="M0,322 Q720,-320 1440,322 L1440,322 L0,322 Z" fill="#FFFFFF" />
        </svg>
        {/* Anti-alias gap filler to prevent background bleeding */}
        <div style={{ position: "absolute", bottom: "-1px", left: 0, width: "100%", height: "3px", background: "#FFFFFF", zIndex: 10 }}></div>
        
        {/* Integrated Heading on the Curve */}
        <div style={{
          position: "absolute",
          top: "80%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          textAlign: "center",
          zIndex: 40,
        }}>
          <h2 className="font-serif text-5xl md:text-8xl text-[#1A1A1A] leading-[0.9] text-center opacity-90 tracking-tight" 
              style={{
                textShadow: "0 4px 30px rgba(255,255,255,0.6)"
              }}>
            Clo Library
          </h2>
        </div>
      </div>

      {/* ── CLO LIBRARY & TOP PICKS SECTION ── */}
      <section style={{ background: "#FFFFFF", padding: "0 0 4rem 0", fontFamily: "Inter, sans-serif", position: "relative", zIndex: 31, marginTop: "-2px" }}>
          
          {/* ── CLO LIBRARY CAROUSEL ── */}
          <div className="mb-2 md:mb-4 px-[3%] overflow-visible">
  <div className="relative w-full max-w-7xl mx-auto pt-4 md:pt-6 pb-0 md:pb-0 -mt-2 md:-mt-4">
    <Carousel loop={false} initialIndex={initialCarouselIndex} onIndexChange={(i) => setCloIndex(i)}>
      <CarouselContent>
        {infiniteGalleryImages.map((image, i) => {
          const isCenter = i === cloIndex + 1;
          return (
            <CarouselItem key={image.uniqueId} className="basis-1/3 pl-0 md:pl-2 overflow-visible">
              <div
                className="relative w-full group cursor-pointer"
                style={{
                  aspectRatio: "2/3",
                  maxWidth: "520px",
                  transform: isCenter ? "scale(2.35)" : "scale(0.9)",
                  opacity: isCenter ? 1 : 0.5,
                  zIndex: isCenter ? 10 : 1,
                  transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1), opacity 0.5s ease",
                  willChange: "transform",
                }}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-contain transition-opacity duration-500 ease-out"
                            style={{
                              maxWidth: "520px",
                              filter: isCenter
                                ? "drop-shadow(0 20px 40px rgba(0,0,0,0.35))"
                                : "drop-shadow(0 8px 16px rgba(0,0,0,0.15))",
                            }}
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselNavigation
                  className="absolute left-[-2%] top-1/2 w-[104%] -translate-y-1/2"
                  classNameButton="bg-white/90 shadow-lg backdrop-blur-sm border border-black/5 hover:bg-white"
                  alwaysShow
                />
              </Carousel>
            </div>
          </div>

          {/* ── GRADIENT LENS DIVIDER ── */}
          <div style={{ position: "relative", width: "100%", marginTop: "-4.5rem", marginBottom: "3rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <svg viewBox="0 0 1440 40" style={{ width: "85%", height: "40px", opacity: 0.85, overflow: "visible" }}>
              <defs>
                <linearGradient id="lensGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#904336" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#904336" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#4A1B1C" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path d="M0,20 Q720,40 1440,20 Q720,0 0,20 Z" fill="url(#lensGradient)" />
            </svg>
          </div>

          <h3 className="font-serif text-5xl md:text-7xl text-[#1A1A1A] leading-[0.9] text-center opacity-80" style={{ marginBottom: "1.5rem", marginTop: "1rem", position: "relative", zIndex: 2 }}>Top Picks.</h3>
          
          <div className="flex md:flex-wrap md:justify-center items-center gap-6 md:gap-[2%] overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar w-full px-[8%] pb-8 md:pb-0">
             {/* Card 1: Romantiques */}
             <Link href="/romantiques?from=home" className="collection-card aspect-4-5 hover-scale snap-center">
                <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1200/v1774523650/IMG_4940_wbkaih.jpg" alt="Romantiques fashion collection" loading="lazy" decoding="async" width={600} height={750} />
                <div className="view-btn-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", transition: "background 0.3s ease" }}>
                   <span style={{ padding: "0.8rem 1.6rem", border: "1px solid #fff", color: "#fff", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.2em", background: "rgba(0,0,0,0.3)", opacity: 0, transition: "opacity 0.3s ease" }}>View Design</span>
                </div>
             </Link>
             {/* Card 2: Regalia */}
             <Link href="/regalia?from=home" className="collection-card card-regalia aspect-16-10 hover-scale snap-center">
                <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1400/v1774523651/IMG_4938_2_pjueyo.png" alt="Regalia couture collection" loading="lazy" decoding="async" width={700} height={438} />
                <div className="view-btn-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", transition: "background 0.3s ease" }}>
                   <span style={{ padding: "0.8rem 1.6rem", border: "1px solid #fff", color: "#fff", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.2em", background: "rgba(0,0,0,0.3)", opacity: 0, transition: "opacity 0.3s ease" }}>View Design</span>
                </div>
             </Link>
             {/* Card 3: In Bloom */}
             <Link href="/bloom?from=home" className="collection-card aspect-4-5 hover-scale snap-center">
                <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1200/v1774523650/IMG_4939_ldibj2.jpg" alt="In Bloom floral fashion collection" loading="lazy" decoding="async" width={600} height={750} />
                <div className="view-btn-overlay" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center", transition: "background 0.3s ease" }}>
                   <span style={{ padding: "0.8rem 1.6rem", border: "1px solid #fff", color: "#fff", textTransform: "uppercase", fontSize: "0.7rem", letterSpacing: "0.2em", background: "rgba(0,0,0,0.3)", opacity: 0, transition: "opacity 0.3s ease" }}>View Design</span>
                </div>
             </Link>
          </div>
      </section>
      


    </main>
  );
}
