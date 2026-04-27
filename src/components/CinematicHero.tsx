"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Direct Cloudinary URLs — no on-the-fly transcoding, same approach as Regalia
const VIDEO_SRC = "https://res.cloudinary.com/dbeh0eisn/video/upload/v1777048677/Woman_walks_towards_202604242205_impvit.mp4";
const POSTER = "https://res.cloudinary.com/dbeh0eisn/video/upload/so_0,f_jpg,q_auto,w_1280/v1777048677/Woman_walks_towards_202604242205_impvit.jpg";

export default function CinematicHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    let hasFired = false;
    let freezeTimer: ReturnType<typeof setTimeout> | null = null;

    const triggerLoaded = () => {
      if (!hasFired) {
        hasFired = true;
        setLoaded(true);
      }
    };

    const scheduleFreeze = () => {
      if (!freezeTimer) {
        freezeTimer = setTimeout(() => {
          if (videoRef.current) videoRef.current.pause();
        }, 6500);
      }
    };

    const tryPlay = () => {
      if (!vid) return;
      // Safari: if video is already playing (e.g., back-nav bfcache restore), just trigger
      if (!vid.paused) {
        triggerLoaded();
        scheduleFreeze();
        return;
      }
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          triggerLoaded();
          scheduleFreeze();
        }).catch(() => {
          // Autoplay blocked — show poster as fallback, mark loaded so UI isn't stuck
          setVideoFailed(true);
          triggerLoaded();
        });
      } else {
        // Older Safari returns undefined from play() — assume it started
        triggerLoaded();
        scheduleFreeze();
      }
    };

    // Safari-specific: fire triggerLoaded as soon as data is available,
    // even if play() promise hasn't resolved yet. This handles the case
    // where Safari fires canplay/loadeddata before the play promise settles.
    const onCanPlay = () => {
      if (!vid.paused) {
        triggerLoaded();
        scheduleFreeze();
      }
    };
    const onLoadedData = () => {
      // If already playing (Safari bfcache / back-nav), trigger immediately
      if (!vid.paused) {
        triggerLoaded();
        scheduleFreeze();
      }
    };
    vid.addEventListener("canplay", onCanPlay, { passive: true });
    vid.addEventListener("loadeddata", onLoadedData, { passive: true });

    // Safari: check readyState immediately — video may already be buffered
    // (happens on page reload or bfcache restore)
    if (vid.readyState >= 3 && !vid.paused) {
      triggerLoaded();
      scheduleFreeze();
    }

    // Always attempt to play immediately.
    // Browsers queue play() requests internally and start as soon as
    // enough data is buffered — no need to wait for canplay.
    tryPlay();

    // Retry play on user interaction (click/touch anywhere)
    // Many mobile browsers require a user gesture before allowing video playback
    const onUserInteraction = () => {
      if (vid.paused && !videoFailed) {
        tryPlay();
      }
    };
    document.addEventListener("click", onUserInteraction, { once: true, passive: true });
    document.addEventListener("touchstart", onUserInteraction, { once: true, passive: true });

    // IntersectionObserver — retry when section scrolls into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && vid.paused) {
          tryPlay();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(vid);

    // Retry with increasing delays (handles slow network + Safari timing quirks)
    const retryTimers = [
      setTimeout(() => { if (vid.paused) tryPlay(); }, 500),
      setTimeout(() => { if (vid.paused) tryPlay(); }, 1500),
      setTimeout(() => { if (vid.paused) tryPlay(); }, 3000),
    ];

    // Handle outright failure (network error, codec unsupported, etc.)
    const handleError = () => {
      setVideoFailed(true);
      triggerLoaded();
    };
    vid.addEventListener("error", handleError, { once: true });

    // Final safety: always reveal after 4s so the page is never stuck on black
    const safetyTimer = setTimeout(triggerLoaded, 4000);

    return () => {
      clearTimeout(safetyTimer);
      if (freezeTimer) clearTimeout(freezeTimer);
      retryTimers.forEach(clearTimeout);
      observer.disconnect();
      document.removeEventListener("click", onUserInteraction);
      document.removeEventListener("touchstart", onUserInteraction);
      vid.removeEventListener("canplay", onCanPlay);
      vid.removeEventListener("loadeddata", onLoadedData);
      vid.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `

        /* ─── CINEMATIC NAME REVEAL (SLIDING) ─────────────────────────
           TRISHA slides in from the left, VANAM slides in from the right.
        ─────────────────────────────────────────────────────────────── */
        @keyframes slideFromLeft {
          0% {
            transform: translateX(-50vw);
            filter: blur(12px);
            opacity: 0;
          }
          40% {
            opacity: 0.75;
            filter: blur(4px);
          }
          100% {
            transform: translateX(0);
            filter: blur(0px);
            opacity: 0.75;
          }
        }

        @keyframes slideFromRight {
          0% {
            transform: translateX(50vw);
            filter: blur(12px);
            opacity: 0;
          }
          40% {
            opacity: 0.75;
            filter: blur(4px);
          }
          100% {
            transform: translateX(0);
            filter: blur(0px);
            opacity: 0.75;
          }
        }

        .cinematic-text-left {
          will-change: transform, filter, opacity;
          opacity: 0;
        }
        .cinematic-text-left.triggered {
          animation: slideFromLeft 4.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.8s; /* Earlier reveal */
        }

        .cinematic-text-right {
          will-change: transform, filter, opacity;
          opacity: 0;
        }
        .cinematic-text-right.triggered {
          animation: slideFromRight 4.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.8s; /* Earlier reveal */
        }

        /* ─── SUBTLE ACCESSORIES ──────────────────────────────────── */
        @keyframes softFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .ambient-text, .hero-cta-wrapper { opacity: 0; }
        .ambient-text.triggered {
          animation: softFadeUp 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 6.5s; /* Fade up exactly when she freezes */
        }
        .hero-cta-wrapper.triggered {
          animation: softFadeUp 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 6.8s;
        }

        /* ─── CTA BUTTON ─────────────────────────────────────────── */
        .hero-cta-btn {
          position: relative;
          overflow: hidden;
          display: inline-block;
          border: 1px solid rgba(255,255,255,0.42);
          background: transparent;
          color: rgba(255,255,255,0.82);
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          font-weight: 300;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 1.4rem 3.5rem;
          cursor: pointer;
          transition: color 0.5s ease, border-color 0.5s ease;
        }
        .hero-cta-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.95);
          transform: translateX(-101%);
          transition: transform 0.55s cubic-bezier(0.22,1,0.36,1);
          z-index: 0;
        }
        .hero-cta-btn:hover { color: #1a0008; border-color: rgba(255,255,255,0.95); }
        .hero-cta-btn:hover::after { transform: translateX(0); }
        .hero-cta-btn span { position: relative; z-index: 1; }

        /* ─── HERO SHELL ─────────────────────────────────────────── */
        .true-depth-hero {
          position: relative;
          width: 100vw;
          height: 200vh;
          background: #080203;
        }

        .hero-sticky-content {
          position: sticky;
          top: 0;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ─── VIDEO ──────────────────────────────────────────────── */
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 60%;
          filter: contrast(1.07) brightness(0.76);
          z-index: 1;
        }

        /* ─── GOLD NAMES ─────────────────────────────────────────── */
        .gold-name {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          color: #E8CE73; /* Lighter gold */
          text-transform: uppercase;
          line-height: 0.85;
          margin: 0;
          text-shadow:
            0 0 100px rgba(232,206,115,0.45),
            0 0  40px rgba(232,206,115,0.30),
            0 8px 28px rgba(0,0,0,0.85);
          letter-spacing: 0.04em;
          text-align: center;
        }

      ` }} />

      <section className="true-depth-hero">
        <div className="hero-sticky-content">

          {/* ── POSTER FALLBACK (visible when video can't autoplay) ── */}
          <img
            src={POSTER}
            alt="Trisha Vanam"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 60%",
              filter: "contrast(1.07) brightness(0.76)",
              zIndex: 0,
            }}
          />

          {/* ── VIDEO (direct src like Regalia — most reliable cross-browser) ── */}
          <video
            ref={videoRef}
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src={VIDEO_SRC}
            poster={POSTER}
          />

          {/* ── FULL-COVER VIGNETTE ── */}
          <div style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
            background: `
              radial-gradient(circle at center, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.7) 100%),
              linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.8) 100%)
            `,
          }} />

          {/* ── TRISHA — left side, vertically centered ── */}
          <div
            style={{
              position: "absolute",
              left: "clamp(1.2rem, 3.5vw, 4.5rem)",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 3,
              pointerEvents: "none",
            }}
          >
            {/* Blend Mode Layer */}
            <div style={{ position: "relative", mixBlendMode: "lighten" }}>
              <h1
                className={`gold-name cinematic-text-left ${loaded ? "triggered" : ""}`}
                style={{
                  fontSize: "clamp(3.8rem, 10vw, 12rem)",
                  fontStyle: "italic",
                }}
              >
                TRISHA
              </h1>
            </div>
            {/* Solidity Stroke Layer */}
            <div style={{ position: "absolute", inset: 0, opacity: 0.35 }}>
              <h1
                className={`gold-name cinematic-text-left ${loaded ? "triggered" : ""}`}
                style={{
                  fontSize: "clamp(3.8rem, 10vw, 12rem)",
                  fontStyle: "italic",
                  textShadow: "none",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(232,206,115,0.35)"
                }}
              >
                TRISHA
              </h1>
            </div>
          </div>

          {/* ── VANAM — bottom right ── */}
          <div
            style={{
              position: "absolute",
              right: "clamp(1.2rem, 3.5vw, 4.5rem)",
              bottom: "clamp(5rem, 20vh, 13rem)",
              zIndex: 3,
              pointerEvents: "none",
            }}
          >
            {/* Blend Mode Layer */}
            <div style={{ position: "relative", mixBlendMode: "lighten" }}>
              <h1
                className={`gold-name cinematic-text-right ${loaded ? "triggered" : ""}`}
                style={{ 
                  fontSize: "clamp(3.8rem, 10vw, 12rem)",
                }}
              >
                VANAM
              </h1>
            </div>
            {/* Solidity Stroke Layer */}
            <div style={{ position: "absolute", inset: 0, opacity: 0.35 }}>
              <h1
                className={`gold-name cinematic-text-right ${loaded ? "triggered" : ""}`}
                style={{
                  fontSize: "clamp(3.8rem, 10vw, 12rem)",
                  textShadow: "none",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(232,206,115,0.35)"
                }}
              >
                VANAM
              </h1>
            </div>
          </div>

          {/* ── BOTTOM CENTER: tagline + CTA ── */}
          <div style={{
            position: "absolute",
            bottom: "clamp(2rem, 3.5vh, 3rem)",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 5,
            textAlign: "center",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}>
            <div className={`hero-cta-wrapper ${loaded ? "triggered" : ""}`} style={{ pointerEvents: "auto" }}>
              <Link href="/about" className="hero-cta-btn">
                <span>Discover the story</span>
              </Link>
            </div>
          </div>

          {/* ── FILM GRAIN ── */}
          <div style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            pointerEvents: "none",
            backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAAzklEQVR42u2ZQRDAMAjDNP7+eZtX4yqL1B24yD2kQ1hEZBHRRESKiMwiojmI5iAuiGsi2oVoF+K+ED8QPyH+hviL+A0JGBIwJuCagGsC7gm4J+BfgX8F/l1IwJCSIQFDSoYMGSQYJBhEMEhgEGEQI2BEwIiAEQEiAkQECBEgIkBEoIiAEAEiAoQIEBEgZICIAEECQAQIAiAigBEwImBEEBgkGBIwJGRIwJCQISFDQsYEjAkYEzAmYEzAmIAxAWMCxgSMCVgRcCJiReBPwC+/AB0x0kRTAAAAAElFTkSuQmCC")',
            backgroundSize: "64px 64px",
            opacity: 0.05,
          }} />

        </div>
      </section>
    </>
  );
}
