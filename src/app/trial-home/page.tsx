"use client";

import React from "react";
import Script from "next/script";

export default function StitchTrialHome() {
  return (
    <>
      <Script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" strategy="beforeInteractive" />
      <Script id="tailwind-config" strategy="beforeInteractive">
        {`
          tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "on-primary-container": "#ff907f",
                        "outline-variant": "#e3beb8",
                        "inverse-on-surface": "#f4f0eb",
                        "on-tertiary": "#ffffff",
                        "background": "#fdf9f3",
                        "secondary-fixed-dim": "#d7c3b2",
                        "error-container": "#ffdad6",
                        "secondary-container": "#f4dfcd",
                        "primary-fixed": "#ffdad4",
                        "on-error": "#ffffff",
                        "on-tertiary-fixed-variant": "#46464c",
                        "on-secondary-fixed-variant": "#524438",
                        "tertiary-fixed": "#e3e1e9",
                        "surface-container-lowest": "#ffffff",
                        "on-surface": "#1c1c19",
                        "surface-bright": "#fdf9f3",
                        "on-primary": "#ffffff",
                        "surface-tint": "#b52619",
                        "inverse-surface": "#31302d",
                        "surface-container-highest": "#e6e2dd",
                        "outline": "#8e706b",
                        "surface-container-low": "#f7f3ee",
                        "on-background": "#1c1c19",
                        "on-tertiary-fixed": "#1a1b21",
                        "error": "#ba1a1a",
                        "primary-container": "#8b0000",
                        "surface-dim": "#ddd9d4",
                        "on-primary-fixed-variant": "#920703",
                        "surface-container-high": "#ece7e2",
                        "on-secondary-container": "#716254",
                        "on-secondary": "#ffffff",
                        "on-secondary-fixed": "#241a0f",
                        "surface-variant": "#e6e2dd",
                        "tertiary-container": "#414248",
                        "tertiary-fixed-dim": "#c7c6cd",
                        "tertiary": "#2b2c32",
                        "secondary-fixed": "#f4dfcd",
                        "on-error-container": "#93000a",
                        "on-primary-fixed": "#410000",
                        "surface": "#fdf9f3",
                        "secondary": "#6b5c4e",
                        "surface-container": "#f1ede8",
                        "primary": "#610000",
                        "on-tertiary-container": "#afaeb5",
                        "primary-fixed-dim": "#ffb4a8",
                        "on-surface-variant": "#5a403c",
                        "inverse-primary": "#ffb4a8"
                    },
                    fontFamily: {
                        "headline": ["Noto Serif"],
                        "body": ["Inter"],
                        "label": ["Inter"]
                    },
                    borderRadius: { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" },
                },
            },
          }
        `}
      </Script>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .hero-zoom {
            animation: slowZoom 20s ease-in-out infinite alternate;
        }
        @keyframes slowZoom {
            from { transform: scale(1); }
            to { transform: scale(1.15); }
        }
        .text-reveal {
            opacity: 0;
            transform: translateY(20px);
            animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes revealUp {
            to { opacity: 1; transform: translateY(0); }
        }
        .cutout-glow {
            filter: drop-shadow(0 0 40px rgba(97, 0, 0, 0.15));
        }
        body {
            min-height: max(884px, 100dvh);
        }
      `}} />

      <main className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary overflow-x-hidden">
        
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl dark:bg-transparent px-8 py-6 w-full max-w-screen-2xl mx-auto flex justify-between items-center transition-all duration-500">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-red-900 dark:text-red-500 cursor-pointer hover:opacity-70 transition-opacity duration-500" data-icon="menu">menu</span>
<h1 className="text-2xl font-serif font-bold tracking-tighter text-red-950 dark:text-red-50">Trisha.</h1>
</div>
<nav className="hidden md:flex items-center gap-12">
<a className="font-sans tracking-widest uppercase text-xs text-red-800 dark:text-red-400 font-semibold border-b border-red-900/20 py-1" href="#">Home</a>
<a className="font-sans tracking-widest uppercase text-xs text-stone-600 dark:text-stone-400 hover:text-red-900 transition-colors py-1" href="#">Collection</a>
<a className="font-sans tracking-widest uppercase text-xs text-stone-600 dark:text-stone-400 hover:text-red-900 transition-colors py-1" href="#">About</a>
<a className="font-sans tracking-widest uppercase text-xs text-stone-600 dark:text-stone-400 hover:text-red-900 transition-colors py-1" href="#">Contact</a>
</nav>
<button className="font-serif italic text-red-900 dark:text-red-500 hover:opacity-70 transition-opacity duration-500">Contact</button>
</header>
{/*  Main Hero Canvas  */}
<main className="relative h-screen w-full overflow-hidden bg-surface">
{/*  Background Layer  */}
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-surface z-10"></div>
<div className="absolute inset-0 bg-gradient-to-r from-surface/40 via-transparent to-surface/40 z-10"></div>
<img alt="" className="w-full h-full object-cover hero-zoom" data-alt="atmospheric wide shot of a misty editorial fashion set with soft neutral tones and deep red shadows, cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqiH52hqs9tkJ-2lgcb4w28ZTtVPZ2N2gsAI9PEXVlSRluKYZrqok5W4GnCtnGNwAP6xQeuW1H34tt4sh16-OghWnPLABfyOgF2Jz5DO_mHqULN252R80Au1rl68JcpU-4zoBNuV5BnXdaPwGSTp-ftHUQv0_8w8ugiHmefgNHtsctzwEgbyzrhzsoORfNFjjDEjarmTiVK6QLoLBngEt6rF182XxOOPKaxcohbOGVBz0LMo1_9XZeMYndK7R7JL6ZfUPkOa_vzg"/>
</div>
{/*  Model Cutout Layer  */}
<div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
<div className="relative h-[795px] md:h-[839px] w-auto aspect-[3/4] flex items-end justify-center">
<img alt="" className="h-full w-auto object-contain cutout-glow transition-transform duration-700 ease-out" data-alt="full body portrait of a high-fashion model wearing an architectural avant-garde outfit in deep red, professional studio lighting with sharp edges" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqPSi1bBjjBhNk3hICbgDhklrJaVoh1D8XftmFTXPIKd8TUqN96quSP1jZ2Z4eKN0UeeqCZiLFTxTx_HVTmkgIrT-fA4mohJ7pd0JYv8vy00bbJFUtPz82rmTnn6dU328gg8TDLqhrag4wohGIlE4lJIOT7lvm9GcQMobCR5EUMHqXjMYemFXYW0IUrPeiVzbC5mRxBcqCPOMiJwfS_fBOnfY8jDAlDMDvwCdaqVe1f3a3R49IpyBzFE3UCpIttaQdXjKYvkWaog" style={{ maskImage: "linear-gradient(to bottom, black 90%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 90%, transparent 100%)" }}/>
</div>
</div>
{/*  Content Layer  */}
<div className="relative z-30 h-full w-full flex items-center px-8 md:px-24">
<div className="max-w-3xl space-y-6">
<div className="overflow-hidden">
<p className="text-reveal font-sans uppercase tracking-[0.4em] text-[10px] md:text-xs text-on-surface/60 mb-4" style={{ animationDelay: "0.2s" }}>Editorial Portfolio — 2024</p>
</div>
<div className="overflow-hidden">
<h2 className="text-reveal font-headline italic text-4xl md:text-7xl lg:text-8xl text-on-surface leading-[1.1] tracking-tight" style={{ animationDelay: "0.4s" }}>
                        Welcome to my journey <br/>
<span className="text-primary">as a fashion designer</span>
</h2>
</div>
<div className="overflow-hidden pt-8">
<div className="text-reveal flex items-center gap-6" style={{ animationDelay: "0.6s" }}>
<a className="group relative py-3 pr-12 text-xs font-sans uppercase tracking-widest overflow-hidden" href="#">
<span className="relative z-10 group-hover:text-primary transition-colors">Explore Work</span>
<div className="absolute bottom-3 left-0 w-8 h-[1px] bg-primary group-hover:w-full transition-all duration-500"></div>
</a>
<div className="h-[1px] w-24 bg-outline/20"></div>
</div>
</div>
</div>
</div>
{/*  Scroll Indicator  */}
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-4 opacity-40">
<span className="font-sans uppercase tracking-[0.3em] text-[8px]">Scroll</span>
<div className="w-[1px] h-16 bg-gradient-to-b from-on-surface to-transparent"></div>
</div>
</main>
{/*  Navigation Shell for Mobile  */}
<nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-8 px-6 py-3 rounded-full bg-stone-100/50 dark:bg-stone-900/50 border border-white/20 backdrop-blur-lg z-50 shadow-2xl shadow-red-900/5">
<a className="flex items-center justify-center bg-red-950 text-stone-50 rounded-full w-12 h-12 hover:scale-110 transition-transform duration-300" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
</a>
<a className="flex items-center justify-center text-stone-500 dark:text-stone-400 w-12 h-12 hover:scale-110 transition-transform duration-300" href="#">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
</a>
<a className="flex items-center justify-center text-stone-500 dark:text-stone-400 w-12 h-12 hover:scale-110 transition-transform duration-300" href="#">
<span className="material-symbols-outlined" data-icon="info">info</span>
</a>
<a className="flex items-center justify-center text-stone-500 dark:text-stone-400 w-12 h-12 hover:scale-110 transition-transform duration-300" href="#">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
</a>
</nav>
{/*  Additional Editorial Section for Context  */}
<section className="relative bg-surface py-32 px-8 md:px-24">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
<div className="md:col-span-5 space-y-8">
<span className="font-sans uppercase tracking-[0.2em] text-[10px] text-primary font-bold">The Philosophy</span>
<h3 className="font-headline text-4xl md:text-5xl italic text-on-surface">Curating raw emotion into wearable art.</h3>
<p className="text-on-surface/70 leading-relaxed font-light text-lg">
                    Every stitch is a narrative, every fabric a choice of character. My work explores the intersection of traditional craftsmanship and the brutalist silhouettes of the modern era.
                </p>
<div className="pt-4">
<button className="bg-primary text-on-primary px-8 py-4 text-xs font-sans uppercase tracking-widest hover:bg-primary-container transition-colors">
                        View Journal
                    </button>
</div>
</div>
<div className="md:col-span-7 grid grid-cols-2 gap-4">
<div className="aspect-[4/5] bg-surface-container overflow-hidden">
<img alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" data-alt="detailed close-up of luxurious silk fabric draping over a sculptural form, soft ambient light, rich textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcHqD-1hCPk5CS5POi2k9ZMS4dvJskkiQzZENSstARWkIiU-dbcad4JfMwxh-qyfmyAZKiVVfC8wwa_rHTPBO6LljXl1mUTDZv-1V1iXykP5WvvVUq1d-G-2VXiH5RggG7W_4nKE5zWHeBeMSFJXb2rK8PdJ1ZcsG4tFi4o7asuNZKIsTOk_ydnYhrFZwgByfVqLQVuCiDnNV7jE-FgCofdgciUuLOzRWwV4DLabJDjtnmjFlZvjJptnTlMcEAJF_JA_pGcBWaYg"/>
</div>
<div className="aspect-[4/5] bg-surface-container mt-12 overflow-hidden">
<img alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" data-alt="abstract fashion composition with black leather and silver hardware, moody editorial lighting, sharp contrasts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgcez8x5Y8TTv7SA23zfktJHbF5xI6pNTBiulah7Hf7YBntFKBWZzuGX1hL9DFjUFJbDuuF2msZGbBlDHRwMyi1gaPAjvfk5_GYDPf98lTRhPSNuChfRgReCtJvW8tPjgJmBnR_oC7mIS5U5Q5IPGbwS6l5xryOBARRLPqpnpXXcS-QhdqDnEG1lQCaQWiahW4yoius5w9Iu84MvqQxUWt-pCVYVww_WU91hMnm2ygNnV9yUt68pN35iES_JiYWXNbexmZHDcRYA"/>
</div>
</div>
</div>
</section>
{/*  Footer Space to allow scroll  */}
<footer className="h-64 bg-surface-container-low flex items-center justify-center border-t border-outline/5">
<p className="font-sans uppercase tracking-[0.4em] text-[10px] opacity-40">© 2024 Trisha Studio</p>
</footer>

      </main>
    </>
  );
}
