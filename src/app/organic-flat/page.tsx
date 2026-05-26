"use client";

import StellarCardGallerySingle from "@/components/ui/3d-image-gallery";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OrganicFlatPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full min-h-screen bg-black text-white relative overflow-hidden selection:bg-[#D4C3B3] selection:text-black"
    >
      
      {/* Background Gradient Blends (Top & Bottom) */}
      <div 
        className="absolute top-0 left-0 w-full h-[20vh] lg:h-[25vh] pointer-events-none z-0 transform-gpu"
        style={{ background: "linear-gradient(to bottom, rgba(255,240,243,0.15) 0%, rgba(255,240,243,0) 100%)" }}
      />
      <div 
        className="absolute bottom-0 left-0 w-full h-[20vh] lg:h-[25vh] pointer-events-none z-0 transform-gpu"
        style={{ background: "linear-gradient(to top, rgba(255,240,243,0.15) 0%, rgba(255,240,243,0) 100%)" }}
      />

      {/* Background subtle dark blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-20 transform-gpu">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#2E2722_0%,_transparent_70%)]"></div>
      </div>

      <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-10 safe-top flex justify-between items-center mix-blend-difference text-white pointer-events-none transform-gpu">
        <Link href="/collections" className="pointer-events-auto font-sans text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity touch-target">
          ← Back
        </Link>
        <img src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_200/v1777072569/trisha_vanam_brand_identity_cemr1y.png" alt="Trisha Vanam" style={{ height: "clamp(3.5rem, 6vw, 5rem)", width: "auto", objectFit: "contain", filter: "invert(1)", mixBlendMode: "screen" }} className="hidden md:block" />
      </nav>

      {/* The 3D Gallery takes the full screen */}
      <StellarCardGallerySingle />
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
          <h1 className="text-4xl md:text-6xl font-serif font-black text-white tracking-tighter mix-blend-difference">Technical Flat</h1>
          <p className="text-sm opacity-70 mt-2 mix-blend-difference">Drag to explore • Scroll to zoom</p>
      </div>
    </motion.main>
  );
}
