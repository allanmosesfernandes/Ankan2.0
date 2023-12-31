import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function VisualMusings({ weeklyInspiration }) {
	const images = weeklyInspiration.nodes;
	return (
		<div className="flex flex-col md:p-12 p-3 w-full bg-[#333333] gap-6">
			<h2 className="lg:text-6xl text-3xl font-medium lg:mt-14 mt-10 leading-8 text-white">
				Visual <span className="text-primary font-seasons">musings</span>
			</h2>
			<p className="text-white text-lg">What's been inspiring me lately?</p>
			<div className="image__grid__container">
				{images.map((image, index) => {
					// Destructure what we need from image object

					const { gatsbyImage } = image.featuredImage.node;
					// Gymnastics to set the image class
					const group = index % 5;
					// Set CSS classes for each group
					const highlightImage = group === 0 ? "highlight" : "secondary";
					const smallest = group === 4 ? "smally" : "";

					return (
						<div key={image.id} className={`${highlightImage} ${smallest}`}>
							<GatsbyImage image={gatsbyImage} className="h-full" alt="" />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default VisualMusings;
