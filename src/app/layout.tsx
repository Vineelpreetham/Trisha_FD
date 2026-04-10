import type { Metadata } from "next";
import { Inter, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import ScrollToTop from "@/components/ScrollToTop";
import ContactFooter from "@/components/ContactFooter";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata: Metadata = {
  title: "Trisha Vanam",
  description: "A premium fashion editorial experience.",
  icons: {
    icon: [
      { url: "/favicon-v2.png", type: "image/png" },
      { url: "/favicon-v2.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/favicon-v2.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${caveat.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preload" href="/latest-model-cutout.webp" as="image" type="image/webp" />
      </head>
      <body className="antialiased font-sans bg-background text-foreground overflow-x-clip selection:bg-[#8C7B75] selection:text-white" suppressHydrationWarning>
        <div className="noise-overlay pointer-events-none" />
        <div className="ambient-light pointer-events-none" />

        <Providers>
          <ScrollToTop />
          {children}
          <ContactFooter />
        </Providers>
      </body>
    </html>
  );
}