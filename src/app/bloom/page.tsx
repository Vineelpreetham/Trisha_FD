
import Link from "next/link";

export default function BloomPage() {
  return (
    <main style={{ padding: "8rem 10%", fontFamily: "Inter, sans-serif" }}>
      <Link href="/" style={{ textDecoration: "none", color: "#8A353A" }}>← Back to Portfolio</Link>
      <h1 style={{ marginTop: "2rem", fontSize: "3rem", textTransform: "capitalize" }}>bloom</h1>
      <p>This is a blank page placeholder for the bloom collection.</p>
    </main>
  );
}
