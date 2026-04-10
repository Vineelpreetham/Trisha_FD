"use client";
import { motion } from "framer-motion";

export default function CollectionsPage() {
  const collections = [
    {
      title: "Category A",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop",
      desc: "A study in structure and shadow."
    },
    {
      title: "Category B",
      image: "https://images.unsplash.com/photo-1550614000-4b95f463cb4e?q=80&w=800&auto=format&fit=crop",
      desc: "Ethereal lightness and radical transparency."
    },
    {
      title: "Category C",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
      desc: "Timeless silhouettes curated from our highest moments."
    },
    {
      title: "Category D",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
      desc: "A vision cast in perpetual motion."
    }
  ];

  return (
    <main className="w-full relative min-h-screen bg-background text-foreground pt-40 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] mb-4">Collections.</h1>
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-[#8C7B75] mb-20 border-b border-[#D6CFC7] pb-8">
            The Anthology of Form
          </p>
        </motion.div>

        {/* 2x2 Grid for 4 items gracefully wrapped */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 pt-8">
          {collections.map((col, i) => (
             <motion.div 
               key={i}
               className="group cursor-pointer flex flex-col"
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 * i }}
             >
               <div className="overflow-hidden w-full aspect-[4/5] mb-8">
                 <img 
                   src={col.image} 
                   alt={col.title} 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:filter group-hover:grayscale-[50%]"
                 />
               </div>
               <h2 className="text-3xl font-serif text-[#1A1A1A] group-hover:text-[#8C7B75] transition-colors">{col.title}</h2>
               <p className="mt-4 text-xs font-sans tracking-[0.2em] uppercase text-[#8C7B75] mix-blend-multiply opacity-80">{col.desc}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
"""

with open(f"{col_dir}/page.tsx", "w") as f:
    f.write(page_content)

print("Collections page updated properly.")
' exit code 0
2026-03-23 16:54:11.915 [info] I0323 16:54:11.914989  3729 planner_generator.go:285] Requesting planner with 151 chat messages at model retry attempt 1 and API retry attempt 1
2026-03-23 16:54:21.623 [info] I0323 16:54:21.622868  3729 http_helpers.go:123] URL: https://daily-cloudcode-pa.googleapis.com/v1internal:streamGenerateContent?alt=sse Trace: 0x2e0492fb53ad090e
2026-03-23 16:54:27.464 [info] E0323 16:54:27.464191  3729 log.go:398] internal: internal error
2026-03-23 16:54:27.532 [info] I0323 16:54:27.532052  3729 planner_generator.go:206] Model output error: current task scope is too simple, consider proceeding without a task boundary
2026-03-23 16:54:27.532 [info] E0323 16:54:27.532073  3729 log.go:398] current task scope is too simple, consider proceeding without a task boundary
2026-03-23 16:54:27.539 [info] I0323 16:54:27.539371  3729 planner_generator.go:285] Requesting planner with 154 chat messages at model retry attempt 2 and API retry attempt 1
2026-03-23 16:54:37.392 [info] I0323 16:54:37.392387  3729 http_helpers.go:123] URL: https://daily-cloudcode-pa.googleapis.com/v1internal:streamGenerateContent?alt=sse Trace: 0x6405fff297638fda
2026-03-23 17:01:06.365 [info] I0323 17:01:06.365310  3729 planner_generator.go:285] Requesting planner with 157 chat messages at model retry attempt 1 and API retry attempt 1
2026-03-23 17:01:16.058 [info] I0323 17:01:16.057842  3729 http_helpers.go:123] URL: https://daily-cloudcode-pa.googleapis.com/v1internal:streamGenerateContent?alt=sse Trace: 0x908a35b674c4568a
2026-03-23 17:01:25.159 [info] E0323 17:01:25.158852  3729 log.go:398] internal: internal error
2026-03-23 17:01:48.751 [info] I0323 17:01:48.751145  3729 planner_generator.go:285] Requesting planner with 160 chat messages at model retry attempt 1 and API retry attempt 1
2026-03-23 17:01:58.413 [info] I0323 17:01:58.413483  3729 http_helpers.go:123] URL: https://daily-cloudcode-pa.googleapis.com/v1internal:streamGenerateContent?alt=sse Trace: 0xe59b21bd3ede3a31
2026-03-23 17:02:06.177 [info] (Antigravity) 2026-03-23 17:02:06.176 [INFO]: [Terminal] Command completed: curl -s https://dribbble.com/shots/26937070-Catalog-Flip | grep -i 'description' exit code 1
2026-03-23 17:02:06.202 [info] I0323 17:02:06.202082  3729 planner_generator.go:285] Requesting planner with 162 chat messages at model retry attempt 1 and API retry attempt 1
2026-03-23 17:02:16.249 [info] I0323 17:02:16.249632  3729 http_helpers.go:123] URL: https://daily-cloudcode-pa.googleapis.com/v1internal:streamGenerateContent?alt=sse Trace: 0xfddbd3489ab0bd83
2026-03-23 17:03:04.589 [info] E0323 17:03:04.588897  3729 log.go:398] internal: internal error
2026-03-23 17:03:07.945 [info] (Antigravity) 2026-03-23 17:03:07.945 [INFO]: [Terminal] Command completed: python3 -c '
import os

comp_path = "/Users/guduruashwithareddy/.gemini/antigravity/brain/abfa24ff-5852-4f69-b2c3-9f91c151f19e/Trisha_FD_workspace/src/components/CatalogFlip.tsx"

code = """\"use client\";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const defaultImages = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200",
  "https://images.unsplash.com/photo-1550614000-4b95f463cb4e?q=80&w=1200",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200",
];

export default function CatalogFlip() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    // If at the end, reset to 0 (all cards flip back in)
    if (currentIndex >= defaultImages.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="relative w-full py-32 md:py-48 bg-[#F5EBE1] flex flex-col items-center justify-center overflow-hidden" style={{ perspective: "1500px" }}>
      <div className="absolute top-20 text-center z-10 w-full">
        <h2 className="text-sm font-sans tracking-[0.4em] uppercase text-[#8C7B75] mb-4">Editorial Collections</h2>
        <h3 className="text-4xl md:text-6xl font-serif text-[#1A1A1A]">Lookbook Flip</h3>
      </div>
      
      <div 
        className="relative w-[85%] max-w-[400px] aspect-[3/4] md:max-w-[450px] md:h-[650px] mt-16 cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        onClick={handleNext}
      >
        <AnimatePresence mode="popLayout">
          {defaultImages.map((img, i) => {
            if (i < currentIndex) return null;
            
            const position = i - currentIndex;
            if (position > 3) return null;

            return (
              <motion.div
                key={`${img}-${i}`}
                className="absolute inset-0 w-full h-full overflow-hidden shadow-2xl origin-left bg-white border border-[#D6CFC7]"
                style={{
                  zIndex: defaultImages.length - position,
                }}
                initial={{ opacity: 0, scale: 0.8, x: 50, rotateY: 20 }}
 