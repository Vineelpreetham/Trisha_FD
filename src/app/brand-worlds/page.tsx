"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { GlowCard } from "@/components/ui/spotlight-card";

const collections = [
  {
    altTitle: "Glossier",
    subtitle: "Skin-first storytelling —",
    description: "A Spring Red reimagining of Glossier's e-commerce experience — blending the brand's editorial DNA with a bold cherry palette, campaign-driven product grids, and effortless skin-first storytelling for SS 2025.",
    link: "/glossier",
    image: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496751/Screenshot_2026-04-06_at_12.24.56_AM_gry1ls.png",
    textColor: "text-white",
    align: "top"
  },
  {
    altTitle: "Trisha Vanam",
    subtitle: "A vision for the future —",
    description: "A brand built before its time — Trisha Vanam is a vision for the future, where every identity decision, from aesthetic to ethos, is laid with intention, ready for the moment it meets the world.",
    link: "/trisha-vanam",
    image: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496581/Screenshot_2026-04-06_at_12.09.59_AM_nzhob0.png",
    textColor: "text-white",
    align: "bottom"
  },
  {
    altTitle: "Chromatic Soul",
    subtitle: "The emotional language of colour —",
    description: "Every colour chosen with intention — a mood board series that maps the emotional language of what lives inside the mind, translating raw thoughts, feelings, and inner visions onto the page exactly as they appear.",
    link: "/chromatic-soul",
    image: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496708/WhatsApp_Image_2026-04-06_at_10.04.12_AM_egnif5.jpg",
    textColor: "text-white",
    align: "top"
  }
];

const CollectionCard = ({ data, index }: { data: any, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
    className="w-full relative transform-gpu"
  >
    <Link href={data.link} className="block w-full relative group cursor-pointer transition-all duration-500 hover:-translate-y-2">
      
      {/* Background/Image Card */}
      <GlowCard 
        customSize={true} 
        glowColor="blue"
        className="relative w-full aspect-[3/4] rounded-[40px] overflow-hidden shadow-xl group-hover:shadow-[0_20px_50px_rgba(255,255,255,0.1)] bg-transparent !p-0 z-10"
      >
        <img 
          src={data.image} 
          alt={data.altTitle} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 z-0" 
        />
      </GlowCard>

      {/* Category title — safe positioning to prevent mobile overflow */}
      <div className="absolute top-16 left-[4%] md:left-[-20%] lg:left-[-25%] z-30 pointer-events-none mix-blend-difference text-white">
        <h2 className="font-serif font-black text-3xl md:text-5xl lg:text-6xl tracking-tighter leading-[0.9] opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          {data.altTitle.split(' ').map((word: string, i: number) => (
             <span key={i} className="block">{word}</span>
          ))}
        </h2>
      </div>

      {/* Clean block below the image - No vertical line for a more minimal editorial look */}
      <div className="relative w-[95%] md:w-[90%] z-30 pointer-events-none text-left mt-10">
        {data.subtitle && <h3 className="italic font-serif text-[#F3D5B5] text-lg md:text-xl xl:text-2xl font-medium tracking-wide mb-4 drop-shadow-sm">{data.subtitle}</h3>}
        {data.description && <p className="font-sans text-[#F2EBE5] text-sm md:text-[15px] font-light leading-[1.8] tracking-wider opacity-90 drop-shadow-sm">{data.description}</p>}
      </div>

    </Link>
  </motion.div>
);

export default function BrandWorldsPage() {
  return (
    <main className="w-full min-h-screen bg-black text-white font-sans relative overflow-x-hidden pt-32 pb-4 selection:bg-[#D4C3B3] selection:text-black">
      
      {/* Home Page Gradient Blends (Top & Bottom) */}
      <div 
        className="absolute top-0 left-0 w-full h-[45vh] lg:h-[60vh] pointer-events-none z-0"
        style={{ background: "linear-gradient(to bottom, #FFF0F3 0%, rgba(255,240,243,0) 100%)" }}
      />
      <div 
        className="absolute bottom-0 left-0 w-full h-[45vh] lg:h-[60vh] pointer-events-none z-0"
        style={{ background: "linear-gradient(to top, #FFF0F3 0%, rgba(255,240,243,0) 100%)" }}
      />

      {/* Background subtle dark blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30 transform-gpu">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#2E2722_0%,_transparent_75%)]"></div>
      </div>

      <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-10 safe-top flex justify-between items-center mix-blend-difference text-white pointer-events-none transform-gpu">
        <Link href="/collections" className="pointer-events-auto font-sans text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity touch-target">
          ← Back
        </Link>
        <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1777072569/trisha_vanam_brand_identity_cemr1y.png" alt="Trisha Vanam" style={{ height: "18px", width: "auto", objectFit: "contain", filter: "invert(1)", mixBlendMode: "screen" }} className="hidden md:block" />
      </nav>

      {/* Header */}
      <div className="w-full max-w-[1200px] mx-auto px-8 md:px-20 lg:px-32 mb-32 flex flex-col items-center">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="text-center w-full mb-20"
         >
           <h1 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tighter">Brand Worlds</h1>
         </motion.div>

         {/* Staggered Grid Layout - Tighter Gaps for a Seamless Look */}
         <div className="w-full max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 lg:gap-x-24 gap-y-16 lg:gap-y-20 relative px-4 md:px-0 mt-12 lg:mt-24 pb-32">
            
            {collections.map((item, idx) => (
              <div 
                key={idx} 
                className={`w-full relative z-10 transition-transform duration-700 hover:z-50 ${idx % 2 !== 0 ? "md:translate-y-32" : ""}`}
              >
                 <CollectionCard data={item} index={idx} />
              </div>
            ))}

         </div>
      </div>

    </main>
  );
}
