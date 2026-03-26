"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Image as DreiImage, Preload } from "@react-three/drei";
import { useScroll, useSpring, motion, useTransform, MotionValue } from "framer-motion";
import { getCldUploadUrl } from "@/lib/cloudinary";

const IMAGES = [
  getCldUploadUrl("IMG_6428_hwtohb.png", { width: 800 }),
  getCldUploadUrl("IMG_6430_tz56ya.jpg", { width: 800 }),
  getCldUploadUrl("IMG_6432_ou6nog.jpg", { width: 800 }),
  getCldUploadUrl("IMG_6424_gmrwui.jpg", { width: 800 }),
  getCldUploadUrl("IMG_6425_yv9x9s.jpg", { width: 800 }),
  getCldUploadUrl("IMG_6422_ztzuzs.jpg", { width: 800 }),
  getCldUploadUrl("IMG_6417_kta8nm.jpg", { width: 800 }),
  getCldUploadUrl("IMG_6416_ewj0o2.jpg", { width: 800 }),
  getCldUploadUrl("IMG_6414_ovfxye.jpg", { width: 800 }),
  // Re-using a few to fill the 12-image moodboard grid! 
  getCldUploadUrl("IMG_6425_yv9x9s.jpg", { width: 800 }),
  getCldUploadUrl("IMG_6416_ewj0o2.jpg", { width: 800 }),
];

const PRNG = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

function PortfolioImage({
  url,
  index,
  layoutParams,
  scrollProgress,
}: {
  url: string;
  index: number;
  layoutParams: { pos: number[]; scale: number[]; endRot: number[] };
  scrollProgress: MotionValue<number>;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  const startPos = useMemo(() => [
    (PRNG(index + 1) - 0.5) * 20,
    (PRNG(index + 2) - 0.5) * 20,
    -40 - PRNG(index + 3) * 20 - index * 2,
  ], [index, layoutParams.pos]);

  const startRot = useMemo(() => [
    (PRNG(index + 4) - 0.5) * 0.5,
    (PRNG(index + 5) - 0.5) * 0.5,
    (PRNG(index + 6) - 0.5) * 0.4,
  ], [index]);

  const appearDelay = index * (0.5 / IMAGES.length);

  useFrame((state) => {
    if (!ref.current) return;
    
    const t = scrollProgress.get();

    // Seamlessly fade out floating images while Hero End Image fades in
    const opacityProgress = Math.min(1, Math.max(0, (t - appearDelay) * 5));
    const fadeOutAtEnd = Math.max(0, Math.min(1, 1 - (t - 0.75) * 4)); // Fades out gently 0.75 to 1.0
    if (ref.current.material) {
      (ref.current.material as THREE.Material & { opacity: number }).opacity = opacityProgress * fadeOutAtEnd;
    }

    const time = state.clock.getElapsedTime();
    const floatX = startPos[0] + Math.sin(time * 0.5 + index) * 0.5;
    const floatY = startPos[1] + Math.cos(time * 0.6 + index) * 0.5;
    
    // Constant slow forward movement from scroll
    const scrollZ = t * 25; 
    const currentZ = startPos[2] + scrollZ;

    const climaxProgress = Math.max(0, (t - 0.5) / 0.4); // 0.5 to 0.9 snap into ring gradually
    const snap = THREE.MathUtils.smoothstep(climaxProgress, 0, 1);

    // Apply exact target positions directly without explosion so the ring stays perfectly framed
    let finalPosX = layoutParams.pos[0];
    let finalPosY = layoutParams.pos[1];
    let finalPosZ = layoutParams.pos[2];

    ref.current.position.x = THREE.MathUtils.lerp(floatX, finalPosX, snap);
    ref.current.position.y = THREE.MathUtils.lerp(floatY, finalPosY, snap);
    ref.current.position.z = THREE.MathUtils.lerp(currentZ, finalPosZ, snap);

    const startR = startRot;
    ref.current.rotation.x = THREE.MathUtils.lerp(startR[0], layoutParams.endRot[0], snap);
    ref.current.rotation.y = THREE.MathUtils.lerp(startR[1], layoutParams.endRot[1], snap);
    ref.current.rotation.z = THREE.MathUtils.lerp(startR[2], layoutParams.endRot[2], snap);
  });

  return (
    <DreiImage
      ref={ref}
      url={url}
      transparent
      scale={layoutParams.scale as [number, number]}
      toneMapped={true}
    />
  );
}

function PortfolioScene({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const { width: w, height: h } = useThree((state) => state.viewport);

  const layout = useMemo(() => {
    // 3D Cinematic Orbit Ring around the center
    const radius = w * 0.35; // Ring radius
    const items = 12;
    const orbitData = Array.from({ length: items }).map((_, i) => {
      const angle = (i / items) * Math.PI * 2;
      const yOffset = (i % 2 === 0 ? 0.15 : -0.15) * h; // alternating high/low pairs
      
      return {
        pos: [Math.sin(angle) * radius, yOffset, Math.cos(angle) * radius - 2], // Centered at z=-2
        scale: [0.15 * w, 0.22 * h],
        endRot: [0, angle, 0], // Cards face outward
      };
    });
    
    return orbitData;
  }, [w, h]);

  return (
    <group>
      <ambientLight intensity={1.5} />
      {IMAGES.map((url, i) => (
        <PortfolioImage
          key={`${url}-${i}`}
          url={url}
          index={i}
          layoutParams={layout[i]}
          scrollProgress={scrollProgress}
        />
      ))}
      <Preload all />
    </group>
  );
}

// ─── DESKTOP WEBGL MOODBOARD ───
function DesktopWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100, damping: 30, restDelta: 0.001
  });

  const titleOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const ctaOpacity = useTransform(smoothProgress, [0.8, 1], [0, 1]);

  return (
    <section ref={containerRef} id="work" className="relative w-full h-[350svh] bg-[#F8F6F2]">
      <div className="sticky top-0 w-full h-[100svh] overflow-hidden">
        
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <PortfolioScene scrollProgress={smoothProgress} />
        </Canvas>

        <motion.div 
          className="absolute top-[20svh] w-full text-center mix-blend-difference pointer-events-none z-10"
          style={{ opacity: titleOpacity }}
        >
          <h2 className="text-sm font-sans uppercase tracking-[0.4em] text-[#8C7B75]/80 mb-6">
            Selected Editorials
          </h2>
          <h3 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-[0.9] max-w-2xl mx-auto opacity-80">
            The Archive.
          </h3>
        </motion.div>

        {/* View Collection Title perfectly overlaid in the middle of the moodboard */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none p-4 md:p-12">
          {/* Fading DOM final image to guarantee perfect aspect ratio containment */}
          <motion.img 
            src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1774372610/2_u6w78z.png"
            className="absolute inset-0 w-full h-full object-contain p-4 md:p-8"
            style={{ opacity: useTransform(smoothProgress, [0.75, 1], [0, 1]) }}
          />

          <motion.div style={{ opacity: ctaOpacity }} className="pointer-events-auto z-30">
            <button 
              className="text-sm font-sans uppercase tracking-[0.3em] px-10 py-5 bg-[#1A1A1A] text-white hover:bg-white hover:text-[#1A1A1A] border border-[#1A1A1A] hover:scale-105 transition-all duration-500 rounded-sm shadow-2xl"
              onClick={() => {
                alert("Navigating to Collection...");
              }}
            >
              View Collection
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

// ─── NATIVE DOM MOBILE MOODBOARD ───
// Uses pure CSS/DOM 3D transforms via Framer Motion to prevent WebGL VRAM crashes on mobile,
// while still providing a fluid, native 3D scattered card feel.
function MobileImage({ 
  url, 
  index, 
  layout, 
  smoothProgress, 
  totalImages,
}: { 
  url: string; 
  index: number; 
  layout: { x: number; y: number; rot: number; w: number }; 
  smoothProgress: MotionValue<number>; 
  totalImages: number;
}) {
  const delay = index * (0.4 / totalImages);
  
  // Mobile layout settling permanently on screen
  const yTrans = useTransform(smoothProgress, 
    [0, 0.6, 0.8], 
    ["150vh", `${layout.y}vh`, `${layout.y}vh`]
  );

  const xTrans = useTransform(smoothProgress,
    [0, 0.6, 0.8],
    ["-50%", `calc(-50% + ${layout.x}vw)`, `calc(-50% + ${layout.x}vw)`]
  );

  const zTrans = useTransform(smoothProgress, [delay, 0.6], [-800, 0]);
  
  // Fade out the floating ambient elements completely at the end
  const opacityTrans = useTransform(
    smoothProgress, 
    [delay, delay + 0.15, 0.75, 0.95], 
    [0, 1, 1, 0]
  );
  
  const rotZTrans = useTransform(smoothProgress, [0.4, 0.6], [0, layout.rot]);

  return (
    <motion.img
      src={url}
      alt="Editorial Mobile"
      className="absolute shadow-2xl origin-center object-cover pointer-events-none"
      style={{
        width: `${layout.w}vw`,
        height: "auto", 
        left: "50%",
        x: xTrans,
        y: yTrans,
        z: zTrans,
        rotateZ: rotZTrans,
        opacity: opacityTrans,
        zIndex: index,
      }}
    />
  );
}

function MobileWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100, damping: 30
  });

  const titleOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const ctaOpacity = useTransform(smoothProgress, [0.8, 1], [0, 1]);

  // Mobile layout: Beautiful Sunburst Circle exploding outward
  const items = 12;
  const organicData = useMemo(() => {
    const data = Array.from({ length: items }).map((_, i) => {
      const angle = (i / items) * Math.PI * 2;
      return {
        x: Math.sin(angle) * 35, // radius 35vw
        y: Math.cos(angle) * 35, // vh
        rot: (angle * 180) / Math.PI, // Facing outwards/following wheel
        w: 25, // Uniform size around ring
      };
    });
    return data;
  }, []);

  return (
    <section ref={containerRef} id="work-mobile" className="relative w-full h-[400vh] bg-[#F8F6F2]">
      <div 
        className="sticky top-0 w-full h-[100vh] overflow-hidden flex items-center justify-center"
        style={{ perspective: 1200 }}
      >
        
        {/* Title */}
        <motion.div 
          className="absolute top-[18vh] w-full text-center mix-blend-difference pointer-events-none z-[100]"
          style={{ opacity: titleOpacity }}
        >
          <h2 className="text-[0.6rem] font-sans uppercase tracking-[0.4em] text-[#8C7B75] mb-4">
            Selected Editorials
          </h2>
          <h3 className="text-4xl font-serif text-[#1A1A1A] leading-[1.1] max-w-[80%] mx-auto opacity-90">
            The Archive.
          </h3>
        </motion.div>

        {/* 3D Scattered Images */}
        {IMAGES.map((url, i) => (
          <MobileImage
            key={`${url}-${i}`}
            url={url}
            index={i}
            layout={organicData[i]}
            smoothProgress={smoothProgress}
            totalImages={IMAGES.length}
          />
        ))}

        {/* CTA Button and DOM Image Overlay */}
        <div className="absolute inset-0 z-[110] flex flex-col items-center justify-center pointer-events-none p-4">
          <motion.img 
            src="https://res.cloudinary.com/dbeh0eisn/image/upload/v1774372610/2_u6w78z.png"
            className="absolute inset-0 w-full h-full object-contain p-4"
            style={{ opacity: useTransform(smoothProgress, [0.75, 1], [0, 1]) }}
          />

          <motion.div style={{ opacity: ctaOpacity }} className="pointer-events-auto z-[120]">
            <button 
              className="text-[0.65rem] font-sans uppercase tracking-[0.3em] px-8 py-4 bg-[#1A1A1A] text-white hover:bg-white hover:text-[#1A1A1A] border border-[#1A1A1A] hover:scale-105 transition-all duration-500 rounded-sm shadow-2xl"
              onClick={() => alert("Navigating to Collection...")}
            >
              View Collection
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

// ─── ROOT EXPORT: CONDITIONAL RENDERER ───
export default function Work() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // During SSR or before hydration completes, render an empty placeholder block
  // to prevent WebGL from accidentally mounting and crashing mobile devices on initial load.
  if (isMobile === null) {
    return <section className="relative w-full h-[200svh] bg-[#F8F6F2]" />;
  }

  return isMobile ? <MobileWork /> : <DesktopWork />;
}
