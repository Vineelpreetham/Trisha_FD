"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Simple scroll animation for projects
    const projects = gsap.utils.toArray(".project-card");
    projects.forEach((project: any) => {
      gsap.fromTo(project, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-24 md:py-32 bg-dot-pattern overflow-hidden border-t border-[var(--text-taupe)]/10">
      
      {/* Decorative Spiral Binding on the Left Edge - Hidden on Mobile to preserve reading width */}
      <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-8 md:w-16 flex-col justify-start pt-10 gap-12 z-20 pointer-events-none drop-shadow-md">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex flex-row items-center relative -left-[2px] md:-left-1">
            <div className="w-4 h-4 md:w-6 md:h-6 rounded-r-md bg-[#2A2A2A] shadow-inner" />
            <div className="h-[2px] w-8 md:w-12 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 rotate-[-12deg] shadow-sm ml-[-4px] md:ml-[-10px] z-[-1] rounded-full" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto pl-16 pr-6 md:pl-32 md:pr-12">
        
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="font-serif italic text-4xl md:text-5xl lg:text-[4rem] text-[var(--text-navy)] mb-20 md:mb-32 tracking-wide font-light"
        >
          Featured Projects
        </motion.h2>

        <div className="flex flex-col gap-32 md:gap-40">
          
          {/* Project 1: Modern Romance */}
          <div className="project-card flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Text Side */}
            <div className="flex-1 space-y-4 md:space-y-6 order-2 md:order-1">
              <span className="font-script text-[var(--text-navy)] text-2xl lg:text-3xl tracking-wider opacity-80">{"<Trend Projects>"}</span>
              <h3 className="font-serif italic text-3xl lg:text-[2.5rem] leading-tight text-[var(--text-navy)]">
                Modern Romance - Spring 2025
              </h3>
              <p className="font-sans text-[var(--text-taupe)] text-[0.95rem] md:text-base leading-[1.8] max-w-sm">
                Ethereal and effortlessly feminine, this Romantic Boho capsule blends flowing silhouettes, vintage-inspired lace, and watercolor florals into a dreamy, grounded vision of modern-day softness.
              </p>
              <a href="/projects/modern-romance" className="font-script text-2xl lg:text-3xl text-[var(--text-navy)] hover:opacity-70 transition-opacity mt-4 md:mt-8 flex items-center gap-2 w-fit">
                View Project 
                <span className="font-sans text-sm ml-1 transform hover:translate-x-1 hover:-translate-y-1 transition-transform inline-block">↗</span>
              </a>
            </div>
            
            {/* Image Side */}
            <div className="flex-[1.2] lg:flex-[1.5] w-full order-1 md:order-2">
              <div className="relative w-full aspect-[4/3] rounded-[15px] overflow-hidden drop-shadow-2xl hover:scale-[1.01] transition-transform duration-700 ease-out">
                {/* Moodboard composite image replication */}
                <div className="absolute inset-0 bg-[#A6978C] flex flex-col items-center justify-center p-8">
                   <div className="w-[85%] h-[40%] bg-[#FDF8F7] rounded-[10px] mb-4 shadow-lg border border-[#373151]/10 flex items-center justify-center p-6 relative overflow-hidden">
                     <span className="absolute top-3 w-full flex justify-around text-[6px] tracking-widest text-[var(--text-navy)] opacity-50 uppercase">
                       <span>Feminine</span><span>Craft</span><span>Dreamy</span><span>Romantic</span><span>Vintage</span>
                     </span>
                     <h4 className="font-serif text-3xl md:text-5xl text-[var(--text-navy)] font-light tracking-widest uppercase flex flex-col items-center text-center leading-[0.8] mt-4">
                       <span className="italic mr-10 scale-125">Modern</span>
                       <span className="font-medium ml-10">Romance</span>
                     </h4>
                   </div>
                   <div className="w-[85%] h-[40%] rounded-[10px] shadow-lg overflow-hidden border border-white/20">
                     <img src="https://images.unsplash.com/photo-1510832198440-a52376950479?q=80&w=1200" alt="Moodboard Bottom" className="w-full h-full object-cover" />
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Office Core */}
          <div className="project-card flex flex-col md:flex-row items-center gap-12 md:gap-20">
             {/* Image Side */}
             <div className="flex-[1.2] lg:flex-[1.5] w-full">
              <div className="relative w-full aspect-[3/4] md:aspect-square lg:aspect-[4/3] rounded-[15px] overflow-hidden drop-shadow-2xl hover:scale-[1.01] transition-transform duration-700 ease-out">
                {/* Using an editorial grey studio shot to simulate the layout */}
                <div className="absolute inset-0 bg-[#656E74] flex p-8 items-center justify-center">
                   <div className="w-full h-full relative overflow-hidden flex flex-col items-end">
                      <h4 className="font-script text-white text-4xl mb-4 rotate-[-10deg] opacity-90 absolute top-4 right-4 z-10 w-fit drop-shadow-md">Work Days</h4>
                      <img src="https://images.unsplash.com/photo-1550614000-4b95d466f2dc?q=80&w=1000" alt="Garment details" className="w-[45%] h-[80%] object-cover shadow-xl absolute right-10 bottom-10 mix-blend-luminosity brightness-110" />
                      <div className="absolute left-8 bottom-20 w-[40%] flex flex-col gap-4">
                        <img src="https://images.unsplash.com/photo-1596484351508-251ccefc3eb2?q=80&w=600" alt="Fabric detail" className="w-full aspect-square object-cover shadow-lg border-4 border-white rotate-[5deg] scale-90" />
                        <img src="https://images.unsplash.com/photo-1543076499-a6133ebfb017?q=80&w=600" alt="Fabric detail" className="w-full aspect-[4/3] object-cover shadow-lg rotate-[-8deg] scale-105" />
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="flex-1 space-y-4 md:space-y-6 pl-0 md:pl-10">
              <span className="font-script text-[var(--text-navy)] text-2xl lg:text-3xl tracking-wider opacity-80">{"<Openline>"}</span>
              <h3 className="font-serif italic text-3xl lg:text-[2.5rem] leading-tight text-[var(--text-navy)]">
                Office Core – Fall 2024
              </h3>
              <p className="font-sans text-[var(--text-taupe)] text-[0.95rem] md:text-base leading-[1.8] max-w-sm">
                A refined blend of tailored ease and street-smart polish, this Office Core capsule reimagines 9-to-5 dressing with boxy blazers, pleated minis, crisp shirtings, and menswear textures made to work anytime, anywhere.
              </p>
              <a href="/projects/office-core" className="font-script text-2xl lg:text-3xl text-[var(--text-navy)] hover:opacity-70 transition-opacity mt-4 md:mt-8 flex items-center gap-2 w-fit">
                View Project 
                <span className="font-sans text-sm ml-1 transform hover:translate-x-1 hover:-translate-y-1 transition-transform inline-block">↗</span>
              </a>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
