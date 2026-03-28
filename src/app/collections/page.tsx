"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";
import { GlowCard } from "@/components/ui/spotlight-card";

const collections = [
  {
    altTitle: "Concept to collection",
    link: "/romantiques",
    image: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638081/romantiques_1_mtpnit.png",
    textColor: "text-white",
    align: "top"
  },
  {
    altTitle: "Brand Worlds",
    link: "/bloom",
    image: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638002/in_bloom_1_2_qwqaqp.png",
    textColor: "text-white",
    align: "bottom"
  },
  {
    altTitle: "Garment Construction",
    link: "/regilia",
    image: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774463609/2_o6af7u.png",
    textColor: "text-white",
    align: "bottom"
  },
  {
    altTitle: "Digital Fashion",
    link: "/",
    image: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774523650/IMG_4939_ldibj2.jpg",
    textColor: "text-white",
    align: "bottom"
  },
  {
    altTitle: "Inclusive Design",
    link: "/",
    image: "https://images.unsplash.com/photo-1550614000-4b95f463cb4e?q=80&w=800&auto=format&fit=crop",
    textColor: "text-white",
    align: "bottom"
  }
];

const WaveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
     <path strokeLinecap="round" strokeLinejoin="round" d="M4 12c3-4 5-4 8 0s5 4 8 0" />
  </svg>
);

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
        className="relative w-full aspect-[3/4] rounded-[40px] overflow-hidden border-[#1A1A1A] shadow-xl group-hover:shadow-2xl bg-gray-200 !p-0"
      >
        <img 
          src={data.image} 
          alt={data.altTitle} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 z-0" 
        />
        
        {/* Dimmer overlay for contrast */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 z-10" />
        
        {/* Top Right Icon (Moved to right since text is on the left edge) */}
        <div className={`absolute top-8 right-8 w-10 h-10 rounded-full border-2 border-white/50 flex flex-col items-center justify-center backdrop-blur-sm z-20 ${data.textColor}`}>
          <WaveIcon />
        </div>
      </GlowCard>

      {/* Floating Category Title perfectly overlapping the top-left edge */}
      {/* 50% translation on the left horizontally, overlapping the card's edge */}
      <div className="absolute top-12 left-0 -translate-x-[20%] md:-translate-x-[35%] z-30 pointer-events-none drop-shadow-2xl">
        <h2 className={`font-serif font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[0.9] text-white opacity-90 group-hover:opacity-100 transition-opacity duration-300`}>
          {data.altTitle.split(' ').map((word: string, i: number) => (
             <span key={i} className="block">{word}</span>
          ))}
        </h2>
      </div>

    </Link>
  </motion.div>
);

export default function CollectionsPage() {
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

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-32 flex flex-col items-center">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="text-center w-full mb-20"
         >
           <h1 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tighter">Collections</h1>
           <p className="mt-4 font-sans text-xs uppercase tracking-[0.3em] text-gray-400">The Anthology of Form</p>
         </motion.div>

         {/* 3 Column Staggered Grid to match Dribbble Reference exactly */}
         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-16 lg:gap-x-32 relative px-4 md:px-8">
            
            {/* Column 1: Left */}
            <div className="flex flex-col gap-y-20 md:gap-y-32 lg:translate-y-0">
               {collections[0] && <CollectionCard data={collections[0]} index={0} />}
               {collections[3] && <CollectionCard data={collections[3]} index={3} />}
            </div>
            
            {/* Column 2: Center - Staggered aggressively downwards to match visual identity */}
            <div className="flex flex-col gap-y-20 md:gap-y-32 lg:translate-y-32">
               {collections[1] && <CollectionCard data={collections[1]} index={1} />}
               {collections[4] && <CollectionCard data={collections[4]} index={4} />}
            </div>
            
            {/* Column 3: Right */}
            <div className="flex flex-col gap-y-20 md:gap-y-32 lg:translate-y-0">
               {collections[2] && <CollectionCard data={collections[2]} index={2} />}
               {collections[5] && <CollectionCard data={collections[5]} index={5} />}
            </div>

         </div>
      </div>

      <ContactFooter />
    </main>
  );
}
