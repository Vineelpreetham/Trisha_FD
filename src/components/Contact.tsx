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
    <section id="contact" className="relative w-full py-40 bg-[#F8F6F2] overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* Header Block */}
        <div className="flex flex-col justify-start">
          <h2 className="text-6xl md:text-[8vw] font-serif text-[#1A1A1A] leading-[0.85] tracking-tight">
            Inquiries.
          </h2>
          <p className="mt-8 text-base text-[#1A1A1A]/70 font-sans font-light leading-relaxed max-w-sm">
            For bespoke commissions, editorial placements, or creative partnerships.
          </p>
          
          <div className="mt-20 flex flex-col gap-6 text-sm font-sans tracking-[0.2em] uppercase text-[#1A1A1A]">
             <div className="flex flex-col gap-1">
               <span className="text-[#8C7B75] text-xs">General</span>
               <a href="mailto:studio@etermite.com" className="hover:text-[#8C7B75] transition-colors w-fit" data-cursor="hover">studio@eternite.com</a>
             </div>
             <div className="flex flex-col gap-1">
               <span className="text-[#8C7B75] text-xs">Press / Media</span>
               <a href="mailto:press@etermite.com" className="hover:text-[#8C7B75] transition-colors w-fit" data-cursor="hover">press@eternite.com</a>
             </div>
          </div>
        </div>

        {/* Minimal Form Block */}
        <div className="flex flex-col justify-center">
          <motion.form 
            onSubmit={handleSubmit}
            className="relative w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {isSuccess ? (
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="h-[300px] flex flex-col justify-center items-center text-center border border-[#D6CFC7]"
               >
                 <h3 className="text-3xl font-serif text-[#1A1A1A] mb-4">Request Sent</h3>
                 <p className="text-[#8C7B75] font-sans text-sm tracking-[0.1em] uppercase">Our atelier will respond shortly.</p>
               </motion.div>
            ) : (
              <div className="flex flex-col gap-12 border-l border-[#D6CFC7] pl-8 md:pl-16">
                
                <div className="relative group w-full">
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full bg-transparent border-b border-[#D6CFC7] py-4 text-xl md:text-2xl text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors peer rounded-none placeholder-transparent"
                    placeholder="Name"
                  />
                  <label htmlFor="name" className="absolute left-0 top-5 text-[#8C7B75] font-sans tracking-wide text-sm pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#1A1A1A] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#1A1A1A]">
                    Full Name
                  </label>
                </div>
                
                <div className="relative group w-full">
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full bg-transparent border-b border-[#D6CFC7] py-4 text-xl md:text-2xl text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors peer rounded-none placeholder-transparent"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-0 top-5 text-[#8C7B75] font-sans tracking-wide text-sm pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#1A1A1A] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#1A1A1A]">
                    Email Address
                  </label>
                </div>

                <div className="relative group w-full">
                  <textarea 
                    id="message" 
                    required 
                    className="w-full bg-transparent border-b border-[#D6CFC7] py-4 text-lg md:text-xl text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors peer resize-none min-h-[120px] rounded-none placeholder-transparent"
                    placeholder="Message"
                  />
                  <label htmlFor="message" className="absolute left-0 top-5 text-[#8C7B75] font-sans tracking-wide text-sm pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#1A1A1A] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#1A1A1A]">
                    Project Details or Inquiry
                  </label>
                </div>

                <div className="flex mt-8">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group bg-[#1A1A1A] text-white px-10 py-5 text-xs font-sans uppercase tracking-[0.2em] hover:bg-[#8C7B75] transition-colors disabled:opacity-50"
                    data-cursor="hover"
                  >
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </button>
                </div>
              </div>
            )}
          </motion.form>
        </div>

      </div>
    </section>
  );
}
