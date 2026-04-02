"use client";

import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";
import { ImageSwiper } from "@/components/ui/image-swiper";
import { motion } from "framer-motion";

const gameOfNightPhotos = "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775122895/WhatsApp_Image_2026-03-31_at_4.04.04_AM_1_lobkxd.jpg,https://res.cloudinary.com/dbeh0eisn/image/upload/v1775122900/WhatsApp_Image_2026-03-31_at_4.04.05_AM_xbkt0k.jpg,https://res.cloudinary.com/dbeh0eisn/image/upload/v1775122896/WhatsApp_Image_2026-03-31_at_4.04.05_AM_1_vkv99m.jpg,https://res.cloudinary.com/dbeh0eisn/image/upload/v1775122897/WhatsApp_Image_2026-03-31_at_4.04.05_AM_2_zw5nze.jpg,https://res.cloudinary.com/dbeh0eisn/image/upload/v1775122898/WhatsApp_Image_2026-03-31_at_4.04.05_AM_3_yjyzqj.jpg,https://res.cloudinary.com/dbeh0eisn/image/upload/v1775122898/WhatsApp_Image_2026-03-31_at_4.04.05_AM_4_z8s6tm.jpg,https://res.cloudinary.com/dbeh0eisn/image/upload/v1775122898/WhatsApp_Image_2026-03-31_at_4.04.05_AM_5_x2jwza.jpg,https://res.cloudinary.com/dbeh0eisn/image/upload/v1775122898/WhatsApp_Image_2026-03-31_at_4.04.05_AM_6_bbeyph.jpg,https://res.cloudinary.com/dbeh0eisn/image/upload/v1775122899/WhatsApp_Image_2026-03-31_at_4.04.05_AM_7_ttqe0n.jpg";

export default function GameOfNightPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-[#e2d1cf] via-[#a69795] to-[#4d4542] text-white font-sans relative overflow-x-hidden pt-32 pb-4 selection:bg-[#D4C3B3] selection:text-black">
      
      {/* Black gradient on top and bottom */}
      <div 
        className="fixed top-0 left-0 w-full h-[30vh] lg:h-[40vh] pointer-events-none z-0"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)" }}
      />
      <div 
        className="fixed bottom-0 left-0 w-full h-[30vh] lg:h-[40vh] pointer-events-none z-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)" }}
      />

      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
        <Link href="/fashion-narratives" className="pointer-events-auto font-sans text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
          ← Back
        </Link>
        <div className="font-serif text-sm tracking-widest hidden md:block">TRISHA VANAM.</div>
      </nav>

      {/* Header */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 lg:px-20 mb-20 flex flex-col items-center relative z-10">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="text-center w-full mb-16"
         >
           <h1 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tighter mix-blend-difference">Tha Game of Night</h1>
           <p className="mt-4 font-sans text-xs uppercase tracking-[0.3em] text-gray-400">After hours allure</p>
         </motion.div>

         {/* Image Swiper Component reusing the seamless layout established in Chaos */}
         <ImageSwiper images={gameOfNightPhotos} />
         
      </div>

      <ContactFooter />
    </main>
  );
}
