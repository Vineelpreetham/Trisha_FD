"use client";

import React, { useState, useEffect } from 'react';
import { 
  Asterisk, Blend, Camera, CircleDot, Compass, Crosshair, 
  Droplet, Eye, Focus, Gem, Hexagon, Layers, Moon 
} from 'lucide-react';

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  
  const options = [
    { title: "Look 01", description: "Chaos collection piece", image: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122831/chaos_1_wc56t3.png", icon: <Asterisk size={18} className="text-white" /> },
    { title: "Look 02", description: "Chaos collection piece", image: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122832/chaos_2_ijqewg.png", icon: <Blend size={18} className="text-white" /> },
    { title: "Look 03", description: "Chaos collection piece", image: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122831/chaos_3_fvnj8k.png", icon: <Camera size={18} className="text-white" /> },
    { title: "Look 04", description: "Chaos collection piece", image: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122831/chaos_4_ph7mc5.png", icon: <CircleDot size={18} className="text-white" /> },
    { title: "Look 05", description: "Chaos collection piece", image: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122833/chaos_5_fngufv.png", icon: <Compass size={18} className="text-white" /> },
    { title: "Look 06", description: "Chaos collection piece", image: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122830/chaos_6_grjmra.png", icon: <Crosshair size={18} className="text-white" /> },
    { title: "Look 07", description: "Chaos collection piece", image: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122830/chaos_7_m2kdxe.png", icon: <Droplet size={18} className="text-white" /> },
    { title: "Look 08", description: "Chaos collection piece", image: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122832/chaos_8_vpkxie.png", icon: <Eye size={18} className="text-white" /> },
    { title: "Look 09", description: "Chaos collection piece", image: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122832/chaos_9_rl0n7z.png", icon: <Focus size={18} className="text-white" /> },
    { title: "Look 10", description: "Chaos collection piece", image: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122832/chaos_10_i39imq.png", icon: <Gem size={18} className="text-white" /> },
    { title: "Look 11", description: "Chaos collection piece", image: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122832/chaos_11_cjhmf9.png", icon: <Hexagon size={18} className="text-white" /> },
    { title: "Look 12", description: "Chaos collection piece", image: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122833/chaos_12_ipv1qo.png", icon: <Layers size={18} className="text-white" /> },
    { title: "Look 13", description: "Chaos collection piece", image: "https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto/v1775122835/chaos_13_czaea9.png", icon: <Moon size={18} className="text-white" /> }
  ];

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 80 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center font-sans w-full"> 
      <div className="options flex w-full max-w-[1300px] h-[550px] mx-0 items-stretch overflow-hidden relative border border-[#292929]">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              ${activeIndex === index ? 'active' : ''}
              group cursor-pointer
            `}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-20px)',
              minWidth: activeIndex === index ? '200px' : '40px', // Adjusted to allow all 13 pieces to fit comfortably
              margin: 0,
              borderRadius: 0,
              borderRight: index < options.length - 1 ? '1px solid #1a1a1a' : 'none',
              backgroundColor: '#18181b',
              boxShadow: activeIndex === index 
                ? '0 20px 60px rgba(0,0,0,0.50)' 
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '12 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow effect */}
            <div 
              className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-40px',
                height: '120px',
                boxShadow: activeIndex === index 
                  ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000' 
                  : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000'
              }}
            ></div>
            
            {/* Label with icon and info */}
            <div className="label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-2 pointer-events-none px-2 md:px-4 gap-2 w-full">
              <div 
                 className="icon min-w-[32px] max-w-[32px] md:min-w-[40px] md:max-w-[40px] h-[32px] md:h-[40px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border border-[#444] flex-shrink-0 flex-grow-0 transition-all duration-200"
                 style={{
                   opacity: activeIndex === index ? 1 : 0.6,
                 }}
              >
                {option.icon}
              </div>
              <div className="info text-white whitespace-pre relative overflow-hidden flex-1">
                <div 
                  className="main font-bold text-sm md:text-lg transition-all duration-700 ease-in-out font-serif tracking-wide"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(15px)'
                  }}
                >
                  {option.title}
                </div>
                <div 
                  className="sub text-[10px] md:text-xs text-gray-300 transition-all duration-700 ease-in-out font-sans uppercase tracking-widest mt-0.5 md:mt-1"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(15px)'
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveSelector;
