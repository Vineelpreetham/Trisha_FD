"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react";

export default function ProjectDetail({ project, onClose }: { project: any, onClose: () => void }) {
  useEffect(() => {
    // Lock Lenis scroll when overlay is open
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
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className="fixed inset-0 z-[9000] bg-background overflow-y-auto no-scrollbar"
    >
      <button 
        onClick={onClose}
        className="fixed top-8 right-8 z-[10000] p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors"
        data-cursor="hover"
      >
        <X size={24} />
      </button>

      <div className="relative h-[120vh] w-full flex flex-col items-center justify-center">
        <motion.div
           layoutId={`project-image-${project.id}`}
           transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
           className="absolute inset-0 w-full h-[120vh] origin-top"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/20" />
        </motion.div>

        <motion.div 
          layoutId={`project-text-${project.id}`}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="relative z-10 text-center mix-blend-difference mt-32 pointer-events-none"
        >
           <span className="text-neutral-300 font-mono text-sm uppercase tracking-[0.3em]">{project.category}</span>
           <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white mt-4 leading-[0.8]">{project.title}</h1>
        </motion.div>
      </div>

      <div className="relative z-20 bg-background py-32 px-10 md:px-32">
        <div className="max-w-5xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-2xl md:text-5xl font-light leading-snug text-neutral-200 tracking-tight"
          >
            {project.description}
          </motion.p>

          <div className="mt-32 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="md:col-span-7 h-[60vh]"
             >
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src={project.image} className="w-full h-full object-cover grayscale rounded-sm" alt="Detail 1" />
             </motion.div>
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="md:col-span-5 h-[80vh] md:-mt-40"
             >
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src={project.image} className="w-full h-full object-cover grayscale rounded-sm" alt="Detail 2" />
             </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
