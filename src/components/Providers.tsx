"use client";

import { ReactNode, useEffect, useState } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";

// Automatically reset scroll position on every page navigation.
// Native Next.js <Link> scroll restoration gets hijacked by Lenis physics,
// so we explicitly instruct the Lenis engine to jump to the top instantaneously.
function RouteScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

export default function Providers({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Desktop: smooth lerp scroll. Mobile: native feel with a touch multiplier.
  const lenisOptions = isMobile
    ? { lerp: 0.1, duration: 1.2, smoothWheel: true, smoothTouch: false, touchMultiplier: 2 }
    : { lerp: 0.05, duration: 1.5, smoothWheel: true };

  return (
    <ReactLenis root options={lenisOptions}>
      <RouteScrollReset />
      {children as any}
    </ReactLenis>
  );
}

