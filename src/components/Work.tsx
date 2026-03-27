"use client";

import Link from "next/link";
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
  getCldUploadUrl("IMG_6432_ou6nog.jpg", { width: 800 }),
  getCldUploadUrl("IMG_6425_yv9x9s.jpg", { width: 800 }),
  getCldUploadUrl("IMG_6416_ewj0o2.jpg", { width: 800 }),
];

const PRNG = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// ─── THREE.JS DESKTOP PORTFOLIO IMAGE ───
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
    (PRNG(index + 1) - 0.5) * 15,
    (PRNG(index + 2) - 0.5) * 15,
    -30 - PRNG(index + 3) * 20 - index * 2,
  ], [index]);

  const startRot = useMemo(() => [
    (PRNG(index + 4) - 0.5) * 0.5,
    (PRNG(index + 5) - 0.5) * 0.5,
    (PRNG(index + 6) - 0.5) * 0.4,
  ], [index]);

  const appearDelay = index * (0.5 / IMAGES.length);

  useFrame((state) => {
    if (!ref.current) return;
    
    const t = scrollProgress.get();

    const opacityProgress = Math.min(1, Math.max(0, (t - appearDelay) * 5));
    if (ref.current.material) {
      (ref.current.material as THREE.Material & { opacity: number }).opacity = opacityProgress;
    }

    const time = state.clock.getElapsedTime();
    const floatX = startPos[0] + Math.sin(time * 0.5 + index) * 0.5;
    const floatY = startPos[1] + Math.cos(time * 0.6 + index) * 0.5;
    
    // Constant slow forward movement from scroll
    const scrollZ = t * 25; 
    const currentZ = startPos[2] + scrollZ;

    const climaxProgress = Math.max(0, (t - 0.7) / 0.25);
    const snap = THREE.MathUtils.smoothstep(climaxProgress, 0, 1);

    ref.current.position.x = THREE.MathUtils.lerp(floatX, layoutParams.pos[0], snap);
    ref.current.position.y = THREE.MathUtils.lerp(floatY, layoutParams.pos[1], snap);
    ref.current.position.z = THREE.MathUtils.lerp(currentZ, layoutParams.pos[2], snap);

    ref.current.rotation.x = THREE.MathUtils.lerp(startRot[0], layoutParams.endRot[0], snap);
    ref.current.rotation.y = THREE.MathUtils.lerp(startRot[1], layoutParams.endRot[1], snap);
    ref.current.rotation.z = THREE.MathUtils.lerp(startRot[2], layoutParams.endRot[2], snap);
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
    const organicData = [
      { x: -0.25, y: 0.25, rotZ: 0.05, w: 0.22, h: 0.30, z: 0.01 },  
      { x: 0.28, y: 0.20, rotZ: -0.06, w: 0.20, h: 0.32, z: 0.02 },  
      { x: -0.32, y: -0.15, rotZ: -0.04, w: 0.18, h: 0.35, z: 0.03 }, 
      { x: 0.25, y: -0.25, rotZ: 0.07, w: 0.22, h: 0.25, z: 0.04 },   
      { x: 0.0, y: 0.35, rotZ: 0.02, w: 0.20, h: 0.25, z: 0.05 },    
      { x: -0.15, y: -0.30, rotZ: -0.03, w: 0.25, h: 0.22, z: 0.06 }, 
      { x: 0.10, y: -0.30, rotZ: 0.04, w: 0.18, h: 0.28, z: 0.07 },  
      { x: 0.05, y: -0.05, rotZ: -0.02, w: 0.32, h: 0.42, z: 0.08 }, 
      { x: -0.18, y: 0.10, rotZ: -0.12, w: 0.12, h: 0.15, z: 0.09 },
      { x: 0.25, y: 0.05, rotZ: 0.09, w: 0.14, h: 0.11, z: 0.10 },
      { x: -0.05, y: -0.25, rotZ: -0.08, w: 0.11, h: 0.14, z: 0.11 },
      { x: 0.12, y: 0.22, rotZ: 0.06, w: 0.10, h: 0.18, z: 0.12 },
    ];
    
    const scaleFactor = 1.0; 
    const fw = w * scaleFactor;
    const fh = h * scaleFactor;
    
    return organicData.map((data) => {
      const posX = data.x * fw;
      const posY = data.y * fh; 
      const zOffset = data.z; 
      
      return {
        pos: [posX, posY, zOffset],
        scale: [Math.max(0.1, data.w * fw), Math.max(0.1, data.h * fh)],
        endRot: [0, 0, data.rotZ]
      };
    });
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

// ─── DESKTOP MOODBOARD ───
function DesktopWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply an ultra-stiff, nearly mass-less spring filter. This mathematically strips out the 1-frame
  // RequestAnimationFrame jitter vibrating between ReactLenis and Framer Motion, while remaining completely lag-free.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400, damping: 90, mass: 0.1, restDelta: 0.0001
  });

  // Remap scroll so the animation fully completes by 75% of the section.
  // The remaining 25% provides a solid visual "pause" before the next section enters.
  const sceneProgress = useTransform(smoothProgress, [0, 0.75], [0, 1]);

  const titleOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
  const ctaOpacity = useTransform(smoothProgress, [0.65, 0.75], [0, 1]);
  const ctaY = useTransform(smoothProgress, [0.65, 0.75], [30, 0]);

  return (
    <section ref={containerRef} id="work" className="relative w-full h-[400vh] bg-[#F8F6F2]">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* 3D WebGL Canvas for Desktop */}
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <PortfolioScene scrollProgress={sceneProgress} />
        </Canvas>

        {/* Title Overlay */}
        <motion.div 
          className="absolute top-[20vh] w-full text-center mix-blend-difference pointer-events-none z-10"
          style={{ opacity: titleOpacity }}
        >
          <h2 className="text-sm font-sans uppercase tracking-[0.4em] text-[#8C7B75]/80 mb-6">
            Selected Editorials
          </h2>
          <h3 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-[0.9] max-w-2xl mx-auto opacity-80">
            The Archive.
          </h3>
        </motion.div>

        {/* View Collection Button perfectly overlaid in the middle of the moodboard */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
          <motion.div style={{ opacity: ctaOpacity, y: ctaY }} className="pointer-events-auto">
            <Link 
              href="/collections"
              className="text-sm font-sans uppercase tracking-[0.3em] px-10 py-5 bg-[#1A1A1A] text-white hover:bg-white hover:text-[#1A1A1A] border border-[#1A1A1A] hover:scale-105 transition-all duration-500 rounded-sm shadow-2xl inline-block no-underline"
            >
              View Collection
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

// ─── MOBILE MOODBOARD ───
// Kept DOM-based for Mobile to avoid VRAM crashes on lower devices.
function MobileWork() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Identical micro-spring filter for Mobile Work
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400, damping: 90, mass: 0.1, restDelta: 0.0001
  });

  const sceneProgress = useTransform(smoothProgress, [0, 0.75], [0, 1]);

  const titleOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const ctaOpacity = useTransform(smoothProgress, [0.65, 0.75], [0, 1]);
  const ctaY = useTransform(smoothProgress, [0.65, 0.75], [20, 0]);

  const scatterData = useMemo(() => {
    return IMAGES.map((_, i) => {
      const angle = (i / IMAGES.length) * Math.PI * 2;
      const radiusX = 25 + PRNG(i + 10) * 15;
      const radiusY = 30 + PRNG(i + 20) * 15;
      return {
        x: Math.sin(angle) * radiusX,
        y: Math.cos(angle) * radiusY,
        rot: (PRNG(i + 30) - 0.5) * 30,
        delay: i * (0.3 / IMAGES.length)
      };
    });
  }, []);

  return (
    <section ref={containerRef} id="work-mobile" className="relative w-full h-[500vh] bg-[#F8F6F2]">
      <div className="sticky top-0 w-full h-[100dvh] overflow-hidden flex items-center justify-center">
        
        <motion.div 
          className="absolute z-10 text-center pointer-events-none w-full px-6"
          style={{ opacity: titleOpacity, top: "15vh" }}
        >
          <h2 className="text-[0.6rem] font-sans uppercase tracking-[0.4em] text-[#8C7B75]/80 mb-4">
            Selected Editorials
          </h2>
          <h3 className="text-4xl font-serif text-[#1A1A1A] leading-[1.1] opacity-90">
            The Archive.
          </h3>
        </motion.div>

        <div className="absolute inset-0 z-20 pointer-events-none">
          {IMAGES.map((url, i) => {
            const data = scatterData[i];
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const x = useTransform(sceneProgress, [0.1 + data.delay, 0.45], ["0%", `${data.x}%`]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(sceneProgress, [0.1 + data.delay, 0.45], ["0%", `${data.y}%`]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const rotate = useTransform(sceneProgress, [0.15, 0.5], [0, data.rot]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const scale = useTransform(sceneProgress, [data.delay, 0.2 + data.delay], [0.4, 0.8]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(sceneProgress, [0, 0.1, 0.55, 0.7], [0, 1, 1, 0]);

            return (
              <motion.div
                key={`mobile-img-${i}`}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: "clamp(80px, 30vw, 160px)",
                  x, y, rotate, scale, opacity,
                  zIndex: 20 + i
                }}
              >
                <img src={url} alt="Editorial" className="w-full h-auto object-cover rounded-sm shadow-xl" />
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="absolute z-40 pointer-events-auto"
          style={{ opacity: ctaOpacity, y: ctaY }}
        >
          <Link 
            href="/collections"
            className="text-[0.65rem] font-sans uppercase tracking-[0.3em] px-8 py-4 bg-[#1A1A1A] text-white hover:bg-white hover:text-[#1A1A1A] border border-[#1A1A1A] rounded-sm shadow-2xl inline-block no-underline"
          >
            View Collection
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

// ─── INIT ───
export default function Work() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile === null) return null;

  return isMobile ? <MobileWork /> : <DesktopWork />;
}
