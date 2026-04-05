"use client";

import Link from "next/link";

import { ImageSwiper } from "@/components/ui/image-swiper";
import { motion } from "framer-motion";

const chaosPhotos = "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122831/chaos_1_wc56t3.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122832/chaos_2_ijqewg.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122831/chaos_3_fvnj8k.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122831/chaos_4_ph7mc5.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122833/chaos_5_fngufv.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122830/chaos_6_grjmra.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122830/chaos_7_m2kdxe.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122832/chaos_8_vpkxie.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122832/chaos_9_rl0n7z.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122832/chaos_10_i39imq.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122832/chaos_11_cjhmf9.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122833/chaos_12_ipv1qo.png,https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122835/chaos_13_czaea9.png";

export default function ChaosCollectionPage() {
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
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#2E2722_0%,_transparent_75%)]"></div>
      </div>

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
           <h1 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tighter mix-blend-difference">Chaos</h1>
           <p className="mt-4 font-sans text-xs uppercase tracking-[0.3em] text-gray-400">The 2026 Collection</p>
         </motion.div>

         {/* Image Swiper Component */}
         <ImageSwiper images={chaosPhotos} />
         
      </div>

      
    </main>
  );
}
