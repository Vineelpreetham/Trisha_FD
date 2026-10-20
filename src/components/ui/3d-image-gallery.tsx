"use client"

import React, { Suspense, useEffect, useMemo, useRef, useState, createContext, useContext } from "react"
import * as THREE from "three"
import { motion, AnimatePresence } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  OrbitControls,
  Environment,
  Html,
  Plane,
  Sphere,
} from "@react-three/drei"
import { Download, Heart, X, ChevronLeft, ChevronRight } from "lucide-react"

/**
 * Single-file Stellar Card Gallery
 * - Context, Starfield, Galaxy, FloatingCard, Modal, and Page in one.
 */

/* =========================
   Card Context (inlined)
   ========================= */

type Card = {
  id: string
  imageUrl: string
  alt: string
  title: string
}

type CardContextType = {
  selectedCard: Card | null
  setSelectedCard: (card: Card | null) => void
  cards: Card[]
}

const CardContext = createContext<CardContextType | undefined>(undefined)

function useCard() {
  const ctx = useContext(CardContext)
  if (!ctx) throw new Error("useCard must be used within CardProvider")
  return ctx
}

function CardProvider({ children }: { children: React.ReactNode }) {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)

  const userUrls = [
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

  // Generate 57 cards, cycling through the provided images
  const cards: Card[] = Array.from({ length: 114 }).map((_, i) => ({
    id: `${i + 1}`,
    imageUrl: userUrls[i % userUrls.length],
    alt: `Organic Flat Design ${i + 1}`,
    title: `Design ${i + 1}`
  }))

  return (
    <CardContext.Provider value={{ selectedCard, setSelectedCard, cards }}>
      {children}
    </CardContext.Provider>
  )
}



/* =========================
   Floating Card (inlined)
   ========================= */

function FloatingCard({
  card,
  position,
}: {
  card: Card
  position: { x: number; y: number; z: number; rotationX: number; rotationY: number; rotationZ: number }
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  const { setSelectedCard } = useCard()

  useFrame(({ camera }) => {
    if (groupRef.current) {
      groupRef.current.lookAt(camera.position)
    }
  })

  const handleClick = (e: any) => {
    e.stopPropagation()
    setSelectedCard(card)
  }
  const handlePointerOver = (e: any) => {
    e.stopPropagation()
    setHovered(true)
    document.body.style.cursor = "pointer"
  }
  const handlePointerOut = (e: any) => {
    e.stopPropagation()
    setHovered(false)
    document.body.style.cursor = "auto"
  }

  return (
    <group ref={groupRef} position={[position.x, position.y, position.z]}>
      <Html
        transform
        distanceFactor={10}
        position={[0, 0, 0]}
        style={{
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          transform: hovered ? "scale(1.35) translateY(-15px)" : "scale(1)",
          pointerEvents: "auto",
          zIndex: hovered ? 100 : 1,
        }}
      >
        <div
          onClick={handleClick}
          onPointerEnter={handlePointerOver}
          onPointerLeave={handlePointerOut}
          className="w-72 h-44 rounded-lg overflow-hidden bg-black p-3 select-none flex flex-col relative transition-all duration-400 cursor-pointer"
          style={{
            boxShadow: hovered
              ? "0 30px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 195, 179, 0.6)"
              : "0 15px 30px rgba(0, 0, 0, 0.6)",
            border: hovered ? "2px solid #D4C3B3" : "1px solid rgba(255, 255, 255, 0.1)",
            filter: hovered ? "brightness(1.15) contrast(1.1)" : "brightness(1) contrast(1)",
          }}
        >
          <img
            src={card.imageUrl || "/placeholder.svg"}
            alt={card.alt}
            className="w-full h-full flex-1 object-contain rounded-md"
            loading="lazy"
            draggable={false}
            style={{ opacity: hovered ? 1 : 0.8, transition: "opacity 0.4s" }}
          />
          {/* Subtle glare effect on hover */}
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-400"
            style={{
              background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.15) 25%, transparent 30%)",
              opacity: hovered ? 1 : 0
            }}
          />
        </div>
      </Html>
    </group>
  )
}

/* =========================
   Card Modal (inlined)
   ========================= */

function CardModal() {
  const { selectedCard, setSelectedCard } = useCard()
  const [isFavorited, setIsFavorited] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const toggleFavorite = () => setIsFavorited((v) => !v);
  const handleClose = () => setSelectedCard(null);
  const handleBackdropClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) handleClose()
  }

  return (
    <AnimatePresence>
      {selectedCard && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" 
          onClick={handleBackdropClick}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative max-w-5xl w-full mx-4"
          >
            <button onClick={handleClose} className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10">
              <X className="w-8 h-8" />
            </button>

            <div className="w-full">
              <div
                className="relative rounded-[16px] bg-black p-4 w-full border border-white/5"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.01) 0px 520px 146px 0px, rgba(0, 0, 0, 0.04) 0px 333px 133px 0px, rgba(0, 0, 0, 0.26) 0px 83px 83px 0px, rgba(0, 0, 0, 0.29) 0px 21px 46px 0px",
                }}
              >
                <div className="relative w-full mb-4" style={{ aspectRatio: "16 / 9" }}>
                  {/* High‑resolution image using Cloudinary transformations */}
                  <img
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full rounded-[16px] bg-black object-cover"
                    alt={selectedCard.alt}
                    src={selectedCard.imageUrl ? selectedCard.imageUrl.replace('/upload/', '/upload/f_auto,q_auto,w_1600/') : "/placeholder.svg"}
                    style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px", opacity: 1 }}
                  />
                </div>

                <h3 className="text-white text-xl md:text-2xl font-serif font-semibold mb-2 text-center">{selectedCard.title}</h3>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* =========================
   Card Galaxy (inlined)
   ========================= */

function CardGalaxy({ activeIndex, controlsRef }: { activeIndex: number; controlsRef: React.RefObject<any> }) {
  const { cards } = useCard()

  const cardPositions = useMemo(() => {
    const positions: {
      x: number
      y: number
      z: number
      rotationX: number
      rotationY: number
      rotationZ: number
    }[] = []
    const numCards = cards.length
    const goldenRatio = (1 + Math.sqrt(5)) / 2

    for (let i = 0; i < numCards; i++) {
      const y = 1 - (i / (numCards - 1)) * 2
      const radiusAtY = Math.sqrt(1 - y * y)
      const theta = (2 * Math.PI * i) / goldenRatio
      const x = Math.cos(theta) * radiusAtY
      const z = Math.sin(theta) * radiusAtY
      const layerRadius = 12 + (i % 3) * 4

      positions.push({
        x: x * layerRadius,
        y: y * layerRadius,
        z: z * layerRadius,
        rotationX: Math.atan2(z, Math.sqrt(x * x + y * y)),
        rotationY: Math.atan2(x, z),
        rotationZ: ((((i * 9301 + 49297) % 233280) / 233280) - 0.5) * 0.2,
      })
    }
    return positions
  }, [cards.length])

  // Update camera target when activeIndex changes
  React.useEffect(() => {
    if (controlsRef.current && cardPositions[activeIndex]) {
      const pos = cardPositions[activeIndex];
      controlsRef.current.target.set(pos.x, pos.y, pos.z);
      controlsRef.current.update();
    }
  }, [activeIndex, controlsRef, cardPositions]);

  return (
    <>


      {cards.map((card, i) => (
        <FloatingCard key={card.id} card={card} position={cardPositions[i]} />
      ))}
    </>
  )
}

/* =========================
   Page/Component Export
   ========================= */

function StellarCardGalleryInner() {
  const controlsRef = React.useRef<any>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const { cards } = useCard();
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Navigation Buttons */}
      <button
        onClick={() => setActiveIndex((i) => (i - 1 + cards.length) % cards.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => setActiveIndex((i) => (i + 1) % cards.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => setActiveIndex(0)}
        className="absolute left-1/2 top-4 -translate-x-1/2 z-20 px-3 py-1 bg-black/50 rounded-full hover:bg-black/70 transition-colors text-sm text-white"
      >
        First
      </button>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        className="absolute inset-0 z-10"
        onCreated={({ gl }) => {
          gl.domElement.style.pointerEvents = "auto"
        }}
      >
        <Suspense fallback={null}>
          <Environment preset="night" />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.6} />
          <pointLight position={[-10, -10, -10]} intensity={0.3} />
          <CardGalaxy activeIndex={activeIndex} controlsRef={controlsRef} />
          <OrbitControls
            ref={controlsRef}
            enablePan
            enableZoom
            enableRotate
            enableDamping={true}
            dampingFactor={0.05}
            minDistance={5}
            maxDistance={40}
            autoRotate={false}
            rotateSpeed={0.5}
            zoomSpeed={1.2}
            panSpeed={0.8}
            target={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>

      <CardModal />
    </div>
  );
}

export default function StellarCardGallerySingle() {
  return (
    <CardProvider>
      <StellarCardGalleryInner />
    </CardProvider>
  );
}
