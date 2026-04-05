"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface ImageSwiperProps {
  images: string;
  cardWidth?: number;
  cardHeight?: number;
  className?: string;
}

export const ImageSwiper: React.FC<ImageSwiperProps> = ({
  images,
  cardWidth = 1050,  // Increased width
  cardHeight = 600, // Increased height
  className = ''
}) => {
  const cardStackRef = useRef<HTMLDivElement>(null);
  const isSwiping = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  const imageList = images.split(',').map(img => img.trim()).filter(img => img);
  const [cardOrder, setCardOrder] = useState<number[]>(() =>
    Array.from({ length: imageList.length }, (_, i) => i)
  );

  const getDurationFromCSS = useCallback((
    variableName: string,
    element?: HTMLElement | null
  ): number => {
    const targetElement = element || document.documentElement;
    const value = getComputedStyle(targetElement)
      ?.getPropertyValue(variableName)
      ?.trim();
    if (!value) return 0;
    if (value.endsWith("ms")) return parseFloat(value);
    if (value.endsWith("s")) return parseFloat(value) * 1000;
    return parseFloat(value) || 0;
  }, []);

  const getCards = useCallback((): HTMLElement[] => {
    if (!cardStackRef.current) return [];
    return [...cardStackRef.current.querySelectorAll('.image-card')] as HTMLElement[];
  }, []);

  const getActiveCard = useCallback((): HTMLElement | null => {
    const cards = getCards();
    return cards[0] || null;
  }, [getCards]);

  const updatePositions = useCallback(() => {
    const cards = getCards();
    cards.forEach((card, i) => {
      card.style.setProperty('--i', (i + 1).toString());
      card.style.setProperty('--swipe-x', '0px');
      card.style.setProperty('--swipe-rotate', '0deg');
      card.style.opacity = '1';
      // Dramatically slowed and smoothed transition
      card.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.6s ease'; 
    });
  }, [getCards]);

  const applySwipeStyles = useCallback((deltaX: number) => {
    const card = getActiveCard();
    if (!card) return;
    card.style.setProperty('--swipe-x', `${deltaX}px`);
    // Reduced rotation from 0.05 to 0.01 for a much flatter, cleaner feel
    card.style.setProperty('--swipe-rotate', `${deltaX * 0.005}deg`); 
    card.style.opacity = (1 - Math.min(Math.abs(deltaX) / 1000, 1) * 0.2).toString();
  }, [getActiveCard]);

  const triggerSwipe = useCallback((direction: 'left' | 'right') => {
    const card = getActiveCard();
    if (!card) return;

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }

    const duration = getDurationFromCSS('--card-swap-duration', cardStackRef.current) || 600;
    const dirSign = direction === 'right' ? 1 : -1;
    
    // Smooth, gentle easing
    card.style.transition = `transform ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1), opacity ${duration}ms ease`;
    
    // Slide just enough to leave the screen instead of aggressively throwing it
    card.style.setProperty('--swipe-x', `${dirSign * (cardWidth * 1.1)}px`); 
    // Barely rotate it so it feels more like an elegant slide
    card.style.setProperty('--swipe-rotate', `${dirSign * 2}deg`);
    card.style.opacity = '0';

    setTimeout(() => {
      setCardOrder(prev => {
        if (prev.length === 0) return [];
        return [...prev.slice(1), prev[0]];
      });
    }, duration);

  }, [getActiveCard, getDurationFromCSS, cardWidth]);

  // Handle actual back swipe (Arrow Left)
  const triggerSwipeBack = useCallback(() => {
    // Quick pop from the back to the front
    setCardOrder(prev => {
      if (prev.length === 0) return [];
      return [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
    });
  }, []);

  const handleStart = useCallback((clientX: number) => {
    if (isSwiping.current) return;
    isSwiping.current = true;
    startX.current = clientX;
    currentX.current = clientX;
    const card = getActiveCard();
    if (card) card.style.transition = 'none';
  }, [getActiveCard]);

  const handleEnd = useCallback(() => {
    if (!isSwiping.current) return;
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }

    const deltaX = currentX.current - startX.current;
    const threshold = 150; // Increased threshold required to trigger swipe
    const duration = getDurationFromCSS('--card-swap-duration', cardStackRef.current) || 600;
    const card = getActiveCard();

    if (card) {
      card.style.transition = `transform ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1), opacity ${duration}ms ease`;

      if (Math.abs(deltaX) > threshold) {
        const direction = Math.sign(deltaX) > 0 ? 'right' : 'left';
        // Elegant visual throw
        card.style.setProperty('--swipe-x', `${Math.sign(deltaX) * (cardWidth * 1.1)}px`);
        card.style.setProperty('--swipe-rotate', `${Math.sign(deltaX) * 2}deg`);
        card.style.opacity = '0';

        setTimeout(() => {
          setCardOrder(prev => {
            if (prev.length === 0) return [];
            return [...prev.slice(1), prev[0]];
          });
        }, duration);
      } else {
        applySwipeStyles(0); // Snap back to center
        updatePositions();
      }
    }

    isSwiping.current = false;
    startX.current = 0;
    currentX.current = 0;
  }, [getDurationFromCSS, getActiveCard, applySwipeStyles, cardWidth, updatePositions]);

  const handleMove = useCallback((clientX: number) => {
    if (!isSwiping.current) return;
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    animationFrameId.current = requestAnimationFrame(() => {
      currentX.current = clientX;
      const deltaX = currentX.current - startX.current;
      applySwipeStyles(deltaX);
    });
  }, [applySwipeStyles]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        triggerSwipe('right');
      } else if (e.key === 'ArrowLeft') {
        triggerSwipeBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerSwipe, triggerSwipeBack]);

  useEffect(() => {
    const cardStackElement = cardStackRef.current;
    if (!cardStackElement) return;

    const handlePointerDown = (e: PointerEvent) => {
      // Prevent default on mouse down for smoother interactions
      if (e.pointerType === 'mouse') {
        e.preventDefault();
      }
      handleStart(e.clientX);
    };
    const handlePointerMove = (e: PointerEvent) => {
      handleMove(e.clientX);
    };

    // Global pointerup to catch release outside element
    const handleGlobalPointerUp = () => {
      if (isSwiping.current) handleEnd();
    };

    cardStackElement.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handleGlobalPointerUp);

    return () => {
      cardStackElement.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handleGlobalPointerUp);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleStart, handleMove, handleEnd]);

  useEffect(() => {
    // Slight delay to ensure cards render before transition applies 
    requestAnimationFrame(() => {
      updatePositions();
    });
  }, [cardOrder, updatePositions]);

  return (
    <section
      className={`relative flex items-center justify-center select-none z-10 w-full max-w-[100vw] ${className}`}
      ref={cardStackRef}
      style={{
        height: cardHeight + 40,
        touchAction: 'none',
        transformStyle: 'preserve-3d',
        '--card-perspective': '1600px',
        '--card-z-offset': '10px', // closer stack
        '--card-y-offset': '10px',
        '--card-max-z-index': imageList.length.toString(),
        '--card-swap-duration': '0.6s', // doubled the transition speed for elegance
      } as React.CSSProperties}
    >
      {/* Visual Navigation Arrows */}
      <button 
        onClick={(e) => { e.stopPropagation(); triggerSwipeBack(); }}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-[100] w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/30 border border-white/10 text-white backdrop-blur-sm hover:bg-white/10 hover:scale-105 transition-all outline-none cursor-pointer"
        aria-label="Previous Image"
      >
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 object-contain">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={(e) => { e.stopPropagation(); triggerSwipe('right'); }}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-[100] w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/30 border border-white/10 text-white backdrop-blur-sm hover:bg-white/10 hover:scale-105 transition-all outline-none cursor-pointer"
        aria-label="Next Image"
      >
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 object-contain">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {cardOrder.map((originalIndex, displayIndex) => (
        <article
          key={`${imageList[originalIndex]}-${originalIndex}`}
          className="image-card absolute cursor-grab active:cursor-grabbing
                     border border-white/5 rounded-[24px]
                     shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden will-change-transform bg-[#0a0a0a]"
          style={{
            '--i': displayIndex.toString(),
            zIndex: imageList.length - displayIndex,
            width: '90%',
            maxWidth: cardWidth,
            height: cardHeight,
            transform: `perspective(var(--card-perspective))
                       translateZ(calc(-1 * var(--card-z-offset) * var(--i)))
                       translateY(calc(var(--card-y-offset) * var(--i)))
                       translateX(var(--swipe-x, 0px))
                       rotateY(var(--swipe-rotate, 0deg))`
          } as React.CSSProperties}
        >
          <img
            src={imageList[originalIndex]}
            alt={`Chaos Look ${originalIndex + 1}`}
            className="w-full h-full object-contain select-none pointer-events-none" 
            draggable={false}
          />
        </article>
      ))}
    </section>
  );
};
