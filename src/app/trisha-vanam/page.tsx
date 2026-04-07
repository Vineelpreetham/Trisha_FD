"use client";

import Link from "next/link";
import { ImageSwiper } from "@/components/ui/image-swiper";
import { motion } from "framer-motion";

const trishaVanamAssets = [
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496583/tv_1_zhefeq.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496583/tv_2_amyfyo.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496588/tv_3_b91qjh.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496588/tv_4_j1bjtv.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496588/tv_5_m9a313.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496589/tv_6_ayogby.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496592/tv_7_vtfgpj.png",
  "https://res.cloudinary.com/dbeh0eisn/video/upload/v1775496634/tv_7_yswzwb.mov",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496614/tv_8_rpe3x4.png",
  "https://res.cloudinary.com/dbeh0eisn/video/upload/v1775496655/tv_8_q5lt3d.mov",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496595/tv_9_ml4q0a.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496595/tv_10_uggkft.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496595/tv_11_zrf0mo.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496597/tv_12_gfdwzc.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496599/tv_13_pnyy6s.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496602/tv_14_vbh5qb.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496600/tv_15_l0ovou.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/v1775496603/tv_16_j561gv.png"
].join(",");

export default function TrishaVanamPage() {
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
        <Link href="/brand-worlds" className="pointer-events-auto font-sans text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
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
           <h1 className="text-5xl md:text-7xl font-serif font-black text-white tracking-tighter mix-blend-difference">Trisha Vanam</h1>
         </motion.div>

         {/* Image Swiper Component (Now supports videos) */}
         <ImageSwiper images={trishaVanamAssets} />
         
      </div>

    </main>
  );
}
