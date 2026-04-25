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
    <section id="contact" className="relative w-full min-h-[80vh] flex items-center py-40 bg-[#F8F6F2] overflow-hidden z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-20 w-full flex flex-col items-center text-center">
        
        {/* Header Block */}
        <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-[0.85] tracking-tight">
          Inquiries.
        </h2>
        <p className="mt-6 text-base text-[#1A1A1A]/70 font-sans font-light leading-relaxed">
          Design grows through connection - let’s connect
        </p>
        
        <div className="mt-16 flex flex-col gap-8 text-sm font-sans tracking-[0.2em] uppercase text-[#1A1A1A] items-center">
            <div className="flex flex-col gap-2 items-center">
              <span className="text-[#8C7B75] text-xs">Email</span>
              <a href="mailto:trishavanam@gmail.com" className="hover:text-[#8C7B75] transition-colors lowercase tracking-widest text-lg" data-cursor="hover">trishavanam@gmail.com</a>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <span className="text-[#8C7B75] text-xs">Contact Number</span>
              <a href="tel:+18575066139" className="hover:text-[#8C7B75] transition-colors text-lg" data-cursor="hover">+1 (857) 506-6139</a>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <span className="text-[#8C7B75] text-xs">Location</span>
              <span className="text-lg">New York, NY</span>
            </div>
        </div>

      </div>
    </section>
  );
}
