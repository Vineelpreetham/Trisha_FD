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
  // Use a slightly faster lerp and syncTouch for absolute smoothness globally without lag
  const lenisOptions = { 
    lerp: 0.12, 
    duration: 0.9, 
    smoothWheel: true,
    syncTouch: false 
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <RouteScrollReset />
      {children as any}
    </ReactLenis>
  );
}

