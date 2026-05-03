"use client";

import Link from "next/link";

import { ImageSwiper } from "@/components/ui/image-swiper";
import { motion } from "framer-motion";

const metropolitanPhotos = "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775504191/1_xiocww.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775504184/2_iylzmy.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775504164/3_xfwc7u.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775504164/4_f0m3i9.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775504157/5_jjxavd.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775504164/6_huszng.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775504163/7_gagxp1.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775504165/8_x6inss.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775504167/9_p3z737.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775504183/10_jxjsdk.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775504174/11_gfkv75.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775504176/12_dinihr.png";

export default function MetropolitanMemoirsPage() {
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
        <Link href="/constructed-craft" className="pointer-events-auto font-sans text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity touch-target">
          ← Back
        </Link>
        <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_200/v1777072569/trisha_vanam_brand_identity_cemr1y.png" alt="Trisha Vanam" style={{ height: "clamp(3.5rem, 6vw, 5rem)", width: "auto", objectFit: "contain", filter: "invert(1)", mixBlendMode: "screen" }} className="hidden md:block" />
      </nav>

      {/* Header */}
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 lg:px-20 mb-20 flex flex-col items-center relative z-10">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="text-center w-full mb-16"
         >
           <h1 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tighter mix-blend-difference">Metropolitan Memoirs</h1>
         </motion.div>

         {/* Image Swiper Component */}
         <ImageSwiper images={metropolitanPhotos} />
         
      </div>

      
    </main>
  );
}
