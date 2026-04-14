import Contact from "@/components/Contact";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="w-full relative min-h-screen bg-background text-foreground pt-32">
      <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-10 flex justify-between items-center mix-blend-difference text-white pointer-events-none transform-gpu safe-top">
        <Link href="/" className="pointer-events-auto font-sans text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity touch-target">
          ← Back
        </Link>
        <div className="font-serif text-sm tracking-widest hidden md:block">TRISHA VANAM.</div>
      </nav>
      <Contact />
    </main>
  );
}
