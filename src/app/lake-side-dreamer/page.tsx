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
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30 transform-gpu">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#2E2722_0%,_transparent_75%)]"></div>
      </div>

      <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-10 safe-top flex justify-between items-center mix-blend-difference text-white pointer-events-none transform-gpu">
        <Link href="/digital-fashion" className="pointer-events-auto font-sans text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity touch-target">
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
         
         {/* Video Section */}
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="mt-24 mb-10 overflow-hidden shadow-2xl relative rounded-xl bg-black/20 mx-auto"
           style={{ height: "clamp(400px, 85vh, 900px)", maxWidth: "100%", aspectRatio: "9/16" }}
         >
           <video 
             src="https://res.cloudinary.com/dbeh0eisn/video/upload/v1775823173/IMG_7693_vhwiyb.mp4" 
             autoPlay 
             loop 
             muted 
             playsInline 
             className="w-full h-full object-cover"
           />
         </motion.div>

      </div>

      {/* Seamless Scroll Indicator (Fixed at bottom right) */}
      <div className="fixed bottom-6 md:bottom-12 right-6 md:right-10 z-50 flex flex-col items-center gap-4 pointer-events-none mix-blend-difference text-white transform-gpu">
        <span 
          className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.3em] rotate-90 origin-right translate-y-[-30px] md:translate-y-[-40px] opacity-70 whitespace-nowrap"
        >
          Scroll to explore
        </span>
        <div className="w-[1px] h-16 md:h-24 bg-white/20 relative overflow-hidden rounded-full mt-10 md:mt-16">
          <div 
            className="absolute top-0 left-0 w-full h-[50%] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{ animation: "scroll-drop 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite" }}
          />
        </div>
      </div>

      {/* Inline styles for custom scroll animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-drop {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          80% { transform: translateY(250%); opacity: 1; }
          100% { transform: translateY(300%); opacity: 0; }
        }
      `}} />

    </main>
  );
}
