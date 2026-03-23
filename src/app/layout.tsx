import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import MagneticCursor from "@/components/MagneticCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Vogue Editorial Portfolio",
  description: "A premium fashion editorial experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased font-sans bg-background text-foreground overflow-x-hidden selection:bg-[#8C7B75] selection:text-white">
        <div className="noise-overlay pointer-events-none" />
        <div className="ambient-light pointer-events-none" />
        
        <Providers>
          <MagneticCursor />
          <nav className="fixed top-0 left-0 w-full z-50 p-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference pointer-events-auto">
            <div className="text-2xl font-serif tracking-tight text-white mix-blend-difference z-50">Studio.</div>
            <div className="flex gap-8 text-sm font-sans tracking-[0.2em] uppercase text-white mix-blend-difference z-50">
              <a href="#about" className="hover:opacity-60 transition-opacity" data-cursor="hover">Philosophy</a>
              <a href="#work" className="hover:opacity-60 transition-opacity" data-cursor="hover">Editorials</a>
              <a href="#contact" className="hover:opacity-60 transition-opacity" data-cursor="hover">Inquiries</a>
            </div>
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  );
}
