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
import { Download, Heart, X } from "lucide-react"

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
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811488/5_qnibol_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811479/10_d22yqx_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811471/8_wf9ymg_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811463/11_jnfcmt_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811455/13_aj4nsk_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811447/12_u3e61c_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811440/9_bxw8eq_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811431/14_qhrd6u_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811423/15_eekgho_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811415/16_fnpigv_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811408/7_qwhoh6_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811399/19_sbradd_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811390/21_lqqan2_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811381/18_bgmneg_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811371/17_dyifhr_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811364/22_h4fvov_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811355/23_lrnduc_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811345/20_rtaydw_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811337/24_tudzj5_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811329/27_ubttqr_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811321/29_y2r5gz_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811313/28_wgyeqo_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811305/30_xk5aea_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811297/25_ez9erz_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811286/31_dnjm2k_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811276/26_llyngy_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811269/32_sju3ve_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811260/33_wmaasv_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811252/35_uygeju_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811243/36_uy9k3j_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811235/38_neqt9j_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811227/39_zr6ex5_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811219/34_uyle01_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811210/40_e9wxbt_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811201/6_v23ewm_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811194/42_jzd1wb_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811188/45_rnccws_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811180/46_d80bbz_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811172/47_vuwo9h_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811163/41_oygowc_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811155/48_c3rxxm_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811149/43_fgcm5s_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811140/49_qxj2ip_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811134/44_oqzbnp_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811129/51_uhbai0_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811122/53_cv1kog_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811112/52_jou9ux_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811104/55_lxtc5y_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811096/56_prh46a_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811089/57_t6ufff_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811080/50_wmni4f_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811074/54_jhxiif_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811062/59_tgz6eu_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811053/60_roaac9_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811044/58_goolgw_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811035/37_x9r87u_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779811026/61_qlxqeq_475a40.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808674/6_v23ewm_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808666/5_qnibol_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808656/10_d22yqx_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808647/8_wf9ymg_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808637/11_jnfcmt_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808628/13_aj4nsk_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808618/12_u3e61c_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808609/9_bxw8eq_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808601/14_qhrd6u_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808594/15_eekgho_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808587/16_fnpigv_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808578/7_qwhoh6_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808571/19_sbradd_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808563/21_lqqan2_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808555/18_bgmneg_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808546/17_dyifhr_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808538/22_h4fvov_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808529/23_lrnduc_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808520/20_rtaydw_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808511/24_tudzj5_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808503/27_ubttqr_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808495/29_y2r5gz_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808488/28_wgyeqo_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808482/30_xk5aea_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808474/25_ez9erz_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808463/31_dnjm2k_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808454/26_llyngy_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808449/32_sju3ve_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808440/33_wmaasv_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808431/35_uygeju_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808422/36_uy9k3j_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808415/38_neqt9j_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808407/39_zr6ex5_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808400/34_uyle01_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808392/40_e9wxbt_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808384/37_x9r87u_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808376/42_jzd1wb_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808368/45_rnccws_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808359/46_d80bbz_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808350/47_vuwo9h_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808341/41_oygowc_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808333/48_c3rxxm_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808328/43_fgcm5s_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808319/49_qxj2ip_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808311/44_oqzbnp_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808306/51_uhbai0_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808298/53_cv1kog_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808287/52_jou9ux_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808279/55_lxtc5y_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808272/56_prh46a_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808264/57_t6ufff_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808256/50_wmni4f_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808251/54_jhxiif_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808241/59_tgz6eu_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808232/60_roaac9_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808224/58_goolgw_8c3f0a.png",
    "https://res.cloudinary.com/dbeh0eisn/image/upload/v1779808215/61_qlxqeq_8c3f0a.png",
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

  const toggleFavorite = () => setIsFavorited((v) => !v)
  const handleClose = () => setSelectedCard(null)
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
                  <img
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-[16px] bg-black object-contain p-2"
                    alt={selectedCard.alt}
                    src={selectedCard.imageUrl || "/placeholder.svg"}
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

function CardGalaxy() {
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
        rotationZ: (Math.random() - 0.5) * 0.2,
      })
    }
    return positions
  }, [cards.length])

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

export default function StellarCardGallerySingle() {
  return (
    <CardProvider>
      <div className="w-full h-screen relative overflow-hidden">
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
            <CardGalaxy />
            <OrbitControls
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
    </CardProvider>
  )
}
