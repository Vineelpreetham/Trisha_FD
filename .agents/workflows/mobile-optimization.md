---
description: How to handle mobile optimization when making desktop changes
---

# Mobile Optimization Workflow

## Core Principle
Every page in this project serves both desktop and mobile from the **same codebase**.
- Desktop layout is the **default** rendering path
- Mobile changes are gated behind `isMobile` state detection (JS) or `@media (max-width: 768px)` (CSS)
- **Never modify desktop code paths** when working on mobile

## Architecture Pattern

### JavaScript Detection (for conditional rendering)
```tsx
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 768);
  check();
  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
}, []);
```

### CSS Media Queries (for layout that must not flash)
Use CSS for above-the-fold elements (nav, hero) to avoid desktop-flash-then-mobile-switch:
```css
@media (max-width: 768px) { /* mobile styles */ }
```

### Navigation Pattern
- Both hamburger and inline links are **always in DOM**
- CSS classes `.nav-desktop-links` and `.nav-mobile-burger` toggle visibility via media queries
- Sub-pages use conditional className on `<nav>` to enable `pointer-events` on mobile

## When Adding New Desktop Features

// turbo-all

1. **Build the desktop feature first** — write it without any mobile considerations
2. **Ask the user** before starting mobile optimization: "Should I optimize this for mobile as well?"
3. If yes, add mobile-only overrides using the patterns above
4. **Test at 375×812** viewport before committing
5. Verify no horizontal overflow on mobile
6. Ensure touch targets are ≥ 44px

## Files Modified for Mobile

| File | What's mobile-specific |
|------|----------------------|
| `globals.css` | Safe-area insets, animation keyframes, touch utilities |
| `page.tsx` | Hamburger nav, 100vh hero, vertical fragments |
| `Work.tsx` | `MobileWork` component (single image CTA) |
| `MagneticCursor.tsx` | Hidden on mobile |
| `Providers.tsx` | Lenis smoothTouch disabled |
| `ContactFooter.tsx` | Vertical layout, enlarged touch targets |
| `regilia/page.tsx` | Swipeable snap-scroll gallery |
| `romantiques/page.tsx` | Reduced rotations, one-shot GSAP |
| `bloom/page.tsx` | Reduced gradient height |
| `scroll-cards.tsx` | Smaller card heights |

## Key Rules
- **Breakpoint**: 768px (below = mobile, above = desktop)
- **Never use `display: none` in JS** for nav — use CSS media queries
- **Always test on actual phone** via `http://<local-ip>:3000`
- `next.config.ts` has `allowedDevOrigins` for network testing
