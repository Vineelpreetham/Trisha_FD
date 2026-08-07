"use client";
import Link from "next/link";

/* ──────────────────────────────────────────────
   Cloudinary-optimized URLs — f_auto,q_auto +
   width cap at 400px (images display at ~220px)
   ────────────────────────────────────────────── */
const ALL = [
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811488/5_qnibol_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811479/10_d22yqx_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811471/8_wf9ymg_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811463/11_jnfcmt_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811455/13_aj4nsk_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811447/12_u3e61c_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811440/9_bxw8eq_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811431/14_qhrd6u_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811423/15_eekgho_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811415/16_fnpigv_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811408/7_qwhoh6_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811399/19_sbradd_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811390/21_lqqan2_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811381/18_bgmneg_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811371/17_dyifhr_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811364/22_h4fvov_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811355/23_lrnduc_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811345/20_rtaydw_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811337/24_tudzj5_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811329/27_ubttqr_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811321/29_y2r5gz_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811313/28_wgyeqo_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811305/30_xk5aea_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811297/25_ez9erz_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811286/31_dnjm2k_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811276/26_llyngy_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811269/32_sju3ve_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811260/33_wmaasv_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811252/35_uygeju_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811243/36_uy9k3j_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811235/38_neqt9j_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811227/39_zr6ex5_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811219/34_uyle01_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811210/40_e9wxbt_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811201/6_v23ewm_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811194/42_jzd1wb_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811188/45_rnccws_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811180/46_d80bbz_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811172/47_vuwo9h_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811163/41_oygowc_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811155/48_c3rxxm_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811149/43_fgcm5s_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811140/49_qxj2ip_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811134/44_oqzbnp_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811129/51_uhbai0_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811122/53_cv1kog_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811112/52_jou9ux_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811104/55_lxtc5y_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811096/56_prh46a_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811089/57_t6ufff_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811080/50_wmni4f_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811074/54_jhxiif_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811062/59_tgz6eu_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811053/60_roaac9_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811044/58_goolgw_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811035/37_x9r87u_475a40.png",
  "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_1600/v1779811026/61_qlxqeq_475a40.png",
];

const ALL_REV = [...ALL].reverse();
const ALL_MID = [...ALL.slice(28), ...ALL.slice(0, 28)];

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
