"use client";
import Link from "next/link";

export default function RomantiquePage() {
  return (
    <main style={{ backgroundColor: "#F7F5F3", color: "#1E0406", fontFamily: "Inter, sans-serif", minHeight: "100vh", paddingBottom: "10rem" }}>
      
      {/* Absolute Nav Overlay */}
      <nav style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2rem 4rem", mixBlendMode: "difference" }}>
        <Link href="/trial-home" style={{ fontFamily: "Georgia, serif", fontSize: "1.2rem", color: "#fff", textDecoration: "none" }}>← Back to Portfolio</Link>
      </nav>

      {/* Cinematic Video Hero (Referencing Srujana Simple Pleasures) */}
      <section style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center" }}>
        
        {/* The Cloudinary Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
        >
          <source src="https://res.cloudinary.com/dbeh0eisn/video/upload/v1774463613/PORTFOLIO_TRISHA_rub7rt.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text legibility if needed, but keeping it clean like editorial */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.2)", zIndex: 1 }}></div>

        {/* Hero Title */}
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", color: "#fff" }}>
           <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(4rem, 10vw, 8rem)", fontStyle: "italic", fontWeight: 300, letterSpacing: "0.05em", margin: 0 }}>Romantiques</h1>
        </div>
      </section>

      {/* Spacing for rest of the page */}
      <section style={{ padding: "8rem 10%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
         <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", fontWeight: 400, marginBottom: "2rem" }}>The Collection</h2>
         <p style={{ fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 300, color: "#4A3F3F" }}>
            A cinematic exploration of form, feeling, and the simple pleasures of couture dressing.
         </p>
      </section>

    </main>
  );
}
