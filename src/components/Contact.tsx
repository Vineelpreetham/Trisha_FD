"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const SmokeBackground = dynamic(
  () => import("@/components/ui/spooky-smoke-animation").then(mod => mod.SmokeBackground), 
  { ssr: false }
);

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <section id="contact" className="relative w-full min-h-[120vh] bg-background overflow-hidden z-10 py-40">
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen pointer-events-none grayscale">
        <SmokeBackground smokeColor="#808080" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-20 mt-20">
        
        <div className="flex flex-col items-start md:items-end w-full mb-32 mix-blend-difference text-white">
          <h2 className="text-6xl md:text-[10vw] font-serif italic tracking-tight leading-[0.8] pr-0 md:pr-40">
            Let's <br/> Create.
          </h2>
          <div className="flex flex-col gap-2 mt-12 text-sm font-mono tracking-[0.4em] uppercase text-neutral-400 mr-0 md:mr-64 relative">
             <div className="absolute -left-12 top-2 w-8 h-[1px] bg-neutral-600 hidden md:block" />
             <a href="mailto:studio@brand.com" className="hover:text-white transition-colors" data-cursor="hover">studio@brand.com</a>
             <p className="opacity-50">Paris / Neo-Tokyo</p>
          </div>
        </div>

        <motion.form 
          onSubmit={handleSubmit}
          className="relative max-w-4xl mx-auto ml-0 md:ml-32 mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
        >
          {isSuccess ? (
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="h-64 flex flex-col justify-center"
             >
               <h3 className="text-3xl font-serif italic text-white mb-2">Message received.</h3>
               <p className="text-neutral-500 font-mono text-sm tracking-widest uppercase">The transmission is complete.</p>
             </motion.div>
          ) : (
            <div className="flex flex-col gap-16 md:gap-24 relative pl-4 md:pl-20 border-l border-white/10">
              
              <div className="relative group w-[80vw] md:w-[40vw]">
                <input 
                  type="text" 
                  id="name" 
                  required 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl text-white outline-none focus:border-white transition-colors peer rounded-none mix-blend-difference"
                  placeholder=" "
                />
                <label htmlFor="name" className="absolute left-0 top-6 text-neutral-600 font-serif italic text-xl pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-white">
                  Your identity
                </label>
              </div>
              
              <div className="relative group w-[85vw] md:w-[50vw] ml-0 md:ml-20">
                <input 
                  type="email" 
                  id="email" 
                  required 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl text-white outline-none focus:border-white transition-colors peer rounded-none mix-blend-difference"
                  placeholder=" "
                />
                <label htmlFor="email" className="absolute left-0 top-6 text-neutral-600 font-serif italic text-xl pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-white">
                  Your frequency (Email)
                </label>
              </div>

              <div className="relative group w-[90vw] md:w-[60vw]">
                <textarea 
                  id="message" 
                  required 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-3xl text-white outline-none focus:border-white transition-colors peer resize-none min-h-[100px] rounded-none mix-blend-difference"
                  placeholder=" "
                />
                <label htmlFor="message" className="absolute left-0 top-6 text-neutral-600 font-serif italic text-xl pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-white">
                  The discourse
                </label>
              </div>

              <div className="flex justify-start md:justify-end mt-10">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="group flex items-center gap-4 text-sm font-mono uppercase tracking-[0.4em] text-white disabled:opacity-50"
                  data-cursor="hover"
                >
                  <span className="group-hover:-translate-x-4 transition-transform duration-500">
                    {isSubmitting ? "Transmitting" : "Send"}
                  </span>
                  <div className="w-12 h-[1px] bg-white group-hover:w-24 transition-all duration-500" />
                </button>
              </div>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
