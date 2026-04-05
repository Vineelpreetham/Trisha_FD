"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/collections", label: "Design Diary" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="nav-mobile-burger-container">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 -mr-2 text-white hover:opacity-70 transition-opacity touch-target"
        aria-label="Open Menu"
      >
        <Menu size={28} />
      </button>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] flex flex-col pt-8 bg-[#1a1818]"
            style={{ 
               // Adding subtle radial gradient for premium feel
               background: "radial-gradient(ellipse at top right, #3d0a10 0%, #1a1818 60%)" 
            }}
          >
            {/* Top Bar inside Menu */}
            <div className="flex justify-between items-center px-6 md:px-10 py-6 text-white w-full">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="font-serif text-xl tracking-widest"
              >
                TRISHA VANAM.
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2 text-white hover:opacity-70 transition-opacity touch-target"
                aria-label="Close Menu"
              >
                <X size={32} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center px-10 gap-8 pb-32">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl md:text-5xl font-serif text-white hover:text-[#EB9394] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Accent */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="absolute bottom-10 left-10 text-xs font-sans tracking-[0.2em] uppercase text-white/50"
            >
              Vogue Editorial Portfolio
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
