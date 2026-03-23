"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const ProjectDetail = dynamic(() => import("./ProjectDetail"), {
  ssr: false,
});

const projects = [
  {
    id: "1",
    title: "Aethereal",
    category: "Digital Couture",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    description: "Gravity-defying fluid simulations. The unseen forces of nature.",
    // Styling overrides for asymmetrical layout
    className: "col-span-12 md:col-span-7 h-[70vh] md:h-[120vh] mt-0",
    textClass: "bottom-10 right-10 text-right",
  },
  {
    id: "2",
    title: "Neon Void",
    category: "Streetwear 3000",
    image: "https://images.unsplash.com/photo-1550614000-4b95f463cb4e?q=80&w=1200&auto=format&fit=crop",
    description: "Cyberpunk aesthetics merging with sustainable physical materials.",
    className: "col-span-12 md:col-span-4 md:col-start-9 h-[50vh] md:h-[80vh] md:-mt-[40vh]",
    textClass: "-bottom-10 left-0",
  },
  {
    id: "3",
    title: "Obsidian",
    category: "Avant-Garde",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop",
    description: "Minimalist brutalism translated into wearable armor.",
    className: "col-span-12 md:col-span-5 md:col-start-2 h-[60vh] md:h-[90vh] mt-20 md:mt-32",
    textClass: "top-10 -left-10",
  },
  {
    id: "4",
    title: "Lumo-Flora",
    category: "Bio-fabrication",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop",
    description: "Synthesized biology interwoven with digital fibers.",
    className: "col-span-12 md:col-span-8 md:col-start-5 h-[80vh] md:h-[100vh] mt-20 md:-mt-[20vh]",
    textClass: "bottom-20 left-20",
  }
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = gsap.utils.toArray(".lookbook-item");
    
    items.forEach((item: any) => {
      gsap.fromTo(item, 
        { y: 150, opacity: 0, filter: "blur(10px)" },
        { 
          y: 0, 
          opacity: 1, 
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} id="work" className="relative w-full min-h-screen bg-background text-foreground py-40 z-10 overflow-hidden">
      
      <div className="container mx-auto px-6 mb-40">
        <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.5em] text-neutral-500 mb-4">
          [ Selected Archives ]
        </h2>
        <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mix-blend-difference">
          The <br/> Lookbook.
        </h3>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-12 gap-x-6 gap-y-32">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`lookbook-item relative w-full group cursor-pointer ${project.className}`}
            onClick={() => setSelectedProject(project)}
            data-cursor="hover"
          >
            
            <motion.div 
              layoutId={`project-image-${project.id}`}
              className="relative w-full h-full overflow-hidden rounded-none"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity will-change-transform"
                whileHover={{ scale: 1.05, filter: "blur(4px) contrast(150%)", opacity: 0.5 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              />
            </motion.div>

            <motion.div 
              layoutId={`project-text-${project.id}`}
              className={`absolute z-20 pointer-events-none mix-blend-difference ${project.textClass}`}
            >
              <span className="text-neutral-400 font-serif italic text-lg md:text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">{project.category}</span>
              <h3 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white leading-[0.8]">{project.title}</h3>
            </motion.div>

            {/* Hover distortion overlay fake using CSS border/glow */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-1000 pointer-events-none mix-blend-overlay" />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
      
    </section>
  );
}
