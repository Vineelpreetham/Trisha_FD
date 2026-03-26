"use client";
import React, { useState, useRef, useEffect } from "react";

export default function CatalogFlip({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Preload images to ensure seamless fading
  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(1, x / width));
    
    // Map X coordinate perfectly to the 11 array indices
    let index = Math.floor(percentage * images.length);
    if (index >= images.length) index = images.length - 1;
    
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    // Snaps back to cover when not interacting, or can just stay. Staying is usually nicer.
    // setActiveIndex(0); 
  };

  return (
    <div style={{ width: "100%", maxWidth: "1400px", margin: "0 auto", padding: "2rem 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
      
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          width: "100%", 
          aspectRatio: "16/9", 
          position: "relative",
          borderRadius: "8px", 
          overflow: "hidden", 
          boxShadow: "0 40px 80px rgba(0,0,0,0.8)",
          cursor: "ew-resize",
          backgroundColor: "#050505"
        }}
        title="Move your mouse left and right to explore the collection"
      >
        {images.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={`Look ${index + 1}`} 
            style={{ 
              position: "absolute", 
              top: 0, 
              left: 0, 
              width: "100%", 
              height: "100%", 
              objectFit: "contain",
              opacity: activeIndex === index ? 1 : 0,
              transition: "opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
              pointerEvents: "none"
            }} 
          />
        ))}

        {/* Dynamic Progress Scrubber indicator at the bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "5px", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }}>
            <div style={{ 
              height: "100%", 
              background: "#D4C7BE", 
              width: `${(100 / images.length)}%`,
              transform: `translateX(${activeIndex * 100}%)`,
              transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)"
            }} />
        </div>
      </div>
      
      <p style={{ marginTop: "2rem", color: "#A9998F", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 300, display: "flex", alignItems: "center", gap: "1rem" }}>
        <span style={{ width: "30px", height: "1px", background: "#A9998F", opacity: 0.5 }}></span>
        Hover to Explore
        <span style={{ width: "30px", height: "1px", background: "#A9998F", opacity: 0.5 }}></span>
      </p>

    </div>
  );
}
