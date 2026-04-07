"use client";

import Link from "next/link";
import { ImageSwiper } from "@/components/ui/image-swiper";
import { motion } from "framer-motion";

const lakesideDreamerPhotos = [
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775498682/WhatsApp_Image_2026-04-06_at_11.11.33_AM_imgtuw.jpg",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775498661/WhatsApp_Image_2026-04-06_at_11.11.33_AM_1_kwgtj7.jpg",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775498665/WhatsApp_Image_2026-04-06_at_11.11.33_AM_2_qnjp4l.jpg",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775498668/WhatsApp_Image_2026-04-06_at_11.11.33_AM_3_szqdth.jpg",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775498670/WhatsApp_Image_2026-04-06_at_11.11.33_AM_4_cxwdof.jpg",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775498675/WhatsApp_Image_2026-04-06_at_11.11.33_AM_5_a5vi3h.jpg",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775498677/WhatsApp_Image_2026-04-06_at_11.11.33_AM_6_nsvlqw.jpg"
].join(",");

export default function LakesideDreamerPage() {
  return (
    <main className="w-full min-h-screen bg-black text-white font-sans relative overflow-x-hidden pt-32 pb-4 selection:bg-[#D4C3B3] selection:text-black">
      
      {/* Background Gradient Blends */}
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
        <Link href="/digital-fashion" className="pointer-events-auto font-sans text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
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
           <h1 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tighter mix-blend-difference">The Lake Side Dreamer</h1>
         </motion.div>

         {/* Image Swiper Component */}
         <ImageSwiper images={lakesideDreamerPhotos} />
         
      </div>

    </main>
  );
}
