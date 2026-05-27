"use client";

import { useState } from "react";
import { CircularGallery, GalleryItem } from "@/components/ui/circular-gallery-2";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X, ZoomIn, ZoomOut } from "lucide-react";

/* ─── All 57 fashion flat images (Cloudinary Optimized with w_800 for high resolution inspection) ─── */
const IMAGES = [
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811488/5_qnibol_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811479/10_d22yqx_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811471/8_wf9ymg_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811463/11_jnfcmt_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811455/13_aj4nsk_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811447/12_u3e61c_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811440/9_bxw8eq_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811431/14_qhrd6u_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811423/15_eekgho_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811415/16_fnpigv_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811408/7_qwhoh6_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811399/19_sbradd_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811390/21_lqqan2_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811381/18_bgmneg_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811371/17_dyifhr_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811364/22_h4fvov_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811355/23_lrnduc_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811345/20_rtaydw_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811337/24_tudzj5_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811329/27_ubttqr_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811321/29_y2r5gz_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811313/28_wgyeqo_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811305/30_xk5aea_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811297/25_ez9erz_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811286/31_dnjm2k_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811276/26_llyngy_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811269/32_sju3ve_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811260/33_wmaasv_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811252/35_uygeju_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811243/36_uy9k3j_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811235/38_neqt9j_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811227/39_zr6ex5_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811219/34_uyle01_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811210/40_e9wxbt_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811201/6_v23ewm_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811194/42_jzd1wb_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811188/45_rnccws_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811180/46_d80bbz_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811172/47_vuwo9h_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811163/41_oygowc_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811155/48_c3rxxm_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811149/43_fgcm5s_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811140/49_qxj2ip_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811134/44_oqzbnp_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811129/51_uhbai0_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811122/53_cv1kog_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811112/52_jou9ux_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811104/55_lxtc5y_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811096/56_prh46a_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811089/57_t6ufff_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811080/50_wmni4f_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811074/54_jhxiif_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811062/59_tgz6eu_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811053/60_roaac9_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811044/58_goolgw_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811035/37_x9r87u_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_800/v1779811026/61_qlxqeq_475a40.png",
];

/* Split images into 3 rows for the circular gallery (displaying all 57) */
const ROW1 = IMAGES.slice(0, 19);
const ROW2 = IMAGES.slice(19, 38);
const ROW3 = IMAGES.slice(38, 57);

export default function TechFlatPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
    setIsZoomed(false);
  };

  return (
    <>
      <style>{`
        /* Smooth fade-in backdrop */
        .modal-backdrop {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        
        /* Disable standard scroll behaviors to maintain full focus in modal */
        .modal-open {
          overflow: hidden;
        }

        /* Beautiful text-shadow effects for high-end feel */
        .gold-glow {
          text-shadow: 0 0 40px rgba(212, 195, 179, 0.15);
        }
      `}</style>

      <main
        className="w-full min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0F0E0D] to-[#050505] selection:bg-[#D4C3B3] selection:text-black text-[#F2EBE5]"
      >
        {/* ── Background Subtle Blobs ── */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-25">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#2E2722_0%,_transparent_65%)]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#1E1916] blur-[120px] opacity-30" />
        </div>

        {/* ── Nav ── */}
        <nav className="fixed top-0 left-0 w-full z-40 px-8 py-6 md:px-12 flex justify-between items-center pointer-events-none mix-blend-difference">
          <Link
            href="/collections"
            className="pointer-events-auto font-sans text-[11px] uppercase tracking-[0.25em] text-[#D4C3B3]/60 hover:text-[#D4C3B3] transition-colors"
          >
            ← Back
          </Link>
          <img
            src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_200/v1777072569/trisha_vanam_brand_identity_cemr1y.png"
            alt="Trisha Vanam"
            className="hidden md:block pointer-events-none filter invert"
            style={{ height: "clamp(3rem, 5vw, 4.5rem)", width: "auto", objectFit: "contain", mixBlendMode: "screen" }}
          />
        </nav>

        {/* ── Content Wrapper ── */}
        <div className="w-full flex flex-col items-center justify-between min-h-screen relative z-10 py-12 md:py-16">

          {/* Header/Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col items-center text-center pointer-events-none px-6 mt-12 md:mt-8"
          >
            <h1
              className="font-serif font-black text-[#F2EBE5] leading-none tracking-tighter gold-glow"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.8rem)" }}
            >
              Tech Flat
            </h1>
            <p
              className="font-sans text-[#D4C3B3]/50 mt-4 max-w-lg leading-relaxed uppercase tracking-[0.18em]"
              style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.72rem)" }}
            >
              precision spec archive • click to inspect
            </p>
          </motion.div>

          {/* ── 3 Circular Gallery Rows (Visual wall of technical precision) ── */}
          <div className="relative z-10 w-full flex flex-col gap-2 md:gap-4 my-auto py-8">
            
            {/* Row 1 */}
            <div className="w-full h-[24vh] min-h-[170px] overflow-hidden text-[#D4C3B3]">
              <CircularGallery
                items={ROW1.map((image, i) => ({ image, text: `Spec ${i + 1}` }))}
                bend={4}
                borderRadius={0.03}
                scrollEase={0.035}
                scrollDirection="left"
                onItemClick={handleItemClick}
              />
            </div>

            {/* Row 2 */}
            <div className="w-full h-[24vh] min-h-[170px] overflow-hidden text-[#D4C3B3]">
              <CircularGallery
                items={ROW2.map((image, i) => ({ image, text: `Spec ${i + 20}` }))}
                bend={-4}
                borderRadius={0.03}
                scrollEase={0.035}
                scrollDirection="right"
                onItemClick={handleItemClick}
              />
            </div>

            {/* Row 3 */}
            <div className="w-full h-[24vh] min-h-[170px] overflow-hidden text-[#D4C3B3]">
              <CircularGallery
                items={ROW3.map((image, i) => ({ image, text: `Spec ${i + 39}` }))}
                bend={4}
                borderRadius={0.03}
                scrollEase={0.035}
                scrollDirection="left"
                onItemClick={handleItemClick}
              />
            </div>

          </div>

          {/* Instruction Footer */}
          <div className="w-full text-center pointer-events-none opacity-40 font-sans text-[10px] uppercase tracking-[0.25em] text-[#D4C3B3]">
            drag to spin • scroll to zoom gallery
          </div>

        </div>

        {/* ── Edge Gradients for Cinematic Depth ── */}
        <div
          className="absolute top-0 left-0 h-full w-12 md:w-32 pointer-events-none z-20"
          style={{ background: "linear-gradient(to right, #0F0E0D, transparent)" }}
        />
        <div
          className="absolute top-0 right-0 h-full w-12 md:w-32 pointer-events-none z-20"
          style={{ background: "linear-gradient(to left, #0F0E0D, transparent)" }}
        />

        {/* ── Elegant Backdrop Blur Modal for Spec Inspection ── */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 modal-backdrop p-4 md:p-8"
              onClick={() => setSelectedItem(null)}
            >
              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.94, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.94, y: 15, opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                className="relative max-w-4xl w-full max-h-[85vh] rounded-[24px] bg-[#0A0A09]/95 border border-[#D4C3B3]/10 p-6 md:p-10 flex flex-col items-center shadow-[0_30px_70px_rgba(0,0,0,0.8)]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-5 right-5 text-[#D4C3B3]/60 hover:text-[#D4C3B3] hover:bg-white/5 rounded-full p-2.5 transition-all duration-300 z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Zoom Toggle Controls */}
                <button
                  onClick={() => setIsZoomed((z) => !z)}
                  className="absolute top-5 left-5 text-[#D4C3B3]/60 hover:text-[#D4C3B3] hover:bg-white/5 rounded-full p-2.5 transition-all duration-300 z-10 hidden sm:flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-sans"
                >
                  {isZoomed ? (
                    <>
                      <ZoomOut className="w-4 h-4" /> Normal
                    </>
                  ) : (
                    <>
                      <ZoomIn className="w-4 h-4" /> Zoom spec
                    </>
                  )}
                </button>

                {/* Display Image with Containment */}
                <div 
                  className="w-full flex-1 overflow-auto flex items-center justify-center p-2 mt-4 max-h-[60vh] select-none"
                  style={{ scrollbarWidth: "none" }}
                >
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.text}
                    className={`max-w-full max-h-full rounded-lg object-contain bg-black/40 p-4 transition-transform duration-500 ease-out ${
                      isZoomed ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"
                    }`}
                    onClick={() => setIsZoomed((z) => !z)}
                    draggable={false}
                  />
                </div>

                {/* Footer specs inside modal */}
                <div className="w-full mt-6 text-center border-t border-[#D4C3B3]/5 pt-4">
                  <h3 className="font-serif text-[#F2EBE5] text-lg font-medium tracking-wide">
                    {selectedItem.text}
                  </h3>
                  <p className="font-sans text-[10px] text-[#D4C3B3]/40 uppercase tracking-widest mt-1">
                    Technical spec drawing • Trisha Vanam Archive
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
