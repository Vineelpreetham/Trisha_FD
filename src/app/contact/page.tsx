import Contact from "@/components/Contact";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="w-full relative min-h-screen text-[#1A1A1A] pt-32" style={{ background: "linear-gradient(to bottom, #FFFFFF 0%, #F5ECEC 30%, #E8C4C4 65%, #C98484 100%)" }}>
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
