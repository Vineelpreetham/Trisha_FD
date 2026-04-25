"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { GlowCard } from "@/components/ui/spotlight-card";

const collections = [
  {
    altTitle: "Adaptive Fashion",
    subtitle: "Adaptive Fashion —",
    description: "Fashion was never meant to have a guest list — yet for too long, it did. Adaptive design rewrites that rule. Clothing that fits the person, not the other way around.",
    link: "/adaptive-design",
    image: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775490189/Screenshot_2026-04-05_at_2.33.34_PM_cgejd5.png",
    textColor: "text-white",
    align: "top"
  },
  {
    altTitle: "Rosy Revival",
    subtitle: "Rosy Revival —",
    description: "bioplastic innovation meets radical self-expression. Wear it, transform it, begin again.",
    link: "/rosy-revival",
    image: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775372627/Screenshot_2026-04-05_at_12.00.54_AM_pxrb18.png",
    textColor: "text-white",
    align: "bottom"
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

export default function ConsciousDesignPage() {
  return (
    <main className="w-full min-h-screen bg-black text-white font-sans relative overflow-x-hidden pt-32 pb-4 selection:bg-[#D4C3B3] selection:text-black">
      
      {/* Background Gradients */}
      <div 
        className="absolute top-0 left-0 w-full h-[45vh] lg:h-[60vh] pointer-events-none z-0"
        style={{ background: "linear-gradient(to bottom, #FFF0F3 0%, rgba(255,240,243,0) 100%)" }}
      />
      <div 
        className="absolute bottom-0 left-0 w-full h-[45vh] lg:h-[60vh] pointer-events-none z-0"
        style={{ background: "linear-gradient(to top, #FFF0F3 0%, rgba(255,240,243,0) 100%)" }}
      />

      {/* Background blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30 transform-gpu">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#2E2722_0%,_transparent_75%)]"></div>
      </div>

      <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-10 safe-top flex justify-between items-center mix-blend-difference text-white pointer-events-none transform-gpu">
        <Link href="/collections" className="pointer-events-auto font-sans text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity touch-target">
          ← Back
        </Link>
        <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1777072569/trisha_vanam_brand_identity_cemr1y.png" alt="Trisha Vanam" style={{ height: "clamp(3.5rem, 6vw, 5rem)", width: "auto", objectFit: "contain", filter: "invert(1)", mixBlendMode: "screen" }} className="hidden md:block" />
      </nav>

      <div className="w-full max-w-[1200px] mx-auto px-8 md:px-20 lg:px-32 mb-32 flex flex-col items-center">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="text-center w-full mb-20"
         >
           <h1 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tighter">Conscious Design</h1>
         </motion.div>

         {/* Staggered Grid Layout */}
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
