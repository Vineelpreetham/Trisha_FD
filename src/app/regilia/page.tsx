import Regilia from "@/components/Regilia";

export const metadata = {
  title: "Regilia | Vogue Editorial",
  description: "Explore the exclusive Regilia collection.",
};

export default function RegiliaPage() {
  return (
    <main className="w-full min-h-screen bg-[#0a0a0a] text-[#ffffff]">
      <Regilia />
    </main>
  );
}
