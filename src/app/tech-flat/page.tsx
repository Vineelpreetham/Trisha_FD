"use client";

import { CircularGallery } from "@/components/ui/circular-gallery-2";
import { motion } from "framer-motion";
import Link from "next/link";

/* ─── All 57 fashion flat images ─── */
const IMAGES = [
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811488/5_qnibol_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811479/10_d22yqx_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811471/8_wf9ymg_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811463/11_jnfcmt_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811455/13_aj4nsk_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811447/12_u3e61c_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811440/9_bxw8eq_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811431/14_qhrd6u_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811423/15_eekgho_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811415/16_fnpigv_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811408/7_qwhoh6_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811399/19_sbradd_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811390/21_lqqan2_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811381/18_bgmneg_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811371/17_dyifhr_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811364/22_h4fvov_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811355/23_lrnduc_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811345/20_rtaydw_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811337/24_tudzj5_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811329/27_ubttqr_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811321/29_y2r5gz_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811313/28_wgyeqo_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811305/30_xk5aea_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811297/25_ez9erz_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811286/31_dnjm2k_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811276/26_llyngy_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811269/32_sju3ve_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811260/33_wmaasv_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811252/35_uygeju_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811243/36_uy9k3j_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811235/38_neqt9j_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811227/39_zr6ex5_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811219/34_uyle01_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811210/40_e9wxbt_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811201/6_v23ewm_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811194/42_jzd1wb_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811188/45_rnccws_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811180/46_d80bbz_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811172/47_vuwo9h_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811163/41_oygowc_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811155/48_c3rxxm_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811149/43_fgcm5s_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811140/49_qxj2ip_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811134/44_oqzbnp_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811129/51_uhbai0_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811122/53_cv1kog_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811112/52_jou9ux_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811104/55_lxtc5y_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811096/56_prh46a_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811089/57_t6ufff_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811080/50_wmni4f_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811074/54_jhxiif_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811062/59_tgz6eu_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811053/60_roaac9_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811044/58_goolgw_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811035/37_x9r87u_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1779811026/61_qlxqeq_475a40.png",
];

/* Split images into 3 rows for the circular gallery */
const ROW1 = IMAGES.slice(0, 19);
const ROW2 = IMAGES.slice(19, 38);
const ROW3 = IMAGES.slice(38, 57);

export default function TechFlatPage() {
  return (
    <>
      <style>{``}</style>

      <main
        className="w-full min-h-screen overflow-hidden relative"
        style={{ background: "#FFFFFF" }}
      >
        {/* ── Nav ── */}
        <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 md:px-12 flex justify-between items-center pointer-events-none">
          <Link
            href="/collections"
            className="pointer-events-auto font-sans text-[11px] uppercase tracking-[0.22em] text-black/50 hover:text-black transition-colors"
          >
            ← Back
          </Link>
          <img
            src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_200/v1777072569/trisha_vanam_brand_identity_cemr1y.png"
            alt="Trisha Vanam"
            className="hidden md:block pointer-events-none"
            style={{ height: "clamp(3rem, 5vw, 4.5rem)", width: "auto", objectFit: "contain" }}
          />
        </nav>

        {/* ── Hero text + Galleries in normal flow ── */}
        <div className="w-full flex flex-col items-center">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full flex flex-col items-center text-center pointer-events-none z-10"
            style={{ paddingTop: "clamp(3rem, 5vh, 5rem)", paddingBottom: "clamp(0.5rem, 1vh, 1rem)" }}
          >
            <h1
              className="font-serif font-black text-black leading-none tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Tech Flat
            </h1>
            <p
              className="font-sans text-black/45 mt-4 max-w-xl leading-relaxed"
              style={{ fontSize: "0.7rem", letterSpacing: "0.02em" }}
            >
              Precision meets creativity — a deep dive into technical flat drawing, spec sheets and
              construction details that transform ideas into production-ready garments.
            </p>
          </motion.div>

          {/* ── 2 Circular Gallery Rows ── */}
          <div className="relative z-10 w-full flex flex-col gap-0">
          <div className="w-full h-[40vh] min-h-[280px] overflow-hidden">
            <CircularGallery
              items={ROW2.map((image, i) => ({ image, text: `Design ${i + 20}` }))}
              bend={5}
              borderRadius={0.05}
              scrollEase={0.03}
              scrollDirection="right"
            />
          </div>
          <div className="w-full h-[40vh] min-h-[280px] overflow-hidden">
            <CircularGallery
              items={ROW3.map((image, i) => ({ image, text: `Design ${i + 39}` }))}
              bend={5}
              borderRadius={0.05}
              scrollEase={0.03}
              scrollDirection="left"
            />
          </div>{/* closes row 3 */}
          </div>{/* closes gallery wrapper */}
        </div>{/* closes outer flex wrapper */}
      </main>
    </>
  );
}
