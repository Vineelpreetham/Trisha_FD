"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { GlowCard } from "@/components/ui/spotlight-card";

const collections = [
  {
    altTitle: "Metropolitan Memoirs",
    subtitle: "City life meets nostalgia —",
    description: "where city life meets the nostalgia of school hallways. Casual silhouettes, utility details, and a youthful energy that carries the warmth of high school days into the rhythm of modern urban living.",
    link: "/metropolitan-memoirs",
    image: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775500166/Screenshot_2026-04-05_at_6.34.14_PM_fwrfuo.png",
    textColor: "text-white",
    align: "top"
  },
  {
    altTitle: "Signature",
    subtitle: "Prints · Embroidery · Garments-",
    description: "Every print drawn, every thread placed, every silhouette conceived from within — a complete creative anthology that exists as proof of one designer's distinct and unapologetic voice.",
    link: "/signature",
    image: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775662824/Screenshot_2026-04-08_at_1.49.53_AM_ltaw6i.png",
    textColor: "text-white",
    align: "bottom"
  },
  {
    altTitle: "The Art of Fold",
    subtitle: "Technique in Motion —",
    description: "A study of form, fabric, and hand — every draping technique explored, refined, and documented as a designer's ongoing conversation with cloth.",
    link: "/the-art-of-fold",
    image: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775556215/the_art_of_fold_3_t1hxgo.png",
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

      {/* Clean block below image - No vertical line for a more minimal editorial look */}
      <div className="relative w-[95%] md:w-[90%] z-30 pointer-events-none text-left mt-10">
        {data.subtitle && <h3 className="italic font-serif text-[#F3D5B5] text-lg md:text-xl xl:text-2xl font-medium tracking-wide mb-4 drop-shadow-sm">{data.subtitle}</h3>}
        {data.description && <p className="font-sans text-[#F2EBE5] text-sm md:text-[15px] font-light leading-[1.8] tracking-wider opacity-90 drop-shadow-sm">{data.description}</p>}
      </div>

    </Link>
  </motion.div>
);

export default function ConstructedCraftPage() {
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

      {/* Background subtle dark blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30 transform-gpu">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#2E2722_0%,_transparent_75%)]"></div>
      </div>

      <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-10 safe-top flex justify-between items-center mix-blend-difference text-white pointer-events-none transform-gpu">
        <Link href="/collections" className="pointer-events-auto font-sans text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity touch-target">
          ← Back
        </Link>
        <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_200/v1777072569/trisha_vanam_brand_identity_cemr1y.png" alt="Trisha Vanam" style={{ height: "clamp(3.5rem, 6vw, 5rem)", width: "auto", objectFit: "contain", filter: "invert(1)", mixBlendMode: "screen" }} className="hidden md:block" />
      </nav>

      <div className="w-full max-w-[1200px] mx-auto px-8 md:px-20 lg:px-32 mb-32 flex flex-col items-center">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="text-center w-full mb-20"
         >
           <h1 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tighter">Constructed Craft</h1>
         </motion.div>

         {/* Staggered Grid Layout */}
         <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 lg:gap-x-24 gap-y-16 lg:gap-y-24 relative mt-8 lg:mt-12">
            
            {/* Row 1: 2 Items */}
            <div className="md:col-span-1 lg:translate-y-0 relative z-10 transition-transform duration-700 hover:z-50">
               {collections[0] && <CollectionCard data={collections[0]} index={0} />}
            </div>
            <div className="md:col-span-1 lg:translate-y-24 relative z-20 transition-transform duration-700 hover:z-50 mt-6 md:mt-0">
               {collections[1] && <CollectionCard data={collections[1]} index={1} />}
            </div>
            
            {/* Row 2: 1 Item (Centered) */}
            <div className="md:col-span-2 flex justify-center lg:translate-y-8 relative z-30 transition-transform duration-700 hover:z-50 mt-16 md:mt-12 lg:-mt-8 pb-32">
               <div className="w-full md:w-[60%] lg:w-[50%]">
                  {collections[2] && <CollectionCard data={collections[2]} index={2} />}
               </div>
            </div>

         </div>
      </div>

    </main>
  );
}
