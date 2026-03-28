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
		<div className="h-screen flex flex-col items-center justify-center sticky top-0 md:p-0 px-4 bg-black">
			<div
				className="relative flex flex-col h-[85vh] w-[95vw] md:h-[90vh] md:w-[90vw] items-center justify-center mx-auto shadow-2xl overflow-hidden rounded-2xl"
				style={{backgroundColor: color}}
			>
				<div className="absolute inset-0 z-0">
					<img
						className="w-full h-full object-cover"
						src={src}
						alt="Bloom Collection"
					/>
				</div>
			</div>
		</div>
	);
};

interface iCardSlideProps {
	items: iCardItem[];
}

const CardsParallax: FC<iCardSlideProps> = ({items}) => {
	return (
		<div className="min-h-screen bg-black w-full pb-32">
			{items.map((project, i) => {
				return <Card key={`p_${i}`} {...project} i={i} />;
			})}
		</div>
	);
};

export {CardsParallax};
