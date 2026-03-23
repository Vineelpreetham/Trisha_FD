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
    title: "Le Silence",
    category: "Haute Couture",
    year: "2026",
    image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?q=80&w=1200&auto=format&fit=crop",
    description: "An exploration of negative space. Silk draping meticulously constructed around the void.",
    className: "col-span-12 md:col-span-7 h-[80vh] md:h-[130vh]",
    contentClass: "items-end text-right pr-8 pb-8",
  },
  {
    id: "2",
    title: "Symphonie",
    category: "Ready-to-Wear",
    year: "2026",
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1200&auto=format&fit=crop",
    description: "Fluidity and structure. Wearable architecture designed for movement.",
    className: "col-span-12 md:col-span-4 md:col-start-9 h-[60vh] md:h-[90vh] md:mt-[30vh]",
    contentClass: "items-start pl-8 pt-8",
  },
  {
    id: "3",
    title: "L'Ombre",
    category: "Archive Object",
    year: "2025",
    image: "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?q=80&w=1200&auto=format&fit=crop",
    description: "Translating brutalist shadows into deeply textured wool silhouettes.",
    className: "col-span-12 md:col-span-5 md:col-start-2 h-[70vh] md:h-[110vh] mt-24 md:mt-40",
    contentClass: "items-start pl-8 pt-8",
  },
  {
    id: "4",
    title: "Éthéré",
    category: "Digital Prototype",
    year: "2027",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    description: "Bio-reactive materials that shift with the environment.",
    className: "col-span-12 md:col-span-6 md:col-start-7 h-[70vh] md:h-[100vh] mt-24 md:-mt-[15vh]",
    contentClass: "items-end text-right pr-8 pb-8",
  }
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = gsap.utils.toArray(".editorial-item");
    
    items.forEach((item: any) => {
      gsap.fromTo(item, 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} id="work" className="relative w-full min-h-screen bg-[#F8F6F2] py-32 z-10">
      
      <div className="max-w-7xl mx-auto px-6 mb-32 md:mb-48 text-center flex flex-col items-center">
        <h2 className="text-sm font-sans uppercase tracking-[0.4em] text-[#8C7B75] mb-6">
          Selected Editorials
        </h2>
        <h3 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-[0.9] max-w-2xl mx-auto">
          The Archive.
        </h3>
      </div>

      <div className="max-w-[95vw] md:max-w-7xl mx-auto px-6 grid grid-cols-12 gap-x-6 gap-y-20">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`editorial-item relative w-full group cursor-pointer ${project.className}`}
            onClick={() => setSelectedProject(project)}
            data-cursor="hover"
          >
            
            <motion.div 
              layoutId={`project-image-${project.id}`}
              className="relative w-full h-full overflow-hidden shrink-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out will-change-transform scale-100 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-[#D6CFC7]/10 group-hover:bg-transparent transition-colors duration-1000" />
            </motion.div>

            <motion.div 
              layoutId={`project-text-${project.id}`}
              className={`absolute inset-0 z-20 pointer-events-none flex flex-col ${project.contentClass}`}
            >
              <span className="text-white drop-shadow-md font-sans text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-4 group-hover:translate-y-0 relative z-30">{project.category} — {project.year}</span>
              <h3 className="text-4xl md:text-6xl font-serif text-white drop-shadow-md leading-[0.9] mt-2 relative z-30">{project.title}</h3>
              {/* Soft dark gradient behind text for legibility without ruining the bright aesthetic */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(26,26,26,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-20 pointer-events-none" />
            </motion.div>
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
