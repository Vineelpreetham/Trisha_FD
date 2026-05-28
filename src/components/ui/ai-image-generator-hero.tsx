"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageCard {
  id: string
  src: string
  alt: string
  rotation: number
}

interface ImageCarouselHeroProps {
  title: string
  subtitle?: string
  description?: string
  ctaText?: string
  onCtaClick?: () => void
  images: ImageCard[]
  features?: Array<{
    title: string
    description: string
  }>
}

export function ImageCarouselHero({
  title,
  images,
}: ImageCarouselHeroProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [rotationAngle, setRotationAngle] = useState(0)
  const [radius, setRadius] = useState(250)
  const containerRef = useRef<HTMLDivElement>(null)

  const isHoveringRef = useRef(false)
  const rotationRef = useRef(0)

  // Memoize base angles so they don't get recalculated every frame
  const baseAngles = useMemo(
    () => images.map((_, i) => i * (360 / images.length)),
    [images.length]
  )

  // Handle responsive radius — fit within BOTH width and height
  useEffect(() => {
    const handleResize = () => {
      const maxByWidth = (window.innerWidth / 2) - 120
      const maxByHeight = 340
      const calculated = Math.min(maxByWidth, maxByHeight, 420)
      setRadius(Math.max(calculated, 140))
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Sync hover state to ref
  useEffect(() => {
    isHoveringRef.current = isHovering
  }, [isHovering])

  // Smooth rotation with requestAnimationFrame + pause on hover
  // Only update a single number (rotation angle) instead of rebuilding an array every frame
  useEffect(() => {
    let animationFrameId: number
    let lastTime = performance.now()

    const animate = (now: number) => {
      const deltaTime = now - lastTime
      lastTime = now

      if (!isHoveringRef.current) {
        rotationRef.current += deltaTime / 50
        setRotationAngle(rotationRef.current)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div className="relative w-full bg-transparent overflow-visible py-8">
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">

        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="relative w-full max-w-7xl h-[750px] sm:h-[900px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false)
            setHoveredIndex(null)
          }}
        >
          {/* Central Title */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-black text-[#1A1A1A] text-center leading-[0.9] tracking-tighter opacity-80">
              {title.split(" ").map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h2>
          </div>

          {/* Rotating Image Cards */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: "1200px" }}>
            {images.map((image, index) => {
              const currentAngle = (baseAngles[index] + rotationAngle) % 360
              const angleRad = currentAngle * (Math.PI / 180)
              const x = Math.cos(angleRad) * radius
              const y = Math.sin(angleRad) * radius

              const isPopped = hoveredIndex === index
              const scale = isPopped ? 1.5 : 1
              const zIndex = isPopped ? 100 : Math.round(50 + y / 10)

              return (
                <div
                  key={image.id}
                  className="absolute"
                  style={{
                    width: "clamp(160px, 22vw, 300px)",
                    height: "clamp(200px, 28vw, 400px)",
                    transform: `translate3d(${x}px, ${y}px, 0) rotateZ(${image.rotation * 0.4}deg) scale(${scale})`,
                    zIndex,
                    transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                    willChange: "transform",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative w-full h-full cursor-pointer">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 160px, (max-width: 1200px) 22vw, 300px"
                      className={cn(
                        "object-contain transition-[filter] duration-500",
                        isPopped
                          ? "drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                          : "drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]"
                      )}
                      priority={index < 4}
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
