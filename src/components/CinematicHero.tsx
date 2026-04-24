"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function CinematicHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const handleLoad = () => {
      vid.play().then(() => {
        setLoaded(true);
        // Freeze the video exactly when the text completes its slower slide animation
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }, 6500); // 2.0s delay + 4.5s duration
      }).catch(() => setLoaded(true));
    };

    if (vid.readyState >= 3) {
      handleLoad();
    } else {
      vid.addEventListener("canplaythrough", handleLoad, { once: true });
    }

    const timer = setTimeout(() => setLoaded(true), 2500);
    return () => {
      clearTimeout(timer);
      vid.removeEventListener("canplaythrough", handleLoad);
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
          animation-delay: 2.0s; /* Allow more walking before text starts */
        }

        .cinematic-text-right {
          will-change: transform, filter, opacity;
          opacity: 0;
        }
        .cinematic-text-right.triggered {
          animation: slideFromRight 4.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 2.0s; /* Allow more walking before text starts */
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

          {/* ── VIDEO ── */}
          <video
            ref={videoRef}
            className="hero-video"
            src="https://res.cloudinary.com/dbeh0eisn/video/upload/v1777048677/Woman_walks_towards_202604242205_impvit.mp4"
            muted
            loop
            playsInline
            preload="auto"
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

          {/* ── TRISHA — bottom left ── */}
          <div
            style={{
              position: "absolute",
              left: "clamp(1.2rem, 3.5vw, 4.5rem)",
              bottom: "clamp(5rem, 20vh, 13rem)",
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

          {/* ── VANAM — right side, vertically centered ── */}
          <div
            style={{
              position: "absolute",
              right: "clamp(1.2rem, 3.5vw, 4.5rem)",
              top: "50%",
              transform: "translateY(-50%)",
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
