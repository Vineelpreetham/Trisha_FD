"use client";
import Link from "next/link";

const GR = [
  "radial-gradient(ellipse 70% 60% at 20% 10%, #E8D3CD 0%, transparent 60%)",
  "radial-gradient(ellipse 60% 50% at 80% 90%, #F5EAE8 0%, transparent 60%)",
  "linear-gradient(150deg, #E6C8C3 0%, #F2DFDB 40%, #FAEFED 70%, #FDF8F7 100%)",
].join(", ");

// Crucial: The width must be fixed/clamped so the aspect ratio doesn't shift between sections
const W = "clamp(340px, 45vw, 820px)";

export default function TrialHomePage() {
  return (
    <main style={{ fontFamily: "Inter,sans-serif", overflowX: "hidden", margin: 0, padding: 0 }}>
      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 200, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "clamp(0.9rem,2vw,1.6rem) clamp(1.5rem,5vw,4rem)", mixBlendMode: "difference", color: "#fff" }}>
        <Link href="/" style={{ fontFamily: "Georgia,serif", fontSize: "clamp(0.9rem,1.8vw,1.3rem)", fontWeight: 400, textDecoration: "none", color: "inherit" }}>Trisha.</Link>
        <div style={{ display: "flex", gap: "clamp(1rem,3vw,2.5rem)", fontSize: "0.66rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>
          {["Home","Collection","About","Contact"].map(l => (
            <Link key={l} href={`/${l.toLowerCase()}`} style={{ textDecoration: "none", color: "inherit" }}>{l}</Link>
          ))}
        </div>
      </nav>

      {/* ── FOLD 1: TOP HALF ── */}
      <section style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", background: GR }}>

        {/* The trick: The container is 100vh, but the image is FORCED to be 200vh tall. 
            objectPosition top aligns it to the top of the 200vh block. */}
        <div style={{ position: "absolute", top: 0, right: "10%", width: W, height: "100%", zIndex: 10, pointerEvents: "none", overflow: "hidden" }}>
          <img src="/split-model-cutout.png" alt="model top"
            style={{ 
              width: "100%", height: "200vh", /* EXACTLY double the viewport height */
              objectFit: "cover",             /* cover ensures it fills the width/height uniformly */
              objectPosition: "top center",   /* Anchor to top */
              display: "block", filter: "drop-shadow(-15px 0 40px rgba(100,20,30,0.15))" 
            }} 
          />
        </div>

        <div style={{ position: "absolute", top: "50%", left: 0, transform: "translateY(-50%)", width: "45%", padding: "clamp(2rem,6vw,6rem)", paddingTop: "clamp(5rem,8vh,8rem)", zIndex: 20, pointerEvents: "none" }}>
          <p style={{ fontSize: "0.58rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "#8A353A", opacity: 0.8, marginBottom: "1rem", fontWeight: 700 }}>Fashion Portfolio – 2024</p>
          <h1 style={{ fontWeight: 300, fontSize: "clamp(1.5rem,2.8vw,3.2rem)", lineHeight: 1.25, color: "#1E0406", maxWidth: "16ch", margin: 0 }}>Welcome to my journey as a fashion designer</h1>
          <div style={{ marginTop: "2.5rem", width: "40px", height: "1px", background: "#A85055", opacity: 0.5 }} />
        </div>

        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", zIndex: 30, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", color: "#8A353A", opacity: 0.5, fontSize: "0.55rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          <div style={{ width: "1px", height: "36px", background: "linear-gradient(to bottom, transparent, #8A353A)" }} />scroll
        </div>
      </section>

      {/* ── FOLD 2: BOTTOM HALF ── */}
      <section style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", background: GR }}>

        {/* IDENTICAL container as fold 1 */}
        <div style={{ position: "absolute", top: 0, right: "10%", width: W, height: "100%", zIndex: 10, pointerEvents: "none", overflow: "hidden" }}>
          <img src="/split-model-cutout.png" alt="model bottom"
            style={{ 
              width: "100%", height: "200vh", /* Same 200vh height */
              objectFit: "cover",             /* Same cover scale */
              objectPosition: "bottom center",/* Anchor to bottom in its -100vh offset relative to this container */
              transform: "translateY(-50%)",  /* SHIFT image up by exactly 100vh (half of 200vh) so bottom half shows */
              display: "block", filter: "drop-shadow(-15px 0 40px rgba(100,20,30,0.15))" 
            }} 
          />
        </div>

        <div style={{ position: "absolute", top: "50%", left: 0, transform: "translateY(-50%)", width: "45%", padding: "clamp(2rem,6vw,6rem)", zIndex: 20, pointerEvents: "none" }}>
          <p style={{ fontSize: "0.58rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "#8A353A", opacity: 0.8, marginBottom: "1rem", fontWeight: 700 }}>The Collection</p>
          <h2 style={{ fontFamily: "Georgia,serif", fontWeight: 400, fontStyle: "italic", fontSize: "clamp(1.2rem,2.4vw,2.8rem)", lineHeight: 1.35, color: "#1E0406", maxWidth: "18ch", margin: 0 }}>Where couture meets craft</h2>
          <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#4A1D20", opacity: 0.7, maxWidth: "28ch", lineHeight: 1.7, fontWeight: 300 }}>Every stitch tells a story. Every silhouette holds a vision.</p>
          <Link href="/collections" style={{ marginTop: "2rem", display: "inline-flex", alignItems: "center", gap: "0.6rem", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#A85055", fontWeight: 600, textDecoration: "none" }}>
            View Collection <span style={{ width: "24px", height: "1px", background: "#A85055", display: "inline-block" }} />
          </Link>
        </div>
      </section>

      {/* Post */}
      <section style={{ padding: "6rem 2rem", display: "flex", flexDirection: "column", alignItems: "center", background: "#FDF8F7", borderTop: "1px solid rgba(168,80,85,0.15)" }}>
        <h3 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(1.3rem,2.2vw,2rem)", color: "#1E0406", textAlign: "center", fontWeight: 400, fontStyle: "italic" }}>Explore the full editorial</h3>
        <Link href="/" style={{ marginTop: "2rem", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#A85055", textDecoration: "none", borderBottom: "1px solid rgba(168,80,85,0.4)", paddingBottom: "0.2rem" }}>Return Home</Link>
      </section>
    </main>
  );
}
