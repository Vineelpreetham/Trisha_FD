"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { motion, type PanInfo } from "framer-motion"
import Image from "next/image"

export interface StackImage {
  id: string | number
  src: string
  alt: string
}

interface VerticalImageStackProps {
  images: StackImage[]
  title?: string
}

export function VerticalImageStack({ images, title }: VerticalImageStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const lastNavigationTime = useRef(0)
  const navigationCooldown = 400 // ms between navigations

  const navigate = useCallback((newDirection: number) => {
    const now = Date.now()
    if (now - lastNavigationTime.current < navigationCooldown) return
    lastNavigationTime.current = now

    setCurrentIndex((prev) => {
      if (newDirection > 0) {
        return prev === images.length - 1 ? 0 : prev + 1
      }
      return prev === 0 ? images.length - 1 : prev - 1
    })
  }, [images.length])

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x < -threshold || info.offset.y < -threshold) {
      navigate(1)
    } else if (info.offset.x > threshold || info.offset.y > threshold) {
      navigate(-1)
    }
  }

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      // Prevent default to stop page scrolling while hovering over the stack
      // However, we only prevent if we are actively wheeling on the component
      // We'll let the user scroll if they aren't directly on it, but for a full-screen hero, it's tricky.
      // Let's just capture the scroll for navigation.
      if (Math.abs(e.deltaY) > 30) {
        if (e.deltaY > 0) {
          navigate(1)
        } else {
          navigate(-1)
        }
      }
    },
    [navigate],
  )

  const getCardStyle = (index: number) => {
    const total = images.length
    let diff = index - currentIndex
    
    // Wrap around so the trail is continuous
    if (diff < -2) diff += total
    if (diff > total - 3) diff -= total

    if (diff === 0) {
      return { x: -250, y: 120, scale: 1, opacity: 1, zIndex: 50, rotateY: 25, rotateZ: -5 }
    } else if (diff > 0) {
      return { 
        x: -250 + (diff * 110), 
        y: 120 - (diff * 35), 
        scale: 1 - (diff * 0.1), 
        opacity: Math.max(1 - (diff * 0.12), 0), 
        zIndex: 50 - diff, 
        rotateY: 25, 
        rotateZ: -5 
      }
    } else {
      // diff < 0 (exiting to the bottom-left)
      return { 
        x: -250 + (diff * 150), 
        y: 120 - (diff * 80), 
        scale: 1 + (diff * 0.1), 
        opacity: 0, 
        zIndex: 50 + diff, 
        rotateY: 25, 
        rotateZ: -5 
      }
    }
  }

  const isVisible = (index: number) => {
    const total = images.length
    let diff = index - currentIndex
    if (diff < -2) diff += total
    if (diff > total - 3) diff -= total
    return diff >= -1 && diff <= 8
  }

  return (
    <div 
      className="relative flex h-[700px] w-full items-center justify-center overflow-hidden bg-transparent"
      onWheel={(e) => {
        // Capture wheel events only when mouse is over the container
        if (Math.abs(e.deltaY) > 30) {
          e.preventDefault(); // Stop page scrolling
          if (e.deltaY > 0) navigate(1)
          else navigate(-1)
        }
      }}
    >
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1A1A1A]/[0.02] blur-3xl" />
      </div>

      {title && (
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-[#1A1A1A] tracking-tighter opacity-80 text-center">
            {title}
          </h2>
        </div>
      )}

      {/* Card Stack */}
      <div className="relative flex h-[500px] w-[320px] items-center justify-center mt-12" style={{ perspective: "1200px" }}>
        {images.map((image, index) => {
          if (!isVisible(index)) return null
          const style = getCardStyle(index)
          const isCurrent = index === currentIndex

          return (
            <motion.div
              key={image.id}
              className="absolute cursor-grab active:cursor-grabbing"
              animate={{
                x: style.x,
                y: style.y,
                scale: style.scale,
                opacity: style.opacity,
                rotateY: style.rotateY,
                rotateZ: style.rotateZ,
                zIndex: style.zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 25,
                mass: 1,
              }}
              drag={isCurrent ? "x" : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              style={{
                transformStyle: "preserve-3d",
                zIndex: style.zIndex,
              }}
            >
              <div
                className="relative h-[420px] w-[280px] overflow-hidden rounded-3xl bg-white/50 backdrop-blur-sm ring-1 ring-black/5"
                style={{
                  boxShadow: isCurrent
                    ? "0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)"
                    : "0 10px 30px -10px rgba(0,0,0,0.1)",
                }}
              >
                {/* Card inner glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-black/5 via-transparent to-transparent z-10" />

                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-contain w-full h-full scale-[1.25] z-0"
                  draggable={false}
                  priority={isCurrent}
                />

                {/* Bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/60 to-transparent z-10" />
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Navigation dots */}
      <div className="absolute right-8 top-1/2 flex -translate-y-1/2 flex-col gap-2 z-20 hidden md:flex">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index !== currentIndex) {
                setCurrentIndex(index)
              }
            }}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "h-6 bg-[#1A1A1A]" : "bg-[#1A1A1A]/30 hover:bg-[#1A1A1A]/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Instruction hint */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-2 text-black/40">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7-7 7 7" />
            </svg>
          </motion.div>
          <span className="text-xs font-medium tracking-widest uppercase">Scroll or drag</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Counter */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden md:block">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-light text-[#1A1A1A] tabular-nums">
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <div className="my-2 h-px w-8 bg-[#1A1A1A]/20" />
          <span className="text-sm text-black/40 tabular-nums">{String(images.length).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  )
}
