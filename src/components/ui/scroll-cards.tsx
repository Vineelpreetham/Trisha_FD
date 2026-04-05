"use client";
import React, { FC, useEffect, useRef } from "react";
import { useLenis } from "@studio-freight/react-lenis";

// Types
export interface iCardItem {
	title: string;
	description: string;
	tag: string;
	src: string;
	link: string;
	color: string;
	textColor: string;
}

interface iCardProps extends Omit<iCardItem, "src" | "link" | "tag"> {
	i: number;
	src: string;
}

// Components
const Card: FC<iCardProps> = ({
	title,
	description,
	color,
	textColor,
	i,
	src,
}) => {
	return (
		<div className="parallax-card h-[80vh] md:h-[100vh] flex flex-col items-center justify-center sticky top-0 md:p-0 px-3 bg-transparent pt-12 md:pt-16">
			<div
				className="relative flex flex-col h-[68vh] md:h-[85vh] w-auto max-w-[95vw] items-center justify-center mx-auto shadow-2xl overflow-hidden rounded-md"
				style={{backgroundColor: color}}
			>
				<img
					className="w-auto h-full object-contain mix-blend-normal"
					src={src}
					alt="Bloom Collection"
				/>
			</div>
		</div>
	);
};

interface iCardSlideProps {
	items: iCardItem[];
}

const CardsParallax: FC<iCardSlideProps> = ({items}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const lenis = useLenis();

	useEffect(() => {
		let isAnimating = false;
		let currentIndex = 0; // Explicitly track which valid card index we are focusing on
		let animationTimeout: ReturnType<typeof setTimeout>;
		
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				if (e.repeat) return; // Prevent OS keyboard auto-repeat from zooming through pictures
				e.preventDefault();
				
				if (!containerRef.current) return;
				
				const cards = Array.from(containerRef.current.querySelectorAll('.parallax-card'));
				if (!cards.length) return;
				
				const viewportY = window.scrollY;
				
				const containerTop = containerRef.current.getBoundingClientRect().top + viewportY;
				const cardHeight = (cards[0] as HTMLElement).offsetHeight;
				const cardTops = cards.map((_, i) => containerTop + i * cardHeight);
				
				// Sync currentIndex if we are NOT actively animating (in case of manual scroll)
				// This ensures we always know exactly which picture is most visible.
				if (!isAnimating) {
					let minDiff = Infinity;
					cardTops.forEach((top, i) => {
						const diff = Math.abs(top - viewportY);
						if (diff < minDiff) {
							minDiff = diff;
							currentIndex = i;
						}
					});
				}
				
				let targetIndex = currentIndex;
				
				if (e.key === "ArrowDown") {
					targetIndex = Math.min(currentIndex + 1, cards.length - 1);
				} else if (e.key === "ArrowUp") {
					targetIndex = Math.max(currentIndex - 1, 0);
				}
				
				// Strictly advance the targeted valid sequential index
				if (targetIndex !== currentIndex) {
					isAnimating = true;
					currentIndex = targetIndex;
					
					const targetY = cardTops[targetIndex];
					
					if (typeof lenis !== 'undefined' && lenis) {
						lenis.scrollTo(targetY, { duration: 1.2, force: true });
					} else {
						window.scrollTo({
							top: targetY,
							behavior: "smooth"
						});
					}
					
					// Slight buffer above 1.2s to guarantee Lenis has officially settled
					clearTimeout(animationTimeout);
					animationTimeout = setTimeout(() => {
						isAnimating = false;
					}, 1250);
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown, { passive: false });
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [lenis]);

	return (
		<div ref={containerRef} className="relative min-h-screen bg-transparent w-full pb-32">
			{items.map((project, i) => {
				return <Card key={`p_${i}`} {...project} i={i} />;
			})}
		</div>
	);
};

export {CardsParallax};
