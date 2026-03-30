"use client";
import React, { FC } from "react";

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
		<div className="h-[80vh] md:h-[100vh] flex flex-col items-center justify-center sticky top-0 md:p-0 px-3 bg-transparent pt-12 md:pt-16">
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
	return (
		<div className="min-h-screen bg-transparent w-full pb-32">
			{items.map((project, i) => {
				return <Card key={`p_${i}`} {...project} i={i} />;
			})}
		</div>
	);
};

export {CardsParallax};
