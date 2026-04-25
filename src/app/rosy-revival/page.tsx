"use client";

import Link from "next/link";

import { ImageSwiper } from "@/components/ui/image-swiper";
import { motion } from "framer-motion";

const rosyPhotos = "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122969/rosy_revival_1_ulhpbn.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122972/rosy_revival_2_cmd9il.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122972/rosy_revival_3_ntiioj.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122972/rosy_revival_4_zl3iwb.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122972/rosy_revival_5_fzl6jp.png";

export default function RosyRevivalCollectionPage() {
  return (
    <main className="w-full min-h-screen bg-black text-white font-sans relative overflow-x-hidden pt-32 pb-4 selection:bg-[#D4C3B3] selection:text-black">
      
      {/* Background Gradient Blends (Top & Bottom) identical to Collections */}
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
        <Link href="/conscious-design" className="pointer-events-auto font-sans text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity touch-target">
          ← Back
        </Link>
        <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1777072569/trisha_vanam_brand_identity_cemr1y.png" alt="Trisha Vanam" style={{ height: "18px", width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }} className="hidden md:block" />
      </nav>

      {/* Header */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 lg:px-20 mb-20 flex flex-col items-center relative z-10">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="text-center w-full mb-16"
         >
           <h1 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tighter mix-blend-difference">Rosy Revival</h1>
         </motion.div>

         {/* Image Swiper Component */}
         <ImageSwiper images={rosyPhotos} />
         
      </div>

      
    </main>
  );
}
