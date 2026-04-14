"use client";

import { ReactNode, useEffect, useState } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";

// Reset scroll on page navigation — used inside Lenis context
function LenisScrollReset() {
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

// Fallback scroll reset for Safari (no Lenis context available)
function NativeScrollReset() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Providers({ children }: { children: ReactNode }) {
  // On Safari, <ReactLenis root> creates a virtual scroll container that fights
  // Safari's own scroll physics engine — even with smoothWheel:false.
  // The only reliable fix is to skip the entire Lenis wrapper on Safari
  // and let it scroll 100% natively. Chrome/Firefox keep Lenis as before.
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(safari);
  }, []);

  // Safari: pure native scroll — no Lenis at all
  if (isSafari) {
    return (
      <>
        <NativeScrollReset />
        {children}
      </>
    );
  }

  // Chrome / Firefox: full Lenis smooth scroll
  const lenisOptions = {
    lerp: 0.12,
    duration: 0.9,
    smoothWheel: true,
    syncTouch: false,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <LenisScrollReset />
      {children as any}
    </ReactLenis>
  );
}
