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
