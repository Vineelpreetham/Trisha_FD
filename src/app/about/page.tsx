import About from "@/components/About";
import ContactFooter from "@/components/ContactFooter";

export default function AboutPage() {
  return (
    <main className="w-full relative min-h-screen bg-background text-foreground pt-32">
      <About />
      <ContactFooter />
    </main>
  );
}
