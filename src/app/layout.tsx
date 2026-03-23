import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import MagneticCursor from "@/components/MagneticCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Digital Fashion Exhibition",
  description: "A next-generation fashion portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="antialiased font-sans bg-background text-foreground overflow-x-hidden selection:bg-white/20">
        <div className="noise-overlay pointer-events-none" />
        <div className="ambient-light pointer-events-none" />
        <div className="light-leak-1" />
        <div className="light-leak-2" />
        
        <Providers>
          <MagneticCursor />
          <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference pointer-events-auto">
            <div className="text-xl font-bold tracking-tighter uppercase">Brand.</div>
            <div className="flex gap-6 text-sm font-medium tracking-wide">
              <a href="#about" className="hover:opacity-70 transition-opacity" data-cursor="hover">About</a>
              <a href="#work" className="hover:opacity-70 transition-opacity" data-cursor="hover">Work</a>
              <a href="#contact" className="hover:opacity-70 transition-opacity" data-cursor="hover">Contact</a>
            </div>
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  );
}
