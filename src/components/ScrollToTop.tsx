"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "@studio-freight/react-lenis";

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    // 1. Lenis Smooth Scroll context needs to be forced to reset aggressively
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    }
    
    // 2. Native browsers standard reset
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
  }, [pathname, lenis]);

  return null;
}
