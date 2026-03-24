import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import MagneticCursor from "@/components/MagneticCursor";
import Link from "next/link";

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
          {children}
        </Providers>
      </body>
    </html>
  );
}
