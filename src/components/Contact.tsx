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
    <section id="contact" className="relative w-full min-h-screen flex items-center justify-center bg-[#F8F6F2] overflow-hidden z-10 py-32 px-6">
      
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-[0.85] tracking-tight mb-8">
            Inquiries.
          </h2>
          <p className="text-lg text-[#1A1A1A]/70 font-sans font-light max-w-sm mb-12 leading-relaxed">
            Design grows through connection - let’s connect. For inquiries regarding bespoke digital couture, collaborations, and futuristic tailoring.
          </p>
          <div className="flex flex-col gap-6 text-sm font-sans tracking-[0.2em] uppercase text-[#1A1A1A]">
            <a href="mailto:trishavanam@gmail.com" className="hover:text-[#8C7B75] transition-colors" data-cursor="hover">trishavanam@gmail.com</a>
            <a href="tel:+18575066139" className="hover:text-[#8C7B75] transition-colors" data-cursor="hover">+1 (857) 506-6139</a>
            <p className="text-[#1A1A1A]/50">New York, NY</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative">
          <motion.form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-8 md:p-12 bg-white shadow-2xl rounded-2xl relative border border-black/5"
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
                 <div className="w-16 h-16 rounded-full border border-[#8C7B75]/50 flex items-center justify-center mb-6">
                   <svg className="w-8 h-8 text-[#8C7B75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                   </svg>
                 </div>
                 <h3 className="text-2xl font-serif text-[#1A1A1A] tracking-wide mb-2">Message Sent</h3>
                 <p className="text-[#1A1A1A]/60 font-sans font-light">I will respond shortly.</p>
               </motion.div>
            ) : (
              <>
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-4 px-2 text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="absolute left-2 top-4 text-[#1A1A1A]/50 font-sans font-light uppercase tracking-widest text-sm pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#1A1A1A] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#1A1A1A]">
                    Name
                  </label>
                </div>
                
                <div className="relative group mt-4">
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-4 px-2 text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute left-2 top-4 text-[#1A1A1A]/50 font-sans font-light uppercase tracking-widest text-sm pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#1A1A1A] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#1A1A1A]">
                    Email
                  </label>
                </div>

                <div className="relative group mt-4 h-32">
                  <textarea 
                    id="message" 
                    required 
                    className="w-full h-full bg-transparent border-b border-[#1A1A1A]/20 py-4 px-2 text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors peer resize-none"
                    placeholder=" "
                  />
                  <label htmlFor="message" className="absolute left-2 top-4 text-[#1A1A1A]/50 font-sans font-light uppercase tracking-widest text-sm pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#1A1A1A] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#1A1A1A]">
                    Message
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="mt-8 relative overflow-hidden group w-full py-4 border border-[#1A1A1A] bg-[#1A1A1A] text-white rounded-sm uppercase tracking-[0.2em] text-sm hover:bg-transparent hover:text-[#1A1A1A] transition-colors duration-500 disabled:opacity-50"
                  data-cursor="hover"
                >
                  <span className="relative z-10 transition-colors duration-500">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
