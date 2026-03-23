"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
    <section id="contact" className="relative w-full min-h-screen flex items-center justify-center bg-background overflow-hidden z-10 py-20 px-6">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neutral-600/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-20">
        
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mix-blend-difference mb-8">
            Initiate <br/> Dialogue.
          </h2>
          <p className="text-xl text-neutral-400 font-light max-w-sm mb-12">
            For inquiries regarding bespoke digital couture, collaborations, and futuristic tailoring.
          </p>
          <div className="flex flex-col gap-4 text-sm font-mono tracking-widest uppercase text-neutral-500">
            <a href="mailto:studio@brand.com" className="hover:text-white transition-colors" data-cursor="hover">studio@brand.com</a>
            <a href="tel:+100000000" className="hover:text-white transition-colors" data-cursor="hover">+1 000 000 00</a>
            <p>New York /// Tokyo</p>
          </div>
        </div>

        <div className="relative">
          <motion.form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-8 md:p-12 glassmorphism rounded-2xl relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {isSuccess ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
               >
                 <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center mb-6">
                   <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                   </svg>
                 </div>
                 <h3 className="text-2xl font-bold uppercase tracking-widest mb-2">Transmission Sent</h3>
                 <p className="text-neutral-400 font-light">We will respond shortly.</p>
               </motion.div>
            ) : (
              <>
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full bg-transparent border-b border-white/20 py-4 px-2 text-white outline-none focus:border-white transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="absolute left-2 top-4 text-neutral-500 font-light uppercase tracking-widest text-sm pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white">
                    Name
                  </label>
                </div>
                
                <div className="relative group mt-4">
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full bg-transparent border-b border-white/20 py-4 px-2 text-white outline-none focus:border-white transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute left-2 top-4 text-neutral-500 font-light uppercase tracking-widest text-sm pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white">
                    Email
                  </label>
                </div>

                <div className="relative group mt-4 h-32">
                  <textarea 
                    id="message" 
                    required 
                    className="w-full h-full bg-transparent border-b border-white/20 py-4 px-2 text-white outline-none focus:border-white transition-colors peer resize-none"
                    placeholder=" "
                  />
                  <label htmlFor="message" className="absolute left-2 top-4 text-neutral-500 font-light uppercase tracking-widest text-sm pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white">
                    Message
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="mt-8 relative overflow-hidden group w-full py-4 border border-white/20 rounded-sm uppercase tracking-[0.2em] text-sm hover:border-white transition-colors disabled:opacity-50"
                  data-cursor="hover"
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                    {isSubmitting ? "Transmitting..." : "Send Message"}
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
