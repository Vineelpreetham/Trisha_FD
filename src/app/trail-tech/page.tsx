"use client";
import Link from "next/link";

/* ──────────────────────────────────────────────
   Cloudinary-optimized URLs — f_auto,q_auto +
   width cap at 400px (images display at ~220px)
   ────────────────────────────────────────────── */
const ALL = [
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903362/10_hw54di_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903352/11_o0oejc_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903342/12_z9oz1w_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903317/13_xzgpsp_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903329/14_vth40y_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903311/15_vquetv_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903285/16_tann5l_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903290/17_eouogq_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903301/18_g6vsth_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903243/19_jxtncn_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903255/20_pwjbhr_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903214/21_xnqkqo_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903276/22_q7bgah_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903265/23_r9yt2s_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903174/24_cbusq3_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903234/25_bjes8o_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903224/26_wqvezn_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903195/27_hqiau7_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903205/28_ywdbvv_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903184/29_qiqgsm_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903165/30_q6sudz_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903111/31_dndkjm_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903156/32_fv5qrn_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903139/33_kcdjyb_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903148/34_lb8r2v_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903130/35_dlgxbe_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903121/36_tgycji_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903100/37_ltss3m_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903090/38_oe7rl2_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903079/39_ws8iyg_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903058/40_uq3edg_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903069/41_ykg6ud_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903049/42_fgtyzs_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903044/43_wjftbh_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903033/44_tl737s_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903016/45_aceqk0_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903024/46_l1jhqi_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903009/47_iwaoaa_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903000/48_um65dq_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902984/49_dt1na0_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903395/5_jvzjyg_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902989/50_yvuace_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902975/51_y9i5xk_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902966/52_qnt9ai_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902944/53_optzon_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902961/54_cmthhy_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902952/55_lotpzu_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902891/56_wbubsu_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902918/57_nrvuyq_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902924/58_ahtmr5_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902934/59_x2nbqy_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903415/6_e7clig_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902909/60_xybkjk_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902899/61_kdywew_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902882/62_rwuczf_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902871/63_yjs42t_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902862/64_q4ajiq_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902816/65_vznkwe_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902853/66_uvnm3e_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902842/67_fxxqgb_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902834/68_ngnit3_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902822/69_ofx9zv_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903406/7_e9lv5s_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902809/71_gz5gnj_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902788/72_c19ldq_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902797/73_qu0ijz_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902777/74_fh9ov6_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902768/75_h1oahw_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902702/76_murtr0_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902756/77_agv52m_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902743/78_npzvzg_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902729/79_sccom2_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903373/8_i8xysl_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902720/80_zc01oy_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902711/81_mbtkai_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902693/82_g8namh_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902685/83_i8bldq_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902677/84_j2tzz5_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902633/85_q6lovf_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902668/86_jtdcf7_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902660/87_distcx_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902650/88_o8wkad_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779902644/89_dt7d5l_d7d440.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779903384/9_x5cils_d7d440.png",
];

const ALL_REV = [...ALL].reverse();
const ALL_MID = [...ALL.slice(Math.floor(ALL.length / 2)), ...ALL.slice(0, Math.floor(ALL.length / 2))];

const ROWS = [
  { imgs: ALL,     toLeft: true,  dur: 130, h: 220 },
  { imgs: ALL_REV, toLeft: false, dur: 155, h: 200 },
  { imgs: ALL_MID, toLeft: true,  dur: 140, h: 220 },
];

/* ──────────────────────────────────────────────
   GPU-friendly marquee using pure CSS translate.
   - Removed willChange: "transform" (was
     promoting 348 layers to GPU — massive memory)
   - Added content-visibility: auto for off-screen
     paint savings
   - Lazy loading images + decoding async
   - Hover state uses CSS-only transform (no
     React re-render of entire row)
   ────────────────────────────────────────────── */

function MarqueeRow({ imgs, toLeft, dur, h }: { imgs: string[]; toLeft: boolean; dur: number; h: number }) {
  const doubled = [...imgs, ...imgs];

  return (
    <div className="overflow-hidden w-full tt-marquee-row">
      <div
        className="tt-marquee-track"
        style={{
          display: "flex",
          gap: "18px",
          width: "max-content",
          animationName: toLeft ? "ttMarqueeLeft" : "ttMarqueeRight",
          animationDuration: `${dur}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          paddingBottom: "4px",
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="tt-marquee-card"
            style={{
              flexShrink: 0,
              height: h,
              width: "auto",
            }}
          >
            <img
              src={src}
              alt=""
              draggable={false}
              loading="lazy"
              decoding="async"
              style={{ height: "100%", width: "auto", display: "block", pointerEvents: "none" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TrailTechPage() {
  return (
    <>
      <style>{`
        @keyframes ttMarqueeLeft {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes ttMarqueeRight {
          from { transform: translate3d(-50%, 0, 0); }
          to   { transform: translate3d(0, 0, 0); }
        }

        /* Single GPU layer for the entire track, not per-card */
        .tt-marquee-track {
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* Pause on hover — pure CSS, no React re-render */
        .tt-marquee-row:hover .tt-marquee-track {
          animation-play-state: paused;
        }

        /* Card hover — pure CSS transform, no state */
        .tt-marquee-card {
          position: relative;
          cursor: pointer;
          z-index: 1;
          transform: scale(1) translateY(0) translateZ(0);
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          contain: layout style paint;
        }
        .tt-marquee-card:hover {
          transform: scale(1.1) translateY(-8px) translateZ(0);
          z-index: 10;
        }
      `}</style>

      <main
        className="w-full min-h-screen overflow-x-hidden relative"
        style={{ background: "linear-gradient(to bottom, #B2A5A5 0%, #D4C4C4 35%, #EDE0DC 70%, #F5EAE8 100%)" }}
      >

        {/* Nav */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-5 md:px-10 flex justify-between items-center pointer-events-none">
          <Link href="/collections" className="pointer-events-auto font-sans text-[11px] uppercase tracking-[0.22em] text-black/60 hover:text-black transition-colors">
            ← Back
          </Link>
          <div className="flex flex-col items-end pointer-events-none">
            <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-black/40">Technical Flat</span>
          </div>
        </nav>

        {/* Rows */}
        <div className="flex flex-col justify-center min-h-screen overflow-x-hidden gap-6 py-24">
          <MarqueeRow {...ROWS[0]} />

          <div className="flex flex-col items-center gap-0.5 py-3 pointer-events-none select-none">
            <h1
              className="font-serif font-bold uppercase text-center leading-none text-black"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
            >
              Technical Flat
            </h1>
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-black/40 mt-1">
              Trisha Vanam
            </p>
          </div>

          <MarqueeRow {...ROWS[1]} />
          <MarqueeRow {...ROWS[2]} />
        </div>

        {/* Edge fades */}
        <div className="fixed top-0 left-0 h-full w-24 pointer-events-none z-20"
          style={{ background: "linear-gradient(to right, #B2A5A5, transparent)" }} />
        <div className="fixed top-0 right-0 h-full w-24 pointer-events-none z-20"
          style={{ background: "linear-gradient(to left, #B2A5A5, transparent)" }} />
      </main>
    </>
  );
}
