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
    title: "Aethereal Collection",
    category: "Digital Couture",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    description: "A gravity-defying collection that visualizes the unseen forces of nature through fluid silk simulations. The pieces breathe and move harmoniously with the wearer.",
  },
  {
    id: "2",
    title: "Neon Void",
    category: "Streetwear 3000",
    image: "https://images.unsplash.com/photo-1550614000-4b95f463cb4e?q=80&w=1200&auto=format&fit=crop",
    description: "Cyberpunk aesthetics merging with sustainable physical materials, born in the neon glow of the metropolis. Emitting light in the darkest corners of the city.",
  },
  {
    id: "3",
    title: "Obsidian Core",
    category: "Avant-Garde",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop",
    description: "Minimalist brutalism translated into wearable armor. A study of shadows and sharp light contrasts, stripping away everything non-essential.",
  },
  {
    id: "4",
    title: "Lumo-Flora",
    category: "Bio-fabrication",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop",
    description: "Garments that grow. Synthesized biology interwoven with digital fibers to create living, breathing couture that flourishes under kinetic energy.",
  }
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const scrollEl = scrollRef.current;
    
    if (!container || !scrollEl) return;

    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".work-item");
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + scrollEl.offsetWidth,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="work" className="relative w-full h-screen bg-neutral-950 overflow-hidden z-10">
      
      <div className="absolute top-20 left-10 md:left-20 z-10 mix-blend-difference pointer-events-none">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
          Selected <br/> Archives
        </h2>
      </div>

      <div ref={scrollRef} className="flex h-full items-center pl-[10vw] md:pl-[20vw] !w-[max-content]">
        {projects.map((project, index) => (
          <div key={project.id} className="work-item relative flex-shrink-0 w-[85vw] md:w-[45vw] h-[55vh] md:h-[65vh] mr-[15vw] flex flex-col justify-center">
            
            <motion.div 
              layoutId={`project-image-${project.id}`}
              className="relative w-full h-full overflow-hidden rounded-sm cursor-pointer group"
              onClick={() => setSelectedProject(project)}
              data-cursor="hover"
              whileHover={{ scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.div>

            <motion.div 
              layoutId={`project-text-${project.id}`}
              className="absolute -bottom-16 left-0 mix-blend-difference pointer-events-none w-full"
            >
              <span className="text-neutral-400 font-mono text-xs md:text-sm uppercase tracking-widest">{project.category}</span>
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white whitespace-nowrap">{project.title}</h3>
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
