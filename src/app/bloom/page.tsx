"use client";

import Link from "next/link";
import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards";

const cardItems: iCardItem[] = [
  { title: "Look 01", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#1a1a1a", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638002/in_bloom_1_2_qwqaqp.png" },
  { title: "Look 02", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#111111", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638002/in_bloom_2png_2_t83lut.png" },
  { title: "Look 03", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#0a0a0a", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638002/in_bloom_3_y4rjso.png" },
  { title: "Look 04", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#151515", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638002/in_bloom_4_2_dwrezc.png" },
  { title: "Look 05", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#1c1c1c", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638003/in_bloom_5_a8xnsz.png" },
  { title: "Look 06", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#0f0f0f", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638002/in_bloom_6_asc7dq.png" },
  { title: "Look 07", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#1a1a1a", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638003/in_bloom_7_ji0kbd.png" },
  { title: "Look 08", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#121212", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638003/in_bloom_8_apiice.png" },
  { title: "Look 09", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#0c0c0c", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638003/in_bloom_9_kvkh3i.png" },
  { title: "Look 10", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#151515", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638004/in_bloom_10_wwdffg.png" },
  { title: "Look 11", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#1b1b1b", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638004/in_bloom_11_x4euq6.png" },
  { title: "Look 12", description: "In Bloom Collection", tag: "bloom", link: "#", color: "#111111", textColor: "white", src: "https://res.cloudinary.com/dbeh0eisn/image/upload/v1774638004/in_bloom_12_ne0azp.png" }
];

export default function BloomPage() {
  return (
    <main className="w-full min-h-screen bg-black text-[#1a2530] font-sans relative selection:bg-[#fff] selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-center pointer-events-none mix-blend-difference text-white">
        <Link href="/" className="pointer-events-auto font-sans text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
          ← Back
        </Link>
        <div className="font-serif text-sm tracking-widest hidden md:block">TRISHA VANAM.</div>
      </nav>

      <CardsParallax items={cardItems} />

      {/* Footer minimal */}
      <footer className="w-full py-8 border-t border-gray-800 text-center relative z-10 bg-black">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">
          © {new Date().getFullYear()} Trisha Vanam. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
