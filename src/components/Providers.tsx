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
  // On desktop Safari, smoothWheel fights the browser's own scroll physics and causes jank.
  // Detect Safari and let it handle the wheel event natively — native Safari scroll is buttery.
  // Chrome/Firefox are unaffected and keep Lenis smooth scroll as before.
  const isSafari =
    typeof navigator !== "undefined" &&
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const lenisOptions = { 
    lerp: 0.12, 
    duration: 0.9, 
    smoothWheel: !isSafari,  // disable on Safari — native is faster
    syncTouch: false 
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <RouteScrollReset />
      {children as any}
    </ReactLenis>
  );
}

