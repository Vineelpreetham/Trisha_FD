"use client";

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { title: 'Look 01', url: 'https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122831/chaos_1_wc56t3.png' },
  { title: 'Look 02', url: 'https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122832/chaos_2_ijqewg.png' },
  { title: 'Look 03', url: 'https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122831/chaos_3_fvnj8k.png' },
  { title: 'Look 04', url: 'https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122831/chaos_4_ph7mc5.png' },
  { title: 'Look 05', url: 'https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122833/chaos_5_fngufv.png' },
  { title: 'Look 06', url: 'https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122830/chaos_6_grjmra.png' },
  { title: 'Look 07', url: 'https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122830/chaos_7_m2kdxe.png' },
  { title: 'Look 08', url: 'https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122832/chaos_8_vpkxie.png' },
  { title: 'Look 09', url: 'https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122832/chaos_9_rl0n7z.png' },
  { title: 'Look 10', url: 'https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122832/chaos_10_i39imq.png' },
  { title: 'Look 11', url: 'https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122832/chaos_11_cjhmf9.png' },
  { title: 'Look 12', url: 'https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122833/chaos_12_ipv1qo.png' },
  { title: 'Look 13', url: 'https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122835/chaos_13_czaea9.png' }
];

const FLIP_SPEED = 750;
const flipTiming = { duration: FLIP_SPEED, iterations: 1 };

// flip down
const flipAnimationTop = [
  { transform: 'rotateX(0)' },
  { transform: 'rotateX(-90deg)' },
  { transform: 'rotateX(-90deg)' }
];
const flipAnimationBottom = [
  { transform: 'rotateX(90deg)' },
  { transform: 'rotateX(90deg)' },
  { transform: 'rotateX(0)' }
];

// flip up
const flipAnimationTopReverse = [
  { transform: 'rotateX(-90deg)' },
  { transform: 'rotateX(-90deg)' },
  { transform: 'rotateX(0)' }
];
const flipAnimationBottomReverse = [
  { transform: 'rotateX(0)' },
  { transform: 'rotateX(90deg)' },
  { transform: 'rotateX(90deg)' }
];

export default function FlipGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const uniteRef = useRef<HTMLElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // initialise first image once
  useEffect(() => {
    if (!containerRef.current) return;
    uniteRef.current = Array.from(containerRef.current.querySelectorAll('.unite'));
    defineFirstImg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defineFirstImg = () => {
    uniteRef.current.forEach(setActiveImage);
    setImageTitle();
  };

  const setActiveImage = (el: HTMLElement) => {
    el.style.backgroundImage = `url('${images[currentIndex].url}')`;
  };

  const setImageTitle = () => {
    const gallery = containerRef.current;
    if (!gallery) return;
    gallery.setAttribute('data-title', images[currentIndex].title);
    gallery.style.setProperty('--title-y', '0');
    gallery.style.setProperty('--title-opacity', '1');
  };

  const updateGallery = (nextIndex: number, isReverse = false) => {
    const gallery = containerRef.current;
    if (!gallery) return;

    // determine direction animation arrays
    const topAnim = isReverse ? flipAnimationTopReverse : flipAnimationTop;
    const bottomAnim = isReverse
      ? flipAnimationBottomReverse
      : flipAnimationBottom;

    const overlayTop = gallery.querySelector('.overlay-top');
    const overlayBottom = gallery.querySelector('.overlay-bottom');
    if (overlayTop) overlayTop.animate(topAnim, flipTiming);
    if (overlayBottom) overlayBottom.animate(bottomAnim, flipTiming);

    // hide title
    gallery.style.setProperty('--title-y', '-1rem');
    gallery.style.setProperty('--title-opacity', '0');
    gallery.setAttribute('data-title', '');

    // update images with slight delay so animation looks continuous
    uniteRef.current.forEach((el, idx) => {
      const delay =
        (isReverse && (idx !== 1 && idx !== 2)) ||
        (!isReverse && (idx === 1 || idx === 2))
          ? FLIP_SPEED - 200
          : 0;

      setTimeout(() => setActiveImage(el), delay);
    });

    // reveal new title roughly half‑way through animation
    setTimeout(setImageTitle, FLIP_SPEED * 0.5);
  };

  const updateIndex = (increment: number) => {
    const inc = Number(increment);
    const newIndex = (currentIndex + inc + images.length) % images.length;
    const isReverse = inc < 0;
    setCurrentIndex(newIndex);
    updateGallery(newIndex, isReverse);
  };

  return (
    <div className='w-full flex items-center justify-center font-sans z-10'>
      <div
        className='relative bg-white/10 border border-white/20 p-2 md:p-3 shadow-2xl backdrop-blur-md rounded-lg'
        style={{ '--gallery-bg-color': 'rgba(255 255 255 / 0.075)' } as React.CSSProperties}
      >
        {/* flip gallery */}
        <div
          id='flip-gallery'
          ref={containerRef}
          className='relative w-[340px] h-[220px] md:w-[800px] md:h-[500px] text-center'
          style={{ perspective: '1200px' }}
        >
          <div className='top unite bg-cover bg-no-repeat'></div>
          <div className='bottom unite bg-cover bg-no-repeat'></div>
          <div className='overlay-top unite bg-cover bg-no-repeat'></div>
          <div className='overlay-bottom unite bg-cover bg-no-repeat'></div>
        </div>

        {/* navigation */}
        <div className='absolute top-full right-0 mt-4 flex gap-3'>
          <button
            type='button'
            onClick={() => updateIndex(-1)}
            title='Previous'
            className='text-white flex items-center justify-center w-10 h-10 border border-white/30 rounded-full bg-black/50 opacity-75 hover:opacity-100 hover:scale-110 hover:bg-white hover:text-black transition-all'
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type='button'
            onClick={() => updateIndex(1)}
            title='Next'
            className='text-white flex items-center justify-center w-10 h-10 border border-white/30 rounded-full bg-black/50 opacity-75 hover:opacity-100 hover:scale-110 hover:bg-white hover:text-black transition-all'
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* component-scoped styles that Tailwind cannot express */}
      <style>{`
        #flip-gallery::after {
          content: '';
          position: absolute;
          background-color: rgba(0,0,0,0.8);
          width: 100%;
          height: 2px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: 5;
        }

        #flip-gallery::before {
          content: attr(data-title);
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          font-family: ui-sans-serif, system-ui, sans-serif;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          left: 0.5rem;
          position: absolute;
          top: calc(100% + 1.5rem);
          line-height: 2;
          opacity: var(--title-opacity, 0);
          transform: translateY(var(--title-y, 0));
          transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;
        }

        #flip-gallery > * {
          position: absolute;
          width: 100%;
          height: 50%;
          overflow: hidden;
          background-size: 340px 220px;
        }

        @media (min-width: 768px) {
          #flip-gallery > * {
            background-size: 800px 500px;
          }
          #flip-gallery::before {
            font-size: 1.25rem;
          }
        }

        .top,
        .overlay-top {
          top: 0;
          transform-origin: bottom;
          background-position: top;
        }

        .bottom,
        .overlay-bottom {
          bottom: 0;
          transform-origin: top;
          background-position: bottom;
        }
      `}</style>
    </div>
  );
}
