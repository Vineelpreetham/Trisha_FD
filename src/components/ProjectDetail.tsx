"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function ProjectDetail({ project, onClose }: { project: any, onClose: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [0.8, 0.2]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  useEffect(() => {
    document.documentElement.classList.add("lenis-stopped");
    return () => {
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9000] bg-[#050505] overflow-y-auto no-scrollbar"
      ref={containerRef}
    >
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 z-[10000] p-4 mix-blend-difference text-white hover:scale-90 transition-transform"
        data-cursor="hover"
      >
        <X size={40} className="stroke-1" />
      </button>

      <div className="relative h-[150vh] w-full flex flex-col items-center justify-start pointer-events-none">
        <motion.div
           layoutId={`project-image-${project.id}`}
           transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
           className="fixed top-0 left-0 w-full h-screen origin-center"
           style={{ scale: imageScale, opacity: imageOpacity }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale contrast-125" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent" />
        </motion.div>

        <motion.div 
          layoutId={`project-text-${project.id}`}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="relative z-10 w-full h-screen flex flex-col justify-end pb-32 px-10 md:px-20 mix-blend-difference"
          style={{ y: textY }}
        >
           <span className="text-neutral-500 font-serif italic text-2xl md:text-3xl">{project.category}</span>
           <h1 className="text-[12vw] font-black uppercase tracking-tighter text-white leading-[0.75] -ml-2">{project.title}</h1>
        </motion.div>
      </div>

      <div className="relative z-20 bg-background pt-32 pb-60 px-6 md:px-20 min-h-screen mix-blend-normal">
        <div className="max-w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          
          <div className="md:col-span-5 md:col-start-2">
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-serif italic leading-[1.3] text-neutral-300 relative"
            >
              <span className="float-left text-9xl leading-[0.8] pr-4 font-black font-sans not-italic text-white">
                {project.description.charAt(0)}
              </span>
              {project.description.slice(1)}
            </motion.p>
          </div>

          <div className="md:col-span-12 mt-40">
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                className="w-full h-[80vh] md:h-[120vh]"
             >
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src={project.image} className="w-full h-full object-cover grayscale contrast-150" alt="Texture Close Up" />
             </motion.div>
             <p className="mt-4 text-xs font-mono uppercase tracking-[0.4em] text-neutral-600 text-right">Fig 1. Texture analysis</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
