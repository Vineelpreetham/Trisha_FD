"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";
import { GlowCard } from "@/components/ui/spotlight-card";

const collections = [
  {
    altTitle: "Chaos",
    subtitle: "Embracing the disorder:-",
    description: "An exploration into the beauty of disarray and raw emotion translated into form.",
    link: "/chaos",
    image: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775122831/Chaos_cover_photo_o6qqho.png",
    textColor: "text-white",
    align: "top"
  },
  {
    altTitle: "Tha Game of Night",
    subtitle: "After hours allure:-",
    description: "A sartorial journey capturing the mysterious, sophisticated energy of the twilight hours.",
    link: "/the-game-of-night",
    image: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775122895/WhatsApp_Image_2026-03-31_at_4.04.04_AM_kismao.jpg",
    textColor: "text-white",
    align: "bottom"
  }
];



const CollectionCard = ({ data, index }: { data: any, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
    className="w-full relative"
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

      {/* Category title overlapping the boundary with mix-blend-difference for dual-tone inversion */}
      <div className="absolute top-16 left-[-10%] md:left-[-20%] lg:left-[-25%] z-30 pointer-events-none mix-blend-difference text-white">
        <h2 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[0.9] opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          {data.altTitle.split(' ').map((word: string, i: number) => (
             <span key={i} className="block">{word}</span>
          ))}
        </h2>
      </div>

      {/* Clean, perfectly separated paragraph block stationed below the image to eliminate broken boundaries */}
      <div className="relative w-[95%] md:w-[90%] z-30 pointer-events-none text-left mt-8 pl-4 lg:pl-6 border-lborder-[#F3D5B5]/30">
        {data.subtitle && <h3 className="italic font-serif text-[#F3D5B5] text-lg md:text-xl xl:text-2xl font-medium tracking-wide mb-3 drop-shadow-sm">{data.subtitle}</h3>}
        {data.description && <p className="font-sans text-[#F2EBE5] text-sm md:text-[15px] font-light leading-[1.8] tracking-wider opacity-90 drop-shadow-sm">{data.description}</p>}
      </div>

    </Link>
  </motion.div>
);

export default function FashionNarrativesPage() {
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
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#2E2722_0%,_transparent_75%)]"></div>
      </div>

      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
        <Link href="/" className="pointer-events-auto font-sans text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
          ← Back
        </Link>
        <div className="font-serif text-sm tracking-widest hidden md:block">TRISHA VANAM.</div>
      </nav>

      {/* Increased padding safely bounds the text overhang without clipping */}
      <div className="w-full max-w-[1200px] mx-auto px-8 md:px-20 lg:px-32 mb-32 flex flex-col items-center">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="text-center w-full mb-20"
         >
           <h1 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tighter">Fashion Narratives</h1>
           <p className="mt-4 font-sans text-xs uppercase tracking-[0.3em] text-gray-400">The Visual Story</p>
         </motion.div>

         {/* 2 Grid Layout - Expanded Gaps for Editorial Whitespace */}
         <div className="w-full max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-center gap-x-8 md:gap-x-20 lg:gap-x-32 gap-y-32 relative px-4 md:px-0 mt-12 lg:mt-24 pb-32">
            
            {/* Column 1 */}
            <div className="w-full md:w-[45%] lg:w-[40%] relative z-10 transition-transform duration-700 hover:z-50">
               {collections[0] && <CollectionCard data={collections[0]} index={0} />}
            </div>
            
            {/* Column 2 */}
            <div className="w-full md:w-[45%] lg:w-[40%] relative z-20 transition-transform duration-700 hover:z-50 mt-12 md:mt-0">
               {collections[1] && <CollectionCard data={collections[1]} index={1} />}
            </div>

         </div>
      </div>

      <ContactFooter />
    </main>
  );
}
