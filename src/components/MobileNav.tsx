"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

      {/* Fullscreen Overlay using Portal to escape mix-blend-mode from parent nav */}
      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[999] flex flex-col pt-8 bg-[#1a1818]"
              style={{ 
                 background: "radial-gradient(ellipse at top right, #3d0a10 0%, #1a1818 60%)" 
              }}
            >
              {/* Top Bar inside Menu */}
              <div className="flex justify-between items-center px-6 md:px-10 py-6 text-white w-full">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="inline-block"
                >
                  <img 
                    src="https://res.cloudinary.com/dbeh0eisn/image/upload/f_auto,q_auto,w_200/v1777072569/trisha_vanam_brand_identity_cemr1y.png" 
                    alt="Trisha Vanam Logo" 
                    className="h-16 md:h-20 w-auto" 
                    style={{ filter: "invert(1)", mixBlendMode: "screen" }}
                  />
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

            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
