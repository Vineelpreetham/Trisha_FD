"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { getCldImageUrl } from "@/lib/cloudinary";

export default function ProjectDetail({ project, onClose }: { project: any, onClose: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]); // Gentle zoom instead of 2.5x extreme zoom
  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);

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
      className="fixed inset-0 z-[9000] bg-[#F8F6F2] overflow-y-auto no-scrollbar"
      ref={containerRef}
    >
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 z-[10000] p-4 text-[#1A1A1A] hover:opacity-50 transition-opacity bg-white/50 backdrop-blur-md rounded-full shadow-sm"
        data-cursor="hover"
      >
        <X size={32} strokeWidth={1.5} />
      </button>

      <div className="relative h-[120vh] w-full flex flex-col items-center justify-start pointer-events-none">
        
        <motion.div
           layoutId={`project-image-${project.id}`}
           transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
           className="absolute top-0 left-0 w-full h-[80vh] origin-center overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img 
            src={getCldImageUrl(project.image, { width: 1920 })} 
            alt={project.title} 
            className="w-full h-full object-cover" 
            style={{ scale: imageScale }}
          />
        </motion.div>

        <motion.div 
          layoutId={`project-text-${project.id}`}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="relative z-10 w-full flex flex-col justify-end pt-[65vh] pb-20 px-10 md:px-20"
          style={{ y: textY }}
        >
           <div className="bg-[#F8F6F2] p-12 shadow-2xl max-w-5xl">
             <span className="text-[#8C7B75] font-sans text-xs tracking-[0.3em] uppercase block mb-4">Case Study — {project.year}</span>
             <h1 className="text-6xl md:text-[8vw] font-serif text-[#1A1A1A] leading-[0.85] tracking-tight">{project.title}</h1>
           </div>
        </motion.div>
      </div>

      <div className="relative z-20 bg-[#F8F6F2] pb-60 px-6 md:px-20 min-h-screen">
        <div className="max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          
          <div className="md:col-span-8 md:col-start-3 text-center md:text-left">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-2xl md:text-4xl font-serif leading-[1.6] text-[#1A1A1A] relative"
            >
              <span className="float-left text-8xl leading-[0.8] pr-6 font-serif text-[#D6CFC7]">
                {project.description.charAt(0)}
              </span>
              {project.description.slice(1)}
            </motion.p>
          </div>

          <div className="md:col-span-10 md:col-start-2 mt-32">
             <motion.div 
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="w-full h-[60vh] md:h-[90vh] shadow-xl"
             >
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src={getCldImageUrl(project.image, { width: 1920 })} className="w-full h-full object-cover" alt="Detail View" />
             </motion.div>
             <p className="mt-4 text-xs font-sans uppercase tracking-[0.2em] text-[#8C7B75] text-center">Fig 1. Fabric tension and seam flow</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
