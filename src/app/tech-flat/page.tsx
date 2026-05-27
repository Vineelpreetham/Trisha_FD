"use client";

import { CircularGallery } from "@/components/ui/circular-gallery-2";
import { motion } from "framer-motion";
import Link from "next/link";

/* ─── 31 new d7d440 fashion flat images ─── */
const IMAGES = [
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903362/10_hw54di_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903352/11_o0oejc_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903342/12_z9oz1w_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903317/13_xzgpsp_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903329/14_vth40y_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903311/15_vquetv_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903285/16_tann5l_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903290/17_eouogq_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903301/18_g6vsth_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903243/19_jxtncn_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903255/20_pwjbhr_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903214/21_xnqkqo_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903276/22_q7bgah_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903265/23_r9yt2s_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903174/24_cbusq3_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903234/25_bjes8o_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903224/26_wqvezn_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903195/27_hqiau7_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903205/28_ywdbvv_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903184/29_qiqgsm_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903165/30_q6sudz_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903111/31_dndkjm_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903156/32_fv5qrn_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903139/33_kcdjyb_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903148/34_lb8r2v_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903130/35_dlgxbe_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903121/36_tgycji_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903100/37_ltss3m_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903090/38_oe7rl2_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903079/39_ws8iyg_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903058/40_uq3edg_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903069/41_ykg6ud_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903049/42_fgtyzs_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903044/43_wjftbh_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903033/44_tl737s_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903016/45_aceqk0_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903024/46_l1jhqi_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903009/47_iwaoaa_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903000/48_um65dq_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902984/49_dt1na0_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903395/5_jvzjyg_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902989/50_yvuace_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902975/51_y9i5xk_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902966/52_qnt9ai_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902944/53_optzon_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902961/54_cmthhy_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902952/55_lotpzu_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902891/56_wbubsu_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902918/57_nrvuyq_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902924/58_ahtmr5_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902934/59_x2nbqy_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903415/6_e7clig_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902909/60_xybkjk_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902899/61_kdywew_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902882/62_rwuczf_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902871/63_yjs42t_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902862/64_q4ajiq_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902816/65_vznkwe_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902853/66_uvnm3e_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902842/67_fxxqgb_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902834/68_ngnit3_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902822/69_ofx9zv_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903406/7_e9lv5s_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902809/71_gz5gnj_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902788/72_c19ldq_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902797/73_qu0ijz_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902777/74_fh9ov6_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902768/75_h1oahw_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902702/76_murtr0_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902756/77_agv52m_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902743/78_npzvzg_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902729/79_sccom2_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903373/8_i8xysl_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902720/80_zc01oy_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902711/81_mbtkai_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902693/82_g8namh_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902685/83_i8bldq_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902677/84_j2tzz5_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902633/85_q6lovf_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902668/86_jtdcf7_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902660/87_distcx_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902650/88_o8wkad_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779902644/89_dt7d5l_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_400/v1779903384/9_x5cils_d7d440.png",
];

/* Split 84 images into 2 rows for the circular gallery */
const ROW2 = IMAGES.slice(0, 42);
const ROW3 = IMAGES.slice(42, 84);

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
              Tech Flats
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
              scrollSpeed={5}
              scrollEase={0.06}
              scrollDirection="right"
            />
          </div>
          <div className="w-full h-[40vh] min-h-[280px] overflow-hidden">
            <CircularGallery
              items={ROW3.map((image, i) => ({ image, text: `Design ${i + 39}` }))}
              bend={5}
              borderRadius={0.05}
              scrollSpeed={5}
              scrollEase={0.06}
              scrollDirection="left"
            />
          </div>{/* closes row 3 */}
          </div>{/* closes gallery wrapper */}
        </div>{/* closes outer flex wrapper */}
      </main>
    </>
  );
}
